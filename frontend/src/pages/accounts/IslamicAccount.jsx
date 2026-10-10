import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQItem from '../../components/FAQItem';
import {
  Moon,
  Percent,
  Scale,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Globe2,
  Clock
} from 'lucide-react';

export default function IslamicAccount() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: <Percent className="w-6 h-6 text-[#00C853]" />,
      title: 'Zero Swap Fees',
      desc: 'Positions held overnight across currency pairs, precious metals, and commodities incur zero rollover interest or swap charges.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00C853]" />,
      title: 'No Overnight Interest',
      desc: 'Completely eliminates interest debits and credits (Riba), ensuring full adherence to Islamic jurisprudence.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#00C853]" />,
      title: 'Available on All Account Types',
      desc: 'Activate swap-free status seamlessly on both our Standard (commission-free) and Pro (raw spreads) account configurations.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#00C853]" />,
      title: 'Same Spreads & Leverage',
      desc: 'Enjoy raw spreads from 0.0 pips and leverage up to 1:500 with zero spread widening or artificial markup.'
    },
    {
      icon: <Scale className="w-6 h-6 text-[#00C853]" />,
      title: '100% Halal Trading',
      desc: 'Built in consultation with Islamic finance standards to provide ethical, faith-compliant global market participation.'
    }
  ];

  const faqs = [
    {
      q: 'Is the P4 Global Market Islamic Account truly swap-free?',
      a: 'Yes. Our Islamic account guarantees 0.00 swap fees on overnight positions. We do not credit or debit rollover interest, ensuring total compliance with Sharia law forbidding Riba (interest).'
    },
    {
      q: 'Are there any hidden fees or widened spreads on Islamic accounts?',
      a: 'No. P4 Global Market does not widen spreads or add hidden markups to compensate for the absence of swap. You receive the exact same competitive pricing, deep institutional liquidity, and fast execution speeds as our regular accounts.'
    },
    {
      q: 'Can I trade all instruments on an Islamic account?',
      a: 'Swap-free trading is supported across all major & minor Forex pairs, Spot Metals (Gold, Silver), Energy commodities (Crude Oil, Natural Gas), and major stock indices.'
    },
    {
      q: 'How do I request an Islamic (Swap-Free) account?',
      a: 'Register for an account on P4 Global Market, complete your standard KYC verification, and select the "Swap-Free (Islamic)" option in your client portal dashboard. Alternatively, contact our 24/5 support desk and your status will be enabled within minutes.'
    },
    {
      q: 'Is the Islamic account available for traders worldwide?',
      a: 'Yes, our Islamic swap-free option is accessible to Muslim traders and clients globally who require faith-compliant, interest-free financial market access.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="FAITH-COMPLIANT & ETHICAL"
        title="ISLAMIC ACCOUNT"
        subtitle="Swap-free trading compliant with Sharia law — Trade with zero overnight interest, authentic spreads, and institutional MT5 execution."
        ctaText="OPEN ISLAMIC ACCOUNT"
        ctaLink="/register?type=islamic"
      />

      {/* 2. WHAT IS AN ISLAMIC ACCOUNT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
            Sharia Compliant Trading
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            What is an Islamic (Swap-Free) Account?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            In Islamic finance, paying or receiving interest (<strong className="text-slate-900">Riba</strong>) is strictly prohibited. In standard CFD trading, positions held overnight past market rollover incur interest-based swap fees.
          </p>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The <strong className="text-slate-900">P4 Global Market Islamic Account</strong> completely eliminates swap fees and overnight rollover interest, allowing Muslim investors to trade global Forex, Commodities, and Indices under authentic Sharia principles with the exact same institutional spreads and leverage up to 1:500.
          </p>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Key Features of Islamic Accounts</h2>
            <p className="text-slate-600">Engineered to deliver high-performance execution while upholding Islamic financial ethics.</p>
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

      {/* 4. HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">How the Swap-Free Mechanism Works</h2>
            <p className="text-slate-600">Transparent trading architecture without hidden costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#00C853] text-black font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Open Position</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enter any buy or sell trade on MT5 across Forex, Gold, Oil, or Indices with standard market spreads.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#00C853] text-black font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Overnight Rollover</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When positions remain open past 22:00 GMT, our server applies 0.00 swap charge with zero interest debited.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#00C853] text-black font-extrabold text-lg flex items-center justify-center mb-4 shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Close & Settle</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Close your trade anytime. Your profit/loss is calculated purely from price movements without interest deduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AVAILABLE ACCOUNT TYPES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Available Islamic Account Types</h2>
            <p className="text-slate-600">Choose your preferred spread model with 100% swap-free protection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Islamic Standard */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] mb-2 block">
                  Commission Free
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Islamic Standard</h3>
                <p className="text-sm text-slate-500 mb-6">All-inclusive spreads from 1.1 pips with zero commission</p>

                <ul className="space-y-3 mb-8 text-sm border-t border-b border-slate-100 py-4">
                  <li className="flex justify-between text-slate-700"><span>Overnight Swap:</span><span className="font-bold text-[#00C853]">$0.00 (Zero)</span></li>
                  <li className="flex justify-between text-slate-700"><span>Commission:</span><span className="font-semibold text-slate-900">$0 per lot</span></li>
                  <li className="flex justify-between text-slate-700"><span>Spreads:</span><span className="font-semibold text-slate-900">From 1.1 pips</span></li>
                  <li className="flex justify-between text-slate-700"><span>Min Deposit:</span><span className="font-semibold text-slate-900">$10</span></li>
                  <li className="flex justify-between text-slate-700"><span>Leverage:</span><span className="font-semibold text-slate-900">Up to 1:500</span></li>
                </ul>
              </div>

              <Link
                to="/register?type=islamic-standard"
                className="w-full text-center py-3 px-6 rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm uppercase tracking-wider transition-all"
              >
                Open Islamic Standard
              </Link>
            </div>

            {/* Islamic Pro */}
            <div className="bg-[#0a1929] rounded-2xl border-2 border-[#00C853] p-8 shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 right-6 bg-[#00C853] text-black font-extrabold text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                Raw Spreads
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] mb-2 block">
                  Direct Interbank
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Islamic Pro</h3>
                <p className="text-sm text-slate-400 mb-6">Raw spreads from 0.0 pips for active & algorithmic traders</p>

                <ul className="space-y-3 mb-8 text-sm border-t border-b border-slate-800 py-4">
                  <li className="flex justify-between text-slate-300"><span>Overnight Swap:</span><span className="font-bold text-[#00C853]">$0.00 (Zero)</span></li>
                  <li className="flex justify-between text-slate-300"><span>Commission:</span><span className="font-semibold text-white">$3.50 / lot / side</span></li>
                  <li className="flex justify-between text-slate-300"><span>Spreads:</span><span className="font-semibold text-[#00C853]">From 0.0 pips</span></li>
                  <li className="flex justify-between text-slate-300"><span>Min Deposit:</span><span className="font-semibold text-white">$100</span></li>
                  <li className="flex justify-between text-slate-300"><span>Leverage:</span><span className="font-semibold text-white">Up to 1:500</span></li>
                </ul>
              </div>

              <Link
                to="/register?type=islamic-pro"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#00C853]/25"
              >
                Open Islamic Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our Islamic swap-free terms.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Halal CFD Trading Today</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Experience 100% swap-free trading with raw interbank pricing and lightning execution on MetaTrader 5.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register?type=islamic"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Open Islamic Account
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
