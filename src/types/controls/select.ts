import { ReactNode } from 'react';

// Types
import {
  BaseValidationConfiguration,
  BaselineControlsConfiguration,
  RestrictedControlConfiguration,
} from '@/types/controls/shared';
import { BaseValidationRules } from '@/types/validation/rules';

export type SelectState = {
  value: string;
  isValid: boolean;
};

export type SelectProps = {
  options: Option[];
  state: SelectState;
  hideLabel?: boolean;
  helpMessage?: ReactNode;
  onChange: (state: SelectState) => void;

  /** `undefined` : No rules applied */
  validationRules?: BaseValidationRules;
} & BaseValidationConfiguration &
  RestrictedControlConfiguration &
  BaselineControlsConfiguration;

export type Option = {
  text: string;
  value?: string;
  disabled?: boolean;
};
