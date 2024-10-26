// Types
import { SwitchProps } from '@/types/controls/switch';

// Static Content
import content from '@/content/componentValidation.json';

export const validateComponentConfiguration = ({
  id,
  name,
  label,
  state,
  onChange,
  ariaLabel,
}: SwitchProps) => {
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
};
