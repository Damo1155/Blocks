import { ReactNode } from 'react';

// Types
import { Either } from '../utils/either';

export type ButtonType = 'button' | 'reset';

export type ButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  autoFocus?: boolean;
} & Either<ButtonOnClick, object>;

export type ButtonOnClick = {
  type: ButtonType;
  onClick: () => void;
};