import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import AppStoreBadge from '../components/AppStoreBadge';
import Screenshot from '../components/Screenshot';
import { SCREENSHOTS, SITE } from '../config';
import { usePageTitle } from '../hooks/usePageTitle';

interface Feature {
  title: string;
  body: string;
  icon: ReactNode;
}

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const FEATURES: Feature[] = [
  {
    title: 'Light pollution & Bortle maps',
    body: 'See sky brightness and Bortle class anywhere, built on NASA Black Marble satellite imagery, so you can find truly dark skies.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
        <path d="M9 4v14M15 6v14" />
      </svg>
    ),
  },
  {
    title: 'Astronomical forecasts',
    body: 'Cloud cover, moon phase and illumination, and darkness windows in one view, so you know when the sky will cooperate.',
    icon: (
      <svg {...iconProps}>
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 1 0 6 16.5" />
        <path d="M6 19h11.5" />
      </svg>
    ),
  },
  {
    title: 'Saved shooting sites',
    body: 'Save your favorite dark-sky spots and check conditions at any of them in a tap. Your sites sync across devices.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Sky alerts',
    body: 'Get reminders for new moons, clear-sky windows, and other moments worth packing the gear for.',
    icon: (
      <svg {...iconProps}>
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
];

const FREE_ITEMS = ['Light pollution & Bortle map', 'Basic astronomical forecast', 'Up to 3 saved sites'];
const PRO_ITEMS = ['Everything in Free', 'Unlimited saved sites', 'Extended forecasts', 'Sky alerts'];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  usePageTitle();
  const [heroShot, ...restShots] = SCREENSHOTS;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">For astrophotographers & stargazers</p>
            <h1>
              Find dark skies.
              <br />
              <span className="gradient-text">Plan the perfect night.</span>
            </h1>
            <p className="lead">
              AstroRadar combines light pollution maps, Bortle class, and astronomical forecasts so you can choose
              where and when to shoot before you leave home.
            </p>
            <div className="hero-actions">
              <AppStoreBadge />
              <Link to="/#features" className="btn btn-ghost">
                See features
              </Link>
            </div>
            <p className="muted small">Free to download · iPhone</p>
          </div>
          <div className="hero-visual">
            <div className="glow" aria-hidden="true" />
            {heroShot && <Screenshot {...heroShot} eager />}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>Everything you need to plan a night under the stars</h2>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="card feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p className="muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {restShots.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">A look inside</p>
              <h2>Built for the field, designed for the dark</h2>
            </div>
            <div className="shots-row">
              {SCREENSHOTS.map((s) => (
                <Screenshot key={s.src} {...s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section id="pro" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2>Start free. Go Pro when you're ready.</h2>
          </div>
          <div className="pricing-grid">
            <div className="card price-card">
              <h3>Free</h3>
              <p className="price">$0</p>
              <ul className="check-list">
                {FREE_ITEMS.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card price-card featured">
              <span className="badge">Pro</span>
              <h3>AstroRadar Pro</h3>
              <p className="price">{SITE.proPrice || 'Subscription'}</p>
              <ul className="check-list">
                {PRO_ITEMS.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="muted small">
                Billed through the Apple App Store. Cancel anytime in your App Store account settings.
                {!SITE.proPrice && ' Current pricing is shown in the app.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta card">
            <h2>Clear skies are out there.</h2>
            <p className="muted">Download AstroRadar and plan your next dark-sky session.</p>
            <AppStoreBadge />
          </div>
        </div>
      </section>
    </>
  );
}