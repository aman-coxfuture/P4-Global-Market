import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Search,
  UserCheck,
  CreditCard,
  Monitor,
  Gift,
  Shield,
  Wrench,
  ArrowRight,
  FileQuestion,
  MessageSquare,
  Mail,
  Phone,
  HelpCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function SupportCenter() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const helpCategories = [
    {
      id: 'accounts',
      icon: UserCheck,
      title: 'Account & Verification',
      desc: 'Registration steps, Proof of Identity, Proof of Address, account types, and profile settings.',
      articlesCount: '14 Articles'
    },
    {
      id: 'funds',
      icon: CreditCard,
      title: 'Deposits & Withdrawals',
      desc: 'Supported funding methods, processing times, fee-free transactions, and withdrawal verification.',
      articlesCount: '18 Articles'
    },
    {
      id: 'platform',
      icon: Monitor,
      title: 'Trading Platform',
      desc: 'MetaTrader 4 (MT4) & MT5 downloads, login credentials, charts, indicators, and mobile apps.',
      articlesCount: '22 Articles'
    },
    {
      id: 'promotions',
      icon: Gift,
      title: 'Promotions & Bonuses',
      desc: 'Welcome bonus terms, credit bonus margin calculations, and refer-a-friend cash rewards.',
      articlesCount: '12 Articles'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security & 2FA',
      desc: 'Two-factor authentication, password resets, account locking, and anti-phishing safeguards.',
      articlesCount: '9 Articles'
    },
    {
      id: 'technical',
      icon: Wrench,
      title: 'Technical Issues',
      desc: 'Connection errors, server latency troubleshooting, order execution notices, and log exports.',
      articlesCount: '15 Articles'
    }
  ];

  const popularArticles = [
    {
      title: 'How to verify your P4 Global Market account in under 5 minutes',
      category: 'Account & Verification',
      readTime: '3 min read',
      link: '/register'
    },
    {
      title: 'Deposit methods, zero-fee policy, and clearing processing times',
      category: 'Deposits & Withdrawals',
      readTime: '4 min read',
      link: '/accounts/deposits-withdrawals'
    },
    {
      title: 'Connecting to MetaTrader 4 & MetaTrader 5 on Desktop and Mobile',
      category: 'Trading Platform',
      readTime: '5 min read',
      link: '/platforms/mt5'
    },
    {
      title: 'How to claim and trade with the 100% Welcome Bonus & Credit Bonus',
      category: 'Promotions & Bonuses',
      readTime: '3 min read',
      link: '/promotions/credit-bonus'
    },
    {
      title: 'Enabling Two-Factor Authentication (2FA) via Authenticator App',
      category: 'Security',
      readTime: '2 min read',
      link: '/login'
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      desc: 'Chat directly with a trading specialist. Instant connection 24/5.',
      action: '/about/contact',
      actionText: 'Launch Live Chat'
    },
    {
      icon: Mail,
      title: 'Email Ticket',
      desc: 'Send detailed questions to support@p4globalmarket.com.',
      action: 'mailto:support@p4globalmarket.com',
      actionText: 'Email Us'
    },
    {
      icon: Phone,
      title: 'Telephone Assistance',
      desc: 'Call our global multilingual support desk directly at +44 20 7946 0912.',
      action: 'tel:+442079460912',
      actionText: 'Call Support'
    }
  ];

  const faqs = [
    {
      q: 'How do I reset my client portal or trading platform password?',
      a: 'To reset your client portal password, click the "Forgot Password" link on the login page and enter your registered email address. You will receive an instant secure reset link. For MT4/MT5 platform master or investor passwords, you can reset them directly within your client dashboard under Account Settings.'
    },
    {
      q: 'What documents are accepted for KYC account verification?',
      a: 'We require two standard documents: 1) Proof of Identity (a valid Passport, National ID card, or Driver\'s License) and 2) Proof of Address (a recent utility bill, bank statement, or government document dated within the last 3 months).'
    },
    {
      q: 'Are there any fees charged on deposits or withdrawals?',
      a: 'P4 Global Market charges 0% fees on all deposits and withdrawals. All standard electronic payment processor fees and blockchain network gas fees are covered by us. Please note that intermediary correspondent banking fees may apply for international bank wire transfers.'
    },
    {
      q: 'Why was my trade order rejected or slipped?',
      a: 'Orders may occasionally experience market slippage during periods of extreme macroeconomic volatility or major news releases due to sudden liquidity evaporation across interbank feeds. Rejections typically occur if account free margin is insufficient to support the requested lot size.'
    },
    {
      q: 'How does leverage affect my required margin and stop-out level?',
      a: 'Leverage reduces the cash required upfront to hold a position (e.g. 1:500 leverage requires only 0.20% margin). If adverse market movement reduces your equity to 50% of the required margin, a Margin Call warning is triggered; if equity falls to 20%, automated Stop Out will systematically close positions to prevent negative balances.'
    },
    {
      q: 'How do I open an additional live trading account (e.g. Pro or Islamic)?',
      a: 'Once your main profile is verified, you can open up to 5 additional live MT4 and MT5 trading accounts instantly with a single click inside your client portal dashboard without needing to re-upload verification documents.'
    }
  ];

  const filteredArticles = popularArticles.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="HELP & KNOWLEDGE BASE"
        title="SUPPORT CENTER"
        subtitle="Find answers to your questions"
        ctaText="SEARCH HELP ARTICLES"
        ctaLink="#search-section"
        secondaryCtaText="CONTACT US 24/5"
        secondaryCtaLink="/about/contact"
      />

      {/* 2. SEARCH BAR SECTION */}
      <div id="search-section" className="bg-[#0a1929] pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-slate-300">
            Search our comprehensive knowledge base of guides, platform tutorials, and FAQs:
          </p>
          <div className="relative">
            <Search className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g., How to deposit funds, verify ID, MT5 login, leverage..."
              className="w-full pl-13 pr-4 py-4 bg-slate-800/90 border border-slate-700 rounded-2xl text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00C853] shadow-xl backdrop-blur-md"
            />
          </div>
        </div>
      </div>

      {/* 3. HELP CATEGORIES (6 Cards) */}
      <ContentSection
        heading="Browse by Help Topic"
        subtitle="Select a category to explore detailed step-by-step documentation and tutorials."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {helpCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setSearchQuery(cat.title)}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00C853]/15 group-hover:text-[#00C853] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {cat.articlesCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#00C853]">
                  <span>Explore Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 4. POPULAR ARTICLES (5 Links / Cards) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Popular Help Articles"
        subtitle="Frequently accessed guides by active traders across the P4 Global Market community."
      >
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {filteredArticles.map((article, idx) => (
            <Link
              key={idx}
              to={article.link}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00C853] transition-all flex items-center justify-between gap-4 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {article.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00C853] transition-colors">
                  {article.title}
                </h4>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs text-slate-400">
                <span>{article.readTime}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00C853] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      {/* 5. CONTACT SUPPORT (3 Options) */}
      <ContentSection heading="Need Direct Support?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contactOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 text-white rounded-3xl p-7 border border-slate-800 shadow-xl flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C853]/20 text-[#00C853] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{opt.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{opt.desc}</p>
                </div>

                <a
                  href={opt.action}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-[#00C853] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>{opt.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 6. FAQ (6 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Support Center FAQ"
        subtitle="Quick resolutions to the most common account, margin, and platform questions."
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

      {/* 7. CTA */}
      <CTASection
        heading="Still Have Questions?"
        subtitle="Our multilingual client desk is standing by 24/5 to provide immediate personalized assistance."
        primaryBtnText="CONTACT SUPPORT"
        primaryBtnLink="/about/contact"
        secondaryBtnText="OPEN ACCOUNT"
        secondaryBtnLink="/register"
      />
    </div>
  );
}
