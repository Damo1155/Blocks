import { ReactNode } from 'react';
import { PostalCodeLocale } from 'validator';

// Types
import {
  EventHandlers,
  LabelConfiguration,
  ControlStateManagement,
  RestrictedConfiguration,
  ValidationConfiguration,
  BaseControlConfiguration,
} from '@/types/controls/shared';
import { Either } from '../utils/either';

export type PostalCodeState = {
  value: string;
  isValid: boolean;
};

export type PostalCodeProps = {
  placeholder?: string;
  helpMessage?: ReactNode;
  countryCode: PostalCodeLocale;
} & EventHandlers &
  LabelConfiguration &
  RestrictedConfiguration &
  BaseControlConfiguration &
  ControlStateManagement<PostalCodeState> &
  Either<ValidationConfiguration<PostalCodeValidationRules>, object>;

export type PostalCodeValidationRules = {
  required?: boolean;
};
