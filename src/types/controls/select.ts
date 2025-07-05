import { ReactNode } from 'react';

// Types
import {
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from '../controls/shared';
import { Either } from '../utils/either';

export type SelectState = {
  value: string;
  isValid: boolean;
};

export type SelectProps = {
  options: SelectOption[];
  helpMessage?: ReactNode;
} & LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<SelectState> &
  Either<ValidationConfiguration<SelectValidationRules>, object>;

export type SelectValidationRules = {
  required?: boolean;
};

export type SelectOption = {
  text: string;
  value?: string;
  disabled?: boolean;
};
