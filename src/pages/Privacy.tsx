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
        information the App uses, how it is used, and the choices you have. By using {SITE.appName}, you agree to the
        use of information in accordance with this policy.
      </p>
      <p>
        <strong>
          {SITE.appName} does not require an account, and we do not collect your name, email address, or other
          contact details through the App.
        </strong>
      </p>

      <h2>Information the App Uses</h2>
      <h3>Location data</h3>
      <p>
        With your permission, {SITE.appName} accesses your device's GPS location to show light pollution levels,
        Bortle class, and astronomical forecasts for your current position or for a location you search for. To
        provide this, coordinates and search terms are sent to the mapping and forecast providers listed below at the
        time of each request. We do not store your location history on our servers.
      </p>
      <h3>Saved sites</h3>
      <p>
        If you save a location, its name and coordinates are stored locally on your device so you can return to it
        later. Saved sites are not uploaded to our servers. They remain on your device until you delete them in the
        App or uninstall the App.
      </p>
      <h3>Subscription and purchase data</h3>
      <p>
        Purchases are processed by Apple through the App Store. Subscription status is managed through RevenueCat,
        which uses an anonymous identifier to keep track of your entitlement. We do not receive or store your payment
        card details, and we do not receive your Apple ID.
      </p>
      <h3>Device and diagnostic information</h3>
      <p>
        We may receive basic technical information, such as device type, operating system version, and app version,
        to help diagnose issues and keep the App reliable.
      </p>
      <h3>Notifications</h3>
      <p>
        If you enable notifications, they are used only to schedule alerts (for example, moon phase reminders). Alerts
        are not based on tracking your behavior.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To provide core functionality, including maps, forecasts, saved sites, and search</li>
        <li>To process and manage subscriptions</li>
        <li>To maintain and improve the App's reliability</li>
        <li>To respond to support requests you send us</li>
      </ul>
      <p>
        <strong>We do not sell personal information, and we do not use location data for advertising.</strong>
      </p>

      <h2>Third-Party Services</h2>
      <p>{SITE.appName} relies on the following third-party services:</p>
      <ul>
        <li>
          <strong>Apple Maps</strong> for base map display
        </li>
        <li>
          <strong>Mapbox</strong> for location search and geocoding
        </li>
        <li>
          <strong>7Timer and NOAA</strong> for weather and astronomical forecast data
        </li>
        <li>
          <strong>RevenueCat</strong> for subscription management
        </li>
        <li>
          <strong>Apple App Store</strong> for purchases
        </li>
        <li>
          <strong>Cloudflare</strong> for hosting the App's light pollution map data
        </li>
        <li>
          <strong>NASA Black Marble (VIIRS)</strong> satellite imagery for light pollution data (this does not involve
          personal data)
        </li>
      </ul>
      <p>
        These providers may receive standard request information, such as your IP address and the coordinates being
        looked up, in order to respond. Each handles data under its own privacy policy.
      </p>

      <h2>Data Retention</h2>
      <p>
        Saved sites and App settings are stored on your device and remain there until you delete them or uninstall the
        App. We do not keep a copy. Subscription records are retained by Apple and RevenueCat under their own
        policies. If you email us, we keep that correspondence only as long as needed to help you.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>You can revoke location and notification permissions at any time in your device settings.</li>
        <li>You can delete individual saved sites in the App, or remove all App data by uninstalling the App.</li>
        <li>You can manage or cancel your subscription in your App Store account settings.</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        {SITE.appName} is not directed at children under 13, and we do not knowingly collect personal information
        from children under 13. If you believe a child has provided us with personal information, please contact us
        and we will delete it.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time, including if we add features such as user accounts. When
        we do, we will revise the "Last updated" date above and, where appropriate, notify you within the App.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about this Privacy Policy, contact us at {email}.</p>
    </LegalLayout>
  );
}