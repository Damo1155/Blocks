import { ReactNode } from 'react';

export type TabsProps = {
  tabs: TabOption[];
};

export type TabOption = {
  label: string;
  panel: ReactNode;
  disabled?: boolean;
  hideLabel?: boolean;

  /** Utilised for the React Cache Key */
  id: string;
};
