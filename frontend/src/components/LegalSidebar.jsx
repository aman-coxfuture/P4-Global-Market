import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, ShieldAlert, Lock, Download, ChevronRight, HelpCircle, Phone, Mail } from 'lucide-react';

export default function LegalSidebar() {
  const location = useLocation();

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms', icon: FileText, desc: 'Brokerage client agreement & terms' },
    { name: 'Privacy Policy', path: '/privacy', icon: Lock, desc: 'Data protection & cookie guidelines' },
    { name: 'Risk Disclosure', path: '/risk-disclosure', icon: ShieldAlert, desc: 'Leverage & margin risk notice' },
  ];

  return (
    <aside className="w-full space-y-6">
      {/* Legal Navigation Menu Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-2">
          Legal Documents
        </h3>
        
        <nav className="space-y-1.5">
          {legalLinks.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span>{item.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Download PDF button */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <a
            href="#download-pdf"
            onClick={(e) => { e.preventDefault(); window.print(); }}
            className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:bg-slate-50"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Print / Save PDF</span>
          </a>
        </div>
      </div>

      {/* Compliance Assistance Box */}
      <div className="bg-[#0b172a] text-white rounded-2xl p-5 border border-slate-800 shadow-sm">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Compliance Helpdesk</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Questions regarding regulatory licensing, legal terms, or KYC verification? Our compliance team is ready to assist.
        </p>
        <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <a href="mailto:compliance@p4globalmarket.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>compliance@p4globalmarket.com</span>
          </a>
          <a href="tel:+442038085699" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>+44 20 3808 5699</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
