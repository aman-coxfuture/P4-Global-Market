import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQItem from '../../components/FAQItem';
import {
  Gauge,
  Sliders,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Zap,
  Lock,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

export default function DynamicLeverage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const leverageTiers = [
    { range: '$0 – $50,000', leverage: '1:500', margin: '0.20%', highlight: true },
    { range: '$50,001 – $100,000', leverage: '1:200', margin: '0.50%', highlight: false },
    { range: '$100,001 – $500,000', leverage: '1:100', margin: '1.00%', highlight: false },
    { range: '$500,001+', leverage: '1:50', margin: '2.00%', highlight: false }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00C853]" />,
      title: 'Automatic Risk Management',
      desc: 'Smart exposure throttling automatically adjusts leverage as position volume scales up, preventing excessive margin exposure.'
    },
    {
      icon: <Lock className="w-8 h-8 text-[#00C853]" />,
      title: 'Protects Against Large Losses',
      desc: 'Safeguards your account equity during sudden high-impact market spikes and news volatility on heavy volume positions.'
    },
    {
      icon: <Sliders className="w-8 h-8 text-[#00C853]" />,
      title: 'No Manual Adjustment Needed',
      desc: 'Our intelligent trading engine calculates your effective required margin instantly and seamlessly per trade on MT5.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00C853]" />,
      title: 'Maximum Power on Small Trades',
      desc: 'Take full advantage of 1:500 purchasing power on standard-sized precision setups without unnecessary capital locks.'
    }
  ];

  const faqs = [
    {
      q: 'What is Dynamic Leverage and how does it benefit my trading?',
      a: 'Dynamic leverage is an automated risk-management model where the leverage ratio automatically adjusts based on your open position size. Smaller trades receive higher leverage (1:500) for maximum capital efficiency, while larger positions receive conservative leverage (1:200 to 1:50) to mitigate sudden drawdown risk.'
    },
    {
      q: 'Does dynamic leverage apply per individual order or total account volume?',
      a: 'Dynamic leverage tiers apply to the cumulative notional exposure per asset category. If total open positions exceed a tier threshold, higher margin requirements apply incrementally to the portion exceeding the boundary.'
    },
    {
      q: 'Are spreads or execution speeds affected by dynamic leverage?',
      a: 'No. Spreads, commissions, and execution speeds remain ultra-fast (<30ms) and identical regardless of position volume or leverage tier.'
    },
    {
      q: 'Which instruments support dynamic leverage at P4 Global Market?',
      a: 'Dynamic leverage is supported across all major and minor Forex pairs, Spot Gold & Silver, Energy contracts, and Global Stock Indices.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="INTELLIGENT RISK MANAGEMENT"
        title="DYNAMIC LEVERAGE ACCOUNT"
        subtitle="Leverage that adapts to your trading volume — Maximize capital efficiency on small trades while safeguarding your equity on larger positions."
        ctaText="OPEN DYNAMIC LEVERAGE ACCOUNT"
        ctaLink="/register?type=dynamic"
      />

      {/* 2. WHAT IS DYNAMIC LEVERAGE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
            Adaptive Capital Protection
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What is Dynamic Leverage?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Unlike static leverage accounts where leverage remains fixed regardless of exposure, <strong>Dynamic Leverage automatically adjusts in real-time based on your total position volume</strong>.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Smaller position sizes benefit from high leverage up to <strong className="text-[#00C853]">1:500</strong> for high capital efficiency, while larger volume orders automatically step down to lower leverage tiers to protect your equity against rapid market reversals.
          </p>
        </div>
      </section>

      {/* 3. HOW IT WORKS (TIER TABLE) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How Dynamic Leverage Works</h2>
            <p className="text-slate-600">Volume tiers and corresponding leverage ratios for transparent risk scaling.</p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold">Position Size (USD Notional)</th>
                  <th className="py-4 px-6 font-bold text-[#00C853]">Leverage</th>
                  <th className="py-4 px-6 font-bold">Margin Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leverageTiers.map((tier, idx) => (
                  <tr
                    key={idx}
                    className={
                      tier.highlight
                        ? 'bg-emerald-50/40'
                        : idx % 2 === 0
                        ? 'bg-white'
                        : 'bg-slate-50/70'
                    }
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      {tier.highlight && (
                        <span className="w-2 h-2 rounded-full bg-[#00C853] inline-block" />
                      )}
                      {tier.range}
                    </td>
                    <td className="py-4 px-6 font-extrabold text-[#00C853] text-base">
                      {tier.leverage}
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-semibold">{tier.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Key Benefits</h2>
            <p className="text-slate-600">Built-in safeguards engineered for modern market volatility.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-md transition-all hover:border-[#00C853]/40"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-200/60">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Clarifications about margin calculation and leverage tier switching.</p>
          </div>

          <div className="space-y-4">
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
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="relative bg-[#0a1929] py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trade with Smart Dynamic Leverage</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Maximize capital power on precision entries and enjoy automated protection on high-volume swings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register?type=dynamic"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Open Dynamic Leverage Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/accounts/trading-accounts"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition-all border border-slate-700"
            >
              Compare All Accounts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
