import { isEmpty } from 'validator';

// Types
import { TextAreaValidationRules } from '../../../types/controls/textArea';
import { FormValidationMessages } from '../../../types/contexts/formProvider';

// Services
import { manipulateContent } from '../../../services/utils/resource';

// Static Content
import validationContent from '../../../content/validation.json';

type ValidateRequest = {
  value: string;
  validationMessages: FormValidationMessages;
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
    return validationMessages.isRequired ?? validationContent.isRequired;
  }

  if (maxLength !== undefined && value.length > maxLength) {
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

  return undefined;
};
