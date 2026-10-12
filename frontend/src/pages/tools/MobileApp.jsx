import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import BenefitCard from '../../components/BenefitCard';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Smartphone,
  Zap,
  TrendingUp,
  Bell,
  Sliders,
  CheckCircle2,
  Shield,
  Apple,
  Download,
  BarChart2,
  Activity,
  Layers,
  Sparkles,
  QrCode
} from 'lucide-react';

export default function MobileApp() {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: Activity,
      title: 'Real-Time Quotes',
      description: 'Stream live millisecond bid and ask quotes for 150+ financial instruments across Forex, Commodities, Indices, and Crypto.',
      highlight: 'Ultra-low latency'
    },
    {
      icon: Zap,
      title: 'One-Click Trading',
      description: 'Execute instant market orders, set pending limit orders, and lock in profit targets with swift single-tap order execution directly on chart.',
      highlight: 'Sub-30ms execution'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Charts',
      description: 'Analyze market trends with 30+ built-in technical indicators, 24 analytical drawing tools, multiple timeframes, and interactive pinch-to-zoom.',
      highlight: '30+ Indicators'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Receive instant customizable price alerts, margin level warnings, order fills, and high-impact economic news releases directly on your lock screen.',
      highlight: 'Instant alerts'
    }
  ];

  const systemRequirements = [
    {
      platform: 'iOS (Apple)',
      minVersion: 'iOS 12.0 or later',
      recommendedVersion: 'iOS 16.0 or later',
      devices: 'iPhone, iPad, Apple Watch',
      size: '48.5 MB',
      languages: 'English, Arabic, Spanish, French + 12 more'
    },
    {
      platform: 'Android (Google)',
      minVersion: 'Android 8.0 (Oreo) or later',
      recommendedVersion: 'Android 13.0 or later',
      devices: 'Android Smartphones & Tablets',
      size: '42.1 MB',
      languages: 'English, Arabic, Spanish, French + 12 more'
    }
  ];

  const faqs = [
    {
      q: 'Is the P4 Mobile App free to download and use?',
      a: 'Yes, the P4 Mobile App is 100% free to download on both iOS and Android. There are no subscription fees, download charges, or hidden platform fees.'
    },
    {
      q: 'Can I trade on both demo and live accounts using the mobile app?',
      a: 'Absolutely. You can effortlessly switch between your Practice Demo account and real Live trading accounts with a single tap inside the app settings.'
    },
    {
      q: 'Are my funds and account credentials secure on mobile?',
      a: 'Yes. The P4 Mobile App utilizes military-grade 256-bit SSL encryption, biometrics (Face ID & Touch ID), and two-factor authentication (2FA) to ensure total security.'
    },
    {
      q: 'Does the mobile app sync with MetaTrader on my desktop?',
      a: 'Yes. All your open positions, pending orders, balance, equity, and trading history are synchronized in real-time across your desktop, web terminal, and mobile app.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="TOOLS • MOBILE TRADING"
        title="P4 MOBILE APP"
        subtitle="Trade anytime, anywhere with our mobile app"
        ctaText="DOWNLOAD NOW"
        ctaLink="#download"
        secondaryCtaText="EXPLORE FEATURES"
        secondaryCtaLink="#features"
      />

      {/* 2. APP OVERVIEW */}
      <ContentSection
        heading="Trade Forex, Stocks, and Crypto Directly From Your Phone"
        subtitle="The full power of an institutional trading desk engineered for your pocket. Experience unmatched execution speed, complete charting tools, and seamless fund management on the move."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              The P4 Mobile App puts the global financial markets at your fingertips 24 hours a day, 5 days a week. Whether commuting, traveling, or stepping away from your trading desk, maintain complete command of your portfolio without sacrificing performance.
            </p>
            <p>
              Engineered with an ultra-intuitive mobile UI, you can monitor global price feeds, react to breaking macroeconomic news, modify existing stop-losses, and execute institutional-grade trades with raw spreads starting from <strong>0.0 pips</strong>.
            </p>
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-slate-900">150+</div>
                <div className="text-xs text-slate-500 font-medium">Instruments</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#00C853]">&lt; 30ms</div>
                <div className="text-xs text-slate-500 font-medium">Order Execution</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                <div className="text-xl sm:text-2xl font-black text-blue-600">4.9 / 5</div>
                <div className="text-xs text-slate-500 font-medium">User Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#0a1929] to-[#132f4c] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C853]/20 text-[#00C853] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Mobile Trading</span>
              </div>
              <h3 className="text-2xl font-bold">Institutional Power in Your Pocket</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                  <span>Biometric Face ID & Fingerprint Login</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                  <span>Interactive Multi-Touch Zoom & Scroll Charts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                  <span>Instant In-App Deposits & Swift Withdrawals</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853] shrink-0" />
                  <span>Integrated Live Economic Calendar & News Alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 3. KEY FEATURES */}
      <ContentSection
        id="features"
        bg="bg-slate-50"
        heading="Key Mobile Features"
        subtitle="Designed for precision, speed, and uncompromising reliability when trading financial markets."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <BenefitCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              highlight={feat.highlight}
            />
          ))}
        </div>
      </ContentSection>

      {/* 4. DOWNLOAD LINKS */}
      <ContentSection
        id="download"
        heading="Download P4 Mobile App"
        subtitle="Available on iOS and Android devices. Scan the QR code or click your preferred app store below."
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0b172a] via-[#102a43] to-[#0a1929] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C853]">
                Free Download • Instant Setup
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Start Trading on Your Mobile Device in Minutes
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Compatible with all modern smartphones and tablets. Download now to unlock live market data, practice risk-free on demo, or trade live with ultra-tight spreads.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Google Play Button */}
                <a
                  href="#android-download"
                  className="inline-flex items-center gap-3 bg-black/80 hover:bg-black border border-slate-700 hover:border-slate-500 text-white px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer"
                >
                  <Download className="w-6 h-6 text-[#00C853] group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Get it on</div>
                    <div className="text-sm font-bold text-white leading-tight">Google Play</div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#ios-download"
                  className="inline-flex items-center gap-3 bg-black/80 hover:bg-black border border-slate-700 hover:border-slate-500 text-white px-5 py-3 rounded-2xl transition-all shadow-md group cursor-pointer"
                >
                  <Apple className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Download on the</div>
                    <div className="text-sm font-bold text-white leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* QR Code Scan Area */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-32 h-32 bg-white p-2.5 rounded-2xl shadow-inner flex items-center justify-center">
                <QrCode className="w-28 h-28 text-slate-900" />
              </div>
              <span className="text-xs text-slate-300 font-medium">
                Scan with phone camera to download directly
              </span>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 5. SCREENSHOTS SECTION (3 Realistic Phone Mockups) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Engineered for Traders, Built for Performance"
        subtitle="Experience an intuitive, high-speed interface crafted specifically for mobile execution."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mockup 1: Watchlist & Quotes */}
          <div className="bg-slate-900 border-4 border-slate-800 rounded-[38px] p-3 shadow-2xl relative">
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-3"></div>
            <div className="bg-[#0b1320] rounded-[28px] p-4 text-white space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="font-bold text-sm">Market Watchlist</span>
                <span className="text-[10px] text-[#00C853] font-semibold">LIVE</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { pair: 'EUR/USD', bid: '1.0842', ask: '1.0843', spread: '0.1', up: true },
                  { pair: 'GBP/USD', bid: '1.2915', ask: '1.2917', spread: '0.2', up: false },
                  { pair: 'XAU/USD', bid: '2645.20', ask: '2645.35', spread: '0.15', up: true },
                  { pair: 'BTC/USD', bid: '67410.0', ask: '67415.0', spread: '5.0', up: true },
                  { pair: 'USD/JPY', bid: '152.34', ask: '152.36', spread: '0.2', up: false },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded-xl bg-slate-800/60">
                    <div>
                      <div className="font-bold text-white">{item.pair}</div>
                      <div className="text-[10px] text-slate-400">Spread: {item.spread}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-mono font-bold ${item.up ? 'text-[#00C853]' : 'text-rose-400'}`}>
                        {item.bid}
                      </div>
                      <div className="text-[10px] text-slate-400">{item.ask}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wide">
              1. Real-Time Watchlist
            </div>
          </div>

          {/* Mockup 2: Advanced Charts */}
          <div className="bg-slate-900 border-4 border-slate-800 rounded-[38px] p-3 shadow-2xl relative">
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-3"></div>
            <div className="bg-[#0b1320] rounded-[28px] p-4 text-white space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="font-bold text-sm">EUR/USD • M15</span>
                <span className="text-[10px] text-slate-400">RSI: 62.4</span>
              </div>
              {/* Simulated Candlestick Chart */}
              <div className="h-44 bg-slate-950 rounded-xl p-2 relative flex items-end justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"></div>
                {[45, 60, 50, 75, 70, 90, 85, 110, 95, 120, 115, 135].map((h, i) => (
                  <div key={i} className="flex flex-col items-center z-10 w-2.5">
                    <div className="w-[1px] bg-slate-400 h-2"></div>
                    <div
                      className={`w-full rounded-xs ${i % 2 === 0 ? 'bg-[#00C853]' : 'bg-rose-500'}`}
                      style={{ height: `${h / 2}px` }}
                    ></div>
                    <div className="w-[1px] bg-slate-400 h-2"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-1 text-[11px] text-slate-300">
                <span>Indicators: MA (20), RSI</span>
                <span className="text-[#00C853] font-bold">+1.24% Today</span>
              </div>
            </div>
            <div className="mt-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wide">
              2. Interactive Charts
            </div>
          </div>

          {/* Mockup 3: Instant Execution */}
          <div className="bg-slate-900 border-4 border-slate-800 rounded-[38px] p-3 shadow-2xl relative">
            <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-3"></div>
            <div className="bg-[#0b1320] rounded-[28px] p-4 text-white space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="font-bold text-sm">Order Ticket</span>
                <span className="text-[10px] text-blue-400 font-semibold">1.00 Lot</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl space-y-1.5">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Stop Loss:</span>
                  <span className="text-white font-mono">1.0810</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Take Profit:</span>
                  <span className="text-white font-mono">1.0890</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Est. Margin:</span>
                  <span className="text-white font-mono">$200.00</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="bg-rose-600 hover:bg-rose-700 py-3 rounded-xl text-center font-bold text-white cursor-pointer">
                  SELL
                  <div className="text-[10px] font-normal opacity-80">1.0842</div>
                </div>
                <div className="bg-[#00C853] hover:bg-[#00e660] py-3 rounded-xl text-center font-bold text-black cursor-pointer">
                  BUY
                  <div className="text-[10px] font-normal opacity-80">1.0843</div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wide">
              3. One-Click Order Ticket
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 6. SYSTEM REQUIREMENTS */}
      <ContentSection
        heading="System Requirements"
        subtitle="Ensure your smartphone or tablet meets the minimum hardware specifications for maximum execution speed."
      >
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0a1929] text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="py-4 px-6">Platform</th>
                <th className="py-4 px-6">Minimum OS</th>
                <th className="py-4 px-6">Recommended</th>
                <th className="py-4 px-6">Compatible Devices</th>
                <th className="py-4 px-6">App Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {systemRequirements.map((sys, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    {sys.platform.includes('iOS') ? <Apple className="w-4 h-4 text-slate-800" /> : <Smartphone className="w-4 h-4 text-[#00C853]" />}
                    {sys.platform}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-700">{sys.minVersion}</td>
                  <td className="py-4 px-6 text-[#00C853] font-semibold">{sys.recommendedVersion}</td>
                  <td className="py-4 px-6 text-slate-600">{sys.devices}</td>
                  <td className="py-4 px-6 text-slate-600">{sys.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      {/* 7. FAQ */}
      <ContentSection
        bg="bg-slate-50"
        heading="Frequently Asked Questions"
        subtitle="Common questions about setting up and trading on the P4 Mobile App."
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
        heading="Trade Anywhere, Anytime with P4 Mobile"
        subtitle="Download the app today, open your account in under 3 minutes, and access raw spreads on over 150+ financial instruments."
        primaryBtnText="DOWNLOAD NOW"
        primaryBtnLink="#download"
        secondaryBtnText="TRY FREE DEMO"
        secondaryBtnLink="/register?demo=true"
      />
    </div>
  );
}
