'use client';

import React, { useState, useEffect } from 'react';

// Types
import {
  CheckboxGroupSelectionState,
  CheckboxGroupProps,
} from '../../types/controls/checkboxGroup';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import {
  validate,
  validateComponentConfiguration,
} from '../../services/validation/controls/checkboxGroup';

// Components
import { ValidationMessage } from '../display/ValidationMessage';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  validateComponentConfiguration(props);

  const {
    id,
    state,
    label,
    disabled,
    readOnly,
    onChange,
    ariaLabel,
    helpMessage,
    validationRules,
    validate: triggerValidation,
  } = props;

  const { validationMessages } = useFormContext();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const onCheckboxChange = (id: string) => {
    if (readOnly) {
      return;
    }

    const selection = state.selection.map(
      (item): CheckboxGroupSelectionState => {
        if (item.id === id) {
          item.checked = !item.checked;
        }

        return item;
      },
    );

    const validationMessage = validate({
      values: selection,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setErrorMessage(validationMessage);

    onChange({ selection: selection, isValid: !validationMessage });
  };

  const validateWithMessages = () => {
    const validationMessage = validate({
      values: state.selection,
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
      values: state.selection,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    onChange({ selection: state.selection, isValid: !validationMessage });
  }, []);

  const selected = state.selection.filter((option) => !option.checked);

  return (
    <div>
      <fieldset>
        <legend aria-label={ariaLabel}>{label}</legend>

        {helpMessage && <div>{helpMessage}</div>}

        {state.selection.map((option) => {
          const key = `${id}-${option.id}`;

          const isRequired =
            validationRules?.minChecked !== undefined &&
            validationRules.minChecked > 0 &&
            selected.length > validationRules.minChecked;

          return (
            <div key={key}>
              <label htmlFor={key}>
                <input
                  id={key}
                  name={key}
                  type="checkbox"
                  checked={option.checked}
                  aria-required={isRequired}
                  disabled={disabled || option.disabled}
                  readOnly={readOnly || option.readOnly}
                  onChange={() => onCheckboxChange(option.id)}
                />

                {option.label}
              </label>
            </div>
          );
        })}

        {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
      </fieldset>
    </div>
  );
};
