// Types
import { ValidationMessages } from '@/types/contexts/forms';

// Static Content
import content from '@/content/validation.json';

export const validationMessages: ValidationMessages = {
  isRequired: content['validation-is-required'],
  textNotNumeric: content['validation-not-numeric'],
  invalidEmail: content['validation-invalid-email-address'],
  invalidPostalCode: content['validation-invalid-postal-code'],
  textMaximumLength: content['validation-exceeded-maximum-length'],
  textMinimumLength: content['validation-not-exceeded-minimum-length'],
  radioGroupSelectAnOption: content['validation-radio-group-select-option'],

  contactNumberInvalid: content['validation-contact-number-invalid'],
  contactNumberTooLong: content['validation-contact-number-too-long'],
  contactNumberTooShort: content['validation-contact-number-too-short'],

  checkboxGroupMaxSelected:
    content['validation-checkbox-group-maximum-selected'],
  checkboxGroupMinSelected:
    content['validation-checkbox-group-minimum-selected'],
  checkboxGroupInvalidSelection:
    content['validation-checkbox-group-invalid-selection'],
};
