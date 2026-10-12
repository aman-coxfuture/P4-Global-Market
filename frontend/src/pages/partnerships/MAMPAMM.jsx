import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Briefcase,
  Layers,
  PieChart,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  DollarSign,
  BarChart3,
  Percent,
  Cpu,
  Lock,
  UserCheck,
  Building
} from 'lucide-react';

export default function MAMPAMM() {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: Layers,
      title: 'Multi-Account Management',
      description: 'Manage an unlimited number of investor accounts seamlessly from a single unified master terminal with zero execution delay.',
      highlight: 'Unlimited sub-accounts'
    },
    {
      icon: Cpu,
      title: 'Real-Time Allocation',
      description: 'Instantaneous trade distribution using customizable lot allocation methods (Proportional by Equity, Balance, or Custom Lot Size).',
      highlight: 'Sub-millisecond mirroring'
    },
    {
      icon: Percent,
      title: 'Automated Performance Fees',
      description: 'Collect management and performance fees automatically with High-Water Mark (HWM) safeguards to protect both manager and investor.',
      highlight: 'High-Water Mark protection'
    },
    {
      icon: BarChart3,
      title: 'Detailed Institutional Reporting',
      description: 'Comprehensive real-time analytics, Sharpe ratios, equity curves, drawdown reports, and automated investor account statements.',
      highlight: 'Audit-ready reports'
    }
  ];

  const comparisonData = [
    {
      feature: 'Allocation Method',
      mam: 'Custom lot sizes, Equity proportional, Balance proportional',
      pamm: 'Strict percentage-based allocation pool'
    },
    {
      feature: 'Investor Account Control',
      mam: 'Investors can view and close individual trades manually',
      pamm: 'Manager manages pooled capital; investor tracks total equity'
    },
    {
      feature: 'Minimum Account Size',
      mam: '$10,000 USD (Master Portfolio)',
      pamm: '$1,000 USD (Per Investor)'
    },
    {
      feature: 'Trade Execution Type',
      mam: 'Separate individual orders replicated to sub-accounts',
      pamm: 'Single aggregated master order divided by pool share'
    },
    {
      feature: 'Leverage & Risk Settings',
      mam: 'Independent per-sub-account risk & leverage parameters',
      pamm: 'Unified risk parameters across the entire pooled fund'
    },
    {
      feature: 'Ideal Target Audience',
      mam: 'Professional fund managers, hedge funds, prop trading desks',
      pamm: 'Retail investors seeking hands-off passive returns'
    }
  ];

  const mamSteps = [
    {
      num: '01',
      title: 'Manager Creates Master Account',
      desc: 'Set up your MAM Master account on MT4 or MT5. Configure allocation parameters, management fees, and performance fee tiers.'
    },
    {
      num: '02',
      title: 'Investors Link Their Sub-Accounts',
      desc: 'Investors approve a Limited Power of Attorney (LPOA) through their secure client portal, linking their funded accounts to your MAM master.'
    },
    {
      num: '03',
      title: 'Manager Trades, Profits Replicate',
      desc: 'Every trade placed on the master account is instantly allocated across all connected investor accounts with proportional volume.'
    }
  ];

  const pammSteps = [
    {
      num: '01',
      title: 'Manager Launches PAMM Fund',
      desc: 'The master manager establishes a pooled PAMM account, commits initial manager capital, and defines the investment proposal terms.'
    },
    {
      num: '02',
      title: 'Investors Allocate Capital to Pool',
      desc: 'Investors deposit funds into the shared PAMM pool, receiving a proportional percentage ownership share of the total fund value.'
    },
    {
      num: '03',
      title: 'Profits Shared by Percentage',
      desc: 'The manager executes master trades. All profits and losses distribute automatically according to each investor\'s equity stake.'
    }
  ];

  const whoIsItFor = [
    {
      title: 'For Professional Money Managers',
      subtitle: 'Scale AUM and monetize trading strategies',
      icon: Briefcase,
      color: 'bg-blue-600',
      points: [
        'Trade multiple client accounts from a single MT4/MT5 master interface',
        'Automated monthly performance fee collection directly to your wallet',
        'Flexible allocation methods (Equity, Balance, Lot Ratio, Cash)',
        'Full EA / algorithmic automated expert advisor compatibility',
        'No restriction on number of linked investor accounts'
      ]
    },
    {
      title: 'For Private Investors',
      subtitle: 'Passive returns with institutional transparency',
      icon: UserCheck,
      color: 'bg-[#00C853]',
      points: [
        'Hands-off exposure to verified institutional trading strategies',
        'Funds remain in your own segregated account under your name',
        'Manager has trading authority only—cannot withdraw your funds',
        'High-Water Mark ensures performance fees apply only to net profits',
        'Real-time access to statements, equity curves, and trade logs'
      ]
    }
  ];

  const faqs = [
    {
      q: 'What is the fundamental difference between MAM and PAMM?',
      a: 'MAM (Multi-Account Manager) is designed for flexible lot-size distribution where each investor retains an individual account and can see separate trade tickets. PAMM (Percentage Allocation Management Module) pools all investor funds into one consolidated master account where profits and losses are distributed purely based on percentage equity share.'
    },
    {
      q: 'What is the minimum investment required to join or launch?',
      a: 'For Money Managers, the recommended master starting equity is $10,000 for MAM and $5,000 for PAMM. For individual investors looking to allocate funds into an existing PAMM pool, the minimum entry deposit starts as low as $1,000.'
    },
    {
      q: 'How are performance fees calculated and collected?',
      a: 'Performance fees are calculated automatically at the end of each billing cycle (usually monthly) based on the High-Water Mark (HWM) principle. If the manager generates net profit above previous peak equity, the agreed fee percentage (e.g. 20%) is debited from investor profits and transferred to the manager.'
    },
    {
      q: 'Can investors withdraw their funds at any time?',
      a: 'Yes. Investors retain full custodial control of their deposits. On MAM accounts, withdrawals can occur at any time. On PAMM pools, investors can request withdrawal during scheduled rollover intervals (daily or weekly) without penalty.'
    },
    {
      q: 'How do I apply to become a verified MAM/PAMM Manager at P4?',
      a: 'Click "Apply for MAM/PAMM" to complete the application form. Our institutional onboarding team will review your historical trading track record, configure your master account parameters, and prepare your Limited Power of Attorney (LPOA) documentation.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="PARTNERSHIPS • ASSET MANAGEMENT"
        title="MAM / PAMM"
        subtitle="Manage multiple accounts with advanced allocation tools"
        ctaText="APPLY FOR MAM/PAMM"
        ctaLink="/register"
        secondaryCtaText="COMPARE MAM VS PAMM"
        secondaryCtaLink="#comparison"
      />

      {/* 2. WHAT IS MAM/PAMM */}
      <ContentSection
        heading="Institutional Multi-Account Management Solutions"
        subtitle="Empower your money management business with institutional execution speed, flexible trade distribution, and automated fee accounting."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              P4 Global Market provides cutting-edge <strong>MAM (Multi-Account Manager)</strong> and <strong>PAMM (Percentage Allocation Management Module)</strong> software engineered specifically for asset managers, hedge funds, and professional traders.
            </p>
            <p>
              Our solutions eliminate the operational bottleneck of manually placing orders across separate terminals. With a single click from your master terminal, block orders are executed with zero latency and divided proportionally across hundreds of client accounts simultaneously.
            </p>
            <p>
              Investors enjoy complete transparency and peace of mind: their capital remains strictly in their own segregated accounts, protected by <strong>Limited Power of Attorney (LPOA)</strong> agreements and high-water mark fee safeguards.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#0a1929] text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase font-bold text-slate-400">P4 MAM / PAMM Engine</span>
              <span className="text-xs font-bold text-[#00C853] flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Institutional Grade
              </span>
            </div>
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Execution Speed</span>
                <span className="font-extrabold text-[#00C853]">&lt; 10ms Latency</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Platforms Supported</span>
                <span className="font-bold text-white">MetaTrader 4 & 5</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">EA / Algorithmic Trading</span>
                <span className="font-bold text-[#00C853]">100% Fully Supported</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-400">Fee Settlement</span>
                <span className="font-bold text-white">Automated High-Water Mark</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. MAM VS PAMM COMPARISON TABLE */}
      <ContentSection
        id="comparison"
        bg="bg-slate-50"
        heading="MAM vs PAMM: Comprehensive Comparison"
        subtitle="Choose the optimal structure tailored to your trading style, client base, and regulatory preferences."
      >
        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-lg bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="py-5 px-6">Feature</th>
                <th className="py-5 px-6 text-blue-400">MAM (Multi-Account Manager)</th>
                <th className="py-5 px-6 text-[#00C853]">PAMM (Percentage Allocation)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4.5 px-6 font-bold text-slate-900">{row.feature}</td>
                  <td className="py-4.5 px-6 font-medium text-slate-700">{row.mam}</td>
                  <td className="py-4.5 px-6 font-semibold text-slate-800">{row.pamm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* 4. KEY FEATURES (4 Cards) */}
      <ContentSection
        heading="Key Institutional Features"
        subtitle="Designed with robust infrastructure to support high-volume fund management without slippage."
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

      {/* 5. HOW MAM WORKS & 6. HOW PAMM WORKS */}
      <ContentSection
        bg="bg-slate-50"
        heading="How the Allocation Systems Work"
        subtitle="Transparent step-by-step lifecycle from account creation to trade distribution and profit settlement."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* MAM Workflow */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                <span>How MAM Works</span>
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 uppercase">
                Individual Accounts
              </span>
            </div>
            <div className="space-y-5">
              {mamSteps.map((st, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-black text-xs flex items-center justify-center shrink-0">
                    {st.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PAMM Workflow */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#00C853]" />
                <span>How PAMM Works</span>
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                Pooled Fund Pool
              </span>
            </div>
            <div className="space-y-5">
              {pammSteps.map((st, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#00C853] font-black text-xs flex items-center justify-center shrink-0">
                    {st.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 7. WHO IS IT FOR (2 Cards) */}
      <ContentSection
        heading="Who is MAM / PAMM Built For?"
        subtitle="A win-win architecture providing wealth managers with scalability and retail investors with passive growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whoIsItFor.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {item.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/register"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 8. FAQ (5 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="MAM & PAMM FAQ"
        subtitle="Answers to common technical, financial, and regulatory questions."
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

      {/* 9. CTA */}
      <CTASection
        heading="Apply for MAM / PAMM"
        subtitle="Scale your trading operations or allocate capital to verified asset managers with institutional execution and automated reporting."
        primaryBtnText="APPLY FOR MAM/PAMM"
        primaryBtnLink="/register"
        secondaryBtnText="SPEAK WITH ASSET DESK"
        secondaryBtnLink="/contact"
      />
    </div>
  );
}
