import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Building
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070d18] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Top Value / Trust Highlights Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 bg-[#0d182d] p-4 rounded-xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Regulated & Secure</h4>
              <p className="text-xs text-slate-400">FSA licensed & Tier-1 segregated funds</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0d182d] p-4 rounded-xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Spreads From 0.0 Pips</h4>
              <p className="text-xs text-slate-400">Institutional raw pricing with low latency</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0d182d] p-4 rounded-xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">0% Deposit Fee</h4>
              <p className="text-xs text-slate-400">Instant deposits & 24hr fast withdrawals</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#0d182d] p-4 rounded-xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">24/5 VIP Support</h4>
              <p className="text-xs text-slate-400">Dedicated multilingual trading specialists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Company */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-sm inline-block"></span>
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  About P4 Global Market
                </Link>
              </li>
              <li>
                <Link to="/about#why-us" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Why Choose P4
                </Link>
              </li>
              <li>
                <Link to="/about#safety" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Regulation & Safety of Funds
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Education & Market Academy
                </Link>
              </li>
              <li>
                <Link to="/about#careers" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Careers & Global Teams
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Global Contact & Desks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Trading */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-sm inline-block"></span>
              Trading
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/trading#forex" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Forex Trading (50+ Pairs)
                </Link>
              </li>
              <li>
                <Link to="/trading#indices" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Global Stock Indices
                </Link>
              </li>
              <li>
                <Link to="/trading#commodities" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Commodities, Gold & Oil
                </Link>
              </li>
              <li>
                <Link to="/trading#crypto" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Cryptocurrency CFDs
                </Link>
              </li>
              <li>
                <Link to="/accounts" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Account Types & Tiers
                </Link>
              </li>
              <li>
                <Link to="/platforms" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  MetaTrader 4 / MetaTrader 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-sm inline-block"></span>
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  General Risk Disclosure
                </Link>
              </li>
              <li>
                <Link to="/terms#aml-kyc" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Anti-Money Laundering (AML)
                </Link>
              </li>
              <li>
                <Link to="/terms#complaints" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Complaints Handling Policy
                </Link>
              </li>
              <li>
                <Link to="/terms#execution-policy" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Order Execution Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-2 h-4 bg-blue-500 rounded-sm inline-block"></span>
              Contact
            </h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span>
                  Financial Services Centre, Victoria House, Mahé, Seychelles / Canary Wharf, London, UK
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+442038085699" className="hover:text-white transition-colors">
                  +44 20 3808 5699
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@p4globalmarket.com" className="hover:text-white transition-colors">
                  support@p4globalmarket.com
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold"
                >
                  <span>Submit Support Ticket</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links & Brand Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/P4logo.jpeg"
              alt="P4 Global Market"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-700 transition-all"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 hover:border-transparent transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all"
              aria-label="Telegram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.196 1.006.128.832.921z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#ff0000] hover:border-[#ff0000] transition-all"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Regulatory & Risk Warning Section */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 space-y-4 text-xs text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-300">
            Regulatory Notice:
          </p>
          <p>
            P4 Global Market Ltd is authorized and regulated as a Securities Dealer by the Financial Services Authority (FSA) with license number SD035. P4 Global Market EU is operated under European financial standards with Tier-1 bank segregated client trust accounts. Registered address: Suite 3, Global Gateway 8, Rue de la Perle, Victoria, Mahé, Seychelles.
          </p>

          <p className="text-amber-400/90 font-semibold pt-1">
            Risk Warning:
          </p>
          <p className="text-slate-400">
            Trading Forex and Contracts for Difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade Forex or CFDs, you should carefully consider your investment objectives, level of experience, and risk appetite. There is a possibility that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange and CFD trading, and seek advice from an independent financial advisor if you have any doubts.
          </p>
          <p className="text-slate-400">
            Regional Restrictions: P4 Global Market does not provide services to residents of certain jurisdictions including the United States of America, Canada, Cuba, Iran, North Korea, Sudan, Syria, and other sanctioned territories.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 P4 Global Market. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              256-bit SSL Encrypted Security
            </span>
            <span className="text-slate-700">•</span>
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <span className="text-slate-700">•</span>
            <Link to="/risk-disclosure" className="hover:text-slate-200 transition-colors">Risk Disclosure</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
