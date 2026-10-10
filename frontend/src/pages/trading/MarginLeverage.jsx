import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Layers, 
  Zap, 
  HelpCircle, 
  TrendingUp 
} from 'lucide-react';

export default function MarginLeverage() {
  const leverageTable = [
    { assetClass: 'Forex Major Currency Pairs', maxLeverage: '1:500', marginRequired: '0.20%', minStopOut: '50%' },
    { assetClass: 'Forex Minor & Exotic Pairs', maxLeverage: '1:200', marginRequired: '0.50%', minStopOut: '50%' },
    { assetClass: 'Spot Gold & Precious Metals', maxLeverage: '1:200', marginRequired: '0.50%', minStopOut: '50%' },
    { assetClass: 'Spot Crude Oil & Energies', maxLeverage: '1:100', marginRequired: '1.00%', minStopOut: '50%' },
    { assetClass: 'Major Stock Indices (US30, US500, GER40)', maxLeverage: '1:100', marginRequired: '1.00%', minStopOut: '50%' },
    { assetClass: 'Global Share CFDs (US / EU / UK)', maxLeverage: '1:20', marginRequired: '5.00%', minStopOut: '50%' },
    { assetClass: 'Cryptocurrency CFDs (BTC, ETH)', maxLeverage: '1:20', marginRequired: '5.00%', minStopOut: '50%' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="TRADING CONDITIONS"
        title="MARGIN & LEVERAGE"
        subtitle="Maximize Your Trading Capital with Dynamic, Flexible Leverage"
      />

      {/* What is Margin & Leverage */}
      <ContentSection heading="Understanding Margin & Leverage">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">What is Leverage?</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>Leverage</strong> is the ability to control a substantially larger position value in financial markets with a relatively small initial cash deposit.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              For example, with a leverage of <strong>1:500</strong>, a $200 deposit gives you the purchasing power to open a $100,000 position in the currency market. While leverage amplifies potential gains, it also proportionately magnifies risks.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">What is Margin & Margin Call?</h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>Margin</strong> is the collateral balance required by the broker to keep an open leveraged position.
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>Margin Call (80%):</strong> If your account equity falls below 80% of required margin, a warning notice is sent.<br />
              <strong>Stop Out (50%):</strong> If account equity drops to 50% of required margin, positions are systematically liquidated to protect against negative balances.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Leverage by Asset Class Table */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Leverage & Margin Requirements by Asset Class"
        subtitle="Review max leverage and margin parameters across our tradable market categories."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Asset Class</th>
                <th className="py-4 px-6 font-bold text-[#00C853]">Max Leverage</th>
                <th className="py-4 px-6 font-bold">Margin Required (%)</th>
                <th className="py-4 px-6 font-bold">Stop Out Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {leverageTable.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{item.assetClass}</td>
                  <td className="py-4 px-6 font-bold text-[#00C853] font-mono text-base">{item.maxLeverage}</td>
                  <td className="py-4 px-6 font-mono text-slate-600">{item.marginRequired}</td>
                  <td className="py-4 px-6 text-slate-600">{item.minStopOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Prominent Risk Warning Box */}
      <ContentSection>
        <div className="bg-rose-50 border-2 border-rose-300 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-rose-700 font-bold text-lg">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <span>High-Risk Warning on Leveraged Products</span>
          </div>
          <p className="text-sm sm:text-base text-rose-900 leading-relaxed">
            Trading Contracts for Difference (CFDs) and leveraged financial instruments carries a high degree of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You should never invest money that you cannot afford to lose.
          </p>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
