import { SITE } from '../config';

interface Props {
  compact?: boolean;
}

export default function AppStoreBadge({ compact = false }: Props) {
  const height = compact ? 40 : 54;

  if (!SITE.appStoreUrl) {
    return (
      <span className={`coming-soon ${compact ? 'compact' : ''}`} aria-label={SITE.launchLabel}>
        <span className="pulse-dot" aria-hidden="true" />
        {compact ? 'Coming Oct 9' : SITE.launchLabel}
      </span>
    );
  }

  return (
    <a
      href={SITE.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge"
      aria-label="Download AstroRadar on the App Store"
    >
      <img src="/app-store-badge.svg" alt="Download on the App Store" height={height} style={{ height }} />
    </a>
  );
}