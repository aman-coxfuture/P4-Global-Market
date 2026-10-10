import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Headphones } from 'lucide-react';

export default function CTASection({
  heading = 'Ready to Start Trading?',
  subtitle = 'Open your account in under 3 minutes and trade with raw spreads, ultra-fast execution, and institutional liquidity.',
  primaryBtnText = 'OPEN LIVE ACCOUNT',
  primaryBtnLink = '/register',
  secondaryBtnText = 'TRY FREE DEMO',
  secondaryBtnLink = '/register?demo=true'
}) {
  return (
    <section className="w-full bg-gradient-to-r from-[#0b172a] via-[#0f2347] to-[#070d19] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryBtnLink}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#00C853]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to={secondaryBtnLink}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 border border-slate-600 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
          >
            {secondaryBtnText}
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00C853]" />
            <span>FSA Regulated & Segregated Funds</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00C853]" />
            <span>0.0 Pip Raw Spreads</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#00C853]" />
            <span>24/5 Multilingual Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
