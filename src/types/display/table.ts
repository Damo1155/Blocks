import { ReactNode } from 'react';

export type TableProps = {
  data: TableData[];
  headers: TableHeader[];

  /** This is a required field for accessibility reasons. */
  caption: string;

  /** Set this to true if you want to hide the caption. */
  hideCaption?: boolean;

  /** Used to help build the cache key when iterating over table rows */
  id: string;
};

export type TableHeader = {
  value: string;
};

export type TableData = {
  rows: TableRows[];

  /** Utilised for the React Cache Key */
  id: string;
};

export type TableRows = {
  content: ReactNode;

  /** Utilised for the React Cache Key */
  id: string;
};
