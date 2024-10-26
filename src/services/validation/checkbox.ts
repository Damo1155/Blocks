// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { CheckboxValidationRules } from '@/types/controls/checkbox';

// Static Content
import content from '@/content/validation.json';

type Validate = {
  value: boolean;
  validationMessages: ValidationMessages;
  ruleSet: CheckboxValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: Validate): string | undefined => {
  if (!ruleSet) {
    return undefined;
  }

  const { required } = ruleSet;

  if (required && !value) {
    return validationMessages.isRequired ?? content.isRequired;
  }

  return undefined;
};
