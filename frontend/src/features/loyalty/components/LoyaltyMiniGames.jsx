import React, { useState } from 'react';

const GAMES = [
  { id: '100k', title: 'Spin the Wheel (100k)', desc: 'Earn a free daily spin by achieving $100,000 USD in notional trading volume from today\'s trades.' },
  { id: '1m', title: 'Spin the Wheel (1M)', desc: 'Earn a free daily spin by achieving $1,000,000 USD in notional trading volume from today\'s trades.' },
  { id: 'daily', title: 'Daily Spin the wheel', desc: 'Earn a free spin by visiting the Loyalty program, please refresh the page if you did not get the spin.' },
];

export function LoyaltyMiniGames() {
  const [activeGame, setActiveGame] = useState(GAMES[0]);

  return (
    <div className="text-white min-h-[600px] p-6 max-w-7xl mx-auto">
      <div className="mb-4">
        <h2 className="text-[13px] font-bold text-white mb-1">Mini Games</h2>
        <p className="text-[10px] text-slate-400">Browse all the mini games on our platform and earn rewards as you go.</p>
      </div>

      {/* Top Carousel/Cards */}
      <div className="flex gap-4 mb-6">
        {GAMES.map(game => (
          <div 
            key={game.id}
            onClick={() => setActiveGame(game)}
            className={`bg-[#0b1120] border rounded flex-1 p-4 cursor-pointer relative transition-colors ${
              activeGame.id === game.id ? 'border-[#8cc63f]' : 'border-[#1a233a] hover:border-slate-600'
            }`}
          >
            {activeGame.id === game.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8cc63f]"></div>}
            <h3 className="text-[11px] font-bold text-white mb-1 pl-2 flex items-center gap-2">
              {activeGame.id === game.id && <div className="w-2 h-2 rounded-full border border-[#8cc63f] flex items-center justify-center"><div className="w-1 h-1 bg-[#8cc63f] rounded-full"></div></div>}
              {activeGame.id !== game.id && <div className="w-2 h-2 rounded-full border border-slate-500"></div>}
              {game.title}
            </h3>
            <p className="text-[9px] text-slate-400 pl-2 mt-2">{game.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full lg:w-[280px] flex flex-col gap-6">
          <div className="bg-[#0b1120] border border-[#1a233a] rounded p-4">
            <h3 className="text-[11px] font-bold text-white mb-1">Spin History</h3>
            <p className="text-[9px] text-slate-400 mb-6">Your spin activities are shown here.</p>
            
            <div className="flex justify-between items-center mb-6 px-4">
              <div className="text-center">
                <div className="text-[10px] text-white font-bold mb-2">Your M4 Coins</div>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-sm font-bold text-white">40</span>
                </div>
              </div>
              <div className="w-px h-8 bg-[#1a233a]"></div>
              <div className="text-center">
                <div className="text-[10px] text-white font-bold mb-2">Your M4 Points</div>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rotate-45"></div>
                  <span className="text-sm font-bold text-white">40</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 border-b border-[#1a233a] pb-2 mb-4 grid grid-cols-3">
              <div>Date</div>
              <div>Time</div>
              <div>Prize</div>
            </div>
            <div className="text-[9px] text-slate-500 text-center py-4">No spin history</div>
          </div>

          <div className="bg-[#0b1120] border border-[#1a233a] rounded p-4">
            <h3 className="text-[11px] font-bold text-white mb-1">Spin Streak</h3>
            <p className="text-[9px] text-slate-400 mb-6">Boost your rewards with multipliers when you earn streaks for spinning the wheel.</p>
            
            <div className="flex justify-between items-end mb-2">
              <div className="text-[10px] font-bold text-white">To 10 days streak</div>
              <div className="text-[9px] text-slate-400">0/10</div>
            </div>
            <div className="w-full bg-[#1a233a] h-1.5 rounded-full mb-6 overflow-hidden">
               <div className="bg-[#8cc63f] h-full w-[0%]"></div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="border border-[#1a233a] rounded p-3 flex justify-between items-center text-[10px]">
                <span className="text-white">10 days streak</span>
                <span className="text-slate-400">2x multiplier</span>
              </div>
              <div className="border border-[#1a233a] rounded p-3 flex justify-between items-center text-[10px]">
                <span className="text-white">30 days streak</span>
                <span className="text-slate-400">3x multiplier</span>
              </div>
              <div className="border border-[#1a233a] rounded p-3 flex justify-between items-center text-[10px]">
                <span className="text-white">90 days streak</span>
                <span className="text-slate-400">4x multiplier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column (Wheel) */}
        <div className="flex-1 bg-[#0b1120] border border-[#1a233a] rounded p-4 flex flex-col items-center relative overflow-hidden">
          <div className="w-full">
            <h3 className="text-[11px] font-bold text-white mb-1">{activeGame.title}</h3>
            <p className="text-[9px] text-slate-400 mb-10">{activeGame.desc}</p>
          </div>
          
          <div className="relative w-64 h-64 mb-10">
            {/* Simple CSS Wheel Mockup */}
            <div className="w-full h-full rounded-full border-4 border-[#1a233a] relative overflow-hidden bg-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0" style={{ 
                 background: 'conic-gradient(from 0deg, #0f172a 0 45deg, #0c4a6e 45deg 90deg, #0f172a 90deg 135deg, #0c4a6e 135deg 180deg, #0f172a 180deg 225deg, #0c4a6e 225deg 270deg, #0f172a 270deg 315deg, #0c4a6e 315deg 360deg)'
               }}></div>
               <div className="absolute w-8 h-8 bg-[#0b1120] rounded-full border-2 border-slate-700 flex items-center justify-center z-10 text-[8px] font-bold shadow-lg">M4</div>
            </div>
            {/* Pointer */}
            <div className="absolute right-[0px] top-1/2 -translate-y-1/2 w-8 h-6 flex items-center z-20 pointer-events-none">
               <div className="w-4 h-full border-y-[12px] border-r-[16px] border-y-transparent border-r-transparent border-l-[#8cc63f] border-l-[16px]"></div>
            </div>
          </div>

          <div className="mt-auto flex flex-col items-center">
            {activeGame.id === 'daily' ? (
              <>
                <button className="bg-transparent text-white font-bold px-6 py-2 rounded text-[11px] mb-2 cursor-pointer hover:bg-slate-800 transition-colors">Spin Wheel</button>
                <p className="text-[9px] text-slate-400 mb-1">You have <span className="text-white font-bold">1</span> spin(s) left</p>
                <p className="text-[9px] text-slate-400">Spins expiring: <span className="text-[#8cc63f] font-bold">14 Hours : 20 Minutes : 19 Seconds</span></p>
              </>
            ) : (
              <>
                <button className="bg-transparent border border-[#1a233a] text-slate-500 font-bold px-6 py-2 rounded text-[11px] mb-2 cursor-not-allowed">Spin Wheel</button>
                <p className="text-[9px] text-slate-400">You have <span className="text-white font-bold">0</span> spin(s) left</p>
              </>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[280px]">
          <div className="bg-[#0b1120] border border-[#1a233a] rounded p-4 h-full">
            <h3 className="text-[11px] font-bold text-white mb-1">Spin Missions</h3>
            <p className="text-[9px] text-slate-400 mb-6">Complete missions to earn spins to spin the wheel.</p>
            
            {activeGame.id === '100k' && (
              <>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-[10px] font-bold text-white">Achieve 100k Trading Volume</div>
                    <div className="text-[9px] text-[#8cc63f] flex items-center gap-1 font-bold">
                      Not Eligible 
                      <div className="w-3 h-3 rounded-full bg-[#8cc63f] text-[#0b1120] flex items-center justify-center text-[8px]">×</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400">Today (Daily Mission)</div>
                </div>

                <div className="bg-[#0f172a] rounded p-3 border border-[#1a233a]">
                   <div className="flex justify-between items-center text-[10px] text-slate-400 mb-3">
                     <span className="w-1/3">Todays dollar trading volume</span>
                     <span className="w-1/3 text-center">is greater than</span>
                     <span className="w-1/3 text-right text-[#8cc63f] font-bold">100000 <span className="bg-[#1a233a] text-slate-400 rounded-full w-3 h-3 inline-flex items-center justify-center ml-1">✓</span></span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-slate-400">
                     <span>Todays dollar trading volume</span>
                     <span>-</span>
                   </div>
                </div>
              </>
            )}

            {activeGame.id === '1m' && (
              <>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-[10px] font-bold text-white">Achieve 1M Trading Volume</div>
                    <div className="text-[9px] text-slate-400 flex items-center gap-1 font-bold">
                      Not Eligible 
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400">Today (Daily Mission)</div>
                </div>

                <div className="bg-[#0f172a] rounded p-3 border border-[#1a233a]">
                   <div className="flex justify-between items-center text-[10px] text-slate-400 mb-3">
                     <span className="w-1/3">Todays dollar trading volume</span>
                     <span className="w-1/3 text-center">is greater than</span>
                     <span className="w-1/3 text-right text-slate-300 font-bold">1000000</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] text-slate-400">
                     <span>Todays dollar trading volume</span>
                     <span>-</span>
                   </div>
                </div>
              </>
            )}

            {activeGame.id === 'daily' && (
              <>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-[10px] font-bold text-white flex gap-1 items-center">
                      Visit Loyalty Program <span className="text-[8px] text-slate-500 font-normal">(Daily Mission)</span>
                    </div>
                    <div className="text-[9px] text-[#8cc63f] flex items-center gap-1 font-bold">
                      Spin earned 
                      <div className="w-3 h-3 rounded-full bg-[#8cc63f] text-[#0b1120] flex items-center justify-center text-[8px]">✓</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f172a] rounded p-3 border border-[#1a233a]">
                   <div className="flex justify-between items-center text-[10px] text-slate-400">
                     <span className="text-white font-bold">Daily Visit</span>
                     <span className="text-[#8cc63f] font-bold flex items-center justify-center w-3 h-3 rounded-full bg-slate-800">✓</span>
                   </div>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
