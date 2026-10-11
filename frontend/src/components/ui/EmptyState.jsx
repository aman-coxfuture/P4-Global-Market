import React from 'react';

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-surface-card border border-slate-800 rounded-sm">
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-elevated text-slate-400 mb-4">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
      <p className="text-sm text-slate-400 max-w-sm mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
}
