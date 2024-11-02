import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export type LinkProps = {
  to: string;
  rel?: LinkRel;
  type: LinkType;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  onClick?: () => Promise<void> | void;
};

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
