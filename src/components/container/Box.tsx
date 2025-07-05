import React from 'react';
import classNames from 'classnames';

// Types
import { BoxProps } from '../../types/container/box';

export const Box = ({
  id,
  ref,
  margin,
  padding,
  children,
  component,
  className,
  addSrOnly,
}: BoxProps) => {
  const Component = component;

  return (
    <Component
      id={id}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
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
