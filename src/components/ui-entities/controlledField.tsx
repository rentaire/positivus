import { useController, type UseControllerProps } from 'react-hook-form';
import {
  type ForwardRefExoticComponent,
  type JSXElementConstructor,
  type ReactNode,
  type RefAttributes,
} from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui-entities/form.tsx';
import { Input, type InputProps } from '@/components/ui-entities/input.tsx';
import { cn } from '@/utils/cn.ts';

export interface InputEntry {
  value?: string | number | readonly string[] | File[];
  name?: string;
  onBlur?: (_e?: any) => void;
  onChange?: (e?: any) => void;
  disabled?: boolean;
}

export type ControlledFieldProps<T extends InputEntry> = {
  label?: ReactNode;
  description?: string;
  fieldClassName?: string;
  component?: JSXElementConstructor<T> | ForwardRefExoticComponent<T & RefAttributes<any>>;
  required?: boolean;
  withErrors?: boolean;
} & Omit<UseControllerProps, 'control'> &
  Omit<T, 'value' | 'onChange' | 'onBlur'>;

export function ControlledField<T extends InputEntry = InputProps>(props: ControlledFieldProps<T>) {
  const {
    label,
    name,
    disabled,
    rules,
    defaultValue,
    shouldUnregister,
    required,
    description,
    withErrors = true,
    fieldClassName,
    component: Component = Input,
    ...rest
  } = props;

  const {
    field: { onChange, value, onBlur },
  } = useController({
    name: name,
    disabled,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <FormItem className={cn(fieldClassName, 'relative')}>
      <FormField name={name}>
        {label && (
          <FormLabel>
            {label}
            {required && <span className={'text-inherit'}>*</span>}
          </FormLabel>
        )}
        <FormControl>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-ignore*/}
          <Component
            {...rest}
            onChange={onChange}
            value={value ?? ''}
            onBlur={() => onBlur()}
            name={name}
            disabled={disabled}
          />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage className={cn(!withErrors && 'absolute')} />
      </FormField>
    </FormItem>
  );
}
