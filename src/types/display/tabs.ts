import { ReactNode } from 'react';

export type TabsProps = {
  tabs: Tab[];
};

export type Tab = {
  label: string;
  panel: ReactNode;
  disabled?: boolean;
  hideLabel?: boolean;

  /** Utilised for the React Cache Key */
  id: string;
};
