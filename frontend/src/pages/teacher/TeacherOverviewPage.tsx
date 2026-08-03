import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';
import { LearningProgressChart } from '../../features/learning-progress/components/LearningProgressChart';

export function TeacherOverviewPage() {
  return (
    <PagePlaceholder
      eyebrow="Teacher"
      title="Teacher Overview"
      description="Managed class summary, next sessions, tuition status, pending grading, and class health."
      modules={[
        { kicker: 'features/classes', title: 'Managed classes', description: 'Class selector drawer and class-level KPI cards.' },
        { kicker: 'features/learning-progress', title: 'Class status', description: 'Performance groups, attendance, and risk indicators.' },
        { kicker: 'features/assignments', title: 'Grading workload', description: 'Assignments that need teacher action.' },
      ]}
    >
      <LearningProgressChart />
    </PagePlaceholder>
  );
}
