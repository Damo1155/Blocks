// Types
import {
  BaseInputConfiguration,
  BaseValidationConfiguration,
  BaselineControlsConfiguration,
  RestrictedControlConfiguration,
} from '@/types/controls/shared';
import { BaseValidationRules, RegexConfig } from '@/types/validation/rules';

export type TextProps = {
  placeholder?: string;

  state: TextState;
  onChange: (state: TextState) => void;

  /** `undefined` : No rules applied */
  validationRules?: TextValidationRules;
} & BaseInputConfiguration &
  BaseValidationConfiguration &
  RestrictedControlConfiguration &
  BaselineControlsConfiguration;

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
