import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Gift,
  Coins,
  Users,
  Award,
  Moon,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  DollarSign,
  UserCheck,
  ChevronRight,
  HelpCircle,
  FileText
} from 'lucide-react';

export default function AllPromotions() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const promotionsGrid = [
    {
      icon: Gift,
      badge: 'POPULAR',
      title: 'Welcome Bonus',
      subtitle: 'Get up to $500 on first deposit',
      desc: 'Double your trading capacity from day one. Deposit and receive a 100% matched bonus to boost your margin and take larger positions.',
      link: '/register',
      ctaText: 'Claim Bonus'
    },
    {
      icon: Coins,
      badge: 'HIGH DEMAND',
      title: 'Credit Bonus',
      subtitle: 'Trade with extra credit up to 50%',
      desc: 'Enhance your buying power with tiered credit additions up to $10,000. Amplify your margin cushion and keep all trading profits.',
      link: '/promotions/credit-bonus',
      ctaText: 'Learn More'
    },
    {
      icon: Users,
      badge: 'UNLIMITED EARNINGS',
      title: 'Refer a Friend',
      subtitle: 'Earn $50 per referral + milestone bonuses',
      desc: 'Invite friends, fellow traders, and peers to P4 Global Market. Earn $50 cash per qualifying friend plus escalation rewards up to $1,000.',
      link: '/promotions/refer-a-friend',
      ctaText: 'Learn More'
    },
    {
      icon: Award,
      badge: 'VIP REWARDS',
      title: 'Loyalty Program',
      subtitle: 'Earn points on every trade',
      desc: 'Accumulate reward points with every lot traded across Forex, Metals, and Indices. Redeem points for cash balance or exclusive trading perks.',
      link: '/portal/loyalty',
      ctaText: 'View Program'
    },
    {
      icon: Moon,
      badge: 'SHARIA COMPLIANT',
      title: 'Islamic Account Bonus',
      subtitle: '100% Swap-free trading conditions',
      desc: 'Hold overnight positions without interest fees or hidden markups. Fully compliant with Islamic finance principles with zero rollover charges.',
      link: '/accounts/islamic-account',
      ctaText: 'Explore Account'
    },
    {
      icon: Trophy,
      badge: 'MONTHLY CONTEST',
      title: 'Demo Contest',
      subtitle: 'Win real prizes with zero financial risk',
      desc: 'Compete against global traders in our monthly virtual contest. Showcase your strategy and win withdrawable cash prizes from a $10,000 prize pool.',
      link: '/accounts/demo-account',
      ctaText: 'Join Contest'
    }
  ];

  const claimSteps = [
    {
      step: '01',
      title: 'Register or Login',
      desc: 'Create your P4 Global Market live trading account in under 3 minutes or log into your client portal.',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Choose a Promotion',
      desc: 'Navigate to the Promotions tab in your dashboard and select your preferred bonus or enter your promotional code.',
      icon: Sparkles
    },
    {
      step: '03',
      title: 'Meet Requirements',
      desc: 'Deposit the minimum eligible amount and trade. The bonus will automatically reflect in your account balance or credit.',
      icon: CheckCircle2
    }
  ];

  const faqs = [
    {
      q: 'Can I use multiple promotions simultaneously?',
      a: 'In general, each deposit can only be coupled with one deposit-based promotion (such as the Welcome Bonus or Credit Bonus). However, referral bonuses, loyalty points, and demo contest rewards can be earned concurrently without any restrictions.'
    },
    {
      q: 'How long do promotions last?',
      a: 'Most deposit credit bonuses remain valid on your active trading account for 30 to 90 days from the date of crediting, providing ample time to execute trades and fulfill lot turnover requirements. Any profits generated can be withdrawn at any time.'
    },
    {
      q: 'When will I receive my bonus?',
      a: 'Deposit-related bonuses are credited automatically and instantly to your MT4/MT5 account once your deposit has settled and cleared. Referral bonuses are credited within 24–48 hours of your referral meeting the deposit and volume threshold.'
    },
    {
      q: 'Are there any withdrawal restrictions?',
      a: 'Your deposited principal and any generated trading profits are always 100% yours and can be withdrawn freely at any time. The promotional credit itself is designed for trading margin; upon fulfilling the required lot volume, certain bonus credits can also convert to withdrawable cash.'
    }
  ];

  const terms = [
    'Promotions are available exclusively to verified live account holders aged 18 and above.',
    'A minimum qualifying deposit of $50 is required for the Welcome Bonus, and $100 for the Credit Bonus.',
    'Bonus credits are intended to provide additional margin leverage and can be utilized to open and maintain market positions.',
    'Profits generated using promotional funds are fully withdrawable at any time without forfeiture of the deposit amount.',
    'Clients attempting arbitrage, churning, market abuse, or multiple account registrations under the same IP/device will have bonuses rescinded.',
    'P4 Global Market reserves the right to amend, alter, or terminate promotional campaigns with prior written notification to participants.',
    'Standard risk warnings apply. Leveraged trading carries substantial risk of capital loss.'
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="PROMOTIONS & BONUSES"
        title="ALL PROMOTIONS"
        subtitle="Explore all current offers and bonuses from P4 Global Market"
        ctaText="CLAIM BONUS"
        ctaLink="/register"
        secondaryCtaText="EXPLORE OFFERS"
        secondaryCtaLink="#featured"
      />

      {/* 2. FEATURED PROMOTION (Large Highlighted Card) */}
      <ContentSection id="featured" bg="bg-slate-50" className="pt-16 pb-14 border-b border-slate-200">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1929] via-[#0d223a] to-[#071321] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-blue-900/60">
          {/* Background Decorative Rings & Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00C853]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C853]/15 border border-[#00C853]/40 text-[#00C853] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Promotion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Welcome Bonus <span className="text-[#00C853]">up to $500</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Kickstart your trading journey with a 100% matched deposit bonus. Double your initial trading equity, access greater market opportunities with flexible leverage, and withdraw all profits with zero penalties.
              </p>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#00C853]">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Match Rate</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-white">$500</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Max Bonus</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl font-black text-blue-400">Instant</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Credit Time</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#00C853]/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Claim Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/promotions/credit-bonus"
                  className="inline-flex items-center justify-center rounded-full px-6 py-4 border border-slate-600 bg-slate-800/60 hover:bg-slate-800 text-white font-semibold text-sm uppercase tracking-wider transition-all"
                >
                  View Credit Bonus
                </Link>
              </div>
            </div>

            {/* Visual Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#00C853]/15 text-[#00C853] flex items-center justify-center font-bold">
                      <Gift className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Promo Package</div>
                      <div className="text-base font-bold text-white">Starter Booster 100%</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-[#00C853] text-xs font-semibold">Active</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Deposit Requirement</span>
                    <span className="font-semibold text-white">From $50</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Bonus Crediting</span>
                    <span className="font-semibold text-[#00C853]">Direct to MT4/MT5</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Profit Withdrawal</span>
                    <span className="font-semibold text-white">Unrestricted & Free</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Applicable Accounts</span>
                    <span className="font-semibold text-white">Standard & Pro</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                    Regulated & Segregated
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    Limited Time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. PROMOTIONS GRID (6 Cards) */}
      <ContentSection
        heading="All Available Promotions"
        subtitle="Choose from a diverse selection of deposit boosts, referral earnings, loyalty perks, and risk-free trading competitions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {promotionsGrid.map((promo, idx) => {
            const Icon = promo.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00C853]/15 group-hover:text-[#00C853] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#00C853]/15 group-hover:text-emerald-700 transition-colors">
                      {promo.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {promo.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00C853] mt-0.5">
                      {promo.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {promo.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={promo.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-[#00C853] transition-colors cursor-pointer"
                  >
                    <span>{promo.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 4. HOW TO CLAIM (3 Steps) */}
      <ContentSection
        bg="bg-slate-50"
        heading="How to Claim Your Bonus"
        subtitle="Start trading with enhanced capital in three seamless steps."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {claimSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00C853] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 tracking-tight">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 5. TERMS & CONDITIONS */}
      <ContentSection
        heading="Promotion Terms & Conditions"
        subtitle="Clear, transparent terms designed to protect client security and fair market operations."
      >
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg mb-2">
            <FileText className="w-6 h-6 text-[#00C853]" />
            <span>General Promotional Guidelines</span>
          </div>

          <ul className="space-y-3.5 text-sm text-slate-700">
            {terms.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      {/* 6. FAQ (4 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Frequently Asked Questions"
        subtitle="Get instant clarity on bonus claims, withdrawal policies, and active campaign rules."
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 7. CTA SECTION */}
      <CTASection
        heading="Ready to Amplify Your Trading?"
        subtitle="Join thousands of traders benefiting from P4 Global Market's industry-leading promotions and zero-pip spreads."
        primaryBtnText="VIEW ALL PROMOTIONS"
        primaryBtnLink="/promotions/all-promotions"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
