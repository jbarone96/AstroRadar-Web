import { Link } from 'react-router-dom';
import { SITE } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/icon-512.png" alt="" width={28} height={28} />
          <div>
            <strong>AstroRadar</strong>
            <p className="muted small">
              © {year} {SITE.company}. All rights reserved.
            </p>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/support">Support</Link>
          <a href={`mailto:${SITE.supportEmail}`}>Contact</a>
        </nav>
      </div>
      <div className="container">
        <p className="muted small footer-note">
          Apple, the Apple logo, and App Store are trademarks of Apple Inc., registered in the U.S. and other
          countries.
        </p>
      </div>
    </footer>
  );
}