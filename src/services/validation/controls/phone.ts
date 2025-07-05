import {
  CountryCode,
  isValidPhoneNumber,
  parsePhoneNumberWithError,
  validatePhoneNumberLength,
} from 'libphonenumber-js';
import { isEmpty } from 'validator';

// Types
import {
  PhoneProps,
  PhoneValidationRules,
} from '../../../types/controls/phone';
import { FormValidationMessages } from '../../../types/contexts/formProvider';

// Services
import { validateComponentConfiguration as sharedValidation } from './shared';

// Static Content
import validationContent from '../../../content/validation.json';
import componentValidationContent from '../../../content/componentValidation.json';

type Validate = {
  value: string;
  countryCode: CountryCode;
  validationMessages?: FormValidationMessages;
  ruleSet: PhoneValidationRules | undefined;
};

export const validate = (request: Validate): string | undefined => {
  // Important  : Even if the `ruleSet` hasn't been provided we still need to
  //              validate the underlying value to ensure it's a valid phone number.
  if (request.ruleSet?.required && isEmpty(request.value)) {
    return (
      request.validationMessages?.isRequired ??
      validationContent['validation-is-required']
    );
  }

  return validateNumber(request);
};

const validateNumber = ({
  value,
  countryCode,
  validationMessages,
}: Validate) => {
  if (isEmpty(value)) {
    return undefined;
  }

  try {
    const { country } = parsePhoneNumberWithError(value, countryCode);

    if (country !== countryCode) {
      return (
        validationMessages?.contactNumberInvalid ??
        validationContent['validation-contact-number-invalid']
      );
    }
  } catch {
    return (
      validationMessages?.contactNumberInvalid ??
      validationContent['validation-contact-number-invalid']
    );
  }

  const validateLength = validatePhoneNumberLength(value, countryCode);

  if (validateLength !== undefined) {
    const response = {
      TOO_LONG: () =>
        validationMessages?.contactNumberTooLong ??
        validationContent['validation-contact-number-too-long'],
      TOO_SHORT: () =>
        validationMessages?.contactNumberTooShort ??
        validationContent['validation-contact-number-too-short'],
      NOT_A_NUMBER: () =>
        validationMessages?.contactNumberInvalid ??
        validationContent['validation-contact-number-invalid'],
      INVALID_LENGTH: () =>
        validationMessages?.contactNumberInvalid ??
        validationContent['validation-contact-number-invalid'],
      INVALID_COUNTRY: () =>
        validationMessages?.contactNumberInvalid ??
        validationContent['validation-contact-number-invalid'],
    }[validateLength]();

    return response;
  }

  if (!isValidPhoneNumber(value, countryCode)) {
    return (
      validationMessages?.contactNumberInvalid ??
      validationContent['validation-contact-number-invalid']
    );
  }

  return undefined;
};

export const validateComponentConfiguration = (props: PhoneProps) => {
  sharedValidation(props);

  const { countryCode } = props;

  if (!countryCode) {
    throw new Error(
      componentValidationContent['component-control-countryCode-missing'],
    );
  }
};
