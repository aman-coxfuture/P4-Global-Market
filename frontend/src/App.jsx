import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home';
import Trading from './pages/Trading';
import Platforms from './pages/Platforms';
import Accounts from './pages/Accounts';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RiskDisclosure from './pages/RiskDisclosure';
import PortalLayout from './components/layout/PortalLayout';
import LoyaltyProgram from './features/loyalty/LoyaltyProgram';
import OpenDemoAccount from './features/accounts/OpenDemoAccount';
import OpenLiveAccount from './features/accounts/OpenLiveAccount';
import AccountsOverview from './features/accounts/AccountsOverview';
import DepositFunds from './features/funds/DepositFunds';
import WithdrawFunds from './features/funds/WithdrawFunds';
import TransferFunds from './features/funds/TransferFunds';
import TransactionsHistory from './features/funds/TransactionsHistory';
import PaymentDetails from './features/funds/PaymentDetails';
import SocialTrading from './features/social/SocialTrading';
import Profile from './features/profile/Profile';
import UploadDocuments from './features/profile/UploadDocuments';
import MyAgreements from './features/profile/MyAgreements';
import Messages from './features/profile/Messages';
import ReverseSolicitation from './features/profile/ReverseSolicitation';
import EconomicProfile from './features/profile/EconomicProfile';
import Downloads from './features/downloads/Downloads';
import EconomicCalendar from './features/calendar/EconomicCalendar';
import TradingCalculator from './features/calculator/TradingCalculator';
import Ebooks from './features/education/Ebooks';
import VideoCourses from './features/education/VideoCourses';
import Glossary from './features/education/Glossary';
import Podcasts from './features/education/Podcasts';
import Newsfeed from './features/education/Newsfeed';
import DailyNews from './features/education/DailyNews';

// IB Menu Pages
import IBDashboard from './features/ib/IBDashboard';
import IBStatistics from './features/ib/IBStatistics';
import IBTransactions from './features/ib/IBTransactions';
import IBDetailedBreakdown from './features/ib/IBDetailedBreakdown';
import IBTotalBreakdown from './features/ib/IBTotalBreakdown';
import IBLinks from './features/ib/IBLinks';
import IBBanners from './features/ib/IBBanners';
import IBAccountsCommission from './features/ib/IBAccountsCommission';
import IBClientsCommission from './features/ib/IBClientsCommission';

import UIDemo from './dev/UiDemo';

// Trading Dropdown Pages
import ForexCFD from './pages/trading/ForexCFD';
import CommoditiesCFD from './pages/trading/CommoditiesCFD';
import IndicesCFD from './pages/trading/IndicesCFD';
import SharesCFD from './pages/trading/SharesCFD';
import CryptoCFD from './pages/trading/CryptoCFD';
import SpreadsCommissions from './pages/trading/SpreadsCommissions';
import MarginLeverage from './pages/trading/MarginLeverage';
import SwapRates from './pages/trading/SwapRates';
import TradingHours from './pages/trading/TradingHours';

// Platform Dropdown Pages
import MT4 from './pages/platforms/MT4';
import MT5 from './pages/platforms/MT5';
import MT4vsMT5 from './pages/platforms/MT4vsMT5';

// Accounts Dropdown Pages
import TradingAccounts from './pages/accounts/TradingAccounts';
import CentAccount from './pages/accounts/CentAccount';
import IslamicAccount from './pages/accounts/IslamicAccount';
import DemoAccount from './pages/accounts/DemoAccount';
import DynamicLeverage from './pages/accounts/DynamicLeverage';
import DepositsWithdrawals from './pages/accounts/DepositsWithdrawals';

