import { Link, NavLink } from 'react-router-dom';
import AppStoreBadge from './AppStoreBadge';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="AstroRadar home">
          <img src="/favicon.svg" alt="" width={32} height={32} />
          <span>AstroRadar</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link to="/#features">Features</Link>
          <Link to="/#pro">Pro</Link>
          <NavLink to="/support">Support</NavLink>
        </nav>
        <div className="header-cta">
          <AppStoreBadge compact />
        </div>
      </div>
    </header>
  );
}