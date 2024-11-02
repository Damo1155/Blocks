import { ReactNode } from 'react';

export type Variant = 'warning' | 'success' | 'negative' | 'informative';

export type AlertProps = {
  variant: Variant;

  /** Message which is rendered to the end user */
  children: string;

  /** Providing this will append your button or anchor inline with the `children` property */
  action?: ReactNode;
} & DismissAction;

export type DismissAction = {
  onDismiss: (value: boolean) => void;

  /** Rendered on the dismiss button as an `aria-label` */
  dismissText: string;

  /** When provided it will override the default dismiss icon with your own */
  icon?: ReactNode;
};
