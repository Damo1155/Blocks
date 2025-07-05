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

export type NumericState = {
  value: number;
  isValid: boolean;
};

export type NumericProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlEventHandlers &
  ControlBaseConfiguration &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlStateManagement<NumericState> &
  Either<ControlValidationConfiguration<NumericValidationRules>, object>;

export type NumericValidationRules = {
  min?: number;
  max?: number;
  required?: boolean;
};
