import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  BookOpen,
  Download,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function TradingEbooks() {
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const ebooks = [
    {
      id: 1,
      title: 'Forex Basics: The Ultimate Starter Handbook',
      pages: '58 Pages',
      level: 'Beginner',
      rating: '4.9 ★',
      accentColor: 'from-blue-900 to-indigo-950',
      description: 'Master foreign exchange fundamentals, base vs quote dynamics, pip values, leverage calculations, and order types from scratch.',
      topics: ['Currency Pair Mechanics', 'Spreads, Lots & Margin Math', 'Choosing MT4 vs MT5 Platforms', 'Executing Your First Trade']
    },
    {
      id: 2,
      title: 'Technical Analysis & Candlestick Blueprint',
      pages: '84 Pages',
      level: 'Intermediate',
      rating: '5.0 ★',
      accentColor: 'from-slate-900 to-slate-800',
      description: 'A visual manual decoding multi-timeframe support/resistance, trendline breakouts, RSI divergences, and 16 high-probability candlestick patterns.',
      topics: ['Key S/R Reversal Zones', 'Moving Averages & Oscillators', 'Fibonacci Confluence Trading', 'Chart Pattern Recognition']
    },
    {
      id: 3,
      title: 'Institutional Risk Management & Capital Preservation',
      pages: '46 Pages',
      level: 'Essential All Levels',
      rating: '4.9 ★',
      accentColor: 'from-emerald-950 to-slate-900',
      description: 'Learn the exact position sizing formulas, max drawdown rules, and risk-to-reward ratios utilized by Tier-1 hedge funds and prop desks.',
      topics: ['The 1% Capital Rule', 'Calculating Risk vs Reward', 'Managing Consecutive Losses', 'Dynamic Trailing Stop Strategies']
    },
    {
      id: 4,
      title: 'Trading Psychology: Conquering Fear and Greed',
      pages: '62 Pages',
      level: 'Psychology',
      rating: '4.8 ★',
      accentColor: 'from-purple-950 to-slate-900',
      description: 'Overcome cognitive trading biases, eliminate revenge trading impulses, and develop unshakeable emotional discipline at the charts.',
      topics: ['Eliminating FOMO and Panic', 'Overcoming The Pain of Loss', 'Designing a Professional Journal', 'Rules-Based Execution Habits']
    },
    {
      id: 5,
      title: 'Crypto Trading: Navigating Digital Asset Markets',
      pages: '70 Pages',
      level: 'Intermediate',
      rating: '4.7 ★',
      accentColor: 'from-amber-950 to-slate-900',
      description: 'Understand Bitcoin market cycles, crypto derivatives, spot vs CFD trading, liquidity pools, and volatility breakout systems.',
      topics: ['Halving Cycles & Market Phases', 'Trading Bitcoin & Altcoin CFDs', 'On-Chain Metrics for Traders', 'Managing 24/7 Volatility']
    },
    {
      id: 6,
      title: 'Advanced Strategies: Order Flow, Liquidity & Algorithmic EAs',
      pages: '96 Pages',
      level: 'Advanced',
      rating: '5.0 ★',
      accentColor: 'from-cyan-950 to-slate-900',
      description: 'Discover institutional smart money concepts, liquidity sweeps, fair value gaps, and automated Expert Advisor deployment on MetaTrader 5.',
      topics: ['Order Flow & Volume Imbalances', 'Institutional Liquidity Sweeps', 'Backtesting Automated EAs', 'Low-Latency VPS Optimization']
    }
  ];

  const handleDownload = (ebookTitle) => {
    setDownloadSuccess(ebookTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • COMPREHENSIVE GUIDES"
        title="TRADING EBOOKS"
        subtitle="Free downloadable guides for traders"
        ctaText="BROWSE EBOOKS"
        ctaLink="#ebooks-grid"
        secondaryCtaText="LEARNING ACADEMY"
        secondaryCtaLink="/tools/education"
      />

      {/* Download Alert Banner */}
      {downloadSuccess && (
        <div className="bg-[#00C853] text-black font-bold py-3 px-4 text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>"{downloadSuccess}" download initiated! Check your downloads folder.</span>
        </div>
      )}

      {/* 2. EBOOK GRID (6 Cards) */}
      <ContentSection
        id="ebooks-grid"
        heading="Free Downloadable Trading Guides"
        subtitle="Comprehensive PDF publications packed with practical charts, step-by-step frameworks, and risk strategies."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Book Cover Header Simulation */}
                <div className={`h-48 bg-gradient-to-br ${book.accentColor} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded bg-black/50 text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                      {book.level}
                    </span>
                    <span className="text-amber-400 text-xs font-bold">{book.rating}</span>
                  </div>

                  <div className="z-10 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#00C853] tracking-widest">
                      P4 TRADING SERIES
                    </span>
                    <h4 className="text-lg font-black leading-tight text-white line-clamp-2">
                      {book.title}
                    </h4>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-300 z-10 pt-2 border-t border-white/10">
                    <span>PDF Format</span>
                    <span>{book.pages}</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {book.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleDownload(book.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 3. CTA */}
      <CTASection
        heading="Ready to Put Knowledge into Practice?"
        subtitle="Open your account today and test new strategies risk-free on a MetaTrader Demo Account with virtual funds."
        primaryBtnText="START TRADING NOW"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
