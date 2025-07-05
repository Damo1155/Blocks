import { ReactNode } from 'react';

// Types
import {
  ControlEventHandlers,
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from './shared';
import { Either } from '../utils/either';

export type TextProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
} & ControlEventHandlers &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<TextState> &
  Either<ControlValidationConfiguration<TextValidationRules>, object>;

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
