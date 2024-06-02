import { isPostalCode, isEmpty, PostalCodeLocale } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { BaseValidationRules } from '@/types/validation/rules';

type ValidateRequest = {
  value: string;
  ruleSet?: BaseValidationRules;
  countryCode: PostalCodeLocale;
  validationMessages: ValidationMessages;
};

export const validate = ({
  value,
  ruleSet,
  countryCode,
  validationMessages,
}: ValidateRequest): string | undefined => {
  if (ruleSet?.required && isEmpty(value)) {
    return validationMessages.isRequired;
  }

  if (!isPostalCode(value, countryCode)) {
    return validationMessages.invalidPostalCode;
  }

  return undefined;
};
