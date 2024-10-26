'use client';

import React, { useState, useEffect } from 'react';

// Types
import { RadioGroupProps } from '../../types/controls/radioGroup';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import {
  validate,
  validateComponentConfiguration,
} from '../../services/validation/radioGroup';
import { toKebabCase } from '@/services/utils/extensions/string';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

// Static Content
import content from '@/content/validation.json';

export const RadioGroup = (props: RadioGroupProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    name,
    label,
    state,
    options,
    disabled,
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

  const onRadioChange = (radioValue: string) => {
    const isRadioValid = isRadioGroupValid(radioValue);

    onChange({ isValid: isRadioValid, radioValue: radioValue });
  };

  const isRadioGroupValid = (radioValue: string): boolean => {
    const validationMessage = validate({
      value: radioValue,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);

    return !validationMessage;
  };

  useEffect(() => {
    if (!triggerValidation) {
      return;
    }

    isRadioGroupValid(state.radioValue);
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
    onChange({ radioValue: newValue, isValid: !validationMessage });
  }, [forceReset]);

  return (
    <div>
      <fieldset>
        <legend aria-label={ariaLabel}>
          {label}
          {!validationRules?.required && <small>{content.optional}</small>}
        </legend>

        {helpMessage && <small>{helpMessage}</small>}

        <div>
          {options.map((option) => {
            const convertLabel = toKebabCase(option.label);
            const key = `${id}-${convertLabel}`;

            return (
              <label htmlFor={key}>
                <input
                  id={key}
                  name={name}
                  type="radio"
                  value={option.value}
                  disabled={option.disabled || disabled}
                  readOnly={option.readOnly || readOnly}
                  aria-required={validationRules?.required}
                  checked={state.radioValue === option.value}
                  onChange={() => onRadioChange(option.value)}
                />
                {label}
              </label>
            );
          })}

          {errorMessage && (
            <ValidationMessage>{errorMessage}</ValidationMessage>
          )}
        </div>
      </fieldset>
    </div>
  );
};
