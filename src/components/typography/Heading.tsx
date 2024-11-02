import React from 'react';
import classNames from 'classnames';

// Types
import { HeadingProps } from '../../types/typography/heading';

// Services
import { validate } from '../../services/validation/components/heading';

export const Heading = (props: HeadingProps) => {
  validate(props);

  const { id, size, children, component, className } = props;

  const Component = component;

  return (
    <Component
      id={id}
      className={classNames({
        [`${size}`]: size,
        [`${className}`]: className,
      })}
    >
      {children}
    </Component>
  );
};
