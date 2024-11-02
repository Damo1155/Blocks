import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

// Types
import { ClassNames } from '../utils/global';

export type LinkProps = {
  to: string;
  rel?: LinkRel;
  type: LinkType;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  onClick?: () => Promise<void> | void;
} & ClassNames;

export type LinkRel =
  | 'tag'
  | 'help'
  | 'next'
  | 'prev'
  | 'author'
  | 'search'
  | 'license'
  | 'nofollow'
  | 'bookmark'
  | 'external'
  | 'alternate'
  | 'noopener'
  | 'noreferrer';

export type LinkType = 'default' | 'telephone' | 'mailto';
