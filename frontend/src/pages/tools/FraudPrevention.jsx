import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  MailWarning,
  Coins,
  TrendingDown,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Send,
  Lock,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

export default function FraudPrevention() {
  const [openFaq, setOpenFaq] = useState(null);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scamType: 'Fake Broker / Clone Website',
    urlOrContact: '',
    details: ''
  });

  const commonScams = [
    {
      icon: ShieldAlert,
      title: 'Fake Brokers & Clone Websites',
      description: 'Fraudulent entities create lookalike websites mimicking regulated brokers using slightly altered domain names or stolen logo imagery to steal deposits.',
      highlight: 'Check Domain Verification'
    },
    {
      icon: MailWarning,
      title: 'Phishing Emails & Impersonation',
      description: 'Deceptive emails or fake Telegram channels impersonating P4 support agents requesting passwords, OTP codes, or remote screen-sharing access.',
      highlight: 'Never Share Passwords'
    },
    {
      icon: Coins,
      title: 'Ponzi Schemes & Guaranteed Returns',
      description: 'Promises of guaranteed daily or weekly payouts with "zero risk". Legitimate trading involves market risk; genuine brokers never guarantee returns.',
      highlight: 'Zero Risk is a Scam'
    },
    {
      icon: TrendingDown,
      title: 'Fake Signal Sellers & Account Managers',
      description: 'Unregulated individuals demanding upfront payment for "100% win rate signals" or offering to manage your trading account in exchange for direct transfers.',
      highlight: 'Avoid Unverified Managers'
    }
  ];

  const safetyRules = [
    {
      title: 'Always Verify Official Domains',
      desc: 'Ensure the URL begins strictly with https:// and our genuine domain name. Never log in through unverified links sent via WhatsApp or Telegram.'
    },
    {
      title: 'Enable Two-Factor Authentication (2FA)',
      desc: 'Activate Google Authenticator or SMS 2FA on your P4 Client Portal to ensure no unauthorized withdrawals can occur.'
    },
    {
      title: 'P4 Staff Never Ask for Your Password or OTP',
      desc: 'Our official support team will NEVER ask for your trading password, one-time security codes, or ask you to transfer funds to personal crypto wallets.'
    },
    {
      title: 'Only Deposit Through Official Client Portal',
      desc: 'All legitimate deposits and withdrawals take place strictly inside the secure P4 Portal, never via direct peer-to-peer bank transfers.'
    }
  ];

  const redFlags = [
    'Guaranteed returns or promises of doubling your money in days',
    'Unsolicited contact from "Account Managers" on Telegram, WhatsApp, or Instagram',
    'Demands for "tax fees" or "clearance charges" before allowing you to withdraw',
    'Pressure to deposit immediately to take advantage of an "exclusive opportunity"',
    'Requests to download remote desktop access software like AnyDesk or TeamViewer'
  ];

  const scamSteps = [
    {
      step: '01',
      title: 'Cut Off Immediate Contact',
      desc: 'Immediately cease all communication with the suspected fraudsters. Block their phone numbers, email addresses, and messaging profiles.'
    },
    {
      step: '02',
      title: 'Contact Your Bank / Payment Provider',
      desc: 'Immediately report unauthorized transactions to your credit card company, bank, or payment processor to initiate chargebacks or freeze cards.'
    },
    {
      step: '03',
      title: 'Secure Your Accounts & Passwords',
      desc: 'Change passwords on your email accounts, trading profiles, and financial portals immediately. Terminate any active remote sessions.'
    },
    {
      step: '04',
      title: 'Report Incident to Authorities & P4',
      desc: 'File an official report with your local cybercrime or financial regulatory bureau, and submit the details to P4 Global Market Compliance below.'
    }
  ];

  const handleSubmitReport = (e) => {
    e.preventDefault();
    setReportSubmitted(true);
  };

  const faqs = [
    {
      q: 'How can I verify if an email or representative is really from P4 Global Market?',
      a: 'All official correspondence originates solely from verified @p4market.com domains. You can verify any communication by contacting our official 24/5 support desk via live chat.'
    },
    {
      q: 'Does P4 Global Market ever trade on behalf of clients?',
      a: 'No. P4 Global Market is an execution-only broker. We do not manage accounts, provide financial advisory, or promise investment returns on behalf of clients.'
    },
    {
      q: 'What should I do if I receive a suspicious link claiming to be P4?',
      a: 'Do not click the link or enter your credentials. Forward the link and relevant screenshots to compliance@p4market.com immediately so our security team can blacklist it.'
    },
    {
      q: 'Are client funds segregated at P4 Global Market?',
      a: 'Yes. All client funds are held in strictly segregated bank accounts at Tier-1 banking institutions, completely ring-fenced from company operational funds.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • SECURITY & SAFETY"
        title="FRAUD PREVENTION"
        subtitle="Protect yourself from online trading scams"
        ctaText="STAY SAFE"
        ctaLink="#report"
        secondaryCtaText="RECOGNIZE SCAMS"
        secondaryCtaLink="#scams"
      />

      {/* 2. COMMON SCAMS */}
      <ContentSection
        id="scams"
        heading="Common Online Trading Scams"
        subtitle="Learn how malicious actors attempt to deceive traders and how to identify fraudulent activities."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonScams.map((scam, idx) => (
            <BenefitCard
              key={idx}
              icon={scam.icon}
              title={scam.title}
              description={scam.description}
              highlight={scam.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 3. HOW TO PROTECT YOURSELF */}
      <ContentSection
        bg="bg-slate-50"
        heading="How to Protect Yourself"
        subtitle="Adopt these fundamental security best practices to keep your funds and credentials completely secure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00C853] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-base">{rule.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 4. WARNING SIGNS (RED FLAGS) */}
      <ContentSection
        heading="Red Flags & Warning Signs"
        subtitle="If you encounter any of the following warning signs, stop all activity immediately."
      >
        <div className="max-w-4xl mx-auto bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
            <h3 className="text-xl font-bold text-rose-950">Immediate Warning Indicators</h3>
          </div>
          <div className="space-y-3">
            {redFlags.map((flag, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-rose-900">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-medium">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* 5. WHAT TO DO IF SCAMMED */}
      <ContentSection
        bg="bg-slate-50"
        heading="What to Do If You Suspect Fraud"
        subtitle="Take immediate, structured action to minimize potential damage and preserve evidence."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scamSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-black text-slate-200 mb-2">{st.step}</div>
                <h4 className="font-bold text-slate-900 text-base mb-2">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 6. REPORT FRAUD (CONTACT FORM) */}
      <ContentSection
        id="report"
        heading="Report Suspicious Activity or Fraud"
        subtitle="Help us safeguard the trading community by submitting suspected clone websites, scammers, or imposters."
      >
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          {reportSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00C853] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Report Successfully Submitted</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for notifying us. Our cybersecurity and compliance departments have logged this report and initiated investigation.
              </p>
              <button
                type="button"
                onClick={() => setReportSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase cursor-pointer"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitReport} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Scam Category</label>
                <select
                  value={formData.scamType}
                  onChange={(e) => setFormData({ ...formData, scamType: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                >
                  <option value="Fake Broker / Clone Website">Fake Broker / Clone Website</option>
                  <option value="Impersonator on Telegram/WhatsApp">Impersonator on Telegram/WhatsApp</option>
                  <option value="Phishing Email / Fake Login Link">Phishing Email / Fake Login Link</option>
                  <option value="Unsolicited Guaranteed Profit Offer">Unsolicited Guaranteed Profit Offer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Suspect URL, Phone, or Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. @fake_p4_support, +123456789, or https://suspicious-clone.com"
                  value={formData.urlOrContact}
                  onChange={(e) => setFormData({ ...formData, urlOrContact: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#00C853]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Incident Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe what occurred, what was promised, and any transaction IDs..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#00C853]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#00C853] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Fraud Report to Compliance</span>
              </button>
            </form>
          )}
        </div>
      </ContentSection>

      {/* 7. FAQ */}
      <ContentSection
        bg="bg-slate-50"
        heading="Security FAQ"
        subtitle="Common questions about our fund security protocols and account safety."
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 8. CTA */}
      <CTASection
        heading="Trade Safely with a Regulated Broker"
        subtitle="Join P4 Global Market for segregated Tier-1 banking, 256-bit encryption, and guaranteed security of client funds."
        primaryBtnText="STAY SAFE"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
