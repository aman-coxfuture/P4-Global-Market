import React, { useState } from 'react';
import { BRAND } from '../../../config/brand';
import { LoyaltySocialQuests } from './LoyaltySocialQuests';

export function LoyaltyHero() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-12">
        {/* Mock background pattern of floating rocks */}
        <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a1128] to-[#0a1128]"></div>
           <div className="absolute w-12 h-12 bg-blue-900/40 rotate-45 transform skew-x-12 top-20 left-20 blur-[2px]"></div>
           <div className="absolute w-8 h-8 bg-blue-900/30 rotate-12 transform skew-y-12 bottom-20 left-40 blur-[1px]"></div>
           <div className="absolute w-16 h-16 bg-blue-900/20 rotate-45 transform -skew-x-12 top-40 right-20 blur-[3px]"></div>
           <div className="absolute w-10 h-10 bg-blue-900/40 rotate-45 transform skew-x-6 bottom-32 right-40 blur-[2px]"></div>
        </div>
        
        <span className="relative z-10 px-4 py-1.5 rounded-full border border-[#8cc63f] text-[#8cc63f] text-[11px] font-bold mb-6 tracking-wide bg-[#0a1128]/80">
          The VIP Experience
        </span>
        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white tracking-wide uppercase mb-6">
          {BRAND.name}<br/>LOYALTY PROGRAM
        </h1>
        <p className="relative z-10 text-sm text-slate-300 max-w-xl">
          Trade, earn {BRAND.coinName}, and redeem exclusive rewards
        </p>
      </div>

      {/* How it Works Section */}
      <div className="w-full text-white py-12 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide mb-3">How it works</h2>
        <p className="text-sm text-slate-400 mb-20">Three simple steps to enjoy the M4Markets Loyalty Program</p>

      {/* Progress Line with Animation */}
      <div className="relative w-full max-w-xl mb-16">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#1a233a] -translate-y-1/2 z-0"></div>
        {/* Animated Fill Line */}
        <div className="absolute top-1/2 left-0 h-[2px] bg-blue-600 -translate-y-1/2 z-0" style={{
          animation: 'progressTimeline 6s infinite',
          transformOrigin: 'left'
        }}>
          <style>{`
            @keyframes progressTimeline {
              0% { width: 0%; }
              15% { width: 0%; }
              30% { width: 50%; }
              45% { width: 50%; }
              60% { width: 100%; }
              80% { width: 100%; }
              100% { width: 0%; }
            }
            @keyframes pulseBox {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); border-color: #3b82f6; }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
        
        <div className="flex justify-between items-center relative z-10 px-8">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 transition-transform duration-500 hover:scale-110 cursor-pointer">1</div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10 transition-transform duration-500 hover:scale-110 cursor-pointer">2</div>
          <div className="w-8 h-8 rounded-full bg-[#1a233a] text-slate-500 flex items-center justify-center text-sm font-bold z-10 transition-transform duration-500 hover:scale-110 cursor-pointer">3</div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full relative">
        {/* Arrows connecting cards */}
        <div className="hidden md:block absolute top-1/2 left-[31%] text-blue-500 -translate-y-1/2 text-2xl font-light">→</div>
        <div className="hidden md:block absolute top-1/2 right-[31%] text-blue-500 -translate-y-1/2 text-2xl font-light">→</div>

        {/* Card 1 */}
        <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-8 flex-1 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-[#2a3655] transition-colors" style={{ animation: 'pulseBox 6s infinite', animationDelay: '0s' }}>
          <div className="bg-[#8cc63f] text-[#0b1120] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-8">Step 1</div>
          <div className="w-16 h-16 rounded-full border border-[#8cc63f] flex items-center justify-center mb-8 bg-blue-900/20">
             <div className="w-8 h-8 border-[1.5px] border-blue-400 rounded-full relative">
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-[1.5px] border-blue-400 rounded-full bg-[#0b1120]"></div>
             </div>
          </div>
          <h3 className="text-lg font-bold mb-3">Accumulate</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed px-4">Earn M4 Coins and Points through trading, completing quests and reaching milestones</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-8 flex-1 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-[#2a3655] transition-colors" style={{ animation: 'pulseBox 6s infinite', animationDelay: '1.8s' }}>
          <div className="bg-[#8cc63f] text-[#0b1120] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-8">Step 2</div>
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          </div>
          <h3 className="text-lg font-bold mb-3">Accelerate</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed px-4">Get up to 50% Boosts on your M4 Coins and M4 Points through our Tier & Balance Boosters</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-8 flex-1 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-[#2a3655] transition-colors" style={{ animation: 'pulseBox 6s infinite', animationDelay: '3.6s' }}>
          <div className="bg-[#1e293b] text-slate-400 text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-8">Step 3</div>
          <div className="w-16 h-16 rounded-full border border-[#1e293b] flex items-center justify-center mb-8 bg-blue-900/10">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
          </div>
          <h3 className="text-lg font-bold mb-3">Exchange</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed px-4">Exchange your M4 coins for exclusive rewards in the M4Markets Rewards Store</p>
        </div>
      </div>
      </div>
      
      {/* Understanding Section */}
      <div className="w-full text-white py-16 px-6 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">Understanding M4 Coins, M4 Points & M4 Diamonds</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-12 text-center">Learn the difference between the reward types you'll earn in the M4Markets Loyalty Program</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* M4 Coins */}
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 hover:border-[#2a3655] transition-colors shadow-lg hover:-translate-y-2 transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#f59e0b]"></div>
              <h3 className="text-lg font-bold">M4 Coins</h3>
            </div>
            <h4 className="text-[10px] font-bold text-blue-400 mb-3 uppercase tracking-wider">Spendable Currency</h4>
            <p className="text-[10px] text-slate-300 mb-6 leading-relaxed">Use your M4 coins to redeem exclusive rewards and discounts in the M4Markets Rewards Store.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Earn through trading, completing quests and milestones
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Redeem for exciting rewards
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Balance increases and decreases based on spending
              </li>
            </ul>
          </div>

          {/* M4 Diamonds */}
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 hover:border-[#2a3655] transition-colors shadow-lg hover:-translate-y-2 transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-sm bg-cyan-400 rotate-45 transform scale-75"></div>
              <h3 className="text-lg font-bold">M4 Diamonds</h3>
            </div>
            <h4 className="text-[10px] font-bold text-blue-400 mb-3 uppercase tracking-wider">Premium Currency</h4>
            <p className="text-[10px] text-slate-300 mb-6 leading-relaxed">M4 Diamonds unlock exclusive rewards unavailable through other currencies. The ultimate status symbol for elite traders.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Earn 1 M4 Diamond when you hit the daily limit of 10,000 M4 Coins (~100 FX lots)
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Redeem for ultra-exclusive rewards unavailable elsewhere
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Maximum of 1 M4 Diamond per day
              </li>
            </ul>
          </div>

          {/* M4 Points */}
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 hover:border-[#2a3655] transition-colors shadow-lg hover:-translate-y-2 transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-blue-600 rotate-45 transform scale-75"></div>
              <h3 className="text-lg font-bold">M4 Points</h3>
            </div>
            <h4 className="text-[10px] font-bold text-blue-400 mb-3 uppercase tracking-wider">Accumulative Points</h4>
            <p className="text-[10px] text-slate-300 mb-6 leading-relaxed">M4 Points determine your ranking and eligibility for competitions. M4 Points cannot be spent.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Earn through trading, completing quests and milestones
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Used for leaderboard rankings and competitions
              </li>
              <li className="flex items-start gap-2 text-[10px] text-slate-400">
                <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                Cannot be spent or exchanged
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Earn Section */}
      <div className="w-full text-white py-16 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">Earn M4 Coins through trading!</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-12 text-center">Every trade you make earns you M4 Coins & Points</p>

        <div className="w-full bg-[#0b1120] border border-[#1a233a] rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-center gap-8 shadow-xl hover:border-blue-900/50 transition-colors">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-white mb-1">$100k</div>
            <div className="text-[10px] text-slate-400">USD in notional value</div>
          </div>
          <div className="text-[9px] text-slate-500 italic">earns you</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#f59e0b] animate-bounce" style={{ animationDuration: '2s' }}></div>
              <div>
                <div className="text-xl font-bold text-white">100</div>
                <div className="text-[9px] text-slate-400">M4 Coins</div>
              </div>
            </div>
            <div className="text-slate-600 font-light">+</div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-600 rotate-45 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div>
                <div className="text-xl font-bold text-white">100</div>
                <div className="text-[9px] text-slate-400">M4 Points</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 mb-6 text-center">$100K USD in notional value is roughly equivalent to:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {['1 lot Major FX', '0.25 lots XAUUSD', '17 lots Crude Oil', '1 lot BTCUSD', '3.5 lots ETHUSD', '4 lots US100', '1.5 lots SPX500'].map((item, idx) => (
            <div key={idx} className="bg-[#0b1120] border border-[#1a233a] rounded-lg p-4 flex items-center justify-center gap-3 hover:border-slate-700 transition-colors cursor-default hover:bg-[#0f172a]">
              <div className="text-blue-500 opacity-70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <span className="text-[11px] font-medium text-slate-200">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-slate-600 mt-6 text-center">*Notional value is calculated based on your trading volume</p>
      </div>

      {/* Tiers Section */}
      <div className="w-full text-white py-16 px-6 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">M4Markets Loyalty Tiers</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-12 text-center">Your tier is based on your 90-Day Notional Value</p>

        <div className="w-full max-w-4xl relative mb-20 mt-10">
          <div className="absolute top-4 left-0 right-0 h-1.5 bg-[#1a233a] -translate-y-1/2 z-0 rounded-full"></div>
          {/* Animated Tier Line */}
          <div className="absolute top-4 left-0 h-1.5 bg-blue-600 -translate-y-1/2 z-0 rounded-full" style={{
            animation: 'tierTimeline 10s infinite alternate ease-in-out',
            transformOrigin: 'left'
          }}>
             <style>{`
               @keyframes tierTimeline {
                 0% { width: 0%; }
                 100% { width: 100%; }
               }
             `}</style>
          </div>
          
          <div className="flex justify-between items-start relative z-10">
            {['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'VIP'].map((tier, idx) => (
              <div key={tier} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(37,99,235,0.4)] ${idx === 5 ? 'border-2 border-[#8cc63f] bg-slate-800' : 'bg-slate-800'}`}>
                  <div className={`w-4 h-4 rounded-full ${idx === 0 ? 'bg-orange-800' : idx === 1 ? 'bg-slate-300' : idx === 2 ? 'bg-yellow-500' : idx === 3 ? 'bg-slate-100' : idx === 4 ? 'bg-cyan-400' : 'bg-red-500'}`}></div>
                </div>
                <div className="text-[10px] font-bold text-white mb-1">{tier}</div>
                <div className="text-[8px] text-slate-500">
                  {idx === 0 ? '$0-2M' : idx === 1 ? '$2-5M' : idx === 2 ? '$5-10M' : idx === 3 ? '$10-24M' : idx === 4 ? '$25-100M' : '$100M+'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
           {/* Bronze */}
           <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-orange-800"></div>
               <h3 className="text-sm font-bold text-white">Bronze</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 0 - 20 FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +0% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Exclusive M4Markets Merchandise
               </li>
             </ul>
           </div>

           {/* Silver */}
           <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-slate-300"></div>
               <h3 className="text-sm font-bold text-white">Silver</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 20 - 50 FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +5% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Rewards in Bronze
               </li>
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Apple & Samsung Electronics
               </li>
             </ul>
           </div>

           {/* Gold */}
           <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
               <h3 className="text-sm font-bold text-white">Gold</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 50 - 100 FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +10% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Rewards in Silver
               </li>
             </ul>
           </div>
           {/* Platinum */}
           <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-slate-100"></div>
               <h3 className="text-sm font-bold text-white">Platinum</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 100 - 240 FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +15% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Rewards in Gold
               </li>
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> 1-1 Experiences & Merchandise
               </li>
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Luxury Vacations
               </li>
             </ul>
           </div>

           {/* Diamond */}
           <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-cyan-400"></div>
               <h3 className="text-sm font-bold text-white">Diamond</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 250 - 1000 FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +20% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Rewards in Platinum
               </li>
             </ul>
           </div>

           {/* VIP */}
           <div className="bg-[#0b1120] border border-[#8cc63f] rounded-xl p-6 shadow-lg">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
               <h3 className="text-sm font-bold text-white">VIP</h3>
             </div>
             <p className="text-[10px] text-slate-400 mb-6 pl-8">Approximately 1000+ FX Lots</p>
             
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 px-3 py-1 rounded text-[10px] font-bold text-[#8cc63f] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8cc63f] rounded-full"></div>
                  +25% Boost
                </div>
             </div>
             <ul className="space-y-3">
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> Rewards in Diamond
               </li>
               <li className="flex items-start gap-2 text-[10px] text-slate-300">
                 <span className="text-blue-500 mt-0.5">✓</span> VIP Exclusives
               </li>
             </ul>
           </div>
        </div>
      </div>

      {/* Balance Boosters Section */}
      <div className="w-full text-white py-16 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">Balance Boosters</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-12 text-center">Get a daily boost to the M4 Coins & Points you've earned for the day by growing your M4Markets account</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { range: '$0-2k', boost: '+0% Boost' },
            { range: '$2k-5k', boost: '+5% Boost' },
            { range: '$5k-10k', boost: '+10% Boost' },
            { range: '$10k-25k', boost: '+15% Boost' },
            { range: '$25k-100k', boost: '+20% Boost' },
            { range: '$100k+', boost: '+25% Boost' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg hover:border-slate-700 transition-colors">
              <div className="text-sm font-bold text-white mb-4">{item.range}</div>
              <div className="flex items-center gap-3">
                <div className="flex relative">
                  <div className="w-4 h-4 rounded-full bg-[#f59e0b] z-10"></div>
                  <div className="w-4 h-4 bg-blue-600 rotate-45 transform -ml-2"></div>
                </div>
                <div className="text-[#8cc63f] font-bold">{item.boost}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Redeem Exclusive Rewards Section */}
      <div className="w-full text-white py-16 px-6 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">Redeem Exclusive Rewards</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-12 text-center">Exchange M4 coins for premium, exclusive rewards and experiences</p>

        {/* Marquee Container */}
        <div className="w-full relative pb-8 mt-4 overflow-hidden">
          <div className="flex w-max" style={{ animation: 'marquee 40s linear infinite' }}>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .flex:hover {
                animation-play-state: paused !important;
              }
            `}</style>
            
            {/* Double the array for seamless looping */}
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-6 pr-6">
                {[
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=iPhone+17', title: 'iPhone 17', desc: 'Redeem your coins and experience the perfect balance of innovation and value with the new iPhone 17.', coins: '81,850' },
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=Dubai+Atlantis', title: '5 Nights for 2 in Dubai Atlantis', desc: 'Experience luxury at its finest with a 5-night stay at the iconic Atlantis resort in Dubai.', coins: '100,000' },
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=AirPods+4', title: 'AirPods 4', desc: 'The future of wireless audio is here! Redeem your coins for a chance to own the all-new AirPods 4.', coins: '10,714' },
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=MacBook+Air', title: 'Macbook Air (15 inch)', desc: 'More screen, same ultra-thin body - claim the 15-inch MacBook Air M4 for a larger display, great battery life.', coins: '97,214' },
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=The+Maldives', title: '5 Nights for 2 in The Maldives', desc: 'Escape to paradise with a 5-night getaway for two in the breathtaking Maldives. Relax on pristine beaches.', coins: '154,000' },
                  { img: 'https://via.placeholder.com/300x200/0b1120/ffffff?text=F1+Experience', title: 'F1 Race Day Experience', desc: 'Feel the adrenaline live! Redeem your coins for an unforgettable F1 Race Day Experience.', coins: '120,000' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0b1120] border border-[#1a233a] rounded-xl flex flex-col shadow-lg w-[280px] overflow-hidden hover:border-blue-900/50 transition-colors">
                    <div className="h-40 w-full bg-slate-900 border-b border-[#1a233a]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 mix-blend-screen" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-[13px] font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[10px] text-slate-400 mb-6 leading-relaxed flex-1">{item.desc}</p>
                      <div className="flex items-center gap-2 mt-auto">
                        <div className="w-4 h-4 rounded-full bg-[#f59e0b]"></div>
                        <span className="text-[#8cc63f] font-bold text-xs">{item.coins} M4 Coins</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trading Streak Quest Section */}
      <div className="w-full text-white py-16 px-6 max-w-5xl mx-auto flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12 text-center max-w-xl">Trading Streak Quest: The 1M Club</h2>

        <div className="w-full bg-[#0b1120] border border-[#1a233a] rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-md">
            <h3 className="text-lg font-bold text-white mb-2">Join the 1M Club</h3>
            <p className="text-[11px] text-slate-400">Trade $1M of Notional Value everyday to build up your 1M Club Streak.</p>
          </div>
          <div className="border border-blue-900 bg-blue-900/10 rounded-lg px-6 py-3 flex flex-col items-center mt-6 md:mt-0">
            <div className="text-[9px] text-blue-400 font-bold mb-1 uppercase tracking-wider">Current streak</div>
            <div className="text-xl font-bold text-white">365 <span className="text-sm font-normal text-slate-400">days</span></div>
          </div>
        </div>

        <div className="text-[9px] text-slate-400 mb-10 flex items-center gap-2">
          <div className="text-blue-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
          </div>
          Unlock exclusive badges at each milestone
        </div>

        {/* Streak Timeline */}
        <div className="w-full max-w-4xl relative mb-20">
          <div className="absolute top-6 left-0 right-0 h-1 bg-[#1a233a] -translate-y-1/2 z-0"></div>
          <div className="absolute top-6 left-0 w-full h-1 bg-blue-600 -translate-y-1/2 z-0"></div>
          
          <div className="flex justify-between items-start relative z-10">
            {[
              { name: 'Applicant', days: '10d' },
              { name: 'Entrant', days: '30d' },
              { name: 'Member', days: '60d' },
              { name: 'Senior', days: '90d' },
              { name: 'Veteran', days: '180d' },
              { name: 'VIP', days: '270d' },
              { name: 'Boss', days: '365d' }
            ].map((node, idx) => (
              <div key={node.name} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-blue-500 bg-[#0b1120] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"></path><path d="M8 21h8l-2-6h-4l-2 6z"></path></svg>
                </div>
                <div className="text-[10px] font-bold text-white mb-1">{node.name}</div>
                <div className="text-[8px] text-slate-500">{node.days}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-sm font-bold text-white mb-8">Milestone Badges & Rewards</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {[
            { name: 'Applicant', days: '10d', coins: '2,500' },
            { name: 'Entrant', days: '30d', coins: '10,000' },
            { name: 'Member', days: '60d', coins: '20,000' },
            { name: 'Senior', days: '90d', coins: '35,000' },
            { name: 'Veteran', days: '180d', coins: '75,000' },
            { name: 'VIP', days: '270d', coins: '100,000' },
            { name: 'Boss', days: '365d', coins: '250,000' }
          ].map((badge, idx) => (
            <div key={badge.name} className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-4 flex items-center gap-4 hover:border-slate-700 transition-colors shadow-lg">
               <div className="w-10 h-10 rounded-full border border-[#1a233a] bg-slate-800 flex flex-shrink-0 items-center justify-center text-blue-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"></path><path d="M8 21h8l-2-6h-4l-2 6z"></path></svg>
               </div>
               <div>
                 <div className="flex items-center gap-2 mb-1">
                   <div className="text-[11px] font-bold text-white">{badge.name}</div>
                   <div className="text-[9px] text-blue-400 bg-blue-900/30 px-1.5 py-0.5 rounded">{badge.days}</div>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
                   <span className="text-[10px] text-[#8cc63f] font-bold">{badge.coins}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Ways to Earn Section */}
      <div className="w-full text-white py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-12">
        <div className="flex-1 space-y-4">
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Do Social Quests</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">Follow us on social media and complete quests for exclusive rewards and bonus M4 coins.</p>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Play Mini-Games</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">Spin the wheel, play daily challenges, and earn bonus M4 coins through fun interactive games.</p>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Refer Other Users</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">Invite friends to join M4Markets and earn rewards when they sign up and start trading.</p>
            </div>
          </div>

          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 flex items-start gap-4 hover:border-slate-700 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Complete Milestone Quests</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">Hit trading volume targets to unlock massive one-time coin bonuses.</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Other ways to earn M4 Coins & Points</h2>
          <p className="text-[11px] text-slate-400 mb-8 leading-relaxed">
            Trading, engaging, and completing missions - there are many ways to earn in the M4Markets Loyalty Program.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-xs font-bold">Spin-The-Wheel Mini Game</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-xs font-bold">Leaving Reviews</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-xs font-bold">Completing Social Media Quests</span>
            </li>
          </ul>
        </div>
      </div>

      <LoyaltySocialQuests />

      {/* ALL AVAILABLE QUESTS */}
      <div className="w-full text-white py-16 px-6 max-w-6xl mx-auto flex flex-col items-center border-t border-[#1a233a] mt-12 pt-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-center">All Available Quests</h2>
        <p className="text-[11px] md:text-sm text-slate-400 mb-16 text-center">Explore all the ways to earn M4 Coins & Points through different quest categories</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-[#8cc63f] mb-4">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Login Streak</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">How locked in are you to the M4Markets Portal? Log in everyday to maintain your streak, earn rewards and exclusive badges.</p>
          </div>
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-[#8cc63f] mb-4">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">The Advocate</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">Love M4Markets? Then spread the love by leaving reviews for us. Get rewarded with coins, points and even an exclusive badge if you complete all the review stages!</p>
          </div>
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500 mb-4">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Trading Streaks</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">How locked in are you to trading? Trade everyday to maintain your streak and earn rewards and an exclusive badge.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500 mb-4">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">Jack of All Trades</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">Trade every asset class to unlock this special badge - and get rewarded along the way!</p>
          </div>
          <div className="md:col-span-2 bg-[#0b1120] border border-[#1a233a] rounded-xl p-6 shadow-lg hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500 mb-4">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2">The Million Dollar Clubs</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">Trade 1 - 50 Million in Notional Value daily to rise up the ranks of the million dollar clubs. Earn rewards and exclusive badges on your journey!</p>
          </div>
        </div>
      </div>

      {/* EARN COINS ON THE GO */}
      <div className="w-full text-white py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">Earn Coins On The Go</h2>
          <p className="text-[11px] md:text-sm text-slate-400 mb-10 leading-relaxed">
            Track your coins, complete missions, and unlock exclusive rewards. Download the M4Markets Loyalty App and never miss a reward opportunity.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0 border border-blue-900/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">Instant Access</h4>
                <p className="text-[10px] text-slate-400">Access the client portal from anywhere</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0 border border-blue-900/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">Complete Quests Anywhere</h4>
                <p className="text-[10px] text-slate-400">Never miss a daily quest or bonus</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0 border border-blue-900/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">Social Quests</h4>
                <p className="text-[10px] text-slate-400">Easily complete social quests from your mobile device</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[580px] bg-[#0b1120] border-[8px] border-[#1a233a] rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a233a] rounded-b-[16px] z-20"></div>
            {/* Fake App UI */}
            <div className="p-5 pt-12 flex flex-col h-full relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold">M4</div>
                <div>
                   <div className="text-[8px] text-slate-400">Welcome back</div>
                   <div className="text-xs font-bold text-white">Trader</div>
                </div>
                <div className="ml-auto flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-[10px] text-[#8cc63f] font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div> 18,450
                </div>
              </div>
              <div className="w-full bg-[#1a233a] rounded-lg p-3 flex items-center justify-between mb-6 border border-slate-700/50">
                 <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span className="text-[10px] font-bold">Gold Tier</span>
                 </div>
                 <span className="text-[8px] text-slate-400">2,500 pts to Platinum</span>
              </div>
              
              <div className="flex justify-between mb-6 px-2">
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-500"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                   <span className="text-[8px] text-slate-400">Quests</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#8cc63f]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></div>
                   <span className="text-[8px] text-slate-400">Milestones</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-yellow-500"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
                   <span className="text-[8px] text-slate-400">Badges</span>
                 </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                 <h4 className="text-[10px] font-bold">Active Missions</h4>
                 <span className="text-[8px] text-blue-500">View All</span>
              </div>
              <div className="space-y-3 flex-1 overflow-y-auto scrollbar-hide mb-4">
                 <div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-slate-700/50">
                    <div className="w-6 h-6 rounded bg-blue-900/50"></div>
                    <div className="flex-1">
                      <div className="text-[9px] font-bold">Trade 5 Lots</div>
                      <div className="w-full h-1 bg-slate-700 rounded mt-1"><div className="w-2/3 h-full bg-blue-500 rounded"></div></div>
                    </div>
                    <div className="text-[#8cc63f] text-[9px] font-bold">+500</div>
                 </div>
                 <div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-slate-700/50">
                    <div className="w-6 h-6 rounded bg-purple-900/50"></div>
                    <div className="flex-1">
                      <div className="text-[9px] font-bold">Weekly Login Streak</div>
                      <div className="w-full h-1 bg-slate-700 rounded mt-1"><div className="w-1/2 h-full bg-purple-500 rounded"></div></div>
                    </div>
                    <div className="text-[#8cc63f] text-[9px] font-bold">+250</div>
                 </div>
                 <div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-slate-700/50">
                    <div className="w-6 h-6 rounded bg-green-900/50"></div>
                    <div className="flex-1">
                      <div className="text-[9px] font-bold">Refer a friend</div>
                      <div className="w-full h-1 bg-slate-700 rounded mt-1"><div className="w-1/4 h-full bg-green-500 rounded"></div></div>
                    </div>
                    <div className="text-[#8cc63f] text-[9px] font-bold">+1000</div>
                 </div>
              </div>

              {/* Bottom Nav */}
              <div className="h-14 mt-auto border-t border-slate-800 flex justify-around items-center">
                 <div className="text-blue-500 flex flex-col items-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="text-[6px] mt-1">Home</span></div>
                 <div className="text-slate-500 flex flex-col items-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span className="text-[6px] mt-1">Missions</span></div>
                 <div className="text-slate-500 flex flex-col items-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span className="text-[6px] mt-1">Rewards</span></div>
                 <div className="text-slate-500 flex flex-col items-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="text-[6px] mt-1">Profile</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPIN THE WHEEL & WIN M4 COINS */}
      <div className="w-full text-white py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 border-t border-[#1a233a] mt-12">
        <div className="flex-1 flex flex-col items-center">
          {/* Animated Wheel */}
          <div className="relative mb-12 flex justify-center pt-6">
            {/* Pointer (Blue Triangle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-blue-600 filter drop-shadow-md"></div>
            
            <div className="relative w-72 h-72 rounded-full border-[8px] border-[#0a1128] overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.4)]" style={{ animation: 'spin 20s linear infinite' }}>
              <style>{`
                @keyframes spin { 100% { transform: rotate(360deg); } }
              `}</style>
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#1e3a8a_0_30deg,#172554_30deg_60deg,#1e3a8a_60deg_90deg,#172554_90deg_120deg,#1e3a8a_120deg_150deg,#172554_150deg_180deg,#1e3a8a_180deg_210deg,#172554_210deg_240deg,#1e3a8a_240deg_270deg,#172554_270deg_300deg,#1e3a8a_300deg_330deg,#172554_330deg_360deg)]"></div>
              {/* Center peg */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-xl border-2 border-yellow-200 z-10 flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full border border-yellow-700/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-yellow-900">M4</span>
                 </div>
              </div>
              {/* Adding exact numbers to the segments */}
              {[1000, 2000, 3000, 100, 250, 500, 1000, 2000, 3000, 100, 250, 500].map((num, i) => (
                 <div key={i} className="absolute top-1/2 left-1/2 h-1/2 w-12 -translate-x-1/2 origin-top flex flex-col justify-end pb-3 items-center" style={{ transform: `rotate(${i * 30 + 15}deg)` }}>
                   <span className="text-[14px] font-bold text-white">{num}</span>
                 </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 w-full max-w-sm justify-center">
            <div className="flex-1 bg-[#0b1120] border border-blue-900/50 rounded-xl p-3 flex flex-col items-center text-center">
               <div className="w-6 h-6 rounded bg-blue-900/30 flex items-center justify-center text-blue-500 mb-2">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg>
               </div>
               <span className="text-[9px] text-slate-400">M4 Coin</span>
               <span className="text-[10px] font-bold">Win up to 3000</span>
            </div>
            <div className="flex-1 bg-[#0b1120] border border-blue-900/50 rounded-xl p-3 flex flex-col items-center text-center">
               <div className="w-6 h-6 rounded bg-blue-900/30 flex items-center justify-center text-blue-500 mb-2">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
               </div>
               <span className="text-[9px] text-slate-400">$100K Volume</span>
               <span className="text-[10px] font-bold">1 Free Spin</span>
            </div>
            <div className="flex-1 bg-[#0b1120] border border-blue-900/50 rounded-xl p-3 flex flex-col items-center text-center">
               <div className="w-6 h-6 rounded bg-blue-900/30 flex items-center justify-center text-blue-500 mb-2">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
               </div>
               <span className="text-[9px] text-slate-400">$1M Volume</span>
               <span className="text-[10px] font-bold">1 Free Spin</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-block bg-blue-900/30 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full mb-4 border border-blue-800/50">Mini-Game</div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">Spin The Wheel & Win M4 Coins</h2>
          <p className="text-[11px] md:text-sm text-slate-400 mb-8 leading-relaxed">
            Get rewarded for trading! Trade 100,000 USD and/or 1,000,000 USD in notional value each day to spin the wheel and earn M4 Coins.
          </p>
          
          <h3 className="text-sm font-bold text-white mb-6">How It Works</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">1</div>
              <span className="text-xs text-slate-300">Trade to earn free spins</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">2</div>
              <span className="text-xs text-slate-300">Use your spins in the portal</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">3</div>
              <span className="text-xs text-slate-300">Win M4 Coins and rewards!</span>
            </li>
          </ul>
          <p className="text-[9px] text-slate-500 mb-8">*Spins reset daily. Prizes vary by segment.</p>
          
          <button className="bg-[#8cc63f] hover:bg-[#7ab133] text-black font-bold py-3 px-8 rounded flex items-center gap-2 transition-colors">
            Enter Loyalty Portal <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>


      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="w-full text-white py-24 px-6 max-w-4xl mx-auto flex flex-col items-center border-t border-[#1a233a] mt-12 mb-24">
        <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-widest">Everything you need to know about the M4Markets Loyalty Program</p>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
          {['All', 'Program Basics', 'Earning', 'Tiers & Boosts', 'Redemption', 'Quests', 'Terms'].map((tag, i) => (
             <button key={i} className={`px-4 py-1.5 rounded-md text-[10px] font-bold border transition-colors ${i === 0 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-[#0b1120] border-[#1a233a] text-slate-400 hover:border-slate-600'}`}>
               {tag}
             </button>
          ))}
        </div>

        <div className="w-full space-y-3">
          {[
            { q: 'What is the M4Markets Loyalty Program?', a: 'The M4Markets Loyalty Program rewards you with M4 Coins and M4 Points when you trade, complete quests, and engage with M4Markets. You can then redeem M4 Coins for exclusive rewards and experiences.' },
            { q: 'What are M4 Coins?', a: 'M4 Coins are a spendable currency. You earn them from trading, completing quests, and hitting milestones, then use them to redeem items and experiences in the M4Markets Rewards Store.' },
            { q: 'What are M4 Points?', a: 'M4 Points are accumulative points. They cannot be spent and are used for rankings, leaderboards, and eligibility for competitions and certain quests.' },
            { q: 'What is the difference between M4 Coins and M4 Points?', a: 'M4 Coins can be spent in the Rewards Store and your balance goes up and down when you redeem rewards. M4 Points only go up, and are used for rankings, tiers, and competitions, not for buying rewards.' },
            { q: 'How do you earn M4 Coins and M4 Points?', a: 'You earn them by trading, completing milestone quests, playing mini-games, doing social media quests, maintaining login and trading streaks, and leaving reviews.' },
            { q: 'How many M4 Coins and M4 Points do I earn from trading?', a: 'For every 100,000 USD in notional trading volume, you earn 100 M4 Coins and 100 M4 Points.' },
            { q: 'What does 100,000 USD in notional value look like in trading?', a: '100,000 USD in notional value is roughly equal to 1 lot of a major FX pair, 0.25 lots of XAUUSD (gold), 17 lots of crude oil, 1 lot of BTCUSD, 33 lots of ETHUSD, 4 lots of US100, or 1.5 lots of SPX500.' },
            { q: 'Which instruments count towards my M4 Coins and M4 Points?', a: 'All supported M4Markets instruments that generate notional trading volume (FX, commodities, indices, and crypto) count towards your M4 Coins and M4 Points.' },
            { q: 'When are M4 Coins and M4 Points from trading credited to my account?', a: 'M4 Coins and M4 Points from trading are calculated based on your trading volume for the day and awarded on the next day.' },
            { q: 'What are M4Markets Loyalty Tiers?', a: 'Loyalty Tiers (Bronze, Silver, Gold, Platinum, Diamond, VIP) are based on your rolling 90-day notional trading volume. Higher tiers unlock bigger boosts and more exclusive rewards.' },
            { q: 'How is my tier calculated?', a: 'Your tier is based on your notional trading volume over the last 90 days, from yesterday back 90 days. As this rolling volume increases or decreases, your tier can change.' },
            { q: 'What are Tier Boosts?', a: 'Tier Boosts give you extra M4 Coins and M4 Points on top of what you already earn from trading and quests. Boosts range from 0% at Bronze up to 25% at VIP, depending on your tier.' },
            { q: 'What are Balance Boosters?', a: 'Balance Boosters give a daily percentage boost to the M4 Coins and M4 Points you earned that day, based on your M4Markets account balance. The higher your balance, the larger the boost, up to 25%.' },
            { q: 'Do Tier Boosts and Balance Boosters work together?', a: 'Yes. Your Tier Boost and Balance Booster can stack, giving you up to 50% extra M4 Coins and M4 Points on top of your base earnings.' },
            { q: 'Does spending M4 Coins affect my tier or M4 Points?', a: 'No. Spending M4 Coins only reduces your coin balance. Your tier and M4 Points are based on your trading volume and accumulated points, not on how many coins you have left.' },
            { q: 'What can I redeem with my M4 Coins?', a: 'You can redeem M4 Coins for a wide range of rewards, including M4Markets merchandise, Apple and Samsung electronics, luxury vacations, F1 experiences, and other VIP exclusives (depending on your tier and coin balance).' },
            { q: 'How do I redeem a reward?', a: 'Go to the M4Markets Rewards Store inside the loyalty portal, select the reward you want, and confirm the redemption. The required M4 Coins will be deducted from your balance.' },
            { q: 'How long does it take to receive my rewards?', a: 'After you redeem a reward, an M4Markets representative will contact you within 3 business days. For physical items, delivery can take up to 2 weeks due to logistics and shipping.' },
            { q: 'What are Social Quests?', a: "Social Quests reward you for connecting and engaging with M4Markets's social media accounts. You can earn M4 Coins and M4 Points by connecting your account, following, liking, commenting, or reposting on platforms like Facebook, LinkedIn, X/Twitter, YouTube, and Instagram." },
            { q: 'What is the Trading Streak Quest: The 1M Club?', a: 'The 1M Club rewards you for trading 1 million USD in notional value every day and maintaining a streak. As your streak grows (10, 30, 60, 90, 180, 270, 365 days), you unlock milestone badges and increasing M4 Coin and M4 Point rewards.' },
            { q: 'What other quests are available?', a: 'You can join quests such as Login Streak, Jack of All Trades (trade every asset class), The Advocate (leave reviews), Trading Streaks, Million Dollar Clubs, and Social Quests, each with its own badges and rewards.' },
            { q: 'Can I earn rewards for referring other traders?', a: 'Yes. By referring new users to M4Markets and having them sign up and start trading, you can earn additional M4 Coins and Points through referral quests.' },
            { q: 'What are mini-games in the loyalty program?', a: 'Mini-games like Spin-The-Wheel and daily challenges give you fun, interactive ways to earn bonus M4 Coins and M4 Points on top of your normal trading and quests.' },
            { q: 'Do M4 Coins or M4 Points expire?', a: 'M4 Coins and M4 Points are governed by the M4Markets Loyalty Program terms and conditions. Please check the latest T&Cs in the portal or contact M4Markets support for the most up-to-date expiry rules.' },
            { q: 'Are there any regional or account-type restrictions?', a: 'Some rewards or features may be limited based on your jurisdiction or account type due to local regulations. Please refer to your local M4Markets terms and conditions or speak to M4Markets support for details.' }
          ].map((faq, idx) => (
            <div key={idx} className={`w-full rounded-xl overflow-hidden transition-colors border ${openFaq === idx ? 'bg-[#0b1120] border-blue-900/50' : 'bg-[#0b1120] border-[#1a233a] hover:border-slate-700'}`}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 flex justify-between items-center text-left"
              >
                <span className={`text-[13px] font-bold ${openFaq === idx ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                <span className="text-slate-400 text-xl font-light ml-4">{openFaq === idx ? '×' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-[11px] text-slate-400 leading-relaxed border-t border-[#1a233a] mt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
