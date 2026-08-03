import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function LoginPage() {
  return (
    <PagePlaceholder
      eyebrow="Authentication"
      title="User Login"
      description="Authenticate registered teachers, students, and administrators."
      modules={[
        { kicker: 'Form', title: 'Credentials', description: 'Email, password, validation messages, and sign-in action.' },
        { kicker: 'Routing', title: 'Role redirect', description: 'Student accounts go to student overview; teachers go to teacher overview.' },
      ]}
      actions={['Sign in', 'Forgot password']}
    />
  );
}
