import { ReactNode } from 'react';

// Types
import { Either } from '../utils/either';
import { ClassNames, ReactKey } from '../utils/global';

export type ListOrderedStyle =
  | 'ol-default'
  | 'list-style-type-none'
  | 'list-style-type-decimal'
  | 'list-style-type-lower-alpha'
  | 'list-style-type-upper-alpha'
  | 'list-style-type-lower-roman'
  | 'list-style-type-upper-roman';

export type ListUnorderedStyle =
  | 'ul-default'
  | 'list-style-type-none'
  | 'list-style-type-disc'
  | 'list-style-type-square'
  | 'list-style-type-circle';

export type ListProps = {
  options: ListOption[];
} & ClassNames &
  Either<OrderedList, UnorderedList>;

export type OrderedList = {
  /** `ol-default` will render a standard `ol` with no styling overrides */
  ol: ListOrderedStyle;
};

export type UnorderedList = {
  /** `ul-default` will render a standard `ul` with no styling overrides */
  ul: ListUnorderedStyle;
};

export type ListOption = {
  content: ReactNode;
} & ReactKey;
