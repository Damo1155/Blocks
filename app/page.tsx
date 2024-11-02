'use client';

/* eslint-disable */

import { useState } from 'react';

// Types
import { TextState } from '@/types/controls/text';
import { PhoneState } from '@/types/controls/phone';
import { SwitchState } from '@/types/controls/switch';
import { CheckboxState } from '@/types/controls/checkbox';

// Contexts
import { FormProvider } from '@/contexts/FormProvider';

// Components
import { Alert, Checkbox, Phone, Switch, Text } from '@/index';

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
        <Alert variant="informative" onDismiss={() => []} dismissText="Dismiss">
          Message
        </Alert>
      </form>
    </FormProvider>
  );
};

export default Page;
