import React from 'react';

// Types
import { BreadcrumbProps } from '../../types/navigation/breadcrumbs';

export const Breadcrumbs = ({ id, label, children }: BreadcrumbProps) => (
  <nav aria-label={label} id={id}>
    <ol>
      {children.map(({ to, key, children, disabled, onClick }) => (
        <li key={`${key}`}>
          {!disabled && (
            <a href={to} onClick={onClick}>
              {children}
            </a>
          )}

          {disabled && <div>{children}</div>}
        </li>
      ))}
    </ol>
  </nav>
);
