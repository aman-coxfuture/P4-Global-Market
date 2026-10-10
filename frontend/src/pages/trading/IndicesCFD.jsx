import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Zap 
} from 'lucide-react';

export default function IndicesCFD() {
  const benefits = [
    {
      icon: Globe,
      title: 'Broad Market Exposure',
      description: 'Gain exposure to entire regional economies with a single position rather than researching and purchasing individual company shares.',
      highlight: 'Complete sector coverage'
    },
    {
      icon: Zap,
      title: 'Competitive Raw Pricing',
      description: 'Trade major world benchmarks like the S&P 500, US30, and NASDAQ with minimal spread markups and zero exchange subscription fees.',
      highlight: 'Zero data fees'
    },
    {
      icon: TrendingUp,
      title: 'Two-Way Market Profitability',
      description: 'Capitalize on macroeconomic trends, interest rate shifts, and earnings season by opening Long or Short positions seamlessly.',
      highlight: 'Long & Short flexibility'
    },
    {
      icon: ShieldCheck,
      title: 'Lower Single-Stock Risk',
      description: 'Diversify away company-specific bankruptcy and earnings catastrophe risk through aggregated index baskets.',
      highlight: 'Diversified index basket'
    }
  ];

  const popularIndices = [
    { symbol: 'US500.cash', name: 'S&P 500 Index', country: 'United States', spread: '0.40 pts', leverage: '1:100' },
    { symbol: 'US100.cash', name: 'NASDAQ 100 Tech', country: 'United States', spread: '0.80 pts', leverage: '1:100' },
    { symbol: 'US30.cash', name: 'Dow Jones Industrial', country: 'United States', spread: '1.50 pts', leverage: '1:100' },
    { symbol: 'GER40.cash', name: 'DAX 40 Index', country: 'Germany', spread: '0.90 pts', leverage: '1:100' },
    { symbol: 'UK100.cash', name: 'FTSE 100 Index', country: 'United Kingdom', spread: '0.80 pts', leverage: '1:100' },
    { symbol: 'JP225.cash', name: 'Nikkei 225', country: 'Japan', spread: '5.0 pts', leverage: '1:100' },
    { symbol: 'AUS200.cash', name: 'ASX 200 Index', country: 'Australia', spread: '1.20 pts', leverage: '1:100' },
  ];

  const hours = [
    { index: 'US Indices (US500, US100, US30)', days: 'Mon – Fri', open: '01:00 GMT', close: '23:15 GMT', session: 'New York Session' },
    { index: 'European Indices (GER40, UK100)', days: 'Mon – Fri', open: '07:00 GMT', close: '21:00 GMT', session: 'European Session' },
    { index: 'Asian Indices (JP225, AUS200)', days: 'Mon – Fri', open: '00:00 GMT', close: '22:00 GMT', session: 'Asia-Pacific Session' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="MARKETS • INDICES"
        title="TRADE INDICES CFDS"
        subtitle="Trade the world's major stock indices with tight spreads"
      />

      {/* What is Indices CFD */}
      <ContentSection heading="What is Indices CFD Trading?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              An equity index measures the performance of a basket of top publicly-traded companies representing a particular economy or industry. For example, the S&P 500 represents the 500 leading publicly traded companies in the United States, while the DAX 40 tracks Germany's largest blue-chip firms.
            </p>
            <p>
              Indices CFD trading allows you to speculate on the overall health and momentum of entire national stock markets without owning the underlying shares of each component company.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Index Trading Specs</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Major World Indices</span>
                <span className="font-bold text-slate-900">US30, US100, US500, GER40</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Target Spreads</span>
                <span className="font-bold text-[#00C853]">From 0.40 pts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Leverage</span>
                <span className="font-bold text-slate-900">Up to 1:100</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Market Commissions</span>
                <span className="font-bold text-[#00C853]">0% on Standard</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection
        bg="bg-slate-50"
        heading="Why Trade Stock Indices with P4 Global Market?"
        subtitle="Harness global economic trends through high-performance index derivatives."
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

      {/* Popular Indices Table */}
      <ContentSection
        heading="Global Benchmark Indices"
        subtitle="Access institutional pricing on leading global market indices."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Symbol</th>
                <th className="py-4 px-6 font-bold">Index Name</th>
                <th className="py-4 px-6 font-bold">Region</th>
                <th className="py-4 px-6 font-bold">Typical Spread</th>
                <th className="py-4 px-6 font-bold">Leverage</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
              {popularIndices.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono text-base">{item.symbol}</td>
                  <td className="py-4 px-6 text-slate-600">{item.name}</td>
                  <td className="py-4 px-6 text-slate-500">{item.country}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold font-mono">{item.spread}</td>
                  <td className="py-4 px-6 font-semibold">{item.leverage}</td>
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
        heading="Index Trading Schedules"
        subtitle="Trade when underlying global stock exchanges are active."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
                <th className="py-3.5 px-6 font-bold">Index Family</th>
                <th className="py-3.5 px-6 font-bold">Days</th>
                <th className="py-3.5 px-6 font-bold">Trading Hours (GMT)</th>
                <th className="py-3.5 px-6 font-bold">Market Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {hours.map((h, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-6 font-bold text-slate-900">{h.index}</td>
                  <td className="py-3.5 px-6">{h.days}</td>
                  <td className="py-3.5 px-6 font-mono font-semibold">{h.open} – {h.close}</td>
                  <td className="py-3.5 px-6 text-slate-500">{h.session}</td>
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
