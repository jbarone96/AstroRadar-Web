import { useState } from 'react';
import type { ScreenshotItem } from '../config';

interface Props extends ScreenshotItem {
  eager?: boolean;
}

export default function Screenshot({ src, alt, caption, eager = false }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="shot">
      <div className="phone">
        {failed ? (
          <div className="phone-placeholder" role="img" aria-label={alt}>
            <span>{caption}</span>
          </div>
        ) : (
          <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}