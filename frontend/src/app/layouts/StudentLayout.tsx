import { NavLink, Outlet } from 'react-router-dom';

const studentLinks = [
  { to: '/student/overview', label: 'Tong quan' },
  { to: '/student/schedule', label: 'Lich hoc' },
  { to: '/student/assignments', label: 'Bai tap' },
  { to: '/student/resources', label: 'Tai lieu' },
  { to: '/student/discussion', label: 'Trao doi' },
];

export function StudentLayout() {
  return (
    <div className="role-shell role-shell--student">
      <header className="role-topbar">
        <div>
          <span className="brand-mark">S</span>
          <strong>Student Workspace</strong>
        </div>
        <nav className="role-nav" aria-label="Student navigation">
          {studentLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
