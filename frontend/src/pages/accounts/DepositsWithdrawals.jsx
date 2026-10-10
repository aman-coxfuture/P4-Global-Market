import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FAQItem from '../../components/FAQItem';
import {
  CreditCard,
  Building2,
  Wallet,
  Bitcoin,
  Globe2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  DollarSign,
  Lock,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

export default function DepositsWithdrawals() {
  const [activeTab, setActiveTab] = useState('deposit');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const depositMethods = [
    {
      name: 'Bank Wire Transfer',
      icon: <Building2 className="w-8 h-8 text-[#00C853]" />,
      time: '1 – 3 Business Days',
      fee: 'No Fee (0%)',
      min: '$50',
      currencies: 'USD, EUR, GBP'
    },
    {
      name: 'Credit / Debit Card (Visa, Mastercard)',
      icon: <CreditCard className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant',
      fee: '2.0% Processing Fee',
      min: '$10',
      currencies: 'USD, EUR, GBP',
      recommended: true
    },
    {
      name: 'Skrill E-Wallet',
      icon: <Wallet className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant',
      fee: 'No Fee (0%)',
      min: '$10',
      currencies: 'USD, EUR, GBP'
    },
    {
      name: 'Neteller E-Wallet',
      icon: <Wallet className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant',
      fee: 'No Fee (0%)',
      min: '$10',
      currencies: 'USD, EUR'
    },
    {
      name: 'Cryptocurrency (BTC, ETH, USDT)',
      icon: <Bitcoin className="w-8 h-8 text-[#00C853]" />,
      time: '15 – 60 Minutes (Network confirmations)',
      fee: 'No Fee (0%)',
      min: '$10 equivalent',
      currencies: 'BTC, ETH, USDT (TRC20/ERC20)',
      recommended: true
    },
    {
      name: 'Local Payment Methods & UPI',
      icon: <Globe2 className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant – 2 Hours',
      fee: 'No Fee (0%)',
      min: '$10',
      currencies: 'INR, AED, MYR, IDR, THB, VND'
    }
  ];

  const withdrawalMethods = [
    {
      name: 'Bank Wire Transfer',
      icon: <Building2 className="w-8 h-8 text-[#00C853]" />,
      time: '24 hrs internal + 1-3 bank days',
      fee: '0% by P4 Global Market',
      min: '$50',
      currencies: 'USD, EUR, GBP'
    },
    {
      name: 'Credit / Debit Card (Refund)',
      icon: <CreditCard className="w-8 h-8 text-[#00C853]" />,
      time: '24 hrs internal + 2-5 card days',
      fee: '0% by P4 Global Market',
      min: '$10',
      currencies: 'USD, EUR, GBP'
    },
    {
      name: 'Skrill E-Wallet',
      icon: <Wallet className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant upon approval (Within 24 hrs)',
      fee: '0% by P4 Global Market',
      min: '$10',
      currencies: 'USD, EUR, GBP'
    },
    {
      name: 'Neteller E-Wallet',
      icon: <Wallet className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant upon approval (Within 24 hrs)',
      fee: '0% by P4 Global Market',
      min: '$10',
      currencies: 'USD, EUR'
    },
    {
      name: 'Cryptocurrency (USDT, BTC, ETH)',
      icon: <Bitcoin className="w-8 h-8 text-[#00C853]" />,
      time: 'Instant upon approval (Within 24 hrs)',
      fee: '0% by P4 Global Market',
      min: '$10 equivalent',
      currencies: 'USDT, BTC, ETH'
    },
    {
      name: 'Local Bank Transfer / UPI',
      icon: <Globe2 className="w-8 h-8 text-[#00C853]" />,
      time: 'Same day (Within 24 hrs)',
      fee: '0% by P4 Global Market',
      min: '$10',
      currencies: 'INR, AED, MYR, IDR, THB, VND'
    }
  ];

  const depositSteps = [
    { num: '1', title: 'Log In to Portal', desc: 'Access your secure P4 Global Market client area.' },
    { num: '2', title: 'Select Deposit Funds', desc: 'Click "Funds Management" > "Deposit" from the sidebar menu.' },
    { num: '3', title: 'Choose Method', desc: 'Pick your preferred gateway (Bank, Card, Crypto, E-Wallet).' },
    { num: '4', title: 'Enter Amount', desc: 'Specify deposit amount (minimum $10) and select trading account.' },
    { num: '5', title: 'Confirm & Trade', desc: 'Complete payment authorization. Your MT5 balance updates instantly.' }
  ];

  const withdrawSteps = [
    { num: '1', title: 'Check Free Margin', desc: 'Ensure you have adequate free equity to cover open trades.' },
    { num: '2', title: 'Select Withdrawal', desc: 'Click "Funds Management" > "Withdrawal" inside client area.' },
    { num: '3', title: 'Select Same Method', desc: 'Select original funding method in compliance with AML regulations.' },
    { num: '4', title: 'Enter Amount', desc: 'Input withdrawal sum (min $10) and destination account details.' },
    { num: '5', title: 'Fast 24-Hour Approval', desc: 'Our finance desk reviews and processes payment within 24 hours.' }
  ];

  const importantNotes = [
    'Minimum deposit: $10 across standard methods ($50 for bank wire).',
    'Minimum withdrawal: $10 across all e-wallets, cards, and crypto.',
    'Withdrawal to same method as deposit in accordance with international Anti-Money Laundering (AML) policies.',
    'KYC identity verification (Proof of ID & Address) is required prior to processing your first withdrawal request.'
  ];

  const faqs = [
    {
      q: 'How long do deposits take to reflect in my trading account?',
      a: 'Credit/debit cards, e-wallets (Skrill, Neteller), and local payment methods credit instantly to your MT5 account. Crypto deposits require 1-3 network blockchain confirmations (usually 15-60 minutes). International bank wire transfers take 1-3 business days.'
    },
    {
      q: 'Are there any fees on deposits or withdrawals?',
      a: 'P4 Global Market does not charge any broker fees on withdrawals (0% broker fee). For deposits, bank wire, crypto, e-wallets, and local gateways are 0% fee, while credit/debit card processing has a standard 2% merchant gateway fee.'
    },
    {
      q: 'Can I withdraw to a different payment method?',
      a: 'In compliance with international AML regulations, withdrawals must be returned back to the original source/channel used for depositing up to the initial deposited sum. Any additional trading profits above your principal can be withdrawn via bank wire, crypto, or supported alternate channels.'
    },
    {
      q: 'What is the minimum withdrawal amount?',
      a: 'The minimum withdrawal amount is $10 for e-wallets, cards, and cryptocurrency. For international bank wire transfers, the minimum withdrawal is $50.'
    },
    {
      q: 'Why is my withdrawal request pending?',
      a: 'All withdrawal requests undergo automated security verification and manual audit by our compliance desk to safeguard client capital. Requests submitted during standard hours are processed within 24 hours.'
    },
    {
      q: 'Do I need to verify my account before requesting a withdrawal?',
      a: 'Yes. To comply with global regulatory standards, all clients must have an approved Proof of Identity (Passport or National ID) and Proof of Address on file before withdrawal disbursement.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="FAST, SECURE & FLEXIBLE"
        title="DEPOSITS & WITHDRAWALS"
        subtitle="Fast, secure, and flexible payment methods — Fund your MT5 account instantly and enjoy guaranteed 24-hour withdrawal processing."
        ctaText="MAKE YOUR FIRST DEPOSIT"
        ctaLink="/register"
        secondaryCtaText="OPEN DEMO ACCOUNT"
        secondaryCtaLink="/accounts/demo-account"
      />

      {/* 2. OVERVIEW HIGHLIGHTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">$10 Min</div>
            <div className="text-sm text-slate-600">Accessible initial funding</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-[#00C853] mb-1">Instant</div>
            <div className="text-sm text-slate-600">Card, E-Wallet & Local Deposits</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">24 Hours</div>
            <div className="text-sm text-slate-600">Fast withdrawal turnaround</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
            <div className="text-3xl font-bold text-[#00C853] mb-1">0% Broker Fee</div>
            <div className="text-sm text-slate-600">On all client withdrawals</div>
          </div>
        </div>
      </section>

      {/* 3. DEPOSIT & WITHDRAWAL METHOD TABS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 mb-6">
              <button
                onClick={() => setActiveTab('deposit')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'deposit'
                    ? 'bg-[#00C853] text-black shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <ArrowDownLeft className="w-4 h-4" />
                Deposit Methods
              </button>
              <button
                onClick={() => setActiveTab('withdrawal')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'withdrawal'
                    ? 'bg-[#00C853] text-black shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <ArrowUpRight className="w-4 h-4" />
                Withdrawal Methods
              </button>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              {activeTab === 'deposit' ? 'Supported Deposit Methods' : 'Supported Withdrawal Methods'}
            </h2>
            <p className="text-slate-600">
              {activeTab === 'deposit'
                ? 'Choose your preferred payment method to fund your MT5 account instantly.'
                : 'Fast and reliable withdrawal execution with zero broker deduction fees.'}
            </p>
          </div>

          {/* Deposit Grid */}
          {activeTab === 'deposit' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {depositMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        {method.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{method.name}</h3>
                    </div>

                    <div className="space-y-2 text-xs py-3 border-y border-slate-100 mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Processing Time:</span>
                        <span className="font-semibold text-slate-900">{method.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Fee:</span>
                        <span className="font-semibold text-slate-900">{method.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Min Deposit:</span>
                        <span className="font-semibold text-[#00C853]">{method.min}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Currencies:</span>
                        <span className="font-medium text-slate-700">{method.currencies}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/register"
                    className="w-full text-center py-2.5 rounded-lg bg-emerald-50 hover:bg-[#00C853] text-[#00C853] hover:text-black font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Deposit Now
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Withdrawal Grid */}
          {activeTab === 'withdrawal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {withdrawalMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        {method.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{method.name}</h3>
                    </div>

                    <div className="space-y-2 text-xs py-3 border-y border-slate-100 mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Processing Time:</span>
                        <span className="font-semibold text-slate-900">{method.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Broker Fee:</span>
                        <span className="font-semibold text-[#00C853]">{method.fee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Min Withdrawal:</span>
                        <span className="font-semibold text-slate-900">{method.min}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Currencies:</span>
                        <span className="font-medium text-slate-700">{method.currencies}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/login"
                    className="w-full text-center py-2.5 rounded-lg bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Request Withdrawal
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. STEP-BY-STEP GUIDES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How to Deposit */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ArrowDownLeft className="w-6 h-6 text-[#00C853]" />
              How to Deposit (5 Steps)
            </h3>
            <div className="space-y-4">
              {depositSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#00C853] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Withdraw */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ArrowUpRight className="w-6 h-6 text-[#00C853]" />
              How to Withdraw (5 Steps)
            </h3>
            <div className="space-y-4">
              {withdrawSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMPORTANT NOTES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Important Payment Policy Notes</h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about deposits, withdrawals, and processing times.</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Make Your First Deposit</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Fund your account with $10 or more using your preferred payment method and start trading within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-[#00C853] hover:bg-[#00b34a] text-black font-bold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-[#00C853]/25"
            >
              Make Your First Deposit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/accounts/demo-account"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition-all border border-slate-700"
            >
              Open Demo Account First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
