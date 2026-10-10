import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQItem from '../../components/FAQItem';
import {
  MonitorCheck,
  TrendingUp,
  Cpu,
  ShieldCheck,
  DollarSign,
  Clock,
  Layers,
  Sparkles,
  Check,
  ArrowRight,
  BarChart3,
  Smartphone
} from 'lucide-react';

export default function DemoAccount() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: <DollarSign className="w-6 h-6 text-[#00C853]" />,
      title: '$100,000 Virtual Balance',
      desc: 'Test strategies with a generous balance of virtual funds that can be reset or topped up anytime from your client dashboard.'
    },
    {
      icon: <MonitorCheck className="w-6 h-6 text-[#00C853]" />,
      title: 'Full MetaTrader 5 Access',
      desc: 'Experience the complete power of MT5 including 21 timeframes, 38 technical indicators, depth of market, and advanced order types.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00C853]" />,
      title: 'Real-Time Market Quotes',
      desc: 'Trade on real tick-by-tick interbank price feeds identical to live production servers with zero artificial latency.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00C853]" />,
      title: 'No Deposit Required',
      desc: 'Zero financial risk and no credit card required. Start practicing trading completely free of charge.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00C853]" />,
      title: 'Instant 30-Second Activation',
      desc: 'Enter your basic details and receive your MT5 login credentials immediately to begin placing simulated orders.'
    },
    {
      icon: <Layers className="w-6 h-6 text-[#00C853]" />,
      title: 'Unlimited Duration',
      desc: 'Keep your demo account active indefinitely by logging in and placing at least one simulated trade every 30 days.'
    }
  ];

  const practiceAreas = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00C853]" />,
      title: 'Test Trading Strategies',
      desc: 'Backtest and forward-test scalping, day trading, swing, and price action strategies under live market volatility.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#00C853]" />,
      title: 'Learn the Platform',
      desc: 'Master the MT5 desktop, web, and mobile interfaces, one-click order execution, and charting tools risk-free.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00C853]" />,
      title: 'Try Expert Advisors (EAs)',
      desc: 'Deploy automated algorithmic bots and custom MQL5 scripts in a real-time sandbox environment.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#00C853]" />,
      title: 'Understand Leverage & Margin',
      desc: 'Learn how leverage ratios (up to 1:500) affect margin requirements, stop outs, and trade sizing before investing real capital.'
    }
  ];

  const comparisonRows = [
    { feature: 'Initial Capital', demo: '$100,000 Virtual Funds', live: 'From $10 Real Funds' },
    { feature: 'Financial Risk', demo: 'Zero Risk', live: 'Capital at Risk' },
    { feature: 'Market Data & Quotes', demo: 'Real-Time Interbank Feeds', live: 'Real-Time Interbank Feeds' },
    { feature: 'Execution Speed', demo: 'Under 30ms (Simulated)', live: 'Under 30ms (Live STP)' },
    { feature: 'Trading Platform', demo: 'MetaTrader 5 (MT5)', live: 'MetaTrader 5 (MT5)' },
    { feature: 'Spreads & Pricing', demo: 'Identical to Live Spreads', live: 'Raw from 0.0 pips / 1.1 pips' },
    { feature: 'KYC Document Verification', demo: 'Not Required', live: 'Required (AML/KYC)' },
    { feature: 'Profit Withdrawal', demo: 'Simulated Only', live: 'Real Fund Withdrawals' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Sign Up Instantly',
      desc: 'Fill out the quick 30-second demo registration form with your name and email.'
    },
    {
      number: '2',
      title: 'Download MT5',
      desc: 'Install MetaTrader 5 on Windows, Mac, iOS, or Android, or open MT5 WebTrader in your browser.'
    },
    {
      number: '3',
      title: 'Start Practicing',
      desc: 'Log in with your demo account credentials and practice with $100,000 in virtual funds.'
    }
  ];

  const faqs = [
    {
      q: 'How long does a P4 Global Market demo account last?',
      a: 'Your demo account is active indefinitely as long as you log in and trade at least once every 30 days. Inactive demo accounts are automatically archived, but you can create a new one instantly.'
    },
    {
      q: 'Are demo prices and execution identical to live accounts?',
      a: 'Yes. Our demo servers connect to the exact same institutional liquidity streams and price feeds as our live trading accounts, providing authentic real-world market conditions.'
    },
    {
      q: 'Can I reset my demo account virtual balance?',
      a: 'Yes. If you wish to reset your balance back to $100,000 or adjust it to reflect your planned live deposit size, you can do so easily within your client portal.'
    },
    {
      q: 'When should I switch from a demo account to a live account?',
      a: 'We recommend switching to a live account once you have tested your trading strategy consistently, mastered MT5 risk controls, and feel confident managing real trades.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="100% RISK-FREE PRACTICE"
        title="DEMO ACCOUNT"
        subtitle="Practice trading with $100,000 virtual funds — Master MetaTrader 5 on live interbank price feeds with zero financial risk."
        ctaText="TRY FREE DEMO"
        ctaLink="/register?demo=true"
        secondaryCtaText="OPEN LIVE ACCOUNT"
        secondaryCtaLink="/register"
      />

      {/* 2. WHAT IS A DEMO ACCOUNT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
            Simulated Trading Environment
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What is a Demo Account?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            A <strong>Demo Account</strong> replicates the real-world trading ecosystem across Forex, Commodities, Indices, and Crypto CFDs with <strong className="text-slate-900">$100,000 in virtual funds</strong>, allowing you to trade without risking any real money.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            It gives aspiring traders and experienced algorithmic developers an ideal sandbox to master chart analysis, refine trading strategies, test Expert Advisors, and build execution discipline before committing live funds.
          </p>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Key Features of Demo Account</h2>
            <p className="text-slate-600">Full access to our enterprise trading infrastructure with zero financial barriers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-[#00C853]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU CAN PRACTICE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What You Can Practice & Master</h2>
            <p className="text-slate-600">Elevate every dimension of your trading skill set in a safe environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 border border-slate-200/60">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEMO VS LIVE COMPARISON TABLE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Demo Account vs. Live Account</h2>
            <p className="text-slate-600">Compare parameters between simulated practice and live STP accounts.</p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature / Specification</th>
                  <th className="py-4 px-6 font-bold text-[#00C853]">Demo Account</th>
                  <th className="py-4 px-6 font-bold">Live Account</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-4 px-6 font-semibold text-slate-800">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-emerald-50/30">
                      {row.demo}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{row.live}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. HOW TO GET DEMO ACCOUNT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Get Your Demo Account</h2>
            <p className="text-slate-600">Launch your risk-free MT5 simulation in under 1 minute.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#00C853] text-black font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about practicing with a demo account.</p>
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

      {/* 8. CTA SECTION */}
      <section className="relative bg-[#0a1929] py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Practice with $100,000?</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Open your free demo account in 30 seconds and test your trading strategies under real market conditions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register?demo=true"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Try Free Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition-all border border-slate-700"
            >
              Open Live Account ($10 Min)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
