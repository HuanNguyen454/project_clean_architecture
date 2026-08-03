import { Button, Card } from 'antd';
import type { ReactNode } from 'react';

interface PlaceholderModule {
  kicker: string;
  title: string;
  description: string;
}

interface PagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
  modules?: PlaceholderModule[];
  actions?: string[];
  children?: ReactNode;
}

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  modules = [],
  actions = [],
  children,
}: PagePlaceholderProps) {
  return (
    <main className="page-frame">
      <section className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section className="placeholder-grid" aria-label={`${title} modules`}>
        {modules.map((module) => (
          <Card className="placeholder-card" key={module.title}>
            <span>{module.kicker}</span>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </Card>
        ))}
      </section>

      {children && <section className="page-extension">{children}</section>}

      {actions.length > 0 && (
        <section className="action-strip" aria-label={`${title} actions`}>
          {actions.map((action) => (
            <Button key={action} type="primary">{action}</Button>
          ))}
        </section>
      )}
    </main>
  );
}
