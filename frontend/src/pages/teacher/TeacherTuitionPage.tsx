import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';
import { TuitionStatisticsChart } from '../../features/tuition/components/TuitionStatisticsChart';

export function TeacherTuitionPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Tuition Fee Management"
      description="Create tuition fees, configure recipients, confirm payments, and monitor outstanding balances."
      modules={[
        { kicker: 'features/tuition', title: 'Payment tracking', description: 'Payment list, status filters, reminders, receipts, and confirmation actions.' },
        { kicker: 'features/classes', title: 'Class recipients', description: 'Fee recipients are scoped by class membership.' },
      ]}
      actions={['Create fee', 'Send reminder']}
    >
      <TuitionStatisticsChart />
    </PagePlaceholder>
  );
}
