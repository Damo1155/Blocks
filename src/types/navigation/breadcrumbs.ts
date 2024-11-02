// Types
import { Either } from '../utils/either';
import { ReactKey } from '../utils/global';

export type BreadcrumbProps = {
  id?: string;
  children: BreadcrumbOption[];

  /** Will be set as an `aria-label` on the NAV menu */
  label: string;
};

export type BreadcrumbOption = {
  children: string;
  disabled?: boolean;
} & ReactKey &
  Either<DefaultStructure, OnClick>;

export type DefaultStructure = {
  /** Set this to an empty string or `#` if the `type` is `no-link` */
  to: string;
};

export type OnClick = {
  onClick: () => Promise<void> | void;
};
