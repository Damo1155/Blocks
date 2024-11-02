'use client';

import React from 'react';

// Services
import { validateComponentConfiguration } from '@/services/validation/controls/switch';

// Types
import { SwitchProps } from '../../types/controls/switch';

export const Switch = (props: SwitchProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    name,
    state,
    label,
    disabled,
    readOnly,
    onChange,
    ariaLabel,
    selectionValues,
  } = props;

  const onSwitchChange = (value: boolean) => {
    if (readOnly) {
      return;
    }

    const { on, off } = selectionValues;

    const storageValue = value ? on : off;

    onChange({ value: storageValue });
  };

  return (
    // TODO : Will need the required asterisk to be embedded
    <label htmlFor={id} aria-label={ariaLabel ? ariaLabel : undefined}>
      {label}

      <input
        id={id}
        name={name}
        role="switch"
        type="checkbox"
        disabled={disabled}
        readOnly={readOnly}
        checked={state.value === selectionValues.on}
        onChange={(event) => onSwitchChange(event.target.checked)}
      />
    </label>
  );
};
