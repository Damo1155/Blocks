'use client';

import React, { useEffect, useState, FocusEvent, useId } from 'react';

// Types
import { TextProps } from '@/types/controls/text';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/text';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

export const Text = ({
  id,
  name,
  label,
  state,
  onBlur,
  onKeyUp,
  onChange,
  disabled,
  readOnly,
  hideLabel,
  forceReset,
  helpMessage,
  placeholder,
  validationRules,
  validate: triggerValidation,
}: TextProps) => {
  const uniqueId = useId();
  const componentId = id ?? uniqueId;
  const { validationMessages } = useFormContext();

  const [errorMessage, setErrorMessage] = useState<string>('');

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

    setErrorMessage(validationMessage ?? '');
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

    setErrorMessage('');
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
      {!hideLabel && <label htmlFor={componentId}>{label}</label>}

      {helpMessage && <div>{helpMessage}</div>}

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
        maxLength={validationRules?.maxLength}
        minLength={validationRules?.minLength}
        aria-required={validationRules?.required}
        aria-label={hideLabel ? label : undefined}
        onChange={(event) => onInputChange(event.target.value)}
      />

      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};
