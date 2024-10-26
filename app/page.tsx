'use client';

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';
import { SwitchState } from '@/types/controls/switch';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { Phone, Switch, Text } from '@/index';
import { PhoneState } from '@/types/controls/phone';

const Page = () => {
  const [validate, setValidate] = useState<boolean>(false);

  const [state, setState] = useState<PhoneState>({
    value: '',
    isValid: false,
  });

  const processForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidate(true);
  };

  return (
    <FormProvider>
      <form onSubmit={processForm}>
        <Phone
          state={state}
          id="sdnvlkjsnd"
          name="ndkvjknsd"
          label="nsdlkvcsnd"
          onChange={setState}
          countryCode="GB"
        />
      </form>
    </FormProvider>
  );
};

export default Page;
