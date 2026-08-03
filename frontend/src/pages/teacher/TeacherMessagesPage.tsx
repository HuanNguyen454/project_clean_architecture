import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function TeacherMessagesPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Class Messages"
      description="Class announcements, private messages, student questions, and shared files."
      modules={[
        { kicker: 'features/communication', title: 'Conversation list', description: 'Class channels, private conversations, pinned announcements, and file sharing.' },
      ]}
      actions={['Send announcement', 'Reply to student']}
    />
  );
}
