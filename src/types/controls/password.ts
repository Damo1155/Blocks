import { ReactNode } from 'react';

// Types
import {
  ControlEventHandlers,
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type PasswordProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlEventHandlers &
  ControlBaseConfiguration &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlStateManagement<PasswordState> &
  Either<ControlValidationConfiguration<PasswordValidationRules>, object>;

export type PasswordState = {
  value: string;
  isValid: boolean;
};

export type PasswordValidationRules = {
  required?: boolean;
};
