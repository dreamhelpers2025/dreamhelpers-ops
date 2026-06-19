import type { Status, Assignee, AppState, SprintTask, PersonId } from '../types';

export const STATUS_ORDER: Status[] = ['not-started', 'in-progress', 'blocked', 'done'];

export const STATUS_LABEL: Record<Status, string> = {
  'not-started': 'Not started',
  'in-progress': 'In progress',
  'blocked': 'Blocked',
  'done': 'Done',
};

export const STATUS_COLOR: Record<Status, { fg: string; bg: string; border: string; dot: string }> = {
  'not-started': { fg: 'text-ink-300', bg: 'bg-ink-800/60', border: 'border-ink-700', dot: 'bg-ink-500' },
  'in-progress': { fg: 'text-amber-200', bg: 'bg-amber-500/10', border: 'border-amber-500/40', dot: 'bg-amber-400' },
  'blocked':     { fg: 'text-rose-200',  bg: 'bg-rose-500/10',  border: 'border-rose-500/40',  dot: 'bg-rose-400' },
  'done':        { fg: 'text-emerald-200', bg: 'bg-emerald-500/10', border: 'border-emerald-500/40', dot: 'bg-emerald-400' },
};

export function assigneeLabel(a: Assignee, state: AppState): string {
  if (a === 'a') return state.team.a.name;
  if (a === 'b') return state.team.b.name;
  return `${state.team.a.name} + ${state.team.b.name}`;
}

export function assigneeColor(a: Assignee, state: AppState): string {
  if (a === 'a') return state.team.a.color;
  if (a === 'b') return state.team.b.color;
  return '#a78bfa';
}

export function fmtDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

export function fmtDateLong(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export function fmtTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const ampm = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${h12}${ampm}` : `${h12}:${String(m).padStart(2,'0')}${ampm}`;
}

export function fmtTimeRange(start: string, end: string): string {
  return `${fmtTime(start)}–${fmtTime(end)}`;
}

export function todayIso(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

export function durationHours(start: string, end: string): number {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  return (eh + em/60) - (sh + sm/60);
}

export function progressForTasks(tasks: SprintTask[]): { done: number; total: number; pct: number } {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === 'done').length;
  return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
}

export function progressForPerson(tasks: SprintTask[], who: PersonId): { done: number; total: number; pct: number } {
  const mine = tasks.filter(t => t.assignee === who || t.assignee === 'both');
  return progressForTasks(mine);
}

export function timeAgo(iso: string | null): string {
  if (!iso) return 'never';
  const now = Date.now();
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return 'never';
  const s = Math.max(1, Math.floor((now - then) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export function uid(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function isPastDue(iso: string, status: Status, todayIsoStr: string): boolean {
  if (status === 'done') return false;
  return iso < todayIsoStr;
}
