import React from 'react';

export function PageHeader({ title, description, actions, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
        {description && <p className="text-sm text-slate-400">{description}</p>}
        {children}
      </div>
      {actions && (
        <div className="flex items-center gap-3 shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
