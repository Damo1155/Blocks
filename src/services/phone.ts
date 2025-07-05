import { isEmpty } from 'validator';
import { CountryCode, parsePhoneNumberWithError } from 'libphonenumber-js';

type PhonAdditionalDetailsRequest = {
  value: string;
  countryCode: CountryCode;
  validationMessage: string | undefined;
};

export const phoneAdditionalDetails = ({
  value,
  countryCode,
  validationMessage,
}: PhonAdditionalDetailsRequest): string | undefined => {
  if (validationMessage || isEmpty(value)) {
    return undefined;
  }

  try {
    return parsePhoneNumberWithError(value, countryCode).number;
  } catch {
    return undefined;
  }
};
