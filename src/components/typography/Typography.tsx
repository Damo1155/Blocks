import React from 'react';
import classNames from 'classnames';

// Types
import { TypographyProps } from '../../types/typography/typography';

export const Typography = ({
  id,
  margin,
  padding,
  children,
  component,
  className,
  addSrOnly,
}: TypographyProps) => {
  const Component = component;

  return (
    <Component
      id={id}
      className={classNames({
        'sr-only': addSrOnly,
        [`${className}`]: className,

        [`${margin?.m}`]: margin?.m,
        [`${margin?.mb}`]: margin?.mb,
        [`${margin?.ml}`]: margin?.ml,
        [`${margin?.mr}`]: margin?.mr,
        [`${margin?.mt}`]: margin?.mt,
        [`${margin?.my}`]: margin?.my,
        [`${margin?.mx}`]: margin?.mx,

        [`${padding?.p}`]: padding?.p,
        [`${padding?.pb}`]: padding?.pb,
        [`${padding?.pl}`]: padding?.pl,
        [`${padding?.pr}`]: padding?.pr,
        [`${padding?.pt}`]: padding?.pt,
        [`${padding?.py}`]: padding?.py,
        [`${padding?.px}`]: padding?.px,
      })}
    >
      {children}
    </Component>
  );
};
