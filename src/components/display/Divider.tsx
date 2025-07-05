import React from 'react';
import classNames from 'classnames';

// Types
import { DividerProps } from '../../types/display/divider';

export const Divider = ({ ref, content, className }: DividerProps) => (
  <hr
    ref={ref}
    data-content={content}
    className={classNames({
      [`${className}`]: className,
    })}
  />
);
