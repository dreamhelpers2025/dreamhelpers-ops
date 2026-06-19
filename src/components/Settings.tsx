import { useState } from 'react';
import type { StoreApi } from '../lib/store';
import type { PersonId } from '../types';
import { fmtDateLong, timeAgo } from '../lib/util';

interface Props {
  store: StoreApi;
}

export function Settings({ store }: Props) {
  const [showToken, setShowToken] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);

  const set = store.setSettings;
  const s = store.settings;

  const updateTeam = (id: PersonId, patch: Partial<{ name: string; color: string }>) => {
    store.setState(prev => ({
      ...prev,
      team: { ...prev.team, [id]: { ...prev.team[id], ...patch } },
    }));
  };

  const handleImport = () => {
    setImportError(null);
    try {
      store.importJson(importText);
      setImportText('');
    } catch (e) {
      setImportError(String(e));
    }
  };

  const handleExport = () => {
    const blob = new Blob([store.exportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dreamhelpers-ops-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4 max-w-3xl">
      {/* Team */}
      <section className="card p-4">
        <h2 className="text-sm font-semibold text-ink-100 mb-1">Team</h2>
        <p className="text-xs text-ink-400 mb-3">Rename Person A and Person B. Colors show up everywhere — pick distinct ones.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <PersonCard
            label="Person A"
            name={store.state.team.a.name}
            color={store.state.team.a.color}
            isYou={s.whoAmI === 'a'}
            onSetYou={() => set({ ...s, whoAmI: 'a' })}
            onName={n => updateTeam('a', { name: n })}
            onColor={c => updateTeam('a', { color: c })}
          />
          <PersonCard
            label="Person B"
            name={store.state.team.b.name}
            color={store.state.team.b.color}
            isYou={s.whoAmI === 'b'}
            onSetYou={() => set({ ...s, whoAmI: 'b' })}
            onName={n => updateTeam('b', { name: n })}
            onColor={c => updateTeam('b', { color: c })}
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="card p-4">
        <h2 className="text-sm font-semibold text-ink-100 mb-1">Timeline anchor</h2>
        <p className="text-xs text-ink-400 mb-3">Week 1 starts on this Monday. Changing it does not move existing tasks.</p>
        <div className="flex items-center gap-3">
          <input
            type="date"
            className="input max-w-[200px]"
            value={store.state.weekOneStart}
            onChange={e => store.setState(prev => ({ ...prev, weekOneStart: e.target.value }))}
          />
          <span className="text-xs text-ink-400">{fmtDateLong(store.state.weekOneStart)}</span>
        </div>
      </section>

      {/* Sync */}
      <section className="card p-4">
        <h2 className="text-sm font-semibold text-ink-100 mb-1">GitHub Gist sync</h2>
        <p className="text-xs text-ink-400 mb-3">
          Create a private Gist and a fine-grained personal access token with <code className="text-ink-200">gist</code> scope at{' '}
          <a className="text-emerald-300 hover:underline" href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">github.com/settings/tokens</a>.
          Paste both below — they live only in your browser. The other person pastes the same Gist ID with their own token.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block sm:col-span-2">
            <div className="label mb-1">Personal Access Token</div>
            <div className="flex items-center gap-2">
              <input
                type={showToken ? 'text' : 'password'}
                className="input"
                value={s.token}
                onChange={e => set({ ...s, token: e.target.value })}
                placeholder="ghp_… or github_pat_…"
                spellCheck={false}
                autoComplete="off"
              />
              <button className="btn btn-ghost text-xs" onClick={() => setShowToken(v => !v)}>{showToken ? 'Hide' : 'Show'}</button>
            </div>
          </label>

          <label className="block">
            <div className="label mb-1">Gist ID</div>
            <input
              className="input"
              value={s.gistId}
              onChange={e => set({ ...s, gistId: e.target.value })}
              placeholder="e.g. 1a2b3c4d5e6f… (or leave blank to create)"
              spellCheck={false}
              autoComplete="off"
            />
          </label>

          <label className="block">
            <div className="label mb-1">Filename in Gist</div>
            <input
              className="input"
              value={s.filename}
              onChange={e => set({ ...s, filename: e.target.value })}
              spellCheck={false}
            />
          </label>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button className="btn" onClick={store.pullNow} disabled={!s.token || !s.gistId}>↓ Pull from Gist</button>
          <button className="btn btn-primary" onClick={store.pushNow} disabled={!s.token}>↑ Push to Gist {!s.gistId && '(will create)'}</button>
          <div className="ml-auto text-xs text-ink-400">
            Status: <span className="text-ink-200">{store.syncStatus}</span> · last synced {timeAgo(store.lastSyncedAt)}
          </div>
        </div>
        {store.syncError && (
          <div className="mt-3 rounded-md border border-rose-500/40 bg-rose-500/10 p-2 text-xs text-rose-200 break-all">{store.syncError}</div>
        )}
      </section>

      {/* Import / Export / Reset */}
      <section className="card p-4">
        <h2 className="text-sm font-semibold text-ink-100 mb-1">Data</h2>
        <p className="text-xs text-ink-400 mb-3">Export a backup, import to restore, or reset everything to the seeded 4-week plan.</p>

        <div className="flex items-center gap-2 mb-3">
          <button className="btn" onClick={handleExport}>Export JSON</button>
          <button className="btn btn-danger" onClick={store.resetSeed}>Reset to seed</button>
        </div>

        <div>
          <div className="label mb-1">Import JSON</div>
          <textarea
            className="input min-h-[100px] font-mono text-xs"
            value={importText}
            onChange={e => setImportText(e.target.value)}
            placeholder="Paste exported JSON here…"
          />
          <div className="flex items-center justify-between mt-2">
            {importError && <span className="text-xs text-rose-300">{importError}</span>}
            <button className="btn btn-primary ml-auto" onClick={handleImport} disabled={!importText.trim()}>Import</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function PersonCard({ label, name, color, isYou, onSetYou, onName, onColor }: {
  label: string;
  name: string;
  color: string;
  isYou: boolean;
  onSetYou: () => void;
  onName: (n: string) => void;
  onColor: (c: string) => void;
}) {
  return (
    <div className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] uppercase tracking-wider text-ink-400 font-semibold">{label}</div>
        <button
          onClick={onSetYou}
          className={`text-[10px] px-2 py-0.5 rounded-full border ${isYou ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-200' : 'border-ink-700 text-ink-300 hover:bg-ink-800'}`}
          title="Mark this seat as you — used for 'completed by' attribution"
        >
          {isYou ? '✓ You' : 'I am this person'}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={e => onColor(e.target.value)}
          className="h-9 w-9 rounded border border-ink-700 bg-ink-900 cursor-pointer"
          title="Color"
        />
        <input
          className="input"
          value={name}
          onChange={e => onName(e.target.value)}
          placeholder="Name"
        />
      </div>
    </div>
  );
}
