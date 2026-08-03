import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherHomeworkGradePage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Grade Homework"
      description="Review submissions, score answers, provide feedback, and publish grades."
      modules={[
        { kicker: 'features/assignments', title: 'Submission review', description: 'Student submission queue, filters, scoring, and feedback.' },
        { kicker: 'features/learning-progress', title: 'Grade impact', description: 'Published results feed student progress tracking.' },
      ]}
      actions={['Save grade', 'Publish feedback']}
    />
  );
}
