import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Users,
  Copy,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Award,
  Zap,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Star,
  DollarSign,
  SlidersHorizontal,
  Clock
} from 'lucide-react';

export default function SocialTrading() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Choose a Trader',
      desc: 'Browse our leaderboard of verified Master Traders. Filter by total return, risk score, max drawdown, and preferred trading style.',
      icon: UserCheck
    },
    {
      num: '02',
      title: 'Copy Their Trades',
      desc: 'Set your investment capital, configure custom stop-loss ratios, and hit Copy. Every position is replicated automatically in real-time.',
      icon: Copy
    },
    {
      num: '03',
      title: 'Earn Profits',
      desc: 'Watch your portfolio reflect the performance of top market veterans. Maintain 100% control to pause, adjust, or withdraw funds at any time.',
      icon: TrendingUp
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Copy Top Traders',
      description: 'Gain exposure to proven market strategies crafted by seasoned professionals with fully auditable, verified track records.',
      highlight: 'Audited Track Records'
    },
    {
      icon: Zap,
      title: 'Real-Time Mirroring',
      description: 'Our proprietary copy engine mirrors trades with sub-second execution, eliminating latency discrepancy and slippage.',
      highlight: 'Ultra-low slippage'
    },
    {
      icon: ShieldCheck,
      title: 'Risk Control',
      description: 'Set custom proportional allocation, maximum drawdown limits, and emergency stop-out thresholds to safeguard your capital.',
      highlight: 'Full Risk Controls'
    },
    {
      icon: BarChart3,
      title: 'Performance Stats',
      description: 'Access transparent, comprehensive metrics including Sharpe ratio, monthly returns, win/loss distribution, and average holding times.',
      highlight: 'Complete Transparency'
    }
  ];

  const topTraders = [
    {
      name: 'Alpha FX Trend',
      strategy: 'Algorithmic Forex Trend Following',
      allTimeReturn: '+342.8%',
      monthlyAvg: '+14.2%',
      winRate: '78.4%',
      maxDrawdown: '8.2%',
      followers: 1420,
      copiersCapital: '$1.8M',
      riskScore: 'Low (3/10)',
      profitShare: '15%',
      avatarBg: 'bg-emerald-600',
      initials: 'AF'
    },
    {
      name: 'Gold Scalper Pro',
      strategy: 'Intraday XAU/USD Momentum Scalping',
      allTimeReturn: '+219.5%',
      monthlyAvg: '+18.6%',
      winRate: '84.1%',
      maxDrawdown: '6.5%',
      followers: 2180,
      copiersCapital: '$3.2M',
      riskScore: 'Medium (4/10)',
      profitShare: '20%',
      avatarBg: 'bg-amber-600',
      initials: 'GS'
    },
    {
      name: 'Macro Swing Master',
      strategy: 'Global Indices & FX Multi-Asset Swings',
      allTimeReturn: '+188.0%',
      monthlyAvg: '+10.8%',
      winRate: '72.3%',
      maxDrawdown: '5.1%',
      followers: 980,
      copiersCapital: '$1.1M',
      riskScore: 'Low (2/10)',
      profitShare: '10%',
      avatarBg: 'bg-blue-600',
      initials: 'MS'
    }
  ];

  const faqs = [
    {
      q: 'What is Social Trading and how does it work?',
      a: 'Social Trading allows you to automatically copy the trading operations of experienced master traders. When a strategy provider executes a trade, that exact trade is replicated in your account proportionally to your allocated capital.'
    },
    {
      q: 'What fees do strategy providers charge?',
      a: 'Strategy providers earn a predetermined performance fee (typically 10%–20%) only when their trades generate a net profit for you under a High-Water Mark model. If the trader does not make a profit, no fee is charged.'
    },
    {
      q: 'Can I stop copying or close individual trades myself?',
      a: 'Yes, you retain full autonomy over your funds. You can pause or stop copying a trader at any moment, manually close specific positions, or adjust your risk parameters whenever you choose.'
    },
    {
      q: 'Is there a minimum deposit required to start social trading?',
      a: 'You can begin social trading with as little as $50. However, strategy providers often display a recommended minimum balance on their profile to ensure optimal proportional lot sizing.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • COPY TRADING"
        title="SOCIAL TRADING"
        subtitle="Copy the trades of successful investors"
        ctaText="START SOCIAL TRADING"
        ctaLink="/register"
        secondaryCtaText="BROWSE TOP TRADERS"
        secondaryCtaLink="#traders"
      />

      {/* 2. WHAT IS SOCIAL TRADING */}
      <ContentSection
        heading="What is Social Trading?"
        subtitle="Harness the wisdom of top market veterans and trade financial markets without spending hours analyzing charts."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Social Trading bridges the gap between novice investors and top-performing trading professionals. Rather than spending years mastering technical indicators, fundamental reports, and emotional discipline, social trading enables you to tap into the proven expertise of vetted Master Traders.
            </p>
            <p>
              Through our institutional copy trading infrastructure, when a Master Trader opens a position in Forex, Gold, or Indices, your account replicates the order within milliseconds at the exact proportional size. You keep full ownership of your money, while benefiting from institutional-grade risk management.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
              <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                <span>Zero Prior Experience Needed</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                <span>High-Water Mark Protection</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                <span>Instant Funds Withdrawal</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0a1929] text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase font-bold text-slate-400">P4 Social Community</span>
              <span className="text-xs font-bold text-[#00C853] flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> 18,400+ Active Copiers
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-slate-400">Verified Masters</span>
                <span className="font-bold text-white">450+ Active</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-slate-400">Avg. Execution Speed</span>
                <span className="font-bold text-[#00C853]">&lt; 15ms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800/60 text-sm">
                <span className="text-slate-400">Copier Volume</span>
                <span className="font-bold text-white">$45M+ Monthly</span>
              </div>
              <div className="flex justify-between items-center py-2 text-sm">
                <span className="text-slate-400">Account Control</span>
                <span className="font-bold text-white">100% Retained</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. HOW IT WORKS */}
      <ContentSection
        bg="bg-slate-50"
        heading="How Social Trading Works"
        subtitle="Start automated copy trading in three straightforward steps."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md relative overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 select-none group-hover:text-blue-50 transition-colors">
                  {st.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-[#00C853]/10 group-hover:text-[#00C853] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{st.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 4. KEY FEATURES */}
      <ContentSection
        heading="Key Features"
        subtitle="Engineered with institutional safety controls, transparent analytics, and high-frequency mirroring."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <BenefitCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              highlight={feat.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 5. TOP TRADERS SECTION */}
      <ContentSection
        id="traders"
        bg="bg-slate-50"
        heading="Top Verified Strategy Providers"
        subtitle="Explore our top-ranked traders with consistent returns and transparent performance records."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {topTraders.map((trader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${trader.avatarBg} text-white font-bold flex items-center justify-center text-lg shadow-sm`}>
                    {trader.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{trader.name}</h4>
                    <p className="text-xs text-slate-500">{trader.strategy}</p>
                  </div>
                </div>

                {/* Return Banner */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-center mb-5">
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">All-Time Return</div>
                  <div className="text-3xl font-black text-emerald-600">{trader.allTimeReturn}</div>
                  <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Avg Monthly: {trader.monthlyAvg}</div>
                </div>

                {/* Stats Table */}
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Win Rate</span>
                    <span className="font-bold text-slate-900">{trader.winRate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Max Drawdown</span>
                    <span className="font-bold text-slate-900">{trader.maxDrawdown}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Risk Score</span>
                    <span className="font-bold text-slate-900">{trader.riskScore}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">Copiers / AUM</span>
                    <span className="font-bold text-slate-900">{trader.followers} ({trader.copiersCapital})</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500 font-medium">Performance Fee</span>
                    <span className="font-bold text-[#00C853]">{trader.profitShare}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/register"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <span>Copy Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 6. FAQ */}
      <ContentSection
        heading="Social Trading FAQ"
        subtitle="Have questions about copying trades or becoming a strategy provider?"
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
        heading="Start Social Trading Today"
        subtitle="Join thousands of copiers and automate your trading journey with the top market performers in the world."
        primaryBtnText="START SOCIAL TRADING"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
