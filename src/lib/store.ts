import { useEffect, useRef, useState, useCallback } from 'react';
import type { AppState, SyncSettings, PersonId } from '../types';
import { seedState } from '../seed';
import { loadFromGist, saveToGist, GistError } from './gist';

const STATE_KEY = 'dh-ops:state:v1';
const SETTINGS_KEY = 'dh-ops:settings:v1';

const defaultSettings: SyncSettings = {
  token: '',
  gistId: '',
  filename: 'dreamhelpers-ops.json',
  whoAmI: 'a',
};

function loadLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return { ...fallback, ...parsed } as T;
  } catch {
    return fallback;
  }
}

function saveLocal(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota errors
  }
}

// Backwards-compat: older Gist payloads predate the audits array. Normalize on load.
function normalizeState(s: AppState): AppState {
  return {
    ...s,
    audits: Array.isArray(s.audits) ? s.audits : [],
  };
}

export type SyncStatus = 'idle' | 'loading' | 'saving' | 'ok' | 'error' | 'no-config';

export interface StoreApi {
  state: AppState;
  setState: (updater: (prev: AppState) => AppState) => void;
  settings: SyncSettings;
  setSettings: (next: SyncSettings) => void;
  syncStatus: SyncStatus;
  syncError: string | null;
  lastSyncedAt: string | null;
  pullNow: () => Promise<void>;
  pushNow: () => Promise<void>;
  resetSeed: () => void;
  exportJson: () => string;
  importJson: (raw: string) => void;
}

export function useStore(): StoreApi {
  const [state, setStateRaw] = useState<AppState>(() => normalizeState(loadLocal<AppState>(STATE_KEY, seedState)));
  const [settings, setSettingsRaw] = useState<SyncSettings>(() => loadLocal<SyncSettings>(SETTINGS_KEY, defaultSettings));
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [syncError, setSyncError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const saveTimer = useRef<number | null>(null);
  const lastSavedJson = useRef<string>('');

  // Persist locally on every change.
  useEffect(() => { saveLocal(STATE_KEY, state); }, [state]);
  useEffect(() => { saveLocal(SETTINGS_KEY, settings); }, [settings]);

  // Initial pull when settings become available.
  const haveConfig = !!settings.token && !!settings.gistId;
  useEffect(() => {
    if (!haveConfig) {
      setSyncStatus('no-config');
      return;
    }
    let cancelled = false;
    (async () => {
      setSyncStatus('loading');
      setSyncError(null);
      try {
        const remote = await loadFromGist(settings);
        if (cancelled || !remote) return;
        const normalized = normalizeState(remote.state);
        setStateRaw(normalized);
        lastSavedJson.current = JSON.stringify(normalized);
        setLastSyncedAt(remote.updatedAt);
        setSyncStatus('ok');
      } catch (e) {
        if (cancelled) return;
        setSyncError(e instanceof GistError ? e.message : String(e));
        setSyncStatus('error');
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.token, settings.gistId, settings.filename]);

  // Debounced push on local change.
  useEffect(() => {
    if (!haveConfig) return;
    const json = JSON.stringify(state);
    if (json === lastSavedJson.current) return;
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(async () => {
      setSyncStatus('saving');
      setSyncError(null);
      try {
        await saveToGist(settings, state);
        lastSavedJson.current = json;
        setLastSyncedAt(new Date().toISOString());
        setSyncStatus('ok');
      } catch (e) {
        setSyncError(e instanceof GistError ? e.message : String(e));
        setSyncStatus('error');
      }
    }, 1500);
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, [state, settings, haveConfig]);

  const setState: StoreApi['setState'] = useCallback((updater) => {
    setStateRaw(prev => {
      const next = updater(prev);
      const stamped: AppState = {
        ...next,
        lastUpdatedAt: new Date().toISOString(),
        lastUpdatedBy: (settings.whoAmI as PersonId) ?? next.lastUpdatedBy,
      };
      return stamped;
    });
  }, [settings.whoAmI]);

  const setSettings: StoreApi['setSettings'] = useCallback((next) => {
    setSettingsRaw(next);
  }, []);

  const pullNow = useCallback(async () => {
    if (!haveConfig) {
      setSyncStatus('no-config');
      return;
    }
    setSyncStatus('loading');
    setSyncError(null);
    try {
      const remote = await loadFromGist(settings);
      if (remote) {
        const normalized = normalizeState(remote.state);
        setStateRaw(normalized);
        lastSavedJson.current = JSON.stringify(normalized);
        setLastSyncedAt(remote.updatedAt);
      }
      setSyncStatus('ok');
    } catch (e) {
      setSyncError(e instanceof GistError ? e.message : String(e));
      setSyncStatus('error');
    }
  }, [settings, haveConfig]);

  const pushNow = useCallback(async () => {
    setSyncStatus('saving');
    setSyncError(null);
    try {
      const gistId = await saveToGist(settings, state);
      if (gistId !== settings.gistId) {
        setSettingsRaw(s => ({ ...s, gistId }));
      }
      lastSavedJson.current = JSON.stringify(state);
      setLastSyncedAt(new Date().toISOString());
      setSyncStatus('ok');
    } catch (e) {
      setSyncError(e instanceof GistError ? e.message : String(e));
      setSyncStatus('error');
    }
  }, [settings, state]);

  const resetSeed = useCallback(() => {
    if (!confirm('Reset all tasks and milestones to seed? This cannot be undone.')) return;
    setStateRaw(seedState);
  }, []);

  const exportJson = useCallback(() => JSON.stringify(state, null, 2), [state]);
  const importJson = useCallback((raw: string) => {
    const parsed = JSON.parse(raw) as AppState;
    if (parsed.schemaVersion !== 1) {
      throw new Error(`Unsupported schemaVersion: ${parsed.schemaVersion}`);
    }
    setStateRaw(parsed);
  }, []);

  return {
    state, setState,
    settings, setSettings,
    syncStatus, syncError, lastSyncedAt,
    pullNow, pushNow,
    resetSeed, exportJson, importJson,
  };
}
