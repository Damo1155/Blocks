'use client';

import React, { useState, useEffect } from 'react';

// Types
import { SelectProps } from '../../types/controls/select';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import { toKebabCase } from '../../services/utils/string';
import { validate } from '../../services/validation/controls/select';
import { validateComponentConfiguration } from '../../services/validation/controls/shared';

// Components
import { ValidationMessage } from '../../components/display/ValidationMessage';

export const Select = (props: SelectProps) => {
  validateComponentConfiguration(props);

  const {
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
  } = props;

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

  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
          {validationRules?.required && <small>*</small>}
        </label>
      )}

      <select
        id={id}
        name={name}
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
