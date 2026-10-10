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
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
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
      </Routes>
    </BrowserRouter>
  );
}
