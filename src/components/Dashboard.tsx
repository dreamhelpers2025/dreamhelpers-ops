import type { StoreApi } from '../lib/store';
import type { Status, SprintTask } from '../types';
import { StatusPill } from './StatusPill';
import { AssigneeChip } from './AssigneeChip';
import {
  fmtDateLong, fmtTimeRange, progressForTasks, progressForPerson,
  todayIso, isPastDue, durationHours,
} from '../lib/util';

interface Props {
  store: StoreApi;
}

function updateTaskStatus(store: StoreApi, taskId: string, status: Status) {
  store.setState(prev => ({
    ...prev,
    tasks: prev.tasks.map(t => t.id === taskId
      ? {
          ...t,
          status,
          completedAt: status === 'done' ? new Date().toISOString() : null,
          completedBy: status === 'done' ? store.settings.whoAmI : null,
        }
      : t),
  }));
}

function TaskRow({ task, store }: { task: SprintTask; store: StoreApi }) {
  const past = isPastDue(task.date, task.status, todayIso());
  return (
    <div className="flex items-start gap-3 rounded-lg border border-ink-800 bg-ink-900/40 p-3 hover:border-ink-700 transition">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-[11px] font-mono text-ink-400">{task.day} · {fmtTimeRange(task.startTime, task.endTime)}</span>
          <AssigneeChip assignee={task.assignee} state={store.state} size="sm" />
          {past && <span className="chip px-1.5 py-0 text-[10px] border-rose-500/40 bg-rose-500/10 text-rose-200">Past due</span>}
        </div>
        <div className="text-sm text-ink-100 font-medium leading-tight">{task.deliverable}</div>
        {task.notes && <div className="text-xs text-ink-400 mt-1 line-clamp-2">{task.notes}</div>}
      </div>
      <StatusPill status={task.status} size="sm" onChange={s => updateTaskStatus(store, task.id, s)} />
    </div>
  );
}

