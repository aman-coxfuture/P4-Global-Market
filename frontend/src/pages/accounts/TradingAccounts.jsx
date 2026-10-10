import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Headphones,
  Lock,
  ChevronDown,
  Check,
  ArrowRight,
  UserPlus,
  FileCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function TradingAccounts() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const comparisonRows = [
    { feature: 'Spreads From', standard: '1.1 pips', pro: '0.0 pips', demo: 'Market' },
    { feature: 'Commission', standard: '$0', pro: '$3.50/lot', demo: '$0' },
    { feature: 'Min Deposit', standard: '$10', pro: '$100', demo: '$0' },
    { feature: 'Leverage', standard: '1:500', pro: '1:500', demo: '1:500' },
    { feature: 'Margin Call', standard: '50%', pro: '50%', demo: '50%' },
    { feature: 'Stop Out', standard: '20%', pro: '20%', demo: '20%' },
    { feature: 'Islamic Available', standard: 'Yes', pro: 'Yes', demo: 'Yes' },
    { feature: 'EA Trading', standard: 'Yes', pro: 'Yes', demo: 'Yes' },
    { feature: 'Hedging', standard: 'Yes', pro: 'Yes', demo: 'Yes' },
    { feature: 'Scalping', standard: 'Yes', pro: 'Yes', demo: 'Yes' }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#00C853]" />,
      title: 'Regulated Broker',
      desc: 'Tier-1 safety protocols, strict regulatory oversight, and client funds stored in segregated AAA-rated banks.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00C853]" />,
      title: 'Fast Execution (under 30ms)',
      desc: 'Ultra-low latency infrastructure with deep interbank liquidity and zero artificial dealing desk intervention.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#00C853]" />,
      title: '24/5 Support',
      desc: 'Multilingual support team accessible round-the-clock through live chat, phone, and direct ticketing.'
    },
    {
      icon: <Lock className="w-8 h-8 text-[#00C853]" />,
      title: 'Secure Deposits',
      desc: 'Fast, fee-free deposits and withdrawals through Visa, Mastercard, Bank Wire, Crypto, and instant e-wallets.'
    }
  ];

  const steps = [
    {
      number: '1',
      icon: <UserPlus className="w-6 h-6 text-[#00C853]" />,
      title: 'Register',
      desc: 'Fill out our fast online registration form in under 2 minutes.'
    },
    {
      number: '2',
      icon: <FileCheck className="w-6 h-6 text-[#00C853]" />,
      title: 'Verify',
      desc: 'Upload standard KYC identification documents for rapid automated verification.'
    },
    {
      number: '3',
      icon: <TrendingUp className="w-6 h-6 text-[#00C853]" />,
      title: 'Deposit & Trade',
      desc: 'Fund your account with $10 or more and start trading 1,000+ global CFD instruments.'
    }
  ];

  const faqs = [
    {
      q: 'What is the minimum deposit?',
      a: 'The minimum deposit for our Standard Account is only $10. For the Pro Account, the minimum initial deposit is $100. Our Demo Account is 100% free with $100,000 in virtual trading capital.'
    },
    {
      q: 'Can I have multiple accounts?',
      a: 'Yes, you can easily open and manage multiple live and demo accounts (Standard, Pro, Islamic) under a single P4 Global Market client profile through your client dashboard.'
    },
    {
      q: 'What is an Islamic account?',
      a: 'An Islamic account is a swap-free account compliant with Sharia law. Positions held overnight do not earn or pay interest (Riba), while maintaining raw spreads and transparent execution.'
    },
    {
      q: 'How long does verification take?',
      a: 'Account verification is typically processed automatically within minutes during regular business hours upon uploading your Proof of Identity and Proof of Address.'
    },
    {
      q: 'Can I change account type later?',
      a: 'Yes, you can open additional account types or contact our support team anytime to switch or adjust your account configuration and leverage.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0a1929] py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white uppercase mb-6">
            TRADING ACCOUNTS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Choose the account that fits your trading style
          </p>
          <div>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm sm:text-base tracking-wide uppercase transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              OPEN ACCOUNT
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
            Flexible Trading Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Engineered for Every Type of Trader
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At P4 Global Market, we provide transparent trading accounts designed to give you an edge across global financial markets. Whether you prefer zero commission trading, razor-thin raw spreads from 0.0 pips, or want to test strategies in a risk-free environment, we have the ideal account for your goals.
          </p>
        </div>
      </section>

      {/* 3. ACCOUNT COMPARISON CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Account Types</h2>
            <p className="text-slate-600">Select the trading conditions that match your capital and strategy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Standard Account */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Standard Account</h3>
                <p className="text-sm text-slate-500 mb-6">Zero commission trading for all market participants</p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="text-4xl font-extrabold text-slate-900">$0</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Commission per lot
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Spreads from:</span>
                    <span className="font-semibold text-slate-900">1.1 pips</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Minimum Deposit:</span>
                    <span className="font-semibold text-slate-900">$10</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Leverage:</span>
                    <span className="font-semibold text-slate-900">Up to 1:500</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Islamic (Swap-Free):</span>
                    <span className="font-semibold text-[#00C853] flex items-center gap-1">
                      <Check className="w-4 h-4" /> Available
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                to="/register?type=standard"
                className="w-full text-center py-3 px-6 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm uppercase tracking-wider transition-all"
              >
                Open Standard Account
              </Link>
            </div>

            {/* Card 2: Pro Account (RECOMMENDED) */}
            <div className="bg-[#0a1929] rounded-2xl border-2 border-[#00C853] p-8 shadow-2xl relative flex flex-col justify-between transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00C853] text-black font-extrabold text-xs uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                RECOMMENDED
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Pro Account</h3>
                <p className="text-sm text-slate-400 mb-6">Direct interbank raw spreads for serious traders</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="text-4xl font-extrabold text-[#00C853]">0.0 pips</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                    Direct Interbank Spread
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Commission:</span>
                    <span className="font-semibold text-white">$3.50 per lot / side</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Minimum Deposit:</span>
                    <span className="font-semibold text-white">$100</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Leverage:</span>
                    <span className="font-semibold text-white">Up to 1:500</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Islamic (Swap-Free):</span>
                    <span className="font-semibold text-[#00C853] flex items-center gap-1">
                      <Check className="w-4 h-4" /> Available
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                to="/register?type=pro"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#00C853]/25"
              >
                Open Pro Account
              </Link>
            </div>

            {/* Card 3: Demo Account */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Demo Account</h3>
                <p className="text-sm text-slate-500 mb-6">100% risk-free simulation on real market feeds</p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="text-4xl font-extrabold text-slate-900">$100,000</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Virtual Balance
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Platform Access:</span>
                    <span className="font-semibold text-slate-900">Full MT5 Access</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Quotes:</span>
                    <span className="font-semibold text-slate-900">Real-time quotes</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Deposit Required:</span>
                    <span className="font-semibold text-[#00C853]">No deposit required</span>
                  </li>
                  <li className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">Activation:</span>
                    <span className="font-semibold text-slate-900">Instant</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/register?demo=true"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-md"
              >
                Try Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED COMPARISON TABLE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Detailed Account Comparison</h2>
            <p className="text-slate-600">A side-by-side view of our specifications and trading features.</p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold">Feature</th>
                  <th className="py-4 px-6 font-bold">Standard</th>
                  <th className="py-4 px-6 font-bold text-[#00C853]">Pro</th>
                  <th className="py-4 px-6 font-bold">Demo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-4 px-6 font-semibold text-slate-800">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-600">{row.standard}</td>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-emerald-50/40">{row.pro}</td>
                    <td className="py-4 px-6 text-slate-600">{row.demo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE P4 GLOBAL MARKET */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Why Choose P4 Global Market</h2>
            <p className="text-slate-600">Institutional-grade infrastructure engineered for speed, safety, and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:border-[#00C853]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW TO OPEN ACCOUNT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Open an Account</h2>
            <p className="text-slate-600">Get up and running in 3 quick, seamless steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center"
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
            <p className="text-slate-600">Got questions? We're here to help.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#00C853] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C853]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Join thousands of traders worldwide and experience the power of MetaTrader 5 with low spreads and lightning execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Open Live Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/register?demo=true"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition-all border border-slate-700"
            >
              Try Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
