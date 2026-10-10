import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  X,
  Search,
  Globe,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Check
} from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const langDropdownRef = useRef(null);

  // Close mobile menu & dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    setSearchOpen(false);
    setLanguageMenuOpen(false);
  }, [location]);

  // Close language menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Supported languages
  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English', short: 'EN' },
    { code: 'ar', flag: '🇸🇦', name: 'Arabic', short: 'AR' },
    { code: 'ja', flag: '🇯🇵', name: 'Japanese', short: 'JA' },
    { code: 'ko', flag: '🇰🇷', name: 'Korean', short: 'KO' },
    { code: 'ms', flag: '🇲🇾', name: 'Malay', short: 'MS' },
    { code: 'pt', flag: '🇧🇷', name: 'Portuguese (Brazil)', short: 'PT' },
    { code: 'es', flag: '🇪🇸', name: 'Spanish', short: 'ES' },
    { code: 'zh', flag: '🇨🇳', name: 'Chinese', short: 'ZH' },
    { code: 'id', flag: '🇮🇩', name: 'Indonesian', short: 'ID' },
    { code: 'th', flag: '🇹🇭', name: 'Thai', short: 'TH' },
    { code: 'vi', flag: '🇻🇳', name: 'Vietnamese', short: 'VI' },
  ];

  const currentLangObj = languages.find((l) => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLanguageMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 select-none shadow-lg">

      {/* 1. TOP BAR */}
      <div className="bg-[#0b172a] border-b border-slate-800/80 text-[10px] text-slate-300 py-1 px-4 sm:px-8">
        <div className="w-full flex items-center justify-between">

          {/* Left: Group Licences */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">
              {t('nav.group_licences', 'GROUP LICENCES:')}
            </span>
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse font-semibold text-slate-300">
              <Link to="/about#safety" className="hover:text-[#00C853] transition-colors px-1 py-0.5 rounded hover:bg-slate-800">
                FSA
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/about#safety" className="hover:text-[#00C853] transition-colors px-1 py-0.5 rounded hover:bg-slate-800">
                CySEC
              </Link>
              <span className="text-slate-600">|</span>
              <Link to="/about#safety" className="hover:text-[#00C853] transition-colors px-1 py-0.5 rounded hover:bg-slate-800">
                DFSA
              </Link>
            </div>
          </div>

          {/* Right: Language selector, P4 Prime, Become a Partner, Search */}
          <div className="flex items-center space-x-3.5 rtl:space-x-reverse">

            {/* Language Selector Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-white transition-colors cursor-pointer py-0.5 px-2 rounded-md hover:bg-slate-800 text-[10px] border border-slate-700/60"
                aria-haspopup="listbox"
                aria-expanded={languageMenuOpen}
              >
                <span className="text-xs">{currentLangObj.flag}</span>
                <span className="tracking-wide">{currentLangObj.short}</span>
                <ChevronDown className={`w-2.5 h-2.5 text-slate-400 transition-transform duration-200 ${languageMenuOpen ? 'rotate-180 text-[#00C853]' : ''}`} />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 top-full mt-1.5 w-48 bg-[#0b172a]/98 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-2xl z-50 py-2 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                    Select Language
                  </div>
                  <div className="max-h-64 overflow-y-auto py-0.5">
                    {languages.map((lang) => {
                      const isSelected = i18n.language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-medium transition-colors cursor-pointer text-left rtl:text-right ${isSelected
                              ? 'bg-emerald-500/15 text-[#00C853] font-bold'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#00C853] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* P4 PRIME Link */}
            <Link
              to="/accounts"
              className="hidden sm:inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider text-[9px]"
            >
              <Sparkles className="w-2.5 h-2.5" />
              <span>{t('nav.p4_prime', 'P4 PRIME')}</span>
            </Link>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* BECOME A PARTNER */}
            <Link
              to="/register"
              className="hidden sm:inline-flex font-bold text-slate-200 hover:text-[#00C853] transition-colors uppercase tracking-wider text-[9px]"
            >
              {t('nav.become_partner', 'BECOME A PARTNER')}
            </Link>

            <span className="text-slate-700">•</span>

            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-300 hover:text-[#00C853] transition-colors p-0.5 rounded hover:bg-slate-800 cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-3 h-3" />
            </button>

          </div>

        </div>

        {/* Expandable Search Input Bar */}
        {searchOpen && (
          <div className="w-full pt-1.5 pb-1 flex items-center gap-2 animate-in fade-in duration-150">
            <div className="relative flex-1">
              <input
                type="text"
                autoFocus
                placeholder={t('nav.search_placeholder', 'Search instruments, accounts, MT5 platform...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#070d18] border border-slate-700 text-[11px] text-white rounded-md px-3 py-1 pl-7 rtl:pl-3 rtl:pr-7 focus:outline-none focus:border-[#00C853]"
              />
              <Search className="w-3 h-3 text-slate-400 absolute left-2 rtl:left-auto rtl:right-2 top-1.5" />
            </div>
            <button
              onClick={() => setSearchOpen(false)}
              className="text-slate-400 hover:text-white text-[10px] px-2 py-0.5 cursor-pointer"
            >
              {t('nav.close', 'Close')}
            </button>
          </div>
        )}
      </div>

      {/* 2. RISK WARNING BAR */}
      <div className="bg-black text-slate-300 border-b border-slate-900 py-1 px-4 sm:px-8 text-[11px] leading-tight">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-center">
          <span className="inline-block bg-[#00C853] text-black font-extrabold text-[9px] uppercase px-1.5 py-0.5 rounded tracking-wider shrink-0">
            {t('risk_warning.badge', 'Risk warning')}
          </span>
          <p className="text-slate-400 text-[10.5px] sm:text-[11px] font-normal">
            {t('risk_warning.text', 'CFDs are complex and high-risk instruments. You may lose more than your initial deposit. Ensure you understand the risks and that you can afford potential losses.')}
          </p>
        </div>
      </div>

      {/* 3. MAIN NAVBAR */}
      <nav className="bg-[#0A0E27] border-b border-slate-800/80 px-4 sm:px-8 py-1 w-full relative">
        <div className="w-full flex items-center justify-between">

          {/* LEFT: Logo (h-16) */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center group py-0.5">
              <img
                src="/P4logo.jpeg"
                alt="P4 Global Market"
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* CENTER: Navigation Menu with Seamless M4Markets Horizontal Dropdowns */}
          <div className="hidden xl:flex items-center justify-center gap-4 lg:gap-5 2xl:gap-7 mx-auto">

            {/* 1. TRADING (3 Columns Side by Side - Left-aligned to open to the right) */}
            <div className="relative group py-2">
              <Link
                to="/trading"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.trading', 'TRADING')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              {/* Dropdown Container (left-0 so it opens to the right, fully visible within viewport) */}
              <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] min-w-[680px]">
                  <div className="flex flex-row gap-12 text-left rtl:text-right">

                    {/* Column 1: MARKETS */}
                    <div className="min-w-[190px] flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-3 border-b border-slate-700/70">
                        {t('dropdowns.markets', 'MARKETS')}
                      </div>
                      <ul className="space-y-2.5">
                        <li>
                          <Link to="/trading/forex-cfd" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.forex_cfd', 'FOREX CFD')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/commodities-cfd" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.commodities_cfd', 'COMMODITIES CFD')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/indices-cfd" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.indices_cfd', 'INDICES CFD')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/shares-cfd" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.shares_cfd', 'SHARES CFD')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/crypto-cfd" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.crypto_cfd', 'CRYPTO CFD')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: CONDITIONS */}
                    <div className="min-w-[200px] flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-3 border-b border-slate-700/70">
                        {t('dropdowns.conditions', 'CONDITIONS')}
                      </div>
                      <ul className="space-y-2.5">
                        <li>
                          <Link to="/trading/spreads-commissions" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.spreads_commissions', 'SPREADS & COMMISSIONS')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/margin-leverage" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.margin_leverage', 'MARGIN & LEVERAGE')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/swap-rates" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.swap_rates', 'SWAP RATES')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/trading/trading-hours" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.trading_hours', 'TRADING HOURS')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: PLATFORMS */}
                    <div className="min-w-[170px] flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-3 border-b border-slate-700/70">
                        {t('dropdowns.platforms', 'PLATFORMS')}
                      </div>
                      <ul className="space-y-2.5">
                        <li>
                          <Link to="/platforms/mt4" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.mt4', 'MT4')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/platforms/mt5" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.mt5', 'MT5')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/platforms/mt4-vs-mt5" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.mt4_vs_mt5', 'MT4 VS MT5')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 2. ACCOUNTS (Single Horizontal Row - Left-aligned to open to the right) */}
            <div className="relative group py-2">
              <Link
                to="/accounts"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.accounts', 'ACCOUNTS')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              {/* Dropdown Container (left-0 so it opens to the right, fully visible within viewport) */}
              <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] whitespace-nowrap">
                  <div className="flex flex-row gap-8 items-center justify-center">
                    <Link to="/accounts/trading-accounts" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.trading_accounts', 'TRADING ACCOUNTS')}
                    </Link>
                    <Link to="/accounts/cent-account" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.cent_account', 'CENT ACCOUNT')}
                    </Link>
                    <Link to="/accounts/islamic-account" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.islamic_account', 'ISLAMIC ACCOUNT')}
                    </Link>
                    <Link to="/accounts/demo-account" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.demo_account', 'DEMO ACCOUNT')}
                    </Link>
                    <Link to="/accounts/dynamic-leverage-account" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.dynamic_leverage_account', 'DYNAMIC LEVERAGE ACCOUNT')}
                    </Link>
                    <Link to="/accounts/deposits-withdrawals" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.deposits_withdrawals', 'DEPOSITS & WITHDRAWALS')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. TOOLS & RESOURCES (2 Columns Side by Side) */}
            <div className="relative group py-2">
              <Link
                to="/platforms"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.tools_resources', 'TOOLS & RESOURCES')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] min-w-[540px]">
                  <div className="flex flex-row gap-16 text-left rtl:text-right">

                    {/* Column 1: TOOLS */}
                    <div className="min-w-[210px] flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-3 border-b border-slate-700/70">
                        {t('dropdowns.tools', 'TOOLS')}
                      </div>
                      <ul className="space-y-2.5">
                        <li>
                          <Link to="/platforms#mobile" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.p4_mobile_app', 'P4 MOBILE APP')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#social-trading" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.social_trading', 'SOCIAL TRADING')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#calendar" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.economic_calendar', 'ECONOMIC CALENDAR')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#calculator" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.forex_calculator', 'FOREX CALCULATOR')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.education', 'EDUCATION')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/about#safety" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.fraud_prevention', 'FRAUD PREVENTION')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: RESOURCES */}
                    <div className="min-w-[210px] flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 mb-3 border-b border-slate-700/70">
                        {t('dropdowns.resources', 'RESOURCES')}
                      </div>
                      <ul className="space-y-2.5">
                        <li>
                          <Link to="/education#news" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.daily_news', 'DAILY NEWS')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#podcasts" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.podcasts', 'PODCASTS')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#newsfeed" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.newsfeed', 'NEWSFEED')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#ebooks" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.trading_ebooks', 'TRADING EBOOKS')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#glossary" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.glossary', 'GLOSSARY')}
                          </Link>
                        </li>
                        <li>
                          <Link to="/education#videos" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors block whitespace-nowrap">
                            {t('dropdowns.video_courses', 'VIDEO COURSES')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 4. PARTNERSHIPS (Single Horizontal Row) */}
            <div className="relative group py-2">
              <Link
                to="/contact"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.partnerships', 'PARTNERSHIPS')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] whitespace-nowrap">
                  <div className="flex flex-row gap-12 items-center justify-center">
                    <Link to="/contact#ib" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.introducing_brokers', 'INTRODUCING BROKERS')}
                    </Link>
                    <Link to="/contact#pamm" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.mam_pamm', 'MAM/PAMM')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. PROMOTIONS (Single Horizontal Row) */}
            <div className="relative group py-2">
              <Link
                to="/accounts#promotions"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.promotions', 'PROMOTIONS')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] whitespace-nowrap">
                  <div className="flex flex-row gap-12 items-center justify-center">
                    <Link to="/accounts#promotions" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.all_promotions', 'ALL PROMOTIONS')}
                    </Link>
                    <Link to="/accounts#credit-bonus" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.credit_bonus', 'CREDIT BONUS')}
                    </Link>
                    <Link to="/accounts#refer-a-friend" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.refer_a_friend', 'REFER A FRIEND')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. ABOUT US (Single Horizontal Row - Right aligned so it stays inside viewport) */}
            <div className="relative group py-2">
              <Link
                to="/about"
                className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.about_us', 'ABOUT US')}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00C853]" />
              </Link>

              {/* Right aligned dropdown */}
              <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-[#1a2332]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl shadow-2xl px-8 py-6 text-white max-w-[90vw] whitespace-nowrap">
                  <div className="flex flex-row gap-6 items-center justify-center">
                    <Link to="/about" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.about_p4', 'ABOUT P4 GLOBAL MARKET')}
                    </Link>
                    <Link to="/about#safety" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.licenses', 'LICENSES')}
                    </Link>
                    <Link to="/terms" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.legal_documents', 'LEGAL DOCUMENTS')}
                    </Link>
                    <Link to="/about#news" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.news', 'NEWS')}
                    </Link>
                    <Link to="/about#careers" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.careers', 'CAREERS')}
                    </Link>
                    <Link to="/contact" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.contact_us', 'CONTACT US')}
                    </Link>
                    <Link to="/contact#support" className="text-sm font-semibold uppercase tracking-wide text-white hover:text-[#00C853] transition-colors whitespace-nowrap">
                      {t('dropdowns.support_center', 'SUPPORT CENTER')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. LOYALTY PROGRAM (Direct Link, No Dropdown) */}
            <div className="py-2">
              <Link
                to="/accounts#loyalty"
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#00C853] transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                <span>{t('nav.loyalty_program', 'LOYALTY PROGRAM')}</span>
              </Link>
            </div>

          </div>

          {/* RIGHT: Login and Open Account Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white bg-transparent hover:bg-white/10 hover:border-white transition-all text-center"
            >
              {t('nav.login', 'LOGIN')}
            </Link>

            <Link
              to="/register"
              className="px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider text-black bg-[#00C853] hover:bg-[#00e660] shadow-md shadow-[#00C853]/20 transition-all text-center transform hover:-translate-y-0.5 active:scale-95"
            >
              {t('nav.open_account', 'OPEN ACCOUNT')}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center space-x-2 rtl:space-x-reverse">
            <Link
              to="/register"
              className="px-3 py-1 rounded text-[10.5px] font-black uppercase tracking-wider text-black bg-[#00C853] md:hidden"
            >
              {t('nav.open_account', 'Open Account')}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0A0E27] border-t border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">

            {/* Mobile Language Switcher */}
            <div className="pb-3 border-b border-slate-800">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Language / اللغة
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-left rtl:text-right cursor-pointer ${i18n.language === lang.code
                        ? 'bg-[#00C853] text-black font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:text-white'
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Nav Accordions */}
            <div className="space-y-1">

              {/* TRADING */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/trading" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.trading', 'TRADING')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'TRADING' ? null : 'TRADING')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'TRADING' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'TRADING' && (
                  <div className="pl-3 pr-2 py-2 space-y-3 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('dropdowns.markets', 'MARKETS')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/trading/forex-cfd" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.forex_cfd', 'FOREX CFD')}</Link>
                        <Link to="/trading/commodities-cfd" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.commodities_cfd', 'COMMODITIES CFD')}</Link>
                        <Link to="/trading/indices-cfd" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.indices_cfd', 'INDICES CFD')}</Link>
                        <Link to="/trading/shares-cfd" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.shares_cfd', 'SHARES CFD')}</Link>
                        <Link to="/trading/crypto-cfd" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.crypto_cfd', 'CRYPTO CFD')}</Link>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('dropdowns.conditions', 'CONDITIONS')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/trading/spreads-commissions" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.spreads_commissions', 'SPREADS & COMMISSIONS')}</Link>
                        <Link to="/trading/margin-leverage" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.margin_leverage', 'MARGIN & LEVERAGE')}</Link>
                        <Link to="/trading/swap-rates" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.swap_rates', 'SWAP RATES')}</Link>
                        <Link to="/trading/trading-hours" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.trading_hours', 'TRADING HOURS')}</Link>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('dropdowns.platforms', 'PLATFORMS')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/platforms/mt4" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.mt4', 'MT4')}</Link>
                        <Link to="/platforms/mt5" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.mt5', 'MT5')}</Link>
                        <Link to="/platforms/mt4-vs-mt5" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.mt4_vs_mt5', 'MT4 VS MT5')}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ACCOUNTS */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/accounts" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.accounts', 'ACCOUNTS')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'ACCOUNTS' ? null : 'ACCOUNTS')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'ACCOUNTS' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'ACCOUNTS' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <Link to="/accounts/trading-accounts" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.trading_accounts', 'TRADING ACCOUNTS')}</Link>
                    <Link to="/accounts/cent-account" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.cent_account', 'CENT ACCOUNT')}</Link>
                    <Link to="/accounts/islamic-account" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.islamic_account', 'ISLAMIC ACCOUNT')}</Link>
                    <Link to="/accounts/demo-account" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.demo_account', 'DEMO ACCOUNT')}</Link>
                    <Link to="/accounts/dynamic-leverage-account" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.dynamic_leverage_account', 'DYNAMIC LEVERAGE ACCOUNT')}</Link>
                    <Link to="/accounts/deposits-withdrawals" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.deposits_withdrawals', 'DEPOSITS & WITHDRAWALS')}</Link>
                  </div>
                )}
              </div>

              {/* TOOLS & RESOURCES */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/platforms" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.tools_resources', 'TOOLS & RESOURCES')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'TOOLS' ? null : 'TOOLS')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'TOOLS' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'TOOLS' && (
                  <div className="pl-3 pr-2 py-2 space-y-3 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('dropdowns.tools', 'TOOLS')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/platforms#mobile" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.p4_mobile_app', 'P4 MOBILE APP')}</Link>
                        <Link to="/education#social-trading" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.social_trading', 'SOCIAL TRADING')}</Link>
                        <Link to="/education#calendar" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.economic_calendar', 'ECONOMIC CALENDAR')}</Link>
                        <Link to="/education#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.forex_calculator', 'FOREX CALCULATOR')}</Link>
                        <Link to="/education" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.education', 'EDUCATION')}</Link>
                        <Link to="/about#safety" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.fraud_prevention', 'FRAUD PREVENTION')}</Link>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('dropdowns.resources', 'RESOURCES')}</div>
                      <div className="pl-2 space-y-1">
                        <Link to="/education#news" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.daily_news', 'DAILY NEWS')}</Link>
                        <Link to="/education#podcasts" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.podcasts', 'PODCASTS')}</Link>
                        <Link to="/education#newsfeed" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.newsfeed', 'NEWSFEED')}</Link>
                        <Link to="/education#ebooks" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.trading_ebooks', 'TRADING EBOOKS')}</Link>
                        <Link to="/education#glossary" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.glossary', 'GLOSSARY')}</Link>
                        <Link to="/education#videos" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-0.5">{t('dropdowns.video_courses', 'VIDEO COURSES')}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* PARTNERSHIPS */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.partnerships', 'PARTNERSHIPS')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'PARTNERSHIPS' ? null : 'PARTNERSHIPS')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'PARTNERSHIPS' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'PARTNERSHIPS' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <Link to="/contact#ib" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.introducing_brokers', 'INTRODUCING BROKERS')}</Link>
                    <Link to="/contact#pamm" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.mam_pamm', 'MAM/PAMM')}</Link>
                  </div>
                )}
              </div>

              {/* PROMOTIONS */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/accounts#promotions" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.promotions', 'PROMOTIONS')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'PROMOTIONS' ? null : 'PROMOTIONS')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'PROMOTIONS' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'PROMOTIONS' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <Link to="/accounts#promotions" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.all_promotions', 'ALL PROMOTIONS')}</Link>
                    <Link to="/accounts#credit-bonus" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.credit_bonus', 'CREDIT BONUS')}</Link>
                    <Link to="/accounts#refer-a-friend" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.refer_a_friend', 'REFER A FRIEND')}</Link>
                  </div>
                )}
              </div>

              {/* ABOUT US */}
              <div className="py-1 border-b border-slate-800/50">
                <div className="flex items-center justify-between">
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]">
                    {t('nav.about_us', 'ABOUT US')}
                  </Link>
                  <button type="button" onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'ABOUT' ? null : 'ABOUT')} className="p-1.5 text-slate-400 hover:text-white">
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'ABOUT' ? 'rotate-180 text-[#00C853]' : ''}`} />
                  </button>
                </div>
                {activeMobileDropdown === 'ABOUT' && (
                  <div className="pl-3 pr-2 py-2 space-y-1 bg-[#1a2332]/80 rounded-xl mt-1.5 border-l-2 border-[#00C853]">
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.about_p4', 'ABOUT P4 GLOBAL MARKET')}</Link>
                    <Link to="/about#safety" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.licenses', 'LICENSES')}</Link>
                    <Link to="/terms" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.legal_documents', 'LEGAL DOCUMENTS')}</Link>
                    <Link to="/about#news" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.news', 'NEWS')}</Link>
                    <Link to="/about#careers" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.careers', 'CAREERS')}</Link>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.contact_us', 'CONTACT US')}</Link>
                    <Link to="/contact#support" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-medium text-slate-300 hover:text-[#00C853] py-1">{t('dropdowns.support_center', 'SUPPORT CENTER')}</Link>
                  </div>
                )}
              </div>

              {/* LOYALTY PROGRAM */}
              <div className="py-1">
                <Link
                  to="/accounts#loyalty"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 hover:text-[#00C853]"
                >
                  {t('nav.loyalty_program', 'LOYALTY PROGRAM')}
                </Link>
              </div>

            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white bg-transparent hover:bg-white/10"
              >
                {t('nav.login', 'LOGIN')}
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg text-xs font-black uppercase tracking-wider text-black bg-[#00C853] hover:bg-[#00e660]"
              >
                {t('nav.open_account', 'OPEN ACCOUNT')}
              </Link>
            </div>

          </div>
        )}
      </nav>

    </header>
  );
}
