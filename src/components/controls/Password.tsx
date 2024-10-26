'use client';

import React, { useEffect, useState, FocusEvent } from 'react';

// Types
import { PasswordProps } from '@/types/controls/password';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/password';
import { validateComponentConfiguration } from '@/services/validation/shared';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

// Static Content
import content from '@/content/validation.json';

export const Password = (props: PasswordProps) => {
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
    helpMessage,
    placeholder,
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
      validationMessages: validationMessages,
    });

    onChange({ value: value, isValid: !validationMessage });
  };

  const validateWithMessages = () => {
    const validationMessage = validate({
      value: state.value,
      ruleSet: validationRules,
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
          {!validationRules?.required && <small>{content.optional}</small>}
        </label>
      )}

      <input
        id={id}
        name={name}
        type="password"
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
