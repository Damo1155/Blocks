'use client';

import React, { useEffect, useState, FocusEvent } from 'react';

// Types
import { PhoneProps } from '../../types/controls/phone';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import { phoneAdditionalDetails } from '../../services/phone';
import { validate } from '../../services/validation/controls/phone';
import { validateComponentConfiguration } from '../../services/validation/controls/phone';

// Components
import { ValidationMessage } from '../display/ValidationMessage';

export const Phone = (props: PhoneProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    name,
    label,
    state,
    onBlur,
    onKeyUp,
    onChange,
    disabled,
    readOnly,
    ariaLabel,
    forceReset,
    placeholder,
    helpMessage,
    countryCode,
    validationRules,
    validate: triggerValidation,
  } = props;

  const { validationMessages } = useFormContext();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const onInputChange = (value: string) => {
    const validationMessage = validate({
      value: value,
      ruleSet: validationRules,
      countryCode: countryCode,
      validationMessages: validationMessages,
    });

    onChange({
      value: value,
      isValid: !validationMessage,
      e164: phoneAdditionalDetails({
        value: value,
        countryCode: countryCode,
        validationMessage: validationMessage,
      }),
    });
  };

  const onInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    onBlur?.(event);

    validateWithMessages();
  };

  const validateWithMessages = () => {
    const validationMessage = validate({
      value: state.value,
      ruleSet: validationRules,
      countryCode: countryCode,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);
  };

  useEffect(() => {
    if (!triggerValidation) {
      return;
    }

    validateWithMessages();
  }, [triggerValidation]);

  useEffect(() => {
    if (!forceReset) {
      return;
    }

    const newValue = '';

    const validationMessage = validate({
      value: newValue,
      ruleSet: validationRules,
      countryCode: countryCode,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);
    onChange({ value: newValue, isValid: !validationMessage });
  }, [forceReset]);

  // Purpose  : Will silently validate the component as part of first load so
  //            the `isValid` state is correctly configured.
  useEffect(() => {
    const validationMessage = validate({
      value: state.value,
      ruleSet: validationRules,
      countryCode: countryCode,
      validationMessages: validationMessages,
    });

    const value = state.value;

    onChange({
      value: value,
      isValid: !validationMessage,
      e164: phoneAdditionalDetails({
        value: value,
        countryCode: countryCode,
        validationMessage: validationMessage,
      }),
    });
  }, []);

  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
          {validationRules?.required && <small>*</small>}
        </label>
      )}

      <input
        id={id}
        type="text"
        name={name}
        onKeyUp={onKeyUp}
        disabled={disabled}
        readOnly={readOnly}
        value={state.value}
        onBlur={onInputBlur}
        placeholder={placeholder}
        aria-required={validationRules?.required}
        aria-label={ariaLabel ? ariaLabel : undefined}
        onChange={(event) => onInputChange(event.target.value)}
      />

      {helpMessage && <div>{helpMessage}</div>}

      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};
