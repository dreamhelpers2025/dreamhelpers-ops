import { useState, useMemo } from 'react';
import type { StoreApi } from '../lib/store';
import type { Audit, AuditStatus, AuditStage, AuditSegment } from '../types';
import { fmtDate, timeAgo, uid } from '../lib/util';

interface Props {
  store: StoreApi;
}

const STATUS_OPTIONS: AuditStatus[] = [
  'Discovery booked',
  'Questionnaire sent',
  'Questionnaire received',
  'Day 1 — data received',
  'Day 2-4 — analysis',
  'Day 5 — walkthrough scheduled',
  'Walkthrough complete — decision pending',
  'Closed — Implementation signed',
  'Closed — follow-up scheduled',
  'Closed — declined',
];

const STAGE_OPTIONS: AuditStage[] = ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Closed'];
const SEGMENT_OPTIONS: AuditSegment[] = ['vet', 'insurance', 'shopify', 'other'];

function statusTone(status: AuditStatus): { bg: string; fg: string; border: string; dot: string } {
  if (status.startsWith('Closed — Implementation')) return { bg: 'bg-emerald-500/10', fg: 'text-emerald-200', border: 'border-emerald-500/40', dot: 'bg-emerald-400' };
  if (status.startsWith('Closed — declined'))       return { bg: 'bg-rose-500/10',    fg: 'text-rose-200',    border: 'border-rose-500/40',    dot: 'bg-rose-400' };
  if (status.startsWith('Closed'))                  return { bg: 'bg-ink-800/60',     fg: 'text-ink-300',     border: 'border-ink-700',        dot: 'bg-ink-500' };
  if (status.startsWith('Day 5'))                   return { bg: 'bg-amber-500/10',   fg: 'text-amber-200',   border: 'border-amber-500/40',   dot: 'bg-amber-400' };
  if (status.includes('analysis') || status.includes('Day 1'))
                                                    return { bg: 'bg-sky-500/10',     fg: 'text-sky-200',     border: 'border-sky-500/40',     dot: 'bg-sky-400' };
  return { bg: 'bg-purple-500/10', fg: 'text-purple-200', border: 'border-purple-500/40', dot: 'bg-purple-400' };
}

function segmentBadge(seg: AuditSegment): { label: string; color: string } {
  switch (seg) {
    case 'vet':       return { label: 'Vet',       color: 'text-emerald-300' };
    case 'insurance': return { label: 'Insurance', color: 'text-sky-300' };
    case 'shopify':   return { label: 'Shopify',   color: 'text-amber-300' };
    case 'other':     return { label: 'Other',     color: 'text-ink-300' };
  }
}

