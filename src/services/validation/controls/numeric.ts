import { isEmpty, isNumeric } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { NumericValidationRules } from '@/types/controls/numeric';

// Services
import { manipulateContent } from '@/services/utils/resource';

// Static Content
import content from '@/content/validation.json';

type Validate = {
  value: number;
  validationMessages: ValidationMessages;
  ruleSet: NumericValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: Validate): string | undefined => {
  const valueToString = value.toString();

  if (ruleSet?.required && isEmpty(valueToString)) {
    return validationMessages.isRequired ?? content.isRequired;
  }

  if (!isNumeric(valueToString)) {
    return validationMessages.textNotNumeric ?? content.notNumeric;
  }

  if (ruleSet?.min !== undefined && value < ruleSet.min) {
    return manipulateContent({
      replacements: { '{{minimum}}': ruleSet.min.toString() },
      content: validationMessages.numericMinNumber ?? content.numericMinNumber,
    });
  }

  if (ruleSet?.max !== undefined && value > ruleSet.max) {
    return manipulateContent({
      replacements: { '{{maximum}}': ruleSet.max.toString() },
      content: validationMessages.numericMaxNumber ?? content.numericMaxNumber,
    });
  }

  return undefined;
};
