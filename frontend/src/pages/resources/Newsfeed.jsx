import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  Activity,
  Clock,
  Filter,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Zap,
  Globe2,
  DollarSign,
  BarChart2
} from 'lucide-react';

export default function Newsfeed() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lastRefreshed, setLastRefreshed] = useState('Just now');

  const newsFeedItems = [
    {
      id: 1,
      category: 'FOREX',
      timeAgo: '2m ago',
      headline: 'EUR/USD breaks 1.0835 resistance as Eurozone industrial orders exceed forecasts.',
      sentiment: 'BULLISH',
      source: 'Institutional Wire'
    },
    {
      id: 2,
      category: 'COMMODITIES',
      timeAgo: '9m ago',
      headline: 'Spot Gold (XAU/USD) ticks up to $2,646.80; open interest hits 3-week peak.',
      sentiment: 'BULLISH',
      source: 'Precious Metals Desk'
    },
    {
      id: 3,
      category: 'STOCKS',
      timeAgo: '16m ago',
      headline: 'Nasdaq 100 futures add 60 points following Asian tech supply chain rally.',
      sentiment: 'BULLISH',
      source: 'Global Equities'
    },
    {
      id: 4,
      category: 'FOREX',
      timeAgo: '24m ago',
      headline: 'GBP/USD retreats towards 1.2910 after UK manufacturing output numbers soften.',
      sentiment: 'BEARISH',
      source: 'London Macro'
    },
    {
      id: 5,
      category: 'CRYPTO',
      timeAgo: '33m ago',
      headline: 'Bitcoin tests $67,400 with $85M liquidated on short positions across derivatives.',
      sentiment: 'BULLISH',
      source: 'Crypto Intelligence'
    },
    {
      id: 6,
      category: 'COMMODITIES',
      timeAgo: '42m ago',
      headline: 'WTI Crude dips to $70.20 after weekly inventory data prints higher stockpiles.',
      sentiment: 'BEARISH',
      source: 'Energy Alert'
    },
    {
      id: 7,
      category: 'FOREX',
      timeAgo: '51m ago',
      headline: 'USD/JPY hovers at 152.40; currency officials in Tokyo pledge close surveillance.',
      sentiment: 'NEUTRAL',
      source: 'Asia Forex'
    },
    {
      id: 8,
      category: 'STOCKS',
      timeAgo: '1h ago',
      headline: 'DAX 40 index climbs 0.4% supported by automotive and industrial manufacturing gains.',
      sentiment: 'BULLISH',
      source: 'Frankfurt Desk'
    }
  ];

  const sentimentData = [
    { asset: 'EUR/USD', bullish: 64, bearish: 36, trend: 'Bullish Bias' },
    { asset: 'XAU/USD (Gold)', bullish: 72, bearish: 28, trend: 'Strong Bullish' },
    { asset: 'BTC/USD', bullish: 58, bearish: 42, trend: 'Moderate Bullish' },
    { asset: 'S&P 500', bullish: 51, bearish: 49, trend: 'Balanced / Neutral' }
  ];

  const filteredFeed = newsFeedItems.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • LIVE TERMINAL"
        title="NEWSFEED"
        subtitle="Real-time market updates"
        ctaText="EXPLORE LIVE FEED"
        ctaLink="#live-feed"
        secondaryCtaText="MARKET SENTIMENT"
        secondaryCtaLink="#sentiment"
      />

      {/* 4. MARKET SENTIMENT WIDGET */}
      <ContentSection
        id="sentiment"
        heading="Live Retail Market Sentiment"
        subtitle="Real-time positioning breakdown showing long (bullish) vs short (bearish) volume across key assets."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sentimentData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-900 text-base">{item.asset}</h4>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {item.trend}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#00C853]">{item.bullish}% Long</span>
                  <span className="text-rose-500">{item.bearish}% Short</span>
                </div>
                <div className="w-full bg-rose-100 h-2.5 rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#00C853] h-full transition-all duration-500"
                    style={{ width: `${item.bullish}%` }}
                  ></div>
                  <div
                    className="bg-rose-500 h-full transition-all duration-500"
                    style={{ width: `${item.bearish}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 2. LIVE NEWS FEED & 3. CATEGORY FILTER */}
      <ContentSection
        id="live-feed"
        bg="bg-slate-50"
        heading="Live Streaming News Feed"
        subtitle="Continuous millisecond stream of global market alerts, central bank comments, and price breakouts."
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {['ALL', 'FOREX', 'COMMODITIES', 'STOCKS', 'CRYPTO'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0a1929] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
              <span>Live Terminal Feed</span>
            </div>
          </div>

          {/* Feed Items List */}
          <div className="space-y-3">
            {filteredFeed.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Activity className="w-5 h-5 text-slate-700" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-extrabold text-blue-600 uppercase tracking-wider">{item.category}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {item.timeAgo}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span
                      className={`font-black text-[10px] px-2 py-0.5 rounded-full ${
                        item.sentiment === 'BULLISH'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.sentiment === 'BEARISH'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {item.sentiment}
                    </span>
                  </div>

                  <p className="font-semibold text-slate-900 text-sm leading-snug">
                    {item.headline}
                  </p>

                  <div className="text-[11px] text-slate-400">
                    Source: {item.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* 5. CTA */}
      <CTASection
        heading="Never Miss a Market Move"
        subtitle="Open your P4 account today and trade on real-time news with instant order execution and 0.0 pip raw spreads."
        primaryBtnText="OPEN LIVE ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
