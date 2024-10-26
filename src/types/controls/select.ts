import { ReactNode } from 'react';

// Types
import {
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from '@/types/controls/shared';
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

// TODO : Need to allow this to support a maximum of 1 `optgroup`
export type SelectOption = {
  text: string;
  value?: string;
  disabled?: boolean;
};
