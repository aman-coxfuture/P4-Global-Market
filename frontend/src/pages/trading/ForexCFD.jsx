import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Globe2, 
  DollarSign, 
  BarChart3 
} from 'lucide-react';

export default function ForexCFD() {
  const benefits = [
    {
      icon: Zap,
      title: 'Raw Spreads from 0.0 Pips',
      description: 'Access institutional pricing directly from Tier-1 liquidity providers with ultra-tight spreads on EUR/USD, GBP/USD, and 50+ currency pairs.',
      highlight: 'Institutional pricing'
    },
    {
      icon: Clock,
      title: '24/5 Global Market Access',
      description: 'Trade around the clock from Sunday 22:00 GMT to Friday 22:00 GMT as global sessions rotate between Sydney, Tokyo, London, and New York.',
      highlight: 'Continuous trading'
    },
    {
      icon: TrendingUp,
      title: 'High Liquidity & Fast Execution',
      description: 'Benefit from massive daily trading volumes ensuring seamless execution speed under 30ms with zero requotes or dealing desk intervention.',
      highlight: '< 30ms latency'
    },
    {
      icon: Layers,
      title: 'Flexible Leverage up to 1:500',
      description: 'Optimize your trading potential and exposure with flexible leverage tailored to your risk management strategy and account tier.',
      highlight: 'Up to 1:500 leverage'
    }
  ];

  const popularPairs = [
    { pair: 'EUR/USD', name: 'Euro vs US Dollar', spread: '0.0 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'GBP/USD', name: 'British Pound vs US Dollar', spread: '0.2 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'USD/JPY', name: 'US Dollar vs Japanese Yen', spread: '0.1 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'AUD/USD', name: 'Australian Dollar vs US Dollar', spread: '0.3 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'USD/CAD', name: 'US Dollar vs Canadian Dollar', spread: '0.4 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'USD/CHF', name: 'US Dollar vs Swiss Franc', spread: '0.3 pips', leverage: '1:500', minTrade: '0.01 Lot' },
    { pair: 'NZD/USD', name: 'New Zealand Dollar vs US Dollar', spread: '0.5 pips', leverage: '1:500', minTrade: '0.01 Lot' },
  ];

  const sessions = [
    { city: 'Sydney', timezone: 'GMT+10', open: '22:00 GMT', close: '07:00 GMT', status: 'Pacific Session' },
    { city: 'Tokyo', timezone: 'GMT+9', open: '00:00 GMT', close: '09:00 GMT', status: 'Asian Session' },
    { city: 'London', timezone: 'GMT+0', open: '08:00 GMT', close: '17:00 GMT', status: 'European Session' },
    { city: 'New York', timezone: 'GMT-5', open: '13:00 GMT', close: '22:00 GMT', status: 'US Session' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <PageHero
        badge="MARKETS • FOREX"
        title="TRADE FOREX CFDS"
        subtitle="Access The World's Most Liquid Market With Spreads From 0.0 pips For All Currency Pairs"
      />

      {/* What is Forex CFD */}
      <ContentSection heading="What is Forex CFD Trading?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Forex (Foreign Exchange) CFD trading allows investors to speculate on the price movements of global currency pairs without taking physical delivery of the currencies. When trading a CFD (Contract for Difference), you agree to exchange the price difference of a currency pair between when the contract opens and closes.
            </p>
            <p>
              Whether markets are rising or falling, Forex CFDs give you the agility to go <strong>Long (Buy)</strong> if you expect a currency to strengthen or go <strong>Short (Sell)</strong> if you anticipate a decline. With P4 Global Market, you trade in an institutional execution environment with segregated client funds.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Forex Trading Overview</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Daily Market Volume</span>
                <span className="font-bold text-slate-900">$7.5+ Trillion</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Available Pairs</span>
                <span className="font-bold text-slate-900">50+ Major, Minor, Exotic</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Spreads</span>
                <span className="font-bold text-[#00C853]">From 0.0 Pips</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Execution Engine</span>
                <span className="font-bold text-slate-900">MetaTrader 4 / 5</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Why Trade Forex CFDs (4 benefit cards) */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Why Trade Forex CFDs with P4 Global Market?"
        subtitle="Experience superior trading infrastructure built for retail, professional, and institutional traders."
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

      {/* Popular Currency Pairs Table */}
      <ContentSection
        heading="Popular Currency Pairs & Spreads"
        subtitle="Competitive pricing with raw market spreads on major forex instruments."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Currency Pair</th>
                <th className="py-4 px-6 font-bold">Instrument Name</th>
                <th className="py-4 px-6 font-bold">Raw Spread</th>
                <th className="py-4 px-6 font-bold">Max Leverage</th>
                <th className="py-4 px-6 font-bold">Min Trade Size</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
              {popularPairs.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono text-base">{item.pair}</td>
                  <td className="py-4 px-6 text-slate-600">{item.name}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold font-mono">{item.spread}</td>
                  <td className="py-4 px-6 font-semibold">{item.leverage}</td>
                  <td className="py-4 px-6 text-slate-500">{item.minTrade}</td>
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

      {/* Trading Hours */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Global Forex Trading Sessions"
        subtitle="Forex markets operate 24 hours a day, 5 days a week across major global financial hubs."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-slate-900">{s.city}</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold">{s.timezone}</span>
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{s.status}</div>
              <div className="pt-2 border-t border-slate-100 flex justify-between text-sm">
                <span className="text-slate-500">Hours:</span>
                <span className="font-bold text-slate-900 font-mono">{s.open} – {s.close}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
