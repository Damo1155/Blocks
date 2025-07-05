import { isEmpty, isNumeric } from 'validator';

// Types
import { NumericValidationRules } from '../../../types/controls/numeric';
import { FormValidationMessages } from '../../../types/contexts/formProvider';

// Services
import { manipulateContent } from '../../../services/utils/resource';

// Static Content
import content from '../../../content/validation.json';

type Validate = {
  value: number;
  validationMessages: FormValidationMessages;
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
    return validationMessages.isRequired ?? content['validation-is-required'];
  }

  if (!isNumeric(valueToString)) {
    return (
      validationMessages.textNotNumeric ?? content['validation-not-numeric']
    );
  }

  if (min !== undefined && value < min) {
    return manipulateContent({
      replacements: { '{{minimum}}': min.toString() },
      content:
        validationMessages.numericMinNumber ??
        content['validation-numeric-minimum-number'],
    });
  }

  if (max !== undefined && value > max) {
    return manipulateContent({
      replacements: { '{{maximum}}': max.toString() },
      content:
        validationMessages.numericMaxNumber ??
        content['validation-numeric-maximum-number'],
    });
  }

  return undefined;
};
