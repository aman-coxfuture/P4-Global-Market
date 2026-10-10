import React from 'react';

export default function BenefitCard({
  icon: Icon,
  title,
  description,
  highlight,
  className = ''
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-400/40 transition-all duration-200 flex flex-col justify-between group ${className}`}>
      <div className="space-y-4">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00C853]/10 group-hover:text-[#00C853] transition-colors">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
      {highlight && (
        <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#00C853]">
          {highlight}
        </div>
      )}
    </div>
  );
}
