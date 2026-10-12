import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({ title, description, variant = 'default', onClose }) {
  const icons = {
    default: null,
    success: <CheckCircle2 className="text-primary shrink-0" size={20} />,
    error: <AlertCircle className="text-red-500 shrink-0" size={20} />
  };

  return (
    <div role="alert" className="flex items-start gap-3 p-4 bg-surface-elevated border border-slate-700 rounded-sm shadow-xl max-w-sm w-full">
      {icons[variant]}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
        {description && <p className="text-sm text-slate-300 mt-1">{description}</p>}
      </div>
      <button 
        onClick={onClose} 
        aria-label="Close" 
        className="text-slate-500 hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm p-0.5"
      >
        <X size={16} />
      </button>
    </div>
  );
}
