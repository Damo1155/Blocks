import { ReactNode } from 'react';

// Types
import {
  LabelConfiguration,
  ControlStateManagement,
  ValidationConfiguration,
  RestrictedConfiguration,
  BaseControlConfiguration,
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
} & LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<RadioGroupState> &
  Either<ValidationConfiguration<RadioGroupValidationRules>, object>;

export type RadioGroupValidationRules = {
  required?: boolean;
};

export type Radio = {
  label: string;
  value: string;
} & RestrictedConfiguration;
