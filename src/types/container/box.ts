import { ReactNode } from 'react';

// Types
import { ClassNames } from '../utils/global';
import { BoxComponent } from '../utils/html';

export type BoxProps = {
  id?: string;
  children: ReactNode;
  component: BoxComponent;
} & ClassNames;
