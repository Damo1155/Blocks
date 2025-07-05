'use client';

import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

// Types
import { ProgressBarProps } from '../../types/display/progressBar';

type CalculateValue = {
  value: number;
  progressValue: string;
};

export const ProgressBar = ({
  id,
  type,
  label,
  format,
  hideLabel,
  percentage,
  isIndeterminate,
}: ProgressBarProps) => {
  const [value, setValue] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<string>('');

  useEffect(() => {
    if (percentage === undefined) {
      setValue(0);
      setProgressValue('');

      return;
    }

    const calculation = {
      percentage: (): CalculateValue => ({
        value: percentage,
        progressValue: `${percentage}%`,
      }),
      decimal: (): CalculateValue => {
        const decimalisedValue = percentage / 100;

        return {
          value: decimalisedValue,
          progressValue: `${decimalisedValue}/1`,
        };
      },
    }[format]();

    setValue(calculation.value);
    setProgressValue(calculation.progressValue);
  }, [percentage]);

  return (
    <div id={id}>
      <label>
        {isIndeterminate && (
          <>
            <span className="sr-only">{label}</span>
            <progress
              data-type={type}
              role="progressbar"
              aria-describedby={id}
            />
          </>
        )}

        {!isIndeterminate && (
          <>
            <small className={classNames({ 'sr-only': hideLabel })}>
              <span>{label}</span>
              <span>{progressValue}</span>
            </small>

            <progress
              value={value}
              data-type={type}
              role="progressbar"
              className="progress"
              aria-describedby={id}
              max={format === 'percentage' ? 100 : 1}
            >
              {progressValue}
            </progress>
          </>
        )}
      </label>
    </div>
  );
};
