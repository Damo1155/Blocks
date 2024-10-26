import { ReactNode } from 'react';

// Types
import {
  EventHandlers,
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from '@/types/controls/shared';
import { Either } from '../utils/either';

export type TextAreaProps = {
  placeholder?: string;
  helpMessage?: ReactNode;

  /** Provide a value to set the minimum number of rows against the `textarea`
   *
   * **Default**: No `rows` value will be set against the `textarea`
   */
  rows?: number;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<TextAreaState> &
  Either<ValidationConfiguration<TextAreaValidationRules>, object>;

export type TextAreaState = {
  value: string;
  isValid: boolean;
};

export type TextAreaValidationRules = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
};
