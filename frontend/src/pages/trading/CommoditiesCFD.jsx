import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Flame, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  BarChart2, 
  Zap 
} from 'lucide-react';

export default function CommoditiesCFD() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Hedge Against Inflation',
      description: 'Commodities like Gold (XAU/USD) and Silver (XAG/USD) historically serve as safe-haven assets during market volatility and rising inflation.',
      highlight: 'Safe-haven assets'
    },
    {
      icon: Zap,
      title: 'Zero Physical Storage Costs',
      description: 'Trade energy and precious metal price differentials directly without handling physical bullion, barrels, or storage contracts.',
      highlight: 'No storage hassle'
    },
    {
      icon: DollarSign,
      title: 'Deep Liquidity & Raw Spreads',
      description: 'Benefit from institutional market depth with fractional lot sizing and ultra-tight spreads on WTI Oil, Brent, and Natural Gas.',
      highlight: 'Fractional sizing'
    },
    {
      icon: ShieldCheck,
      title: 'Long & Short Flexibility',
      description: 'Capitalize on macroeconomic demand and supply cycles by going Long in bull markets or Shorting commodity downturns.',
      highlight: 'Two-way trading'
    }
  ];

  const popularCommodities = [
    { symbol: 'XAU/USD', name: 'Gold Spot vs US Dollar', category: 'Precious Metals', spread: '0.10 pips', leverage: '1:200' },
    { symbol: 'XAG/USD', name: 'Silver Spot vs US Dollar', category: 'Precious Metals', spread: '0.02 pips', leverage: '1:100' },
    { symbol: 'USOIL.cash', name: 'WTI Crude Oil Spot', category: 'Energies', spread: '0.03 pts', leverage: '1:100' },
    { symbol: 'UKOIL.cash', name: 'Brent Crude Oil Spot', category: 'Energies', spread: '0.03 pts', leverage: '1:100' },
    { symbol: 'NATGAS.cash', name: 'US Natural Gas Spot', category: 'Energies', spread: '0.005 pts', leverage: '1:50' },
    { symbol: 'XPT/USD', name: 'Platinum Spot vs USD', category: 'Precious Metals', spread: '0.45 pips', leverage: '1:50' },
  ];

  const hours = [
    { asset: 'Gold & Silver (XAU, XAG)', days: 'Mon – Fri', open: '01:00 GMT', close: '23:59 GMT', breakTime: '22:00 – 23:00 GMT' },
    { asset: 'WTI & Brent Crude Oil', days: 'Mon – Fri', open: '01:00 GMT', close: '23:59 GMT', breakTime: '22:00 – 23:00 GMT' },
    { asset: 'Natural Gas (NGAS)', days: 'Mon – Fri', open: '01:00 GMT', close: '23:59 GMT', breakTime: '22:00 – 23:00 GMT' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="MARKETS • COMMODITIES"
        title="TRADE COMMODITIES CFDS"
        subtitle="Trade Gold, Silver, Oil, and more with competitive spreads"
      />

      {/* What is Commodities CFD */}
      <ContentSection heading="What is Commodities CFD Trading?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Commodity CFDs allow you to participate in the price fluctuations of essential global raw materials—including energies (Crude Oil, Natural Gas) and precious metals (Gold, Silver, Platinum)—without taking physical delivery or owning the underlying goods.
            </p>
            <p>
              Commodity prices are driven by global supply and demand dynamics, geopolitical tensions, and macroeconomic shifts. With P4 Global Market, you can speculate on these real-time price trends with transparent low spreads and flexible leverage.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Commodity Market Highlights</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Asset Categories</span>
                <span className="font-bold text-slate-900">Precious Metals & Energies</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Gold (XAU/USD) Spread</span>
                <span className="font-bold text-[#00C853]">From 0.10 Pips</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Leverage</span>
                <span className="font-bold text-slate-900">Up to 1:200</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Trading Terminals</span>
                <span className="font-bold text-slate-900">MT4 & MT5 (Desktop/Mobile)</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection
        bg="bg-slate-50"
        heading="Key Advantages of Trading Commodities"
        subtitle="Diversify your portfolio with high liquidity commodities."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <BenefitCard
              key={idx}
              icon={b.icon}
              title={b.title}
              description={b.description}
              highlight={b.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* Popular Commodities Table */}
      <ContentSection
        heading="Popular Commodity Instruments"
        subtitle="Trade the world's most vital energy and metal markets."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Symbol</th>
                <th className="py-4 px-6 font-bold">Commodity Name</th>
                <th className="py-4 px-6 font-bold">Category</th>
                <th className="py-4 px-6 font-bold">Raw Spread</th>
                <th className="py-4 px-6 font-bold">Max Leverage</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
              {popularCommodities.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono text-base">{c.symbol}</td>
                  <td className="py-4 px-6 text-slate-600">{c.name}</td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      {c.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[#00C853] font-bold font-mono">{c.spread}</td>
                  <td className="py-4 px-6 font-semibold">{c.leverage}</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      to="/register"
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-black bg-[#00C853] hover:bg-[#00e660] transition-colors"
                    >
                      Trade
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Trading Hours Table */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Commodity Trading Hours"
        subtitle="Review exact trading sessions and daily breaks across our commodity offerings."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                <th className="py-3.5 px-6 font-bold">Asset Group</th>
                <th className="py-3.5 px-6 font-bold">Trading Days</th>
                <th className="py-3.5 px-6 font-bold">Open Time (GMT)</th>
                <th className="py-3.5 px-6 font-bold">Close Time (GMT)</th>
                <th className="py-3.5 px-6 font-bold">Daily Break</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {hours.map((h, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-6 font-bold text-slate-900">{h.asset}</td>
                  <td className="py-3.5 px-6">{h.days}</td>
                  <td className="py-3.5 px-6 font-mono font-semibold">{h.open}</td>
                  <td className="py-3.5 px-6 font-mono font-semibold">{h.close}</td>
                  <td className="py-3.5 px-6 text-slate-500 font-mono">{h.breakTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
