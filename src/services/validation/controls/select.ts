import { isEmpty } from 'validator';

// Types
import { FormValidationMessages } from '../../../types/contexts/forms';
import { SelectValidationRules } from '../../../types/controls/select';

// Static Content
import validationContent from '../../../content/validation.json';

type ValidateSelect = {
  value: string;
  validationMessages: FormValidationMessages;
  ruleSet: SelectValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: ValidateSelect): string | undefined => {
  if (!ruleSet) {
    return undefined;
  }

  const { required } = ruleSet;

  if (required && isEmpty(value)) {
    return (
      validationMessages.isRequired ??
      validationContent['validation-is-required']
    );
  }

  return undefined;
};
