import type { SyncStatus } from '../lib/store';
import { timeAgo } from '../lib/util';

interface Props {
  status: SyncStatus;
  lastSyncedAt: string | null;
  error: string | null;
  onPull: () => void;
  onPush: () => void;
}

const STATUS_TEXT: Record<SyncStatus, string> = {
  'idle': 'Idle',
  'loading': 'Syncing…',
  'saving': 'Saving…',
  'ok': 'Synced',
  'error': 'Sync error',
  'no-config': 'Not connected',
};

const STATUS_TONE: Record<SyncStatus, string> = {
  'idle': 'border-ink-700 bg-ink-800 text-ink-300',
  'loading': 'border-sky-500/40 bg-sky-500/10 text-sky-200',
  'saving': 'border-sky-500/40 bg-sky-500/10 text-sky-200',
  'ok': 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
  'error': 'border-rose-500/40 bg-rose-500/10 text-rose-200',
  'no-config': 'border-amber-500/40 bg-amber-500/10 text-amber-200',
};

export function SyncBadge({ status, lastSyncedAt, error, onPull, onPush }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`chip px-2.5 py-1 text-xs ${STATUS_TONE[status]}`}
        title={error ?? `Last synced ${timeAgo(lastSyncedAt)}`}
      >
        <span className={`status-dot ${status === 'ok' ? 'bg-emerald-400' : status === 'error' ? 'bg-rose-400' : status === 'no-config' ? 'bg-amber-400' : 'bg-sky-400 animate-pulse'}`} />
        {STATUS_TEXT[status]}
        <span className="text-ink-400 ml-1">· {timeAgo(lastSyncedAt)}</span>
      </div>
      <button className="btn btn-ghost text-xs" onClick={onPull} disabled={status === 'no-config'} title="Pull latest from Gist">↓ Pull</button>
      <button className="btn btn-ghost text-xs" onClick={onPush} disabled={status === 'no-config'} title="Push current state to Gist">↑ Push</button>
    </div>
  );
}
