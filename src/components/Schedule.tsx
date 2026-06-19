import { useMemo, useState } from 'react';
import type { StoreApi } from '../lib/store';
import type { SprintTask, Status, Assignee } from '../types';
import { StatusPill } from './StatusPill';
import { AssigneeChip } from './AssigneeChip';
import { fmtDate, fmtTimeRange, todayIso } from '../lib/util';

interface Props {
  store: StoreApi;
}

export function Schedule({ store }: Props) {
  const [weekFilter, setWeekFilter] = useState<'all' | 1 | 2 | 3 | 4>('all');
  const [ownerFilter, setOwnerFilter] = useState<'all' | Assignee>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | Status>('all');

  const filtered = useMemo(() => {
    return store.state.tasks
      .filter(t => weekFilter === 'all' || t.weekNumber === weekFilter)
      .filter(t => ownerFilter === 'all' || t.assignee === ownerFilter)
      .filter(t => statusFilter === 'all' || t.status === statusFilter)
      .sort((a,b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));
  }, [store.state.tasks, weekFilter, ownerFilter, statusFilter]);

  // group by date
  const groups = useMemo(() => {
    const out: { date: string; day: string; tasks: SprintTask[] }[] = [];
    for (const t of filtered) {
      const last = out[out.length - 1];
      if (last && last.date === t.date) last.tasks.push(t);
      else out.push({ date: t.date, day: t.day, tasks: [t] });
    }
    return out;
  }, [filtered]);

  const today = todayIso();
  const update = (taskId: string, patch: Partial<SprintTask>) => store.setState(prev => ({
    ...prev,
    tasks: prev.tasks.map(t => t.id === taskId ? { ...t, ...patch } : t),
  }));

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="card p-3 flex flex-wrap items-center gap-2">
        <span className="label">Filter</span>
        <Select value={String(weekFilter)} onChange={v => setWeekFilter(v === 'all' ? 'all' : Number(v) as 1|2|3|4)}>
          <option value="all">All weeks</option>
          {store.state.weeks.map(w => <option key={w.weekNumber} value={w.weekNumber}>Week {w.weekNumber}</option>)}
        </Select>
        <Select value={ownerFilter} onChange={v => setOwnerFilter(v as 'all' | Assignee)}>
          <option value="all">All owners</option>
          <option value="a">{store.state.team.a.name}</option>
          <option value="b">{store.state.team.b.name}</option>
          <option value="both">Both</option>
        </Select>
        <Select value={statusFilter} onChange={v => setStatusFilter(v as 'all' | Status)}>
          <option value="all">All statuses</option>
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </Select>
        <div className="ml-auto text-xs text-ink-400">{filtered.length} blocks</div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink-900/60 text-[11px] uppercase tracking-wider text-ink-400 border-b border-ink-800">
              <tr>
                <Th>Day</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Owner</Th>
                <Th>Deliverable</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {groups.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-ink-500 italic">No blocks match filters.</td></tr>
              )}
              {groups.map(g => (
                <RenderGroup key={g.date} group={g} today={today} store={store} onUpdate={update} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RenderGroup({ group, today, store, onUpdate }: {
  group: { date: string; day: string; tasks: SprintTask[] };
  today: string;
  store: StoreApi;
  onUpdate: (taskId: string, patch: Partial<SprintTask>) => void;
}) {
  const isToday = group.date === today;
  return (
    <>
      {group.tasks.map((t, i) => (
        <tr
          key={t.id}
          className={`border-b border-ink-800/60 hover:bg-ink-900/40 transition ${isToday ? 'bg-emerald-500/5' : ''}`}
        >
          <Td className="text-ink-300 font-mono text-xs">{i === 0 ? t.day : ''}</Td>
          <Td className="text-ink-300 font-mono text-xs whitespace-nowrap">{i === 0 ? fmtDate(t.date) : ''}</Td>
          <Td className="text-ink-300 font-mono text-xs whitespace-nowrap">{fmtTimeRange(t.startTime, t.endTime)}</Td>
          <Td><AssigneeChip assignee={t.assignee} state={store.state} size="sm" /></Td>
          <Td>
            <div className="text-ink-100 font-medium">{t.deliverable}</div>
            {t.notes && <div className="text-xs text-ink-400 mt-0.5 line-clamp-1">{t.notes}</div>}
          </Td>
          <Td>
            <StatusPill
              status={t.status}
              size="sm"
              onChange={s => onUpdate(t.id, {
                status: s,
                completedAt: s === 'done' ? new Date().toISOString() : null,
                completedBy: s === 'done' ? store.settings.whoAmI : null,
              })}
            />
          </Td>
        </tr>
      ))}
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left font-semibold px-3 py-2">{children}</th>;
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-2 align-top ${className}`}>{children}</td>;
}

function Select({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="rounded-md border border-ink-700 bg-ink-900 px-2 py-1 text-xs text-ink-100 focus:outline-none focus:border-emerald-500/60"
    >
      {children}
    </select>
  );
}
