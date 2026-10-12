import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  Headphones,
  Play,
  Pause,
  Clock,
  Radio,
  Share2,
  Calendar,
  Volume2,
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Podcasts() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEpisode, setActiveEpisode] = useState(0);

  const episodes = [
    {
      id: 0,
      number: 'EP. 48',
      title: 'Navigating Fed Rate Pivot, Dollar Dominance & Currency Trajectories',
      host: 'David Sterling & Elena Rostova',
      duration: '42:18',
      date: 'October 2026',
      summary: 'In this episode, we unpack the macroeconomic drivers behind US dollar resilience, the European Central Bank\'s easing cycle, and tactical positioning for multi-week swing traders.',
      tags: ['Macro', 'Forex', 'FOMC']
    },
    {
      id: 1,
      number: 'EP. 47',
      title: 'Gold at Record Highs: Fundamental Safe-Haven or Speculative Bubble?',
      host: 'Elena Rostova & Special Guest',
      duration: '38:45',
      date: 'September 2026',
      summary: 'Analyzing central bank gold buying reserves, institutional ETF demand, and key technical levels to watch on XAU/USD.',
      tags: ['Gold', 'Commodities']
    },
    {
      id: 2,
      number: 'EP. 46',
      title: 'Mastering Risk Math & Position Sizing with a Prop Firm Veteran',
      host: 'David Sterling with Kyle Anderson',
      duration: '45:10',
      date: 'September 2026',
      summary: 'Why risk-to-reward metrics trump high win-rates, how to calculate maximum drawdown buffers, and avoiding blowups during volatile sessions.',
      tags: ['Risk Management', 'Prop Trading']
    },
    {
      id: 3,
      number: 'EP. 45',
      title: 'Global Energy Markets: OPEC+ Quotas and Brent Crude Volatility',
      host: 'Elena Rostova & Energy Desk',
      duration: '34:20',
      date: 'August 2026',
      summary: 'A deep dive into geopolitical tensions, tanker freight rates, and how commodity traders capitalize on intraday oil swings.',
      tags: ['Oil', 'Commodities']
    },
    {
      id: 4,
      number: 'EP. 44',
      title: 'AI Boom, Tech Equities & S&P 500 Index Rebalancing',
      host: 'David Sterling',
      duration: '41:15',
      date: 'August 2026',
      summary: 'Understanding valuation multiples in big tech, hedging equity exposure with index CFDs, and pre-earnings session strategies.',
      tags: ['Equities', 'Indices']
    },
    {
      id: 5,
      number: 'EP. 43',
      title: 'Trading Psychology: Conquering Revenge Trading and Emotional FOMO',
      host: 'David Sterling & Dr. Rebecca Shaw',
      duration: '52:30',
      date: 'July 2026',
      summary: 'Clinical psychologist Dr. Rebecca Shaw explains why cognitive biases sabotage trading accounts and how to build mental discipline.',
      tags: ['Psychology', 'Mindset']
    }
  ];

  const currentEp = episodes[activeEpisode];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • AUDIO INSIGHTS"
        title="PODCASTS"
        subtitle="Listen to expert trading insights"
        ctaText="LISTEN TO LATEST"
        ctaLink="#featured-player"
        secondaryCtaText="SUBSCRIBE ON APPS"
        secondaryCtaLink="#subscribe"
      />

      {/* 2. FEATURED EPISODE (Large Player UI) */}
      <ContentSection
        id="featured-player"
        heading="Featured Episode"
        subtitle="Tune in to the latest weekly discussion with P4 market strategists and special industry guests."
      >
        <div className="bg-gradient-to-r from-[#0a1929] via-[#0f2442] to-[#071322] text-white rounded-3xl p-7 sm:p-12 shadow-2xl border border-slate-700 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#00C853] text-black text-xs font-black uppercase tracking-wider">
                  {currentEp.number}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {currentEp.date}
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {currentEp.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentEp.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {currentEp.summary}
              </p>

              <div className="text-xs text-slate-400 font-medium">
                Hosted by: <strong className="text-slate-200">{currentEp.host}</strong>
              </div>

              {/* Audio Controls Simulation */}
              <div className="pt-2 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-[#00C853] hover:bg-[#00e660] text-black flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
                  </button>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>{isPlaying ? '08:24' : '00:00'}</span>
                      <span>{currentEp.duration}</span>
                    </div>
                    {/* Scrubber bar */}
                    <div className="w-full bg-slate-700/80 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#00C853] h-full rounded-full transition-all duration-300"
                        style={{ width: isPlaying ? '35%' : '5%' }}
                      ></div>
                    </div>
                  </div>
                  <Volume2 className="w-5 h-5 text-slate-400 hidden sm:block" />
                </div>
              </div>
            </div>

            {/* Right Visual Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-white/5 rounded-3xl border border-white/10 text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-[#00C853]/20 border-2 border-[#00C853]/40 flex items-center justify-center text-[#00C853]">
                <Radio className="w-12 h-12" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-lg">P4 Alpha Podcast</h4>
                <p className="text-xs text-slate-400">Weekly Audio Insights for Serious Traders</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. EPISODE LIST (6 Episodes) */}
      <ContentSection
        bg="bg-slate-50"
        heading="All Episodes Archive"
        subtitle="Select any episode to load it directly into the player above."
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          {episodes.map((ep, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveEpisode(idx);
                setIsPlaying(true);
              }}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                activeEpisode === idx
                  ? 'bg-slate-900 text-white border-slate-800 shadow-lg'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    activeEpisode === idx
                      ? 'bg-[#00C853] text-black font-black'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {activeEpisode === idx && isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#00C853] uppercase">{ep.number}</span>
                    <span className="text-xs text-slate-400">• {ep.date}</span>
                  </div>
                  <h4 className="font-bold text-base leading-snug">{ep.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{ep.summary}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center text-xs">
                <span className="font-mono font-semibold text-slate-400">{ep.duration}</span>
                <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] uppercase ${
                  activeEpisode === idx ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {activeEpisode === idx ? 'Loaded' : 'Play'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 4. SUBSCRIBE LINKS */}
      <ContentSection
        id="subscribe"
        heading="Subscribe on Your Favorite Platform"
        subtitle="Never miss an episode. Follow P4 Alpha Podcast on major audio streaming networks."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Spotify', subtitle: 'Follow & Rate 5★', color: 'hover:border-emerald-500' },
            { name: 'Apple Podcasts', subtitle: 'Listen on iOS & Mac', color: 'hover:border-purple-500' },
            { name: 'Google Podcasts', subtitle: 'Android & Web Access', color: 'hover:border-blue-500' },
            { name: 'YouTube Music', subtitle: 'Watch Full Studio Video', color: 'hover:border-rose-500' }
          ].map((app, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all text-center space-y-3 cursor-pointer group ${app.color} hover:shadow-md`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#00C853]/15 text-slate-800 group-hover:text-[#00C853] flex items-center justify-center mx-auto transition-colors">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">{app.name}</h4>
              <p className="text-xs text-slate-500">{app.subtitle}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-[#00C853]">
                  Subscribe <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. CTA */}
      <CTASection
        heading="Apply Market Insights with Low-Cost Trading"
        subtitle="Open your account today to trade Forex, Gold, and Indices with 0.0 pip spreads and fast execution."
        primaryBtnText="OPEN LIVE ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
