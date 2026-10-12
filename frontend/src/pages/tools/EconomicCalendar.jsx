import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Calendar,
  Clock,
  TrendingUp,
  AlertCircle,
  Filter,
  DollarSign,
  Activity,
  Globe2,
  FileText,
  Users,
  Building2,
  Lightbulb,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function EconomicCalendar() {
  const [openFaq, setOpenFaq] = useState(null);
  const [impactFilter, setImpactFilter] = useState('ALL');
  const [currencyFilter, setCurrencyFilter] = useState('ALL');

  const calendarEvents = [
    {
      time: '12:30 GMT',
      currency: 'USD',
      event: 'Non-Farm Payrolls (NFP)',
      impact: 'HIGH',
      actual: '254K',
      forecast: '147K',
      previous: '159K'
    },
    {
      time: '12:30 GMT',
      currency: 'USD',
      event: 'Unemployment Rate',
      impact: 'HIGH',
      actual: '4.1%',
      forecast: '4.2%',
      previous: '4.2%'
    },
    {
      time: '13:45 GMT',
      currency: 'EUR',
      event: 'ECB Interest Rate Decision',
      impact: 'HIGH',
      actual: '3.40%',
      forecast: '3.40%',
      previous: '3.65%'
    },
    {
      time: '14:30 GMT',
      currency: 'USD',
      event: 'Core CPI (MoM)',
      impact: 'HIGH',
      actual: '0.3%',
      forecast: '0.2%',
      previous: '0.3%'
    },
    {
      time: '08:00 GMT',
      currency: 'GBP',
      event: 'GDP (MoM)',
      impact: 'MEDIUM',
      actual: '0.2%',
      forecast: '0.2%',
      previous: '0.0%'
    },
    {
      time: '01:30 GMT',
      currency: 'JPY',
      event: 'Tokyo Core CPI (YoY)',
      impact: 'MEDIUM',
      actual: '1.8%',
      forecast: '1.7%',
      previous: '2.0%'
    },
    {
      time: '15:00 GMT',
      currency: 'USD',
      event: 'ISM Manufacturing PMI',
      impact: 'HIGH',
      actual: '46.5',
      forecast: '47.6',
      previous: '47.2%'
    },
    {
      time: '18:00 GMT',
      currency: 'USD',
      event: 'FOMC Meeting Minutes',
      impact: 'HIGH',
      actual: '-',
      forecast: '-',
      previous: '-'
    },
    {
      time: '09:30 GMT',
      currency: 'GBP',
      event: 'Retail Sales (MoM)',
      impact: 'LOW',
      actual: '0.3%',
      forecast: '-0.3%',
      previous: '1.0%'
    }
  ];

  const filteredEvents = calendarEvents.filter((ev) => {
    const matchesImpact = impactFilter === 'ALL' || ev.impact === impactFilter;
    const matchesCurrency = currencyFilter === 'ALL' || ev.currency === currencyFilter;
    return matchesImpact && matchesCurrency;
  });

  const keyEvents = [
    {
      icon: DollarSign,
      title: 'Interest Rate Decisions',
      description: 'Announcements by the Federal Reserve, ECB, Bank of England, and Bank of Japan directly drive currency values, bond yields, and market sentiment.',
      highlight: 'Extreme Volatility'
    },
    {
      icon: Building2,
      title: 'GDP Reports',
      description: 'Gross Domestic Product measures total economic output. Substantial variations between forecast and actual figures dictate multi-week trends.',
      highlight: 'Broad Trend Shifter'
    },
    {
      icon: Users,
      title: 'Employment Data (NFP)',
      description: 'US Non-Farm Payrolls and unemployment figures indicate economic health and labor tightness, creating sharp price swings within seconds.',
      highlight: 'First Friday Monthly'
    },
    {
      icon: TrendingUp,
      title: 'Inflation (CPI & PPI)',
      description: 'Consumer and Producer Price Indices gauge purchasing power deterioration and directly steer central bank interest rate trajectories.',
      highlight: 'High Policy Weight'
    },
    {
      icon: FileText,
      title: 'Central Bank Speeches',
      description: 'Press conferences by Fed Chair Jerome Powell or ECB President Christine Lagarde often introduce unexpected market moves through forward guidance.',
      highlight: 'Unscheduled Volatility'
    }
  ];

  const tips = [
    {
      step: '01',
      title: 'Plan Around High-Impact Releases',
      desc: 'Identify "Red" High-Impact events scheduled for your trading pairs. Note the exact release time and evaluate if you should reduce exposure or avoid entering right before the announcement.'
    },
    {
      step: '02',
      title: 'Compare Actual vs Consensus',
      desc: 'Market prices typically price in the consensus forecast. Significant divergence between the Actual outcome and the Forecast creates the greatest price momentum.'
    },
    {
      step: '03',
      title: 'Protect Against Spread Widening & Slippage',
      desc: 'During major macroeconomic releases like NFP or rate hikes, liquidity temporarily thins and spreads widen. Ensure stop-losses are well-distanced and leverage is kept conservative.'
    }
  ];

  const faqs = [
    {
      q: 'How frequently is the Economic Calendar updated?',
      a: 'The P4 Economic Calendar updates in real-time as official government statistics bureaus and central banks publish their data releases.'
    },
    {
      q: 'Why do currency pairs move before the actual data is announced?',
      a: 'Institutional market participants frequently position in anticipation of forecasted results, leading to pre-release momentum or "pricing in" of expected policy shifts.'
    },
    {
      q: 'What does the Impact level (High, Medium, Low) indicate?',
      a: 'Impact ratings reflect historical market volatility caused by the release. High impact (red) typically moves markets by 40–150+ pips within minutes.'
    },
    {
      q: 'In what timezone are the event times shown?',
      a: 'All event times are displayed in Greenwich Mean Time (GMT). You can align this directly with your MT4 or MT5 server clock.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • MACRO EVENTS"
        title="ECONOMIC CALENDAR"
        subtitle="Track market-moving events in real-time"
        ctaText="EXPLORE CALENDAR"
        ctaLink="#calendar-view"
        secondaryCtaText="KEY MACRO EVENTS"
        secondaryCtaLink="#events-tracked"
      />

      {/* 2. WHAT IS ECONOMIC CALENDAR */}
      <ContentSection
        heading="What is an Economic Calendar?"
        subtitle="The essential strategic roadmap used by institutional and retail traders worldwide to monitor macroeconomic announcements and anticipated market volatility."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              An Economic Calendar is a real-time chronological schedule of official macroeconomic indicators, corporate earnings, central bank interest rate decisions, and geopolitical announcements that influence global currency pairs, indices, and commodities.
            </p>
            <p>
              Every release features three crucial data points: the <strong>Previous</strong> metric, the <strong>Forecast</strong> (analyst consensus), and the <strong>Actual</strong> figure published at the exact second of the release. When actual data significantly beats or misses consensus expectations, aggressive price action often follows.
            </p>
          </div>
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
            <h4 className="font-bold text-slate-900 text-lg">Why Track Macro Data?</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>High-Impact Events</strong> drive 80% of intraday breakout moves.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C853] mt-1.5 shrink-0"></span>
                <span>Enables proactive trade risk management and stop-loss placement.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                <span>Synchronized with MT4 & MT5 live execution servers.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* 3. CALENDAR EMBED / INTERACTIVE CALENDAR */}
      <ContentSection
        id="calendar-view"
        bg="bg-slate-50"
        heading="Live Macroeconomic Schedule"
        subtitle="Filter by expected impact and currency to pinpoint volatility triggers for your open positions."
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
            {/* Impact Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Impact:</span>
              <div className="flex gap-1.5">
                {['ALL', 'HIGH', 'MEDIUM', 'LOW'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setImpactFilter(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      impactFilter === lvl
                        ? 'bg-[#0a1929] text-white shadow'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Currency Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Currency:</span>
              <div className="flex gap-1.5 flex-wrap">
                {['ALL', 'USD', 'EUR', 'GBP', 'JPY'].map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrencyFilter(curr)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currencyFilter === curr
                        ? 'bg-[#00C853] text-black shadow'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar Table Area */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0a1929] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-5">Time (GMT)</th>
                  <th className="py-4 px-4">Currency</th>
                  <th className="py-4 px-6">Event</th>
                  <th className="py-4 px-4 text-center">Impact</th>
                  <th className="py-4 px-4 text-right">Actual</th>
                  <th className="py-4 px-4 text-right">Forecast</th>
                  <th className="py-4 px-5 text-right">Previous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-5 font-mono text-slate-600 font-semibold">{item.time}</td>
                      <td className="py-4 px-4 font-bold text-slate-900">
                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-xs">
                          {item.currency}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-800">{item.event}</td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            item.impact === 'HIGH'
                              ? 'bg-rose-100 text-rose-700'
                              : item.impact === 'MEDIUM'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {item.impact}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right font-mono font-bold text-[#00C853]">{item.actual}</td>
                      <td className="py-4 px-4 text-right font-mono text-slate-500">{item.forecast}</td>
                      <td className="py-4 px-5 text-right font-mono text-slate-400">{item.previous}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400 text-sm">
                      No events match selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="text-right text-xs text-slate-400">
            * Live streaming data powered by P4 Institutional Feeds.
          </div>
        </div>
      </ContentSection>

      {/* 4. KEY EVENTS TRACKED */}
      <ContentSection
        id="events-tracked"
        heading="Key Macro Events Tracked"
        subtitle="Learn which economic indicators exert the highest impact on price action and currency trends."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyEvents.map((item, idx) => (
            <BenefitCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              highlight={item.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 5. HOW TO USE IT (3 TIPS) */}
      <ContentSection
        bg="bg-slate-50"
        heading="How to Trade Economic Releases"
        subtitle="Three golden rules for navigating volatility and safeguarding capital during high-impact data."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md relative overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 select-none group-hover:text-blue-50 transition-colors">
                {tip.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-[#00C853]/10 group-hover:text-[#00C853] transition-colors">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 6. FAQ */}
      <ContentSection
        heading="Economic Calendar FAQ"
        subtitle="Common questions about interpreting macro data and managing news volatility."
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 7. CTA */}
      <CTASection
        heading="Trade Macro News with Raw Spreads"
        subtitle="Take advantage of fast-moving market volatility with sub-30ms execution and zero requotes on P4 Global Market."
        primaryBtnText="OPEN TRADING ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
