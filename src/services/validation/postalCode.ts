import { isPostalCode, isEmpty, PostalCodeLocale } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { PostalCodeValidationRules } from '@/types/controls/postalCode';

type ValidateRequest = {
  value: string;
  countryCode: PostalCodeLocale;
  ruleSet?: PostalCodeValidationRules;
  validationMessages: ValidationMessages;
};

export const validate = ({
  value,
  ruleSet,
  countryCode,
  validationMessages,
}: ValidateRequest): string | undefined => {
  if (!ruleSet) {
    return undefined;
  }

  const { required } = ruleSet;

  if (required && isEmpty(value)) {
    return validationMessages.isRequired;
  }

  if (!isPostalCode(value, countryCode)) {
    return validationMessages.invalidPostalCode;
  }

  return undefined;
};
