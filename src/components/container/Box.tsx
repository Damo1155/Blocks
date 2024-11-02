import React from 'react';

// Types
import { BoxProps } from '../../types/container/box';

export const Box = (props: BoxProps) => {
  const { id, children, component } = props;

  const Component = component;

  return <Component id={id}>{children}</Component>;
};
