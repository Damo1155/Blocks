import { isEmpty, isNumeric as validateIsNumeric } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { TextValidationRules } from '@/types/controls/text';

// Services
import { manipulateContent } from '@/services/utils/resource';

// Static Content
import validationContent from '../../../content/validation.json';

type ValidateRequest = {
  value: string;
  validationMessages: ValidationMessages;
  ruleSet: TextValidationRules | undefined;
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

  const { required, maxLength, minLength, regex, isNumeric } = ruleSet;

  if (required && isValueEmpty) {
    return validationMessages.isRequired ?? validationContent.isRequired;
  }

  if (isNumeric && !isValueEmpty && !validateIsNumeric(value)) {
    return validationMessages.textNotNumeric ?? validationContent.notNumeric;
  }

  if (maxLength && value.length > maxLength) {
    return manipulateContent({
      content:
        validationMessages.textMaximumLength ??
        validationContent.exceededMaximumLength,
      replacements: { '{{maxLength}}': maxLength.toString() },
    });
  }

  if (!isValueEmpty && minLength !== undefined && value.length < minLength) {
    return manipulateContent({
      content:
        validationMessages.textMinimumLength ??
        validationContent.notExceededMinimumLength,
      replacements: { '{{minLength}}': minLength.toString() },
    });
  }

  if (regex && !isEmpty(value) && !regex.pattern.test(value)) {
    return regex.validationMessage;
  }

  return undefined;
};
