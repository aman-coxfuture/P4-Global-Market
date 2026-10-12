import React from 'react';
import { Target, Battery, Trophy, Zap, Clock, Calendar, Star, Crown } from 'lucide-react';

export function LoyaltyQuests() {
  const MILESTONES = [
    { id: 1, title: 'M4Markets Loyalty Tiers', desc: 'Rise up the M4Markets Loyalty Tiers as you trade more with...', prog: '0/6', icon: Crown, color: 'text-yellow-500' },
    { id: 2, title: 'Balance Boosters', desc: 'Daily boosts to your M4 Points and Coins', prog: '1/6', icon: Battery, color: 'text-orange-500' },
    { id: 3, title: 'Trading Streak', desc: "Trade everyday to earn streaks - Yesterday's trade will be today's...", prog: '0/18', icon: Trophy, color: 'text-green-500', rewards: [2500, 2500], active: true },
    { id: 4, title: 'Login Streak', desc: 'https://m4markets.resuming.ai', prog: '0/18', icon: Clock, color: 'text-purple-500', rewards: [3000, 3000] },
    { id: 5, title: 'Jack of All Trades', desc: 'Trade all asset class type', prog: '0/8', icon: Target, color: 'text-blue-500', rewards: [1000, 1000] },
    { id: 6, title: 'Daily 1M Streak', desc: 'Trade 1M Notional Value every day', prog: '0/18', icon: Zap, color: 'text-cyan-500', rewards: [100000, 100000] },
  ];

  const STAGES = [
    { id: 1, name: 'Bronze', cond: '90-Day Notional Value (USD): 0 to 2M', badge: 'Bronze', active: false, revoked: true },
    { id: 2, name: 'Silver', cond: '90-Day Notional Value (USD): 2 to 5M', badge: 'Silver', active: false },
    { id: 3, name: 'Gold', cond: '90-Day Notional Value (USD): 5 to 10M', badge: 'Gold', active: false },
    { id: 4, name: 'Platinum', cond: '90-Day Notional Value (USD): 10 to 25M', badge: 'Platinum', active: false },
    { id: 5, name: 'Diamond', cond: '90-Day Notional Value (USD): 25 to 100M', badge: 'Diamond', active: false },
    { id: 6, name: 'VIP', cond: '90-Day Notional Value (USD): 100M +', badge: 'VIP', active: false },
  ];

  return (
    <div className="text-white min-h-[600px] flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto p-4">
      {/* Left Column: Milestones */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="mb-2">
          <h2 className="text-sm font-bold text-white mb-1">Milestones</h2>
          <p className="text-[10px] text-slate-400">View your milestones and track your progress.</p>
        </div>
        
        {MILESTONES.map(m => (
          <div key={m.id} className={`bg-[#0a1128] border ${m.active ? 'border-[#8cc63f]' : 'border-[#1a233a]'} rounded p-4 relative overflow-hidden group cursor-pointer hover:border-slate-600 transition-colors`}>
            {m.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8cc63f]"></div>}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-slate-800/50 ${m.color}`}>
                  <m.icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white">{m.title}</h3>
                  <p className="text-[9px] text-slate-400 mt-1 line-clamp-2 w-48">{m.desc}</p>
                </div>
              </div>
              <div className="text-xs font-bold text-slate-300">{m.prog}</div>
            </div>
            
            <div className="pt-3 border-t border-[#1a233a]">
              <h4 className="text-[9px] font-bold text-white mb-1">Rewards</h4>
              <p className="text-[9px] text-slate-400 mb-2">Complete this group to earn bonus rewards.</p>
              {m.rewards && (
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-blue-400 text-[10px] font-bold">{m.rewards[0].toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-yellow-500 text-[10px] font-bold">{m.rewards[1].toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Stages */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <div className="mb-2 flex justify-between items-end">
          <div>
            <h2 className="text-sm font-bold text-white mb-1">Stages</h2>
            <p className="text-[10px] text-slate-400">Complete each stage to unlock rewards and finish this milestone.</p>
          </div>
          <div className="text-[10px] text-slate-400">0 of 6 Complete</div>
        </div>

        {STAGES.map(s => (
          <div key={s.id} className={`bg-[#0a1128] border ${s.revoked ? 'border-[#8cc63f]' : 'border-[#1a233a]'} rounded p-4 relative`}>
            {s.revoked && (
              <div className="mb-4 text-[10px] text-slate-300 flex items-center gap-2">
                 <span className="text-[#8cc63f] font-bold">⚠ Stage Revoked</span>
                 <span>Fulfill the conditions to activate this milestone and regain the roles.</span>
              </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center">
                 <Trophy size={20} className="text-slate-400" />
               </div>
               <div>
                 <div className="text-[10px] text-slate-400">Stage {s.id}</div>
                 <h3 className="text-xs font-bold text-white">{s.name}</h3>
                 <p className="text-[10px] text-slate-400">{s.cond}</p>
               </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-white mb-1">Rewards</h4>
              <p className="text-[9px] text-slate-400 mb-2">Complete this milestone stage to get the following rewards.</p>
              <div className="flex gap-2 mb-2">
                <span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${s.id === 1 ? 'bg-orange-800' : s.id === 2 ? 'bg-slate-300' : s.id === 3 ? 'bg-yellow-500' : s.id === 4 ? 'bg-slate-200' : s.id === 5 ? 'bg-cyan-400' : 'bg-red-500'}`}></div>
                  {s.badge}
                </span>
              </div>
              {s.revoked && (
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  ⚠ Roles Removed.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
