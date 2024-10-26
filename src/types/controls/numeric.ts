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

export type NumericState = {
  value: number;
  isValid: boolean;
};

export type NumericProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<NumericState> &
  Either<ValidationConfiguration<NumericValidationRules>, object>;

export type NumericValidationRules = {
  min?: number;
  max?: number;
  required?: boolean;
};
