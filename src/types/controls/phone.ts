import { ReactNode } from 'react';
import { CountryCode } from 'libphonenumber-js';

// Types
import {
  ControlEventHandlers,
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlValidationConfiguration,
  ControlRestrictedConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type PhoneState = {
  value: string;
  isValid: boolean;

  /** When a valid phone number has been provided an `e164` standardised number will be output */
  e164?: string;
};

export type PhoneProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
  countryCode: CountryCode;
} & ControlEventHandlers &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<PhoneState> &
  Either<ControlValidationConfiguration<PhoneValidationRules>, object>;

export type PhoneValidationRules = {
  required?: boolean;
};
