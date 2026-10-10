import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  HelpCircle, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign,
  Percent,
  Sparkles
} from 'lucide-react';

export default function Accounts() {
  const comparisonRows = [
    { feature: 'Minimum Deposit', standard: '$10', raw: '$100', vip: '$10,000' },
    { feature: 'Spread Markup', standard: 'From 1.1 pips', raw: 'From 0.0 pips (Raw)', vip: 'From 0.0 pips (Raw)' },
    { feature: 'Commission', standard: '$0 / No Commission', raw: '$3.50 per lot / side', vip: '$1.50 per lot / side' },
    { feature: 'Max Leverage', standard: '1:500', raw: '1:500', vip: '1:500' },
    { feature: 'Trading Platforms', standard: 'MT4, MT5, Web', standardRaw: true, raw: 'MT4, MT5, Web', vip: 'MT4, MT5, FIX API' },
    { feature: 'Minimum Lot Size', standard: '0.01 micro-lot', raw: '0.01 micro-lot', vip: '0.01 micro-lot' },
    { feature: 'Execution Type', standard: 'STP Market Execution', raw: 'NDD / Direct Interbank', vip: 'Institutional Liquidity' },
    { feature: 'Islamic Swap-Free Option', standard: 'Available', raw: 'Available', vip: 'Custom Agreement' },
    { feature: 'Dedicated Account Manager', standard: 'Standard Support', raw: 'Priority Support', vip: 'Dedicated 1-on-1 Officer' },
    { feature: 'Free Dedicated VPS', standard: 'On Request', raw: '$500+ balance', vip: 'Included Free' },
  ];

  return (
    <div className="pt-20 sm:pt-22 bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-[#0b172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Trading Account Types
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              Transparent Accounts for Every Trader
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Choose the perfect account structure. Whether you prefer zero commission with all costs in the spread or direct raw market pricing, we provide competitive conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Compare Account Features
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Detailed breakdown of our standard retail and institutional tier parameters.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b172a] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-5 px-6">Account Feature</th>
                  <th className="py-5 px-6">Standard Account</th>
                  <th className="py-5 px-6 text-cyan-300 bg-[#102342]">Raw Spread (Top Pick)</th>
                  <th className="py-5 px-6">VIP Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-800">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-slate-50/50">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-700">{row.standard}</td>
                    <td className="py-4 px-6 font-bold text-blue-900 bg-blue-50/40">{row.raw}</td>
                    <td className="py-4 px-6 text-slate-700">{row.vip}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50">
                  <td className="py-5 px-6 font-bold text-slate-900">Open Account</td>
                  <td className="py-5 px-6">
                    <Link to="/register?type=standard" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs inline-block">
                      Open Standard
                    </Link>
                  </td>
                  <td className="py-5 px-6 bg-blue-50/60">
                    <Link to="/register?type=raw" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs inline-block shadow-md shadow-blue-500/20">
                      Open Raw Spread
                    </Link>
                  </td>
                  <td className="py-5 px-6">
                    <Link to="/contact" className="px-4 py-2 rounded-lg border border-slate-400 hover:border-slate-800 text-slate-800 font-bold text-xs inline-block">
                      Contact VIP Desk
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Deposit & Withdrawal Methods */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">0% Fee Funding & Instant Processing</h3>
            <p className="text-sm text-slate-600 mt-2">
              We never charge deposit or withdrawal fees. Choose from globally accepted funding methods with secure 256-bit encryption.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <span className="text-sm font-bold text-slate-900 block">Credit / Debit Card</span>
              <span className="text-xs text-emerald-600 font-semibold mt-1 block">Instant Deposit</span>
              <span className="text-[11px] text-slate-400">Visa / Mastercard</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <span className="text-sm font-bold text-slate-900 block">Bank Wire Transfer</span>
              <span className="text-xs text-blue-600 font-semibold mt-1 block">Same Day / 24h</span>
              <span className="text-[11px] text-slate-400">USD, EUR, GBP, AUD</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <span className="text-sm font-bold text-slate-900 block">E-Wallets</span>
              <span className="text-xs text-emerald-600 font-semibold mt-1 block">Instant Deposit</span>
              <span className="text-[11px] text-slate-400">Skrill, Neteller, Perfect Money</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
              <span className="text-sm font-bold text-slate-900 block">Cryptocurrencies</span>
              <span className="text-xs text-emerald-600 font-semibold mt-1 block">Instant / 10 Mins</span>
              <span className="text-[11px] text-slate-400">USDT (TRC20/ERC20), BTC, ETH</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
