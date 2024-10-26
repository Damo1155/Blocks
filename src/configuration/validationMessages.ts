// Types
import { ValidationMessages } from '@/types/contexts/forms';

// Static Content
import content from '@/content/validation.json';

export const validationMessages: ValidationMessages = {
  isRequired: content.isRequired,
  invalidEmail: content.invalidEmail,
  textNotNumeric: content.notNumeric,
  invalidPostalCode: content.invalidPostalCode,
  textMaximumLength: content.exceededMaximumLength,
  textMinimumLength: content.notExceededMinimumLength,
  radioGroupSelectAnOption: content.radioGroupSelectAnOption,

  contactNumberInvalid: content.contactNumberInvalid,
  contactNumberTooLong: content.contactNumberTooLong,
  contactNumberTooShort: content.contactNumberTooShort,

  checkboxGroupMaxSelected: content.checkboxGroupMaxSelected,
  checkboxGroupMinSelected: content.checkboxGroupMinSelected,
  checkboxGroupInvalidSelection: content.checkboxGroupInvalidSelection,
};
