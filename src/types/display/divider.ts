import { Ref } from 'react';

// Types
import { Either } from '../utils/either';
import { ClassNames } from '../utils/global';

export type DividerProps = {
  ref: Ref<HTMLHRElement>;
} & ClassNames &
  Either<DividerContent, object>;

export type DividerContent = {
  /** Applies the content to the divider and sets the className to `hr-text` */
  content: string;
};
