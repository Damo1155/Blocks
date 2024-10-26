import { PostalCodeProps } from '@/types/controls/postalCode';
import { SelectProps } from '@/types/controls/select';
import { TextProps } from '@/types/controls/text';
import { TextAreaProps } from '@/types/controls/textArea';

type ValidateRequest =
  | TextProps
  | SelectProps
  | TextAreaProps
  | PostalCodeProps;

// TODO :   Need to update all the control props to support `setValidate`
export const validateComponentConfiguration = ({
  id,
  name,
  label,
  state,
  validate,
  onChange,
  ariaLabel,
  setValidate,
  validationRules,
}: ValidateRequest) => {
  if (!state) {
    throw new Error('Ensure the `state` property has been provided');
  }

  if (!id) {
    throw new Error('Ensure the `id` property has been provided');
  }

  if (!name) {
    throw new Error('Ensure the `name` property has been provided');
  }

  if (!onChange) {
    throw new Error('Ensure the `onChange` property has been provided');
  }

  if (!label && !ariaLabel) {
    throw new Error(
      'Ensure either tha `label` or `ariaLabel` has been provided. This is required for accessibility purposes.',
    );
  }

  if (validate !== undefined || setValidate || validationRules) {
    if (validate === undefined) {
      throw new Error('Ensure the `validate` property has been provided');
    }

    if (setValidate === undefined) {
      throw new Error('Ensure the `setValidate` property has been provided');
    }

    if (!validationRules) {
      throw new Error(
        'Ensure the `validationRules` property has been provided',
      );
    }
  }
};
