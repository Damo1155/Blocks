// Types
import {
  BaseInputConfiguration,
  BaseValidationConfiguration,
  BaselineControlsConfiguration,
  RestrictedControlConfiguration,
} from '@/types/controls/shared';
import { BaseValidationRules } from '@/types/validation/rules';

export type TextAreaProps = {
  placeholder?: string;

  state: TextAreaState;
  onChange: (state: TextAreaState) => void;

  /** Provide a value to set the minimum number of rows against the `textarea`
   *
   * **Default**: No `rows` value will be set against the `textarea`
   */
  rows?: number;

  /** `undefined` : No rules applied */
  validationRules?: TextAreaRules;
} & BaseInputConfiguration &
  BaseValidationConfiguration &
  RestrictedControlConfiguration &
  BaselineControlsConfiguration;

export type TextAreaState = {
  value: string;
  isValid: boolean;
};

export type TextAreaRules = {
  minLength?: number;
  maxLength?: number;
} & BaseValidationRules;
