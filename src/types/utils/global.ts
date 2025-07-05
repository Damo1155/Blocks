import { CursorType } from '../styling/cursor';
import { Margin, Padding } from '../styling/spacing';

export type ClassNames = {
  /** Will append any additional classes to the root container when set
   *
   * **Note**: Try to avoid using as it's more a failsafe due to Avoid using,
   * it's utilisation is for anything uncommon or not yet supported as a property
   * into the component. */
  className?: string;
};

export type ClassNameOverride = {
  /** Whilst this can be used alongside `className` the primary purpose of this
   * property is to completely remove all out of the box stylisation and replace
   * it with your own. */
  classNameOverride?: string;
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

export type AddCursorPointer = {
  /** Adds a cursor to the element.
   *
   * **Note**: When used alongside a Link and Button will switch to 'cursor-not-allowed' when disabled.
   */
  cursor: CursorType;
};
