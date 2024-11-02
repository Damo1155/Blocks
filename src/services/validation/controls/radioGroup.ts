import { isEmpty } from 'validator';

// Types
import {
  RadioGroupProps,
  RadioGroupValidationRules,
} from '../../../types/controls/radioGroup';
import { ValidationMessages } from '@/types/contexts/forms';

// Static Content
import validationContent from '@/content/validation.json';
import componentValidationContent from '@/content/componentValidation.json';

type Validate = {
  value: string;
  validationMessages: ValidationMessages;
  ruleSet: RadioGroupValidationRules | undefined;
};

export const validate = ({
  value,
  ruleSet,
  validationMessages,
}: Validate): string | undefined => {
  if (!ruleSet) {
    return undefined;
  }

  if (ruleSet?.required && isEmpty(value)) {
    return (
      validationMessages.radioGroupSelectAnOption ??
      validationContent.radioGroupSelectAnOption
    );
  }

  return undefined;
};

export const validateComponentConfiguration = ({
  id,
  name,
  state,
  label,
  options,
  onChange,
  ariaLabel,
}: RadioGroupProps) => {
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

  if (options.length === 0) {
    throw new Error(
      componentValidationContent['component-control-radioGroup-no-options'],
    );
  }
};
