import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Clock, 
  HelpCircle, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  DollarSign 
} from 'lucide-react';

export default function SwapRates() {
  const swapTable = [
    { instrument: 'EUR/USD', longSwap: '-3.80 pts', shortSwap: '+1.10 pts', tripleDay: 'Wednesday' },
    { instrument: 'GBP/USD', longSwap: '-4.20 pts', shortSwap: '+0.80 pts', tripleDay: 'Wednesday' },
    { instrument: 'USD/JPY', longSwap: '+9.40 pts', shortSwap: '-14.20 pts', tripleDay: 'Wednesday' },
    { instrument: 'AUD/USD', longSwap: '-2.10 pts', shortSwap: '-0.90 pts', tripleDay: 'Wednesday' },
    { instrument: 'USD/CAD', longSwap: '-1.50 pts', shortSwap: '-1.80 pts', tripleDay: 'Wednesday' },
    { instrument: 'XAU/USD (Gold)', longSwap: '-18.50 pts', shortSwap: '+8.20 pts', tripleDay: 'Wednesday' },
    { instrument: 'USOIL (WTI Oil)', longSwap: '-6.20 pts', shortSwap: '-4.50 pts', tripleDay: 'Friday' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="TRADING CONDITIONS"
        title="SWAP RATES"
        subtitle="Transparent Overnight Financing Rates & Swap-Free Islamic Accounts"
      />

      {/* What is a Swap */}
      <ContentSection heading="Understanding Swap Rates & Overnight Rollover">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900">What is a Forex Swap?</h3>
            <p>
              A <strong>Swap (Rollover Interest)</strong> is an overnight interest fee either earned or paid for holding a leveraged trading position open past market rollover time (22:00 GMT / 5:00 PM EST).
            </p>
            <p>
              Because currencies trade in pairs, you borrow one currency to buy another. The interest rate differential between the central banks of both currencies dictates whether your account earns a positive swap or pays a negative financing charge.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900">Triple Swap Wednesdays</h3>
            <p>
              Because financial markets settle on a <strong>T+2 basis</strong> (two business days later), positions held past Wednesday 22:00 GMT incur a <strong>3-day rollover fee</strong> to account for the upcoming weekend when global interbank markets are closed.
            </p>
            <p>
              For energy contracts (e.g., Oil), 3-day swaps are applied on Fridays.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Major Swap Rates Table */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Benchmark Swap Rates (Points)"
        subtitle="Live rollover rates updated dynamically based on global interbank interest differentials."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Instrument</th>
                <th className="py-4 px-6 font-bold">Long Swap (Buy)</th>
                <th className="py-4 px-6 font-bold">Short Swap (Sell)</th>
                <th className="py-4 px-6 font-bold">Triple Swap Day</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {swapTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 font-mono">{row.instrument}</td>
                  <td className={`py-4 px-6 font-mono font-bold ${row.longSwap.startsWith('+') ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {row.longSwap}
                  </td>
                  <td className={`py-4 px-6 font-mono font-bold ${row.shortSwap.startsWith('+') ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {row.shortSwap}
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-medium">{row.tripleDay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* Islamic Swap Free Account highlight */}
      <ContentSection>
        <div className="bg-gradient-to-r from-emerald-900 via-[#0b172a] to-[#0b172a] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#00C853]/20 text-[#00C853] text-xs font-bold uppercase tracking-wider border border-[#00C853]/30">
              100% Sharia Compliant
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">Islamic (Swap-Free) Trading Accounts</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Trade without any Riba (interest) or overnight swap charges. Our Islamic accounts allow faith-conscious investors to hold positions indefinitely without any rollover penalties or hidden administrative surcharges.
            </p>
          </div>
          <Link
            to="/register"
            className="shrink-0 px-8 py-4 rounded-full bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-sm tracking-wide shadow-lg transition-all transform hover:scale-105 cursor-pointer"
          >
            Open Islamic Account
          </Link>
        </div>
      </ContentSection>

      <CTASection />
    </div>
  );
}
