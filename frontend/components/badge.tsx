import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badge = cva('div', {
  variants: {
    intent: {
      primary: [
        'w-fit',
        'bg-orange',
        'text-white',
        'border-transparent',
        'rounded-3xl',
        'font-heading',
        'font-semibold'
      ],
      secondary: [
        'w-fit',
        'bg-blue',
        'text-white',
        'border-gray-400',
        'rounded-3xl',
        'font-heading',
        'font-semibold'
      ]
    },
    size: {
      sm: ['text-base', 'py-0', 'px-2'],
      md: ['text-lg', 'py-1', 'px-4'],
      lg: ['text-xl', 'py-2', 'px-6']
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md'
  }
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<BadgeProps> = props => {
  const { className, intent, size, ...rest } = props;
  return <div className={badge({ intent, size, className })} {...rest} />;
};
