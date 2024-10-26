import { ReactNode } from 'react';

// Types
import {
  EventHandlers,
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type PasswordProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<PasswordState> &
  Either<ValidationConfiguration<PasswordValidationRules>, object>;

export type PasswordState = {
  value: string;
  isValid: boolean;
};

export type PasswordValidationRules = {
  required?: boolean;
};
