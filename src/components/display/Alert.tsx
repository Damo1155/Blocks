import React from 'react';

// Types
import { AlertProps } from '../../types/display/alert';

// Components
import { Button } from '../actions/Button';

// Icons
import Close from '../../icons/close.svg';

export const Alert = ({
  icon,
  action,
  children,
  onDismiss,
  dismissText,
}: AlertProps) => (
  <div role="alert" aria-atomic={true}>
    <div>
      {children}
      {action}
    </div>

    {onDismiss && (
      <Button
        type="button"
        aria-label={dismissText}
        onClick={() => onDismiss(false)}
      >
        {icon}
        {!icon && <Close />}
      </Button>
    )}
  </div>
);
