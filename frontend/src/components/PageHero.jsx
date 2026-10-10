import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PageHero({
  title,
  subtitle,
  badge = 'P4 GLOBAL MARKET',
  ctaText = 'OPEN ACCOUNT',
  ctaLink = '/register',
  secondaryCtaText = 'TRY DEMO',
  secondaryCtaLink = '/register?demo=true'
}) {
  return (
    <section className="relative bg-[#0a1929] text-white pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden select-none">
      {/* Subtle Dot Matrix & Glow Background Pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#60a5fa" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-dots)" />
        </svg>
      </div>

      {/* Ambient Radial Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
            <span>{badge}</span>
          </div>
        )}

        {/* Large White Uppercase Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={ctaLink}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#00C853]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {secondaryCtaText && (
            <Link
              to={secondaryCtaLink}
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 border border-slate-600 bg-slate-800/40 hover:bg-slate-800 text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
