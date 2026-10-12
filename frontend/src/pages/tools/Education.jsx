import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  BookOpen,
  GraduationCap,
  Video,
  FileText,
  Calendar,
  Clock,
  Play,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function Education() {
  const [openFaq, setOpenFaq] = useState(null);

  const learningPaths = [
    {
      level: 'BEGINNER',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      title: 'Foundations & Basics',
      desc: 'Master foundational trading vocabulary, currency pairs, bid/ask spread mechanics, order types, and basic platform navigation.',
      modules: '8 Modules • 24 Lessons',
      topics: ['Forex Basics & Currency Pairs', 'How Spreads & Leverage Work', 'Introduction to MT4 & MT5', 'Executing Your First Trade'],
      ctaText: 'Start Beginner Track'
    },
    {
      level: 'INTERMEDIATE',
      badgeColor: 'bg-blue-100 text-blue-800',
      title: 'Technical & Chart Analysis',
      desc: 'Learn to read price charts like a professional trader using Japanese candlesticks, support/resistance, RSI, MACD, and chart patterns.',
      modules: '12 Modules • 36 Lessons',
      topics: ['Support & Resistance Reversals', 'Trendlines & Channel Breakouts', 'RSI, MACD & Moving Averages', 'Fibonacci Retracement Levels'],
      ctaText: 'Start Intermediate Track'
    },
    {
      level: 'ADVANCED',
      badgeColor: 'bg-purple-100 text-purple-800',
      title: 'Institutional Strategies & Risk',
      desc: 'Master professional trade planning, order flow liquidity concepts, position sizing math, drawdown control, and automated EA strategies.',
      modules: '10 Modules • 30 Lessons',
      topics: ['Liquidity Pools & Order Flow', 'Institutional Risk Management', 'Trading Psychology & Discipline', 'Algorithmic Trading & EA Setup'],
      ctaText: 'Start Advanced Track'
    }
  ];

  const videoCourses = [
    {
      title: 'Forex Trading Masterclass for Beginners',
      duration: '2h 45m',
      lessons: '8 Lessons',
      level: 'Beginner',
      rating: '4.9',
      imageBg: 'from-blue-900 to-indigo-950'
    },
    {
      title: 'Technical Analysis & Candlestick Patterns',
      duration: '4h 10m',
      lessons: '12 Lessons',
      level: 'Intermediate',
      rating: '4.8',
      imageBg: 'from-slate-900 to-slate-800'
    },
    {
      title: 'Mastering Risk Management & Drawdown Control',
      duration: '1h 50m',
      lessons: '6 Lessons',
      level: 'All Levels',
      rating: '5.0',
      imageBg: 'from-emerald-950 to-slate-900'
    },
    {
      title: 'Price Action & Supply-Demand Trading',
      duration: '3h 30m',
      lessons: '10 Lessons',
      level: 'Advanced',
      rating: '4.9',
      imageBg: 'from-amber-950 to-slate-900'
    },
    {
      title: 'Crypto & Digital Assets CFD Trading',
      duration: '2h 15m',
      lessons: '7 Lessons',
      level: 'Intermediate',
      rating: '4.7',
      imageBg: 'from-purple-950 to-slate-900'
    },
    {
      title: 'MetaTrader 5 Automated Expert Advisor (EA) Guide',
      duration: '3h 40m',
      lessons: '9 Lessons',
      level: 'Advanced',
      rating: '4.9',
      imageBg: 'from-cyan-950 to-slate-900'
    }
  ];

  const articles = [
    {
      category: 'FOREX FUNDAMENTALS',
      title: 'Understanding Currency Pairs & Bid-Ask Spread Dynamics',
      readTime: '6 min read',
      date: 'Updated Weekly',
      excerpt: 'Learn how base and quote currencies operate and how raw spreads impact your net trading profitability.'
    },
    {
      category: 'TECHNICAL INDICATORS',
      title: 'How to Combine Moving Averages with RSI for High-Probability Entries',
      readTime: '8 min read',
      date: 'Updated Weekly',
      excerpt: 'A practical framework for filtering out false market breakouts using dynamic moving averages and momentum oscillators.'
    },
    {
      category: 'RISK MANAGEMENT',
      title: 'The 1% Rule: Capital Preservation for Long-Term Trading Survival',
      readTime: '5 min read',
      date: 'Essential Guide',
      excerpt: 'Discover the exact position sizing formula professional prop firm traders use to withstand consecutive losing trades.'
    },
    {
      category: 'SESSION TIMING',
      title: 'Trading the London-New York Overlap: Where Maximum Liquidity Lives',
      readTime: '7 min read',
      date: 'Market Hours',
      excerpt: 'Why the 13:00 to 17:00 GMT window experiences the highest trading volumes, tightest spreads, and cleanest momentum.'
    },
    {
      category: 'MACROECONOMICS',
      title: 'How Central Bank Interest Rate Cycles Drive Global Currency Trends',
      readTime: '9 min read',
      date: 'Macro Insights',
      excerpt: 'Decode FOMC, ECB, and BoE policy statements and learn how rate differentials guide multi-month currency trends.'
    },
    {
      category: 'PSYCHOLOGY',
      title: 'Overcoming Fear and FOMO in Modern Financial Markets',
      readTime: '6 min read',
      date: 'Psychology',
      excerpt: 'Eliminate emotional decision-making, revenge trading, and premature profit-taking with a systematic rules-based journal.'
    }
  ];

  const webinars = [
    {
      title: 'Live US Non-Farm Payrolls (NFP) Breakdown & Trade Setups',
      speaker: 'David Sterling, Chief Market Strategist',
      date: 'Friday, 12:00 GMT',
      status: 'Live Interactive Session',
      spots: 'Limited Seats'
    },
    {
      title: 'Mastering Support, Resistance & Supply Zones on Gold',
      speaker: 'Elena Rostova, Senior Technical Analyst',
      date: 'Tuesday, 15:00 GMT',
      status: 'Q&A Included',
      spots: 'Open Registration'
    },
    {
      title: 'Building a High-Expectancy Algorithmic EA for MT5',
      speaker: 'Marcus Vance, Quantitative Lead',
      date: 'Thursday, 17:00 GMT',
      status: 'Code Template Provided',
      spots: 'Filling Fast'
    }
  ];

  const faqs = [
    {
      q: 'Are the education courses and webinars completely free?',
      a: 'Yes, all educational articles, video tutorials, and live analyst webinars are 100% complimentary for all registered P4 Global Market traders.'
    },
    {
      q: 'Can I practice what I learn without risking real money?',
      a: 'Absolutely. Every trader receives access to a free Demo Account with up to $100,000 in virtual funds, allowing you to practice strategies in real market conditions with zero risk.'
    },
    {
      q: 'Do I get a certificate upon completing the learning tracks?',
      a: 'Yes, completing each designated learning path awards you an accredited P4 Academy Certificate of Completion you can display on your professional profile.'
    },
    {
      q: 'Are live webinars recorded if I miss the scheduled session?',
      a: 'Yes. All live webinars are recorded and uploaded to the P4 Video Archive within 24 hours so you can rewatch them on-demand anytime.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • TRADING ACADEMY"
        title="EDUCATION"
        subtitle="Learn trading from beginner to advanced"
        ctaText="START LEARNING"
        ctaLink="#paths"
        secondaryCtaText="UPCOMING WEBINARS"
        secondaryCtaLink="#webinars"
      />

      {/* 2. LEARNING PATHS */}
      <ContentSection
        id="paths"
        heading="Structured Learning Paths"
        subtitle="Step-by-step curricula curated by seasoned market professionals to accelerate your trading competence."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {learningPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${path.badgeColor}`}>
                    {path.level}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{path.modules}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{path.desc}</p>

                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Core Topics Covered:</div>
                  {path.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to="/register?demo=true"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <span>{path.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 3. VIDEO COURSES */}
      <ContentSection
        bg="bg-slate-50"
        heading="On-Demand Video Courses"
        subtitle="Watch in-depth tutorial lessons covering charting, technical indicators, risk math, and algorithmic setups."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoCourses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Video Card Thumbnail */}
                <div className={`h-44 bg-gradient-to-br ${course.imageBg} relative p-5 flex flex-col justify-between text-white`}>
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {course.level}
                    </span>
                    <span className="text-xs font-bold text-amber-400">★ {course.rating}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#00C853] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-5 h-5 ml-0.5 fill-black" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>{course.lessons}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h4>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  to="/register?demo=true"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00a844] uppercase tracking-wider"
                >
                  <span>Watch Free Course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 4. ARTICLES & GUIDES */}
      <ContentSection
        heading="Trading Articles & Guides"
        subtitle="Deep-dive educational guides covering practical price action, psychology, and risk mitigation."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                  <span className="font-bold text-blue-600 uppercase tracking-wider">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2 leading-snug">{art.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{art.excerpt}</p>
              </div>

              <Link
                to="/register?demo=true"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#00C853] transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. WEBINARS */}
      <ContentSection
        id="webinars"
        bg="bg-slate-50"
        heading="Live Upcoming Webinars"
        subtitle="Interact directly with our veteran market analysts during live trading sessions and macroeconomic breakdowns."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webinars.map((web, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 font-bold uppercase tracking-wider">
                    {web.status}
                  </span>
                  <span className="text-slate-500 font-semibold">{web.spots}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{web.title}</h4>
                <div className="text-xs text-slate-600 space-y-1 mb-5">
                  <div className="font-medium text-slate-700">Host: {web.speaker}</div>
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{web.date}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/register"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-bold text-xs uppercase tracking-wider text-center transition-all"
              >
                Reserve Seat (Free)
              </Link>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 6. FAQ */}
      <ContentSection
        heading="Academy FAQ"
        subtitle="Frequently asked questions about our free trading courses and webinars."
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 7. CTA */}
      <CTASection
        heading="Start Learning & Trade with Confidence"
        subtitle="Master the financial markets at your own pace. Practice on our risk-free demo account with virtual funds."
        primaryBtnText="START LEARNING"
        primaryBtnLink="/register?demo=true"
        secondaryBtnText="OPEN LIVE ACCOUNT"
        secondaryBtnLink="/register"
      />
    </div>
  );
}
