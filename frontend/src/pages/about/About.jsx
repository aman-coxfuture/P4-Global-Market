import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import {
  ShieldCheck,
  Zap,
  Headphones,
  Sliders,
  Users,
  Globe2,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
  Building2,
  Server
} from 'lucide-react';

export default function About() {
  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'Regulated & Secure',
      description: 'Strict regulatory oversight, client funds segregated in Tier-1 banking partners, and guaranteed negative balance protection.'
    },
    {
      icon: Sliders,
      title: 'Ultra-Tight Spreads',
      description: 'Institutional ECN liquidity with raw market spreads starting from 0.0 pips and completely transparent zero-markup pricing.'
    },
    {
      icon: Zap,
      title: 'Lightning Execution',
      description: 'Ultra-low latency trade routing below 30ms via Equinix LD4, NY4, and TY3 data centers with no dealing desk intervention.'
    },
    {
      icon: Headphones,
      title: '24/5 Dedicated Support',
      description: 'Award-winning multilingual support specialists available 24 hours a day, 5 days a week via live chat, email, and phone.'
    }
  ];

  const stats = [
    { label: 'Active Clients Worldwide', value: '100,000+', change: 'Over 120 countries' },
    { label: 'Tradable Instruments', value: '500+', change: 'Forex, Metals, Indices, Crypto' },
    { label: 'Customer Support Desk', value: '24/5', change: 'Multilingual assistance' },
    { label: 'Server Execution Uptime', value: '99.9%', change: 'Ultra-low latency (<30ms)' }
  ];

  const teamMembers = [
    {
      name: 'Alexander Vance',
      role: 'Chief Executive Officer (CEO)',
      bio: 'Former Tier-1 investment bank executive with over 18 years of leadership across quantitative finance and international brokerage operations.',
      initials: 'AV'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Technology Officer (CTO)',
      bio: 'Leading high-frequency trading technologist with a proven track record architecting ultra-low latency execution engines and cloud security.',
      initials: 'ER'
    },
    {
      name: 'Marcus Thorne',
      role: 'Chief Risk & Compliance Officer',
      bio: 'Over 15 years advising international financial institutions on international regulatory compliance, anti-financial crime, and capital governance.',
      initials: 'MT'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="CORPORATE OVERVIEW"
        title="ABOUT P4 GLOBAL MARKET"
        subtitle="Your trusted partner in global trading"
        ctaText="OPEN ACCOUNT"
        ctaLink="/register"
        secondaryCtaText="EXPLORE LICENSES"
        secondaryCtaLink="/about/licenses"
      />

      {/* 2. WHO WE ARE */}
      <ContentSection heading="Who We Are" subtitle="Empowering retail and institutional traders across the globe with institutional-grade trading infrastructure.">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              <strong>P4 Global Market</strong> is a premier international multi-asset Forex and CFD brokerage dedicated to delivering an unmatched trading environment to clients worldwide.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              Serving active traders across more than 120 countries, we combine cutting-edge proprietary technology with deep Tier-1 institutional liquidity to eliminate artificial trading barriers. Whether you trade major currency pairs, spot gold, global stock indices, or cryptocurrencies, our pricing models ensure raw spreads from 0.0 pips and execution speeds under 30 milliseconds.
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              We operate with an unshakeable commitment to <strong>transparency, security, and continuous innovation</strong>. Our traders enjoy segregated accounts with Tier-1 banks, negative balance protection, and fair, transparent execution without dealing desk interference.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" /> FSA & CySEC Regulated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Segregated Client Funds
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" /> Zero Dealing Desk (NDD)
              </span>
            </div>
          </div>

          {/* Quick Highlight Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-7 sm:p-8 text-white border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00C853]/20 text-[#00C853] flex items-center justify-center font-bold">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Global Footprint</h4>
                    <p className="text-xs text-slate-400">Headquartered in Victoria, Seychelles</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-[#00C853]">
                  Active
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Trading Volume</span>
                  <span className="font-bold text-white font-mono">$12+ Billion / Month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Data Centers</span>
                  <span className="font-bold text-white">Equinix LD4, NY4, TY3</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Account Types</span>
                  <span className="font-bold text-[#00C853]">Standard, Pro, Cent, Islamic</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Platforms Supported</span>
                  <span className="font-bold text-white">MetaTrader 4 & MetaTrader 5</span>
                </div>
              </div>

              <Link
                to="/about/licenses"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>View Regulatory Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3 & 4. OUR MISSION & OUR VISION */}
      <ContentSection bg="bg-slate-50" heading="Our Mission & Vision" subtitle="A forward-thinking vision anchored by timeless commitments to client success and financial integrity.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To democratize access to global financial markets by equipping individual and professional traders with tier-1 liquidity, ultra-fast low-latency technology, transparent pricing models, and 24/5 dedicated client support. We strive to provide an uncompromised trading experience free from artificial restrictions or unfair slippage.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00C853] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To become the world's most trusted, technologically progressive, and trader-centric financial broker. We envision an international trading landscape where every trader, regardless of capital size or geographic location, enjoys institutional-grade security, instantaneous order settlement, and limitless opportunities.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 5. WHY CHOOSE US */}
      <ContentSection heading="Why Choose P4 Global Market" subtitle="Engineered by traders for traders, with industry-leading advantages designed to boost your trading edge.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((b, idx) => (
            <BenefitCard
              key={idx}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </ContentSection>

      {/* 6. OUR NUMBERS */}
      <ContentSection bg="bg-[#0a1929]" className="text-white" heading="" subtitle="">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C853] bg-[#00C853]/10 px-3.5 py-1 rounded-full border border-[#00C853]/25">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            P4 Global Market in Numbers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Demonstrated scale, robust financial strength, and an ever-expanding international community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/80 rounded-3xl p-6 sm:p-7 text-center backdrop-blur-md hover:border-[#00C853]/50 transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-[#00C853]">
                {s.value}
              </div>
              <div className="text-sm font-bold text-slate-200 mt-2">{s.label}</div>
              <div className="text-xs text-slate-400 mt-1">{s.change}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 7. OUR TEAM */}
      <ContentSection heading="Executive Leadership" subtitle="Guided by senior executives with extensive pedigree across global investment banking, fintech, and quantitative trading.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Photo / Avatar Placeholder with Stylized Gradient */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-[#00C853] flex items-center justify-center font-black text-2xl shadow-md border border-slate-700">
                  {member.initials}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#00C853] uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Executive Board</span>
                <span className="font-semibold text-slate-700">P4 Global Market</span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 8. CTA */}
      <CTASection
        heading="Experience Trading with P4 Global Market"
        subtitle="Open your live account in under 3 minutes and trade 500+ instruments with 0.0 pip spreads."
        primaryBtnText="OPEN ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
