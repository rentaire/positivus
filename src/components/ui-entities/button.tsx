import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn.ts';

const buttonVariants = cva('rounded-14 py-5 px-8 text-nowrap p1 cursor-pointer', {
  variants: {
    variant: {
      dark: 'bg-dark text-white hover:bg-accent hover:text-black',
      transparent: 'bg-transparent text-black border border-dark hover:bg-dark hover:text-white',
      accent: 'bg-accent text-black hover:bg-white',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return <Comp className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
