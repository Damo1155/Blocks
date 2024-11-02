import { ReactNode } from 'react';

// Types
import { ListComponent } from '../utils/html';
import { ClassNames, ReactKey } from '../utils/global';

export type ListProps = {
  id?: string;
  children: ListOption[];
  component: ListComponent;
} & ClassNames;

export type ListOption = {
  content: ReactNode;
} & ReactKey;
