import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function StudentAssignmentsPage() {
  return (
    <PagePlaceholder
      eyebrow="Student"
      title="Assignments"
      description="Student assignment list, online work area, submission status, scores, and teacher feedback."
      modules={[
        { kicker: 'features/assignments', title: 'Assigned work', description: 'List, filters, deadline state, and start/continue actions.' },
        { kicker: 'features/learning-progress', title: 'Scores and feedback', description: 'Submitted work, grade summary, and feedback details.' },
      ]}
      actions={['Start assignment', 'View scores']}
    />
  );
}
