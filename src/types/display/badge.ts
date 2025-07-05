import { ReactNode } from 'react';

// Types
import { Either } from '../utils/either';
import { ClassNames } from '../utils/global';
import { BadgeComponent } from '../utils/html';

export type BadgeType = 'count';

export type BadgeProps = {
  children: string;
  component: BadgeComponent;
} & ClassNames &
  Either<Icon, object>;

type Icon = {
  icon: ReactNode;

  /** Will determine where the icon is positioned in relation to the rendered text */
  iconPosition: BadgePosition;
};

export type BadgePosition = 'left' | 'right';
