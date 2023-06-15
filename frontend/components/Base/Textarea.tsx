import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const textarea = cva('textarea', {
  variants: {
    intent: {
      normal: [
        'block w-full rounded-md border-0',
        'text-[#454545]',
        'ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue',
        'py-1.5 shadow-sm sm:text-sm sm:leading-6',
        'placeholder:text-gray-400'
      ],
      error: [
        'block w-full rounded-md border-0',
        'text-[#454545]',
        'ring-1 ring-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500',
        'py-1.5 shadow-sm sm:text-sm sm:leading-6',
        'placeholder:text-red-300'
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { className, intent, label, error, ...rest } = props;

  return (
    <div className={className}>
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
        <span hidden={!props?.required} className="text-red-600">
          *
        </span>
      </label>
      <div className="mt-1">
        <textarea
          ref={ref}
          rows={4}
          className={textarea({ intent: error ? 'error' : 'normal', className })}
          {...rest}
        />
      </div>
      <small hidden={!error} className="mt-2 text-sm text-red-600">
        {error}
      </small>
    </div>
  );
});

Textarea.displayName = 'Textarea';
