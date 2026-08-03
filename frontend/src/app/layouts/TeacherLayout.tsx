import { NavLink, Outlet } from 'react-router-dom';

const teacherLinks = [
  { to: '/teacher/overview', label: 'Tong quan' },
  { to: '/teacher/calendar', label: 'Lich day' },
  { to: '/teacher/students', label: 'Hoc vien' },
  { to: '/teacher/homework', label: 'Bai tap' },
  { to: '/teacher/materials', label: 'Tai lieu' },
  { to: '/teacher/messages', label: 'Trao doi' },
  { to: '/teacher/tuition', label: 'Hoc phi' },
];

export function TeacherLayout() {
  return (
    <div className="role-shell role-shell--teacher">
      <header className="role-topbar">
        <div>
          <span className="brand-mark">T</span>
          <strong>Teacher Workspace</strong>
        </div>
        <nav className="role-nav" aria-label="Teacher navigation">
          {teacherLinks.map((link) => (
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
