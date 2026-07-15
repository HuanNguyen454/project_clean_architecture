import { StatusBadge } from '../components/StatusBadge.jsx';
import { useApiHealth } from '../hooks/useApiHealth.js';
import { API_BASE_URL } from '../services/apiClient.js';

export function HealthPage() {
  const { status, data, error } = useApiHealth();

  return (
    <main className="app-shell">
      <section className="workspace">
        <div className="workspace__header">
          <div>
            <p className="eyebrow">Clean Architecture</p>
            <h1>DemoCICD</h1>
          </div>
          <StatusBadge status={status} />
        </div>

        <div className="dashboard-grid">
          <article className="panel">
            <span className="panel__label">Backend API</span>
            <strong>{API_BASE_URL}</strong>
            <p>React client is configured through Vite environment variables.</p>
          </article>

          <article className="panel">
            <span className="panel__label">System Info</span>
            {status === 'loading' && <p>Checking API connection...</p>}
            {status === 'error' && <p className="error-text">{error.message}</p>}
            {status === 'ready' && (
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
