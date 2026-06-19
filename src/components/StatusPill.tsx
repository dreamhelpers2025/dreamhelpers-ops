import type { Status } from '../types';
import { STATUS_COLOR, STATUS_LABEL, STATUS_ORDER } from '../lib/util';

interface Props {
  status: Status;
  onChange?: (next: Status) => void;
  size?: 'sm' | 'md';
}

export function StatusPill({ status, onChange, size = 'md' }: Props) {
  const c = STATUS_COLOR[status];
  const pad = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';
  const click = onChange
    ? () => {
        const i = STATUS_ORDER.indexOf(status);
        const next = STATUS_ORDER[(i + 1) % STATUS_ORDER.length];
        onChange(next);
      }
    : undefined;
  return (
    <button
      type="button"
      onClick={click}
      disabled={!onChange}
      className={`chip ${pad} ${c.fg} ${c.bg} ${c.border} ${onChange ? 'hover:brightness-125 cursor-pointer' : 'cursor-default'}`}
      title={onChange ? 'Click to cycle status' : STATUS_LABEL[status]}
    >
      <span className={`status-dot ${c.dot}`} />
      {STATUS_LABEL[status]}
    </button>
  );
}
