import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import s from './accordion.module.scss';

import { cn } from '@/utils/cn.ts';
import { SeparateLine } from '@/components/ui-entities/separateLine.tsx';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot={'accordion'} {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot={'accordion-item'}
      className={cn('bg-neutral data-[state=open]:bg-accent rounded-45 items-center', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className={'flex'}>
      <AccordionPrimitive.Trigger
        data-slot={'accordion-trigger'}
        className={cn(
          s.trigger,
          'text-dark 768:px-14 768:py-10 relative flex flex-1 cursor-pointer items-center justify-between gap-4 p-7 text-start transition-all [&[data-state=open]>.separate-line]:block',
          className
        )}
        {...props}
      >
        {children}
        <div
          className={
            'bg-neutral border-dark 768:size-14 relative flex size-8 shrink-0 items-start justify-center rounded-full border'
          }
        >
          <div
            className={
              'bg-dark 768:h-[6px] 768:w-[24px] absolute top-[50%] left-[50%] h-[3px] w-[14px] translate-x-[-50%] translate-y-[-50%]'
            }
          ></div>
          <div
            className={cn(
              'bg-dark 768:h-[24px] 768:w-[6px] absolute top-[50%] left-[50%] h-[14px] w-[3px] translate-x-[-50%] translate-y-[-50%]',
              s.plusPart
            )}
          ></div>
        </div>
        <div
          className={
            'separate-line absolute bottom-[10px] left-[50%] hidden w-full translate-x-[-50%] px-[inherit]'
          }
        >
          <SeparateLine color={'dark'} />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot={'accordion-content'}
      className={cn('overflow-hidden', s.content)}
      {...props}
    >
      <div className={cn('768:pb-10 768:px-14 mt-5 px-7 pb-7', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
