import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  ShieldCheck,
  Building,
  CheckCircle2,
  ExternalLink,
  Lock,
  FileCheck,
  Scale,
  Award,
  Globe2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function Licenses() {
  const licenseCards = [
    {
      authority: 'Financial Services Authority (FSA)',
      shortName: 'FSA',
      licenseNumber: 'SD048 / 2021',
      country: 'Seychelles',
      entity: 'P4 Global Market Ltd',
      status: 'Active & Regulated',
      description: 'Authorized and regulated as a Securities Dealer by the Financial Services Authority of Seychelles. Ensuring statutory capital adequacy and fair market conduct.',
      verifyUrl: 'https://fsaseychelles.sc'
    },
    {
      authority: 'Cyprus Securities and Exchange Commission (CySEC)',
      shortName: 'CySEC',
      licenseNumber: '392/20',
      country: 'Cyprus / European Union',
      entity: 'P4 Global Market (Europe) Ltd',
      status: 'Active & Regulated',
      description: 'Regulated European Investment Firm compliant with MiFID II European market directives, investor protection mandates, and capital adequacy directives.',
      verifyUrl: 'https://www.cysec.gov.cy'
    },
    {
      authority: 'Dubai Financial Services Authority (DFSA)',
      shortName: 'DFSA',
      licenseNumber: 'F005821',
      country: 'United Arab Emirates',
      entity: 'P4 Global Market (ME) Ltd',
      status: 'Active & Regulated',
      description: 'Licensed and supervised under the regulatory jurisdiction of the Dubai International Financial Centre (DIFC) for institutional arrangements and client service.',
      verifyUrl: 'https://www.dfsa.ae'
    }
  ];

  const fundProtectionPoints = [
    {
      title: 'Segregated Client Accounts',
      desc: 'All retail and institutional client funds are strictly held in segregated bank accounts at Tier-1 international credit institutions, completely ring-fenced from company operating capital.',
      icon: Lock
    },
    {
      title: 'Negative Balance Protection',
      desc: 'Guaranteed negative balance protection across all account types. In cases of extreme market volatility or gap openings, client account balances can never fall below zero.',
      icon: ShieldCheck
    },
    {
      title: 'Investor Compensation Schemes',
      desc: 'Eligible clients benefit from statutory Investor Compensation Funds (ICF) and private excess indemnity insurance coverage up to statutory limits in the event of unforeseen default.',
      icon: Award
    },
    {
      title: 'Regular Independent External Audits',
      desc: 'Our financial books, operational reserves, and trade execution data are rigorously and independently audited on a quarterly basis by leading international audit firms.',
      icon: FileCheck
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="REGULATORY COMPLIANCE"
        title="LICENSES"
        subtitle="P4 Global Market is regulated by top-tier authorities"
        ctaText="OPEN REGULATED ACCOUNT"
        ctaLink="/register"
        secondaryCtaText="LEGAL DOCUMENTS"
        secondaryCtaLink="/about/legal-documents"
      />

      {/* 2. REGULATORY INFO */}
      <ContentSection heading="Strict Regulatory Framework">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            At <strong>P4 Global Market</strong>, financial security and regulatory transparency form the core of every product we engineer. We operate under strict supervision across multiple international financial jurisdictions, ensuring that our clients trade with confidence knowing their capital is secure.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every operational process—from trade execution routing and pricing transparency to client onboarding and fund handling—is governed by stringent statutory standards. Client funds are kept strictly separate from company assets in creditworthy Tier-1 banks and are never utilized for hedging or operational liquidity.
          </p>
        </div>
      </ContentSection>

      {/* 3. LICENSE CARDS */}
      <ContentSection
        bg="bg-slate-50"
        heading="Our Regulatory Licenses"
        subtitle="Explore our active licenses and regulatory oversight details across global financial centers."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {licenseCards.map((lic, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xl group-hover:bg-[#00C853]/15 group-hover:text-[#00C853] transition-colors">
                    {lic.shortName}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                    {lic.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {lic.authority}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Jurisdiction: <span className="text-slate-800 font-semibold">{lic.country}</span>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">License Number:</span>
                    <span className="font-bold text-slate-900 font-mono">{lic.licenseNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Regulated Entity:</span>
                    <span className="font-semibold text-slate-900">{lic.entity}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lic.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href={lic.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00b34a] uppercase tracking-wider transition-colors"
                >
                  <span>Verify on Official Register</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 4. CLIENT FUND PROTECTION */}
      <ContentSection heading="Client Fund Protection" subtitle="Industry-leading safeguards ensuring your capital is shielded at all times.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {fundProtectionPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200 flex items-start gap-5 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#00C853] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 5. COMPLIANCE & GOVERNANCE */}
      <ContentSection bg="bg-slate-50" heading="Compliance & Risk Governance">
        <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-sm space-y-5">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg">
            <Scale className="w-6 h-6 text-[#00C853]" />
            <span>International Compliance Standards</span>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            P4 Global Market adheres to rigorous Know Your Customer (KYC) and Anti-Money Laundering (AML) standards in alignment with the Financial Action Task Force (FATF) recommendations and international financial treaties. We deploy advanced automated surveillance algorithms to detect unauthorized transactions, market manipulation, and financial crime.
          </p>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Our dedicated internal compliance and legal divisions coordinate directly with jurisdictional supervisory bodies to submit regular regulatory filings, capital adequacy reports, and client execution benchmark disclosures.
          </p>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
            <span>Questions regarding our regulatory standing?</span>
            <Link to="/about/contact" className="font-bold text-[#00C853] hover:underline flex items-center gap-1">
              Contact Compliance Department <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ContentSection>

      {/* 6. CTA */}
      <CTASection
        heading="Trade with a Fully Regulated Broker"
        subtitle="Enjoy complete peace of mind with segregated accounts, negative balance protection, and institutional-grade oversight."
        primaryBtnText="OPEN ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="LEGAL DOCUMENTS"
        secondaryBtnLink="/about/legal-documents"
      />
    </div>
  );
}
