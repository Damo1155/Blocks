import { isEmpty } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { TextAreaValidationRules } from '@/types/controls/textArea';

// Services
import { manipulateContent } from '@/services/utils/resource';

type ValidateRequest = {
  value: string;
  validationMessages: ValidationMessages;
  ruleSet: TextAreaValidationRules | undefined;
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

  const { required, maxLength, minLength } = ruleSet;

  if (required && isValueEmpty) {
    return validationMessages.isRequired;
  }

  if (maxLength !== undefined && value.length > maxLength) {
    return manipulateContent({
      content: validationMessages.textMaximumLength,
      replacements: { '{{maxLength}}': maxLength.toString() },
    });
  }

  if (!isValueEmpty && minLength !== undefined && value.length < minLength) {
    return manipulateContent({
      content: validationMessages.textMinimumLength,
      replacements: { '{{minLength}}': minLength.toString() },
    });
  }

  return undefined;
};
