'use client';

import React, { useId, useState, useEffect } from 'react';

// Types
import { SelectProps } from '@/types/controls/select';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/select';
import { toKebabCase } from '@/services/utils/extensions/string';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

// Static Content
import content from '@/content/validation.json';

export const Select = ({
  id,
  name,
  label,
  state,
  options,
  readOnly,
  onChange,
  ariaLabel,
  forceReset,
  helpMessage,
  validationRules,
  validate: triggerValidation,
}: SelectProps) => {
  const uniqueId = useId();
  const componentId = id ?? uniqueId;
  const { validationMessages } = useFormContext();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const onSelectChange = (value: string) => {
    if (readOnly) {
      return;
    }

    const isValid = validateWithMessages(value);

    onChange({ value: value, isValid: isValid });
  };

  const validateWithMessages = (value: string) => {
    const validationMessage = validate({
      value: value,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);

    return validationMessage === '' || validationMessage === undefined;
  };

  useEffect(() => {
    if (!triggerValidation) {
      return;
    }

    validateWithMessages(state.value);
  }, [triggerValidation]);

  useEffect(() => {
    if (!forceReset) {
      return;
    }

    const newValue = '';

    const validationMessage = validate({
      value: newValue,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(undefined);
    onChange({ value: newValue, isValid: !validationMessage });
  }, [forceReset]);

  // Purpose  : Will silently validate the component as part of first load so
  //            the `isValid` state is correctly configured.
  useEffect(() => {
    const validationMessage = validate({
      value: state.value,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    onChange({ value: state.value, isValid: !validationMessage });
  }, []);

  // TODO   :   Render within an optgroup
  return (
    <div>
      {label && (
        <label htmlFor={componentId}>
          {label}
          {!validationRules?.required && <small>{content.optional}</small>}
        </label>
      )}

      <select
        name={name}
        id={componentId}
        value={state.value}
        aria-required={validationRules?.required}
        aria-label={ariaLabel ? ariaLabel : undefined}
        onChange={(event) => onSelectChange(event.target.value)}
      >
        {options.map(({ value, disabled, text }) => (
          <option
            value={value}
            disabled={disabled}
            key={`select-option-${toKebabCase(value ?? '')}`}
          >
            {text}
          </option>
        ))}
      </select>

      {helpMessage && <div>{helpMessage}</div>}

      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};
