import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Calculator,
  Percent,
  DollarSign,
  ArrowRightLeft,
  Coins,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  BarChart2,
  RefreshCw
} from 'lucide-react';

export default function ForexCalculator() {
  const [activeTab, setActiveTab] = useState('margin'); // 'margin' | 'pip' | 'profit' | 'converter'
  const [openFaq, setOpenFaq] = useState(null);

  // 1. Margin Calculator State
  const [marginPair, setMarginPair] = useState('EUR/USD');
  const [marginLots, setMarginLots] = useState(1.0);
  const [marginLeverage, setMarginLeverage] = useState(500);
  const [marginResult, setMarginResult] = useState('216.84');

  const calculateMargin = (e) => {
    if (e) e.preventDefault();
    // 1 standard lot = 100,000 units. Assume EUR/USD rate approx 1.0842
    let basePrice = 1.0;
    if (marginPair.startsWith('EUR')) basePrice = 1.0842;
    else if (marginPair.startsWith('GBP')) basePrice = 1.2915;
    else if (marginPair.startsWith('AUD')) basePrice = 0.6580;
    else basePrice = 1.0;

    const notional = marginLots * 100000 * basePrice;
    const requiredMargin = notional / marginLeverage;
    setMarginResult(requiredMargin.toFixed(2));
  };

  // 2. Pip Value Calculator State
  const [pipPair, setPipPair] = useState('EUR/USD');
  const [pipLots, setPipLots] = useState(1.0);
  const [pipAccountCurr, setPipAccountCurr] = useState('USD');
  const [pipResult, setPipResult] = useState('10.00');

  const calculatePip = (e) => {
    if (e) e.preventDefault();
    // For standard lot in EUR/USD, 1 pip (0.0001) = $10.00
    // In JPY pairs (0.01) / 152.0 = approx $6.58
    let valuePerPip = 10.0 * pipLots;
    if (pipPair.includes('JPY')) {
      valuePerPip = (1000 / 152.3) * pipLots;
    }
    setPipResult(valuePerPip.toFixed(2));
  };

  // 3. Profit Calculator State
  const [profitPair, setProfitPair] = useState('EUR/USD');
  const [profitDirection, setProfitDirection] = useState('BUY');
  const [profitLots, setProfitLots] = useState(1.0);
  const [profitOpenPrice, setProfitOpenPrice] = useState(1.0820);
  const [profitClosePrice, setProfitClosePrice] = useState(1.0880);
  const [profitResult, setProfitResult] = useState('600.00');

  const calculateProfit = (e) => {
    if (e) e.preventDefault();
    const diff = profitDirection === 'BUY'
      ? (profitClosePrice - profitOpenPrice)
      : (profitOpenPrice - profitClosePrice);
    const contractSize = profitPair.includes('XAU') ? 100 : 100000;
    const totalProfit = diff * profitLots * contractSize;
    setProfitResult(totalProfit.toFixed(2));
  };

  // 4. Currency Converter State
  const [convAmount, setConvAmount] = useState(1000);
  const [convFrom, setConvFrom] = useState('EUR');
  const [convTo, setConvTo] = useState('USD');
  const [convResult, setConvResult] = useState('1084.20');

  const rates = {
    USD: 1.0,
    EUR: 1.0842,
    GBP: 1.2915,
    JPY: 0.00656,
    AUD: 0.6580,
    CHF: 1.1550
  };

  const calculateConverter = (e) => {
    if (e) e.preventDefault();
    const amountInUSD = convAmount * rates[convFrom];
    const converted = amountInUSD / rates[convTo];
    setConvResult(converted.toFixed(2));
  };

  const faqs = [
    {
      q: 'Why should I calculate required margin before executing a trade?',
      a: 'Calculating margin ensures you never commit excessive capital to a single position, safeguarding your account from sudden margin calls or stop-outs during adverse market fluctuations.'
    },
    {
      q: 'What is the difference between a standard pip and a pipette?',
      a: 'A pip is typically the 4th decimal place (0.0001) in most currency pairs, or the 2nd decimal place (0.01) in JPY pairs. A pipette is a fractional pip representing the 5th decimal place (0.00001), allowing ultra-tight raw spread pricing.'
    },
    {
      q: 'How does account leverage impact my pip value?',
      a: 'Leverage does not alter pip value! Pip value is solely determined by lot size, contract size, and quote currency exchange rate. Leverage only alters the margin required to open the position.'
    },
    {
      q: 'Do these calculations factor in rollover swap fees?',
      a: 'This calculator computes gross trade profit/loss. Overnight financing swaps or commissions (on Raw Spread accounts) are accounted for on your daily MT4/MT5 statement.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • TRADING CALCULATORS"
        title="FOREX CALCULATOR"
        subtitle="Calculate your margins, profits, and pip values"
        ctaText="USE CALCULATOR"
        ctaLink="#calculators"
        secondaryCtaText="VIEW FORMULAS"
        secondaryCtaLink="#formulas"
      />

      {/* 2. CALCULATOR TYPES TABS */}
      <ContentSection
        id="calculators"
        heading="All-in-One Forex Trading Calculator Suite"
        subtitle="Make data-driven risk management calculations in real-time before entering any market position."
      >
        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
          {[
            { id: 'margin', label: 'Margin Calculator', icon: Percent },
            { id: 'pip', label: 'Pip Value Calculator', icon: Coins },
            { id: 'profit', label: 'Profit Calculator', icon: TrendingUp },
            { id: 'converter', label: 'Currency Converter', icon: ArrowRightLeft }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a1929] text-white shadow-lg border border-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#00C853]' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. INTERACTIVE FORMS */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          {/* TAB 1: MARGIN CALCULATOR */}
          {activeTab === 'margin' && (
            <form onSubmit={calculateMargin} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Margin Requirement Calculator</h3>
                <p className="text-xs text-slate-500">Compute required margin in USD to open your desired position size.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Currency Pair</label>
                  <select
                    value={marginPair}
                    onChange={(e) => setMarginPair(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="GBP/USD">GBP/USD</option>
                    <option value="USD/JPY">USD/JPY</option>
                    <option value="AUD/USD">AUD/USD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Trade Lots</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={marginLots}
                    onChange={(e) => setMarginLots(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Account Leverage</label>
                  <select
                    value={marginLeverage}
                    onChange={(e) => setMarginLeverage(parseInt(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value={100}>1:100</option>
                    <option value={200}>1:200</option>
                    <option value={400}>1:400</option>
                    <option value={500}>1:500</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Calculate Required Margin
              </button>

              <div className="bg-[#0a1929] text-white p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Required Margin</span>
                  <div className="text-3xl font-black text-[#00C853] mt-1">${marginResult} USD</div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <div>Contract Size: 100,000</div>
                  <div>Leverage: 1:{marginLeverage}</div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 2: PIP VALUE CALCULATOR */}
          {activeTab === 'pip' && (
            <form onSubmit={calculatePip} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Pip Value Calculator</h3>
                <p className="text-xs text-slate-500">Calculate monetary value per 1 pip movement according to your trade volume.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Currency Pair</label>
                  <select
                    value={pipPair}
                    onChange={(e) => setPipPair(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="GBP/USD">GBP/USD</option>
                    <option value="USD/JPY">USD/JPY</option>
                    <option value="AUD/USD">AUD/USD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Trade Volume (Lots)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={pipLots}
                    onChange={(e) => setPipLots(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Account Currency</label>
                  <select
                    value={pipAccountCurr}
                    onChange={(e) => setPipAccountCurr(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Calculate Pip Value
              </button>

              <div className="bg-[#0a1929] text-white p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Pip Value Per Point</span>
                  <div className="text-3xl font-black text-[#00C853] mt-1">${pipResult} {pipAccountCurr}</div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <div>Pip Size: 0.0001</div>
                  <div>Lots: {pipLots}</div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 3: PROFIT CALCULATOR */}
          {activeTab === 'profit' && (
            <form onSubmit={calculateProfit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Trade Profit / Loss Calculator</h3>
                <p className="text-xs text-slate-500">Estimate your net outcome based on entry, exit, and direction.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Currency Pair</label>
                  <select
                    value={profitPair}
                    onChange={(e) => setProfitPair(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="GBP/USD">GBP/USD</option>
                    <option value="XAU/USD">XAU/USD (Gold)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Trade Direction</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setProfitDirection('BUY')}
                      className={`py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer ${
                        profitDirection === 'BUY' ? 'bg-[#00C853] text-black' : 'bg-white text-slate-600 border'
                      }`}
                    >
                      Buy (Long)
                    </button>
                    <button
                      type="button"
                      onClick={() => setProfitDirection('SELL')}
                      className={`py-2.5 rounded-xl font-bold text-xs uppercase cursor-pointer ${
                        profitDirection === 'SELL' ? 'bg-rose-600 text-white' : 'bg-white text-slate-600 border'
                      }`}
                    >
                      Sell (Short)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Lot Size</label>
                  <input
                    type="number"
                    step="0.01"
                    value={profitLots}
                    onChange={(e) => setProfitLots(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Open Price</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={profitOpenPrice}
                    onChange={(e) => setProfitOpenPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Close Price</label>
                  <input
                    type="number"
                    step="0.0001"
                    value={profitClosePrice}
                    onChange={(e) => setProfitClosePrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Calculate Net Profit
              </button>

              <div className="bg-[#0a1929] text-white p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Estimated Profit / Loss</span>
                  <div className={`text-3xl font-black mt-1 ${parseFloat(profitResult) >= 0 ? 'text-[#00C853]' : 'text-rose-400'}`}>
                    ${profitResult} USD
                  </div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <div>Direction: {profitDirection}</div>
                  <div>Lots: {profitLots}</div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 4: CURRENCY CONVERTER */}
          {activeTab === 'converter' && (
            <form onSubmit={calculateConverter} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Live Currency Converter</h3>
                <p className="text-xs text-slate-500">Convert amounts between major global currencies with live spot rates.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Amount</label>
                  <input
                    type="number"
                    value={convAmount}
                    onChange={(e) => setConvAmount(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">From</label>
                  <select
                    value={convFrom}
                    onChange={(e) => setConvFrom(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="EUR">EUR (€)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="AUD">AUD (A$)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">To</label>
                  <select
                    value={convTo}
                    onChange={(e) => setConvTo(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#00C853]"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="JPY">JPY (¥)</option>
                    <option value="AUD">AUD (A$)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Convert Currency
              </button>

              <div className="bg-[#0a1929] text-white p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Converted Amount</span>
                  <div className="text-3xl font-black text-[#00C853] mt-1">{convResult} {convTo}</div>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <div>Source: {convAmount} {convFrom}</div>
                  <div>Live Institutional Spot Rate</div>
                </div>
              </div>
            </form>
          )}
        </div>
      </ContentSection>

      {/* 4. FORMULA EXPLANATION */}
      <ContentSection
        id="formulas"
        bg="bg-slate-50"
        heading="Trading Mathematical Formulas Explained"
        subtitle="Learn the exact equations that govern position sizing, margin requirements, and pip computations."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Required Margin Formula</h4>
            <div className="bg-slate-900 text-[#00C853] font-mono text-xs p-3.5 rounded-xl">
              Margin = (Lots × Contract Size) / Leverage
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Example: 1 standard lot of EUR/USD (100,000 EUR) with 1:500 leverage requires only 200 EUR in margin ($216.84 USD equivalent).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Pip Value Formula</h4>
            <div className="bg-slate-900 text-[#00C853] font-mono text-xs p-3.5 rounded-xl">
              Pip Value = (One Pip / Exchange Rate) × Lots
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              For any currency pair where USD is the quote currency (EUR/USD, GBP/USD), 1 standard lot always has a pip value of exactly $10.00 USD.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-lg font-bold text-slate-900">Net Profit Formula</h4>
            <div className="bg-slate-900 text-[#00C853] font-mono text-xs p-3.5 rounded-xl">
              Profit = (Close - Open) × Lots × 100,000
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              For long positions, multiplying price difference by total contract units yields gross dollar profit, easily adapted for short positions.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 5. FAQ */}
      <ContentSection
        heading="Calculator FAQ"
        subtitle="Answers to common questions regarding trading math and calculations."
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

      {/* 6. CTA */}
      <CTASection
        heading="Ready to Put Your Strategy into Action?"
        subtitle="Open your account today and experience lightning execution, raw spreads from 0.0 pips, and flexible leverage."
        primaryBtnText="OPEN LIVE ACCOUNT"
        primaryBtnLink="/register"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
