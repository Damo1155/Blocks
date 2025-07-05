import { ReactNode } from 'react';

// Types
import {
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlValidationConfiguration,
  ControlRestrictedConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type RadioGroupState = {
  isValid: boolean;
  radioValue: string;
};

export type RadioGroupProps = {
  options: Radio[];
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<RadioGroupState> &
  Either<ControlValidationConfiguration<RadioGroupValidationRules>, object>;

export type RadioGroupValidationRules = {
  required?: boolean;
};

export type Radio = {
  label: string;
  value: string;
} & ControlRestrictedConfiguration;
