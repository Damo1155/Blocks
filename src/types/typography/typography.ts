import { ReactNode } from 'react';

// Types
import { ClassNames } from '../utils/global';
import { TypographyComponent } from '../utils/html';

export type TypographyProps = {
  id?: string;
  component: TypographyComponent;

  /** If an array is provided each element in that array will
   * be converted to use the `markup` attribute */
  children: ReactNode;
} & ClassNames;
