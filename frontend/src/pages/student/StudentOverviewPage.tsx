import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function StudentOverviewPage() {
  return (
    <PagePlaceholder
      eyebrow="Student"
      title="Student Overview"
      description="Class summary, upcoming schedule, due assignments, tuition details, and quick class switching."
      modules={[
        { kicker: 'features/classes', title: 'Active class summary', description: 'Class selector drawer and enrolled class cards.' },
        { kicker: 'features/assignments', title: 'Due assignments', description: 'Upcoming deadlines and priority tasks.' },
        { kicker: 'features/teaching', title: 'Schedule preview', description: 'Next sessions and lesson detail shortcuts.' },
      ]}
    />
  );
}
