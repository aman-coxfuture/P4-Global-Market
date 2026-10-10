import React from 'react';
import LegalSidebar from '../components/LegalSidebar';
import { Calendar, Lock, ShieldCheck, Eye, Database, Server, Cookie } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-20 sm:pt-22 bg-slate-50 min-h-screen text-slate-900">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#070d19] via-[#0b172a] to-[#0f244a] text-white py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Lock className="w-3.5 h-3.5" />
              <span>DATA PROTECTION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              How P4 Global Market collects, protects, processes, and manages your personal and financial data.
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
                Our Commitment to Data Privacy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>P4 Global Market Ltd</strong> ("the Company", "we", "us") is dedicated to protecting the privacy, confidentiality, and integrity of personal information entrusted to us by our clients, partners, and website visitors. This Privacy Policy details how we collect, use, store, share, and protect your information in compliance with global data protection standards (including General Data Protection Regulation / GDPR principles).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">2.</span>
                Information We Collect
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To fulfill our legal, regulatory, and operational obligations as a licensed financial broker, we collect several categories of personal data:
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block mb-1">Identity & Contact Data:</strong>
                  Full legal name, date of birth, nationality, government identification numbers (passport, national ID, tax identification number), residential address, email address, and telephone number.
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block mb-1">Financial & Economic Profile:</strong>
                  Estimated annual income, net worth, source of funds, employment status, trading experience, and risk appetite assessment.
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900 block mb-1">Technical & Usage Data:</strong>
                  IP addresses, browser type and version, device hardware specifications, operating system, geolocation data, login session logs, and trading activity metrics.
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">3.</span>
                How We Use Your Personal Data
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We collect and process your information solely for lawful, transparent, and defined business objectives:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li><strong>Account Setup & Authentication:</strong> Verifying your identity and establishing your client portal access and MT4/MT5 trading terminals.</li>
                <li><strong>Anti-Money Laundering (AML) & KYC Compliance:</strong> Complying with international regulatory sanctions, anti-terrorism financing laws, and customer due diligence mandates.</li>
                <li><strong>Order Processing & Settlements:</strong> Facilitating deposits, withdrawals, trade executions, margin calculations, and monthly account statement generation.</li>
                <li><strong>Security & Fraud Prevention:</strong> Monitoring suspicious activity, preventing unauthorized account takeovers, and protecting platform integrity.</li>
                <li><strong>Service Communication:</strong> Sending critical operational notices, margin call notifications, system updates, and responding to support tickets.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">4.</span>
                Cookies & Web Tracking Technologies
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our websites and client portals utilize cookies and similar tracking technologies to ensure optimal performance, remember your language preferences, enhance navigation security, and analyze anonymous traffic statistics.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You can configure your browser settings to block or notify you about cookies. However, disabling essential session cookies may prevent specific features of the client trading portal from operating correctly.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">5.</span>
                Data Security, Storage & Encryption
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                P4 Global Market employs state-of-the-art security measures to prevent your personal data from being accidentally lost, used, accessed in an unauthorized way, altered, or disclosed. All web traffic and client portal transactions are encrypted using <strong>256-bit Secure Socket Layer (SSL / TLS)</strong> protocols.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Servers containing sensitive client records are housed in ISO 27001 certified data center facilities with multi-factor biometric access controls and continuous automated intrusion detection systems.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-blue-600 font-mono">6.</span>
                Your Data Protection Rights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Subject to applicable statutory retention obligations (such as the mandatory 5-year financial transaction retention period required by financial authorities), you maintain the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Request access to copies of your personal data stored in our records.</li>
                <li>Request correction of inaccurate or incomplete personal information.</li>
                <li>Request erasure of your personal data when no longer required for regulatory compliance.</li>
                <li>Object to or restrict the processing of your data for direct marketing purposes.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                To exercise any of these rights, please submit a written request to our Data Protection Officer at <a href="mailto:dpo@p4globalmarket.com" className="text-blue-600 font-semibold underline">dpo@p4globalmarket.com</a>.
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
