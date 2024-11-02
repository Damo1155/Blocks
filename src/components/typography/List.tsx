import React from 'react';
import classNames from 'classnames';

// Types
import { ListProps } from '../../types/typography/list';

export const List = ({ id, component, children, className }: ListProps) => {
  const Component = component;

  return (
    <Component
      id={id}
      className={classNames({
        [`${className}`]: className,
      })}
    >
      {children.map(({ key, content }) => (
        <li key={`list-item-${key}`}>{content}</li>
      ))}
    </Component>
  );
};
