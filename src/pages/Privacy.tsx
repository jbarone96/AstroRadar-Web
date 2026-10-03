import LegalLayout from '../components/LegalLayout';
import { SITE } from '../config';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Privacy() {
  usePageTitle('Privacy Policy');
  const email = <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>;

  return (
    <LegalLayout title="Privacy Policy" lastUpdated={SITE.legalLastUpdated}>
      <p>
        {SITE.company} ("we," "us," or "our") operates {SITE.appName} (the "App"). This Privacy Policy explains what
        information we collect, how we use it, and the choices you have. By using {SITE.appName}, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      <h2>Information We Collect</h2>
      <h3>Location data</h3>
      <p>
        With your permission, {SITE.appName} accesses your device's GPS location to show light pollution levels,
        Bortle class, and astronomical forecasts for your current position or for a location you search for. Searched
        locations are used to perform geocoding lookups through our mapping provider.
      </p>
      <h3>Saved sites</h3>
      <p>
        If you save a location in the App, we store its name and coordinates so you can return to it later. Saved
        sites are tied to your account and persist until you delete them.
      </p>
      <h3>Account information</h3>
      <p>
        We collect basic account information, such as your email address, to authenticate you and sync your saved
        data across devices.
      </p>
      <h3>Subscription and purchase data</h3>
      <p>
        Purchases are processed by Apple through the App Store. Subscription status is managed through RevenueCat. We
        do not receive or store your payment card details.
      </p>
      <h3>Device and usage information</h3>
      <p>
        We may collect device type, operating system version, and app version to help diagnose issues and keep the
        App reliable.
      </p>
      <h3>Notifications</h3>
      <p>
        If you enable notifications, they are used only to schedule local alerts on your device (for example, moon
        phase reminders). Alerts are not based on tracking your behavior.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide core functionality, including maps, forecasts, saved sites, and search</li>
        <li>To process and manage subscriptions</li>
        <li>To sync your data across devices</li>
        <li>To maintain and improve the App's reliability</li>
        <li>To respond to support requests</li>
      </ul>
      <p>
        <strong>We do not sell your personal information, and we do not use your location data for advertising.</strong>
      </p>

      <h2>Third-Party Services</h2>
      <p>{SITE.appName} relies on the following third-party services:</p>
      <ul>
        <li>
          <strong>Mapbox</strong> for location search and geocoding
        </li>
        <li>
          <strong>Firebase (Google)</strong> for authentication and data storage
        </li>
        <li>
          <strong>RevenueCat</strong> for subscription management
        </li>
        <li>
          <strong>Apple App Store</strong> for purchases
        </li>
        <li>
          <strong>NASA Black Marble (VIIRS)</strong> satellite imagery for light pollution data (this does not involve
          personal data)
        </li>
      </ul>
      <p>Each of these services handles data under its own privacy policy.</p>

      <h2>Data Retention</h2>
      <p>
        We retain your information while your account is active. You can delete individual saved sites at any time in
        the App. {/* If you add in-app account deletion, update this sentence to mention it. */}
        To delete your account and all associated data, contact us at {email}.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>You can revoke location and notification permissions at any time in your device settings.</li>
        <li>You can request deletion of your account and data by contacting us at {email}.</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        {SITE.appName} is not directed at children under 13, and we do not knowingly collect personal information
        from children under 13. If you believe a child has provided us with personal information, please contact us
        and we will delete it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above
        and, where appropriate, notify you within the App.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about this Privacy Policy, contact us at {email}.</p>
    </LegalLayout>
  );
}