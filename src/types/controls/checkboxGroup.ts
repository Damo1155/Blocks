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

export type CheckboxGroupProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<CheckboxGroupState> &
  Either<ValidationConfiguration<CheckboxGroupValidationRules>, object>;

export type CheckboxGroupState = {
  isValid: boolean;
  selection: SelectionState[];
};

export type SelectionState = {
  id: string;
  label: string;
  checked: boolean;

  /** `true`: Causes a validation error if any other checkboxes are selected */
  invalidateOthersOnSelection?: boolean;

  /** Will set this specific checkbox into a disabled state */
  disabled?: boolean;

  /** Will set this specific checkbox into a readonly state */
  readOnly?: boolean;
};

export type CheckboxGroupValidationRules = {
  maxChecked?: number;
  minChecked?: number;
};
