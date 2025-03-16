import type { StyleType } from '@/types/StyleType.ts';
import ArrowRight from '@/assets/svg/arrow-corner-right.svg?react';
import { cn } from '@/utils/cn.ts';
import type { ComponentProps, PropsWithChildren } from 'react';

const textVariants: Record<StyleType, string> = {
  accent: 'text-accent',
  light: 'text-white',
  dark: 'text-black',
};

const iconVariants: Record<StyleType, string> = {
  accent: 'text-accent',
  light: 'text-white',
  dark: 'text-black',
};

interface Props extends ComponentProps<'a'> {
  type?: 'leftArrow' | 'rightArrow';
  text: StyleType;
  icon?: StyleType;
}

export function Link({ text, icon, type, children, ...rest }: PropsWithChildren<Props>) {
  return (
    <a
      className={cn(
        type === 'rightArrow' ? 'gap-x-2' : 'gap-x-4',
        'p1 flex items-center text-black',
        textVariants[text]
      )}
      {...rest}
    >
      {type === 'leftArrow' && (
        <div className={'flex size-10 items-center justify-center rounded-full bg-current'}>
          <ArrowRight className={icon && iconVariants[icon]} />
        </div>
      )}
      {children}
      {type === 'rightArrow' && <ArrowRight className={'size-6'} />}
    </a>
  );
}
