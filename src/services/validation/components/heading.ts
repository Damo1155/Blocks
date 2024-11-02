// Types
import { HeadingProps } from '../../../types/typography/heading';

export const validate = ({ size, component }: HeadingProps) => {
  if (
    !size &&
    component !== 'h1' &&
    component !== 'h2' &&
    component !== 'h3' &&
    component !== 'h4' &&
    component !== 'h5' &&
    component !== 'h6'
  ) {
    throw new Error(
      "'size' should be provided to 'Heading' when consuming the component as a non-standard header",
    );
  }

  return;
};
