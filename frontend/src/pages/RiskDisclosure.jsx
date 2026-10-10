import React from 'react';
import LegalSidebar from '../components/LegalSidebar';
import { Calendar, ShieldAlert, AlertTriangle, TrendingDown, Percent, Zap, HelpCircle } from 'lucide-react';

export default function RiskDisclosure() {
  return (
    <div className="pt-20 sm:pt-22 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070d19] via-[#0b172a] to-[#0f244a] text-white py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>REGULATORY RISK WARNING</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              General Risk Disclosure
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Important notice on the high risks associated with leveraged trading in Foreign Exchange (Forex) and Contracts for Difference (CFDs).
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Last Updated: October 01, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Document Body */}
          <main className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
            
            {/* Prominent Warning Callout */}
            <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>HIGH RISK INVESTMENT WARNING:</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                Trading leveraged financial instruments such as Forex and CFDs carries a high degree of risk and can result in the loss of all your invested capital. These products are complex, speculative, and may not be suitable for all investors. You should not invest capital that you cannot afford to lose.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">1.</span>
                The Effect of Leverage and Margin Trading
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Leverage allows you to open large market positions by depositing only a small fraction of the total trade value (margin). While leverage can magnify your profits when the market moves in your favor, it equally magnifies your losses when the market moves against your position.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For example, trading with a 1:100 leverage means a mere 1% adverse market movement can result in a 100% loss of your allocated margin for that trade. Higher leverage ratios (e.g. 1:500) significantly heighten this risk and require diligent risk management strategies.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">2.</span>
                Market Volatility & Gapping Risks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Financial markets are subject to rapid price fluctuations driven by unexpected geopolitical events, central bank interest rate decisions, economic data releases, and shifts in global market sentiment.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                During times of extreme volatility or when markets reopen following weekends and holidays, prices may "gap" — jumping from one price level to a significantly different price level without trading at intermediate prices. Under such conditions, Stop-Loss orders may not be executed at the requested price, resulting in slippage.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">3.</span>
                Technical & Electronic Trading Risks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trading through electronic platforms (such as MetaTrader 5, MetaTrader 4, and WebTrader) involves risks associated with hardware failures, software bugs, internet connectivity dropouts, power disruptions, and communication transmission latency.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market maintains redundant server clusters and high-availability Equinix data center connectivity, but clients must ensure they have stable personal internet connections and secondary access channels in place.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">4.</span>
                Cryptocurrency CFD Specific Risks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cryptocurrency markets exhibit extreme intraday price volatility and operate 24 hours a day, 7 days a week. Digital asset valuations are influenced by technological developments, regulatory announcements, and market sentiment rather than traditional economic fundamentals.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trading Cryptocurrency CFDs carries unique market risks, and clients should exercise heightened caution when applying leverage to crypto assets.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">5.</span>
                No Investment or Financial Advice
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market provides an <strong>execution-only brokerage service</strong>. Any market analysis, webinar commentary, educational articles, economic calendar updates, or price data provided on our website or social media channels does not constitute personal investment advice, financial planning, or a recommendation to buy or sell any financial instrument.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Before deciding to open a live trading account, you should carefully assess your financial objectives, experience level, and risk tolerance, and seek advice from an independent, licensed financial advisor if you have any doubts.
              </p>
            </section>

          </main>

          {/* Sidebar */}
          <div className="lg:col-span-4 sticky top-28">
            <LegalSidebar />
          </div>

        </div>
      </div>

    </div>
  );
}
