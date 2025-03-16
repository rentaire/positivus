import { Input } from '@/components/ui-entities/input.tsx';
import { Button } from '@/components/ui-entities/button.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidation, requiredValidation } from '@/utils/validation.ts';
import { ControlledField } from '@/components/ui-entities/controlledField.tsx';
import { Textarea } from '@/components/ui-entities/textarea.tsx';
import { ContactFormRadio, type ContactUsType } from './contactFormRadio.tsx';

export interface InputDataFormType {
  name: string | null;
  email: string;
  message: string;
  type: ContactUsType;
}

const formDefaultValues: InputDataFormType = {
  name: null,
  email: '',
  message: '',
  type: 'hi',
};

export function ContactUsForm() {
  const methods = useForm<InputDataFormType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: formDefaultValues,
  });

  const onSubmit = (data: InputDataFormType) => {
    console.log(data);
  };

  return (
    <div className={'768:pt-15 768:pb-20 768:pl-25 z-2 w-full px-7 py-10'}>
      <form
        className={'768:gap-y-6 576:max-w-[556px] flex flex-col gap-y-5'}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <div className={'768:gap-y-10 flex flex-col gap-y-11'}>
            <ControlledField name={'type'} component={ContactFormRadio} withErrors={false} />
            <div>
              <ControlledField
                placeholder={'Name'}
                component={Input}
                label={'Name'}
                variant={'dark'}
                name={'name'}
                type={'text'}
                autoComplete={'given-name'}
              />
              <ControlledField
                placeholder={'Email'}
                component={Input}
                label={'Email'}
                variant={'dark'}
                name={'email'}
                autoComplete={'email'}
                required={true}
                rules={{
                  ...requiredValidation,
                  ...emailValidation,
                }}
              />
              <ControlledField
                placeholder={'Message'}
                component={Textarea}
                label={'Message'}
                variant={'dark'}
                name={'message'}
                required={true}
                maxLength={500}
                rules={{
                  ...requiredValidation,
                }}
              />
            </div>
            <Button variant={'dark'}> Send Message </Button>
          </div>
        </FormProvider>
      </form>
    </div>
  );
}
