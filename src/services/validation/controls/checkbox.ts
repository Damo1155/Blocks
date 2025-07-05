// Types
import { FormValidationMessages } from '../../../types/contexts/forms';
import { CheckboxValidationRules } from '../../../types/controls/checkbox';

// Static Content
import validationContent from '../../../content/validation.json';

type Validate = {
  value: boolean;
  validationMessages: FormValidationMessages;
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
    return validationMessages.isRequired ?? validationContent.isRequired;
  }

  return undefined;
};
