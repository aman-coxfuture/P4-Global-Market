import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Download, Calendar } from 'lucide-react';

export default function IBDetailedBreakdown() {
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbs = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: 'IB Menu', href: '#' },
    { label: 'Dashboard', href: '/portal/ib/dashboard' },
    { label: 'Detailed Commission Breakdown' }
  ];

  const rows = [
    { 
      referral: '', 
      account: '', 
      lots: '', 
      monetaryComm: '-34 USD', 
      commReceived: '-34 USD', 
      symbol: '', 
      closeTime: '2026-10-10 09:18:19', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-10 09:18:19', 
      ibLink: '', 
      source: 'Transaction #1195930', 
      accountType: '',
      isHighlight: true
    },
    { 
      referral: 'Tarsem Singh', 
      account: '3621370', 
      lots: '0.1', 
      monetaryComm: '0.0015 USD', 
      commReceived: '0.0015 USD', 
      symbol: 'XAUUSDc', 
      closeTime: '2026-10-09 23:55:07', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-10 00:05:47', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118860377', 
      accountType: 'MT5 USD Cent Account' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.03', 
      monetaryComm: '0.12 USD', 
      commReceived: '0.12 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:12:26', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:21:51', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859485', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.04', 
      monetaryComm: '0.16 USD', 
      commReceived: '0.16 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859434', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.04', 
      monetaryComm: '0.16 USD', 
      commReceived: '0.16 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859433', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.02', 
      monetaryComm: '0.08 USD', 
      commReceived: '0.08 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859432', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.02', 
      monetaryComm: '0.08 USD', 
      commReceived: '0.08 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859431', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.04', 
      monetaryComm: '0.16 USD', 
      commReceived: '0.16 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859430', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.02', 
      monetaryComm: '0.08 USD', 
      commReceived: '0.08 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859429', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.02', 
      monetaryComm: '0.08 USD', 
      commReceived: '0.08 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859428', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.02', 
      monetaryComm: '0.08 USD', 
      commReceived: '0.08 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:07:37', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859427', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.2', 
      monetaryComm: '0.8 USD', 
      commReceived: '0.8 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 23:06:40', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:11:59', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859418', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.2', 
      monetaryComm: '0.8 USD', 
      commReceived: '0.8 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:54:39', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859087', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.2', 
      monetaryComm: '0.8 USD', 
      commReceived: '0.8 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:54:39', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859086', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.2', 
      monetaryComm: '0.8 USD', 
      commReceived: '0.8 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:54:39', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118859085', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.05', 
      monetaryComm: '0.2 USD', 
      commReceived: '0.2 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:51:36', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118858735', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.05', 
      monetaryComm: '0.2 USD', 
      commReceived: '0.2 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:51:36', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118858734', 
      accountType: 'MT5 Standard' 
    },
    { 
      referral: 'Bhim Sain', 
      account: '3620423', 
      lots: '0.05', 
      monetaryComm: '0.2 USD', 
      commReceived: '0.2 USD', 
      symbol: 'XAUUSD-', 
      closeTime: '2026-10-09 22:51:35', 
      convRate: '1 USD = 1.00000 USD', 
      processedAt: '2026-10-09 23:02:10', 
      ibLink: 'VIP - 10', 
      source: 'Ticket #118858726', 
      accountType: 'MT5 Standard' 
    }
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
          className="px-4 py-2 text-xs font-semibold border-b-2 border-[#1e2b58] text-[#1e2b58] bg-white rounded-t"
        >
          Detailed Commission Breakdown
        </Link>
        <Link 
          to="/portal/ib/total-breakdown" 
          className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          Total Commission Breakdown
        </Link>
      </div>

      {/* Content */}
      <div className="bg-white border border-slate-200 rounded-md shadow-sm">
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-800">Detailed Commission Breakdown</h2>
          <button className="flex items-center gap-1.5 bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1.5 text-xs font-medium rounded transition-colors">
            <Download size={13} /> Export to CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-700 font-bold">
              <tr>
                <th className="px-4 py-3">Referral <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Account <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Lots <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Monetary Commission <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Commission Received <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Symbol <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Close Time <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Conversion Rate <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Processed At <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Referral IB Link <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Source <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Account Type <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
              </tr>
              {/* Filter inputs row */}
              <tr className="border-t border-slate-100 bg-white">
                <th className="px-4 py-2"><input type="text" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" className="w-20 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" className="w-16 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" placeholder="-34 USD" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-slate-400 focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" placeholder="-34 USD" className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-slate-400 focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" className="w-20 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2">
                  <div className="relative w-36">
                    <input type="text" defaultValue="2026-10-10 09:18:19" className="w-full border border-slate-200 rounded px-2 py-1 pr-6 text-xs font-normal text-slate-400 focus:outline-none focus:border-blue-500" />
                    <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </th>
                <th className="px-4 py-2"><input type="text" defaultValue="1 USD = 1.00000 USD" className="w-32 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-slate-400 focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2">
                  <div className="relative w-36">
                    <input type="text" defaultValue="2026-10-10 09:18:19" className="w-full border border-slate-200 rounded px-2 py-1 pr-6 text-xs font-normal text-slate-400 focus:outline-none focus:border-blue-500" />
                    <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </th>
                <th className="px-4 py-2"><input type="text" className="w-20 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" className="w-32 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
                <th className="px-4 py-2"><input type="text" className="w-28 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" /></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={`border-b border-slate-100 transition-colors ${row.isHighlight ? 'bg-slate-50/70 font-semibold' : 'hover:bg-slate-50/60'}`}>
                  <td className="px-4 py-2.5 font-medium text-slate-800">{row.referral}</td>
                  <td className="px-4 py-2.5 text-blue-600 hover:underline cursor-pointer">{row.account}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.lots}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.monetaryComm}</td>
                  <td className="px-4 py-2.5 text-slate-800">{row.commReceived}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.symbol}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.closeTime}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.convRate}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.processedAt}</td>
                  <td className="px-4 py-2.5 text-slate-700">{row.ibLink}</td>
                  <td className="px-4 py-2.5 text-slate-600">{row.source}</td>
                  <td className="px-4 py-2.5 text-slate-700 font-medium">{row.accountType}</td>
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
