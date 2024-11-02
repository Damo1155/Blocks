'use client';

import classNames from 'classnames';
import React, { forwardRef } from 'react';

// Types
import { ButtonProps } from '../../types/actions/button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type, onClick, disabled, children, autoFocus, className } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autoFocus}
        type={type ?? 'submit'}
        className={classNames({
          [`${className}`]: className,
        })}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
