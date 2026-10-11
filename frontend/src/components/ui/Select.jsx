import React, { forwardRef } from 'react';
import { FormField } from './FormField';

export const Select = forwardRef(({ 
  id,
  label, 
  error, 
  helperText, 
  options = [],
  className = '', 
  ...props 
}, ref) => {
  return (
    <FormField id={id} label={label} error={error} helperText={helperText}>
      <select
        id={id}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-hint` : undefined}
        className={`w-full p-2.5 rounded-sm border text-sm bg-surface-elevated text-slate-100 placeholder-slate-400 focus:outline-none focus-visible:ring-2 transition-all disabled:opacity-50 disabled:bg-slate-800 disabled:cursor-not-allowed appearance-none ${
          error 
            ? 'border-red-500 focus-visible:ring-red-500' 
            : 'border-slate-700 focus-visible:border-primary focus-visible:ring-primary'
        } ${className}`}
        {...props}
      >
        <option value="" disabled className="text-slate-400">Select an option...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {/* Custom arrow wrapper could go here if appearance-none is used */}
    </FormField>
  );
});

Select.displayName = 'Select';
