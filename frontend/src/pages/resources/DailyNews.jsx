import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Tag,
  Mail,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';

export default function DailyNews() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const featuredStory = {
    category: 'FOREX & CENTRAL BANKS',
    title: 'Fed Signals Measured Rate Cut Path as Dollar Index Consolidates Near 104.00',
    date: 'October 10, 2026 • 09:15 GMT',
    readTime: '4 min read',
    author: 'David Sterling, Chief Market Strategist',
    excerpt: 'Federal Reserve officials reiterated a data-dependent stance following stronger-than-projected employment metrics. The US Dollar steadied against the Euro and Pound as bond yields held firm. Market participants now price in a 25 basis point cut with 88% probability at the forthcoming FOMC assembly.',
    impact: 'High Impact • Volatility Expected Across EUR/USD, GBP/USD, USD/JPY'
  };

  const newsItems = [
    {
      category: 'FOREX',
      title: 'EUR/USD Stabilizes Above 1.0820 Support Ahead of ECB Inflation Outlook',
      date: 'Today • 08:30 GMT',
      readTime: '3 min read',
      author: 'Market Desk',
      excerpt: 'The European single currency found buyers near the 200-day moving average as core Eurozone CPI prints within central bank projections.',
      bgGradient: 'from-blue-900 to-slate-900'
    },
    {
      category: 'COMMODITIES',
      title: 'Gold Holds Steady Near Record Highs as Safe-Haven Inflows Persist',
      date: 'Today • 07:45 GMT',
      readTime: '4 min read',
      author: 'Elena Rostova',
      excerpt: 'Spot Gold (XAU/USD) traded above $2,640 with technical buyers targeting higher liquidity zones amid geopolitical concerns in the Middle East.',
      bgGradient: 'from-amber-900 to-slate-900'
    },
    {
      category: 'STOCKS',
      title: 'S&P 500 and Nasdaq Futures Edge Higher Ahead of Big Tech Earnings Releases',
      date: 'Today • 06:10 GMT',
      readTime: '5 min read',
      author: 'Equity Team',
      excerpt: 'Wall Street index futures pointed to modest opening gains as semiconductor giants and AI hardware leaders prepare quarterly reports.',
      bgGradient: 'from-emerald-900 to-slate-900'
    },
    {
      category: 'CRYPTO',
      title: 'Bitcoin Consolidates Above $67,000 as Institutional ETF Inflows Rebound',
      date: 'Yesterday • 18:20 GMT',
      readTime: '3 min read',
      author: 'Crypto Analyst',
      excerpt: 'Spot Bitcoin ETF vehicles recorded over $450M in net inflows over the last 48 hours, absorbing sell-side pressure on major spot exchanges.',
      bgGradient: 'from-purple-900 to-slate-900'
    },
    {
      category: 'COMMODITIES',
      title: 'Brent Crude Oil hovers Near $74 as OPEC+ Reaffirms Production Quotas',
      date: 'Yesterday • 14:15 GMT',
      readTime: '4 min read',
      author: 'Energy Research',
      excerpt: 'Crude benchmarks fluctuated between modest gains and losses as demand revisions from the IEA met supply discipline in the Persian Gulf.',
      bgGradient: 'from-cyan-900 to-slate-900'
    },
    {
      category: 'FOREX',
      title: 'Bank of Japan Hints at Future Rate Normalization if Wage Gains Broaden',
      date: 'Yesterday • 11:30 GMT',
      readTime: '3 min read',
      author: 'Tokyo Desk',
      excerpt: 'USD/JPY experienced sharp intraday swings following comments from Governor Ueda regarding inflation expectations and monetary policy.',
      bgGradient: 'from-rose-900 to-slate-900'
    }
  ];

  const filteredNews = newsItems.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • MARKET INSIGHTS"
        title="DAILY NEWS"
        subtitle="Stay updated with the latest market news"
        ctaText="READ TODAY'S NEWS"
        ctaLink="#featured"
        secondaryCtaText="NEWSLETTER SIGNUP"
        secondaryCtaLink="#newsletter"
      />

      {/* 2. FEATURED NEWS (Large Card) */}
      <ContentSection
        id="featured"
        heading="Featured Market Headline"
        subtitle="Today's top macroeconomic development shaping global asset pricing and currency volatility."
      >
        <div className="bg-gradient-to-br from-[#0a1929] via-[#0f2744] to-[#071322] text-white rounded-3xl p-7 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#00C853] text-black text-xs font-black uppercase tracking-wider">
                {featuredStory.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {featuredStory.date}
              </span>
              <span className="text-xs text-slate-400">• {featuredStory.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white max-w-4xl">
              {featuredStory.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {featuredStory.excerpt}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-2xl flex items-center justify-between">
              <div className="text-xs text-slate-300">
                <span className="text-[#00C853] font-bold">Key Insight: </span>
                {featuredStory.impact}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span>By {featuredStory.author}</span>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 4. CATEGORIES FILTER & 3. NEWS GRID (6 cards) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Market News Feed"
        subtitle="Filter market coverage across global currencies, commodities, equities, and digital assets."
      >
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-500 uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {['ALL', 'FOREX', 'COMMODITIES', 'STOCKS', 'CRYPTO'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className={`h-36 bg-gradient-to-r ${item.bgGradient} p-4 flex flex-col justify-between text-white`}>
                  <span className="px-2.5 py-1 rounded-md bg-black/50 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm w-fit">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-center text-[10px] text-slate-300">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-500">{item.author}</span>
                <span className="font-bold text-[#00C853] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. NEWSLETTER SIGNUP */}
      <ContentSection
        id="newsletter"
        heading="Daily Market Wrap in Your Inbox"
        subtitle="Join over 45,000 traders receiving our concise morning market analysis before London and New York opens."
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0a1929] to-[#122e4d] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#00C853]/20 text-[#00C853] flex items-center justify-center mx-auto">
            <Mail className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Subscribe to P4 Morning Brief
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Get key support & resistance levels, high-impact calendar alerts, and actionable macroeconomic breakdowns delivered at 06:00 GMT every morning.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-[#00C853]/15 border border-[#00C853]/40 rounded-2xl p-4 text-[#00C853] font-bold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>You are subscribed! Check your inbox for today's morning brief.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 bg-white/10 border border-slate-600 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00C853]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shrink-0"
              >
                Subscribe Free
              </button>
            </form>
          )}

          <div className="text-[11px] text-slate-400">
            Zero spam. Unsubscribe anytime with one click.
          </div>
        </div>
      </ContentSection>

      {/* 6. CTA */}
      <CTASection
        heading="Trade the News with Institutional Execution"
        subtitle="React instantly to breaking market news with raw spreads from 0.0 pips and sub-30ms latency on MetaTrader 5."
        primaryBtnText="OPEN LIVE ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
