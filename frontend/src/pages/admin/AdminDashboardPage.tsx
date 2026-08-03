import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function AdminDashboardPage() {
  return (
    <PagePlaceholder
      eyebrow="Administrator"
      title="System Administration"
      description="Placeholder for account, class, subscription, AI quota, usage statistics, and revenue management."
      modules={[
        { kicker: 'features/admin', title: 'User and class control', description: 'Suspend, reactivate, inspect, and moderate platform resources.' },
        { kicker: 'features/subscription-ai', title: 'Plans and AI quotas', description: 'Manage subscription plans and AI usage limits.' },
      ]}
    />
  );
}
