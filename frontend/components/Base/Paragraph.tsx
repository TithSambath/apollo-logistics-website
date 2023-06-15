import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const paragraph = cva('p', {
  variants: {
    size: {
      md: ['text-xl sm:text-2xl'],
      sm: ['text-lg sm:text-xl'],
      xs: ['text-md sm:text-lg']
    },
    weight: {
      bold: 'font-bold',
      semiBold: 'font-semibold',
      regular: 'font-normal',
      light: 'font-light'
    },
    color: {
      white: 'text-white',
      orange: 'text-orange',
      blue: 'text-blue',
      black: 'text-[#454545]'
    }
  },
  defaultVariants: { size: 'md', weight: 'regular', color: 'black' }
});

export interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof paragraph> {}

export const Paragraph: React.FC<ParagraphProps> = props => {
  const { className, size, weight, color, ...rest } = props;
  return <p className={paragraph({ size, weight, color, className })} {...rest} />;
};
