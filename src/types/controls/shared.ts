import { KeyboardEvent, FocusEvent, ReactNode } from 'react';

type SupportedInputTypes = HTMLInputElement | HTMLTextAreaElement;

export type BaseInputConfiguration = {
  onBlur?: (event: FocusEvent<SupportedInputTypes>) => void;
  onKeyUp?: (event: KeyboardEvent<SupportedInputTypes>) => void;
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

export type BaselineControlsConfiguration = {
  /** If not provided will fallback to the React `useId` hook */
  id?: string;
  name?: string;
  label: string;
  hideLabel?: boolean;
  helpMessage?: ReactNode;
};
