// Types
import { ValidationMessages } from '@/types/contexts/forms';

// Static Content
import content from '@/content/validation.json';

export const validationMessages: ValidationMessages = {
  isRequired: content.isRequired,
  textNotNumeric: content.notNumeric,
  invalidPostalCode: content.invalidPostalCode,
  textMaximumLength: content.exceededMaximumLength,
  textMinimumLength: content.notExceededMinimumLength,

  contactNumberInvalid: content.contactNumberInvalid,
  contactNumberTooLong: content.contactNumberTooLong,
  contactNumberTooShort: content.contactNumberTooShort,

  checkboxGroupMaxSelected: content.checkboxGroupMaxSelected,
  checkboxGroupMinSelected: content.checkboxGroupMinSelected,
  checkboxGroupInvalidSelection: content.checkboxGroupInvalidSelection,
};
