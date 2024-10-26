import { createContext, useContext, useEffect } from 'react';

// Types
import { Context, ProviderProps } from '@/types/contexts/forms';

// Services
import { configureDefaultMessages } from '@/services/validation/messages';

// Static Content
import { validationMessages } from '../configuration/validationMessages';

export const FormContext = createContext<Context>({
  validationMessages: configureDefaultMessages,
});

export const FormProvider = ({
  children,
  overridenMessages,
}: ProviderProps) => {
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

export const useFormContext = () => useContext<Context>(FormContext);
