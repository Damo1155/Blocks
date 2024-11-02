import React from 'react';
import classNames from 'classnames';

// Types
import { TypographyProps } from '../../types/typography/typography';

export const Typography = ({
  id,
  children,
  component,
  className,
}: TypographyProps) => {
  const Component = component;

  return (
    <Component id={id} className={classNames({ [`${className}`]: className })}>
      {children}
    </Component>
  );
};
