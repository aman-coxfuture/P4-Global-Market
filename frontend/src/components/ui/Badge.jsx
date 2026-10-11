import React from 'react';

export function Badge({ children, variant = 'neutral', className = '' }) {
  const variants = {
    neutral: 'bg-slate-700/50 text-slate-300 border-slate-600',
    success: 'bg-green-900/50 text-green-400 border-green-800',
    warning: 'bg-yellow-900/50 text-yellow-400 border-yellow-800',
    danger: 'bg-red-900/50 text-red-400 border-red-800',
    info: 'bg-blue-900/50 text-blue-400 border-blue-800',
    brand: 'bg-primary/20 text-primary border-primary/50'
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
