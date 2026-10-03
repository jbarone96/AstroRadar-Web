import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <section className="page">
      <div className="container narrow">
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
        <h1>{title}</h1>
        <p className="muted">Last updated: {lastUpdated}</p>
        <article className="legal">{children}</article>
      </div>
    </section>
  );
}