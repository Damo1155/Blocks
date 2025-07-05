import { Margin, Padding } from '../styling/spacing';

export type ClassNames = {
  /** Will append any additional classes to the root container when set
   *
   * **Note**: Try to avoid using as it's more a failsafe due to Avoid using,
   * it's utilisation is for anything uncommon or not yet supported as a property
   * into the component. */
  className?: string;
};

export type ReactKey = {
  /** Used to formulate the React `key` when handling lists */
  key: string;
};

export type ScreenReaderOnly = {
  /** Appends the `sr-only` CSS class if set. This will ensure the content is only visible to Screen Readers. */
  addSrOnly?: boolean;
};

export type MarginConfiguration = {
  /** Adds the Margin configuration to the container */
  margin?: Margin;
};

export type PaddingConfiguration = {
  /** Adds the Padding configuration to the container */
  padding?: Padding;
};
