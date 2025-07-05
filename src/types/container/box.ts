import { ReactNode, Ref } from 'react';

// Types
import {
  ClassNames,
  ScreenReaderOnly,
  MarginConfiguration,
  PaddingConfiguration,
} from '../utils/global';
import { BoxComponent } from '../utils/html';

export type BoxAllowedRefs =
  | HTMLDivElement
  | HTMLSpanElement
  | HTMLTimeElement
  | HTMLLabelElement
  | HTMLLegendElement
  | HTMLParagraphElement
  | null;

export type BoxProps = {
  id?: string;
  children: ReactNode;
  component: BoxComponent;
  ref?: Ref<BoxAllowedRefs>;
} & ClassNames &
  ScreenReaderOnly &
  MarginConfiguration &
  PaddingConfiguration;
