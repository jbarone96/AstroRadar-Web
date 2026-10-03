import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} · AstroRadar`
      : 'AstroRadar — Plan darker skies and sharper shots';
  }, [title]);
}