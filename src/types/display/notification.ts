import { ReactNode } from 'react';

export type NotificationVariant =
  | 'notice'
  | 'default'
  | 'primary'
  | 'positive'
  | 'negative'
  | 'informative';

export type NotificationProps = {
  children: ReactNode;
  variant: NotificationVariant;

  /** Will hide the icon when undefined */
  heading?: string;
};
