import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MessageSquare, LogOut, Send, X } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useAuthStore } from '../../stores/authStore';

import { BRAND } from '../../config/brand';

export function Topbar({ onMenuToggle }) {
  const { user, logout } = useAuthStore();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const profile = user?.profile || {};

  return (
    <>
      <header className="h-[60px] bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 z-30 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={BRAND.logo} alt={BRAND.name} className="h-8 object-contain" />
          </div>
          <button 
            onClick={onMenuToggle}
            className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors focus-visible:outline-none lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 border-r border-slate-200 pr-6"
          >
            <Send size={16} />
            <span>Contact your account manager</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 font-medium border-r border-slate-200 pr-6">
            <span>{profile.firstName || 'Mohinder'} {profile.lastName || 'Singh'}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-400">{profile.clientId || '2575095'}</span>
          </div>
          
          <LanguageSwitcher />

          <Link 
            to="/portal/profile/messages" 
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <MessageSquare size={16} />
            <span className="hidden md:inline">Messages</span>
          </Link>

          <button 
            onClick={() => logout()} 
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 border-l border-slate-200 pl-4 sm:pl-6"
          >
            <LogOut size={16} />
            <span className="hidden md:inline">Log out</span>
          </button>
        </div>
      </header>

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40">
          <div className="bg-white rounded-md shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <h3 className="text-[13px] text-slate-800">Contact your account manager : Payal Goyal</h3>
              <button onClick={() => setIsContactModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={16} />
              </button>
            </div>
            
            <div className="p-4">
               <div className="grid grid-cols-[200px_1fr] bg-slate-50 p-3 text-[11px] text-slate-700">
                 <div>Your account manager</div>
                 <div>Payal Goyal</div>
               </div>
               <div className="grid grid-cols-[200px_1fr] p-3 text-[11px] text-slate-700 border-b border-slate-100">
                 <div>Email</div>
                 <div>pgoyal@m4markets.com</div>
               </div>
            </div>

            <div className="p-4 flex justify-end">
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="bg-[#1e2b58] text-white px-6 py-1.5 rounded text-[11px] font-medium hover:bg-[#152042]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
