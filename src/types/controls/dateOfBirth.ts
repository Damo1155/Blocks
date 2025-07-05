// TODO : These need exporting

// Types
import {
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type DateOfBirthCountryCodes = 'GB' | 'US';

export type DateOfBirthState = {
  value: string;
  isValid: boolean;

  age?: number;
  day?: string;
  year?: string;
  month?: string;
};

export type DateOfBirthProps = {
  labels: DateOfBirthLabels;
  countryCode: DateOfBirthCountryCodes;
} & ControlRestrictedConfiguration &
  Omit<ControlBaseConfiguration, 'name'> &
  ControlStateManagement<DateOfBirthState> &
  Either<ControlValidationConfiguration<DateOfBirthValidationRules>, object>;

export type DateOfBirthLabels = {
  day: string;
  year: string;
  month: string;

  /** The label which will appear above the input controls */
  main: string;
};

export type DateOfBirthUpdateType = 'day' | 'month' | 'year';

export type DateOfBirthOnChangeRequest = {
  value: string;
  type: DateOfBirthUpdateType;
};

export type DateOfBirthValidationRules = {
  minAge?: number;
  required?: boolean;
};
