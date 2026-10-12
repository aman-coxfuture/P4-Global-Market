import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { LoyaltyHero } from './components/LoyaltyHero';
import { LoyaltyStore } from './components/LoyaltyStore';
import { LoyaltyQuests } from './components/LoyaltyQuests';
import { LoyaltySocialQuests } from './components/LoyaltySocialQuests';
import { LoyaltyMiniGames } from './components/LoyaltyMiniGames';
import { BRAND } from '../../config/brand';

export default function LoyaltyProgram() {
  const [activeTab, setActiveTab] = useState('store');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '/portal/loyalty' },
    { label: 'Loyalty Program' },
  ];

  const loyaltyTabs = [
    { id: 'overview', label: 'Overview', content: <LoyaltyHero /> },
    { id: 'store', label: 'Store', content: <LoyaltyStore /> },
    { id: 'quests', label: 'Quests', content: <LoyaltyQuests /> },
    { id: 'social', label: 'Social Quests', content: <LoyaltySocialQuests /> },
    { id: 'mini-games', label: 'Mini Games', content: <LoyaltyMiniGames /> },
    { id: 'log', label: `${BRAND.coinName} Log`, content: <div className="p-6 text-slate-300">Logs coming soon...</div> },
  ];

  const activeContent = loyaltyTabs.find(t => t.id === activeTab)?.content;

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <div className="bg-[#0b1120] rounded-sm overflow-hidden shadow-xl border border-[#1a233a] min-h-[800px]">
        
        {/* Tab Buttons */}
        <div className="px-6 pt-4 border-b border-[#1a233a] flex gap-2">
          {loyaltyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-[11px] uppercase tracking-wider font-bold rounded-t focus:outline-none transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#8cc63f] text-[#0b1120]'
                  : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 border-b-0'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Persistent Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1a233a] bg-[#0b1120]">
           <div className="flex items-center gap-3">
             <img src={BRAND.logo} alt="Logo" className="h-4 brightness-0 invert" />
             <h2 className="text-sm font-bold text-white">M4Markets Loyalty Program</h2>
           </div>
           <div className="flex items-center gap-2 bg-[#1a233a] px-3 py-1.5 rounded-full border border-slate-700">
             <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
             <span className="text-xs font-bold text-white">40 M4 Coins</span>
           </div>
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {activeContent}
        </div>
        
      </div>
    </PageShell>
  );
}
