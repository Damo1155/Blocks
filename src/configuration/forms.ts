// Types
import {
  FormLabels,
  FormValidationMessages,
} from '../types/contexts/formProvider';

// Static Content
import formContent from '../content/form.json';
import validationContent from '../content/validation.json';

export const validationMessages: FormValidationMessages = {
  isRequired: validationContent['validation-is-required'],
  textNotNumeric: validationContent['validation-not-numeric'],
  invalidEmail: validationContent['validation-invalid-email-address'],
  invalidPostalCode: validationContent['validation-invalid-postal-code'],
  textMaximumLength: validationContent['validation-exceeded-maximum-length'],
  textMinimumLength:
    validationContent['validation-not-exceeded-minimum-length'],
  radioGroupSelectAnOption:
    validationContent['validation-radio-group-select-option'],

  contactNumberInvalid: validationContent['validation-contact-number-invalid'],
  contactNumberTooLong: validationContent['validation-contact-number-too-long'],
  contactNumberTooShort:
    validationContent['validation-contact-number-too-short'],

  checkboxGroupMaxSelected:
    validationContent['validation-checkbox-group-maximum-selected'],
  checkboxGroupMinSelected:
    validationContent['validation-checkbox-group-minimum-selected'],
  checkboxGroupInvalidSelection:
    validationContent['validation-checkbox-group-invalid-selection'],

  dayBetween: validationContent['validation-day-between'],
  dayRequired: validationContent['validation-day-required'],
  dayNotNumeric: validationContent['validation-day-not-numeric'],

  monthBetween: validationContent['validation-month-between'],
  monthRequired: validationContent['validation-month-required'],
  monthNotNumeric: validationContent['validation-month-not-numeric'],

  yearToEarly: validationContent['validation-year-to-early'],
  yearInFuture: validationContent['validation-year-in-future'],
  yearRequired: validationContent['validation-year-required'],
  yearNotNumeric: validationContent['validation-year-not-numeric'],

  minimumAge: validationContent['validation-minimum-age'],
  invalidDate: validationContent['validation-invalid-date'],
  dateInFuture: validationContent['validation-date-in-future'],
  missingFields: validationContent['validation-missing-fields'],
};

export const formLabels: FormLabels = {
  day: formContent['form-label-day'],
  year: formContent['form-label-year'],
  month: formContent['form-label-month'],
};
