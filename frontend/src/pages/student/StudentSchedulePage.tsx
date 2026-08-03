import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';
import { currentWeekDate, ScheduleCalendar } from '../../features/teaching/components/ScheduleCalendar';

const studyEvents = [
  { title: 'Toán - Đại số', start: currentWeekDate(0, 8), end: currentWeekDate(0, 9, 30), color: '#0b2f66' },
  { title: 'Tiếng Anh - Giao tiếp', start: currentWeekDate(2, 18), end: currentWeekDate(2, 19, 30), color: '#3b826f' },
  { title: 'Vật lý - Cơ học', start: currentWeekDate(4, 19), end: currentWeekDate(4, 20, 30), color: '#ff5c00' },
];

export function StudentSchedulePage() {
  return (
    <PagePlaceholder
      eyebrow="Student"
      title="Study Schedule"
      description="Weekly and monthly class timetable for student learning sessions."
      modules={[
        { kicker: 'features/teaching', title: 'Calendar views', description: 'Week/month switch, today navigation, and lesson cards.' },
        { kicker: 'features/assignments', title: 'Lesson actions', description: 'Open related assignments from lesson details.' },
      ]}
    >
      <ScheduleCalendar events={studyEvents} />
    </PagePlaceholder>
  );
}
