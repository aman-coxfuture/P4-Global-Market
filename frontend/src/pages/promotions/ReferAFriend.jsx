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
  Share2,
  Copy,
  Check,
  TrendingUp,
  Award,
  Zap,
  BarChart3,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  Sparkles,
  Send,
  MessageCircle
} from 'lucide-react';

export default function ReferAFriend() {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  const referralLink = 'https://p4market.com/ref/TRADER88492';

  const handleCopy = () => {
    navigator.clipboard?.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'Get Your Unique Referral Link',
      desc: 'Access your P4 Global Market client portal to copy your customized tracking link or download your personal QR code.'
    },
    {
      step: '02',
      title: 'Share with Friends & Community',
      desc: 'Share your link directly via WhatsApp, Telegram, email, social media, or your trading community.'
    },
    {
      step: '03',
      title: 'Friend Registers and Deposits',
      desc: 'Your friend signs up for a live trading account, completes quick KYC verification, and deposits a minimum of $100.'
    },
    {
      step: '04',
      title: 'You Earn $50 Cash per Referral',
      desc: 'As soon as your friend trades just 1 standard lot, your $50 reward is credited directly to your withdrawable balance.'
    }
  ];

  const rewardsTable = [
    { tier: '1st Referral', reward: '$50 Cash', milestone: 'Base Reward', highlight: 'Instant Cash' },
    { tier: '5th Referral', reward: '$100 Bonus', milestone: 'Bronze Milestone', highlight: '+$100 Extra' },
    { tier: '10th Referral', reward: '$250 Bonus', milestone: 'Silver Milestone', highlight: '+$250 Extra' },
    { tier: '25th Referral', reward: '$1,000 Bonus', milestone: 'Gold Milestone', highlight: '+$1,000 Extra' }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Unlimited Earnings',
      description: 'There is absolutely no cap on how many traders you can introduce or how much referral cash you can accumulate.'
    },
    {
      icon: Zap,
      title: 'Instant Payouts',
      description: 'Cash rewards are credited automatically into your wallet, fully withdrawable with zero lock-in restrictions.'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'One-click sharing buttons for WhatsApp, Telegram, and social channels, plus downloadable banners and QR codes.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Tracking',
      description: 'A comprehensive referral dashboard showing your clicks, registrations, active traders, and commission payouts live.'
    }
  ];

  const mockReferrals = [
    { name: 'Alex M.', country: 'UK', date: '2026-10-10', lots: '3.4 Lots', status: 'Completed', reward: '+$50.00' },
    { name: 'Sarah K.', country: 'UAE', date: '2026-10-08', lots: '1.2 Lots', status: 'Completed', reward: '+$50.00' },
    { name: 'Carlos R.', country: 'Spain', date: '2026-10-06', lots: '0.8 Lots', status: 'Trading (0.8/1.0)', reward: 'Pending' },
    { name: 'David L.', country: 'Singapore', date: '2026-10-02', lots: '12.0 Lots', status: 'Completed', reward: '+$50.00 + $100 Milestone' }
  ];

  const terms = [
    'Referred friends must be brand-new clients who have not previously registered with P4 Global Market.',
    'The referred client must make a minimum initial deposit of at least $100.',
    'The referred client must complete at least 1 standard lot of trading on Forex, Metals, or Commodities.',
    'Referral cash rewards are credited within 7 business days once qualification requirements are verified.',
    'Self-referrals, family members under identical residential IP addresses, or duplicate accounts are strictly prohibited.',
    'Both the referrer and referee must hold fully verified KYC trading accounts.',
    'P4 Global Market reserves the right to withhold rewards in instances of abusive trading or affiliate collusion.'
  ];

  const faqs = [
    {
      q: 'How many friends can I invite to P4 Global Market?',
      a: 'You can invite as many friends, colleagues, and social media followers as you want. There is no maximum limit on the number of qualifying referrals or the amount of cash rewards you can accumulate.'
    },
    {
      q: 'When and how will I receive the $50 referral reward?',
      a: 'Your $50 cash reward is automatically deposited directly into your P4 Global Market client balance within 24 to 48 hours (and up to 7 business days max) after your friend completes their $100 deposit and trades 1 standard lot.'
    },
    {
      q: 'Can my friend also receive the Welcome Bonus and promotional offers?',
      a: 'Yes! Your friend is fully eligible to claim the Welcome Bonus or Credit Bonus upon their first deposit, as well as participate in our demo contests and trade with 0.0 pip raw spreads.'
    },
    {
      q: 'How do the milestone bonuses (5th, 10th, 25th referral) work?',
      a: 'In addition to receiving $50 for every individual friend, you unlock accelerator cash milestones: an extra $100 when you reach your 5th qualified referral, an extra $250 on your 10th, and an extra $1,000 on your 25th referral.'
    },
    {
      q: 'Can I withdraw my referral rewards immediately?',
      a: 'Yes. All referral rewards are credited as pure cash balances, not trading credit. You can choose to withdraw the money immediately through any of our fee-free withdrawal methods, or use it as trading capital in your live account.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="PARTNERSHIP PROGRAM"
        title="REFER A FRIEND"
        subtitle="Earn $50 for every friend you refer"
        ctaText="START REFERRING NOW"
        ctaLink="/register"
        secondaryCtaText="REWARDS STRUCTURE"
        secondaryCtaLink="#rewards-structure"
      />

      {/* 2. WHAT IS REFER A FRIEND */}
      <ContentSection heading="About the Refer a Friend Program">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Sharing exceptional trading conditions has never been more rewarding. With the <strong>P4 Global Market Refer a Friend</strong> program, you turn your trading passion and social network into a continuous stream of pure cash income.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00C853] flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Invite Friends</div>
                <div className="text-xs text-slate-500 mt-0.5">Share with any trader worldwide</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Earn Cash Rewards</div>
                <div className="text-xs text-slate-500 mt-0.5">$50 flat fee + milestone bonuses</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="font-bold text-slate-900 text-sm">Unlimited Referrals</div>
                <div className="text-xs text-slate-500 mt-0.5">No maximum earnings cap</div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed pt-2">
              Every friend who joins enjoys ultra-fast execution under 30ms, raw spreads from 0.0 pips, and institutional liquidity, while you enjoy instant, withdrawable cash deposited straight to your wallet.
            </p>
          </div>

          {/* Quick Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0b172a] via-[#10243e] to-[#08121f] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-blue-900/40 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00C853] bg-[#00C853]/15 px-3 py-1 rounded-full border border-[#00C853]/30">
                  Instant Referral Reward
                </span>
                <span className="text-xs text-slate-400">Cash Balance</span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  $50 <span className="text-base sm:text-lg font-normal text-slate-300">/ per friend</span>
                </div>
                <p className="text-slate-300 text-sm mt-2">
                  Plus milestone bonuses up to <strong className="text-[#00C853]">$1,000 extra</strong> when your referral count climbs!
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Minimum Friend Deposit:</span>
                  <span className="font-bold text-white">$100</span>
                </div>
                <div className="flex justify-between">
                  <span>Trading Requirement:</span>
                  <span className="font-bold text-white">Just 1 standard lot</span>
                </div>
                <div className="flex justify-between">
                  <span>Payout Type:</span>
                  <span className="font-bold text-[#00C853]">100% Withdrawable Cash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. HOW IT WORKS (4 Steps) */}
      <ContentSection
        id="how-it-works"
        bg="bg-slate-50"
        heading="How the Referral Program Works"
        subtitle="Four clear and simple steps from sharing your link to collecting your reward."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00C853] flex items-center justify-center font-bold text-base">
                    {st.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Step {idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 4. REWARDS STRUCTURE (Table) */}
      <ContentSection
        id="rewards-structure"
        heading="Rewards & Milestone Accelerator"
        subtitle="Earn our base reward on every referral plus compounding cash milestones as you scale."
      >
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Referral Milestone</th>
                  <th className="py-4 px-6 font-bold text-[#00C853]">Reward Payout</th>
                  <th className="py-4 px-6 font-bold">Level Name</th>
                  <th className="py-4 px-6 font-bold">Bonus Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {rewardsTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.tier}</td>
                    <td className="py-4 px-6 font-bold text-[#00C853] font-mono text-base">{row.reward}</td>
                    <td className="py-4 px-6 text-slate-600">{row.milestone}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {row.highlight}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>Example: 25 qualifying referrals earn you <strong>$1,250 base reward + $1,350 milestone bonuses = $2,600 Cash!</strong></span>
            </div>
            <Link to="/register" className="text-[#00C853] font-bold hover:underline flex items-center gap-1">
              Start Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ContentSection>

      {/* 5. WHY REFER (4 Benefit Cards) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Why Refer Friends to P4 Global Market?"
        subtitle="A premier partnership program crafted for sustainable growth and instant monetization."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <BenefitCard
                key={idx}
                icon={Icon}
                title={b.title}
                description={b.description}
              />
            );
          })}
        </div>
      </ContentSection>

      {/* 6. REFERRAL DASHBOARD PREVIEW */}
      <ContentSection
        heading="Live Referral Portal Dashboard"
        subtitle="Manage your links, track referred friends in real-time, and monitor payouts inside your client portal."
      >
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl text-white">
          {/* Top Bar: Link Share & Copy */}
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00C853]">Your Personal Referral Link</span>
              <div className="font-mono text-sm sm:text-base text-slate-200 select-all font-semibold">
                {referralLink}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-black" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Join P4 Global Market with my link and get exclusive bonuses: ' + referralLink)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent('Trade with raw spreads on P4 Global Market!')}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                title="Share on Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4.5">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Total Referred</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">28</div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +4 this week
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4.5">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Qualified Traders</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00C853] mt-1">24</div>
              <div className="text-[11px] text-slate-400 mt-1">Traded &gt;1.0 Lot</div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4.5">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Total Earned</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">$2,450.00</div>
              <div className="text-[11px] text-[#00C853] mt-1">Paid to wallet</div>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4.5">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Pending Payouts</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">$150.00</div>
              <div className="text-[11px] text-slate-400 mt-1">Settlement in progress</div>
            </div>
          </div>

          {/* Recent Referral Activity Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              <span>Recent Referral Activity</span>
              <span className="text-[#00C853]">Live Data</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-800/30">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-800/80 text-slate-300 font-semibold uppercase tracking-wider border-b border-slate-700/60">
                    <th className="py-3 px-4">Friend</th>
                    <th className="py-3 px-4">Country</th>
                    <th className="py-3 px-4">Registration</th>
                    <th className="py-3 px-4">Volume</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-medium text-slate-300">
                  {mockReferrals.map((ref, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{ref.name}</td>
                      <td className="py-3 px-4 text-slate-400">{ref.country}</td>
                      <td className="py-3 px-4 text-slate-400 font-mono">{ref.date}</td>
                      <td className="py-3 px-4 font-mono">{ref.lots}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            ref.status.includes('Completed')
                              ? 'bg-emerald-500/20 text-[#00C853]'
                              : 'bg-amber-500/20 text-amber-400'
                          }`}
                        >
                          {ref.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-[#00C853] font-mono">
                        {ref.reward}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 7. TERMS & CONDITIONS */}
      <ContentSection
        bg="bg-slate-50"
        heading="Refer a Friend Terms & Conditions"
        subtitle="Guidelines governing qualification, fair usage, and reward distribution."
      >
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg mb-2">
            <FileText className="w-6 h-6 text-[#00C853]" />
            <span>Program Eligibility & Rules</span>
          </div>

          <ul className="space-y-3.5 text-sm text-slate-700">
            {terms.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      {/* 8. FAQ (5 Questions) */}
      <ContentSection
        heading="Refer a Friend FAQ"
        subtitle="Frequently asked questions about referrals, tracking links, and cash withdrawals."
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 9. CTA SECTION */}
      <CTASection
        heading="Start Referring & Earning Today"
        subtitle="Get your unique referral link now and earn $50 cash for every friend who joins P4 Global Market."
        primaryBtnText="START REFERRING NOW"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
