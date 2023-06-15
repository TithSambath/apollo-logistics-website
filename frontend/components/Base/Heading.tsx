import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

/**
 * Font order base on the flowbite
 * @link https://flowbite.com/docs/typography/headings/#heading-one-h1
 */

const heading = cva('h1', {
  variants: {
    order: {
      h1: ['text-4xl font-bold xl:text-5xl !leading-tight'],
      h2: ['text-3xl font-bold xl:text-4xl !leading-tight'],
      h3: ['text-2xl font-bold xl:text-3xl !leading-tight'],
      h4: ['text-xl font-bold xl:text-2xl !leading-tight'],
      h5: ['text-lg font-bold xl:text-xl !leading-tight'],
      h6: ['text-md sm:text-lg !leading-tight'],
      h7: ['text-sm sm:text-md !leading-tight'],
      h8: ['text-xs sm:text-sm !leading-tight']
    },
    color: {
      default: 'text-white',
      orange: 'text-orange',
      blue: 'text-blue',
      black: 'text-[#454545]'
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      regular: 'font-normal',
      light: 'font-light'
    }
  },
  defaultVariants: {
    order: 'h1',
    color: 'default',
    weight: 'bold'
  }
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof heading> {}

export const Heading: React.FC<HeadingProps> = props => {
  const { className, order = 'h1', weight, color, children, dangerouslySetInnerHTML } = props;
  const Heading = `${order}` as keyof JSX.IntrinsicElements;
  return (
    <Heading
      className={classNames(heading({ order, color, weight, className }), '[&>span]:text-orange')}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Heading>
  );
};
