import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Coins, 
  Clock, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Lock 
} from 'lucide-react';

export default function CryptoCFD() {
  const benefits = [
    {
      icon: Clock,
      title: '24/7/365 Continuous Trading',
      description: 'Crypto markets never sleep. Trade Bitcoin, Ethereum, and major altcoins 24 hours a day, 7 days a week, including weekends.',
      highlight: '365 days a year'
    },
    {
      icon: Lock,
      title: 'No Crypto Wallet Required',
      description: 'Avoid the risk of lost private keys, exchange hacks, and blockchain transaction fees. Trade regulated derivatives securely on MT5.',
      highlight: 'No custody risk'
    },
    {
      icon: TrendingUp,
      title: 'Long & Short Flexibility',
      description: 'Capitalize on crypto market volatility in both directions. Short sell tokens during market downturns or ride bull runs with leverage.',
      highlight: 'Long & short'
    },
    {
      icon: Zap,
      title: 'Competitive Leverage & Tight Spreads',
      description: 'Maximize trading efficiency with leverage up to 1:20 and ultra-tight spreads on BTC/USD, ETH/USD, and top cryptocurrencies.',
      highlight: 'Up to 1:20 leverage'
    }
  ];

  const popularCryptos = [
    { symbol: 'BTC/USD', name: 'Bitcoin vs US Dollar', spread: '$15.00', leverage: '1:20', minLot: '0.01' },
    { symbol: 'ETH/USD', name: 'Ethereum vs US Dollar', spread: '$1.20', leverage: '1:20', minLot: '0.01' },
    { symbol: 'SOL/USD', name: 'Solana vs US Dollar', spread: '$0.15', leverage: '1:10', minLot: '0.1' },
    { symbol: 'XRP/USD', name: 'Ripple vs US Dollar', spread: '$0.002', leverage: '1:10', minLot: '1.0' },
    { symbol: 'BNB/USD', name: 'Binance Coin vs US Dollar', spread: '$0.40', leverage: '1:10', minLot: '0.01' },
    { symbol: 'ADA/USD', name: 'Cardano vs US Dollar', spread: '$0.002', leverage: '1:10', minLot: '1.0' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="MARKETS • CRYPTOCURRENCY"
        title="TRADE CRYPTO CFDS"
        subtitle="Trade Bitcoin, Ethereum, and more with leverage"
      />

      {/* What is Crypto CFD */}
      <ContentSection heading="What is Crypto CFD Trading?">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Cryptocurrency CFD trading gives you direct financial exposure to the price movements of leading digital assets like Bitcoin (BTC) and Ethereum (ETH) without the technical burden of crypto exchanges, digital cold wallets, or seed phrase security concerns.
            </p>
            <p>
              Enjoy rapid order execution, institutional liquidity, competitive spreads, and the ability to hold both buy and sell positions in a trusted, regulated trading environment on MetaTrader 5.
            </p>
          </div>
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Crypto CFD Highlights</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Trading Schedule</span>
                <span className="font-bold text-[#00C853]">24 Hours / 7 Days a Week</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Underlying Custody</span>
                <span className="font-bold text-slate-900">No Wallet / No Private Keys</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Max Leverage</span>
                <span className="font-bold text-slate-900">Up to 1:20</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500 font-medium">Account Deposit</span>
                <span className="font-bold text-slate-900">USD / EUR / USDT</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Benefits */}
      <ContentSection
        bg="bg-slate-50"
        heading="Why Trade Crypto CFDs with P4 Global Market?"
        subtitle="Trade the volatile crypto markets with institutional risk management and leverage."
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

      {/* Popular Crypto Table */}
      <ContentSection
        heading="Featured Cryptocurrency Pairs"
        subtitle="Real-time spreads and leverage across top digital assets."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Pair</th>
                <th className="py-4 px-6 font-bold">Digital Asset</th>
                <th className="py-4 px-6 font-bold">Target Spread</th>
                <th className="py-4 px-6 font-bold">Max Leverage</th>
                <th className="py-4 px-6 font-bold">Min Lot Size</th>
                <th className="py-4 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
              {popularCryptos.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono text-base">{c.symbol}</td>
                  <td className="py-4 px-6 text-slate-700">{c.name}</td>
                  <td className="py-4 px-6 text-[#00C853] font-bold font-mono">{c.spread}</td>
                  <td className="py-4 px-6 font-semibold">{c.leverage}</td>
                  <td className="py-4 px-6 text-slate-500">{c.minLot}</td>
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

      {/* 24/7 Hours info */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Crypto Trading Hours"
        subtitle="Uninterrupted access 24/7/365 across all cryptocurrency pairs."
      >
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Always Open — 24 Hours, 7 Days a Week</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Unlike traditional equity and currency markets, cryptocurrency CFDs trade continuously without market close or weekend session breaks.
          </p>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
