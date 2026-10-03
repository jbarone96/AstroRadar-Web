export interface ScreenshotItem {
  src: string;
  alt: string;
  caption: string;
}

export const SITE = {
  appName: 'AstroRadar',
  company: 'Sine Innovations',
  domain: 'astroradar.app',
  supportEmail: 'astroradar.app.support@gmail.com',

  // Paste your App Store link here once the listing is live,
  // e.g. 'https://apps.apple.com/app/astroradar/id1234567890'
  appStoreUrl: '',
  launchLabel: 'Coming to the App Store · Oct 9',

  legalLastUpdated: 'October 1, 2026',

  // Set to your state (e.g. 'North Carolina') to make the Terms specific.
  // Leave empty to use the general wording.
  governingState: '',

  // Optional display price for Pro, e.g. '$2.99/mo'. Leave empty to defer to the App Store.
  proPrice: '',
};

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    src: '/screenshots/map.png',
    alt: 'AstroRadar light pollution map showing Bortle classes',
    caption: 'Light pollution map',
  },
  {
    src: '/screenshots/forecast.png',
    alt: 'AstroRadar astronomical forecast screen',
    caption: 'Astronomical forecast',
  },
  {
    src: '/screenshots/sites.png',
    alt: 'AstroRadar saved shooting sites list',
    caption: 'Saved sites',
  },
  {
    src: '/screenshots/alerts.png',
    alt: 'AstroRadar sky alerts settings',
    caption: 'Sky alerts',
  },
];