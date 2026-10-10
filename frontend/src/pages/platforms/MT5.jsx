import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Download, 
  Monitor, 
  Smartphone, 
  Apple, 
  Globe, 
  Cpu, 
  Calendar, 
  BarChart3, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

export default function MT5() {
  const features = [
    {
      icon: BarChart3,
      title: '21 Timeframes & 80+ Indicators',
      description: 'Granular chart analysis with 21 distinct timeframes, 38 technical indicators, and 44 analytical graphical objects.',
      highlight: '21 Timeframes'
    },
    {
      icon: Calendar,
      title: 'Built-In Economic Calendar',
      description: 'Track high-impact macroeconomic releases, interest rate decisions, and volatility events directly inside your chart window.',
      highlight: 'Live news feed'
    },
    {
      icon: Cpu,
      title: 'Multi-Threaded Strategy Tester',
      description: 'Backtest automated trading robots (EAs) across multiple currency pairs simultaneously using MQL5 cloud network speed.',
      highlight: 'MQL5 high speed'
    },
    {
      icon: Zap,
      title: '6 Pending Order Types & DOM',
      description: 'Full Market Depth (Level II pricing) and 6 pending order types including Buy Stop Limit and Sell Stop Limit.',
      highlight: 'Depth of Market (DOM)'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="FLAGSHIP TRADING PLATFORM"
        title="METATRADER 5"
        subtitle="The next generation multi-asset trading platform"
        ctaText="DOWNLOAD MT5"
        ctaLink="#download"
      />

      {/* MT5 Core Features */}
      <ContentSection 
        heading="MetaTrader 5 Next-Gen Features"
        subtitle="Engineered for multi-asset trading excellence across Forex, Indices, Commodities, and Crypto."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <BenefitCard
              key={idx}
              icon={f.icon}
              title={f.title}
              description={f.description}
              highlight={f.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* Download Section */}
      <ContentSection 
        id="download"
        bg="bg-slate-50"
        heading="Download MetaTrader 5"
        subtitle="Available natively across Windows, Mac, iOS, Android, and Web browsers."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Windows */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Monitor className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">MT5 for Windows</h4>
              <p className="text-xs text-slate-500">64-bit multi-threaded speed with Level II pricing.</p>
            </div>
            <a
              href="#download-mt5-win"
              className="w-full py-3 rounded-full bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download .EXE
            </a>
          </div>

          {/* macOS */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mx-auto">
                <Apple className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">MT5 for macOS</h4>
              <p className="text-xs text-slate-500">Native silicon support for Apple M1/M2/M3 chips.</p>
            </div>
            <a
              href="#download-mt5-mac"
              className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download .DMG
            </a>
          </div>

          {/* Android */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Smartphone className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">MT5 for Mobile</h4>
              <p className="text-xs text-slate-500">Real-time quotes, interactive touch charts, and alerts.</p>
            </div>
            <a
              href="#google-play-mt5"
              className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Mobile App
            </a>
          </div>

          {/* Web Terminal */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mx-auto">
                <Globe className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Web Terminal</h4>
              <p className="text-xs text-slate-500">One-click trade execution directly inside Chrome/Safari.</p>
            </div>
            <Link
              to="/register"
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              Launch MT5 Web
            </Link>
          </div>

        </div>
      </ContentSection>

      {/* System Specs */}
      <ContentSection heading="System Requirements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">Hardware Specifications</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Windows 10 / 11 64-bit or macOS 11.0+</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Multi-core 64-bit processor (Intel / AMD / Apple Silicon)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 4 GB RAM recommended for multi-chart setups</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 250 MB free SSD storage space</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">Network & Connectivity</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Low latency broadband internet connection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Direct Equinix LD4 / NY4 server connectivity via P4 bridge</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
