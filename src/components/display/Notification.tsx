'use client';

import React from 'react';
import classNames from 'classnames';

// Types
import { NotificationProps } from '../../types/display/notification';

export const Notification = ({
  heading,
  variant,
  children,
}: NotificationProps) => {
  return (
    <div
      className={classNames('notification', {
        [`notification-${variant}`]: variant !== 'default',
      })}
    >
      <div>
        {/* TODO  : Make the heading customisable */}
        {heading && <h2>{heading}</h2>}

        {children}
      </div>

      {/* TODO  : Allow for an optional icon here */}
    </div>
  );
};
