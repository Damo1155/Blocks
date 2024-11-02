import { ReactNode } from 'react';

// Types
import { Either } from '../utils/either';
import { ClassNames } from '../utils/global';

export type ButtonType = 'button' | 'reset';

export type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  autoFocus?: boolean;
} & ClassNames &
  Either<ButtonOnClick, object>;

export type ButtonOnClick = {
  type: ButtonType;
  onClick: () => void;
};
