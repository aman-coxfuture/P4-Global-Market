import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  BarChart2, 
  ArrowRight, 
  Check, 
  Clock, 
  Layers,
  Zap
} from 'lucide-react';

export default function Trading() {
  const [activeCategory, setActiveCategory] = useState('forex');

  const tradingData = {
    forex: [
      { pair: 'EUR/USD', desc: 'Euro vs US Dollar', minSpread: '0.0', typicalSpread: '0.1', leverage: '1:500', digits: 5 },
      { pair: 'GBP/USD', desc: 'Great British Pound vs USD', minSpread: '0.1', typicalSpread: '0.3', leverage: '1:500', digits: 5 },
      { pair: 'USD/JPY', desc: 'US Dollar vs Japanese Yen', minSpread: '0.1', typicalSpread: '0.3', leverage: '1:500', digits: 3 },
      { pair: 'AUD/USD', desc: 'Australian Dollar vs USD', minSpread: '0.1', typicalSpread: '0.2', leverage: '1:500', digits: 5 },
      { pair: 'USD/CAD', desc: 'US Dollar vs Canadian Dollar', minSpread: '0.2', typicalSpread: '0.4', leverage: '1:500', digits: 5 },
      { pair: 'USD/CHF', desc: 'US Dollar vs Swiss Franc', minSpread: '0.2', typicalSpread: '0.4', leverage: '1:500', digits: 5 },
      { pair: 'NZD/USD', desc: 'New Zealand Dollar vs USD', minSpread: '0.3', typicalSpread: '0.5', leverage: '1:500', digits: 5 },
      { pair: 'EUR/GBP', desc: 'Euro vs British Pound', minSpread: '0.3', typicalSpread: '0.6', leverage: '1:500', digits: 5 },
    ],
    metals: [
      { pair: 'XAU/USD', desc: 'Gold Spot vs US Dollar', minSpread: '0.08', typicalSpread: '0.12', leverage: '1:200', digits: 2 },
      { pair: 'XAG/USD', desc: 'Silver Spot vs US Dollar', minSpread: '0.01', typicalSpread: '0.02', leverage: '1:100', digits: 3 },
      { pair: 'XPT/USD', desc: 'Platinum vs US Dollar', minSpread: '0.20', typicalSpread: '0.35', leverage: '1:50', digits: 2 },
      { pair: 'XPD/USD', desc: 'Palladium vs US Dollar', minSpread: '0.50', typicalSpread: '0.80', leverage: '1:50', digits: 2 },
    ],
    indices: [
      { pair: 'US30', desc: 'Wall Street 30 Index', minSpread: '1.0', typicalSpread: '1.5', leverage: '1:200', digits: 1 },
      { pair: 'NAS100', desc: 'US Tech 100 Index', minSpread: '0.6', typicalSpread: '0.8', leverage: '1:200', digits: 1 },
      { pair: 'SPX500', desc: 'US 500 Index', minSpread: '0.2', typicalSpread: '0.3', leverage: '1:200', digits: 2 },
      { pair: 'GER40', desc: 'Germany 40 Index', minSpread: '0.8', typicalSpread: '1.2', leverage: '1:200', digits: 1 },
      { pair: 'UK100', desc: 'UK 100 Index', minSpread: '1.0', typicalSpread: '1.4', leverage: '1:200', digits: 1 },
    ],
    commodities: [
      { pair: 'USOIL', desc: 'WTI Crude Oil', minSpread: '0.02', typicalSpread: '0.03', leverage: '1:100', digits: 2 },
      { pair: 'UKOIL', desc: 'Brent Crude Oil', minSpread: '0.02', typicalSpread: '0.03', leverage: '1:100', digits: 2 },
      { pair: 'NGAS', desc: 'Natural Gas', minSpread: '0.005', typicalSpread: '0.008', leverage: '1:50', digits: 3 },
      { pair: 'COPPER', desc: 'High Grade Copper', minSpread: '0.002', typicalSpread: '0.004', leverage: '1:50', digits: 4 },
    ],
    crypto: [
      { pair: 'BTC/USD', desc: 'Bitcoin vs US Dollar', minSpread: '4.0', typicalSpread: '6.0', leverage: '1:20', digits: 2 },
      { pair: 'ETH/USD', desc: 'Ethereum vs US Dollar', minSpread: '0.4', typicalSpread: '0.6', leverage: '1:20', digits: 2 },
      { pair: 'SOL/USD', desc: 'Solana vs US Dollar', minSpread: '0.15', typicalSpread: '0.25', leverage: '1:20', digits: 2 },
      { pair: 'XRP/USD', desc: 'Ripple vs US Dollar', minSpread: '0.001', typicalSpread: '0.002', leverage: '1:20', digits: 4 },
    ]
  };

  return (
    <div className="pt-20 sm:pt-22 bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0b172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Trading Instruments & Conditions
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              Trade Over 500+ Global Markets
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Benefit from tier-1 institutional liquidity, ultra-tight spreads from 0.0 pips, and flexible leverage up to 1:500 with zero price manipulation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter & Table Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category selector */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 mb-8">
          {[
            { id: 'forex', label: 'Forex (50+ Pairs)' },
            { id: 'metals', label: 'Precious Metals' },
            { id: 'indices', label: 'Stock Indices' },
            { id: 'commodities', label: 'Energies & Commodities' },
            { id: 'crypto', label: 'Cryptocurrencies' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Contract Specs Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b172a] text-white text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Symbol</th>
                  <th className="py-4 px-6">Description</th>
                  <th className="py-4 px-6">Min Spread (Raw)</th>
                  <th className="py-4 px-6">Typical Spread</th>
                  <th className="py-4 px-6">Max Leverage</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-800">
                {tradingData[activeCategory].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.pair}</td>
                    <td className="py-4 px-6 text-slate-600 text-xs">{row.desc}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-xs">
                        {row.minSpread} pips
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-mono text-xs">{row.typicalSpread} pips</td>
                    <td className="py-4 px-6 font-semibold text-slate-800">{row.leverage}</td>
                    <td className="py-4 px-6 text-right">
                      <Link
                        to="/register"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
                      >
                        <span>Trade Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trading Conditions Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Equinix NY4 & LD4 Latency
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our trading servers are collocated in top financial data centres in New York and London for instantaneous sub-30 millisecond trade execution.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Negative Balance Protection
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All retail client accounts are protected against negative balances. You can never lose more capital than your total deposited balance.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              No Restrictions on EAs & Scalping
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Trade without arbitrary limits. We welcome high-frequency scalpers, hedging strategies, news traders, and automated trading algorithms.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
