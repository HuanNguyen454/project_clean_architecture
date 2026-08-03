import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { PublicLayout } from './layouts/PublicLayout';
import { StudentLayout } from './layouts/StudentLayout';
import { TeacherLayout } from './layouts/TeacherLayout';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { ForgotPasswordPage } from '../pages/public/ForgotPasswordPage';
import { HealthPage } from '../pages/public/HealthPage';
import { LandingPage } from '../pages/public/LandingPage';
import { LoginPage } from '../pages/public/LoginPage';
import { RegisterPage } from '../pages/public/RegisterPage';
import { ResetPasswordPage } from '../pages/public/ResetPasswordPage';
import { StudentAssignmentsPage } from '../pages/student/StudentAssignmentsPage';
import { StudentDiscussionPage } from '../pages/student/StudentDiscussionPage';
import { StudentOverviewPage } from '../pages/student/StudentOverviewPage';
import { StudentResourcesPage } from '../pages/student/StudentResourcesPage';
import { TeacherHomeworkCreatePage } from '../pages/teacher/TeacherHomeworkCreatePage';
import { TeacherHomeworkGradePage } from '../pages/teacher/TeacherHomeworkGradePage';
import { TeacherHomeworkPage } from '../pages/teacher/TeacherHomeworkPage';
import { TeacherMaterialsPage } from '../pages/teacher/TeacherMaterialsPage';
import { TeacherMessagesPage } from '../pages/teacher/TeacherMessagesPage';
import { TeacherStudentsPage } from '../pages/teacher/TeacherStudentsPage';

const StudentSchedulePage = lazy(() => import('../pages/student/StudentSchedulePage').then((module) => ({
  default: module.StudentSchedulePage,
})));
const TeacherCalendarPage = lazy(() => import('../pages/teacher/TeacherCalendarPage').then((module) => ({
  default: module.TeacherCalendarPage,
})));
const TeacherOverviewPage = lazy(() => import('../pages/teacher/TeacherOverviewPage').then((module) => ({
  default: module.TeacherOverviewPage,
})));
const TeacherTuitionPage = lazy(() => import('../pages/teacher/TeacherTuitionPage').then((module) => ({
  default: module.TeacherTuitionPage,
})));

export function AppRouter() {
  return (
    <Suspense fallback={<div className="route-loader"><Spin size="large" /></div>}>
      <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="health" element={<HealthPage />} />
      </Route>

      <Route path="student" element={<StudentLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<StudentOverviewPage />} />
        <Route path="schedule" element={<StudentSchedulePage />} />
        <Route path="assignments" element={<StudentAssignmentsPage />} />
        <Route path="resources" element={<StudentResourcesPage />} />
        <Route path="discussion" element={<StudentDiscussionPage />} />
      </Route>

      <Route path="teacher" element={<TeacherLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<TeacherOverviewPage />} />
        <Route path="calendar" element={<TeacherCalendarPage />} />
        <Route path="students" element={<TeacherStudentsPage />} />
        <Route path="homework" element={<TeacherHomeworkPage />} />
        <Route path="homework/create" element={<TeacherHomeworkCreatePage />} />
        <Route path="homework/grade" element={<TeacherHomeworkGradePage />} />
        <Route path="materials" element={<TeacherMaterialsPage />} />
        <Route path="messages" element={<TeacherMessagesPage />} />
        <Route path="tuition" element={<TeacherTuitionPage />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
