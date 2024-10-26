import { isEmpty } from 'validator';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js';

type AdditionalDetailsRequest = {
  value: string;
  countryCode: CountryCode;
  validationMessage: string | undefined;
};

export const additionalDetails = ({
  value,
  countryCode,
  validationMessage,
}: AdditionalDetailsRequest): string | undefined => {
  if (validationMessage || isEmpty(value)) {
    return undefined;
  }

  try {
    return parsePhoneNumber(value, countryCode).number;
  } catch {
    return undefined;
  }
};
