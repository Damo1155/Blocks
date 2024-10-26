// Types
import { TextProps } from '@/types/controls/text';
import { PhoneProps } from '@/types/controls/phone';
import { SelectProps } from '@/types/controls/select';
import { TextAreaProps } from '@/types/controls/textArea';
import { PasswordProps } from '@/types/controls/password';
import { PostalCodeProps } from '@/types/controls/postalCode';

// Static Content
import content from '@/content/componentValidation.json';

type ValidateRequest =
  | TextProps
  | PhoneProps
  | SelectProps
  | TextAreaProps
  | PasswordProps
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
    throw new Error(content['component-control-state-missing']);
  }

  if (!id) {
    throw new Error(content['component-control-id-missing']);
  }

  if (!name) {
    throw new Error(content['component-control-name-missing']);
  }

  if (!onChange) {
    throw new Error(content['component-control-onChange-missing']);
  }

  if (!label && !ariaLabel) {
    throw new Error(content['component-control-label-missing']);
  }

  if (validate !== undefined || setValidate || validationRules) {
    if (validate === undefined) {
      throw new Error(content['component-control-validate-missing']);
    }

    if (setValidate === undefined) {
      throw new Error(content['component-control-setValidate-missing']);
    }

    if (!validationRules) {
      throw new Error(content['component-control-validationRules-missing']);
    }
  }
};
