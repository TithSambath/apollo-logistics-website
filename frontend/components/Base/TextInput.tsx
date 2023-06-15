import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const input = cva('input', {
  variants: {
    intent: {
      normal: [
        'block w-full rounded-md border-0',
        'focus:ring-2 focus:ring-inset focus:ring-blue',
        'text-[#454545] ring-1 ring-inset ring-gray-300'
      ],
      error: [
        'block w-full rounded-md border-0',
        'focus:ring-2 focus:ring-inset focus:ring-red-500',
        'ring-1 ring-inset ring-red-300 placeholder:text-red-300'
      ]
    },
    size: {
      sm: 'py-1.5 pr-10 sm:text-sm sm:leading-6',
      md: 'py-3 pr-10 sm:text-md sm:leading-7'
    }
  },
  defaultVariants: {
    intent: 'normal',
    size: 'md'
  }
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof input> {
  label?: string;
  error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, intent, size, label, error, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
        <span hidden={!props?.required} className="text-red-600">
          *
        </span>
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type="text"
          ref={ref}
          className={input({ intent: error ? 'error' : 'normal', size, className })}
          {...rest}
        />
      </div>
      <small hidden={!error} className="mt-2 text-sm text-red-600">
        {error}
      </small>
    </div>
  );
});

TextInput.displayName = 'Input';
