'use client';

import React from 'react';
import classNames from 'classnames';

// Types
import { TableProps } from '../../types/display/table';

export const Table = ({
  id,
  data,
  headers,
  caption,
  hideCaption,
}: TableProps) => {
  const captionId = `table-heading-${id}`;

  return (
    <>
      <strong
        id={captionId}
        className={classNames({
          'sr-only': hideCaption,
        })}
      >
        {caption}
      </strong>
      <table className="table" aria-describedby={captionId}>
        <thead>
          <tr>
            {headers.map(({ value }, index) => (
              <th key={`table-header-${id}-${index + 1}`}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={`table-row-${id}-${index + 1}`}>
              {data.rows.map((row) => (
                <td key={row.id}>{row.content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
