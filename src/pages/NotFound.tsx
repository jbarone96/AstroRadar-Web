import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="page">
      <div className="container narrow center">
        <p className="eyebrow">404</p>
        <h1>Lost in the dark</h1>
        <p className="muted">This page drifted out of view.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}