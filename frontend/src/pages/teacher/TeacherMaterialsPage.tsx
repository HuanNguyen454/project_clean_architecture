import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherMaterialsPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Resource Management"
      description="Upload, categorize, attach, update, and remove teaching materials by course or session."
      modules={[
        { kicker: 'features/documents', title: 'Course resources', description: 'Books, references, documents, links, and videos.' },
        { kicker: 'features/documents', title: 'Session resources', description: 'Materials attached to a specific teaching session.' },
      ]}
      actions={['Add material', 'Upload file']}
    />
  );
}
