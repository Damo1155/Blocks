import {
  CountryCode,
  parsePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from 'libphonenumber-js';
import { isEmpty } from 'validator';

// Types
import { ValidationMessages } from '@/types/contexts/forms';
import { PhoneProps, PhoneValidationRules } from '@/types/controls/phone';

// Services
import { validateComponentConfiguration as sharedValidation } from './shared';

// Static Content
import validationContent from '@/content/validation.json';
import componentValidationContent from '@/content/componentValidation.json';

type Validate = {
  value: string;
  countryCode: CountryCode;
  ruleSet?: PhoneValidationRules;
  validationMessages: ValidationMessages;
};

export const validate = (request: Validate): string | undefined => {
  if (request.ruleSet?.required && isEmpty(request.value)) {
    return (
      request.validationMessages.isRequired ?? validationContent.isRequired
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
    // Purpose  : `INVALID_COUNTRY` below validates it's a known country code, it does not
    //            validate against the one which has been provided
    // Source   : https://www.npmjs.com/package/libphonenumber-js#isvalidphonenumberforcountryinput-string-country-string-boolean
    const { country } = parsePhoneNumber(value, {
      defaultCountry: countryCode,
    });

    if (country !== countryCode) {
      return (
        validationMessages.contactNumberInvalid ??
        validationContent.contactNumberInvalid
      );
    }
  } catch {
    return (
      validationMessages.contactNumberInvalid ??
      validationContent.contactNumberInvalid
    );
  }

  const validateLength = validatePhoneNumberLength(value, countryCode);

  if (validateLength !== undefined) {
    const response = {
      TOO_LONG: () =>
        validationMessages.contactNumberTooLong ??
        validationContent.contactNumberTooLong,
      TOO_SHORT: () =>
        validationMessages.contactNumberTooShort ??
        validationContent.contactNumberTooShort,
      NOT_A_NUMBER: () =>
        validationMessages.contactNumberInvalid ??
        validationContent.contactNumberInvalid,
      INVALID_LENGTH: () =>
        validationMessages.contactNumberInvalid ??
        validationContent.contactNumberInvalid,
      INVALID_COUNTRY: () =>
        validationMessages.contactNumberInvalid ??
        validationContent.contactNumberInvalid,
    }[validateLength]();

    return response;
  }

  if (!isValidPhoneNumber(value, countryCode)) {
    return (
      validationMessages.contactNumberInvalid ??
      validationContent.contactNumberInvalid
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
