import { Link } from 'react-router-dom';
import { SITE } from '../config';
import { usePageTitle } from '../hooks/usePageTitle';

const launched = Boolean(SITE.appStoreUrl);

const FAQS: { q: string; a: string }[] = [
  ...(!launched
    ? [
        {
          q: 'When does AstroRadar launch?',
          a: `AstroRadar is coming to the App Store in ${SITE.launchWindow}. Join the waitlist on the home page and we’ll email you the moment it’s live.`,
        },
      ]
    : []),
  {
    q: 'How do I cancel or manage AstroRadar Pro?',
    a: 'Subscriptions are managed by Apple. On your iPhone, open Settings → your name → Subscriptions → AstroRadar. Cancel at least 24 hours before your renewal date to avoid being charged for the next period.',
  },
  {
    q: 'How do I request a refund?',
    a: 'Refunds are handled by Apple, not by us. You can request one at reportaproblem.apple.com.',
  },
  {
    q: 'I bought Pro but it isn’t unlocked.',
    a: 'Make sure you are signed in with the same Apple ID you used to purchase, then use “Restore Purchases” in the app. If it still isn’t working, email us and include your app version.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. AstroRadar works without an account. Your saved sites and settings are stored on your device, and Pro is tied to your Apple ID, so you can restore it on any of your devices with “Restore Purchases.”',
  },
  {
    q: 'Is AstroRadar available on Android?',
    a: SITE.androidTestersWanted
      ? 'Not yet, but it’s in testing and we need Android testers! Sign up at the bottom of the home page with the Google account email you use for the Play Store, and we’ll send you a Google Play testing invite.'
      : 'Not yet. AstroRadar is launching on iPhone first, and an Android version is on the way.',
  },
  {
    q: 'Why does AstroRadar need my location?',
    a: 'Your location is used to show light pollution, Bortle class, and forecasts for where you are. You can deny or revoke location access at any time in Settings and search for locations manually instead.',
  },
  {
    q: 'How accurate is the light pollution data?',
    a: 'It is based on NASA Black Marble (VIIRS) satellite imagery and is best used for planning. Actual conditions on the ground can vary.',
  },
  {
    q: 'How do I delete my data?',
    a: `Your saved sites live on your device. Delete them individually in the app, or uninstall AstroRadar to remove all app data. If you signed up for email updates on our website, use the unsubscribe link in any email or contact ${SITE.supportEmail} to have your email removed.`,
  },
];

export default function Support() {
  usePageTitle('Support');

  return (
    <section className="page">
      <div className="container narrow">
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
        <h1>Support</h1>
        <p className="lead">Questions, bug reports, or feature ideas, we’d love to hear from you.</p>

        <div className="card contact-card">
          <div>
            <h2>Contact us</h2>
            <p className="muted">
              Email us and we’ll get back to you as soon as we can. For bugs, please include your device model, iOS
              version, and app version.
            </p>
          </div>
          <a className="btn btn-primary" href={`mailto:${SITE.supportEmail}?subject=AstroRadar%20Support`}>
            {SITE.supportEmail}
          </a>
        </div>

        <h2 className="faq-title">Frequently asked questions</h2>
        <div className="faq">
          {FAQS.map((item) => (
            <details key={item.q} className="card faq-item">
              <summary>{item.q}</summary>
              <p className="muted">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="muted small">
          See also our <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link>.
        </p>
      </div>
    </section>
  );
}