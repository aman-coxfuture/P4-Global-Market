import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { ActionBar } from './ActionBar';
import { useAuthStore } from '../../stores/authStore';

export default function PortalLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const user = useAuthStore(state => state.user);

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-800 overflow-hidden">
      <Topbar onMenuToggle={() => setIsMobileOpen(true)} />
      
      <div className="flex-1 flex min-h-0 relative">
        <Sidebar 
          isMobileOpen={isMobileOpen} 
          setIsMobileOpen={setIsMobileOpen} 
          userRoles={user?.roles || []} 
        />
        
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#f8f9fa]">
          <ActionBar />
          
          <main className="flex-1 p-4 lg:p-6 lg:pt-4">
            <Outlet />
          </main>
          
          <footer className="py-4 px-6 text-right text-[10px] text-slate-400">
            Powered By P4 Global Market © 2015-2026
          </footer>
        </div>
      </div>
    </div>
  );
}
