import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Download, 
  BarChart2, 
  Cpu, 
  Calendar, 
  Layers, 
  Check, 
  CheckCircle2, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function Platforms() {
  const [openFaq, setOpenFaq] = useState(0);

  // MT5 Features
  const mt5Features = [
    {
      title: 'Advanced Interactive Charts',
      desc: 'Analyze price action across 21 customizable timeframes (from 1-minute to monthly charts) with unlimited simultaneously open chart windows.',
      icon: BarChart2,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: '38+ Technical Indicators',
      desc: 'Comprehensive built-in analytical toolset including Moving Averages, RSI, MACD, Bollinger Bands, and 44 graphical analysis objects.',
      icon: Zap,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      title: 'Automated Trading (EAs)',
      desc: 'Deploy custom Expert Advisors built in high-performance MQL5. Take advantage of multi-currency strategy backtesting with distributed cloud agents.',
      icon: Cpu,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Multi-Asset Trading Engine',
      desc: 'Seamlessly trade 500+ financial CFDs across Forex, Global Stock Indices, Commodities, Energies, Metals, and Cryptocurrencies on a single unified account.',
      icon: Layers,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Integrated Economic Calendar',
      desc: 'Never miss high-volatility market events. Real-time macroeconomic news releases, forecast indicators, and historical consensus data embedded directly in MT5.',
      icon: Calendar,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      title: 'Depth of Market (Level II DOM)',
      desc: 'Institutional price ladder display showing real-time market liquidity and bid/ask volume depth for precise execution and scalping.',
      icon: ShieldCheck,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    }
  ];

  // Comparison Rows: MT5 vs MT4
  const comparisonRows = [
    { feature: 'Timeframes', mt5: '21 Timeframes (M1, M2, M5, H1, H2, Daily, etc.)', mt4: '9 Timeframes' },
    { feature: 'Pending Order Types', mt5: '6 Types (Buy/Sell Limit, Stop, Stop Limit)', mt4: '4 Types (Buy/Sell Limit, Stop)' },
    { feature: 'Technical Indicators', mt5: '38 Built-in Indicators', mt4: '30 Built-in Indicators' },
    { feature: 'Analytical Objects', mt5: '44 Graphical Objects', mt4: '31 Graphical Objects' },
    { feature: 'Depth of Market (Level II DOM)', mt5: 'Yes (Full Real-Time DOM)', mt4: 'No' },
    { feature: 'Economic Calendar', mt5: 'Built-in Real-Time Calendar', mt4: 'No (Requires 3rd party plugin)' },
    { feature: 'Strategy Tester Architecture', mt5: 'Multi-threaded, Multi-currency, Cloud Network', mt4: 'Single-threaded, Single currency' },
    { feature: 'Programming Language', mt5: 'MQL5 (Object-Oriented, Fast C++ style)', mt4: 'MQL4' },
    { feature: 'Partial Order Filling / Policies', mt5: 'Yes (Fill or Kill, Immediate or Cancel, Return)', mt4: 'No' },
    { feature: 'Cross-Platform Synchronization', mt5: 'Yes (Desktop, Web, iOS, Android)', mt4: 'Yes' },
  ];

  // 5 FAQs about MT5
  const faqs = [
    {
      q: 'What is MetaTrader 5 (MT5) and how is it different from MT4?',
      a: 'MetaTrader 5 is the state-of-the-art successor to MT4. While MT4 was developed primarily for Forex, MT5 is a true multi-asset institutional trading platform designed for Forex, Stock CFDs, Indices, Commodities, and Crypto. MT5 offers 21 timeframes, 6 pending order types, an integrated Economic Calendar, Level II Depth of Market, and a significantly faster 64-bit multi-threaded execution engine.'
    },
    {
      q: 'Is MetaTrader 5 free to download and use with P4 Global Market?',
      a: 'Yes, downloading and using the MT5 desktop client, mobile app (iOS and Android), and Web Terminal is completely free for all P4 Global Market clients. There are no platform licensing fees or hidden terminal charges.'
    },
    {
      q: 'Can I use my existing MT4 Expert Advisors (EAs) on MT5?',
      a: 'MT4 EAs are written in MQL4, while MT5 uses MQL5. Because MQL5 is an object-oriented and much faster language, MQL4 EAs cannot be run directly without converting or recompiling their code into MQL5. However, converting scripts is straightforward, and MQL5 provides far superior backtesting capabilities.'
    },
    {
      q: 'Can I log into the same MT5 account across both PC and mobile devices?',
      a: 'Absolutely. You can use your P4 Global Market MT5 login credentials simultaneously across Windows/Mac desktop, iPhone, iPad, Android smartphones, and the Web Terminal. All open positions, orders, and balances synchronize in real-time across all your devices.'
    },
    {
      q: 'What are the minimum system requirements for running MT5 on PC/Mac?',
      a: 'MT5 is optimized to run smoothly on Windows 7, 8, 10, 11 (64-bit required) and macOS (macOS 10.14 or later via native installer). It requires a minimum of 1 GB RAM (4 GB recommended) and a stable internet connection.'
    }
  ];

  return (
    <div className="pt-20 sm:pt-22 bg-white min-h-screen text-slate-900">
      
      {/* =========================================================================
          SECTION 1: HERO
          "Trade on MT5 — The World's Most Popular Platform"
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#070d19] via-[#0b172a] to-[#0f244a] text-white py-20 lg:py-28 overflow-hidden">
        
        {/* Subtle background chart grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none">
            <path d="M0 380 C 300 350, 600 450, 900 280 C 1200 120, 1350 200, 1440 100" stroke="#0066ff" strokeWidth="3" />
            <path d="M0 430 C 250 400, 550 320, 850 360 C 1150 400, 1300 180, 1440 140" stroke="#00d2ff" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>FLAGSHIP TRADING TERMINAL</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Trade on MT5 — <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  The World's Most Popular Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Unlock institutional execution speed, 21 multi-timeframe charts, integrated depth of market, and automated algorithmic trading on MetaTrader 5 with P4 Global Market.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#download-section"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>Download MT5</span>
                </a>

                <a
                  href="#web-terminal"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white border border-slate-600 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-400 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Web Terminal</span>
                </a>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">21</div>
                  <div className="text-xs text-slate-400">Timeframes</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">38+</div>
                  <div className="text-xs text-slate-400">Built-in Indicators</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white">&lt; 30ms</div>
                  <div className="text-xs text-slate-400">Execution Speed</div>
                </div>
              </div>
            </div>

            {/* Platform Mockup Showcase Card */}
            <div className="lg:col-span-5 bg-[#0b172a]/95 border border-slate-700/90 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                    MT5
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">P4 Global Market Prime</h3>
                    <p className="text-[11px] text-slate-400">MetaTrader 5 Client v5.00</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  CONNECTED
                </span>
              </div>

              {/* Graphical Candlestick chart simulation */}
              <div className="bg-[#070d18] rounded-2xl p-4 border border-slate-800 mb-4">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                  <span className="font-mono text-white font-bold">EURUSD, M15</span>
                  <span className="text-emerald-400 font-mono font-bold">1.08420 ▲ (+0.18%)</span>
                </div>
                
                <div className="h-44 w-full flex items-end justify-between px-2 gap-1.5">
                  {[45, 60, 50, 72, 68, 85, 80, 95, 90, 115, 108, 125, 120, 138, 150].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className={`w-0.5 ${i % 3 === 0 ? 'bg-rose-500' : 'bg-emerald-400'}`} style={{ height: `${val * 0.75}px` }}></div>
                      <div className={`w-2 rounded-xs ${i % 3 === 0 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ height: `${val * 0.58}px` }}></div>
                      <div className={`w-0.5 ${i % 3 === 0 ? 'bg-rose-500' : 'bg-emerald-400'}`} style={{ height: `${val * 0.3}px` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="bg-[#0f213e] p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Level II Market Depth</span>
                  <span className="font-bold text-white mt-0.5 block">Enabled</span>
                </div>
                <div className="bg-[#0f213e] p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Equinix Ping</span>
                  <span className="font-bold text-emerald-400 mt-0.5 block">14 ms</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: MT5 FEATURES
          Charts, indicators, EAs, multi-asset, economic calendar, DOM
      ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Traders Prefer MT5 with P4 Global Market
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Equipped with every institutional feature required for manual charting, algorithmic bots, and risk management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mt5Features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feat.bg} ${feat.color} flex items-center justify-center mb-6`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: DOWNLOAD SECTION
          4 cards: Windows, Mac, Android, iOS with download buttons
      ========================================================================= */}
      <section id="download-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Cross-Device Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Download MT5 on Any Device
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Install the official MetaTrader 5 trading application on your PC, laptop, tablet, or smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Windows Card */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">MT5 for Windows</h3>
                <p className="text-xs text-slate-500 mb-6">Windows 11, 10, 8 (64-bit)</p>
                <ul className="text-xs text-slate-600 space-y-2 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full MQL5 EA algorithmic trading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-screen charting setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Level II Depth of Market</span>
                  </li>
                </ul>
              </div>

              <a
                href="#download-mt5-win"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Windows (.exe)</span>
              </a>
            </div>

            {/* Mac Card */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-slate-900/20">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">MT5 for macOS</h3>
                <p className="text-xs text-slate-500 mb-6">macOS Sonoma, Ventura & M1/M2/M3</p>
                <ul className="text-xs text-slate-600 space-y-2 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Native Apple Silicon support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Retina display high-res charts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>One-Click direct trading</span>
                  </li>
                </ul>
              </div>

              <a
                href="#download-mt5-mac"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download macOS (.dmg)</span>
              </a>
            </div>

            {/* Android Card */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">MT5 for Android</h3>
                <p className="text-xs text-slate-500 mb-6">Android OS 7.0 & higher</p>
                <ul className="text-xs text-slate-600 space-y-2 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Push notifications & price alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full set of trading orders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Interactive touch charts</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Google Play Store</span>
              </a>
            </div>

            {/* iOS Card */}
            <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between text-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#0071e3] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">MT5 for iOS</h3>
                <p className="text-xs text-slate-500 mb-6">iPhone, iPad & iOS 14.0+</p>
                <ul className="text-xs text-slate-600 space-y-2 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Haptic touch order execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Biometric FaceID secure login</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>30 technical indicators</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://apple.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#0071e3] hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Apple App Store</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: WEB TERMINAL SECTION
          "Trade directly from your browser" with "Launch Web Terminal" button
      ========================================================================= */}
      <section id="web-terminal" className="py-20 bg-[#0b172a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#0f244a] to-[#070d18] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <Globe className="w-3.5 h-3.5" />
                <span>ZERO INSTALLATION REQUIRED</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Trade Directly from Your Browser
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Launch the official MT5 Web Terminal instantly without downloading any software. Compatible with Google Chrome, Safari, Mozilla Firefox, and Edge. Enjoy 256-bit encrypted security, live quotes, and all standard order types anywhere in the world.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/login"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-blue-600/40 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Launch Web Terminal</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: COMPARISON TABLE (MT5 vs MT4)
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Platform Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              MetaTrader 5 vs MetaTrader 4
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Detailed technical comparison highlighting why MT5 is the modern benchmark for active CFD traders.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b172a] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Feature / Specification</th>
                    <th className="py-4 px-6 text-cyan-300 bg-[#0f244a] font-extrabold text-sm">MetaTrader 5 (MT5)</th>
                    <th className="py-4 px-6 text-slate-300 font-semibold text-sm">MetaTrader 4 (MT4)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-xs font-medium text-slate-700">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">{row.feature}</td>
                      <td className="py-4 px-6 font-bold text-blue-900 bg-blue-50/40">{row.mt5}</td>
                      <td className="py-4 px-6 text-slate-600">{row.mt4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: FAQ SECTION (5 Common Questions about MT5)
      ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Common Questions About MT5
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Everything you need to know about setting up and trading with MetaTrader 5.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-600">
              Have additional questions about platform configuration or Expert Advisors?{' '}
              <Link to="/contact" className="text-blue-600 font-bold hover:underline">
                Contact our 24/5 technical support team
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="bg-gradient-to-r from-[#070d18] to-[#0b172a] text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Experience MT5 with Raw 0.0 Pip Spreads</h3>
            <p className="text-xs text-slate-400 mt-1">Open your account in under 3 minutes with instant funding.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/register"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white shadow-lg transition-all"
            >
              Open MT5 Live Account
            </Link>
            <Link
              to="/register?demo=true"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-300 font-semibold text-xs text-white transition-all"
            >
              Try MT5 Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
