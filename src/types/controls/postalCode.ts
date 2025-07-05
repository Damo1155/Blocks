import { ReactNode } from 'react';
import { PostalCodeLocale } from 'validator';

// Types
import {
  ControlEventHandlers,
  ControlStateManagement,
  ControlBaseConfiguration,
  ControlLabelConfiguration,
  ControlRestrictedConfiguration,
  ControlValidationConfiguration,
} from '../controls/shared';
import { Either } from '../utils/either';

export type PostalCodeState = {
  value: string;
  isValid: boolean;
};

export type PostalCodeProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
  countryCode: PostalCodeLocale;
} & ControlEventHandlers &
  ControlLabelConfiguration &
  ControlRestrictedConfiguration &
  ControlBaseConfiguration &
  ControlStateManagement<PostalCodeState> &
  Either<ControlValidationConfiguration<PostalCodeValidationRules>, object>;

export type PostalCodeValidationRules = {
  required?: boolean;
};
