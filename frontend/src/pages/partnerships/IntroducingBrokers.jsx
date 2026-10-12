import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Users,
  DollarSign,
  TrendingUp,
  Headphones,
  Link as LinkIcon,
  Share2,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Globe2,
  FileText,
  Sparkles,
  Zap,
  Layout,
  PieChart
} from 'lucide-react';

export default function IntroducingBrokers() {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      icon: DollarSign,
      title: 'High Commissions',
      description: 'Earn industry-leading rebates up to $12 per standard lot on every trade executed by your referred traders, whether winning or losing.',
      highlight: 'Up to $12 / lot'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Tracking',
      description: 'Access a modern partner portal with live conversion metrics, multi-tier sub-IB hierarchies, trading volume statistics, and instant rebate updates.',
      highlight: 'Instant live analytics'
    },
    {
      icon: Layout,
      title: 'Marketing Support',
      description: 'Supercharge client acquisition with multi-language animated banners, high-converting custom landing pages, widgets, and branded educational resources.',
      highlight: 'Full creative toolkit'
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Manager',
      description: 'Receive personalized 1-on-1 strategic consulting from an experienced institutional partnership manager to maximize your conversion and retention.',
      highlight: '24/5 VIP partner support'
    }
  ];

  const tiers = [
    {
      tier: 'Tier 1 (Silver)',
      clients: '0 – 10 Active Clients',
      rebate: '$8.00 per lot',
      monthlyVolume: 'Up to 250 Lots',
      features: ['Daily automated payouts', 'Standard affiliate links', 'Real-time reporting portal', 'Standard promotional banners'],
      isPopular: false
    },
    {
      tier: 'Tier 2 (Gold)',
      clients: '11 – 50 Active Clients',
      rebate: '$10.00 per lot',
      monthlyVolume: '251 – 1,000 Lots',
      features: ['Daily automated payouts', 'Custom branded landing pages', 'Dedicated IB account manager', 'Sub-IB multi-tier earnings (10%)'],
      isPopular: true
    },
    {
      tier: 'Tier 3 (Platinum / VIP)',
      clients: '51+ Active Clients',
      rebate: '$12.00 per lot',
      monthlyVolume: '1,001+ Lots',
      features: ['Instant on-demand withdrawals', 'Custom bespoke commission contracts', 'Sponsored localized seminars/webinars', 'Sub-IB multi-tier earnings (20%)'],
      isPopular: false
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Register as an IB',
      desc: 'Complete our simple 2-minute partner application. Fast verification with zero setup fees or licensing hurdles.',
      icon: Users
    },
    {
      step: '02',
      title: 'Get Your Unique Referral Link',
      desc: 'Generate customized multi-asset tracking links, UTM campaign tags, and QR codes directly from your partner portal.',
      icon: LinkIcon
    },
    {
      step: '03',
      title: 'Share with Your Audience',
      desc: 'Promote P4 Global Market across social networks, YouTube, Telegram channels, trading communities, or websites.',
      icon: Share2
    },
    {
      step: '04',
      title: 'Earn Continuous Commissions',
      desc: 'Rebates credit automatically to your IB wallet for every lot traded by your clients. Withdraw anytime with zero restrictions.',
      icon: TrendingUp
    }
  ];

  const marketingTools = [
    {
      icon: Layout,
      title: 'High-Converting Banners',
      desc: 'Static and HTML5 animated banners in standard IAB sizes (300x250, 728x90, 160x600, etc.) in 10+ languages tailored for web display and blogs.'
    },
    {
      icon: Globe2,
      title: 'Localized Landing Pages',
      desc: 'Optimized landing pages customized with your partner ID designed for maximum lead capture, fast mobile loading, and high account opening rates.'
    },
    {
      icon: LinkIcon,
      title: 'Intelligent Tracking Links',
      desc: 'Deep-linking technology allowing you to route traffic to specific instruments (e.g. Gold, Forex, Crypto), demo signups, or bonus promotions.'
    },
    {
      icon: FileText,
      title: 'Turnkey Marketing Materials',
      desc: 'Co-branded slide decks, social media kits, email templates, educational eBooks, and market outlooks ready to share with your client base.'
    }
  ];

  const faqs = [
    {
      q: 'How much can I earn as an Introducing Broker (IB)?',
      a: 'There is zero cap on your earning potential. Commissions scale directly with the trading volume of your referred clients. Top P4 Global Market partners earn between $5,000 to over $50,000+ each month as their client base grows and trades actively.'
    },
    {
      q: 'When and how do I get paid my commissions?',
      a: 'Commissions are calculated automatically in real time and credited to your partner wallet daily. You can withdraw your earnings instantly via bank wire, crypto (USDT/BTC), or electronic wallets whenever you choose, with zero withdrawal fees.'
    },
    {
      q: 'Do I need a financial license to become an IB?',
      a: 'No financial license or regulatory registration is required to become an Introducing Broker in most jurisdictions. You simply introduce clients to P4 Global Market, and we handle all regulatory compliance, client onboarding, liquidity execution, and custodial security.'
    },
    {
      q: 'How do I track my referred clients and their trading volume?',
      a: 'You will receive 24/7 access to our advanced IB Partner Portal. It features real-time live dashboards showing newly registered clients, deposits, open positions, closed lots, commission accruals, and conversion percentages.'
    },
    {
      q: 'Can I become an IB if I am not currently working in the financial industry?',
      a: 'Absolutely! Many of our most successful IBs are trading educators, social media creators, signals channel admins, webmasters, or active traders who simply recommend P4 Global Market to fellow traders and friends.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="PARTNERSHIPS • INTRODUCING BROKER"
        title="INTRODUCING BROKERS"
        subtitle="Earn attractive commissions by referring clients to P4 Global Market"
        ctaText="BECOME AN IB TODAY"
        ctaLink="/register"
        secondaryCtaText="VIEW COMMISSION TIERS"
        secondaryCtaLink="#commission-structure"
      />

      {/* 2. WHAT IS AN INTRODUCING BROKER */}
      <ContentSection
        heading="What is an Introducing Broker (IB)?"
        subtitle="Partner with a globally recognized institutional broker and unlock recurring lifetime revenue from every trade your network makes."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              An <strong>Introducing Broker (IB)</strong> is an individual or company that introduces new traders and investors to P4 Global Market. In return, the broker rewards you with substantial ongoing rebates based on the trading volume generated by your referred clients.
            </p>
            <p>
              Unlike traditional one-time affiliate models, the P4 IB program offers <strong>continuous lifetime commissions</strong>. Every time your client opens and closes a position in Forex, Gold, Commodities, or Indices, you earn a commission—regardless of whether their trade results in a profit or loss.
            </p>
            <p>
              Best of all, <strong>no financial license is required</strong> in most jurisdictions to get started. P4 Global Market manages all custodial custody, execution infrastructure, KYC verifications, and 24/5 multilingual support, allowing you to focus entirely on expanding your trading network.
            </p>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1929] to-[#132f4c] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <span className="text-xs uppercase font-bold text-slate-400">P4 IB Program Snapshot</span>
              <span className="text-xs font-bold text-[#00C853] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> High-Yield Partnership
              </span>
            </div>
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Max Rebate</span>
                <span className="font-extrabold text-[#00C853] text-base">$12 per lot</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Payout Frequency</span>
                <span className="font-bold text-white">Daily / Automated</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Sub-IB Tier Earnings</span>
                <span className="font-bold text-white">Up to 20% Override</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-400">Setup & License Fees</span>
                <span className="font-extrabold text-[#00C853]">$0 (100% Free)</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. WHY BECOME AN IB (4 Benefit Cards) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Why Become a P4 Introducing Broker?"
        subtitle="We provide the highest rebate payouts, advanced multi-tier tracking, and personalized growth tools in the retail brokerage industry."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <BenefitCard
              key={idx}
              icon={b.icon}
              title={b.title}
              description={b.description}
              highlight={b.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 4. COMMISSION STRUCTURE (Table / Cards) */}
      <ContentSection
        id="commission-structure"
        heading="Competitive Commission Tier Structure"
        subtitle="Your rebate rate automatically increases as your active client base and monthly traded volume expand."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 border transition-all flex flex-col justify-between ${
                t.isPopular
                  ? 'bg-slate-900 text-white border-slate-800 shadow-2xl relative lg:-translate-y-2'
                  : 'bg-white text-slate-900 border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div>
                {t.isPopular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00C853] text-black text-[10px] font-black uppercase tracking-wider mb-4">
                    Most Popular Tier
                  </div>
                )}
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-black">{t.tier}</h4>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-4">{t.clients}</div>

                <div className="py-4 my-2 border-y border-slate-100/20 space-y-1">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Commission Payout</div>
                  <div className={`text-3xl font-black ${t.isPopular ? 'text-[#00C853]' : 'text-slate-900'}`}>
                    {t.rebate}
                  </div>
                  <div className="text-xs text-slate-400">Volume Range: {t.monthlyVolume}</div>
                </div>

                <div className="space-y-2.5 pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Included Benefits:</div>
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                      <span className={t.isPopular ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100/20">
                <Link
                  to="/register"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md ${
                    t.isPopular
                      ? 'bg-[#00C853] hover:bg-[#00e660] text-black'
                      : 'bg-slate-900 hover:bg-[#00C853] hover:text-black text-white'
                  }`}
                >
                  <span>Join as an IB</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. HOW IT WORKS (4 Steps) */}
      <ContentSection
        bg="bg-slate-50"
        heading="How the IB Program Works"
        subtitle="Four simple steps to launch your introducing broker business and start generating daily commissions."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md relative overflow-hidden group hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 select-none group-hover:text-blue-50 transition-colors">
                    {st.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-[#00C853]/10 group-hover:text-[#00C853] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 6. MARKETING TOOLS PROVIDED */}
      <ContentSection
        heading="Comprehensive Marketing Resources"
        subtitle="We provide high-impact creative promotional assets to help you attract, convert, and retain traders effortlessly."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketingTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#00C853]" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-base">{tool.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 7. FAQ (5 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Frequently Asked Questions"
        subtitle="Everything you need to know about starting, scaling, and withdrawing your IB partner earnings."
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
        heading="Become an IB Today"
        subtitle="Sign up in under 2 minutes, grab your custom tracking links, and start earning up to $12 per lot on your network's trading volume."
        primaryBtnText="BECOME AN IB TODAY"
        primaryBtnLink="/register"
        secondaryBtnText="CONTACT PARTNERSHIP TEAM"
        secondaryBtnLink="/contact"
      />
    </div>
  );
}
