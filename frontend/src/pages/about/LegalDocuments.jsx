import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  FileText,
  Download,
  ShieldAlert,
  Mail,
  CheckCircle2,
  AlertCircle,
  Search,
  ExternalLink,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function LegalDocuments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState(null);

  const documents = [
    {
      title: 'Client Agreement',
      category: 'Core Terms',
      version: 'v4.2 (Updated Oct 2026)',
      size: '2.4 MB PDF',
      description: 'The master contractual agreement outlining the terms of service, account operation, trading rights, and obligations between P4 Global Market and the account holder.'
    },
    {
      title: 'Terms & Conditions',
      category: 'Core Terms',
      version: 'v3.8 (Updated Sep 2026)',
      size: '1.8 MB PDF',
      description: 'General governing rules regulating access and use of our trading platforms, web applications, APIs, client portal, and related digital services.'
    },
    {
      title: 'Privacy Policy',
      category: 'Data Protection',
      version: 'v2.6 (Updated Aug 2026)',
      size: '1.1 MB PDF',
      description: 'Details how P4 Global Market collects, encrypts, processes, and safeguards your personal data in strict compliance with GDPR and international data standards.'
    },
    {
      title: 'Risk Disclosure Notice',
      category: 'Risk Management',
      version: 'v3.1 (Updated Oct 2026)',
      size: '980 KB PDF',
      description: 'An essential notice outlining the specific risks inherent in leveraged CFD and forex trading, including market volatility, leverage hazards, and margin calls.'
    },
    {
      title: 'AML & KYC Policy',
      category: 'Compliance',
      version: 'v5.0 (Updated Jul 2026)',
      size: '1.5 MB PDF',
      description: 'Comprehensive guidelines detailing customer identity verification procedures, source of wealth compliance, and anti-money laundering controls.'
    },
    {
      title: 'Cookie Policy',
      category: 'Data Protection',
      version: 'v2.0 (Updated Jun 2026)',
      size: '720 KB PDF',
      description: 'Information regarding how our website utilizes first-party and third-party cookies to optimize user experience, remember preferences, and analyze web traffic.'
    },
    {
      title: 'Refund & Withdrawal Policy',
      category: 'Financial Operations',
      version: 'v2.3 (Updated Aug 2026)',
      size: '890 KB PDF',
      description: 'Clear rules governing deposit processing, refund eligibility criteria, third-party payment bans, and withdrawal verification standards.'
    },
    {
      title: 'Complaints Handling Procedure',
      category: 'Client Protection',
      version: 'v2.1 (Updated May 2026)',
      size: '840 KB PDF',
      description: 'A transparent step-by-step framework explaining how client disputes, trade inquiries, and formal complaints are impartially investigated and resolved.'
    },
    {
      title: 'Order Execution Policy (Best Execution)',
      category: 'Trading Operations',
      version: 'v3.4 (Updated Sep 2026)',
      size: '1.7 MB PDF',
      description: 'Explains the mechanisms, liquidity pool routing, and execution speed protocols deployed to ensure Best Execution standards for every client trade.'
    },
    {
      title: 'Conflicts of Interest Policy',
      category: 'Compliance',
      version: 'v2.2 (Updated Apr 2026)',
      size: '920 KB PDF',
      description: 'Sets out the organizational and administrative safeguards implemented to identify, prevent, and manage potential conflicts of interest.'
    }
  ];

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (docTitle) => {
    setDownloadNotice(docTitle);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3500);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="REGULATORY POLICIES"
        title="LEGAL DOCUMENTS"
        subtitle="All legal documents and policies in one place"
        ctaText="DOWNLOAD DOCUMENTS"
        ctaLink="#documents"
        secondaryCtaText="ABOUT OUR LICENSES"
        secondaryCtaLink="/about/licenses"
      />

      {/* 2. DOCUMENTS LIST WITH SEARCH */}
      <ContentSection
        id="documents"
        heading="Official Legal Agreements & Policies"
        subtitle="Please review our binding agreements and operational policies prior to opening an account or depositing funds."
      >
        {/* Search Bar */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal documents, policies, or topics..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853] transition-all"
            />
          </div>
        </div>

        {/* Download Feedback Toast */}
        {downloadNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between animate-in fade-in">
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#00C853]" />
              Preparing download for: <strong>{downloadNotice}</strong> (PDF)
            </span>
            <span className="text-xs text-emerald-600">Saved to browser downloads</span>
          </div>
        )}

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00C853]/15 group-hover:text-[#00C853] transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {doc.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                    <span>{doc.version}</span>
                    <span>•</span>
                    <span className="font-mono">{doc.size}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleDownload(doc.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3 text-[#00C853]" /> Legally Binding
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No legal documents match your search term "{searchQuery}".
          </div>
        )}
      </ContentSection>

      {/* 3. HOW TO READ (Note) */}
      <ContentSection bg="bg-slate-50" heading="How to Read Our Legal Documents">
        <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-amber-800 font-bold text-lg">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
            <span>Important Information for Traders</span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            The documents listed above establish the comprehensive contractual relationship between you and P4 Global Market. Prior to registering an account or initiating trades, you must read, understand, and agree to these terms. If you do not understand any provision in these documents, please consult an independent financial or legal advisor before trading.
          </p>

          <p className="text-xs text-slate-500 leading-relaxed">
            All legal documents are available in English. Translations provided into other languages are for convenience only; in cases of discrepancy, the official English version prevails.
          </p>
        </div>
      </ContentSection>

      {/* 4. CONTACT FOR LEGAL */}
      <ContentSection heading="Legal & Compliance Contact">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00C853] uppercase tracking-wider">
              <Mail className="w-4 h-4" />
              <span>Dedicated Legal Desk</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Have Questions Regarding Our Policies?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our legal and regulatory compliance team is available to assist with contract inquiries, dispute resolutions, and statutory filings.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:legal@p4globalmarket.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Email Legal Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:compliance@p4globalmarket.com"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Compliance Desk
            </a>
          </div>
        </div>
      </ContentSection>

      {/* 5. CTA */}
      <CTASection
        heading="Ready to Open Your Trading Account?"
        subtitle="Trade with full confidence backed by transparent agreements and top-tier regulatory oversight."
        primaryBtnText="OPEN ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
