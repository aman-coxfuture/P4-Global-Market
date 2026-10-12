import React from 'react';

export function FormField({ 
  id,
  label, 
  error, 
  helperText, 
  children,
  className = ''
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-slate-200 mb-1.5">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="text-red-400 text-sm mt-1.5 font-medium" role="alert">{error}</p>
      )}
      {helperText && !error && (
        <p id={`${id}-hint`} className="text-slate-300 text-sm mt-1.5">{helperText}</p>
      )}
    </div>
  );
}
