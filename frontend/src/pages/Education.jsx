import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Video, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Lightbulb,
  BarChart2
} from 'lucide-react';

export default function Education() {
  const articles = [
    {
      title: 'Forex Fundamentals: How Currency Pairs Move',
      desc: 'Understand base and quote currencies, interest rate differentials, inflation data and central bank policy.',
      level: 'Beginner',
      readTime: '6 min read'
    },
    {
      title: 'Risk Management: Position Sizing & Stop Losses',
      desc: 'Learn how professional traders preserve capital by calculating risk-to-reward ratios and maximum drawdowns.',
      level: 'Intermediate',
      readTime: '8 min read'
    },
    {
      title: 'Mastering Support, Resistance & Key Fibonacci Levels',
      desc: 'A comprehensive visual blueprint to identify high-probability reversal and continuation zones in price action.',
      level: 'Intermediate',
      readTime: '10 min read'
    },
    {
      title: 'Algorithmic Trading & Automated Expert Advisors (EAs)',
      desc: 'How to build, backtest, and run automated systems on MetaTrader 4 and 5 with low latency VPS setup.',
      level: 'Advanced',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="pt-20 sm:pt-22 bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-[#0b172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              P4 Trading Academy
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              Master the Financial Markets
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Accelerate your trading journey with structured guides, market analysis, webinars, and institutional risk management principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Educational Pillars */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Beginner to Pro Guides</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Step-by-step curriculum covering everything from pip values and margin requirements to complex multi-timeframe analysis.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Live Weekly Webinars</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Join senior market analysts as they break down upcoming high-impact economic releases (NFP, FOMC, CPI) and live setups.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Economic Calendar & News</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time macroeconomic data tracker detailing volatility forecasts, historical consensus, and market impact indicators.
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Featured Trading Lessons</h2>
            <span className="text-xs font-semibold text-blue-600">Updated Daily</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((art, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                    {art.level}
                  </span>
                  <span>{art.readTime}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{art.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{art.desc}</p>
                <a href="#read" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
