import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQItem from '../../components/FAQItem';
import {
  Coins,
  ShieldCheck,
  Zap,
  TrendingUp,
  FlaskConical,
  GraduationCap,
  Users,
  Check,
  ArrowRight,
  Sparkles,
  Sliders,
  DollarSign
} from 'lucide-react';

export default function CentAccount() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: <DollarSign className="w-6 h-6 text-[#00C853]" />,
      title: 'Minimum Deposit: $10',
      desc: 'Start trading real live markets with as little as $10, which immediately displays as 1,000 cents on your MT5 balance.'
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00C853]" />,
      title: 'Leverage Up to 1:1000',
      desc: 'Unlock ultra-high flexible leverage up to 1:1000 to maximize your capital efficiency even on tiny cent balances.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00C853]" />,
      title: 'Spreads from 1.5 Pips',
      desc: 'Competitive, transparent floating spreads across major and minor currency pairs with zero hidden commission fees.'
    },
    {
      icon: <Coins className="w-6 h-6 text-[#00C853]" />,
      title: 'Trade in Micro Lots (0.01 Lot)',
      desc: 'Execute micro-lot position sizes (0.01 cent lot) to maintain strict, pinpoint precision in your risk management.'
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-[#00C853]" />,
      title: 'Perfect for Testing Strategies',
      desc: 'Bridge the gap between virtual demo accounts and standard live trading by running EAs and strategies under real market psychology.'
    }
  ];

  const targetAudiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#00C853]" />,
      title: 'Beginners',
      desc: 'Transition smoothly from a demo account to real money trading without exposing yourself to significant financial risk.'
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-[#00C853]" />,
      title: 'Strategy & EA Testers',
      desc: 'Live-test automated algorithmic bots, Expert Advisors (EAs), and custom indicators with real broker execution and slippage.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00C853]" />,
      title: 'Risk-Averse Traders',
      desc: 'Traders who prefer disciplined money management with tiny capital stakes while enjoying full MT5 charting capabilities.'
    }
  ];

  const comparisonRows = [
    { feature: 'Base Currency / Balance Unit', cent: 'US Cents (USC)', standard: 'US Dollars (USD)' },
    { feature: 'Example Deposit Balance', cent: '$10 = 1,000 Cents', standard: '$10 = $10 USD' },
    { feature: 'Minimum Initial Deposit', cent: '$10', standard: '$10' },
    { feature: 'Spreads From', cent: '1.5 pips', standard: '1.1 pips' },
    { feature: 'Trading Commission', cent: '$0 / Lot', standard: '$0 / Lot' },
    { feature: 'Maximum Leverage', cent: 'Up to 1:1000', standard: 'Up to 1:500' },
    { feature: 'Minimum Lot Size', cent: '0.01 Cent Lot', standard: '0.01 Standard Lot' },
    { feature: 'Platform Access', cent: 'MetaTrader 5 (MT5)', standard: 'MetaTrader 5 (MT5)' },
    { feature: 'Expert Advisors (EA)', cent: 'Allowed', standard: 'Allowed' },
    { feature: 'Islamic Swap-Free', cent: 'Available', standard: 'Available' }
  ];

  const faqs = [
    {
      q: 'How does the Cent Account currency balance work?',
      a: 'In a Cent Account, your account balance, margin, and profits are calculated and displayed in cents. When you deposit $10 USD, your MT5 trading terminal will display a balance of 1,000 cents (USC).'
    },
    {
      q: 'Can I withdraw my earnings in USD?',
      a: 'Yes, absolutely. When you request a withdrawal from your Cent Account, your cent balance is automatically converted back to USD (or your local deposit currency) at the exact 1:100 exchange rate with zero conversion penalties.'
    },
    {
      q: 'Can I run automated Expert Advisors (EAs) on a Cent Account?',
      a: 'Yes. Cent accounts fully support Expert Advisors, algorithmic trading, and custom MQL5 scripts, making them the industry standard for forward-testing automated bots with real money.'
    },
    {
      q: 'What is the minimum deposit required to open a Cent Account?',
      a: 'The minimum deposit for a P4 Global Market Cent Account is only $10. There are no maintenance fees or monthly minimums.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="MICRO LOTS & MINIMAL RISK"
        title="CENT ACCOUNT"
        subtitle="Trade with micro lots and minimal risk — Experience live market conditions with your balance measured in cents."
        ctaText="OPEN CENT ACCOUNT"
        ctaLink="/register?type=cent"
      />

      {/* 2. WHAT IS A CENT ACCOUNT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
            Smart Low-Risk Trading
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What is a Cent Account?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            A <strong>Cent Account</strong> is an account type where your balance is denominated in <strong className="text-slate-900">cents instead of dollars</strong>. For example, a modest <strong>$10 deposit displays as 1,000 cents</strong> in your trading terminal.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            This allows beginner traders and algorithmic developers to trade real live market movements with micro-lot contract sizes, experiencing genuine market execution, spreads, and trading psychology with a fraction of the capital risk.
          </p>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Key Features of Cent Account</h2>
            <p className="text-slate-600">Tailored trading specifications built for capital preservation and testing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-[#00C853]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IS IT FOR */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Who is the Cent Account For?</h2>
            <p className="text-slate-600">The perfect solution across various trading journey stages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-200/60">
                  {aud.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{aud.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Cent Account vs. Standard Account</h2>
            <p className="text-slate-600">Understand the key differences between our cent and standard accounts.</p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold">Specification</th>
                  <th className="py-4 px-6 font-bold text-[#00C853]">Cent Account</th>
                  <th className="py-4 px-6 font-bold">Standard Account</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-4 px-6 font-semibold text-slate-800">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-emerald-50/30">
                      {row.cent}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our Cent Account.</p>
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

      {/* 7. CTA SECTION */}
      <section className="relative bg-[#0a1929] py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Trading with $10 in Cents</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Open your Cent Account in minutes and start trading micro lots with up to 1:1000 leverage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register?type=cent"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Open Cent Account
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
