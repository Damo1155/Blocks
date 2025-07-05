import { ReactNode } from 'react';

export type DropdownPlacement =
  | 'bottom'
  | 'bottom end'
  | 'bottom start'
  | 'left'
  | 'left end'
  | 'left start'
  | 'right'
  | 'right end'
  | 'right start'
  | 'top'
  | 'top end'
  | 'top start';

export type DropdownOption = {
  label: string;
};

export type DropdownProps = {
  label: string;
  placement: DropdownPlacement;

  /** Used to build the React Cache Keys and any event handlers */
  id: string;

  /** Places all content given directly into each list item rendered. */
  options: ReactNode[];
};
