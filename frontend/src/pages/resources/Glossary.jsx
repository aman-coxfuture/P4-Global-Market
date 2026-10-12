import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import CTASection from '../../components/CTASection';
import {
  Search,
  BookOpen,
  ChevronDown,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const [openTerm, setOpenTerm] = useState(null);

  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const glossaryTerms = [
    {
      term: 'Arbitrage',
      def: 'The simultaneous purchase and sale of an asset in different markets to profit from momentary price discrepancies with virtually zero risk.'
    },
    {
      term: 'Ask Price (Offer)',
      def: 'The market price at which a broker or seller is willing to sell a financial instrument. When you open a BUY (Long) order, you enter at the Ask price.'
    },
    {
      term: 'Base Currency',
      def: 'The first currency referenced in a currency pair quote (e.g., in EUR/USD, EUR is the base currency, indicating how much quote currency is needed to buy 1 unit of base).'
    },
    {
      term: 'Bear Market',
      def: 'A prolonged market condition characterized by falling asset prices, widespread investor pessimism, and prevailing downward momentum.'
    },
    {
      term: 'Bid Price',
      def: 'The price at which a buyer or broker is willing to purchase a financial asset. When you open a SELL (Short) order, you enter at the Bid price.'
    },
    {
      term: 'Bollinger Bands',
      def: 'A volatility indicator comprising a simple moving average flanked by upper and lower standard deviation bands that expand and contract as market volatility shifts.'
    },
    {
      term: 'Breakout',
      def: 'A price movement where an asset breaches an established support or resistance level with increased volume and directional momentum.'
    },
    {
      term: 'Bull Market',
      def: 'A market trend characterized by rising prices, investor confidence, and sustained upward price trajectory.'
    },
    {
      term: 'Candlestick',
      def: 'A charting method displaying the Open, High, Low, and Close (OHLC) prices of an asset over a specified timeframe with a visual body and upper/lower wicks.'
    },
    {
      term: 'Central Bank',
      def: 'The national institution managing a country’s monetary policy, currency issuance, and benchmark interest rates (e.g., Federal Reserve, ECB, Bank of Japan).'
    },
    {
      term: 'CFD (Contract for Difference)',
      def: 'A financial derivative that allows traders to speculate on the price movement of an underlying asset without taking physical delivery or ownership of it.'
    },
    {
      term: 'Commission',
      def: 'A flat fee charged by a broker for executing a trade, commonly applied on Raw Spread accounts in exchange for institutional 0.0 pip spreads.'
    },
    {
      term: 'Consumer Price Index (CPI)',
      def: 'A primary macroeconomic indicator measuring the average change over time in prices paid by consumers for a basket of goods, used as a benchmark for inflation.'
    },
    {
      term: 'Day Trading',
      def: 'A trading style where positions are opened and closed within the same trading day to avoid overnight financing fees and gap risk.'
    },
    {
      term: 'Drawdown',
      def: 'The measure of decline from an account\'s peak equity to its subsequent trough, expressed as a monetary amount or percentage of peak capital.'
    },
    {
      term: 'Economic Calendar',
      def: 'A scheduled timeline of global macroeconomic reports, rate announcements, and geopolitical speeches that trigger financial volatility.'
    },
    {
      term: 'Equity',
      def: 'The total real-time value of a trading account, calculated as Account Balance plus floating profits minus floating losses.'
    },
    {
      term: 'Expert Advisor (EA)',
      def: 'An automated trading script or algorithmic bot developed in MQL4 or MQL5 that executes trades automatically according to programmed rules on MetaTrader.'
    },
    {
      term: 'Federal Reserve (Fed)',
      def: 'The central banking system of the United States responsible for setting the Fed Funds Rate and implementing monetary policy.'
    },
    {
      term: 'Fibonacci Retracement',
      def: 'A technical analysis tool using mathematical ratios (23.6%, 38.2%, 50%, 61.8%) to identify potential support and reversal areas during a trend pullback.'
    },
    {
      term: 'Free Margin',
      def: 'The portion of account equity not committed to securing existing open positions, available for opening new trades or withdrawing funds.'
    },
    {
      term: 'Fundamental Analysis',
      def: 'Evaluating asset value by analyzing macroeconomic factors, interest rates, GDP reports, employment data, and corporate earnings.'
    },
    {
      term: 'Gross Domestic Product (GDP)',
      def: 'The monetary measure of the market value of all finished goods and services produced in a country over a specific period.'
    },
    {
      term: 'Hedging',
      def: 'Opening opposing positions in correlated assets to mitigate downside risk and protect an overall portfolio against adverse market moves.'
    },
    {
      term: 'Inflation',
      def: 'The gradual increase in prices across an economy over time, which reduces the purchasing power of money and influences central bank interest rates.'
    },
    {
      term: 'Japanese Candlestick Pattern',
      def: 'Specific visual combinations of candlesticks (e.g., Hammer, Engulfing, Doji) that suggest potential trend reversals or continuations.'
    },
    {
      term: 'Leverage',
      def: 'The use of borrowed funds provided by the broker to open larger position sizes with a smaller initial capital deposit (e.g., 1:500 leverage).'
    },
    {
      term: 'Liquidity',
      def: 'The ease and speed with which an asset can be converted into cash or bought/sold in the market without causing significant price impact.'
    },
    {
      term: 'Long Position (Buy)',
      def: 'Entering an order with the expectation that the asset price will appreciate, closing later at a higher price to generate a profit.'
    },
    {
      term: 'Lot',
      def: 'The standardized trade volume measurement in Forex. 1 Standard Lot = 100,000 units; 1 Mini Lot = 10,000 units; 1 Micro Lot = 1,000 units.'
    },
    {
      term: 'MACD (Moving Average Convergence Divergence)',
      def: 'A trend-following momentum oscillator comparing two exponential moving averages to identify changes in trend direction and momentum.'
    },
    {
      term: 'Margin',
      def: 'The collateral deposit required by a broker to open and maintain a leveraged trading position.'
    },
    {
      term: 'Margin Call',
      def: 'A warning alert issued when an account’s equity falls below the broker’s minimum required maintenance margin level.'
    },
    {
      term: 'Market Order',
      def: 'An instruction to execute a buy or sell order immediately at the best available current market price.'
    },
    {
      term: 'MetaTrader 4 (MT4)',
      def: 'A globally recognized electronic trading platform developed by MetaQuotes widely used for retail Forex trading and algorithmic automation.'
    },
    {
      term: 'MetaTrader 5 (MT5)',
      def: 'The multi-asset successor to MT4, providing faster 64-bit architecture, 21 timeframes, integrated economic calendar, and Depth of Market (DOM).'
    },
    {
      term: 'Moving Average (MA)',
      def: 'A technical analysis indicator that smooths out price action by calculating the average closing price over a specified number of periods.'
    },
    {
      term: 'Non-Farm Payrolls (NFP)',
      def: 'A critical US employment report released on the first Friday of every month detailing net job creation excluding agricultural workers.'
    },
    {
      term: 'Pending Order',
      def: 'An order instruction to enter a trade only when price reaches a specified future level (e.g., Buy Limit, Sell Limit, Buy Stop, Sell Stop).'
    },
    {
      term: 'Pip (Percentage in Point)',
      def: 'The smallest standard measure of price change in currency trading, typically equal to the 4th decimal place (0.0001) in standard pairs.'
    },
    {
      term: 'Pipette',
      def: 'A fractional pip representing the 5th decimal place (0.00001) in currency pricing, offering enhanced quotation precision.'
    },
    {
      term: 'Quote Currency',
      def: 'The second currency listed in a currency pair quote (e.g., in EUR/USD, USD is the quote currency).'
    },
    {
      term: 'Relative Strength Index (RSI)',
      def: 'A momentum oscillator that measures the velocity and magnitude of recent price changes on a scale from 0 to 100 to detect overbought or oversold conditions.'
    },
    {
      term: 'Resistance Level',
      def: 'A price ceiling on a chart where selling pressure historically overwhelms buying pressure, halting upward progression.'
    },
    {
      term: 'Scalping',
      def: 'An ultra-fast intraday trading strategy aimed at capturing small price movements over seconds or minutes with high trade frequency.'
    },
    {
      term: 'Short Position (Sell)',
      def: 'Opening a sell trade expecting an asset’s price to decline, profiting by repurchasing the contract at a lower price.'
    },
    {
      term: 'Slippage',
      def: 'The difference between the expected price of an order and the actual price at which the order is filled, often occurring during high volatility.'
    },
    {
      term: 'Spread',
      def: 'The price gap between the Ask (buy) price and the Bid (sell) price of an asset, representing the broker’s markup or liquidity cost.'
    },
    {
      term: 'Stop Loss',
      def: 'An automated protective pending order designed to close an open position once it reaches a designated adverse price level to limit financial losses.'
    },
    {
      term: 'Stop Out',
      def: 'The automated liquidation of client positions initiated by the broker when account equity falls below the mandatory stop-out threshold (e.g., 20%).'
    },
    {
      term: 'Support Level',
      def: 'A price floor where buying demand is historically strong enough to prevent the price from depreciating further.'
    },
    {
      term: 'Swap (Overnight Financing)',
      def: 'The interest rate differential credited or debited to a trader\'s account for rolling an open leveraged position past the daily market rollover.'
    },
    {
      term: 'Take Profit',
      def: 'A pre-set target order that automatically closes an open trade once a favorable price level is attained to secure accrued profits.'
    },
    {
      term: 'Volatility',
      def: 'A statistical measure of the dispersion and fluctuation rate of returns for a given asset over a designated timeframe.'
    }
  ];

  // Filter terms by search and letter
  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLetter =
      selectedLetter === 'ALL' ||
      item.term.toUpperCase().startsWith(selectedLetter);

    return matchesSearch && matchesLetter;
  });

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="RESOURCES • TRADING DICTIONARY"
        title="GLOSSARY"
        subtitle="Trading terms explained simply"
        ctaText="SEARCH GLOSSARY"
        ctaLink="#glossary-search"
        secondaryCtaText="ALL DEFINITIONS"
        secondaryCtaLink="#terms"
      />

      {/* 2. SEARCH BAR & 3. ALPHABET FILTER */}
      <ContentSection
        id="glossary-search"
        heading="Financial Terms & Definitions"
        subtitle="Search through 50+ essential concepts in Forex, technical analysis, margin calculations, and macroeconomics."
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by keyword or term (e.g. Pip, Leverage, Spread, Margin, RSI...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#00C853] shadow-sm"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
          </div>

          {/* Alphabet Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center pt-2">
            {alphabet.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(letter)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-[#0a1929] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* 4. TERMS LIST (Accordion) */}
      <ContentSection
        id="terms"
        bg="bg-slate-50"
        heading={`Showing ${filteredTerms.length} Terms`}
        subtitle={selectedLetter !== 'ALL' ? `Filtered by letter "${selectedLetter}"` : 'Complete glossary database'}
      >
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => {
              const isOpen = openTerm === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTerm(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#00C853] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 font-extrabold text-xs flex items-center justify-center">
                        {item.term.charAt(0)}
                      </span>
                      <span>{item.term}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C853]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                      <p>{item.def}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-slate-800 text-base">No definitions found</h4>
              <p className="text-xs text-slate-500">
                Try searching for another keyword or select "ALL" in the alphabet filter above.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLetter('ALL');
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </ContentSection>

      {/* 5. CTA */}
      <CTASection
        heading="Understand the Markets, Trade with Confidence"
        subtitle="Now that you know the language of finance, start practicing on our risk-free demo account."
        primaryBtnText="OPEN DEMO ACCOUNT"
        primaryBtnLink="/register?demo=true"
        secondaryBtnText="OPEN LIVE ACCOUNT"
        secondaryBtnLink="/register"
      />
    </div>
  );
}
