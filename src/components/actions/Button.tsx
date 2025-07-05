import React from 'react';
import classNames from 'classnames';

// Types
import { ButtonProps } from '../../types/actions/button';

export const Button = ({
  ref,
  type,
  onClick,
  disabled,
  children,
  className,
  autoFocus,
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      autoFocus={autoFocus}
      type={type ?? 'submit'}
      className={classNames('button', {
        [`${className}`]: className,
      })}
    >
      {children}
    </button>
  );
};
