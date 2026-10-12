import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Settings, X } from 'lucide-react';

export default function IBStatistics() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [fromDate, setFromDate] = useState('2026-09-11');
  const [toDate, setToDate] = useState('2026-10-11');

  const dates = [
    '2026-09-11', '2026-09-13', '2026-09-15', '2026-09-17',
    '2026-09-19', '2026-09-21', '2026-09-23', '2026-09-25',
    '2026-09-27', '2026-09-29', '2026-10-01', '2026-10-03',
    '2026-10-05', '2026-10-07', '2026-10-09', '2026-10-11'
  ];

  // Data series matching the graph points in Image 1
  const commPoints = [15, 8, 18, 10, 2, 8, 6, 12, 11, 4, 75, 42, 2, 6, 75, 2];
  const volPoints = [4, 4, 18, 14, 21, 5, 12, 23, 26, 38, 20, 22, 5, 16, 28, 38];
  const regPoints = [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: 'IB Menu', href: '#' }, { label: 'Statistics' }]} />
      </div>

      {/* Settings Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded p-3 mb-5 flex justify-between items-center text-xs">
        <div className="text-slate-600">
          Chart Settings: <span className="font-semibold text-slate-800">{fromDate} - {toDate}</span> <span className="text-blue-600 font-semibold">[{currency}]</span>
        </div>
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className="bg-[#1e2b58] text-white p-1.5 rounded hover:bg-[#152042] transition-colors cursor-pointer"
        >
          <Settings size={15} />
        </button>
      </div>

      {/* Metric Summary Cards */}
      <div className="bg-white border border-slate-200 rounded shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 py-6">
        <div className="text-center p-2">
          <div className="text-xl font-bold text-slate-800">392.49 USD</div>
          <div className="text-[10px] text-slate-400 font-semibold tracking-wider mt-1 uppercase">Commissions</div>
        </div>
        <div className="text-center p-2">
          <div className="text-xl font-bold text-slate-800">423.51 lots</div>
          <div className="text-[10px] text-slate-400 font-semibold tracking-wider mt-1 uppercase">Total Volume</div>
        </div>
        <div className="text-center p-2">
          <div className="text-xl font-bold text-slate-800">6</div>
          <div className="text-[10px] text-slate-400 font-semibold tracking-wider mt-1 uppercase">Registrations</div>
        </div>
      </div>

      {/* Two Top Charts Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Commissions Chart */}
        <div className="bg-white border border-slate-200 rounded shadow-sm p-4 flex flex-col justify-between">
          <div>
            <div className="text-center text-slate-700 font-semibold text-xs mb-3">Commissions</div>
            <div className="flex items-center justify-center gap-1.5 mb-4 text-[11px] text-slate-500">
              <span className="w-5 h-2 bg-[#2563eb] inline-block rounded-xs"></span>
              <span>Commissions (USD)</span>
            </div>
          </div>

          {/* Chart Area with Y-axis */}
          <div className="flex h-56 w-full">
            {/* Y-axis Labels */}
            <div className="flex flex-col justify-between text-[9px] text-slate-400 pr-2 pb-5 text-right w-6 shrink-0 select-none">
              <span>80</span>
              <span>70</span>
              <span>60</span>
              <span>50</span>
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            {/* SVG Chart & Grid */}
            <div className="relative flex-1 border-l border-b border-slate-200">
              {/* Horizontal Gridlines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-slate-200 w-full"></div>
                ))}
              </div>

              <svg viewBox="0 0 450 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Dotted Trendline */}
                <line x1="10" y1="180" x2="440" y2="140" stroke="#2563eb" strokeWidth="1" strokeDasharray="3,3" />

                {/* Line Path */}
                <polyline 
                  points={commPoints.map((val, idx) => {
                    const x = 10 + (idx * (430 / 15));
                    const y = 200 - (val / 80) * 200;
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none" 
                  stroke="#2563eb" 
                  strokeWidth="1.5" 
                />

                {/* Dots on points */}
                {commPoints.map((val, idx) => {
                  const x = 10 + (idx * (430 / 15));
                  const y = 200 - (val / 80) * 200;
                  return (
                    <circle key={idx} cx={x} cy={y} r="3" fill="#2563eb" className="cursor-pointer hover:r-4 transition-all" />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* X-axis Rotated Dates (Safely Bounded) */}
          <div className="flex justify-between pl-6 pt-2 h-16 overflow-hidden select-none">
            {dates.map((d, i) => (
              <div key={i} className="w-5 flex justify-center">
                <span className="text-[8px] text-slate-400 block origin-top-left -rotate-45 whitespace-nowrap mt-1">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Total Volume Chart */}
        <div className="bg-white border border-slate-200 rounded shadow-sm p-4 flex flex-col justify-between">
          <div>
            <div className="text-center text-slate-700 font-semibold text-xs mb-3">Total Volume</div>
            <div className="flex items-center justify-center gap-1.5 mb-4 text-[11px] text-slate-500">
              <span className="w-5 h-2 bg-[#d97706] inline-block rounded-xs"></span>
              <span>Volume (Lots)</span>
            </div>
          </div>

          <div className="flex h-56 w-full">
            <div className="flex flex-col justify-between text-[9px] text-slate-400 pr-2 pb-5 text-right w-6 shrink-0 select-none">
              <span>40</span>
              <span>35</span>
              <span>30</span>
              <span>25</span>
              <span>20</span>
              <span>15</span>
              <span>10</span>
              <span>5</span>
              <span>0</span>
            </div>

            <div className="relative flex-1 border-l border-b border-slate-200">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-slate-200 w-full"></div>
                ))}
              </div>

              <svg viewBox="0 0 450 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <line x1="10" y1="160" x2="440" y2="120" stroke="#d97706" strokeWidth="1" strokeDasharray="3,3" />

                <polyline 
                  points={volPoints.map((val, idx) => {
                    const x = 10 + (idx * (430 / 15));
                    const y = 200 - (val / 40) * 200;
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none" 
                  stroke="#d97706" 
                  strokeWidth="1.5" 
                />

                {volPoints.map((val, idx) => {
                  const x = 10 + (idx * (430 / 15));
                  const y = 200 - (val / 40) * 200;
                  return (
                    <circle key={idx} cx={x} cy={y} r="3" fill="#d97706" className="cursor-pointer hover:r-4 transition-all" />
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="flex justify-between pl-6 pt-2 h-16 overflow-hidden select-none">
            {dates.map((d, i) => (
              <div key={i} className="w-5 flex justify-center">
                <span className="text-[8px] text-slate-400 block origin-top-left -rotate-45 whitespace-nowrap mt-1">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Registrations Chart */}
      <div className="bg-white border border-slate-200 rounded shadow-sm p-4 mb-6">
        <div>
          <div className="text-center text-slate-700 font-semibold text-xs mb-3">Registrations</div>
          <div className="flex items-center justify-center gap-1.5 mb-4 text-[11px] text-slate-500">
            <span className="w-5 h-2 bg-[#10b981] inline-block rounded-xs"></span>
            <span>Registrations</span>
          </div>
        </div>

        <div className="flex h-56 w-full">
          <div className="flex flex-col justify-between text-[9px] text-slate-400 pr-2 pb-5 text-right w-6 shrink-0 select-none">
            <span>2.0</span>
            <span>1.5</span>
            <span>1.0</span>
            <span>0.5</span>
            <span>0.0</span>
          </div>

          <div className="relative flex-1 border-l border-b border-slate-200">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-b border-slate-200 w-full"></div>
              ))}
            </div>

            <svg viewBox="0 0 900 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <polyline 
                points={regPoints.map((val, idx) => {
                  const x = 10 + (idx * (880 / 15));
                  const y = 200 - (val / 2) * 200;
                  return `${x},${y}`;
                }).join(' ')}
                fill="none" 
                stroke="#10b981" 
                strokeWidth="1.5" 
              />

              {regPoints.map((val, idx) => {
                const x = 10 + (idx * (880 / 15));
                const y = 200 - (val / 2) * 200;
                return (
                  <circle key={idx} cx={x} cy={y} r="3" fill="#10b981" className="cursor-pointer hover:r-4 transition-all" />
                );
              })}
            </svg>
          </div>
        </div>

        <div className="flex justify-between pl-6 pt-2 h-16 overflow-hidden select-none">
          {dates.map((d, i) => (
            <div key={i} className="w-5 flex justify-center">
              <span className="text-[8px] text-slate-400 block origin-top-left -rotate-45 whitespace-nowrap mt-1">
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-md shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-800">Chart Settings</h3>
              <button onClick={() => setIsSettingsOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={16} />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs">
              <div>
                <label className="block text-slate-500 mb-1">Currency</label>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-700 bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">From</label>
                  <input 
                    type="text" 
                    value={fromDate} 
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-blue-500" 
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">To</label>
                  <input 
                    type="text" 
                    value={toDate} 
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-blue-500" 
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button 
                  onClick={() => setIsSettingsOpen(false)}
                  className="bg-[#1e2b58] hover:bg-[#152042] text-white px-5 py-1.5 rounded text-xs font-semibold transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
