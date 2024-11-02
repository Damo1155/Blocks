import React from 'react';
import classNames from 'classnames';

// Types
import { LinkProps } from '../../types/actions/links';

export const Link = ({
  to,
  rel,
  type,
  target,
  onClick,
  children,
  className,
}: LinkProps) => {
  const formattedUrl = {
    default: to,
    mailto: `mailto:${to}`,
    telephone: `tel:${to}`,
  }[type];

  return (
    <a
      rel={rel}
      target={target}
      onClick={onClick}
      href={formattedUrl}
      className={classNames({
        [`${className}`]: className,
      })}
    >
      {children}
    </a>
  );
};
