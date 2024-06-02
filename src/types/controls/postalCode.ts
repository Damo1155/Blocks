import { PostalCodeLocale } from 'validator';

// Types
import {
  BaseInputConfiguration,
  BaseValidationConfiguration,
  BaselineControlsConfiguration,
  RestrictedControlConfiguration,
} from '@/types/controls/shared';
import { BaseValidationRules } from '@/types/validation/rules';

export type PostalCodeState = {
  value: string;
  isValid: boolean;
};

export type PostalCodeProps = {
  placeholder?: string;
  countryCode: PostalCodeLocale;
  onChange: (state: PostalCodeState) => void;

  /** `undefined` : No rules applied */
  validationRules?: BaseValidationRules;

  /** Tracks the state of the input and whether the field is valid  */
  state: PostalCodeState;
} & BaseInputConfiguration &
  BaseValidationConfiguration &
  RestrictedControlConfiguration &
  BaselineControlsConfiguration;
