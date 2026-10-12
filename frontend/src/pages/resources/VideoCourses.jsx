import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import {
  Video,
  Play,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  Users,
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  GraduationCap
} from 'lucide-react';

export default function VideoCourses() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const courseCategories = [
    {
      icon: GraduationCap,
      title: 'Beginner Course',
      description: 'Step-by-step video tutorials covering foundational concepts, order placement, pip math, and MT5 workspace setup.',
      highlight: '6 Modules • 18 Videos'
    },
    {
      icon: BarChart3,
      title: 'Technical Analysis',
      description: 'Master candlestick price action, support and resistance zones, trendlines, RSI momentum, and Fibonacci levels.',
      highlight: '8 Modules • 24 Videos'
    },
    {
      icon: TrendingUp,
      title: 'Fundamental Analysis',
      description: 'Learn how to interpret interest rate decisions, inflation reports, non-farm payrolls, and central bank speeches.',
      highlight: '5 Modules • 15 Videos'
    },
    {
      icon: ShieldCheck,
      title: 'Risk Management',
      description: 'Capital preservation strategies, maximum drawdown management, position sizing equations, and trading psychology.',
      highlight: '4 Modules • 12 Videos'
    }
  ];

  const videoGrid = [
    {
      id: 1,
      title: 'How to Set Up Your First MT5 Chart Like a Pro Trader',
      duration: '18:42',
      level: 'Beginner',
      rating: '4.9 ★',
      category: 'Platform Mastery',
      thumbnailBg: 'from-blue-900 to-slate-900',
      description: 'A complete walk-through of the MetaTrader 5 interface, setting up clean templates, adding technical indicators, and customizing one-click trading.'
    },
    {
      id: 2,
      title: 'Mastering Support & Resistance Key Reversal Zones',
      duration: '24:15',
      level: 'Intermediate',
      rating: '5.0 ★',
      category: 'Technical Analysis',
      thumbnailBg: 'from-slate-900 to-slate-800',
      description: 'Learn how to draw institutional supply and demand zones across multiple timeframes and identify true breakout confirmations.'
    },
    {
      id: 3,
      title: 'Understanding Candlestick Confirmation Patterns',
      duration: '21:30',
      level: 'Intermediate',
      rating: '4.8 ★',
      category: 'Price Action',
      thumbnailBg: 'from-emerald-950 to-slate-900',
      description: 'Decode pin bars, engulfing candles, and rejection wicks at major historical levels to improve entry timing and reduce stop-loss distance.'
    },
    {
      id: 4,
      title: 'Trading the US Non-Farm Payrolls (NFP) Live Breakdown',
      duration: '32:10',
      level: 'Advanced',
      rating: '4.9 ★',
      category: 'Macro Events',
      thumbnailBg: 'from-amber-950 to-slate-900',
      description: 'Watch a senior analyst break down pre-release consensus, manage volatility spikes, and execute trades safely during high-impact news.'
    },
    {
      id: 5,
      title: 'Risk Management Math: Why 90% of Traders Fail',
      duration: '27:05',
      level: 'All Levels',
      rating: '5.0 ★',
      category: 'Capital Protection',
      thumbnailBg: 'from-purple-950 to-slate-900',
      description: 'The mathematical reality of compounding, calculating risk-to-reward ratios, and enforcing the 1% risk rule to guarantee survival.'
    },
    {
      id: 6,
      title: 'How to Trade Gold (XAU/USD) Intraday & Swing Setups',
      duration: '29:50',
      level: 'Advanced',
      rating: '4.9 ★',
      category: 'Commodities',
      thumbnailBg: 'from-cyan-950 to-slate-900',
      description: 'Discover the unique volatility characteristics of Gold, key correlation with the US Dollar index, and high-probability Asian & London session setups.'
    }
  ];

  const instructors = [
    {
      name: 'David Sterling',
      role: 'Chief Market Strategist',
      experience: '18+ Years Institutional FX',
      credentials: 'Ex-Tier 1 Bank Prop Desk',
      avatarBg: 'bg-blue-600',
      initials: 'DS',
      bio: 'David specializes in macroeconomic analysis, central bank forward guidance, and institutional order flow strategies across G10 currencies.'
    },
    {
      name: 'Elena Rostova',
      role: 'Senior Technical Analyst',
      experience: '12+ Years Technical Trading',
      credentials: 'Chartered Market Technician (CMT)',
      avatarBg: 'bg-emerald-600',
      initials: 'ER',
      bio: 'Elena is a recognized authority on multi-timeframe price action, Fibonacci confluence models, and commodity swing strategies.'
    },
    {
      name: 'Marcus Vance',
      role: 'Quantitative Lead & EA Architect',
      experience: '10+ Years Algorithmic Trading',
      credentials: 'MQL5 Master Developer',
      avatarBg: 'bg-purple-600',
      initials: 'MV',
      bio: 'Marcus engineers robust automated trading systems, backtesting algorithms, and low-latency execution strategies for retail and institutional traders.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • VIDEO ACADEMY"
        title="VIDEO COURSES"
        subtitle="Learn trading through video tutorials"
        ctaText="EXPLORE COURSES"
        ctaLink="#courses-grid"
        secondaryCtaText="MEET INSTRUCTORS"
        secondaryCtaLink="#instructors"
      />

      {/* 2. COURSE CATEGORIES (4 cards) */}
      <ContentSection
        heading="Structured Video Curriculums"
        subtitle="Explore specialized video tracks organized from foundational basics to advanced institutional trading."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCategories.map((cat, idx) => (
            <BenefitCard
              key={idx}
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
              highlight={cat.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 3. VIDEO GRID (6 Video Cards) */}
      <ContentSection
        id="courses-grid"
        bg="bg-slate-50"
        heading="Featured Video Masterclasses"
        subtitle="Click any tutorial below to preview the masterclass video player."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoGrid.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Video Thumbnail with Play Button */}
                <div
                  onClick={() => setActiveVideoModal(video)}
                  className={`h-48 bg-gradient-to-br ${video.thumbnailBg} p-5 flex flex-col justify-between text-white relative cursor-pointer overflow-hidden`}
                >
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded bg-black/60 text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                      {video.level}
                    </span>
                    <span className="text-amber-400 text-xs font-bold">{video.rating}</span>
                  </div>

                  {/* Play Button Icon */}
                  <div className="flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-[#00C853] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-black" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-300 z-10">
                    <span className="font-semibold text-slate-200">{video.category}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {video.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(video)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video (Free)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Video Modal Simulation */}
      {activeVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a1929] border border-slate-700 rounded-3xl max-w-2xl w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black uppercase text-[#00C853] tracking-wider">
                  {activeVideoModal.category} • {activeVideoModal.duration}
                </span>
                <h3 className="text-xl font-bold mt-1">{activeVideoModal.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-white p-1 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Simulated Player Viewport */}
            <div className="h-64 sm:h-80 bg-slate-950 rounded-2xl flex flex-col items-center justify-center border border-slate-800 text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#00C853] text-black flex items-center justify-center shadow-lg animate-pulse">
                <Play className="w-7 h-7 ml-0.5 fill-black" />
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                Streaming HD video tutorial with step-by-step interactive charts and analyst voiceover commentary.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white cursor-pointer"
              >
                Close Preview
              </button>
              <Link
                to="/register?demo=true"
                className="px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-xs uppercase tracking-wider"
              >
                Practice on Demo
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 4. INSTRUCTOR SECTION */}
      <ContentSection
        id="instructors"
        heading="Learn from Market Veterans"
        subtitle="Our educators bring decades of combined experience from institutional dealing desks, prop firms, and hedge funds."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((ins, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${ins.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md`}>
                  {ins.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg leading-tight">{ins.name}</h4>
                  <div className="text-xs text-blue-600 font-bold">{ins.role}</div>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-slate-500 font-medium">Experience: <strong className="text-slate-800">{ins.experience}</strong></div>
                <div className="text-slate-500 font-medium">Background: <strong className="text-slate-800">{ins.credentials}</strong></div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {ins.bio}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. CTA */}
      <CTASection
        heading="Start Your Video Journey Today"
        subtitle="Watch video masterclasses at your own pace and test every strategy on a free demo trading account."
        primaryBtnText="START WATCHING FREE"
        primaryBtnLink="/register?demo=true"
        secondaryBtnText="OPEN LIVE ACCOUNT"
        secondaryBtnLink="/register"
      />
    </div>
  );
}
