'use client';

import React, { FocusEvent, useState, useEffect } from 'react';

// Types
import { TextAreaProps } from '@/types/controls/textArea';

// Contexts
import { useFormContext } from '@/contexts/FormProvider';

// Services
import { validate } from '@/services/validation/controls/textarea';
import { validateComponentConfiguration } from '@/services/validation/controls/shared';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

export const TextArea = (props: TextAreaProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    rows,
    name,
    label,
    state,
    onBlur,
    readOnly,
    disabled,
    onChange,
    ariaLabel,
    forceReset,
    helpMessage,
    placeholder,
    validationRules,
    validate: triggerValidation,
  } = props;

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
      {label && (
        <label htmlFor={id}>
          <span>
            {label}
            {validationRules?.required && <small>*</small>}
          </span>
          {validationRules?.maxLength && (
            <span>
              {remainingCharacters}/{validationRules?.maxLength}
            </span>
          )}
        </label>
      )}

      <textarea
        id={id}
        rows={rows}
        name={name}
        value={state.value}
        disabled={disabled}
        readOnly={readOnly}
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
