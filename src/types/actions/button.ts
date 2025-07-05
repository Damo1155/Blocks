import { ReactNode, Ref } from 'react';

// Types
import {
  ClassNames,
  AddCursorPointer,
  ClassNameOverride,
} from '../utils/global';
import { Either } from '../utils/either';
import { Padding } from '../styling/spacing';
import { BorderRadius } from '../styling/border';
import { BackgroundColor } from '../styling/color';

export type ButtonType = 'button' | 'reset';

export type ButtonProps = {
  children: ReactNode;

  disabled?: boolean;
  autoFocus?: boolean;
  ref?: Ref<HTMLButtonElement>;
} & ClassNames &
  AddCursorPointer &
  Either<ButtonOnClick, object> &
  Either<ClassNameOverride, ButtonStylisationRules>;

export type ButtonOnClick = {
  type: ButtonType;
  onClick: () => void;
};

export type ButtonStylisationRules = {
  padding?: Padding;
  rounded?: BorderRadius;

  /** Only a required property when `classNameOverride` is not being consumed */
  variant: ButtonSemanticVariant;
};

export type ButtonSemanticVariant =
  | 'notice'
  | 'primary'
  | 'negative'
  | 'positive'
  | 'informative';

export type ButtonStateConfiguration = {
  bgColor: BackgroundColor;
  hoverColor: BackgroundColor;
  activeColor: BackgroundColor;
  disabledColor: BackgroundColor;
};
