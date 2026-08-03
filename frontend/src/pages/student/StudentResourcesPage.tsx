import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function StudentResourcesPage() {
  return (
    <PagePlaceholder
      eyebrow="Student"
      title="Class Resources"
      description="Learning materials, videos, links, and files shared by teachers."
      modules={[
        { kicker: 'features/documents', title: 'Resource library', description: 'Course-level and session-level materials.' },
        { kicker: 'features/communication', title: 'Material notifications', description: 'New resource alerts and teacher recommendations.' },
      ]}
    />
  );
}