// Scroll to top helper on navigation
import { ProtectedRoute, RoleRoute } from './components/auth/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import { useAuthStore } from './stores/authStore';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { initialize } = useAuthStore();

  useEffect(() => { initialize(); }, [initialize]);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Website Layout (With Header & Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/risk-disclosure" element={<RiskDisclosure />} />

          {/* Trading Markets Routes */}
          <Route path="/trading/forex-cfd" element={<ForexCFD />} />
          <Route path="/trading/commodities-cfd" element={<CommoditiesCFD />} />
          <Route path="/trading/indices-cfd" element={<IndicesCFD />} />
          <Route path="/trading/shares-cfd" element={<SharesCFD />} />
          <Route path="/trading/crypto-cfd" element={<CryptoCFD />} />

          {/* Trading Conditions Routes */}
          <Route path="/trading/spreads-commissions" element={<SpreadsCommissions />} />
          <Route path="/trading/margin-leverage" element={<MarginLeverage />} />
          <Route path="/trading/swap-rates" element={<SwapRates />} />
          <Route path="/trading/trading-hours" element={<TradingHours />} />

          {/* Platforms Routes */}
          <Route path="/platforms/mt4" element={<MT4 />} />
          <Route path="/platforms/mt5" element={<MT5 />} />
          <Route path="/platforms/mt4-vs-mt5" element={<MT4vsMT5 />} />

          {/* Accounts Routes */}
          <Route path="/accounts/trading-accounts" element={<TradingAccounts />} />
          <Route path="/accounts/cent-account" element={<CentAccount />} />
          <Route path="/accounts/islamic-account" element={<IslamicAccount />} />
          <Route path="/accounts/demo-account" element={<DemoAccount />} />
          <Route path="/accounts/dynamic-leverage-account" element={<DynamicLeverage />} />
          <Route path="/accounts/deposits-withdrawals" element={<DepositsWithdrawals />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Route>

        {/* Auth Layout (NO Navbar, NO Footer, ONLY Auth content & Logo) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Client Portal Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<PortalLayout />}>
            <Route path="/portal/loyalty" element={<LoyaltyProgram />} />
            <Route path="/portal/accounts/open-demo" element={<OpenDemoAccount />} />
            <Route path="/portal/accounts/open-live" element={<OpenLiveAccount />} />
            <Route path="/portal/accounts" element={<AccountsOverview />} />
            
            {/* Funds Routes */}
            <Route path="/portal/funds/deposit" element={<DepositFunds />} />
            <Route path="/portal/funds/withdraw" element={<WithdrawFunds />} />
            <Route path="/portal/funds/transfer" element={<TransferFunds />} />
            <Route path="/portal/funds/history" element={<TransactionsHistory />} />
            <Route path="/portal/funds/payment-details" element={<PaymentDetails />} />
            
            {/* Social and Profile Routes */}
            <Route path="/portal/social" element={<SocialTrading />} />
            <Route path="/portal/profile" element={<Profile />} />
            <Route path="/portal/profile/documents" element={<UploadDocuments />} />
            <Route path="/portal/profile/agreements" element={<MyAgreements />} />
            <Route path="/portal/profile/messages" element={<Messages />} />
            <Route path="/portal/profile/reverse-solicitation" element={<ReverseSolicitation />} />
            <Route path="/portal/profile/economic-details" element={<EconomicProfile />} />
            
            {/* Tools Routes */}
            <Route path="/portal/downloads" element={<Downloads />} />
            <Route path="/portal/calendar" element={<EconomicCalendar />} />
            <Route path="/portal/calculator" element={<TradingCalculator />} />
            
            {/* Education Routes */}
            <Route path="/portal/education/ebooks" element={<Ebooks />} />
            <Route path="/portal/education/video-courses" element={<VideoCourses />} />
            <Route path="/portal/education/glossary" element={<Glossary />} />
            <Route path="/portal/education/podcasts" element={<Podcasts />} />
            <Route path="/portal/education/newsfeed" element={<Newsfeed />} />
            <Route path="/portal/education/daily-news" element={<DailyNews />} />

            {/* IB Routes */}
            <Route path="/portal/ib/dashboard" element={<IBDashboard />} />
            <Route path="/portal/ib/transactions" element={<IBTransactions />} />
            <Route path="/portal/ib/detailed-breakdown" element={<IBDetailedBreakdown />} />
            <Route path="/portal/ib/total-breakdown" element={<IBTotalBreakdown />} />
            <Route path="/portal/ib/statistics" element={<IBStatistics />} />
            <Route path="/portal/ib/marketing/links" element={<IBLinks />} />
            <Route path="/portal/ib/marketing/banners" element={<IBBanners />} />
            <Route path="/portal/ib/reports/accounts-commission" element={<IBAccountsCommission />} />
            <Route path="/portal/ib/reports/clients-commission" element={<IBClientsCommission />} />
            
            {/* Add other portal routes here as they are built */}
          </Route>
        </Route>
        
        {/* Admin Layout */}
        <Route element={<RoleRoute roles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* Standalone Demo Route (DEV ONLY) */}
        {import.meta.env.DEV && <Route path="/ui-demo" element={<UIDemo />} />}
      </Routes>
    </BrowserRouter>
  );
}
