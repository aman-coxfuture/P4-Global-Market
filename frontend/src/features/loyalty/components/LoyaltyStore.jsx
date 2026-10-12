import React, { useState } from 'react';
import { Search } from 'lucide-react';

const STORE_ITEMS = [
  { id: 1, title: '$100 Trading Credit', desc: 'Ready to boost your trading power? Redeem your coins now and get $100 in trading credit.', coins: 29060, cat: 'Trading Credit' },
  { id: 2, title: 'Absolute Barbeque ₹2,000', desc: 'Absolute Barbeque brings you unlimited live grills sizzling right at your table.', coins: 5872, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Gift+Card', cat: 'India Exclusive Products' },
  { id: 3, title: 'Absolute Barbeque ₹5,000', desc: 'Absolute Barbeque brings you unlimited live grills sizzling right at your table.', coins: 14680, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Gift+Card', cat: 'India Exclusive Products' },
  { id: 4, title: 'Aldo ₹5,000', desc: 'Step out in style, redeem your coins at Aldo for standout shoes, bags, and accessories.', coins: 14027, img: 'https://placehold.co/200x120/1e2b58/FFF?text=ALDO', cat: 'India Exclusive Products' },
  { id: 5, title: 'Amazon Pay ₹5,000', desc: 'Spend it your way! Load your Amazon Pay balance and shop millions of products.', coins: 15622, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Amazon+Pay', cat: 'India Exclusive Products' },
  { id: 6, title: 'Amazon Pay ₹7,500', desc: 'Spend it your way! Load your Amazon Pay balance and shop millions of products.', coins: 31643, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Amazon+Pay', cat: 'India Exclusive Products' },
  { id: 7, title: 'Amazon Pay ₹10,000', desc: 'Spend it your way! Load your Amazon Pay balance and shop millions of products.', coins: 1558, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Amazon+Pay', cat: 'India Exclusive Products' },
  { id: 8, title: 'Amazon Shopping ₹1,000', desc: 'Treat yourself to something new!', coins: 3118, img: 'https://placehold.co/200x120/1e2b58/FFF?text=Amazon', cat: 'India Exclusive Products' },
  { id: 9, title: 'VPS Subscription', desc: 'Experience ultra fast, uninterrupted trading with a VPS (Virtual Private Server)...', coins: 87180, cat: 'Trading Utilities' },
];

export function LoyaltyStore() {
  const [activeSubTab, setActiveSubTab] = useState('Store');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Trading Credit', 'Trading Utilities', 'India Exclusive Products'];

  return (
    <div className="text-white min-h-[600px] flex flex-col items-center w-full">
      <div className="flex justify-center border-b border-[#1a233a] mb-6 w-full max-w-sm">
        {['Store', 'Purchased'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${activeSubTab === tab ? 'text-[#8cc63f] border-b-2 border-[#8cc63f]' : 'text-slate-400 hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full text-center mb-8">
        <h2 className="text-xl font-bold mb-4">M4Markets Loyalty Store</h2>
        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden relative border border-[#1a233a] bg-[#0a1128]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent z-10 p-8 flex items-center">
            <h1 className="text-5xl font-bold text-white tracking-wide">
              M4<span className="text-[#3b82f6]">Markets</span>
            </h1>
          </div>
          <div className="h-48 w-full bg-[#121c38] flex items-center justify-end pr-8">
             {/* Mock 3D Icons */}
             <div className="flex gap-4 opacity-80 mix-blend-screen scale-150 transform translate-x-12">
               <div className="w-24 h-24 bg-slate-600 rotate-45 transform skew-x-12 opacity-50"></div>
               <div className="w-32 h-32 bg-slate-500 rotate-45 transform skew-y-12 shadow-2xl z-10"></div>
               <div className="w-20 h-20 bg-slate-700 rotate-45 transform skew-x-12 opacity-50"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                  activeFilter === f ? 'border-[#8cc63f] text-[#8cc63f]' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products" 
              className="bg-transparent border border-[#1a233a] rounded px-3 py-1.5 text-xs text-white w-64 pr-8 focus:outline-none focus:border-slate-500"
            />
            <Search size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        {activeSubTab === 'Store' && (
          <div className="mb-10">
            {/* Trading Credit Section */}
            {(activeFilter === 'All' || activeFilter === 'Trading Credit') && (
              <>
                <h3 className="text-sm font-bold text-white mb-4">Trading Credit</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {STORE_ITEMS.filter(i => i.cat === 'Trading Credit').map(item => (
                    <div key={item.id} className="bg-[#0b1120] border border-[#1a233a] rounded-lg p-5 flex flex-col items-center text-center">
                      <div className="text-[#8cc63f] text-2xl font-bold my-6">{item.title.split(' ')[0]}</div>
                      <div className="text-[#8cc63f] text-sm font-bold uppercase mb-8 tracking-wider">{item.title.split(' ').slice(1).join(' ')}</div>
                      <h4 className="text-xs font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 mb-4 line-clamp-3">{item.desc}</p>
                      <div className="mt-auto pt-4 w-full flex justify-between gap-2 text-[8px] text-white">
                        <button>Credit the equivale...</button>
                        <button>Get the item delive...</button>
                      </div>
                      <div className="w-full flex items-center gap-1.5 mt-4 pt-4 border-t border-[#1a233a]">
                        <span className="text-[#f59e0b] text-base font-bold">{item.coins.toLocaleString()}</span>
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Trading Utilities Section */}
            {(activeFilter === 'All' || activeFilter === 'Trading Utilities') && (
              <>
                <h3 className="text-sm font-bold text-white mt-10 mb-4">Trading Utilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   {STORE_ITEMS.filter(i => i.cat === 'Trading Utilities').map(item => (
                    <div key={item.id} className="bg-[#0b1120] border border-[#1a233a] rounded-lg p-5 flex flex-col items-center text-center hover:border-[#2a3655] transition-colors">
                      <div className="flex-1 flex items-center justify-center min-h-[120px] w-full">
                        <h4 className="text-lg font-bold text-[#8cc63f] px-4">{item.title}</h4>
                      </div>
                      <div className="bg-black/30 rounded p-4 w-full text-left mt-4 border border-[#1a233a]">
                        <h5 className="text-[10px] font-bold text-white mb-2">{item.title}</h5>
                        <p className="text-[9px] text-slate-400 mb-4 line-clamp-3">{item.desc}</p>
                        <div className="mt-auto w-full flex justify-between gap-2 text-[8px] text-white">
                          <button className="hover:text-slate-300">Credit the equivale...</button>
                          <button className="hover:text-slate-300">Get the item delive...</button>
                        </div>
                      </div>
                      <div className="w-full flex items-center gap-1.5 mt-4 pt-3 border-t border-[#1a233a]">
                        <span className="text-[#f59e0b] text-sm font-bold">{item.coins.toLocaleString()}</span>
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* India Exclusive Products Section */}
            {(activeFilter === 'All' || activeFilter === 'India Exclusive Products') && (
              <>
                <h3 className="text-sm font-bold text-white mt-10 mb-4">India Exclusive Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   {STORE_ITEMS.filter(i => i.cat === 'India Exclusive Products').map(item => (
                    <div key={item.id} className="bg-[#0b1120] border border-[#1a233a] rounded-lg p-5 flex flex-col items-center text-center hover:border-[#2a3655] transition-colors">
                      <h4 className="text-[11px] font-bold text-[#8cc63f] mb-4">{item.title}</h4>
                      {item.img && <img src={item.img} alt={item.title} className="w-32 h-20 object-contain mb-4 rounded" />}
                      <h5 className="text-[10px] font-bold text-white mb-2">{item.title} (₹{item.title.match(/\d+(,\d+)?/)?.[0]})</h5>
                      <p className="text-[9px] text-slate-400 mb-4 line-clamp-3">{item.desc}</p>
                      <div className="mt-auto w-full flex justify-between gap-2 text-[8px] text-white">
                        <button className="hover:text-slate-300">Credit the equivale...</button>
                        <button className="hover:text-slate-300">Get the item delive...</button>
                      </div>
                      <div className="w-full flex items-center gap-1.5 mt-4 pt-3 border-t border-[#1a233a]">
                        <span className="text-[#f59e0b] text-sm font-bold">{item.coins.toLocaleString()}</span>
                        <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeSubTab === 'Purchased' && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
             <div className="flex justify-center border-b border-[#1a233a] mb-10 w-full max-w-2xl">
                {['All (0)', 'New Purchase (0)', 'In Progress (0)', 'Completed (0)'].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 text-xs font-medium transition-colors ${idx === 0 ? 'text-[#8cc63f] border-b-2 border-[#8cc63f]' : 'hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="opacity-50 mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <p className="text-sm">There are no transactions to display</p>
          </div>
        )}
      </div>
    </div>
  );
}
