import React from 'react';
import { PORTAL_MENU } from '../../config/menu';
import { SidebarGroup } from './SidebarGroup';
import { BRAND } from '../../config/brand';

export function Sidebar({ isMobileOpen, setIsMobileOpen, userRoles = ['user'] }) {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`absolute lg:relative top-0 left-0 h-full w-64 bg-[#0a1128] border-r border-[#1a233a] z-50 flex flex-col transition-transform duration-300 ease-in-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          {PORTAL_MENU.map((group, idx) => (
            <SidebarGroup 
              key={idx} 
              group={group} 
              userRoles={userRoles} 
              autoExpanded={idx === 0} 
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
