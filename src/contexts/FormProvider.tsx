import { createContext, useContext, useEffect } from 'react';

// Types
import {
  FormProviderContext,
  FormProviderProps,
} from '../types/contexts/forms';

// Configuration
import { validationMessages } from '../configuration/validationMessages';

export const FormContext = createContext<FormProviderContext>({
  validationMessages: validationMessages,
});

export const FormProvider = ({
  children,
  overridenMessages,
}: FormProviderProps) => {
  useEffect(() => {
    if (!overridenMessages) {
      return;
    }

    Object.keys(validationMessages).forEach((key) => {
      const override = (overridenMessages as Record<string, string>)[key];

      // Purpose  : If no overridden message can be found then leave the
      //            default value in place
      if (!override) {
        return;
      }

      // Purpose  : Mutate the validation message key with the updated value
      (validationMessages as Record<string, string>)[key] = override;
    });
  }, [overridenMessages]);

  return (
    <FormContext.Provider value={{ validationMessages: validationMessages }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () =>
  useContext<FormProviderContext>(FormContext);
