import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Layers,
  Calculator,
  Lock,
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';

export default function CreditBonus() {
  const [openFaq, setOpenFaq] = useState(null);
  const [depositAmount, setDepositAmount] = useState(1500);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Bonus tier logic
  const calculateBonus = (amount) => {
    const num = Number(amount) || 0;
    if (num < 100) return { percent: 0, bonus: 0, maxBonus: 0 };
    if (num <= 500) {
      const bonus = Math.min(num * 0.20, 100);
      return { percent: 20, bonus, maxBonus: 100 };
    }
    if (num <= 2000) {
      const bonus = Math.min(num * 0.30, 600);
      return { percent: 30, bonus, maxBonus: 600 };
    }
    if (num <= 10000) {
      const bonus = Math.min(num * 0.40, 4000);
      return { percent: 40, bonus, maxBonus: 4000 };
    }
    const bonus = Math.min(num * 0.50, 10000);
    return { percent: 50, bonus, maxBonus: 10000 };
  };

  const calculated = calculateBonus(depositAmount);
  const totalCapital = Number(depositAmount || 0) + calculated.bonus;
  const lotsRequired = (calculated.bonus / 10).toFixed(1);

  const bonusTiers = [
    { depositRange: '$100 - $500', bonusPercent: '20%', maxBonus: '$100', tierBadge: 'Tier 1' },
    { depositRange: '$501 - $2,000', bonusPercent: '30%', maxBonus: '$600', tierBadge: 'Tier 2' },
    { depositRange: '$2,001 - $10,000', bonusPercent: '40%', maxBonus: '$4,000', tierBadge: 'Tier 3' },
    { depositRange: '$10,001+', bonusPercent: '50%', maxBonus: '$10,000', tierBadge: 'VIP Tier' }
  ];

  const steps = [
    {
      number: '1',
      title: 'Make a Deposit',
      desc: 'Deposit $100 or more into your verified MT4 or MT5 live account using your preferred payment method.'
    },
    {
      step: '2',
      number: '2',
      title: 'Bonus Automatically Credited',
      desc: 'Your tiered credit bonus is instantly calculated and added directly to your account credit column.'
    },
    {
      step: '3',
      number: '3',
      title: 'Start Trading with More Capital',
      desc: 'Open larger positions with magnified margin buffer, withstand market fluctuations, and withdraw all profits freely.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Buying Power',
      description: 'Expand your position size and trade bigger market moves without having to commit higher personal funds.'
    },
    {
      icon: ShieldCheck,
      title: 'Risk-Free Trading Cushion',
      description: 'Use broker credit as an added margin cushion against market drawdowns, helping prevent unexpected margin stop-outs.'
    },
    {
      icon: Lock,
      title: 'No Hidden Conditions',
      description: '100% transparent guidelines with clear volume milestones. No hidden lock-in penalties or complex restrictions.'
    },
    {
      icon: Zap,
      title: 'Instant Credit',
      description: 'Zero manual approvals or wait times. The algorithmic bonus system credits your trading platform automatically.'
    }
  ];

  const terms = [
    'Minimum qualifying deposit is $100.',
    'The credit bonus is non-withdrawable and serves as extra margin cushion for trading operations.',
    'All profits generated from trading with the credit bonus are 100% withdrawable at any time without penalty.',
    'Trading volume requirement: 1 standard lot traded per $10 of credit bonus received.',
    'The bonus is valid for 30 calendar days from the date of deposit.',
    'Any withdrawal of principal balance prior to completing volume requirements will adjust the bonus proportionally.',
    'Available on Standard and Pro accounts on MetaTrader 4 and MetaTrader 5.',
    'P4 Global Market reserves the right to cancel the credit bonus in cases of detected market manipulation or abusive trading strategies.'
  ];

  const faqs = [
    {
      q: 'What is the difference between my balance and credit bonus?',
      a: 'Your account Balance represents your own deposited funds and realized profits, which you can withdraw at any time. The Credit Bonus is supplementary trading capital funded by P4 Global Market that increases your total Equity (Equity = Balance + Credit). Credit can be used as margin to open positions.'
    },
    {
      q: 'Can I withdraw the credit bonus itself?',
      a: 'The bonus credit is non-withdrawable initially. However, once you satisfy the trading volume requirement of 1 standard lot per $10 of bonus within the 30-day period, the credit can be released to your withdrawable balance or you can withdraw all accrued profits anytime.'
    },
    {
      q: 'What happens if my equity drops below the credit amount?',
      a: 'The credit bonus acts as dynamic margin protection. If losses occur, your deposited funds are utilized first. If equity reaches stop-out levels, the standard risk management protocol triggers to prevent negative balances.'
    },
    {
      q: 'Can I combine the credit bonus with other promotions?',
      a: 'The credit bonus cannot be stacked with the Welcome Bonus on the same single deposit transaction. However, you can participate in the Refer a Friend program and earn Loyalty Points alongside your active credit bonus.'
    },
    {
      q: 'How long do I have to meet the volume requirement?',
      a: 'You have 30 full days from the moment the bonus is credited to meet the volume requirement. If the volume requirement is not met within 30 days, any trading profits remain yours, while the unearned promotional credit is simply removed.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <PageHero
        badge="EXCLUSIVE PROMOTION"
        title="CREDIT BONUS"
        subtitle="Boost your trading power with extra credit"
        ctaText="CLAIM YOUR BONUS"
        ctaLink="/register"
        secondaryCtaText="CALCULATE BONUS"
        secondaryCtaLink="#calculator"
      />

      {/* 2. WHAT IS CREDIT BONUS */}
      <ContentSection heading="Understanding the Credit Bonus">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              The <strong>P4 Global Market Credit Bonus</strong> is designed to elevate your trading performance by giving you direct access to additional trading credit deposited directly into your MT4/MT5 account.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#00C853] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Extra Trading Credit Added to Your Account</h4>
                  <p className="text-slate-600 text-sm">Receive between 20% to 50% in supplementary margin on every qualifying deposit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#00C853] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Trade with Substantially Larger Positions</h4>
                  <p className="text-slate-600 text-sm">Amplify your market exposure on Forex majors, commodities, indices, and crypto without overextending your cash.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#00C853] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Keep 100% of All Generated Profits</h4>
                  <p className="text-slate-600 text-sm">While the credit margin itself supports open positions, all profits earned using the extra margin are completely withdrawable.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Concept Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                  <Layers className="w-4 h-4 text-[#00C853]" />
                  <span>Equity Formula Breakdown</span>
                </div>
                <span className="text-xs bg-[#00C853]/20 text-[#00C853] px-2.5 py-0.5 rounded-full font-bold">Live Example</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
                  <span className="text-sm text-slate-400">Your Cash Deposit</span>
                  <span className="text-base font-bold text-white font-mono">$1,000.00</span>
                </div>
                <div className="text-center text-slate-500 font-bold text-lg">+</div>
                <div className="flex justify-between items-center bg-emerald-950/40 border border-[#00C853]/40 p-3.5 rounded-2xl">
                  <span className="text-sm text-emerald-300">Credit Bonus (30%)</span>
                  <span className="text-base font-bold text-[#00C853] font-mono">+$300.00</span>
                </div>
                <div className="text-center text-slate-500 font-bold text-lg">=</div>
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-900/60 to-slate-800 p-4 rounded-2xl border border-blue-500/30">
                  <span className="text-sm font-bold text-white">Total Trading Capital</span>
                  <span className="text-xl font-black text-white font-mono">$1,300.00</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                Trade with $1,300 worth of buying power while your principal deposit commitment was only $1,000.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. BONUS TIERS (Table & Calculator) */}
      <ContentSection
        id="bonus-tiers"
        bg="bg-slate-50"
        heading="Credit Bonus Tiers & Structure"
        subtitle="Our tiered percentage system ensures that both beginners and high-volume traders maximize their financial leverage."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tiers Table */}
          <div className="lg:col-span-7">
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0b172a] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold">Deposit Amount</th>
                    <th className="py-4 px-6 font-bold text-[#00C853]">Bonus %</th>
                    <th className="py-4 px-6 font-bold">Max Bonus</th>
                    <th className="py-4 px-6 font-bold">Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                  {bonusTiers.map((tier, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 font-mono">{tier.depositRange}</td>
                      <td className="py-4 px-6 font-bold text-[#00C853] text-base">{tier.bonusPercent}</td>
                      <td className="py-4 px-6 font-mono text-slate-900 font-semibold">{tier.maxBonus}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-slate-700">
                          {tier.tierBadge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 mt-3 px-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              Bonus amounts are calculated on each individual qualifying deposit.
            </p>
          </div>

          {/* Interactive Calculator */}
          <div id="calculator" className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-lg space-y-5">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                <Calculator className="w-5 h-5 text-[#00C853]" />
                <h3 className="text-lg font-bold text-slate-900">Bonus Calculator</h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Enter Deposit Amount ($ USD)
                </label>
                <div className="relative">
                  <DollarSign className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    min="100"
                    step="50"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853] transition-all"
                    placeholder="1000"
                  />
                </div>
              </div>

              {/* Slider shortcuts */}
              <div className="flex flex-wrap gap-2">
                {[250, 1000, 3000, 10000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setDepositAmount(preset)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      Number(depositAmount) === preset
                        ? 'bg-[#00C853] text-black border-[#00C853]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ${preset.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Calculation Output Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-4.5 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Bonus Percentage</span>
                  <span className="font-bold text-[#00C853]">{calculated.percent}%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Bonus Credit Added</span>
                  <span className="font-bold text-[#00C853] font-mono">+${calculated.bonus.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-slate-800 pt-2">
                  <span className="text-slate-300 font-semibold">Total Trading Equity</span>
                  <span className="font-black text-xl text-white font-mono">${totalCapital.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
                  <span>Trading Volume Required</span>
                  <span className="font-medium text-slate-200">{lotsRequired} standard lots</span>
                </div>
              </div>

              <Link
                to="/register"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-sm uppercase tracking-wider transition-all"
              >
                <span>Claim This Bonus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 4. HOW IT WORKS (3 Steps) */}
      <ContentSection
        heading="How the Credit Bonus Works"
        subtitle="Activate your trading bonus in three effortless steps."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#00C853] flex items-center justify-center font-bold text-xl">
                  {st.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{st.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 5. KEY BENEFITS (4 Cards) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Key Benefits of Trading with Credit"
        subtitle="Maximize strategic flexibility with capital tailored for volatile global markets."
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

      {/* 6. TERMS & CONDITIONS */}
      <ContentSection
        heading="Credit Bonus Terms & Conditions"
        subtitle="Clear rules ensuring equitable trading conditions across all accounts."
      >
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-4">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-lg mb-2">
            <FileText className="w-6 h-6 text-[#00C853]" />
            <span>Bonus Regulations & Requirements</span>
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

      {/* 7. FAQ (5 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Credit Bonus FAQ"
        subtitle="Everything you need to know about eligibility, calculations, and profit cashouts."
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

      {/* 8. CTA SECTION */}
      <CTASection
        heading="Boost Your Trading Power Today"
        subtitle="Deposit $100 or more and trade with up to $10,000 in additional credit bonus."
        primaryBtnText="CLAIM YOUR BONUS"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
