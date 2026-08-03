import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function StudentDiscussionPage() {
  return (
    <PagePlaceholder
      eyebrow="Student"
      title="Class Discussion"
      description="Group discussion, questions, private messages, and shared files."
      modules={[
        { kicker: 'features/communication', title: 'Class messages', description: 'Group channels, private chat, comments, and file sharing.' },
      ]}
      actions={['Ask question', 'Send message']}
    />
  );
}
