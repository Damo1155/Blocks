import { ReactNode } from 'react';

// Types
import {
  ControlLabelConfiguration,
  ControlStateManagement,
  ControlValidationConfiguration,
  ControlRestrictedConfiguration,
  ControlBaseConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type CheckboxGroupProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<CheckboxGroupState> &
  Either<ControlValidationConfiguration<CheckboxGroupValidationRules>, object>;

export type CheckboxGroupState = {
  isValid: boolean;
  selection: CheckboxGroupSelectionState[];
};

export type CheckboxGroupSelectionState = {
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
