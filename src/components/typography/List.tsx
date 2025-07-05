import React from 'react';
import classNames from 'classnames';

// Types
import { ListProps } from '../../types/typography/list';

export const List = ({ options, ol, ul, className }: ListProps) => {
  const Component = ul !== undefined ? 'ul' : 'ol';

  return (
    <Component
      className={classNames({
        [`${ol}`]: ol !== undefined,
        [`${ul}`]: ul !== undefined,
        [`${className}`]: className,
      })}
    >
      {options.map(({ key, content }) => (
        <li key={`list-item-${key}`}>{content}</li>
      ))}
    </Component>
  );
};
