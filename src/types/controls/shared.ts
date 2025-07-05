import { KeyboardEvent, FocusEvent } from 'react';

// Types
import { Either } from '../utils/either';

type SupportedInputTypes = HTMLInputElement | HTMLTextAreaElement;

export type ValidationConfiguration<TValidationRules> = {
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

export type RestrictedConfiguration = {
  disabled?: boolean;
  readOnly?: boolean;
};

export type EventHandlers = {
  onBlur?: (event: FocusEvent<SupportedInputTypes>) => void;
  onKeyUp?: (event: KeyboardEvent<SupportedInputTypes>) => void;
};

type StandardLabel = { label: string };
type AriaLabel = { ariaLabel: string };

export type LabelConfiguration = Either<StandardLabel, AriaLabel>;

export type BaseControlConfiguration = {
  id: string;
};

export type ControlStateManagement<TState> = {
  name: string;
  state: TState;
  onChange: (state: TState) => void;
};
