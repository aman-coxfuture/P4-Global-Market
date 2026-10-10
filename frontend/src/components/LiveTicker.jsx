import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const initialTickers = [
  { symbol: 'EUR/USD', bid: 1.08420, ask: 1.08422, spread: 0.2, change: '+0.15%', isUp: true },
  { symbol: 'GBP/USD', bid: 1.27150, ask: 1.27154, spread: 0.4, change: '+0.28%', isUp: true },
  { symbol: 'USD/JPY', bid: 154.620, ask: 154.625, spread: 0.5, change: '-0.12%', isUp: false },
  { symbol: 'XAU/USD (Gold)', bid: 2684.50, ask: 2684.62, spread: 0.12, change: '+1.42%', isUp: true },
  { symbol: 'BTC/USD', bid: 89450.00, ask: 89455.00, spread: 5.0, change: '+3.18%', isUp: true },
  { symbol: 'US30 (Wall St)', bid: 43210.0, ask: 43211.5, spread: 1.5, change: '+0.45%', isUp: true },
  { symbol: 'USOIL (WTI)', bid: 71.85, ask: 71.88, spread: 0.03, change: '-0.65%', isUp: false },
  { symbol: 'AUD/USD', bid: 0.65420, ask: 0.65423, spread: 0.3, change: '-0.08%', isUp: false },
  { symbol: 'ETH/USD', bid: 3120.40, ask: 3120.90, spread: 0.50, change: '+2.14%', isUp: true },
  { symbol: 'NAS100 (Tech)', bid: 20640.2, ask: 20641.0, spread: 0.8, change: '+0.88%', isUp: true },
];

export default function LiveTicker() {
  const [tickers, setTickers] = useState(initialTickers);

  // Subtle live fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev => prev.map(t => {
        const delta = (Math.random() - 0.48) * (t.spread * 0.15);
        const newBid = +(t.bid + delta).toFixed(t.symbol.includes('JPY') || t.symbol.includes('US30') ? 2 : 5);
        const newAsk = +(newBid + t.spread * (t.symbol.includes('JPY') ? 0.01 : 0.0001)).toFixed(5);
        return {
          ...t,
          bid: newBid > 0 ? newBid : t.bid,
          ask: newAsk > 0 ? newAsk : t.ask
        };
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0a1424] border-y border-slate-800/80 py-2.5 overflow-hidden select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tickers, ...tickers].map((item, idx) => (
          <div 
            key={`${item.symbol}-${idx}`} 
            className="inline-flex items-center space-x-3 px-6 border-r border-slate-800 text-xs font-mono"
          >
            <span className="font-sans font-bold text-slate-200">{item.symbol}</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <span className="text-slate-400">B: <span className="text-white">{item.bid}</span></span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">A: <span className="text-white">{item.ask}</span></span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 font-sans border border-blue-700/40">
              Spr: {item.spread}p
            </span>
            <span className={`flex items-center font-sans font-semibold text-xs ${item.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
              {item.isUp ? <ArrowUpRight className="w-3.5 h-3.5 inline" /> : <ArrowDownRight className="w-3.5 h-3.5 inline" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
