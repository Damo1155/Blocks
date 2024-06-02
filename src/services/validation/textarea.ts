import { isEmpty } from 'validator';

// Types
import { TextAreaRules } from '@/types/controls/textArea';
import { ValidationMessages } from '@/types/contexts/forms';

// Services
import { manipulateContent } from '@/services/utils/resource';

type ValidateRequest = {
  value: string;
  ruleSet?: TextAreaRules;
  validationMessages: ValidationMessages;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: ValidateRequest): string | undefined => {
  const isValueEmpty = isEmpty(value);

  if (ruleSet?.required && isValueEmpty) {
    return validationMessages.isRequired;
  }

  if (ruleSet?.maxLength !== undefined && value.length > ruleSet.maxLength) {
    return manipulateContent({
      content: validationMessages.textMaximumLength,
      replacements: { '{{MaxLength}}': ruleSet.maxLength.toString() },
    });
  }

  if (
    !isValueEmpty &&
    ruleSet?.minLength !== undefined &&
    value.length < ruleSet.minLength
  ) {
    return manipulateContent({
      content: validationMessages.textMinimumLength,
      replacements: { '{{MinLength}}': ruleSet.minLength.toString() },
    });
  }

  return undefined;
};
