'use client';

import React, { useEffect, useState, FocusEvent, useId } from 'react';

// Types
import { PostalCodeProps } from '@/types/controls/postalCode';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/postalCode';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

// Static Content
import content from '@/content/validation.json';

export const PostalCode = ({
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
}: PostalCodeProps) => {
  const uniqueId = useId();
  const componentId = id ?? uniqueId;
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
        <label htmlFor={componentId}>
          {label}
          {!validationRules?.required && <small>{content.optional}</small>}
        </label>
      )}

      <input
        type="text"
        name={name}
        id={componentId}
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
