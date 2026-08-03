import { Link } from 'react-router-dom';
import { PagePlaceholder } from '../../shared/components/ui/PagePlaceholder';

export function LandingPage() {
  return (
    <>
      <PagePlaceholder
        eyebrow="Public"
        title="TuteClass Landing"
        description="Entry point for guests, teachers, and students before authentication."
        modules={[
          { kicker: 'Hero', title: 'Product value', description: 'Introduce tutoring class management and primary CTA.' },
          { kicker: 'Solution', title: 'Teacher and student showcase', description: 'Preview calendar, assignments, resources, communication, and AI support.' },
          { kicker: 'CTA', title: 'Get started', description: 'Route visitors into login or role-based registration.' },
        ]}
      />
      <div className="landing-actions">
        <Link to="/login">Sign in</Link>
        <Link to="/register">Create account</Link>
      </div>
    </>
  );
}
