'use client';

import { isEmpty } from 'validator';
import React, { useEffect, useState } from 'react';

// Types
import {
  DateOfBirthProps,
  DateOfBirthOnChangeRequest,
} from '../../types/controls/dateOfBirth';

// Contexts
import { useFormContext } from '../../contexts/FormProvider';

// Services
import {
  formatDate,
  bindInitialState,
} from '../../services/controls/dateOfBirth';

// Components
import { ValidationMessage } from '../display/ValidationMessage';

type TriggerUpdateResponse = {
  day: string;
  year: string;
  month: string;
};

export const DateOfBirth = ({
  id,
  state,
  label,
  format,
  disabled,
  readOnly,
  onChange,
  validationRules,
  validate: triggerValidation,
}: DateOfBirthProps) => {
  const { formLabels, validationMessages } = useFormContext();

  const [isInitialised, setIsInitialised] = useState<boolean>(false);
  const [dayError, setDayError] = useState<string | undefined>(undefined);
  const [yearError, setYearError] = useState<string | undefined>(undefined);
  const [monthError, setMonthError] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const onFieldChange = ({ type, value }: DateOfBirthOnChangeRequest) => {
    const { day, year, month }: TriggerUpdateResponse = {
      day: type === 'day' ? value : (state.day ?? ''),
      year: type === 'year' ? value : (state.year ?? ''),
      month: type === 'month' ? value : (state.month ?? ''),
    };

    const { age, date, errorMessages } = formatDate({
      day: day,
      year: year,
      month: month,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    onChange({
      age: age,
      day: day,
      year: year,
      value: date,
      month: month,
      isValid:
        !errorMessages?.day &&
        !errorMessages?.year &&
        !errorMessages?.month &&
        !errorMessages?.miscellaneous,
    });
  };

  const onFieldBlur = () => validateWithMessages();

  const validateWithMessages = () => {
    const { errorMessages } = formatDate({
      day: state.day ?? '',
      year: state.year ?? '',
      month: state.month ?? '',
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    setDayError(errorMessages?.day);
    setYearError(errorMessages?.year);
    setMonthError(errorMessages?.month);
    setErrorMessage(errorMessages?.miscellaneous);
  };

  useEffect(() => {
    if (!triggerValidation) {
      return;
    }

    validateWithMessages();
  }, [triggerValidation]);

  useEffect(() => {
    setIsInitialised(true);

    if (isEmpty(state.value)) {
      return;
    }

    const { age, date, day, year, month, isValid } = bindInitialState({
      value: state.value,
      ruleSet: validationRules,
      validationMessages: validationMessages,
    });

    onChange({
      age: age,
      day: day,
      year: year,
      value: date,
      month: month,
      isValid: isValid,
    });
  }, []);

  if (!isInitialised) {
    return null;
  }

  return (
    <div>
      <fieldset>
        <legend>
          {label}
          {validationRules?.required && <small>*</small>}
        </legend>

        <div>
          {' '}
          {format === 'MMM dd yyyy' && (
            <div>
              <input
                type="text"
                maxLength={2}
                disabled={disabled}
                readOnly={readOnly}
                onBlur={onFieldBlur}
                id={`${id}-dob-month`}
                autoComplete="dob-month"
                value={state.month ?? ''}
                aria-label={formLabels.month}
                aria-invalid={monthError !== undefined}
                aria-required={validationRules?.required}
                onChange={(event) =>
                  onFieldChange({ type: 'month', value: event.target.value })
                }
              />
              <small>{formLabels.month}</small>
            </div>
          )}
          <div>
            <input
              type="text"
              maxLength={2}
              disabled={disabled}
              readOnly={readOnly}
              id={`${id}-dob-day`}
              onBlur={onFieldBlur}
              autoComplete="dob-day"
              value={state.day ?? ''}
              aria-label={formLabels.day}
              aria-invalid={dayError !== undefined}
              aria-required={validationRules?.required}
              onChange={(event) =>
                onFieldChange({ type: 'day', value: event.target.value })
              }
            />
            <small>{formLabels.day}</small>
          </div>
          {format !== 'MMM dd yyyy' && (
            <div>
              <input
                type="text"
                maxLength={2}
                disabled={disabled}
                readOnly={readOnly}
                onBlur={onFieldBlur}
                id={`${id}-dob-month`}
                autoComplete="dob-month"
                value={state.month ?? ''}
                aria-label={formLabels.month}
                aria-invalid={monthError !== undefined}
                aria-required={validationRules?.required}
                onChange={(event) =>
                  onFieldChange({ type: 'month', value: event.target.value })
                }
              />
              <small>{formLabels.month}</small>
            </div>
          )}
          <div>
            <input
              type="text"
              maxLength={4}
              disabled={disabled}
              readOnly={readOnly}
              onBlur={onFieldBlur}
              id={`${id}-dob-year`}
              autoComplete="dob-year"
              value={state.year ?? ''}
              aria-label={formLabels.year}
              aria-invalid={yearError !== undefined}
              aria-required={validationRules?.required}
              onChange={(event) =>
                onFieldChange({ type: 'year', value: event.target.value })
              }
            />
            <small>{formLabels.year}</small>
          </div>
        </div>

        {format === 'MMM dd yyyy' && monthError && (
          <ValidationMessage>{monthError}</ValidationMessage>
        )}

        {dayError && <ValidationMessage>{dayError}</ValidationMessage>}

        {format !== 'MMM dd yyyy' && monthError && (
          <ValidationMessage>{monthError}</ValidationMessage>
        )}

        {yearError && <ValidationMessage>{yearError}</ValidationMessage>}
        {errorMessage && <ValidationMessage>{errorMessage}</ValidationMessage>}
      </fieldset>
    </div>
  );
};
