import classNames from 'classnames';

// Types
import { DetailsProps } from '../../types/display/details';

export const Details = ({ ref, summary, children }: DetailsProps) => (
  <details
    ref={ref}
    className={classNames({
      [`${classNames}`]: classNames,
    })}
  >
    <summary>{summary}</summary>

    {children}
  </details>
);
