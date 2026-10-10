import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Building2, 
  Percent, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Zap 
} from 'lucide-react';

export default function SharesCFD() {
  const benefits = [
    {
      icon: Percent,
      title: 'Zero Commission Trading',
      description: 'Trade leading US, European, and UK corporate equities with 0% broker commission on our Standard trading accounts.',
      highlight: '0% commission'
    },
    {
      icon: DollarSign,
      title: 'Fractional Share Sizing',
      description: 'Invest in high-value tech giants like Apple, Amazon, and Tesla with flexible micro contract sizing that suits your capital.',
      highlight: 'Micro lot sizes'
    },
    {
      icon: TrendingUp,
      title: 'Long & Short Capabilities',
      description: 'Profit from quarterly earnings releases, corporate announcements, and market downturns by going short as easily as going long.',
      highlight: 'Two-way trading'
    },
    {
      icon: Award,
      title: 'Dividend Adjustments',
      description: 'Receive dividend credit adjustments directly on your cash account for Long share CFD positions held past the ex-dividend date.',
      highlight: 'Dividend credits'
    }
  ];

  const popularShares = [
    { ticker: 'AAPL.us', name: 'Apple Inc.', sector: 'Technology', spread: '0.05 pts', leverage: '1:20' },
    { ticker: 'TSLA.us', name: 'Tesla Inc.', sector: 'Automotive / EV', spread: '0.08 pts', leverage: '1:20' },
    { ticker: 'AMZN.us', name: 'Amazon.com Inc.', sector: 'Consumer Cyclical', spread: '0.06 pts', leverage: '1:20' },
    { ticker: 'NVDA.us', name: 'NVIDIA Corporation', sector: 'Semiconductors / AI', spread: '0.10 pts', leverage: '1:20' },
    { ticker: 'MSFT.us', name: 'Microsoft Corporation', sector: 'Software & Cloud', spread: '0.05 pts', leverage: '1:20' },
    { ticker: 'GOOGL.us', name: 'Alphabet Inc. (Google)', sector: 'Interactive Media', spread: '0.06 pts', leverage: '1:20' },
    { ticker: 'META.us', name: 'Meta Platforms Inc.', sector: 'Social Media / VR', spread: '0.08 pts', leverage: '1:20' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="MARKETS • SHARES"
        title="TRADE SHARES CFDS"
        subtitle="Trade global stocks with zero commission"
      />

      {/* What is Shares CFD */}
      <ContentSection heading="What is Shares CFD Trading?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Stock CFDs allow you to speculate on the real-time share price movements of the world's most prominent corporations (such as Apple, Microsoft, NVIDIA, and Tesla) without having to buy and hold the physical stock certificate.
            </p>
            <p>
              When you trade equities via CFDs with P4 Global Market, you gain leverage, rapid trade execution, and the flexibility to open short sell positions during market pullbacks or earnings disappointments.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Share CFD Conditions</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Equities Available</span>
                <span className="font-bold text-slate-900">100+ US & Global Stocks</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Commission</span>
                <span className="font-bold text-[#00C853]">0% Broker Commission</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Leverage</span>
                <span className="font-bold text-slate-900">Up to 1:20</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Dividends</span>
                <span className="font-bold text-slate-900">Cash credited on Longs</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection
        bg="bg-slate-50"
        heading="Why Trade Stock CFDs with P4 Global Market?"
        subtitle="Uncompromising speed, zero commission, and institutional stock market access."
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

      {/* Popular Shares Table */}
      <ContentSection
        heading="Top Global Stocks"
        subtitle="Trade the world's most actively traded technology and corporate giants."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Ticker</th>
                <th className="py-4 px-6 font-bold">Company Name</th>
                <th className="py-4 px-6 font-bold">Sector</th>
                <th className="py-4 px-6 font-bold">Target Spread</th>
                <th className="py-4 px-6 font-bold">Leverage</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
              {popularShares.map((s, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono text-base">{s.ticker}</td>
                  <td className="py-4 px-6 text-slate-700">{s.name}</td>
                  <td className="py-4 px-6 text-slate-500">{s.sector}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold font-mono">{s.spread}</td>
                  <td className="py-4 px-6 font-semibold">{s.leverage}</td>
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
        heading="Share Market Trading Hours"
        subtitle="Stock CFDs trade alongside their corresponding home stock exchange schedules."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-lg font-bold text-slate-900">US Shares (NASDAQ / NYSE)</h4>
            <p className="text-xs text-slate-500">Apple, Tesla, Amazon, Microsoft, NVIDIA, Meta</p>
            <div className="pt-2 text-sm font-mono font-bold text-slate-800">14:30 – 21:00 GMT (Mon–Fri)</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-lg font-bold text-slate-900">European Shares (Xetra / Euronext)</h4>
            <p className="text-xs text-slate-500">BMW, SAP, Siemens, LVMH, TotalEnergies</p>
            <div className="pt-2 text-sm font-mono font-bold text-slate-800">08:00 – 16:30 GMT (Mon–Fri)</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-lg font-bold text-slate-900">UK Shares (LSE)</h4>
            <p className="text-xs text-slate-500">Barclays, BP, Shell, HSBC, AstraZeneca</p>
            <div className="pt-2 text-sm font-mono font-bold text-slate-800">08:00 – 16:30 GMT (Mon–Fri)</div>
          </div>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
