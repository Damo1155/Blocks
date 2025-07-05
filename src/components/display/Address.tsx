import React, { Fragment } from 'react';

// Types
import { AddressProps } from '../../types/display/address';

export const Address = ({ address }: AddressProps) => (
  <address>
    {address.map((line, index) => (
      <Fragment key={line}>
        {line}
        {index < address.length && <br />}
      </Fragment>
    ))}
  </address>
);
