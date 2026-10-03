import LegalLayout from '../components/LegalLayout';
import { SITE } from '../config';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Terms() {
  usePageTitle('Terms of Service');
  const email = <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>;
  const governingLaw = SITE.governingState
    ? `the laws of the United States and the State of ${SITE.governingState}`
    : `the laws of the United States and the state in which ${SITE.company} operates`;

  return (
    <LegalLayout title="Terms of Service" lastUpdated={SITE.legalLastUpdated}>
      <p>
        These Terms of Service ("Terms") govern your use of {SITE.appName} (the "App"), provided by {SITE.company}{' '}
        ("we," "us," or "our"). By using the App, you agree to be bound by these Terms. If you do not agree, do not
        use the App.
      </p>

      <h2>1. Use of the App</h2>
      <p>
        {SITE.appName} is a planning tool for astrophotography and stargazing that provides light pollution data and
        astronomical forecasts. You agree to use the App only for its intended purpose and in compliance with all
        applicable laws.
      </p>

      <h2>2. Accounts</h2>
      <p>
        Some features require an account. You are responsible for keeping your login credentials confidential and for
        all activity that occurs under your account.
      </p>

      <h2>3. Subscriptions</h2>
      <p>
        "{SITE.appName} Pro" is an optional subscription that unlocks unlimited saved sites, extended forecasts, and
        sky alerts.
      </p>
      <ul>
        <li>Subscriptions are billed through the Apple App Store.</li>
        <li>
          Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.
        </li>
        <li>
          You can manage or cancel your subscription in your App Store account settings. We do not process payments
          or issue refunds directly; refund requests are handled by Apple.
        </li>
        <li>If a free trial is offered, it converts to a paid subscription unless canceled before the trial ends.</li>
        <li>Prices may change, with notice provided in accordance with App Store policies.</li>
      </ul>

      <h2>4. Location and Data Accuracy</h2>
      <p>
        Light pollution, weather, and astronomical data in the App come from third-party and public datasets,
        including NASA Black Marble. This data is provided for planning purposes only. We do not guarantee its
        accuracy and are not responsible for decisions made based on it, including decisions to travel to remote
        locations. Always use your own judgment and take appropriate safety precautions.
      </p>

      <h2>5. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose</li>
        <li>Reverse-engineer or decompile the App, its data pipelines, or its source code</li>
        <li>Interfere with or disrupt the App's functionality or servers</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        The App's design, branding, and content are owned by {SITE.company}. We grant you a limited, non-exclusive,
        non-transferable license to use the App for personal, non-commercial purposes.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The App is provided "as is" and "as available," without warranties of any kind. We do not warrant that the
        App will be uninterrupted or error-free, or that its data will be accurate.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.company} is not liable for any indirect, incidental, special, or
        consequential damages arising from your use of the App, including travel, equipment, or time costs incurred
        based on data provided by the App.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your access to the App if you violate these Terms. You may stop using the App and
        delete your account at any time.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the App after changes take effect constitutes
        your acceptance of the revised Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>These Terms are governed by {governingLaw}.</p>

      <h2>12. Contact</h2>
      <p>Questions about these Terms? Contact us at {email}.</p>
    </LegalLayout>
  );
}