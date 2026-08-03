import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherHomeworkPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Homework Management"
      description="Assignment overview by course or session, submission stats, reminders, and grading entry points."
      modules={[
        { kicker: 'features/assignments', title: 'By course', description: 'Course-level assignment list and status summary.' },
        { kicker: 'features/assignments', title: 'By session', description: 'Session-specific homework and related lesson context.' },
      ]}
      actions={['Create homework', 'Grade submissions']}
    />
  );
}
