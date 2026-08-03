import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherStudentsPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Students"
      description="Student list, attendance summary, learning progress, tuition status, and student details."
      modules={[
        { kicker: 'features/classes', title: 'Class members', description: 'Add, update, transfer, remove, and review class students.' },
        { kicker: 'features/learning-progress', title: 'Student progress', description: 'Learning goals, attendance, grades, and risk flags.' },
      ]}
      actions={['Add student', 'View student detail']}
    />
  );
}
