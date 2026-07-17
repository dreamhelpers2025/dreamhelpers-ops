import type { AppState, SyncSettings } from '../types';

const GIST_API = 'https://api.github.com/gists';

export interface RemoteState {
  state: AppState;
  updatedAt: string;
}

export class GistError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'GistError';
  }
}

async function gistFetch(path: string, settings: SyncSettings, init: RequestInit = {}) {
  const res = await fetch(`${GIST_API}${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${settings.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      ...(init.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new GistError(`Gist API ${res.status}: ${body.slice(0, 200)}`, res.status);
  }
  return res;
}

export async function loadFromGist(settings: SyncSettings): Promise<RemoteState | null> {
  if (!settings.token || !settings.gistId) return null;
  const res = await gistFetch(`/${settings.gistId}`, settings);
  const data = await res.json();
  const file = data.files?.[settings.filename];
  if (!file) {
    throw new GistError(`Gist has no file "${settings.filename}". Files present: ${Object.keys(data.files ?? {}).join(', ')}`);
  }
  let content: string = file.content;
  if (file.truncated && file.raw_url) {
    const raw = await fetch(file.raw_url);
    content = await raw.text();
  }
  return {
    state: JSON.parse(content) as AppState,
    updatedAt: data.updated_at,
  };
}

export async function saveToGist(settings: SyncSettings, state: AppState): Promise<string> {
  if (!settings.token) throw new GistError('Missing token');
  const body = {
    files: {
      [settings.filename]: { content: JSON.stringify(state, null, 2) },
    },
  };
  if (!settings.gistId) {
    const res = await gistFetch('', settings, {
      method: 'POST',
      body: JSON.stringify({
        description: 'Tack Founder Liberation OS state',
        public: false,
        ...body,
      }),
    });
    const data = await res.json();
    return data.id as string;
  }
  await gistFetch(`/${settings.gistId}`, settings, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
  return settings.gistId;
}
