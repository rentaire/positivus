import * as React from 'react';
import { type ComponentRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/utils/cn.ts';

const Label = React.forwardRef<
  ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn('l1 768:mb-1 mb-4 inline-block cursor-pointer text-black', className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
