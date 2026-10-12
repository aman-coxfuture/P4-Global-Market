import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Download, Calendar, ChevronDown } from 'lucide-react';

export default function IBTransactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterId, setFilterId] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterAmount, setFilterAmount] = useState('');
  const [filterAccount, setFilterAccount] = useState('');

  const breadcrumbs = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: 'IB Menu', href: '#' },
    { label: 'Dashboard', href: '/portal/ib/dashboard' },
    { label: 'IB Transactions' }
  ];

  const transactions = [
    { id: '785973', type: 'IB Withdrawal', date: '2026-04-25 09:25:01', status: 'approved', amount: '-54.00', account: 'IB Wallet 3016404' },
    { id: '813488', type: 'IB Withdrawal', date: '2026-05-10 04:46:38', status: 'approved', amount: '-76.00', account: 'IB Wallet 3016404' },
    { id: '826174', type: 'IB Withdrawal', date: '2026-05-16 06:19:03', status: 'approved', amount: '-41.00', account: 'IB Wallet 3016404' },
    { id: '868094', type: 'IB Withdrawal', date: '2026-06-04 09:47:31', status: 'approved', amount: '-300.00', account: 'IB Wallet 3016404' },
    { id: '914023', type: 'IB Withdrawal', date: '2026-06-23 09:33:08', status: 'approved', amount: '-150.00', account: 'IB Wallet 3016404' },
    { id: '951434', type: 'IB Withdrawal', date: '2026-07-08 14:37:50', status: 'approved', amount: '-78.00', account: 'IB Wallet 3016404' },
    { id: '958621', type: 'IB Withdrawal', date: '2026-07-11 04:50:57', status: 'approved', amount: '45.00', account: 'IB Wallet 3016404' },
    { id: '1014362', type: 'IB Withdrawal', date: '2026-08-04 12:03:07', status: 'approved', amount: '33.50', account: 'IB Wallet 3016404' },
    { id: '1027131', type: 'IB Withdrawal', date: '2026-08-07 16:25:45', status: 'approved', amount: '32.00', account: 'IB Wallet 3016404' },
    { id: '1036770', type: 'IB Withdrawal', date: '2026-08-12 10:10:59', status: 'approved', amount: '-255.00', account: 'IB Wallet 3016404' },
    { id: '1066152', type: 'IB Withdrawal', date: '2026-08-24 07:48:18', status: 'approved', amount: '-60.00', account: 'IB Wallet 3016404' },
    { id: '1087457', type: 'IB Withdrawal', date: '2026-09-01 14:14:49', status: 'approved', amount: '-36.00', account: 'IB Wallet 3016404' },
    { id: '1090677', type: 'IB Withdrawal', date: '2026-09-02 12:11:27', status: 'approved', amount: '-208.00', account: 'IB Wallet 3016404' },
    { id: '1118999', type: 'IB Withdrawal', date: '2026-09-11 19:15:44', status: 'approved', amount: '-70.00', account: 'IB Wallet 3016404' },
    { id: '1139459', type: 'IB Withdrawal', date: '2026-09-19 05:21:48', status: 'approved', amount: '-55.00', account: 'IB Wallet 3016404' },
    { id: '1151643', type: 'IB Withdrawal', date: '2026-09-24 06:47:45', status: 'approved', amount: '-21.50', account: 'IB Wallet 3016404' },
    { id: '1156080', type: 'IB Withdrawal', date: '2026-09-25 15:39:28', status: 'approved', amount: '-25.80', account: 'IB Wallet 3016404' },
    { id: '1177857', type: 'IB Withdrawal', date: '2026-10-03 05:02:18', status: 'approved', amount: '-148.50', account: 'IB Wallet 3016404' },
    { id: '1190064', type: 'IB Withdrawal', date: '2026-10-05 12:15:30', status: 'approved', amount: '200.00', account: 'IB Wallet 3016404' },
    { id: '1194930', type: 'IB Withdrawal', date: '2026-10-09 16:37:09', status: 'approved', amount: '-95.00', account: 'IB Wallet 3016404' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Breakdown Navigation Tabs */}
      <div className="flex border-b border-slate-200 mb-6 gap-2">
        <Link 
          to="/portal/ib/transactions" 
          className="px-4 py-2 text-xs font-semibold border-b-2 border-[#1e2b58] text-[#1e2b58] bg-white rounded-t"
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
          className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
        >
          Total Commission Breakdown
        </Link>
      </div>

      {/* Main Content Box */}
      <div className="bg-white border border-slate-200 rounded-md shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-800">IB Transactions</h2>
          <button className="flex items-center gap-1.5 bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1.5 text-xs font-medium rounded transition-colors">
            <Download size={13} /> Export to CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-700 font-bold">
              {/* Header Titles */}
              <tr>
                <th className="px-4 py-3">ID <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Type <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Date <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Status <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3 text-right">Amount <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
                <th className="px-4 py-3">Account <span className="text-[10px] text-slate-400 font-normal">↓↑</span></th>
              </tr>
              {/* Inline Column Filter Inputs */}
              <tr className="border-t border-slate-100 bg-white">
                <th className="px-4 py-2">
                  <input 
                    type="text" 
                    value={filterId}
                    onChange={(e) => setFilterId(e.target.value)}
                    className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" 
                  />
                </th>
                <th className="px-4 py-2">
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-36 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-slate-500 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">None selected</option>
                    <option value="IB Withdrawal">IB Withdrawal</option>
                  </select>
                </th>
                <th className="px-4 py-2">
                  <div className="relative w-36">
                    <input 
                      type="text" 
                      value={filterDate}
                      onChange={(e) => setFilterDate(e.target.value)}
                      className="w-full border border-slate-200 rounded px-2 py-1 pr-6 text-xs font-normal focus:outline-none focus:border-blue-500" 
                    />
                    <Calendar size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </th>
                <th className="px-4 py-2">
                  <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-28 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-slate-500 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">None selected</option>
                    <option value="approved">approved</option>
                    <option value="pending">pending</option>
                  </select>
                </th>
                <th className="px-4 py-2 text-right">
                  <input 
                    type="text" 
                    value={filterAmount}
                    onChange={(e) => setFilterAmount(e.target.value)}
                    className="w-24 border border-slate-200 rounded px-2 py-1 text-xs font-normal text-right focus:outline-none focus:border-blue-500 ml-auto" 
                  />
                </th>
                <th className="px-4 py-2">
                  <input 
                    type="text" 
                    value={filterAccount}
                    onChange={(e) => setFilterAccount(e.target.value)}
                    className="w-36 border border-slate-200 rounded px-2 py-1 text-xs font-normal focus:outline-none focus:border-blue-500" 
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                  <td className="px-4 py-2.5 font-medium text-slate-700">{item.id}</td>
                  <td className="px-4 py-2.5 text-slate-600">{item.type}</td>
                  <td className="px-4 py-2.5 text-slate-500">{item.date}</td>
                  <td className="px-4 py-2.5">
                    <span className="bg-emerald-500 text-white font-medium text-[10px] px-2 py-0.5 rounded-full inline-block">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right font-medium text-slate-800">{item.amount}</td>
                  <td className="px-4 py-2.5 text-blue-600 hover:underline cursor-pointer">{item.account}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 border border-slate-200 rounded text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
              « Previous
            </button>
            <button className="px-2.5 py-1 bg-blue-600 text-white rounded font-bold">1</button>
            <button className="px-2.5 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-700">2</button>
            <button className="px-2.5 py-1 border border-slate-200 rounded hover:bg-slate-50 text-slate-700">Next »</button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
