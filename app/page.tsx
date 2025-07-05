'use client';

/* eslint-disable */

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';
import { PhoneState } from '@/types/controls/phone';
import { SwitchState } from '@/types/controls/switch';
import { CheckboxState } from '@/types/controls/checkbox';
import { DateOfBirthState } from '@/types/controls/dateOfBirth';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { DateOfBirth } from '@/index';

const Page = () => {
  const [validate, setValidate] = useState<boolean>(false);

  const [state, setState] = useState<DateOfBirthState>({
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
        <DateOfBirth
          id=""
          state={state}
          onChange={setState}
          format="MMM dd yyyy"
          label="Date of Birth"
          validate={validate}
          setValidate={setValidate}
          validationRules={{ required: true }}
        />
      </form>
    </FormProvider>
  );
};

export default Page;
