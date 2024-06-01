export type BaseValidationRules = {
  required?: boolean;
};

export type RegexConfig = {
  pattern: RegExp;
  validationMessage: string;
};
