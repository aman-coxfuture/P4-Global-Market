import React from 'react';

export default function ContentSection({
  heading,
  subtitle,
  children,
  className = '',
  bg = 'bg-white',
  id
}) {
  return (
    <section id={id} className={`w-full py-16 sm:py-20 ${bg} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {(heading || subtitle) && (
          <div className="mb-10 text-center sm:text-left">
            {heading && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                {heading}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
