import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  leftIcon, 
  rightIcon, 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1121] disabled:opacity-50 disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed disabled:border-none';
  
  const variants = {
    primary: 'bg-primary text-[#0b1121] hover:bg-primary-hover focus-visible:ring-primary',
    action: 'bg-action text-white hover:bg-action-hover border border-action-border focus-visible:ring-action',
    outline: 'border-2 border-slate-400 text-slate-200 hover:bg-slate-800 hover:text-white focus-visible:ring-slate-400',
    ghost: 'text-slate-300 hover:bg-slate-800 focus-visible:ring-slate-500 border-transparent',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2 pointer-events-none">{leftIcon}</span>}
      <span className={isLoading ? 'pointer-events-none' : ''}>{children}</span>
      {!isLoading && rightIcon && <span className="ml-2 pointer-events-none">{rightIcon}</span>}
    </button>
  );
}
