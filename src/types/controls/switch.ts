import {
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  BaseControlConfiguration,
} from './shared';

type StoreTypes = boolean | string | number | undefined;

export type SwitchState = {
  value: StoreTypes;
};

export type SwitchProps = {
  label: string;

  /** The value which will be stored in state depending on whether the
   * switch is `on` or `off` */
  selectionValues: SelectionValues;
} & LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<SwitchState>;

export type SelectionValues = {
  /** Value stored when switch is set to `true` */
  on: StoreTypes;

  /** Value stored when switch is set to `false` */
  off: StoreTypes;
};
