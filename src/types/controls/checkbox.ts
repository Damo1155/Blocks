// Types
import {
  ControlLabelConfiguration,
  ControlStateManagement,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
  ControlBaseConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type CheckboxState = {
  value: boolean;
  isValid: boolean;
};

export type CheckboxProps = ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<CheckboxState> &
  Either<ControlValidationConfiguration<CheckboxValidationRules>, object>;

export type CheckboxValidationRules = {
  required?: boolean;
};
