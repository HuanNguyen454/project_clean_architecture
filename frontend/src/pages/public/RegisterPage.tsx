import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function RegisterPage() {
  return (
    <PagePlaceholder
      eyebrow="Authentication"
      title="User Register"
      description="Role selection and account setup for Teacher or Student users."
      modules={[
        { kicker: 'Role', title: 'Teacher or Student', description: 'Choose the workspace type before profile setup.' },
        { kicker: 'Account', title: 'Registration form', description: 'Collect account information and start verification.' },
      ]}
      actions={['Create teacher account', 'Create student account']}
    />
  );
}
