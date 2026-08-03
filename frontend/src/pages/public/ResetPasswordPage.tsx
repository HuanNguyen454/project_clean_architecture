import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function ResetPasswordPage() {
  return (
    <PagePlaceholder
      eyebrow="Authentication"
      title="Reset Password"
      description="Verify reset token and allow the user to create a new password."
      modules={[
        { kicker: 'Security', title: 'New password', description: 'Password policy, confirmation, and success feedback.' },
      ]}
      actions={['Update password']}
    />
  );
}
