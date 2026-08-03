import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';
import { currentWeekDate, ScheduleCalendar } from '../../features/teaching/components/ScheduleCalendar';

const teachingEvents = [
  { title: 'Toán 10A - Đại số', start: currentWeekDate(0, 8), end: currentWeekDate(0, 9, 30), color: '#0b2f66' },
  { title: 'Toán 11B - Hình học', start: currentWeekDate(1, 18), end: currentWeekDate(1, 19, 30), color: '#3b826f' },
  { title: 'Luyện thi THPT', start: currentWeekDate(3, 19), end: currentWeekDate(3, 21), color: '#ff5c00' },
  { title: 'Toán 10A - Kiểm tra', start: currentWeekDate(5, 9), end: currentWeekDate(5, 10, 30), color: '#2f7cff' },
];

export function TeacherCalendarPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Teaching Calendar"
      description="Teacher schedule management, session details, attendance, and recurring class planning."
      modules={[
        { kicker: 'features/teaching', title: 'Teaching sessions', description: 'Week/month schedule, create session, postpone, cancel, and makeup sessions.' },
        { kicker: 'features/documents', title: 'Lesson resources', description: 'Attach lesson content and view session resources.' },
      ]}
      actions={['Create schedule', 'Take attendance']}
    >
      <ScheduleCalendar events={teachingEvents} editable />
    </PagePlaceholder>
  );
}
