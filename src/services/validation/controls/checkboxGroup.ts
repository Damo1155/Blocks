// Types
import {
  SelectionState,
  CheckboxGroupProps,
  CheckboxGroupValidationRules,
} from '../../../types/controls/checkboxGroup';
import { ValidationMessages } from '@/types/contexts/forms';

// Services
import { manipulateContent } from '@/services/utils/resource';

// Static Content
import validationContent from '@/content/validation.json';
import componentValidationContent from '@/content/componentValidation.json';

type Validate = {
  values: SelectionState[];
  validationMessages: ValidationMessages;
  ruleSet: CheckboxGroupValidationRules | undefined;
};

export const validate = ({
  values,
  ruleSet,
  validationMessages,
}: Validate): string | undefined => {
  const selection = values.filter(({ checked }) => checked);
  const invalidateOnSelection = selection.some(
    ({ invalidateOthersOnSelection }) => invalidateOthersOnSelection,
  );

  const totalChecked = selection.length;

  if (invalidateOnSelection && totalChecked > 1) {
    return (
      validationMessages.checkboxGroupInvalidSelection ??
      validationContent.checkboxGroupInvalidSelection
    );
  }

  if (ruleSet?.minChecked && totalChecked < ruleSet.minChecked) {
    return manipulateContent({
      content:
        validationMessages.checkboxGroupMinSelected ??
        validationContent.checkboxGroupMinSelected,
      replacements: { '{{minimum}}': ruleSet.minChecked.toString() },
    });
  }

  if (ruleSet?.maxChecked && totalChecked > ruleSet.maxChecked) {
    return manipulateContent({
      content:
        validationMessages.checkboxGroupMaxSelected ??
        validationContent.checkboxGroupMaxSelected,
      replacements: { '{{maximum}}': ruleSet.maxChecked.toString() },
    });
  }

  return undefined;
};

export const validateComponentConfiguration = ({
  id,
  name,
  state,
  label,
  onChange,
  ariaLabel,
}: CheckboxGroupProps) => {
  if (!state) {
    throw new Error(
      componentValidationContent['component-control-state-missing'],
    );
  }

  if (!id) {
    throw new Error(componentValidationContent['component-control-id-missing']);
  }

  if (!name) {
    throw new Error(
      componentValidationContent['component-control-name-missing'],
    );
  }

  if (!onChange) {
    throw new Error(
      componentValidationContent['component-control-onChange-missing'],
    );
  }

  if (!label && !ariaLabel) {
    throw new Error(
      componentValidationContent['component-control-label-missing'],
    );
  }
};
