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
  if (!ruleSet) {
    return undefined;
  }

  const { required, min, max } = ruleSet;

  const valueToString = value.toString();

  if (required && isEmpty(valueToString)) {
    return validationMessages.isRequired ?? content.isRequired;
  }

  if (!isNumeric(valueToString)) {
    return validationMessages.textNotNumeric ?? content.notNumeric;
  }

  if (min !== undefined && value < min) {
    return manipulateContent({
      replacements: { '{{minimum}}': min.toString() },
      content: validationMessages.numericMinNumber ?? content.numericMinNumber,
    });
  }

  if (max !== undefined && value > max) {
    return manipulateContent({
      replacements: { '{{maximum}}': max.toString() },
      content: validationMessages.numericMaxNumber ?? content.numericMaxNumber,
    });
  }

  return undefined;
};
