import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Wallet } from 'lucide-react';

export function ActionBar() {
  const location = useLocation();

  return (
    <div className="bg-white py-4 px-4 lg:px-6 flex flex-wrap items-center justify-center gap-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] z-10 relative">
      <Link 
        to="/portal/accounts/open-demo" 
        className={`text-[11px] font-bold px-4 py-2 rounded flex items-center gap-2 transition-colors ${
          location.pathname === '/portal/accounts/open-demo'
            ? 'bg-[#152042] text-[#8cc63f] ring-1 ring-[#8cc63f]'
            : 'bg-[#1e2b58] hover:bg-[#152042] text-white'
        }`}
      >
        <Plus size={14} /> Open Demo Account
      </Link>
      <Link 
        to="/portal/accounts/open-live" 
        className={`text-[11px] font-bold px-4 py-2 rounded flex items-center gap-2 transition-colors ${
          location.pathname === '/portal/accounts/open-live'
            ? 'bg-[#152042] text-[#8cc63f] ring-1 ring-[#8cc63f]'
            : 'bg-[#1e2b58] hover:bg-[#152042] text-white'
        }`}
      >
        <Plus size={14} /> Open Live Account
      </Link>
      <Link 
        to="/portal/funds/deposit" 
        className={`text-[11px] font-bold px-4 py-2 rounded flex items-center gap-2 transition-colors ${
          location.pathname === '/portal/funds/deposit'
            ? 'bg-[#152042] text-[#8cc63f] ring-1 ring-[#8cc63f]'
            : 'bg-[#1e2b58] hover:bg-[#152042] text-white'
        }`}
      >
        <Wallet size={14} /> Deposit Funds
      </Link>
    </div>
  );
}
