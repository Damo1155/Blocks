import { ReactNode } from 'react';

export type FormProviderContext = {
  formLabels: FormLabels;
  validationMessages: FormValidationMessages;
};

export type FormProviderProps = {
  children: ReactNode;

  overriddenFormLabels?: FormLabels;

  /** Configuring this will override the default state of the validation messages. */
  overridenValidationMessages?: FormValidationMessages;
};

export type FormLabels = {
  day?: string;
  year?: string;
  month?: string;
};

export type FormValidationMessages = {
  dayBetween?: string;
  dayRequired?: string;
  dayNotNumeric?: string;

  monthBetween?: string;
  monthRequired?: string;
  monthNotNumeric?: string;

  yearToEarly?: string;
  yearInFuture?: string;
  yearRequired?: string;
  yearNotNumeric?: string;

  minimumAge?: string;
  isRequired?: string;
  invalidDate?: string;
  invalidEmail?: string;
  dateInFuture?: string;
  missingFields?: string;
  textNotNumeric?: string;
  invalidPostalCode?: string;
  radioGroupSelectAnOption?: string;

  /** Adding `{{maxLength}}` to the content will update the text value to have the fields maximum length embedded */
  textMaximumLength?: string;

  /** Adding `{{minLength}}` to the content will update the text value to have the fields minimum length embedded */
  textMinimumLength?: string;
} & NumericValidationMessages &
  PhoneNumberValidationMessages &
  CheckboxGroupValidationMessages;

export type PhoneNumberValidationMessages = {
  contactNumberInvalid?: string;
  contactNumberTooLong?: string;
  contactNumberTooShort?: string;
};

export type NumericValidationMessages = {
  numericMinNumber?: string;
  numericMaxNumber?: string;
};

export type CheckboxGroupValidationMessages = {
  checkboxGroupMaxSelected: string;
  checkboxGroupMinSelected: string;
  checkboxGroupInvalidSelection: string;
};
