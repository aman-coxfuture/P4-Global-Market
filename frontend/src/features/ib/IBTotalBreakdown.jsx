import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Download, RefreshCw, Calendar } from 'lucide-react';

export default function IBTotalBreakdown() {
  const breadcrumbs = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: 'IB Menu', href: '#' },
    { label: 'Dashboard', href: '/portal/ib/dashboard' },
    { label: 'Total Commission Breakdown' }
  ];

  const data = [
    { date: '2026-10-09', wallet: '3016404', account: '3521370', group: 'real\\M4\\Swap Free\\CENT2-B-USD', currency: 'USD', lots: '0.21000000', monetaryComm: '0.00', commReceived: '0.00' },
    { date: '2026-10-09', wallet: '3016404', account: '3599558', group: 'real\\M4\\Swap Free\\CENT2-B-USD', currency: 'USD', lots: '10.25000000', monetaryComm: '0.72', commReceived: '0.72' },
    { date: '2026-10-09', wallet: '3016404', account: '3604274', group: 'real\\M4\\Swap Free\\CENT-B-USD', currency: 'USD', lots: '0.02000000', monetaryComm: '0.00', commReceived: '0.00' },
    { date: '2026-10-09', wallet: '3016404', account: '3616094', group: 'real\\M4\\Swap Free\\VIP-B-USD', currency: 'USD', lots: '0.04000000', monetaryComm: '0.10', commReceived: '0.10' },
    { date: '2026-10-09', wallet: '3016404', account: '3620423', group: 'real\\M4\\Swap Free\\STD-B-USD', currency: 'USD', lots: '15.77000000', monetaryComm: '63.08', commReceived: '63.08' },
    { date: '2026-10-09', wallet: '3016404', account: '3596818', group: 'real\\M4\\Swap Free\\STD-B-USD', currency: 'USD', lots: '0.02000000', monetaryComm: '0.14', commReceived: '0.14' },
    { date: '2026-10-09', wallet: '3016404', account: '3618773', group: 'real\\M4\\Swap Free\\STD-B-USD', currency: 'USD', lots: '0.05000000', monetaryComm: '0.38', commReceived: '0.38' },
    { date: '2026-10-09', wallet: '3016404', account: '3606455', group: 'real\\M4\\Swap Free\\CENT2-B-USD', currency: 'USD', lots: '7.20000000', monetaryComm: '0.50', commReceived: '0.50' },
    { date: '2026-10-09', wallet: '3016404', account: '3620486', group: 'real\\M4\\Swap Free\\CENT2-B-USC', currency: 'USD', lots: '0.00440000', monetaryComm: '0.02', commReceived: '0.02' },
    { date: '2026-10-09', wallet: '3016404', account: '3601417', group: 'real\\M4\\Swap Free\\STD-B-USD', currency: 'USD', lots: '5.80000000', monetaryComm: '410.40', commReceived: '12.93' },
    { date: '2026-10-08', wallet: '3016404', account: '3620486', group: 'real\\M4\\Swap Free\\CENT2-B-USC', currency: 'USD', lots: '0.00260000', monetaryComm: '0.01', commReceived: '0.01' },
    { date: '2026-10-08', wallet: '3016404', account: '3599558', group: 'real\\M4\\Swap Free\\CENT2-B-USD', currency: 'USD', lots: '12.08000000', monetaryComm: '0.85', commReceived: '0.85' },
    { date: '2026-10-08', wallet: '3016404', account: '3606455', group: 'real\\M4\\Swap Free\\CENT2-B-USD', currency: 'USD', lots: '7.20000000', monetaryComm: '0.50', commReceived: '0.50' },
    { date: '2026-10-08', wallet: '3016404', account: '3601417', group: 'real\\M4\\Swap Free\\STD-B-USD', currency: 'USD', lots: '3.00000000', monetaryComm: '6.00', commReceived: '6.00' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 gap-2">
        <Link 
          to="/portal/ib/transactions" 
          className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          IB Transactions
        </Link>
        <Link 
          to="/portal/ib/detailed-breakdown" 
          className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          Detailed Commission Breakdown
        </Link>
        <Link 
          to="/portal/ib/total-breakdown" 
          className="px-4 py-2 text-xs font-semibold border-b-2 border-[#1e2b58] text-[#1e2b58] bg-white rounded-t"
        >
          Total Commission Breakdown
        </Link>
      </div>

      {/* Content */}
      <div className="bg-white border border-slate-200 rounded-md shadow-sm">
        {/* Top bar with calculate totals & export */}
        <div className="flex justify-between items-center p-3.5 bg-amber-50/50 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-800">Totals</span>
            <button className="flex items-center gap-1.5 bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 rounded text-xs font-medium transition-colors">
              <RefreshCw size={12} /> Calculate totals
            </button>
          </div>
          <button className="flex items-center gap-1.5 bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1.5 text-xs font-medium rounded transition-colors">
            <Download size={13} /> Export to CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-700 font-bold">
              <tr>
                <th className="px-4 py-3">Date <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">IB Wallet <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Account <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Group <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Currency <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Lots <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Monetary commission <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Commission Received <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
              </tr>
              {/* Filter inputs */}
              <tr className="border-t border-slate-100 bg-white">
                <th className="px-4 py-2">
                  <div className="relative w-28">
                    <input type="text" className="w-full border border-slate-200 rounded px-2 py-1 pr-5 text-xs font-normal" />
                    <Calendar size={12} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </th>
                <th className="px-4 py-2"><input type="text" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-48 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-20 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-28 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
                <th className="px-4 py-2"><input type="text" className="w-28 border border-slate-200 rounded px-2 py-1 text-xs font-normal" /></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                  <td className="px-4 py-2.5 text-slate-600">{row.date}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.wallet}</td>
                  <td className="px-4 py-2.5 text-blue-600 hover:underline cursor-pointer">{row.account}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.group}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.currency}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.lots}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.monetaryComm}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.commReceived}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>« Previous</button>
            <button className="px-2.5 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-700">Next »</button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
