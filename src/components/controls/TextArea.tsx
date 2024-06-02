'use client';

import React, { useId, FocusEvent, useState, useEffect } from 'react';

// Types
import { TextAreaProps } from '@/types/controls/textArea';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/textarea';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

export const TextArea = ({
  id,
  rows,
  name,
  label,
  state,
  onBlur,
  readOnly,
  disabled,
  onChange,
  hideLabel,
  forceReset,
  helpMessage,
  placeholder,
  validationRules,
  validate: triggerValidation,
}: TextAreaProps) => {
  const uniqueId = useId();
  const componentId = id ?? uniqueId;
  const { validationMessages } = useFormContext();

  const [remainingCharacters, setRemainingCharacters] = useState<number>(0);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    if (validationRules?.maxLength !== undefined) {
      setRemainingCharacters(
        validationRules?.maxLength - state.value.toString().length,
      );
    }
  }, [state.value]);

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

  const onInputBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
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
      {!hideLabel && <label htmlFor={componentId}>{label}</label>}

      <textarea
        rows={rows}
        name={name}
        id={componentId}
        value={state.value}
        disabled={disabled}
        readOnly={readOnly}
        onBlur={onInputBlur}
        placeholder={placeholder}
        onChange={(event) => onInputChange(event.target.value)}
      />

      {helpMessage && <div>{helpMessage}</div>}

      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};
