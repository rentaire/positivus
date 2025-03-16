import { Input } from '@/components/ui-entities/input.tsx';
import { Button } from '@/components/ui-entities/button.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidation, requiredValidation } from '@/utils/validation.ts';
import { ControlledField } from '@/components/ui-entities/controlledField.tsx';

export interface InputDataFormType {
  email: string;
}

const formDefaultValues: InputDataFormType = {
  email: '',
};

export function SubscribeForm() {
  const methods = useForm<InputDataFormType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: formDefaultValues,
  });

  const onSubmit = (data: InputDataFormType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={
        '768:px-10 768:py-14 920:items-center 576:items-cente 1100:grid-cols-2 1100:grid-rows-1 1100:max-w-[620px] 768:max-w-[420px] 576:grid-cols-2 576:grid-rows-1 768:grid-cols-1 768:grid-rows-2 grid w-full grid-cols-1 grid-rows-2 gap-5 rounded-[14px] bg-[#292A32] p-7'
      }
    >
      <FormProvider {...methods}>
        <ControlledField
          placeholder={'Email'}
          component={Input}
          variant={'light'}
          name={'email'}
          autoComplete={'email'}
          required={true}
          className={'h-full'}
          fieldClassName={'h-full'}
          withErrors={false}
          rules={{
            ...requiredValidation,
            ...emailValidation,
          }}
        />
        <Button variant={'accent'}>Subscribe to news</Button>
      </FormProvider>
    </form>
  );
}
