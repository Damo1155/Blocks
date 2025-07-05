import { ReactNode } from 'react';

// Types
import {
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from '../controls/shared';
import { Either } from '../utils/either';

export type SelectState = {
  value: string;
  isValid: boolean;
};

export type SelectProps = {
  options: SelectOption[];
  helpMessage?: ReactNode;
} & ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<SelectState> &
  Either<ControlValidationConfiguration<SelectValidationRules>, object>;

export type SelectValidationRules = {
  required?: boolean;
};

export type SelectOption = {
  text: string;
  value?: string;
  disabled?: boolean;
};
