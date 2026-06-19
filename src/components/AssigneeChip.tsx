import type { Assignee, AppState } from '../types';

interface Props {
  assignee: Assignee;
  state: AppState;
  size?: 'sm' | 'md';
}

export function AssigneeChip({ assignee, state, size = 'md' }: Props) {
  const pad = size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-[11px]';
  if (assignee === 'both') {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full border border-ink-700 bg-ink-800/60 ${pad} text-ink-200`}>
        <span className="h-2 w-2 rounded-full" style={{ background: state.team.a.color }} />
        <span className="h-2 w-2 -ml-1 rounded-full" style={{ background: state.team.b.color }} />
        <span className="ml-0.5">{state.team.a.name} + {state.team.b.name}</span>
      </span>
    );
  }
  const m = assignee === 'a' ? state.team.a : state.team.b;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-800/60 ${pad} text-ink-200`}>
      <span className="h-2 w-2 rounded-full" style={{ background: m.color }} />
      {m.name}
    </span>
  );
}
