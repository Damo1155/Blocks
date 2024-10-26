'use client';

/* eslint-disable */

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';
import { PhoneState } from '@/types/controls/phone';
import { SwitchState } from '@/types/controls/switch';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { Checkbox, Phone, Switch, Text } from '@/index';
import { CheckboxState } from '@/types/controls/checkbox';

const Page = () => {
  const [validate, setValidate] = useState<boolean>(false);

  const [state, setState] = useState<CheckboxState>({
    value: false,
    isValid: false,
  });

  const processForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidate(true);
  };

  return (
    <FormProvider>
      <form onSubmit={processForm}>
        <Checkbox
          state={state}
          id="sdnvlkjsnd"
          name="ndkvjknsd"
          label="nsdlkvcsnd"
          onChange={setState}
        />
      </form>
    </FormProvider>
  );
};

export default Page;
