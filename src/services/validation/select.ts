import { isEmpty } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { BaseValidationRules } from '@/types/validation/rules';

type ValidateSelect = {
  value: string;
  ruleSet?: BaseValidationRules;
  validationMessages: ValidationMessages;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: ValidateSelect): string | undefined => {
  if (ruleSet?.required && isEmpty(value)) {
    return validationMessages.isRequired;
  }

  return undefined;
};
