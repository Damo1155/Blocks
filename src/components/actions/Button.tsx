import React from 'react';
import classNames from 'classnames';

// Types
import { CursorType } from '../../types/styling/cursor';
import { ButtonProps } from '../../types/actions/button';
import { BorderRadius } from '../../types/styling/border';

export const Button = ({
  ref,
  type,
  cursor,
  variant,
  padding,
  rounded,
  onClick,
  disabled,
  children,
  className,
  autoFocus,
  classNameOverride,
}: ButtonProps) => (
  <button
    ref={ref}
    onClick={onClick}
    disabled={disabled}
    autoFocus={autoFocus}
    type={type ?? 'submit'}
    className={classNames({
      [`${rounded}`]: rounded,
      [`${className}`]: className,
      [`${classNameOverride}`]: classNameOverride,

      // Vanilla Styles
      'px-4 py-2': !padding && !classNameOverride,
      [`${'cursor-not-allowed' satisfies CursorType}`]: disabled,
      [`${'rounded-sm' satisfies BorderRadius}`]:
        !rounded && !classNameOverride,

      [`${'cursor-not-allowed' satisfies CursorType}`]: disabled,

      // TODO : Target dark mode and set a font colour
      'bg-gray-400': variant && disabled,
      'bg-sky-400 hover:bg-sky-500 active:bg-sky-600':
        variant === 'informative' && !disabled,
      'bg-red-400 hover:bg-red-500 active:bg-red-600':
        variant === 'negative' && !disabled,
      'bg-green-400 hover:bg-green-500 active:bg-green-600':
        variant === 'positive' && !disabled,
      'bg-amber-400 hover:bg-amber-500 active:bg-amber-600':
        variant === 'notice' && !disabled,
      'bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600':
        variant === 'primary' && !disabled,

      // Custom Styles
      [`${cursor}`]: cursor && !disabled,

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
  </button>
);
