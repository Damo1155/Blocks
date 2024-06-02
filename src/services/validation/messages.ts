// Types
import { ValidationMessages } from '@/types/contexts/forms';

// Static Content
import validationMessages from '@/content/validation.json';

export const configureDefaultMessages: ValidationMessages = {
  isRequired: validationMessages.isRequired,
  textNotNumeric: validationMessages.notNumeric,
  invalidPostalCode: validationMessages.invalidPostalCode,
  textMaximumLength: validationMessages.exceededMaximumLength,
  textMinimumLength: validationMessages.notExceededMinimumLength,
};
