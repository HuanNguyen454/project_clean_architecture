import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherHomeworkCreatePage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Create Homework"
      description="Assignment creation flow with upload, AI-assisted question generation, schedule, and submission settings."
      modules={[
        { kicker: 'features/assignments', title: 'Assignment setup', description: 'Title, description, deadline, duration, and submission policy.' },
        { kicker: 'features/subscription-ai', title: 'AI support', description: 'Optional AI-assisted question generation from uploaded materials.' },
      ]}
      actions={['Save draft', 'Publish homework']}
    />
  );
}
