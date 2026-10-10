import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import { 
  Clock, 
  Globe2, 
  Sun, 
  Moon, 
  AlertCircle, 
  Zap 
} from 'lucide-react';

export default function TradingHours() {
  const marketTimetable = [
    { assetClass: 'Forex Currencies (FX)', openTime: 'Sunday 22:05 GMT', closeTime: 'Friday 21:55 GMT', note: '24/5 Continuous' },
    { assetClass: 'Precious Metals (Gold, Silver)', openTime: 'Sunday 23:05 GMT', closeTime: 'Friday 21:55 GMT', note: 'Daily break: 22:00 – 23:00 GMT' },
    { assetClass: 'Spot Energies (WTI, Brent Oil)', openTime: 'Monday 01:00 GMT', closeTime: 'Friday 21:55 GMT', note: 'Daily break: 22:00 – 23:00 GMT' },
    { assetClass: 'US Stock Indices (US30, US500, US100)', openTime: 'Monday 01:00 GMT', closeTime: 'Friday 21:55 GMT', note: 'Trading halts: 21:15 – 21:30 GMT' },
    { assetClass: 'European Indices (GER40, UK100)', openTime: 'Monday 07:00 GMT', closeTime: 'Friday 21:00 GMT', note: 'Continuous during EU session' },
    { assetClass: 'US Equities (Apple, Tesla, NVIDIA)', openTime: 'Mon – Fri 14:30 GMT', closeTime: 'Mon – Fri 21:00 GMT', note: 'US Regular Trading Hours' },
    { assetClass: 'Cryptocurrencies (BTC, ETH, SOL)', openTime: 'Monday 00:00 GMT', closeTime: 'Sunday 23:59 GMT', note: '24/7/365 Non-stop' },
  ];

  const sessions = [
    { name: 'Sydney Session', openGMT: '22:00 GMT', closeGMT: '07:00 GMT', char: 'Initial liquidity from Asia-Pacific region.' },
    { name: 'Tokyo (Asian) Session', openGMT: '00:00 GMT', closeGMT: '09:00 GMT', char: 'Strong volume on JPY and AUD pairs.' },
    { name: 'London (European) Session', openGMT: '08:00 GMT', closeGMT: '17:00 GMT', char: 'Highest global Forex volume and volatility.' },
    { name: 'New York Session', openGMT: '13:00 GMT', closeGMT: '22:00 GMT', char: 'Major market moves during London/NY overlap.' },
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      <PageHero
        badge="TRADING CONDITIONS"
        title="TRADING HOURS"
        subtitle="Global Market Timetable and Session Schedules"
      />

      {/* Overview & Best Time to Trade */}
      <ContentSection heading="Global Trading Sessions & Peak Liquidity">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">{s.name}</h4>
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-sm font-mono font-bold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                {s.openGMT} – {s.closeGMT}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{s.char}</p>
            </div>
          ))}
        </div>

        {/* Best time to trade alert */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
          <Zap className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-blue-900">
            <span className="font-bold block text-base">Peak Liquidity Window: London / New York Overlap</span>
            <p className="text-slate-700 leading-relaxed">
              Between <strong>13:00 GMT and 17:00 GMT</strong>, both London and New York financial markets are active simultaneously. This 4-hour window accounts for over 60% of all global daily turnover, generating the tightest spreads and best order execution.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Detailed Market Timetable */}
      <ContentSection 
        bg="bg-slate-50"
        heading="Instrument Trading Hours Timetable"
        subtitle="All times displayed in GMT (Greenwich Mean Time). Server time operates on GMT+2 (GMT+3 Daylight Saving Time)."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Asset Class</th>
                <th className="py-4 px-6 font-bold">Weekly Open (GMT)</th>
                <th className="py-4 px-6 font-bold">Weekly Close (GMT)</th>
                <th className="py-4 px-6 font-bold">Trading Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {marketTimetable.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{item.assetClass}</td>
                  <td className="py-4 px-6 font-mono font-semibold text-slate-800">{item.openTime}</td>
                  <td className="py-4 px-6 font-mono font-semibold text-slate-800">{item.closeTime}</td>
                  <td className="py-4 px-6 text-slate-500">{item.note}</td>
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
