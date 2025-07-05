import { isEmpty } from 'validator';

// Types
import { FormValidationMessages } from '../../../types/contexts/forms';

// Services
import { PasswordValidationRules } from '../../../types/controls/password';

// Static Content
import validationContent from '../../../content/validation.json';

type ValidateRequest = {
  value: string;
  validationMessages: FormValidationMessages;
  ruleSet: PasswordValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: ValidateRequest): string | undefined => {
  if (!ruleSet) {
    return undefined;
  }

  const isValueEmpty = isEmpty(value);

  const { required } = ruleSet;

  if (required && isValueEmpty) {
    return validationMessages.isRequired ?? validationContent.isRequired;
  }

  return undefined;
};
