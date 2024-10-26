import { ReactNode } from 'react';

// Types
import {
  EventHandlers,
  LabelConfiguration,
  ControlStateManagement,
  ValidationConfiguration,
  RestrictedConfiguration,
  BaseControlConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type EmailState = {
  value: string;
  isValid: boolean;
};

export type EmailProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<EmailState> &
  Either<ValidationConfiguration<EmailValidationRules>, object>;

export type EmailValidationRules = {
  required?: boolean;
};
