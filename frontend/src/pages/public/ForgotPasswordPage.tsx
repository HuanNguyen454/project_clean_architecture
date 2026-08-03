import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function ForgotPasswordPage() {
  return (
    <PagePlaceholder
      eyebrow="Authentication"
      title="Forgot Password"
      description="Collect an email address and start the password recovery flow."
      modules={[
        { kicker: 'Recovery', title: 'Request reset', description: 'Send reset instructions without exposing account status details.' },
      ]}
      actions={['Send reset instructions']}
    />
  );
}
