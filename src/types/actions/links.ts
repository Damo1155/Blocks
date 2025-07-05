import { HTMLAttributeAnchorTarget, ReactNode, Ref } from 'react';

// Types
import { ClassNames } from '../utils/global';

export type LinkProps = {
  to: string;
  rel?: LinkRel;
  type: LinkType;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
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
  | 'noopener'
  | 'alternate'
  | 'noreferrer';

export type LinkType = 'default' | 'telephone' | 'mailto';