export function Dashboard({ store }: Props) {
  const today = todayIso();
  const { tasks, milestones, team } = store.state;
  const todays = tasks.filter(t => t.date === today);
  const overdue = tasks.filter(t => isPastDue(t.date, t.status, today));
  const upcoming = tasks
    .filter(t => t.date > today && t.status !== 'done')
    .slice()
    .sort((a,b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime))
    .slice(0, 6);
  const inProgress = tasks.filter(t => t.status === 'in-progress');
  const blocked = tasks.filter(t => t.status === 'blocked');

  const overall = progressForTasks(tasks);
  const aProg = progressForPerson(tasks, 'a');
  const bProg = progressForPerson(tasks, 'b');

  // weekly progress for current/active week
  const activeWeek = (() => {
    if (today < store.state.weekOneStart) return 1;
    const weekStartDays = [0, 7, 14, 21];
    for (let i = 3; i >= 0; i--) {
      const ws = addDays(store.state.weekOneStart, weekStartDays[i]);
      if (today >= ws) return (i + 1) as 1|2|3|4;
    }
    return 1 as const;
  })();
  const weekTasks = tasks.filter(t => t.weekNumber === activeWeek);
  const weekProg = progressForTasks(weekTasks);

  const hoursToday = todays.reduce((s, t) => s + durationHours(t.startTime, t.endTime), 0);

  return (
    <div className="space-y-6">
      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Kpi label="Overall progress" value={`${overall.pct}%`} sub={`${overall.done}/${overall.total} deliverables`} accent="emerald" />
        <Kpi label={`Week ${activeWeek} progress`} value={`${weekProg.pct}%`} sub={`${weekProg.done}/${weekProg.total} this week`} accent="sky" />
        <Kpi label="Today" value={String(todays.length)} sub={`${hoursToday.toFixed(1)} hrs blocked`} accent="amber" />
        <Kpi label="Blocked / overdue" value={`${blocked.length} / ${overdue.length}`} sub={overdue.length || blocked.length ? 'needs attention' : 'all clear'} accent={blocked.length || overdue.length ? 'rose' : 'ink'} />
      </div>

      {/* Today + Accountability */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="card p-4 lg:col-span-2">
          <header className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-ink-100">Today's blocks</h2>
              <p className="text-xs text-ink-400">{fmtDateLong(today)}</p>
            </div>
            <span className="text-xs text-ink-400">{todays.length} blocks</span>
          </header>
          {todays.length === 0
            ? <Empty msg={today < store.state.weekOneStart ? `Week 1 starts ${fmtDateLong(store.state.weekOneStart)}.` : 'Nothing scheduled today.'} />
            : <div className="space-y-2">{todays.sort((a,b)=>a.startTime.localeCompare(b.startTime)).map(t => <TaskRow key={t.id} task={t} store={store} />)}</div>}
        </section>

        <section className="card p-4">
          <header className="mb-3"><h2 className="text-sm font-semibold text-ink-100">Accountability</h2></header>
          <PersonProgress name={team.a.name} color={team.a.color} prog={aProg} />
          <div className="h-3" />
          <PersonProgress name={team.b.name} color={team.b.color} prog={bProg} />
          <div className="h-4" />
          <div className="text-xs text-ink-400">
            In progress: <span className="text-ink-200">{inProgress.length}</span> · Blocked: <span className={blocked.length ? 'text-rose-300' : 'text-ink-200'}>{blocked.length}</span>
          </div>
        </section>
      </div>

      {/* Overdue + Upcoming + Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <section className="card p-4">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">Overdue</h2>
            <span className="text-xs text-rose-300">{overdue.length}</span>
          </header>
          {overdue.length === 0
            ? <Empty msg="Nothing overdue." />
            : <div className="space-y-2">{overdue.slice(0, 6).map(t => <TaskRow key={t.id} task={t} store={store} />)}</div>}
        </section>

        <section className="card p-4">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">Upcoming</h2>
            <span className="text-xs text-ink-400">next 6</span>
          </header>
          {upcoming.length === 0
            ? <Empty msg="Nothing upcoming." />
            : <div className="space-y-2">{upcoming.map(t => <TaskRow key={t.id} task={t} store={store} />)}</div>}
        </section>

        <section className="card p-4">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink-100">Milestones</h2>
            <span className="text-xs text-ink-400">{milestones.filter(m => m.status === 'done').length}/{milestones.length}</span>
          </header>
          <div className="space-y-2">
            {milestones.map(m => (
              <div key={m.id} className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="text-[11px] font-mono text-ink-400">Wk {m.weekNumber} · due {m.dueDate}</div>
                  <StatusPill status={m.status} size="sm" onChange={s => store.setState(prev => ({
                    ...prev,
                    milestones: prev.milestones.map(x => x.id === m.id
                      ? { ...x, status: s, completedAt: s === 'done' ? new Date().toISOString() : null }
                      : x),
                  }))} />
                </div>
                <div className="text-sm font-medium text-ink-100 leading-tight">{m.title}</div>
                <div className="text-xs text-ink-400 mt-1">{m.description}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

function Kpi({ label, value, sub, accent }: { label: string; value: string; sub: string; accent: 'emerald'|'sky'|'amber'|'rose'|'ink' }) {
  const tone = {
    emerald: 'from-emerald-500/15 to-transparent border-emerald-500/20',
    sky: 'from-sky-500/15 to-transparent border-sky-500/20',
    amber: 'from-amber-500/15 to-transparent border-amber-500/20',
    rose: 'from-rose-500/15 to-transparent border-rose-500/20',
    ink: 'from-ink-800/30 to-transparent border-ink-800',
  }[accent];
  return (
    <div className={`card p-4 bg-gradient-to-br ${tone}`}>
      <div className="label">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-ink-50 tabular-nums">{value}</div>
      <div className="text-xs text-ink-400 mt-0.5">{sub}</div>
    </div>
  );
}

function PersonProgress({ name, color, prog }: { name: string; color: string; prog: { done: number; total: number; pct: number } }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-sm text-ink-100">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
          {name}
        </div>
        <div className="text-xs text-ink-400 tabular-nums">{prog.done}/{prog.total} · {prog.pct}%</div>
      </div>
      <div className="h-2 rounded-full bg-ink-800 overflow-hidden">
        <div className="h-full transition-all" style={{ width: `${prog.pct}%`, background: color }} />
      </div>
    </div>
  );
}

function Empty({ msg }: { msg: string }) {
  return <div className="text-xs text-ink-500 italic py-3">{msg}</div>;
}
