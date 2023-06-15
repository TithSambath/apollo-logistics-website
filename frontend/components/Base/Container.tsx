import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const container = cva('div', {
  variants: {
    type: {
      fluid: '',
      static: 'container mx-auto p-5 sm:w-11/12'
    },
    padding: {
      top: 'pt-12 lg:pt-24',
      bottom: 'pb-12 lg:pb-24',
      'top-bottom': 'py-12 lg:py-24'
    },
    margin: {
      top: 'mt-12 lg:mt-24',
      bottom: 'mb-12 lg:mb-24',
      'top-bottom': 'my-12 lg:my-24'
    }
  },
  defaultVariants: {
    type: 'static'
  }
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

export const Container: React.FC<ContainerProps> = props => {
  const { className, type, padding, margin, ...rest } = props;
  return <div className={container({ type, padding, margin, className })} {...rest} />;
};
