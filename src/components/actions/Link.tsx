import React from 'react';

// Types
import { LinkProps } from '../../types/actions/links';

export const Link = ({
  to,
  rel,
  type,
  target,
  onClick,
  children,
}: LinkProps) => {
  const formattedUrl = {
    default: to,
    mailto: `mailto:${to}`,
    telephone: `tel:${to}`,
  }[type];

  return (
    <a rel={rel} target={target} href={formattedUrl} onClick={onClick}>
      {children}
    </a>
  );
};
