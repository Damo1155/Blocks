import { createContext, useContext, useEffect, useState } from 'react';

// Types
import {
  FormProviderProps,
  FormProviderContext,
} from '../types/contexts/formProvider';

// Configuration
import { formLabels, validationMessages } from '../configuration/forms';

export const FormContext = createContext<FormProviderContext>({
  formLabels: formLabels,
  validationMessages: validationMessages,
});

/** Utilise `FormProvider` when needing to override default form configuration around labels
 * and/or validation messages.
 *
 * **Behaviour**: Takes the overridden properties and plays the new values on top. If the default
 * value within Blocks isn't being overridden then it'll be left alone to ensure the UI continues
 * to show something meaningful. */
export const FormProvider = ({
  children,
  overriddenFormLabels,
  overridenValidationMessages,
}: FormProviderProps) => {
  const [formattedLabels, setFormattedLabels] =
    useState<Record<string, string>>(formLabels);

  useEffect(() => {
    if (!overridenValidationMessages) {
      return;
    }

    // TODO : This needs looking at as I don't think it works correctly and might not be the best approach.
    Object.keys(validationMessages).forEach((key) => {
      const override = (overridenValidationMessages as Record<string, string>)[
        key
      ];

      // Purpose  : If no overridden message can be found then leave the
      //            default value in place
      if (!override) {
        return;
      }

      // Purpose  : Mutate the validation message key with the updated value
      (validationMessages as Record<string, string>)[key] = override;
    });
  }, [overridenValidationMessages]);

  useEffect(() => {
    if (!overriddenFormLabels) {
      return;
    }

    // Purpose  : Used `assign` as it'll map the unchanged objects on top
    //            without changing the overridden content.
    setFormattedLabels(Object.assign(formLabels, overriddenFormLabels));
  }, [overriddenFormLabels]);

  return (
    <FormContext.Provider
      value={{
        formLabels: formattedLabels,
        validationMessages: validationMessages,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () =>
  useContext<FormProviderContext>(FormContext);
