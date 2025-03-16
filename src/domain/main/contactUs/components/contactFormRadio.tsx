import { useEffect, useRef } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui-entities/radioGroup.tsx';

type ContactFormRadioProps = {
  value?: string;
  name?: string;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export type ContactUsType = 'hi' | 'quote';

const options: { value: ContactUsType; label: string }[] = [
  {
    value: 'hi',
    label: 'Say Hi',
  },
  {
    value: 'quote',
    label: 'Get a Quote',
  },
];

export function ContactFormRadio(props: ContactFormRadioProps) {
  const { disabled, name, onBlur, onChange, value } = props;

  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    onBlur?.();
  }, [value]);

  return (
    <RadioGroup
      className={'auto-cols-max grid-flow-col'}
      disabled={disabled}
      name={name}
      value={value}
      onValueChange={onChange}
    >
      {options.map(it => (
        <div className={'flex items-center'} key={it.value}>
          <RadioGroupItem value={it.value} id={it.value} />
          <label
            htmlFor={it.value}
            className={'p2 flex h-full cursor-pointer items-center pl-3 text-black'}
          >
            {it.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
}
