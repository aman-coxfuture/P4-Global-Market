import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveTicker from '../components/LiveTicker';
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Monitor,
  Headphones,
  ShieldCheck,
  Lock,
  Download,
  ExternalLink,
  BookOpen,
  Video,
  HelpCircle,
  Check,
  CheckCircle2,
  CreditCard,
  DollarSign,
  Globe,
  Layers,
  Smartphone,
  Apple,
  Play,
  Sparkles,
  ChevronRight,
  BarChart2,
  FileText
} from 'lucide-react';

export default function Home() {
  const [activeSpreadTab, setActiveSpreadTab] = useState('forex');

  const paymentMethods = [
    { name: 'Visa', type: 'Credit / Debit Card', fee: '0% Fee', time: 'Instant', icon: '💳' },
    { name: 'Mastercard', type: 'Credit / Debit Card', fee: '0% Fee', time: 'Instant', icon: '💳' },
    { name: 'Skrill', type: 'E-Wallet', fee: '0% Fee', time: 'Instant', icon: '👛' },
    { name: 'Neteller', type: 'E-Wallet', fee: '0% Fee', time: 'Instant', icon: '⚡' },
    { name: 'Crypto (USDT / BTC / ETH)', type: 'Blockchain Transfer', fee: '0% Fee', time: 'Instant / 10 Mins', icon: '₿' },
    { name: 'Bank Wire', type: 'Direct Bank Transfer', fee: '0% Fee', time: 'Same Day', icon: '🏦' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">

      {/* Live Market Bar */}
      <div className="pt-20 sm:pt-22">
        <LiveTicker />
      </div>

      {/* =========================================================================
          SECTION 1: HERO
          Big headline "Trade Forex, Stocks & Crypto with Tight Spreads", subtext,
          two buttons "Open Live Account" and "Try Demo", background with subtle chart image
      ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#070d19] via-[#0b172a] to-[#0f2347] text-white py-20 lg:py-28 overflow-hidden">

        {/* Subtle Chart Graphic & Background Effects */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 450 C 200 420, 350 490, 500 380 C 650 270, 800 340, 950 220 C 1100 100, 1250 180, 1440 80" stroke="#0066ff" strokeWidth="4" strokeDasharray="6 6" />
            <path d="M0 500 C 250 480, 400 390, 600 420 C 800 450, 950 310, 1150 280 C 1300 250, 1380 180, 1440 140" stroke="#00d2ff" strokeWidth="3" />
            <path d="M0 550 L 0 450 C 200 420, 350 490, 500 380 C 650 270, 800 340, 950 220 C 1100 100, 1250 180, 1440 80 L 1440 600 L 0 600 Z" fill="url(#hero-gradient)" opacity="0.4" />
            <defs>
              <linearGradient id="hero-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#070d19" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Hero Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>GLOBAL MULTI-ASSET BROKERAGE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Trade Forex, Stocks & Crypto with <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Tight Spreads
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Access 500+ premium trading instruments with raw spreads from 0.0 pips, sub-30ms execution speed, and regulated client fund security on industry-leading MetaTrader 5.
              </p>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/register"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/35 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Open Live Account</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/register?demo=true"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white border border-slate-600/80 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-400 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Try Demo</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 text-left">
                <div>
                  <div className="text-2xl font-black text-white">0.0 <span className="text-blue-400 text-sm">pips</span></div>
                  <div className="text-xs text-slate-400 mt-0.5">Ultra-Low Spreads</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">1:500</div>
                  <div className="text-xs text-slate-400 mt-0.5">Max Leverage</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">&lt; 30<span className="text-cyan-400 text-sm">ms</span></div>
                  <div className="text-xs text-slate-400 mt-0.5">Lightning Execution</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">$0</div>
                  <div className="text-xs text-slate-400 mt-0.5">Deposit Fees</div>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Market Terminal Preview */}
            <div className="lg:col-span-5">
              <div className="bg-[#0b172a]/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">P4 MT5 Terminal</span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    DIRECT FEED
                  </span>
                </div>

                {/* Spot Pair Overview */}
                <div className="bg-[#070d18] p-4 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">Major Forex Pair</span>
                      <span className="text-xl font-extrabold text-white">EUR / USD</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-emerald-400 font-bold block">+0.18% 24h</span>
                      <span className="text-lg font-mono font-bold text-white">1.08420</span>
                    </div>
                  </div>

                  {/* Buy / Sell Interactive Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-rose-600/90 hover:bg-rose-600 text-white py-3 px-3 rounded-xl font-bold text-xs flex flex-col items-center transition-all shadow-md">
                      <span className="text-[10px] opacity-80">SELL (BID)</span>
                      <span className="font-mono text-sm font-extrabold">1.08420</span>
                    </button>
                    <button className="bg-emerald-600/90 hover:bg-emerald-600 text-white py-3 px-3 rounded-xl font-bold text-xs flex flex-col items-center transition-all shadow-md">
                      <span className="text-[10px] opacity-80">BUY (ASK)</span>
                      <span className="font-mono text-sm font-extrabold">1.08422</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                    <span>Spread: <strong className="text-blue-400 font-mono">0.0 pips</strong></span>
                    <span>Order Speed: <strong className="text-emerald-400 font-mono">18ms</strong></span>
                  </div>
                </div>

                {/* Instrument Mini Row */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-800/40">
                    <span className="font-bold text-slate-200">XAU/USD (Gold)</span>
                    <span className="font-mono text-white">$2,684.50</span>
                    <span className="text-emerald-400 font-semibold">+1.42%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-800/40">
                    <span className="font-bold text-slate-200">BTC/USD (Bitcoin)</span>
                    <span className="font-mono text-white">$89,450.00</span>
                    <span className="text-emerald-400 font-semibold">+3.18%</span>
                  </div>
                </div>

                <Link
                  to="/register"
                  className="mt-5 w-full block text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm hover:opacity-95 shadow-lg shadow-blue-600/30 transition-all"
                >
                  Start Trading Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: FEATURES
          6 cards: Low Spreads, Fast Execution, MT5 Platform, 24/5 Support, Secure Deposits, Regulated Broker
      ========================================================================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Why Trade With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Institutional Advantage for Every Trader
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Discover why thousands of international traders choose P4 Global Market as their primary financial partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: Low Spreads */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Low Spreads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trade with interbank raw spreads starting from 0.0 pips on major currencies with zero hidden markups.
              </p>
            </div>

            {/* Card 2: Fast Execution */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Execution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sub-30 millisecond order execution backed by Equinix LD4 and NY4 fiber optic financial cross-connections.
              </p>
            </div>

            {/* Card 3: MT5 Platform */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">MT5 Platform</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access next-generation multi-asset trading with 21 timeframes, 38+ indicators, and automated EA strategy testing.
              </p>
            </div>

            {/* Card 4: 24/5 Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">24/5 Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Get dedicated multilingual support and personal account managers around the clock from Monday to Friday.
              </p>
            </div>

            {/* Card 5: Secure Deposits */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Deposits</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instant 0% fee deposits and 24-hour fast withdrawals via Cards, E-Wallets, Bank Wire, and Cryptocurrency.
              </p>
            </div>

            {/* Card 6: Regulated Broker */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Regulated Broker</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                FSA authorized and compliant with segregated client trust accounts held strictly in Tier-1 investment banks.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: TOOLS & RESOURCES
          Dark blue background (#0B132B), grid of 8 cards with images and titles
      ========================================================================= */}
      <section className="py-20 bg-[#0B132B] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00C853]">
              Tools & Resources
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Start Your Trading Journey with P4 Global Market
            </h2>
          </div>

          {/* 8-Card Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1: P4 Mobile App */}
            <Link
              to="/tools/mobile-app"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                  alt="P4 Mobile App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  P4 Mobile App
                </h3>
              </div>
            </Link>

            {/* Card 2: P4 Social Trading App */}
            <Link
              to="/tools/social-trading"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                  alt="P4 Social Trading App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  P4 Social Trading App
                </h3>
              </div>
            </Link>

            {/* Card 3: Economic Calendar */}
            <Link
              to="/tools/economic-calendar"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
                  alt="Economic Calendar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  Economic Calendar
                </h3>
              </div>
            </Link>

            {/* Card 4: Forex Calculators */}
            <Link
              to="/tools/forex-calculators"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                  alt="Forex Calculators"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  Forex Calculators
                </h3>
              </div>
            </Link>

            {/* Card 5: Latest News */}
            <Link
              to="/tools/latest-news"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
                  alt="Latest News"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  Latest News
                </h3>
              </div>
            </Link>

            {/* Card 6: eBooks (green title) */}
            <Link
              to="/tools/ebooks"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-[#00C853]/40 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80"
                  alt="eBooks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#00C853] group-hover:text-[#00ff88] transition-colors">
                  eBooks
                </h3>
              </div>
            </Link>

            {/* Card 7: Glossary */}
            <Link
              to="/tools/glossary"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                  alt="Glossary"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  Glossary
                </h3>
              </div>
            </Link>

            {/* Card 8: Video Courses */}
            <Link
              to="/tools/video-courses"
              className="bg-[#0F1729] rounded-xl border border-slate-800/80 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-slate-700 flex flex-col justify-between"
            >
              <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                  alt="Video Courses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00C853] transition-colors">
                  Video Courses
                </h3>
              </div>
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: TRADING PLATFORMS
          MT5 description + download buttons (Windows, Mac, Android, iOS) + Web Terminal link
      ========================================================================= */}
      <section className="py-20 bg-[#070d18] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                Next-Gen Multi-Asset Platform
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Trade on MetaTrader 5 (MT5)
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                MetaTrader 5 is the premier multi-asset trading platform engineered for exceptional speed, advanced technical charting, and institutional automated trading. Experience 21 timeframes, 38 built-in technical indicators, Level II Depth of Market (DOM), and full multi-currency backtesting.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#0f213e] p-3.5 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block">Timeframes</span>
                  <span className="text-base font-bold text-white mt-0.5 block">21 Charts</span>
                </div>
                <div className="bg-[#0f213e] p-3.5 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block">Execution</span>
                  <span className="text-base font-bold text-emerald-400 mt-0.5 block">&lt; 30ms</span>
                </div>
                <div className="bg-[#0f213e] p-3.5 rounded-xl border border-slate-700">
                  <span className="text-xs text-slate-400 block">EAs & Robots</span>
                  <span className="text-base font-bold text-cyan-400 mt-0.5 block">MQL5 Engine</span>
                </div>
              </div>

              {/* Download Buttons: Windows, Mac, Android, iOS */}
              <div className="pt-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Download MT5 for Your Device:
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Windows */}
                  <a
                    href="#download-windows"
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Windows PC</span>
                  </a>

                  {/* Mac */}
                  <a
                    href="#download-mac"
                    className="px-4 py-2.5 rounded-xl bg-[#0f213e] hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>macOS</span>
                  </a>

                  {/* Android */}
                  <a
                    href="#download-android"
                    className="px-4 py-2.5 rounded-xl bg-[#0f213e] hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-all"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Android App</span>
                  </a>

                  {/* iOS */}
                  <a
                    href="#download-ios"
                    className="px-4 py-2.5 rounded-xl bg-[#0f213e] hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition-all"
                  >
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>iOS iPhone</span>
                  </a>
                </div>

                {/* Web Terminal Link */}
                <div className="pt-2">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Web Terminal (Zero Installation Browser Trading)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Platform Mockup Representation */}
            <div className="lg:col-span-5 bg-[#0b172a] rounded-3xl p-6 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                    MT5
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">MetaTrader 5 Terminal</h4>
                    <p className="text-[11px] text-slate-400">P4 Global Market Prime Gateway</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  ONLINE
                </span>
              </div>

              {/* Graphical Candlestick chart simulation */}
              <div className="bg-[#070d18] rounded-2xl p-4 border border-slate-800/80 mb-4">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                  <span className="font-mono text-white font-bold">XAUUSD, H1</span>
                  <span className="text-emerald-400 font-mono font-bold">$2,684.50 ▲ +1.42%</span>
                </div>

                <div className="h-40 w-full flex items-end justify-between px-2 gap-1.5">
                  {[35, 45, 40, 58, 52, 70, 65, 80, 75, 92, 88, 110, 105, 125, 138].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className={`w-0.5 ${i % 4 === 0 ? 'bg-rose-500' : 'bg-emerald-400'}`} style={{ height: `${val * 0.7}px` }}></div>
                      <div className={`w-2 rounded-xs ${i % 4 === 0 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ height: `${val * 0.55}px` }}></div>
                      <div className={`w-0.5 ${i % 4 === 0 ? 'bg-rose-500' : 'bg-emerald-400'}`} style={{ height: `${val * 0.3}px` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800 text-xs text-slate-300 text-center">
                One-Click Trading • Automated Algorithmic Strategy Tester • Real-Time Depth of Market
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: EDUCATION
          3 cards: Trading Guides, Video Tutorials, Glossary
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Knowledge Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Learn & Improve Your Trading Skills
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Free comprehensive educational resources tailored for beginners and seasoned market operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Trading Guides */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Trading Guides</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Step-by-step written tutorials on forex mechanics, candlestick patterns, support/resistance, position sizing, and risk management strategies.
                </p>
              </div>

              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                <span>Explore Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Video Tutorials */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Video className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Video Tutorials</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Engaging visual walkthroughs detailing MT5 setup, technical indicator analysis, macroeconomic news trading, and automated EA deployment.
                </p>
              </div>

              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-800"
              >
                <span>Watch Tutorials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Glossary */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Forex Glossary</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  A complete A-to-Z dictionary defining critical financial terms such as Pips, Lot Size, Margin Level, Slippage, Swap, and Overnight Rollover.
                </p>
              </div>

              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                <span>Browse Glossary</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: PAYMENT METHODS
          Grid of payment icons (Visa, Mastercard, Skrill, Neteller, Crypto) with 0% fees
      ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Funding & Withdrawals
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Fast, Flexible & 0% Fee Payment Methods
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Deposit and withdraw securely with zero broker commissions and swift processing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="text-3xl mb-2">{method.icon}</div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{method.name}</h4>
                  <span className="text-[11px] text-slate-500 block">{method.type}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 w-full flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold text-emerald-600 px-2 py-0.5 rounded bg-emerald-50">
                    {method.fee}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {method.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 7: CTA SECTION
          "Ready to Start Trading?" with Open Account button
      ========================================================================= */}
      <section className="bg-gradient-to-r from-[#070d18] via-[#0b172a] to-[#0f274f] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THOUSANDS OF TRADERS WORLDWIDE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ready to Start Trading?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Open your live trading account in less than 3 minutes. Experience raw spreads from 0.0 pips, MT5 platform power, and secure segregated funds today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-2xl shadow-blue-600/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Open Account</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white border border-slate-600 hover:border-slate-300 hover:bg-slate-800/50 transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
