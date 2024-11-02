import React from 'react';
import classNames from 'classnames';

// Types
import { Typography } from '../typography/Typography';
import { BadgeProps } from '../../types/display/badge';

export const Badge = ({
  icon,
  children,
  component,
  className,
  iconPosition,
}: BadgeProps) => {
  const Component = component;

  return (
    <Component
      className={classNames({
        [`${className}`]: className,
      })}
    >
      {iconPosition === 'left' && icon}

      <Typography component="span">{children}</Typography>

      {iconPosition === 'right' && icon}
    </Component>
  );
};
