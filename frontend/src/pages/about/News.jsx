import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  Calendar,
  Tag,
  ArrowRight,
  Mail,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Globe,
  Bell,
  Clock,
  Send
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const categories = ['All', 'Company News', 'Market Updates', 'Promotions', 'Education'];

  const featuredNews = {
    title: 'P4 Global Market Expands Institutional Infrastructure with Equinix London TY3 & NY4 Datacenters',
    date: 'October 10, 2026',
    category: 'Company News',
    readTime: '4 min read',
    excerpt: 'To further reduce trade execution latency and accommodate surging trading volumes across Europe and Asia, P4 Global Market has deployed dedicated ultra-low latency optical routing hubs across Equinix data facilities.',
    highlight: 'Latency reduced to sub-25ms for 99.4% of executed orders.'
  };

  const newsCards = [
    {
      title: 'P4 Global Market Announces Launch of MT5 Dynamic Leverage Accounts',
      date: 'October 08, 2026',
      category: 'Company News',
      readTime: '3 min read',
      excerpt: 'Traders can now utilize flexible leverage up to 1:500 that dynamically adjusts to position sizing, maximizing capital efficiency while managing risk.'
    },
    {
      title: 'Global Forex Market Outlook: US Dollar Consolidates Ahead of Fed Rate Decision',
      date: 'October 06, 2026',
      category: 'Market Updates',
      readTime: '5 min read',
      excerpt: 'Analysis of key currency pairs EUR/USD, GBP/USD, and USD/JPY as market participants digest global inflation metrics and central bank speeches.'
    },
    {
      title: 'Exclusive Autumn Deposit Campaign: Claim Up to 50% Credit Bonus',
      date: 'October 04, 2026',
      category: 'Promotions',
      readTime: '2 min read',
      excerpt: 'Boost your trading capital this season with our tiered credit bonus program. Earn additional margin cushions up to $10,000 on qualifying deposits.'
    },
    {
      title: 'Mastering Risk Management: How to Calculate Position Size and Lot Value',
      date: 'September 28, 2026',
      category: 'Education',
      readTime: '6 min read',
      excerpt: 'Essential educational guide for novice and intermediate traders on calculating margin requirements, stop-loss ratios, and portfolio drawdowns.'
    },
    {
      title: 'Gold (XAU/USD) Climbs to Multi-Month Highs Amid Geopolitical Hedging Demand',
      date: 'September 25, 2026',
      category: 'Market Updates',
      readTime: '4 min read',
      excerpt: 'Precious metals experience heavy institutional inflows as spot gold tests key resistance levels. Key technical levels to watch for commodity traders.'
    },
    {
      title: 'P4 Global Market Awarded "Best ECN Broker 2026" at Global Forex Expo',
      date: 'September 20, 2026',
      category: 'Company News',
      readTime: '3 min read',
      excerpt: 'Recognized for pioneering raw spreads from 0.0 pips, institutional-grade execution speeds, and excellence in round-the-clock multilingual customer support.'
    },
    {
      title: 'Refer a Friend Program Upgrade: Earn $50 Cash Plus Escalating Milestone Bonuses',
      date: 'September 15, 2026',
      category: 'Promotions',
      readTime: '3 min read',
      excerpt: 'Introduce fellow traders to P4 Global Market and unlock enhanced milestone payouts up to $1,000 in direct, withdrawable cash rewards.'
    },
    {
      title: 'Understanding Liquidity Providers: Why ECN Execution Outperforms Market Making',
      date: 'September 10, 2026',
      category: 'Education',
      readTime: '5 min read',
      excerpt: 'A deep dive into interbank liquidity pools, market depth (Level 2 data), and why zero dealing desk execution protects traders against conflicts of interest.'
    },
    {
      title: 'Cryptocurrency CFDs: Trading Bitcoin & Ethereum Around the Clock with Tight Spreads',
      date: 'September 05, 2026',
      category: 'Market Updates',
      readTime: '4 min read',
      excerpt: 'Explore weekend crypto trading opportunities with 1:20 leverage and institutional pricing on leading digital asset CFD instruments.'
    }
  ];

  const filteredNews = selectedCategory === 'All'
    ? newsCards
    : newsCards.filter((item) => item.category === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscriberEmail.trim()) {
      setEmailSubscribed(true);
      setSubscriberEmail('');
      setTimeout(() => setEmailSubscribed(false), 5000);
    }
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="PRESS & UPDATES"
        title="NEWS"
        subtitle="Latest updates from P4 Global Market"
        ctaText="SUBSCRIBE TO UPDATES"
        ctaLink="#newsletter"
        secondaryCtaText="ALL PROMOTIONS"
        secondaryCtaLink="/promotions/all-promotions"
      />

      {/* 2. FEATURED NEWS (Large Highlighted Card) */}
      <ContentSection heading="Featured Story">
        <div className="bg-gradient-to-br from-[#0a1929] via-[#0d223a] to-[#071321] rounded-3xl p-8 sm:p-12 text-white border border-blue-900/50 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#00C853]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#00C853] text-black font-bold uppercase tracking-wider">
                {featuredNews.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {featuredNews.date}
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {featuredNews.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {featuredNews.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {featuredNews.excerpt}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>{featuredNews.highlight}</span>
            </div>

            <div className="pt-2">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Read Full Press Release</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3 & 4. FILTER BY CATEGORY & NEWS GRID */}
      <ContentSection
        bg="bg-slate-50"
        heading="All Company & Market News"
        subtitle="Filter by category to explore corporate announcements, technical analysis, and educational updates."
      >
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#00C853]/15 group-hover:text-emerald-800 transition-colors">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-medium">{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{item.readTime}</span>
                <Link
                  to="/register"
                  className="font-bold text-slate-900 group-hover:text-[#00C853] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. NEWSLETTER SIGNUP */}
      <ContentSection id="newsletter" heading="Stay Informed">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#00C853]/15 text-[#00C853] flex items-center justify-center mx-auto">
            <Bell className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Subscribe to P4 Market Intelligence
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Receive weekly macroeconomic insights, major news alerts, and exclusive promotional campaigns directly to your inbox.
            </p>
          </div>

          {emailSubscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[#00C853] text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you! You are now subscribed to our news digest.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C853]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-500">
            Zero spam. Unsubscribe with one click at any time.
          </p>
        </div>
      </ContentSection>

      {/* 6. CTA */}
      <CTASection
        heading="Start Trading with an Award-Winning Broker"
        subtitle="Open your account today and gain access to institutional spreads, fast execution, and daily market updates."
        primaryBtnText="OPEN ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
