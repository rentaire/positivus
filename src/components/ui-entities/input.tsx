import * as React from 'react';

import { cn } from '@/utils/cn.ts';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'rounded-14 768:px-7 flex h-15 w-full border px-5 py-4 p2 focus-visible:outline-none disabled:cursor-not-allowed autofill:!rounded-14  autofill:border-border autofill:border-solid',
  {
    variants: {
      variant: {
        dark: 'placeholder:text-[#898989] text-black border-black bg-white  autofill:shadow-[inset_0_0_0px_200px_#fff]  autofill:border-black autofill:text-black text-fill-black caret-black',
        light:
          'placeholder:text-white text-white border-white autofill:shadow-[inset_0_0_0px_200px_#292A32] autofill:border-white text-fill-white caret-white',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
