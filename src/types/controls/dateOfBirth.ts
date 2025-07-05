// TODO : These need exporting

// Types
import {
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from './shared';
import { Either } from '../utils/either';
import { SupportedShortDateFormats } from '../utils/date';

export type DateOfBirthState = {
  value: string;
  isValid: boolean;

  age?: number;
  day?: string;
  year?: string;
  month?: string;
};

export type DateOfBirthProps = {
  /** This is the primary label displayed above the data capture fields */
  label: string;

  /** Determines how the form and validation will be rendered */
  format: SupportedShortDateFormats;
} & ControlRestrictedConfiguration &
  Omit<ControlBaseConfiguration, 'name'> &
  ControlStateManagement<DateOfBirthState> &
  Either<ControlValidationConfiguration<DateOfBirthValidationRules>, object>;

export type DateOfBirthUpdateType = 'day' | 'month' | 'year';

export type DateOfBirthOnChangeRequest = {
  value: string;
  type: DateOfBirthUpdateType;
};

export type DateOfBirthValidationRules = {
  minAge?: number;
  required?: boolean;
};
