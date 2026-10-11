import React, { forwardRef } from 'react';
import { FormField } from './FormField';

export const Input = forwardRef(({ 
  id,
  label, 
  error, 
  helperText, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <FormField id={id} label={label} error={error} helperText={helperText}>
      <input
        id={id}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-hint` : undefined}
        className={`w-full p-2.5 rounded-sm border text-sm bg-surface-elevated text-slate-100 placeholder-slate-400 focus:outline-none focus-visible:ring-2 transition-all disabled:opacity-50 disabled:bg-slate-800 disabled:cursor-not-allowed ${
          error 
            ? 'border-red-500 focus-visible:ring-red-500' 
            : 'border-slate-700 focus-visible:border-primary focus-visible:ring-primary'
        } ${className}`}
        {...props}
      />
    </FormField>
  );
});

Input.displayName = 'Input';
