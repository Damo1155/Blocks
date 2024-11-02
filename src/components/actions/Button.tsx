'use client';

import React, { forwardRef } from 'react';

// Types
import { ButtonProps } from '../../types/actions/button';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type, onClick, disabled, children, autoFocus } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        autoFocus={autoFocus}
        type={type ?? 'submit'}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
