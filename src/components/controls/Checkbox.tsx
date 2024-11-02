'use client';

import React, { useEffect, useState } from 'react';

// Types
import { CheckboxProps } from '../../types/controls/checkbox';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import { validate } from '../../services/validation/checkbox';
import { validateComponentConfiguration } from '@/services/validation/shared';

// Components
import { ValidationMessage } from '@/components/display/ValidationMessage';

export const Checkbox = (props: CheckboxProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    name,
    label,
    state,
    onChange,
    disabled,
    readOnly,
    ariaLabel,
    forceReset,
    validationRules,
    validate: triggerValidation,
  } = props;

  const { validationMessages } = useFormContext();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const onCheckboxChange = (value: boolean) => {
    if (readOnly) {
      return;
    }

    const validationMessage = validate({
      value: value,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);

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

  useEffect(() => {
    if (!triggerValidation) {
      return;
    }

    validateWithMessages();
  }, [triggerValidation]);

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

  useEffect(() => {
    if (!forceReset) {
      return;
    }

    const newValue = false;

    const validationMessage = validate({
      value: newValue,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(undefined);
    onChange({ value: newValue, isValid: !validationMessage });
  }, [forceReset]);

  return (
    <div>
      <label>
        <input
          id={id}
          name={name}
          type="checkbox"
          disabled={disabled}
          readOnly={readOnly}
          checked={state?.value}
          aria-required={validationRules?.required}
          aria-label={ariaLabel ? ariaLabel : undefined}
          onChange={(event) => onCheckboxChange(event.target.checked)}
        />

        {label && (
          <span>
            {label}
            {validationRules?.required && <small>*</small>}
          </span>
        )}
      </label>

      {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
    </div>
  );
};
