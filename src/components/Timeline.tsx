import { useMemo, useState } from 'react';
import type { StoreApi } from '../lib/store';
import type { SprintTask, Status } from '../types';
import { StatusPill } from './StatusPill';
import { AssigneeChip } from './AssigneeChip';
import { STATUS_COLOR, fmtDate, fmtTimeRange, todayIso } from '../lib/util';

interface Props {
  store: StoreApi;
}

const DAY_LABELS = ['Mon','Tue','Wed','Thu','Fri'] as const;

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

export function Timeline({ store }: Props) {
  const [selected, setSelected] = useState<SprintTask | null>(null);
  const { tasks, weeks, weekOneStart, team } = store.state;
  const today = todayIso();

  const grid = useMemo(() => {
    return weeks.map(w => {
      const weekStart = addDays(weekOneStart, (w.weekNumber - 1) * 7);
      const days = DAY_LABELS.map((d, i) => {
        const date = addDays(weekStart, i);
        const dayTasks = tasks
          .filter(t => t.date === date)
          .sort((a,b) => a.startTime.localeCompare(b.startTime));
        return { day: d, date, dayTasks };
      });
      return { week: w, weekStart, days };
    });
  }, [tasks, weeks, weekOneStart]);

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-semibold text-ink-100">Founder Liberation timeline</h2>
            <p className="text-xs text-ink-400">4-week plan · Mon–Fri · 1pm–4pm PST</p>
          </div>
          <Legend store={store} />
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1100px]">
            {/* Day headers */}
            <div className="grid grid-cols-[140px_repeat(5,_1fr)] gap-2 mb-2">
              <div />
              {DAY_LABELS.map(d => (
                <div key={d} className="text-[11px] uppercase tracking-wider text-ink-400 px-2">{d}</div>
              ))}
            </div>

            {grid.map(({ week, weekStart, days }) => (
              <div key={week.weekNumber} className="grid grid-cols-[140px_repeat(5,_1fr)] gap-2 mb-3">
                {/* Week label */}
                <div className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-ink-500">Week {week.weekNumber}</div>
                  <div className="text-sm font-semibold text-ink-100 leading-tight mt-0.5">{week.title}</div>
                  <div className="text-[10px] text-ink-400 mt-1 font-mono">{fmtDate(weekStart)}</div>
                </div>

                {days.map(({ day, date, dayTasks }) => {
                  const isToday = date === today;
                  return (
                    <div
                      key={date}
                      className={`rounded-lg border ${isToday ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-ink-800 bg-ink-900/30'} p-2 min-h-[120px]`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-[10px] font-mono text-ink-400">{fmtDate(date)}</div>
                        {isToday && <div className="text-[10px] font-semibold text-emerald-300">TODAY</div>}
                      </div>
                      <div className="space-y-1">
                        {dayTasks.map(t => <TimelineBar key={t.id} task={t} store={store} onClick={() => setSelected(t)} />)}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && <TaskDrawer task={selected} store={store} onClose={() => setSelected(null)} />}
    </div>
  );
}

function TimelineBar({ task, store, onClick }: { task: SprintTask; store: StoreApi; onClick: () => void }) {
  const stripe = task.assignee === 'a'
    ? store.state.team.a.color
    : task.assignee === 'b'
      ? store.state.team.b.color
      : 'linear-gradient(90deg, ' + store.state.team.a.color + ', ' + store.state.team.b.color + ')';
  const c = STATUS_COLOR[task.status];
  const isGradient = task.assignee === 'both';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-md border ${c.border} ${c.bg} px-2 py-1.5 hover:brightness-125 transition`}
      title={`${task.deliverable} · ${fmtTimeRange(task.startTime, task.endTime)}`}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="inline-block h-2 w-2 rounded-sm flex-shrink-0"
          style={isGradient ? { backgroundImage: stripe } : { background: stripe }}
        />
        <span className="text-[10px] font-mono text-ink-300">{fmtTimeRange(task.startTime, task.endTime)}</span>
        {task.status === 'done' && <span className="text-[10px] text-emerald-300 ml-auto">✓</span>}
        {task.status === 'blocked' && <span className="text-[10px] text-rose-300 ml-auto">!</span>}
      </div>
      <div className={`text-[11px] font-medium leading-tight mt-0.5 line-clamp-2 ${c.fg}`}>
        {task.deliverable}
      </div>
    </button>
  );
}

function Legend({ store }: { store: StoreApi }) {
  const { team } = store.state;
  return (
    <div className="flex items-center gap-3 text-[11px] text-ink-400">
      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm" style={{ background: team.a.color }} />{team.a.name}</div>
      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm" style={{ background: team.b.color }} />{team.b.name}</div>
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-sm" style={{ backgroundImage: `linear-gradient(90deg, ${team.a.color}, ${team.b.color})` }} />
        Both
      </div>
    </div>
  );
}

function TaskDrawer({ task, store, onClose }: { task: SprintTask; store: StoreApi; onClose: () => void }) {
  const updateTask = (patch: Partial<SprintTask>) => {
    store.setState(prev => ({
      ...prev,
      tasks: prev.tasks.map(t => t.id === task.id ? { ...t, ...patch } : t),
    }));
  };
  const setStatus = (s: Status) => updateTask({
    status: s,
    completedAt: s === 'done' ? new Date().toISOString() : null,
    completedBy: s === 'done' ? store.settings.whoAmI : null,
  });
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="card max-w-lg w-full p-5" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <div className="text-[11px] font-mono text-ink-400">{task.day} · {fmtDate(task.date)} · {fmtTimeRange(task.startTime, task.endTime)} · Wk {task.weekNumber}</div>
            <h3 className="text-base font-semibold text-ink-50 mt-0.5">{task.deliverable}</h3>
          </div>
          <button className="btn btn-ghost text-xs" onClick={onClose}>Close</button>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <AssigneeChip assignee={task.assignee} state={store.state} />
          <StatusPill status={task.status} onChange={setStatus} />
        </div>
        <div className="space-y-3">
          <div>
            <div className="label mb-1">Notes</div>
            <textarea
              className="input min-h-[80px]"
              value={task.notes}
              onChange={e => updateTask({ notes: e.target.value })}
              placeholder="Working notes, blockers, links…"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
