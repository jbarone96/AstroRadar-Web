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

  // Set to false (or remove the line) once Android ships.
  androidComingSoon: true,

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
    alt: 'AstroRadar light pollution map of the U.S. Midwest showing city sky glow',
    caption: 'Light pollution map',
  },
  {
    src: '/screenshots/tonight.png',
    alt: 'AstroRadar Tonight screen with a conditions score, overnight outlook, and top targets',
    caption: 'Tonight’s conditions',
  },
  {
    src: '/screenshots/sites.png',
    alt: 'AstroRadar saved locations with scores, best viewing windows, and Bortle class',
    caption: 'Saved sites',
  },
  {
    src: '/screenshots/events.png',
    alt: 'AstroRadar moon phase and upcoming sky events such as meteor showers and eclipses',
    caption: 'Moon & sky events',
  },
];