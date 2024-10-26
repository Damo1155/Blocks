'use client';

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { Text } from '@/index';

const Page = () => {
  const [validate, setValidate] = useState<boolean>(false);

  const [state, setState] = useState<TextState>({
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
        <Text
          state={state}
          id="sdnvlkjsnd"
          name="ndkvjknsd"
          label="nsdlkvcsnd"
          onChange={setState}
          validate={validate}
          setValidate={setValidate}
          validationRules={{ required: true }}
        />
      </form>
    </FormProvider>
  );
};

export default Page;
