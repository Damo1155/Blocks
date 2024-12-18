import React from 'react';
import classNames from 'classnames';

// Types
import { BoxProps } from '../../types/container/box';

export const Box = ({ id, children, component, className }: BoxProps) => {
  const Component = component;

  return (
    <Component
      id={id}
      className={classNames({
        [`${className}`]: className,
      })}
    >
      {children}
    </Component>
  );
};
