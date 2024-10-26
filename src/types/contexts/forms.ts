import { ReactNode } from 'react';

export type Context = {
  validationMessages: ValidationMessages;
};

export type ProviderProps = {
  children: ReactNode;

  /** Configuring this will override the default state of the validation messages. */
  overridenMessages?: ValidationMessages;
};

// TODO : Make all these optional so each one can be overridden
export type ValidationMessages = {
  isRequired?: string;
  textNotNumeric?: string;
  invalidPostalCode?: string;

  /** Adding `{{maxLength}}` to the content will update the text value to have the fields maximum length embedded */
  textMaximumLength?: string;

  /** Adding `{{minLength}}` to the content will update the text value to have the fields minimum length embedded */
  textMinimumLength?: string;
} & PhoneNumberValidationMessages;

export type PhoneNumberValidationMessages = {
  contactNumberInvalid?: string;
  contactNumberTooLong?: string;
  contactNumberTooShort?: string;
};
