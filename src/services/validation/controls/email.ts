import { isEmpty, isEmail } from 'validator';

// Types
import { EmailValidationRules } from '../../../types/controls/email';
import { FormValidationMessages } from '../../../types/contexts/formProvider';

// Static Content
import content from '../../../content/validation.json';

type Validate = {
  value: string;
  validationMessages: FormValidationMessages;
  ruleSet: EmailValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: Validate): string | undefined => {
  // Important  : Even if the `ruleSet` hasn't been provided we still need to
  //              validate the underlying value to ensure it's a valid email address.

  if (ruleSet?.required && isEmpty(value)) {
    return validationMessages.isRequired ?? content['validation-is-required'];
  }

  if (!isEmpty(value) && !isEmail(value)) {
    return (
      validationMessages.invalidEmail ??
      content['validation-invalid-email-address']
    );
  }

  return undefined;
};
