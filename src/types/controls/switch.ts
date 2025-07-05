import {
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlRestrictedConfiguration,
} from './shared';

type StoreTypes = boolean | string | number | undefined;

export type SwitchState = {
  value: StoreTypes;
};

export type SwitchProps = {
  label: string;

  /** The value which will be stored in state depending on whether the
   * switch is `on` or `off` */
  selectionValues: SwitchSelectionValues;
} & ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<SwitchState>;

export type SwitchSelectionValues = {
  /** Value stored when switch is set to `true` */
  on: StoreTypes;

  /** Value stored when switch is set to `false` */
  off: StoreTypes;
};
