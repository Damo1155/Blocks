import { isEmpty, isNumeric } from 'validator';

// Types
import { TextValidationRules } from '@/types/controls/text';

// Services
import { manipulateContent } from '@/services/utils/resource';
import { ValidationMessages } from '@/types/contexts/forms';

type ValidateRequest = {
  value: string;
  ruleSet?: TextValidationRules;
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

  if (ruleSet?.isNumeric && !isValueEmpty && !isNumeric(value)) {
    return validationMessages.textNotNumeric;
  }

  if (ruleSet?.maxLength && value.length > ruleSet.maxLength) {
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

  if (ruleSet?.regex && !isEmpty(value) && !ruleSet.regex.pattern.test(value)) {
    return ruleSet.regex.validationMessage;
  }

  return undefined;
};
