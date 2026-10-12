import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { useTranslation } from 'react-i18next';

export function SidebarGroup({ group, userRoles, autoExpanded = false }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(autoExpanded);

  // Filter items by role
  const visibleItems = group.items.filter(item => item.roles.some(r => userRoles.includes(r)));
  
  if (visibleItems.length === 0) return null;

  return (
    <div className="mb-4">
      <div 
        className="px-6 mb-2 mt-4 flex items-center justify-between group cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-[10px] font-bold text-[#5e779d] uppercase tracking-wider group-hover:text-white transition-colors">
          {t(group.group === 'IB Menu' ? 'portal.ib_menu' : 'portal.trader_menu', group.group)}
        </h3>
        {isExpanded ? <ChevronDown size={14} className="text-[#5e779d]" /> : <ChevronRight size={14} className="text-[#5e779d]" />}
      </div>
      {isExpanded && (
        <ul className="space-y-1">
          {visibleItems.map(item => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
