// Types
import { SwitchProps } from '@/types/controls/switch';

// Static Content
import componentValidationContent from '../../../content/componentValidation.json';

export const validateComponentConfiguration = ({
  id,
  name,
  label,
  state,
  onChange,
  ariaLabel,
}: SwitchProps) => {
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
