// Types
import { FormValidationMessages } from '../contexts/formProvider';
import { DateOfBirthValidationRules } from '../controls/dateOfBirth';

type BaseRequest = {
  day: string;
  year: string;
  month: string;
};

export type DefaultConfig = {
  value: string;
  validationMessages: FormValidationMessages;
  ruleSet: DateOfBirthValidationRules | undefined;
};

export type ValidateDayRequest = {
  year: string;
  month: string;
} & DefaultConfig;

export type FormatDateRequest = {
  validationMessages: FormValidationMessages;
  ruleSet: DateOfBirthValidationRules | undefined;
} & BaseRequest;

export type FormatDateResponse = {
  date: string;
  age: number | undefined;
  errorMessages?: BuildDateErrors;
};

type BuildDateErrors = {
  day: string | undefined;
  year: string | undefined;
  month: string | undefined;
  miscellaneous: string | undefined;
};

export type ValidateFullDateResponse = {
  age?: number;
  date?: string;
  message?: string;
};

export type ValidateFullDateRequest = {
  validationMessages: FormValidationMessages;
  ruleSet: DateOfBirthValidationRules | undefined;
} & BaseRequest;

export type BindInitialStateRequest = {
  value: string;
  validationMessages: FormValidationMessages;
  ruleSet: DateOfBirthValidationRules | undefined;
};

export type BindInitialStateResponse = {
  day: string;
  date: string;
  year: string;
  month: string;
  isValid: boolean;
  age: number | undefined;
};
