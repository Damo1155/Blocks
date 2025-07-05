import { ReactNode } from 'react';
import { ClassNames } from '../utils/global';

type ScrollEventTypes = 'window' | (string & {});

export type InfiniteScrollProps = {
  pageStart: number;
  children: ReactNode;

  /** If reconfigured will map to an element and listen for scroll events on that.
   *
   * **Default**: `window`
   */
  elementId?: ScrollEventTypes;

  /** Function which is triggered to load more content */
  loadMore: (pageNumber: number) => Promise<void>;

  /** Determines if there is more content to load */
  hasMore: boolean;

  /** If true, will load the first page of content on initial render */
  initialLoad?: boolean;

  /** Loading container to show while loading more content */
  loadingComponent?: ReactNode;
} & ClassNames;
