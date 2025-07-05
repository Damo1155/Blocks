import { isPostalCode, isEmpty, PostalCodeLocale } from 'validator';

// Types
import { FormValidationMessages } from '../../../types/contexts/forms';
import { PostalCodeValidationRules } from '../../../types/controls/postalCode';

// Static Content
import validationContent from '../../../content/validation.json';

type ValidateRequest = {
  value: string;
  countryCode: PostalCodeLocale;
  validationMessages: FormValidationMessages;
  ruleSet: PostalCodeValidationRules | undefined;
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
    return validationMessages.isRequired ?? validationContent.isRequired;
  }

  if (!isPostalCode(value, countryCode)) {
    return (
      validationMessages.invalidPostalCode ??
      validationContent.invalidPostalCode
    );
  }

  return undefined;
};
