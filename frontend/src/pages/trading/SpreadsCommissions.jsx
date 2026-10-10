import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Layers, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

export default function SpreadsCommissions() {
  const accountComparison = [
    { feature: 'Target EUR/USD Spread', standard: '0.8 pips', raw: '0.0 pips', vip: '0.0 pips' },
    { feature: 'Commission per Lot', standard: '$0.00 (Zero Commission)', raw: '$3.50 / side ($7 round)', vip: '$2.00 / side ($4 round)' },
    { feature: 'Min Deposit', standard: '$50', raw: '$200', vip: '$10,000' },
    { feature: 'Max Leverage', standard: '1:500', raw: '1:500', vip: '1:500' },
    { feature: 'Execution Type', standard: 'Market Execution (STP)', raw: 'Direct Market Access (DMA)', rawColor: 'text-blue-600', vip: 'Institutional Bespoke' },
    { feature: 'Swap-Free Option', standard: 'Available (Islamic)', raw: 'Available (Islamic)', vip: 'Available (Islamic)' },
    { feature: 'Expert Advisors (EAs)', standard: 'Allowed', raw: 'Allowed', vip: 'Allowed' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="TRADING CONDITIONS"
        title="SPREADS & COMMISSIONS"
        subtitle="Transparent, Institutional-Grade Pricing with Zero Hidden Fees"
      />

      {/* What is a Spread */}
      <ContentSection heading="Understanding Spreads & Pricing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900">What is a Spread?</h3>
            <p>
              In financial trading, the <strong>spread</strong> is the small difference between the Buy price (Ask) and the Sell price (Bid) of an asset. It represents the primary cost of opening a trade in financial markets.
            </p>
            <p>
              At P4 Global Market, our direct interbank pricing engine aggregates real-time quotes from top-tier institutional liquidity providers, allowing us to offer spreads from <strong>0.0 pips</strong> on major currency pairs like EUR/USD.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900">Fixed vs. Floating Spreads</h3>
            <p>
              <strong>Floating (Variable) Spreads:</strong> P4 Global Market utilizes raw floating spreads that adjust dynamically to real market depth and liquidity. This ensures you always receive the tightest possible market spread during liquid trading hours.
            </p>
            <p>
              <strong>Fixed Spreads:</strong> Spreads that stay identical regardless of market volatility. While predictable, fixed spreads generally incorporate wider markups.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Account Comparison Table */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Account Spreads & Commission Structure"
        subtitle="Choose the account model that aligns with your trading volume and strategy."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Feature</th>
                <th className="py-4 px-6 font-bold">Standard Account</th>
                <th className="py-4 px-6 font-bold text-[#00C853]">Raw Spread Account</th>
                <th className="py-4 px-6 font-bold text-amber-400">VIP Institutional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {accountComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                  <td className="py-4 px-6 text-slate-600">{row.standard}</td>
                  <td className="py-4 px-6 font-bold text-[#00C853] font-mono">{row.raw}</td>
                  <td className="py-4 px-6 font-bold text-amber-600 font-mono">{row.vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Commission Breakdown cards */}
      <ContentSection heading="Why Choose P4 Transparent Pricing?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00C853] flex items-center justify-center font-bold">0%</div>
            <h4 className="text-lg font-bold text-slate-900">Zero Deposit Fees</h4>
            <p className="text-xs text-slate-600 leading-relaxed">P4 Global Market covers all intermediary transaction fees on credit card, e-wallet, and crypto deposits.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">0.0</div>
            <h4 className="text-lg font-bold text-slate-900">Raw Direct Pricing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">No dealing desk intervention or synthetic requotes. You trade on genuine Tier-1 bank order books.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">24h</div>
            <h4 className="text-lg font-bold text-slate-900">Fast Withdrawals</h4>
            <p className="text-xs text-slate-600 leading-relaxed">Enjoy rapid 24-hour withdrawal processing with zero hidden processing charges.</p>
          </div>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
