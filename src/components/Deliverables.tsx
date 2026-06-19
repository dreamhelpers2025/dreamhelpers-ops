import { useState } from 'react';
import type { StoreApi } from '../lib/store';
import type { SprintTask, Milestone, Status, Assignee, DayOfWeek } from '../types';
import { StatusPill } from './StatusPill';
import { AssigneeChip } from './AssigneeChip';
import { fmtDate, fmtTimeRange, uid } from '../lib/util';

interface Props {
  store: StoreApi;
}

const DAY_OPTIONS: DayOfWeek[] = ['Mon','Tue','Wed','Thu','Fri'];

export function Deliverables({ store }: Props) {
  const [editing, setEditing] = useState<SprintTask | null>(null);
  const [editingMs, setEditingMs] = useState<Milestone | null>(null);
  const [tab, setTab] = useState<'tasks' | 'milestones'>('tasks');

  const newTask = (weekNumber: 1|2|3|4): SprintTask => {
    const w = store.state.weeks.find(x => x.weekNumber === weekNumber)!;
    const weekStart = addDays(store.state.weekOneStart, (weekNumber - 1) * 7);
    return {
      id: uid('task'),
      weekNumber,
      date: weekStart,
      day: 'Mon',
      startTime: '13:00',
      endTime: '14:30',
      assignee: 'both',
      deliverable: 'New deliverable',
      notes: '',
      status: 'not-started',
      completedAt: null,
      completedBy: null,
    };
  };

  const newMs = (weekNumber: 1|2|3|4): Milestone => ({
    id: uid('ms'),
    weekNumber,
    title: 'New milestone',
    description: '',
    dueDate: addDays(store.state.weekOneStart, (weekNumber - 1) * 7 + 4),
    status: 'not-started',
    completedAt: null,
  });

  return (
    <div className="space-y-4">
      <div className="card p-3 flex items-center gap-2">
        <TabBtn active={tab === 'tasks'} onClick={() => setTab('tasks')}>Tasks ({store.state.tasks.length})</TabBtn>
        <TabBtn active={tab === 'milestones'} onClick={() => setTab('milestones')}>Milestones ({store.state.milestones.length})</TabBtn>
        <div className="ml-auto" />
      </div>

      {tab === 'tasks' && (
        <div className="space-y-4">
          {store.state.weeks.map(w => {
            const weekTasks = store.state.tasks
              .filter(t => t.weekNumber === w.weekNumber)
              .sort((a,b) => a.date.localeCompare(b.date) || a.startTime.localeCompare(b.startTime));
            return (
              <section key={w.weekNumber} className="card p-4">
                <header className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">Week {w.weekNumber}</div>
                    <h2 className="text-sm font-semibold text-ink-100">{w.title}</h2>
                    <p className="text-xs text-ink-400">{w.theme}</p>
                  </div>
                  <button
                    className="btn btn-primary text-xs"
                    onClick={() => setEditing(newTask(w.weekNumber))}
                  >+ Add task</button>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {weekTasks.map(t => (
                    <TaskCard key={t.id} task={t} store={store} onEdit={() => setEditing(t)} />
                  ))}
                  {weekTasks.length === 0 && <div className="text-xs text-ink-500 italic">No tasks in this week.</div>}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {tab === 'milestones' && (
        <div className="space-y-4">
          {store.state.weeks.map(w => {
            const list = store.state.milestones.filter(m => m.weekNumber === w.weekNumber);
            return (
              <section key={w.weekNumber} className="card p-4">
                <header className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-ink-500">Week {w.weekNumber}</div>
                    <h2 className="text-sm font-semibold text-ink-100">{w.title}</h2>
                  </div>
                  <button className="btn btn-primary text-xs" onClick={() => setEditingMs(newMs(w.weekNumber))}>+ Add milestone</button>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {list.map(m => (
                    <MilestoneCard key={m.id} ms={m} store={store} onEdit={() => setEditingMs(m)} />
                  ))}
                  {list.length === 0 && <div className="text-xs text-ink-500 italic">No milestones.</div>}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {editing && (
        <TaskEditor
          task={editing}
          store={store}
          onClose={() => setEditing(null)}
        />
      )}
      {editingMs && (
        <MilestoneEditor
          ms={editingMs}
          store={store}
          onClose={() => setEditingMs(null)}
        />
      )}
    </div>
  );
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm transition ${active ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/40' : 'text-ink-300 hover:bg-ink-800 border border-transparent'}`}
    >{children}</button>
  );
}

function TaskCard({ task, store, onEdit }: { task: SprintTask; store: StoreApi; onEdit: () => void }) {
  return (
    <div className="rounded-lg border border-ink-800 bg-ink-900/40 p-3 hover:border-ink-700 transition">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="text-[10px] font-mono text-ink-400">{task.day} · {fmtDate(task.date)} · {fmtTimeRange(task.startTime, task.endTime)}</div>
        <StatusPill
          status={task.status}
          size="sm"
          onChange={s => store.setState(prev => ({
            ...prev,
            tasks: prev.tasks.map(x => x.id === task.id ? {
              ...x, status: s,
              completedAt: s === 'done' ? new Date().toISOString() : null,
              completedBy: s === 'done' ? store.settings.whoAmI : null,
            } : x),
          }))}
        />
      </div>
      <div className="text-sm font-medium text-ink-100 leading-tight">{task.deliverable}</div>
      {task.notes && <div className="text-xs text-ink-400 mt-1 line-clamp-2">{task.notes}</div>}
      <div className="flex items-center justify-between gap-2 mt-2">
        <AssigneeChip assignee={task.assignee} state={store.state} size="sm" />
        <button className="btn btn-ghost text-xs" onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}

function MilestoneCard({ ms, store, onEdit }: { ms: Milestone; store: StoreApi; onEdit: () => void }) {
  return (
    <div className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="text-[10px] font-mono text-ink-400">due {fmtDate(ms.dueDate)}</div>
        <StatusPill
          status={ms.status}
          size="sm"
          onChange={s => store.setState(prev => ({
            ...prev,
            milestones: prev.milestones.map(x => x.id === ms.id ? {
              ...x, status: s,
              completedAt: s === 'done' ? new Date().toISOString() : null,
            } : x),
          }))}
        />
      </div>
      <div className="text-sm font-medium text-ink-100 leading-tight">{ms.title}</div>
      <div className="text-xs text-ink-400 mt-1">{ms.description}</div>
      <div className="flex items-center justify-end mt-2">
        <button className="btn btn-ghost text-xs" onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}

function TaskEditor({ task, store, onClose }: { task: SprintTask; store: StoreApi; onClose: () => void }) {
  const [draft, setDraft] = useState<SprintTask>(task);
  const isNew = !store.state.tasks.some(t => t.id === task.id);

  const save = () => {
    store.setState(prev => ({
      ...prev,
      tasks: isNew
        ? [...prev.tasks, draft]
        : prev.tasks.map(t => t.id === draft.id ? draft : t),
    }));
    onClose();
  };
  const remove = () => {
    if (!confirm('Delete this task?')) return;
    store.setState(prev => ({ ...prev, tasks: prev.tasks.filter(t => t.id !== draft.id) }));
    onClose();
  };

  return (
    <Modal title={isNew ? 'New task' : 'Edit task'} onClose={onClose}>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Week">
          <select className="input" value={draft.weekNumber} onChange={e => setDraft({...draft, weekNumber: Number(e.target.value) as 1|2|3|4})}>
            {store.state.weeks.map(w => <option key={w.weekNumber} value={w.weekNumber}>Week {w.weekNumber} — {w.title}</option>)}
          </select>
        </Field>
        <Field label="Day">
          <select className="input" value={draft.day} onChange={e => setDraft({...draft, day: e.target.value as DayOfWeek})}>
            {DAY_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </Field>
        <Field label="Date">
          <input type="date" className="input" value={draft.date} onChange={e => setDraft({...draft, date: e.target.value})} />
        </Field>
        <Field label="Owner">
          <select className="input" value={draft.assignee} onChange={e => setDraft({...draft, assignee: e.target.value as Assignee})}>
            <option value="a">{store.state.team.a.name}</option>
            <option value="b">{store.state.team.b.name}</option>
            <option value="both">Both</option>
          </select>
        </Field>
        <Field label="Start">
          <input type="time" className="input" value={draft.startTime} onChange={e => setDraft({...draft, startTime: e.target.value})} />
        </Field>
        <Field label="End">
          <input type="time" className="input" value={draft.endTime} onChange={e => setDraft({...draft, endTime: e.target.value})} />
        </Field>
        <div className="col-span-2">
          <Field label="Deliverable">
            <input className="input" value={draft.deliverable} onChange={e => setDraft({...draft, deliverable: e.target.value})} />
          </Field>
        </div>
        <div className="col-span-2">
          <Field label="Notes">
            <textarea className="input min-h-[80px]" value={draft.notes} onChange={e => setDraft({...draft, notes: e.target.value})} />
          </Field>
        </div>
        <div className="col-span-2">
          <Field label="Status">
            <select className="input" value={draft.status} onChange={e => setDraft({...draft, status: e.target.value as Status})}>
              <option value="not-started">Not started</option>
              <option value="in-progress">In progress</option>
              <option value="blocked">Blocked</option>
              <option value="done">Done</option>
            </select>
          </Field>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        {!isNew ? <button className="btn btn-danger text-xs" onClick={remove}>Delete</button> : <span />}
        <div className="flex items-center gap-2">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={save}>{isNew ? 'Add' : 'Save'}</button>
        </div>
      </div>
    </Modal>
  );
}

function MilestoneEditor({ ms, store, onClose }: { ms: Milestone; store: StoreApi; onClose: () => void }) {
  const [draft, setDraft] = useState<Milestone>(ms);
  const isNew = !store.state.milestones.some(m => m.id === ms.id);
  const save = () => {
    store.setState(prev => ({
      ...prev,
      milestones: isNew ? [...prev.milestones, draft] : prev.milestones.map(m => m.id === draft.id ? draft : m),
    }));
    onClose();
  };
  const remove = () => {
    if (!confirm('Delete this milestone?')) return;
    store.setState(prev => ({ ...prev, milestones: prev.milestones.filter(m => m.id !== draft.id) }));
    onClose();
  };
  return (
    <Modal title={isNew ? 'New milestone' : 'Edit milestone'} onClose={onClose}>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Week">
          <select className="input" value={draft.weekNumber} onChange={e => setDraft({...draft, weekNumber: Number(e.target.value) as 1|2|3|4})}>
            {store.state.weeks.map(w => <option key={w.weekNumber} value={w.weekNumber}>Week {w.weekNumber}</option>)}
          </select>
        </Field>
        <Field label="Due date">
          <input type="date" className="input" value={draft.dueDate} onChange={e => setDraft({...draft, dueDate: e.target.value})} />
        </Field>
        <div className="col-span-2">
          <Field label="Title"><input className="input" value={draft.title} onChange={e => setDraft({...draft, title: e.target.value})} /></Field>
        </div>
        <div className="col-span-2">
          <Field label="Description"><textarea className="input min-h-[60px]" value={draft.description} onChange={e => setDraft({...draft, description: e.target.value})} /></Field>
        </div>
        <div className="col-span-2">
          <Field label="Status">
            <select className="input" value={draft.status} onChange={e => setDraft({...draft, status: e.target.value as Status})}>
              <option value="not-started">Not started</option>
              <option value="in-progress">In progress</option>
              <option value="blocked">Blocked</option>
              <option value="done">Done</option>
            </select>
          </Field>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        {!isNew ? <button className="btn btn-danger text-xs" onClick={remove}>Delete</button> : <span />}
        <div className="flex items-center gap-2">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={save}>{isNew ? 'Add' : 'Save'}</button>
        </div>
      </div>
    </Modal>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="label mb-1">{label}</div>
      {children}
    </label>
  );
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
      <div className="card max-w-xl w-full p-5 my-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-ink-50">{title}</h3>
          <button className="btn btn-ghost text-xs" onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </div>
  );
}
