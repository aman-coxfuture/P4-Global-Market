import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Globe2, 
  Lock, 
  Users, 
  TrendingUp, 
  Building, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 sm:pt-22 bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-[#0b172a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Corporate Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">
              About P4 Global Market
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              A premier international multi-asset brokerage established to empower retail and institutional traders with world-class execution, ultra-low pricing, and regulatory transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Philosophy
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              A Trader-Centric Ecosystem Built on Trust & Speed
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded by market veterans and quantitative software engineers, P4 Global Market was created to solve the common issues traders face: wide spreads, hidden fees, slow order execution, and unresponsive customer support.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              By partnering directly with tier-1 liquidity providers and investing heavily in fiber-optic data server networks across London, New York, and Tokyo, we provide raw market spreads starting at 0.0 pips and latency under 30 milliseconds.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-[#0b172a] text-white p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-blue-400">$12B+</div>
              <div className="text-xs text-slate-300 mt-1">Average Daily Volume</div>
            </div>
            <div className="bg-[#0b172a] text-white p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-cyan-400">180K+</div>
              <div className="text-xs text-slate-300 mt-1">Active Global Traders</div>
            </div>
            <div className="bg-[#0b172a] text-white p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-emerald-400">120+</div>
              <div className="text-xs text-slate-300 mt-1">Countries Served</div>
            </div>
            <div className="bg-[#0b172a] text-white p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-amber-400">24/5</div>
              <div className="text-xs text-slate-300 mt-1">Multilingual Support</div>
            </div>
          </div>
        </div>

        {/* Safety of Funds Section */}
        <div id="safety" className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Security First</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Safety of Client Funds & Regulation
            </h3>
            <p className="text-sm text-slate-600 mt-3">
              We uphold strict compliance standards so you can trade with complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">Segregated Accounts</h4>
              <p className="text-xs text-slate-600">Client money is held in segregated trust accounts with top-tier global custodian banks, completely separate from our corporate operational capital.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <Lock className="w-8 h-8 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">Negative Balance Protection</h4>
              <p className="text-xs text-slate-600">In times of extreme market volatility or unexpected gap openings, our automated risk protection ensures your balance will never drop below zero.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <Building className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">Licensed & Regulated</h4>
              <p className="text-xs text-slate-600">Operating under rigorous financial authority guidelines with regular independent external audits and transparent reporting.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
