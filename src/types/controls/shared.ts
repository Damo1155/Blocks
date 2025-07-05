import { KeyboardEvent, FocusEvent, MouseEvent } from 'react';

// Types
import { Either } from '../utils/either';

type ControlSupportedInputTypes = HTMLInputElement | HTMLTextAreaElement;

export type ControlValidationConfiguration<TValidationRules> = {
  /** Forcibly triggers any validation messages to appear.
   *
   * **Note**: Setting this value back to false **WILL NOT** remove the validation message from the component.
   *
   * **Example Usage**: Form submission and setting this to true will show any invalid form fields */
  validate: boolean;

  /** Will update the state back to `false` when the `validate` property is triggered. */
  setValidate: (state: boolean) => void;

  /** The baseline validation rules necessary when consuming the component.
   *
   * Any non-supported rules can be configured via a custom `onChange` event.
   */
  validationRules: TValidationRules;

  /** Forcibly resets the control to it's default state.
   *
   * **Note**: Validation will happen silently in the background to ensure everything is still valid after the reset. */
  forceReset?: boolean;
};

export type ControlRestrictedConfiguration = {
  disabled?: boolean;
  readOnly?: boolean;
};

export type ControlEventHandlers = {
  onBlur?: (event: FocusEvent<ControlSupportedInputTypes>) => void;
  onClick?: (event: MouseEvent<ControlSupportedInputTypes>) => void;
  onKeyUp?: (event: KeyboardEvent<ControlSupportedInputTypes>) => void;
};

type ControlStandardLabel = { label: string };
type ControlAriaLabel = { ariaLabel: string };

export type ControlLabelConfiguration = Either<
  ControlStandardLabel,
  ControlAriaLabel
>;

export type ControlBaseConfiguration = {
  id: string;
};

export type ControlStateManagement<TState> = {
  name: string;
  state: TState;
  onChange: (state: TState) => void;
};
