import { type StyleType } from '@/types/StyleType';
import { cn } from '@/utils/cn.ts';

interface Props {
  color: StyleType;
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const lineVariants: Record<StyleType, string> = {
  accent: 'bg-accent',
  light: 'bg-white',
  dark: 'bg-dark',
};

export function SeparateLine({ color, direction = 'horizontal', className }: Props) {
  return (
    <div
      className={cn(
        lineVariants[color],
        direction === 'horizontal' ? 'h-[1px] w-auto' : 'h-auto w-[1px]',
        className
      )}
    ></div>
  );
}
