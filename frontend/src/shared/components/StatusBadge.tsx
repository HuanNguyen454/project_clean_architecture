export type ApiStatus = 'loading' | 'ready' | 'error';

interface StatusBadgeProps {
  status: ApiStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {status}
    </span>
  );
}