export function Audits({ store }: Props) {
  const [editing, setEditing] = useState<Audit | null>(null);
  const audits = store.state.audits ?? [];

  const counts = useMemo(() => {
    const total = audits.length;
    const active = audits.filter(a => !a.status.startsWith('Closed')).length;
    const won = audits.filter(a => a.status === 'Closed — Implementation signed').length;
    const lost = audits.filter(a => a.status === 'Closed — declined').length;
    const pending = audits.filter(a => a.status === 'Walkthrough complete — decision pending').length;
    return { total, active, won, lost, pending };
  }, [audits]);

  const update = (id: string, patch: Partial<Audit>) => {
    store.setState(prev => ({
      ...prev,
      audits: (prev.audits ?? []).map(a => a.id === id
        ? { ...a, ...patch, lastUpdatedAt: new Date().toISOString(), lastUpdatedBy: store.settings.whoAmI }
        : a),
    }));
  };

  const addAudit = () => {
    const a: Audit = {
      id: uid('audit'),
      client: 'New audit',
      segment: 'vet',
      status: 'Discovery booked',
      stage: 'Day 0',
      createdAt: new Date().toISOString(),
      driveFolder: '',
      calendlyEventUrl: '',
      notes: '',
      lastUpdatedAt: new Date().toISOString(),
      lastUpdatedBy: store.settings.whoAmI,
    };
    setEditing(a);
  };

  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <Kpi label="Total" value={String(counts.total)} accent="ink" />
        <Kpi label="Active" value={String(counts.active)} accent="sky" />
        <Kpi label="Decision pending" value={String(counts.pending)} accent="amber" />
        <Kpi label="Won (Impl signed)" value={String(counts.won)} accent="emerald" />
        <Kpi label="Lost (declined)" value={String(counts.lost)} accent="rose" />
      </div>

      <div className="card p-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-ink-100">Audits pipeline</h2>
          <p className="text-xs text-ink-400 mt-0.5">
            Rows update from the Make.com intake flow (see <code className="text-ink-200">deliverables/ops/01-intake-automation-playbook.md</code>) once wired up. Manual add available below for anything off-platform.
          </p>
        </div>
        <button className="btn btn-primary text-xs" onClick={addAudit}>+ Add audit (manual)</button>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-ink-900/60 text-[11px] uppercase tracking-wider text-ink-400 border-b border-ink-800">
              <tr>
                <Th>Client</Th>
                <Th>Segment</Th>
                <Th>Status</Th>
                <Th>Stage</Th>
                <Th>Created</Th>
                <Th>Updated</Th>
                <Th>Links</Th>
                <Th>Edit</Th>
              </tr>
            </thead>
            <tbody>
              {audits.length === 0 && (
                <tr><td colSpan={8} className="px-4 py-8 text-center text-ink-500 italic">No audits yet. Wire up the Make.com intake flow per the ops playbook, or add one manually.</td></tr>
              )}
              {audits.map(a => {
                const tone = statusTone(a.status);
                const seg = segmentBadge(a.segment);
                return (
                  <tr key={a.id} className="border-b border-ink-800/60 hover:bg-ink-900/40 transition">
                    <Td>
                      <div className="font-medium text-ink-100">{a.client}</div>
                      {a.notes && <div className="text-xs text-ink-400 mt-0.5 line-clamp-1">{a.notes}</div>}
                    </Td>
                    <Td><span className={`text-[11px] font-semibold uppercase tracking-wider ${seg.color}`}>{seg.label}</span></Td>
                    <Td>
                      <span className={`chip px-2 py-0.5 text-[10px] ${tone.fg} ${tone.bg} ${tone.border}`}>
                        <span className={`status-dot ${tone.dot}`} />
                        {a.status}
                      </span>
                    </Td>
                    <Td><span className="text-xs font-mono text-ink-300">{a.stage}</span></Td>
                    <Td><span className="text-xs font-mono text-ink-400">{fmtDate(a.createdAt.slice(0, 10))}</span></Td>
                    <Td><span className="text-xs text-ink-400">{timeAgo(a.lastUpdatedAt)}</span></Td>
                    <Td>
                      <div className="flex flex-col gap-0.5 text-[11px]">
                        {a.driveFolder && <a className="text-emerald-300 hover:underline" href={a.driveFolder} target="_blank" rel="noreferrer">Drive ↗</a>}
                        {a.calendlyEventUrl && <a className="text-sky-300 hover:underline" href={a.calendlyEventUrl} target="_blank" rel="noreferrer">Calendly ↗</a>}
                        {!a.driveFolder && !a.calendlyEventUrl && <span className="text-ink-500">—</span>}
                      </div>
                    </Td>
                    <Td><button className="btn btn-ghost text-xs" onClick={() => setEditing(a)}>Edit</button></Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {editing && (
        <AuditEditor
          audit={editing}
          isNew={!audits.some(a => a.id === editing.id)}
          onSave={(saved) => {
            const isNew = !audits.some(a => a.id === saved.id);
            if (isNew) {
              store.setState(prev => ({ ...prev, audits: [...(prev.audits ?? []), saved] }));
            } else {
              update(saved.id, saved);
            }
            setEditing(null);
          }}
          onDelete={(id) => {
            if (!confirm('Delete this audit?')) return;
            store.setState(prev => ({ ...prev, audits: (prev.audits ?? []).filter(a => a.id !== id) }));
            setEditing(null);
          }}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: string; accent: 'emerald'|'sky'|'amber'|'rose'|'ink' }) {
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
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left font-semibold px-3 py-2">{children}</th>;
}
function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-3 py-3 align-top ${className}`}>{children}</td>;
}

function AuditEditor({ audit, isNew, onSave, onDelete, onClose }: {
  audit: Audit;
  isNew: boolean;
  onSave: (a: Audit) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState<Audit>(audit);
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto" onClick={onClose}>
      <div className="card max-w-xl w-full p-5 my-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-ink-50">{isNew ? 'New audit' : 'Edit audit'}</h3>
          <button className="btn btn-ghost text-xs" onClick={onClose}>Close</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className="label mb-1 block">Client</label>
            <input className="input" value={draft.client} onChange={e => setDraft({ ...draft, client: e.target.value })} />
          </div>
          <div>
            <label className="label mb-1 block">Segment</label>
            <select className="input" value={draft.segment} onChange={e => setDraft({ ...draft, segment: e.target.value as AuditSegment })}>
              {SEGMENT_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label mb-1 block">Stage</label>
            <select className="input" value={draft.stage} onChange={e => setDraft({ ...draft, stage: e.target.value as AuditStage })}>
              {STAGE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label className="label mb-1 block">Status</label>
            <select className="input" value={draft.status} onChange={e => setDraft({ ...draft, status: e.target.value as AuditStatus })}>
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label mb-1 block">Drive folder URL</label>
            <input className="input" value={draft.driveFolder} onChange={e => setDraft({ ...draft, driveFolder: e.target.value })} placeholder="https://drive.google.com/…" />
          </div>
          <div>
            <label className="label mb-1 block">Calendly event URL</label>
            <input className="input" value={draft.calendlyEventUrl} onChange={e => setDraft({ ...draft, calendlyEventUrl: e.target.value })} placeholder="https://calendly.com/…" />
          </div>
          <div className="col-span-2">
            <label className="label mb-1 block">Notes</label>
            <textarea className="input min-h-[80px]" value={draft.notes} onChange={e => setDraft({ ...draft, notes: e.target.value })} />
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          {!isNew ? <button className="btn btn-danger text-xs" onClick={() => onDelete(draft.id)}>Delete</button> : <span />}
          <div className="flex items-center gap-2">
            <button className="btn" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={() => onSave(draft)}>{isNew ? 'Add' : 'Save'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
