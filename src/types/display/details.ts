import { ReactNode, Ref } from 'react';

// Types
import { ClassNames } from '../utils/global';

export type DetailsProps = {
  summary: ReactNode;
  children: ReactNode;
  ref?: Ref<HTMLDetailsElement>;
} & ClassNames;
