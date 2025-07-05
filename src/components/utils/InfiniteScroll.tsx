'use client';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

// Types
import { InfiniteScrollProps } from '../../types/utils/infiniteScroll';

// Constants
import { ScrollPosition_PX } from '../../constants/scrollValues';

// Components
import { Box } from '../container/Box';

export const InfiniteScroll = ({
  hasMore,
  loadMore,
  children,
  pageStart,
  className,
  loadingComponent,
  initialLoad = false,
  elementId = 'window',
}: InfiniteScrollProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(pageStart);

  useEffect(() => {
    if (initialLoad && hasMore && !isLoading) {
      setIsLoading(true);

      loadMore(pageNumber).finally(() => {
        setIsLoading(false);
      });
    }
  }, [hasMore, pageNumber, isLoading, loadMore]);

  const handleWindowScroll = async () => {
    if (!hasMore || isLoading) {
      return;
    }

    const element = document.documentElement;

    const shouldLoadMore =
      element.scrollHeight - window.scrollY - element.clientHeight <
      ScrollPosition_PX;

    if (!shouldLoadMore) {
      return;
    }

    loadData();
  };

  const handleElementIdScroll = async () => {
    if (!hasMore || isLoading) {
      return;
    }

    const element = document.getElementById(elementId);

    if (!element) {
      return;
    }

    const shouldLoadMore =
      element.scrollHeight - element.scrollTop - element.clientHeight <
      ScrollPosition_PX;

    if (!shouldLoadMore) {
      return;
    }

    loadData();
  };

  const loadData = async () => {
    setIsLoading(true);

    const nextPage = pageNumber + 1;

    setPageNumber(nextPage);
    await loadMore(nextPage);

    setIsLoading(false);
  };

  useEffect(() => {
    let element: HTMLElement | null = null;

    if (hasMore) {
      if (elementId === 'window') {
        window.addEventListener('scroll', handleWindowScroll);
        window.addEventListener('resize', handleWindowScroll);
      } else {
        element = document.getElementById(elementId);

        if (element) {
          element.addEventListener('scroll', handleElementIdScroll);
          element.addEventListener('resize', handleElementIdScroll);
        }
      }
    }

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('resize', handleWindowScroll);

      if (element) {
        element.removeEventListener('scroll', handleElementIdScroll);
        element.removeEventListener('resize', handleElementIdScroll);
      }
    };
  }, [hasMore, pageNumber, isLoading, loadMore]);

  return (
    <Box
      component="div"
      className={classNames('infinite-scroll', {
        [`${className}`]: className,
      })}
    >
      {children}
      {hasMore && loadingComponent}
    </Box>
  );
};
