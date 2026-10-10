import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Check, 
  X, 
  HelpCircle, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

export default function MT4vsMT5() {
  const comparison = [
    { feature: 'Primary Target Markets', mt4: 'Forex & Precious Metals', mt5: 'Forex, Stocks, Commodities, Indices, Crypto' },
    { feature: 'Timeframes', mt4: '9 Timeframes', mt5: '21 Timeframes', highlight: true },
    { feature: 'Technical Indicators', mt4: '30 Pre-installed', mt5: '38 Pre-installed (plus hundreds in Market)' },
    { feature: 'Graphical / Analytical Objects', mt4: '31 Objects', mt5: '44 Objects' },
    { feature: 'Pending Order Types', mt4: '4 Types (Limit / Stop)', mt5: '6 Types (Includes Stop Limit)', highlight: true },
    { feature: 'Order Execution Modes', mt4: '3 Modes', mt5: '4 Modes (Exchange execution supported)' },
    { feature: 'Depth of Market (DOM)', mt4: 'Not Available', mt5: 'Full Level II Market Depth', highlight: true },
    { feature: 'Built-in Economic Calendar', mt4: 'No (External required)', mt5: 'Yes (Live macroeconomic feed)', highlight: true },
    { feature: 'Strategy Tester', mt4: 'Single-thread, single-currency', mt5: 'Multi-threaded, multi-currency cloud engine', highlight: true },
    { feature: 'Programming Language', mt4: 'MQL4', mt5: 'MQL5 (Object-oriented, C++ syntax)' },
    { feature: 'Partial Order Filling Policy', mt4: 'Fill or Kill only', mt5: 'Fill or Kill, Immediate or Cancel, Return' },
    { feature: 'Embedded Community Chat & Transfer', mt4: 'No', mt5: 'Yes (MQL5.community integration)' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="PLATFORM COMPARISON"
        title="MT4 VS MT5"
        subtitle="Compare MetaTrader 4 and MetaTrader 5 to Choose the Best Platform for Your Strategy"
      />

      {/* Comparison Table */}
      <ContentSection 
        heading="Side-by-Side Platform Breakdown"
        subtitle="Review technical specifications and trading capabilities across both platforms."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold w-1/3">Feature / Capability</th>
                <th className="py-4 px-6 font-bold w-1/3">MetaTrader 4 (MT4)</th>
                <th className="py-4 px-6 font-bold w-1/3 text-[#00C853]">MetaTrader 5 (MT5)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {comparison.map((row, idx) => (
                <tr key={idx} className={`hover:bg-slate-50 transition-colors ${row.highlight ? 'bg-blue-50/40' : ''}`}>
                  <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                  <td className="py-4 px-6 text-slate-600">{row.mt4}</td>
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono">
                    <span className={row.highlight ? 'text-blue-700' : ''}>{row.mt5}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Which one to choose guide */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Which Platform Should You Choose?"
        subtitle="Tailor your platform choice to your asset classes, algorithmic tools, and trading style."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MT4 Recommendation */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
              Best for Pure Forex & Established EAs
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Choose MetaTrader 4 If:</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You primarily trade Forex currency pairs and gold.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You already own legacy Expert Advisors or custom indicators built specifically for MQL4.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You appreciate an established, lightweight interface with simple order management.</span>
              </li>
            </ul>
            <div className="pt-3">
              <Link
                to="/platforms/mt4"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Learn more about MT4</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* MT5 Recommendation */}
          <div className="bg-white p-8 rounded-3xl border border-blue-200 shadow-sm space-y-4 relative">
            <div className="absolute -top-3 right-6 bg-[#00C853] text-black font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Recommended
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C853] bg-emerald-50 px-3 py-1 rounded-full inline-block">
              Best for Multi-Asset & Next-Gen Strategy
            </span>
            <h3 className="text-2xl font-bold text-slate-900">Choose MetaTrader 5 If:</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You want to trade Stocks, Indices, Commodities, and Crypto alongside Forex.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You require built-in Depth of Market (Level II) and an integrated economic calendar.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span>You backtest multi-currency trading robots using fast multi-threaded computing.</span>
              </li>
            </ul>
            <div className="pt-3">
              <Link
                to="/platforms/mt5"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>Learn more about MT5</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
