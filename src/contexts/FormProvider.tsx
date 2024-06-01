import { createContext, useContext, useEffect, useState } from 'react';

// Types
import {
  Context,
  ProviderProps,
  ValidationMessages,
} from '@/types/contexts/forms';

// Services
import { configureDefaultMessages } from '@/services/validation/messages';

export const FormContext = createContext<Context>({
  validationMessages: configureDefaultMessages,
});

export const FormProvider = ({
  children,
  validationMessages,
}: ProviderProps) => {
  const [messages, setMessages] = useState<ValidationMessages>(
    configureDefaultMessages,
  );

  useEffect(() => {
    setMessages(validationMessages ?? configureDefaultMessages);
  }, []);

  return (
    <FormContext.Provider value={{ validationMessages: messages }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext<Context>(FormContext);
