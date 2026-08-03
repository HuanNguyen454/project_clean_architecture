import { NavLink, Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div className="role-shell role-shell--admin">
      <header className="role-topbar">
        <div>
          <span className="brand-mark">A</span>
          <strong>Admin Workspace</strong>
        </div>
        <nav className="role-nav" aria-label="Admin navigation">
          <NavLink to="/admin">Dashboard</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
