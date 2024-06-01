import { ReactNode } from 'react';

// Types
import {
  BaseInputConfiguration,
  BaseValidationConfiguration,
  RestrictedControlConfiguration,
} from '@/types/controls/shared';
import { BaseValidationRules, RegexConfig } from '@/types/validation/rules';

export type TextProps = {
  id?: string;
  name?: string;
  hideLabel?: boolean;
  placeholder?: string;
  helpMessage?: ReactNode;

  label: string;
  state: TextState;
  onChange: (state: TextState) => void;

  /** `undefined` : No rules applied */
  validationRules?: TextValidationRules;
} & BaseInputConfiguration &
  BaseValidationConfiguration &
  RestrictedControlConfiguration;

export type TextState = {
  value: string;
  isValid: boolean;
};

export type TextValidationRules = {
  /** `true`: Ensures the value contained within the `state` is numeric */
  isNumeric?: boolean;

  minLength?: number;
  maxLength?: number;

  regex?: RegexConfig;
} & BaseValidationRules;
