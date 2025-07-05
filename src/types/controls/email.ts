import { ReactNode } from 'react';

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

export type EmailState = {
  value: string;
  isValid: boolean;
};

export type EmailProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlEventHandlers &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<EmailState> &
  Either<ControlValidationConfiguration<EmailValidationRules>, object>;

export type EmailValidationRules = {
  required?: boolean;
};
