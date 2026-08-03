import { StatusBadge } from '../../shared/components/StatusBadge';
import { useApiHealth } from '../../shared/hooks/useApiHealth';
import { API_BASE_URL } from '../../shared/services/apiClient';

export function HealthPage() {
  const { status, data, error } = useApiHealth();

  return (
    <main className="app-shell">
      <section className="workspace">
        <div className="workspace__header">
          <div>
            <p className="eyebrow">TuteClass Frontend</p>
            <h1>Project Structure</h1>
          </div>
          <StatusBadge status={status} />
        </div>

        <div className="dashboard-grid">
          <article className="panel">
            <span className="panel__label">Backend API</span>
            <strong>{API_BASE_URL}</strong>
            <p>Shared services read API configuration from Vite environment variables.</p>
          </article>

          <article className="panel">
            <span className="panel__label">System Info</span>
            {status === 'loading' && <p>Checking API connection...</p>}
            {status === 'error' && <p className="error-text">{error?.message}</p>}
            {status === 'ready' && data && (
              <dl className="system-info">
                <div>
                  <dt>Name</dt>
                  <dd>{data.name}</dd>
                </div>
                <div>
                  <dt>Environment</dt>
                  <dd>{data.environment}</dd>
                </div>
                <div>
                  <dt>Timestamp UTC</dt>
                  <dd>{new Date(data.timestampUtc).toLocaleString()}</dd>
                </div>
              </dl>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
