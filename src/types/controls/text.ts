import { ReactNode } from 'react';

// Types
import {
  EventHandlers,
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type TextProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<TextState> &
  Either<ValidationConfiguration<TextValidationRules>, object>;

export type TextState = {
  value: string;
  isValid: boolean;
};

export type TextValidationRules = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  regex?: TextRegexConfiguration;

  /** `true`: Ensures the value contained within the `state` is numeric */
  isNumeric?: boolean;
};

export type TextRegexConfiguration = {
  pattern: RegExp;

  /** On error the message attached to this property will be rendered. */
  validationMessage: string;
};
