import { NavLink, Outlet } from 'react-router-dom';

const publicLinks = [
  { to: '/', label: 'Landing' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
];

export function PublicLayout() {
  return (
    <div className="role-shell role-shell--public">
      <header className="role-topbar">
        <div>
          <span className="brand-mark">T</span>
          <strong>TuteClass</strong>
        </div>
        <nav className="role-nav" aria-label="Public navigation">
          {publicLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
