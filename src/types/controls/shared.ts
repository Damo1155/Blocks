import { KeyboardEvent, FocusEvent } from 'react';

export type BaseInputConfiguration = {
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export type BaseValidationConfiguration = {
  /** Forcibly triggers any validation messages to appear
   *
   * **Note**: Setting this value back to false WILL not remove the validation message from the component
   *
   * **Example Usage**: Form submission and setting this to true will show any invalid form fields */
  validate?: boolean;

  /** Forcibly resets the control to it's default value
   *
   * **Note**: Validation will happen silently in the background */
  forceReset?: boolean;
};

export type RestrictedControlConfiguration = {
  disabled?: boolean;
  readOnly?: boolean;
};
