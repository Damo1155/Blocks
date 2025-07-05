// Types
import { Either } from '../utils/either';

export type ProgressBarValueFormat = 'percentage' | 'decimal';

export type ProgressBarProps = {
  id: string;
  label: string;
  hideLabel?: boolean;

  /** Emphasizes the progress bar element */
  type?: 'primary';
} & Either<ProgressBarValue, ProgressBarIndeterminate>;

export type ProgressBarIndeterminate = {
  isIndeterminate: boolean;
};

export type ProgressBarValue = {
  percentage: number;
  format: ProgressBarValueFormat;
};
