'use client';

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';
import { SwitchState } from '@/types/controls/switch';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { Switch, Text } from '@/index';

const Page = () => {
  const [validate, setValidate] = useState<boolean>(false);

  const [state, setState] = useState<SwitchState>({
    value: 'Off',
  });

  const processForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidate(true);
  };

  return (
    <FormProvider>
      <form onSubmit={processForm}>
        <Switch
          state={state}
          id="sdnvlkjsnd"
          name="ndkvjknsd"
          label="nsdlkvcsnd"
          onChange={setState}
          selectionValues={{ on: 'On', off: 'Off' }}
        />
      </form>
    </FormProvider>
  );
};

export default Page;
