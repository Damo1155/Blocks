// Types
import {
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type CheckboxState = {
  value: boolean;
  isValid: boolean;
};

export type CheckboxProps = LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<CheckboxState> &
  Either<ValidationConfiguration<CheckboxValidationRules>, object>;

export type CheckboxValidationRules = {
  required?: boolean;
};
