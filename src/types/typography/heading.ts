import { ReactNode } from 'react';

// Types
import { ClassNames } from '../utils/global';
import { HeadingComponent } from '../utils/html';

export type HeadingProps = {
  id?: string;
  component: HeadingComponent;

  /** This is your heading title */
  children: ReactNode;

  /** If `undefined` no font size will be applied to the container */
  size?: HeadingComponent;
} & ClassNames;
