'use client';

import React, { useEffect, useState, FocusEvent } from 'react';

// Types
import { PostalCodeProps } from '../../types/controls/postalCode';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import { validate } from '../../services/validation/controls/postalCode';
import { validateComponentConfiguration } from '../../services/validation/controls/shared';

// Components
import { ValidationMessage } from '../../components/display/ValidationMessage';

export const PostalCode = (props: PostalCodeProps) => {
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
    countryCode,
    helpMessage,
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

    onChange({ value: value, isValid: !validationMessage });
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

  const onInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    onBlur?.(event);

    validateWithMessages();
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

    setErrorMessage(undefined);
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
