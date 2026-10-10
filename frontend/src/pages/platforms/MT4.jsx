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
  Layers, 
  BarChart2, 
  CheckCircle2 
} from 'lucide-react';

export default function MT4() {
  const features = [
    {
      icon: BarChart2,
      title: 'Advanced Interactive Charting',
      description: '3 chart types (Bar, Candlestick, Line) across 9 standard timeframes from 1 minute to 1 month with multiple drawing tools.',
      highlight: '9 Timeframes'
    },
    {
      icon: Cpu,
      title: 'Automated Trading with EAs',
      description: 'Run Expert Advisors (EAs) and automated trading algorithms programmed in MQL4 with fast backtesting capabilities.',
      highlight: 'MQL4 algorithm engine'
    },
    {
      icon: Layers,
      title: '30+ Built-In Technical Indicators',
      description: 'Analyze market momentum, volatility, and trend strength with pre-installed indicators like RSI, MACD, Bollinger Bands, and Moving Averages.',
      highlight: '30+ Indicators'
    },
    {
      icon: Globe,
      title: 'Multiple Execution Modes',
      description: 'Instant Execution and Market Execution with 4 pending order types (Buy Limit, Sell Limit, Buy Stop, Sell Stop).',
      highlight: 'Ultra-low latency'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="TRADING PLATFORMS"
        title="METATRADER 4"
        subtitle="The world's most popular trading platform"
        ctaText="DOWNLOAD MT4"
        ctaLink="#download"
      />

      {/* MT4 Overview & Features */}
      <ContentSection 
        heading="MetaTrader 4 Core Features"
        subtitle="Engineered for reliability, speed, and algorithmic trading precision."
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

      {/* Download Options */}
      <ContentSection 
        id="download"
        bg="bg-slate-50"
        heading="Download MetaTrader 4 on Any Device"
        subtitle="Trade seamlessly across desktop, tablet, and mobile devices."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Windows */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Monitor className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">MT4 for Windows</h4>
              <p className="text-xs text-slate-500">Full algorithmic EA trading and multi-charting capabilities.</p>
            </div>
            <a
              href="#download-win"
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
              <h4 className="text-lg font-bold text-slate-900">MT4 for macOS</h4>
              <p className="text-xs text-slate-500">Optimized for Apple Silicon (M1/M2/M3) and Intel Macs.</p>
            </div>
            <a
              href="#download-mac"
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
              <h4 className="text-lg font-bold text-slate-900">MT4 Android</h4>
              <p className="text-xs text-slate-500">Full trading functionality and real-time push alerts on mobile.</p>
            </div>
            <a
              href="#google-play"
              className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Google Play
            </a>
          </div>

          {/* WebTrader */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 text-center">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mx-auto">
                <Globe className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">MT4 Web Terminal</h4>
              <p className="text-xs text-slate-500">Instant in-browser trading without installing any software.</p>
            </div>
            <Link
              to="/register"
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
            >
              Launch WebTrader
            </Link>
          </div>

        </div>
      </ContentSection>

      {/* System Requirements */}
      <ContentSection heading="System Requirements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">Desktop Specifications</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Windows 7 / 8 / 10 / 11 (64-bit recommended)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> macOS Big Sur 11.0 or newer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 1.5 GHz or faster CPU</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 1 GB RAM (2 GB recommended)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 100 MB free disk storage</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900">Mobile Specifications</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> Android 7.0 (Nougat) or newer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> iOS 13.0 or newer (WebTrader compatible)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00C853]" /> 3G / 4G / 5G or Wi-Fi internet connection</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
