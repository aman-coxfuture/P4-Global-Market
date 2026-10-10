import React from 'react';
import LegalSidebar from '../components/LegalSidebar';
import { Calendar, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-20 sm:pt-22 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070d19] via-[#0b172a] to-[#0f244a] text-white py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <FileText className="w-3.5 h-3.5" />
              <span>LEGAL AGREEMENT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Standard Client Agreement, Brokerage Operating Guidelines, and Account Governance Policies.
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
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">1.</span>
                Introduction & Regulatory Scope
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This Client Agreement ("Agreement") is entered into by and between <strong>P4 Global Market Ltd</strong> ("the Company", "we", "us"), a licensed Securities Dealer authorized and regulated by the Financial Services Authority (FSA), and the individual or legal entity registered as a client ("the Client", "you").
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By completing the online registration form, opening a live or demo trading account, or accessing our trading terminals (MetaTrader 5, MetaTrader 4, WebTrader, and Mobile Apps), you acknowledge that you have read, understood, and unreservedly agreed to all terms outlined in this Agreement.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">2.</span>
                Account Registration, Eligibility & Verification (KYC)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To open a live trading account with P4 Global Market, you must be at least 18 years of age (or of legal majority in your country of jurisdiction). You agree to provide true, accurate, current, and complete identification documents during the Know-Your-Customer (KYC) verification process.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Proof of Identity (POI):</strong> Valid International Passport, National Identity Card, or Government-issued Driver’s License.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Proof of Address (POA):</strong> Utility bill (electricity, water, gas) or bank account statement issued within the preceding 3 months.</span>
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Company reserves the right to suspend or restrict account functionality, including deposits and withdrawals, if required verification documents are incomplete or deemed unverifiable.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">3.</span>
                Client Funds & Segregation Safeguards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All retail client funds deposited with P4 Global Market are held in fully segregated client trust accounts with top-tier international banking institutions. Segregated funds are legally ring-fenced and will never be utilized for corporate operations, hedging exposures, or company liabilities.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deposits and withdrawals may only be processed using payment instruments that bear the exact legal name of the registered account holder. Third-party deposits or withdrawals are strictly prohibited under Anti-Money Laundering (AML) regulations.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">4.</span>
                Order Execution Policy & Latency
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market operates under a Straight-Through-Processing (STP) / No Dealing Desk (NDD) execution model. Orders are passed directly to our aggregated network of Tier-1 institutional liquidity providers. 
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                While our fiber-optic servers at Equinix LD4 and NY4 maintain average execution latency below 30 milliseconds, market volatility, weekend gap openings, and major macroeconomic news releases may cause positive or negative price slippage beyond the Company's control.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">5.</span>
                Margin Requirements, Stop-Out & Leverage
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Client is solely responsible for maintaining sufficient free margin in their account to support open leveraged positions. If the account Margin Level falls below 50% (Stop-Out Level), the trading system will automatically liquidate open positions starting from the largest losing trade to protect against further losses.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market provides <strong>Negative Balance Protection</strong> for all standard retail accounts. In the rare event that market gaps cause an account balance to become negative, the balance will be reset to zero without additional liability to the client.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">6.</span>
                Prohibited Trading Practices & Abuse
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market encourages all standard trading styles, including discretionary manual trading, scalping, hedging, and Expert Advisors (EAs). However, the following abusive practices are explicitly prohibited:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Latency arbitrage taking advantage of artificial pricing delays or server disconnections.</li>
                <li>Systematic exploitation of software glitches, off-market quotes, or price spikes.</li>
                <li>Multiple account opposite-side hedging aimed at manipulating deposit bonus credit schemes.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Company reserves the right to void transactions and close accounts identified as engaging in malicious platform abuse.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">7.</span>
                Governing Law & Dispute Resolution
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This Agreement shall be governed by, construed, and enforced in accordance with the laws of the Republic of Seychelles. Any formal dispute, controversy, or claim arising out of or relating to this contract shall be submitted to the exclusive jurisdiction of the competent courts of Seychelles.
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
