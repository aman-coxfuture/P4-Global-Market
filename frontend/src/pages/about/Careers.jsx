import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import CTASection from '../../components/CTASection';
import {
  DollarSign,
  Laptop,
  HeartPulse,
  GraduationCap,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Mail,
  Send,
  Sparkles,
  Users
} from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary & Bonuses',
      description: 'Industry-leading compensation packages benchmarked globally with attractive annual performance bonuses and incentive equity.'
    },
    {
      icon: Laptop,
      title: 'Flexible & Remote Work',
      description: 'Work from our state-of-the-art regional hubs or choose 100% remote work with flexible hours tailored to your schedule.'
    },
    {
      icon: HeartPulse,
      title: 'Comprehensive Health Cover',
      description: 'Premium international medical, dental, and vision insurance for you and your direct dependents, plus wellness memberships.'
    },
    {
      icon: GraduationCap,
      title: 'Annual Learning Budget',
      description: 'Dedicated $2,500 annual stipend for certifications, professional courses, global conferences, and educational materials.'
    }
  ];

  const positions = [
    {
      id: 'fe-dev',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Architect and develop responsive, high-performance financial web applications using React, Tailwind CSS, TypeScript, and WebSockets.'
    },
    {
      id: 'be-eng',
      title: 'Backend Engineer',
      department: 'Core Infrastructure',
      location: 'Remote',
      type: 'Full-Time',
      experience: '4+ Years',
      description: 'Design and optimize scalable microservices, low-latency order routing bridges, and interbank API integrations using Node.js, Go, and Redis.'
    },
    {
      id: 'support-spec',
      title: 'Customer Support Specialist',
      department: 'Operations',
      location: 'Cyprus / Hybrid',
      type: 'Full-Time (Rotational)',
      experience: '2+ Years',
      description: 'Deliver world-class assistance across live chat, ticketing, and phone channels to our international trading community in English and other languages.'
    },
    {
      id: 'comp-officer',
      title: 'Compliance Officer',
      department: 'Legal & Regulatory',
      location: 'Cyprus',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Ensure statutory adherence to FSA and CySEC directives, conduct KYC and transaction monitoring reviews, and assist with supervisory filings.'
    },
    {
      id: 'mktg-mgr',
      title: 'Marketing Manager',
      department: 'Growth & Brand',
      location: 'Remote',
      type: 'Full-Time',
      experience: '4+ Years',
      description: 'Lead international digital acquisition campaigns, brand partnerships, affiliate network acceleration, and performance marketing funnels.'
    }
  ];

  const hiringSteps = [
    {
      number: '01',
      title: 'Application Review',
      desc: 'Submit your resume and portfolio. Our talent acquisition team reviews your background against open role criteria within 48 hours.'
    },
    {
      number: '02',
      title: 'Screening Call',
      desc: 'A friendly 30-minute introductory conversation to discuss your career aspirations, culture fit, and mutual expectations.'
    },
    {
      number: '03',
      title: 'Technical & Practical Interview',
      desc: 'A collaborative discussion or short practical assessment with engineering or team leadership focusing on real-world scenarios.'
    },
    {
      number: '04',
      title: 'Formal Offer',
      desc: 'We present a competitive offer package and comprehensive onboarding roadmap to welcome you to P4 Global Market.'
    }
  ];

  const perks = [
    'Generous 28 days paid annual leave plus public holidays',
    'Top-tier MacBook Pro or custom PC workstation allowance',
    'Parental leave policy with full salary continuation',
    'Annual company summits and team retreats in international locations',
    'Gym memberships and mental wellness support subscriptions',
    'Free access to live trading accounts with sponsored demo balances'
  ];

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    window.location.href = `mailto:careers@p4globalmarket.com?subject=${encodeURIComponent('Application for: ' + jobTitle)}`;
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="JOIN OUR TEAM"
        title="CAREERS"
        subtitle="Join our team and shape the future of trading"
        ctaText="EXPLORE OPEN POSITIONS"
        ctaLink="#positions"
        secondaryCtaText="ABOUT OUR COMPANY"
        secondaryCtaLink="/about"
      />

      {/* 2. WHY WORK WITH US */}
      <ContentSection
        heading="Why Build Your Career at P4 Global Market"
        subtitle="We foster a culture of technical curiosity, mutual autonomy, and rapid professional growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <BenefitCard
              key={idx}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </ContentSection>

      {/* 3. OPEN POSITIONS */}
      <ContentSection
        id="positions"
        bg="bg-slate-50"
        heading="Current Open Positions"
        subtitle="Find your next challenge and join a global team building financial tools used by hundreds of thousands."
      >
        <div className="space-y-4">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                    {pos.department}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-[#00C853]">
                    {pos.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{pos.title}</h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pos.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {pos.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                    {pos.experience}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  type="button"
                  onClick={() => handleApply(pos.title)}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Don't see your specific role? Send your spontaneous CV to{' '}
          <a href="mailto:careers@p4globalmarket.com" className="text-[#00C853] font-bold hover:underline">
            careers@p4globalmarket.com
          </a>
        </div>
      </ContentSection>

      {/* 4. HIRING PROCESS (4 Steps) */}
      <ContentSection
        heading="Our Transparent Hiring Process"
        subtitle="We value your time with a structured, clear four-step recruitment workflow."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#00C853] flex items-center justify-center font-black text-lg">
                  {st.number}
                </div>
                <h4 className="text-base font-bold text-slate-900">{st.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. PERKS & BENEFITS */}
      <ContentSection
        bg="bg-slate-50"
        heading="Company Perks & Team Wellness"
        subtitle="Enjoy benefits designed to help you thrive both inside and outside of work."
      >
        <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg mb-2">
            <Sparkles className="w-6 h-6 text-[#00C853]" />
            <span>Standard Global Benefits Package</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* 6. CTA */}
      <CTASection
        heading="Ready to Shape the Future of Trading?"
        subtitle="Explore exciting opportunities and collaborate with world-class engineers, designers, and financial specialists."
        primaryBtnText="VIEW ALL OPENINGS"
        primaryBtnLink="#positions"
        secondaryBtnText="ABOUT P4 GLOBAL MARKET"
        secondaryBtnLink="/about"
      />
    </div>
  );
}
