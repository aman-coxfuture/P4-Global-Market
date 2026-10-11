import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { FilterableTable } from '../../components/ui/FilterableTable';

export default function TransactionsHistory() {
  const [topTab, setTopTab] = useState('pending-transactions');
  const [bottomTab, setBottomTab] = useState('transactions-history');

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Funds', href: '#' },
    { label: 'Transactions History' },
  ];

  const pendingColumns = [
    { header: 'ID', accessorKey: 'id', filterType: 'text' },
    { header: 'Type', accessorKey: 'type', filterType: 'text' },
    { header: 'Status', accessorKey: 'status', filterType: 'select' },
    { header: 'Payment System', accessorKey: 'system', filterType: 'text' },
    { header: 'Account', accessorKey: 'account', filterType: 'text' },
    { header: 'Date', accessorKey: 'date', filterType: 'text' },
    { header: 'Amount', accessorKey: 'amount', filterType: 'text' },
  ];

  const historyColumns = [
    { header: 'Id', accessorKey: 'id', filterType: 'text' },
    { header: 'Type', accessorKey: 'type', filterType: 'select' },
    { 
      header: 'Status', 
      accessorKey: 'status', 
      filterType: 'select',
      cell: (row) => (
        <span className={`px-2 py-0.5 rounded-sm text-[11px] font-bold text-white uppercase ${row.status === 'approved' ? 'bg-[#10b981]' : row.status === 'declined' ? 'bg-[#ef4444]' : 'bg-slate-400'}`}>
          {row.status}
        </span>
      )
    },
    { 
      header: 'Payment System', 
      accessorKey: 'system', 
      filterType: 'text',
      cell: (row) => (
        <div className="flex items-center gap-2">
          {/* Mock logo box */}
          <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
          <span className="text-[12px]">{row.system}</span>
        </div>
      )
    },
    { 
      header: 'Account', 
      accessorKey: 'account', 
      filterType: 'text',
      cell: (row) => <a href="#" className="text-blue-500 hover:underline">{row.account}</a>
    },
    { header: 'Created At', accessorKey: 'createdAt', filterType: 'text' },
    { header: 'Amount', accessorKey: 'amount', filterType: 'text' },
    { header: 'Currency', accessorKey: 'currency', filterType: 'text' },
    { header: 'Decline Reason', accessorKey: 'reason', filterType: 'text' },
  ];

  const historyData = [
    { id: '1195930', type: 'IB Withdrawal', status: 'approved', system: 'LetKnow Crypto', account: 'IB Wallet 3016404', createdAt: '2026-10-10 08:27:47', amount: '-34.00', currency: 'USD', reason: '' },
    { id: '1194930', type: 'IB Withdrawal', status: 'approved', system: 'LetKnow Crypto', account: 'IB Wallet 3016404', createdAt: '2026-10-09 16:37:09', amount: '-95.00', currency: 'USD', reason: '' },
    { id: '1180864', type: 'IB Withdrawal', status: 'approved', system: 'LetKnow Crypto', account: 'IB Wallet 3016404', createdAt: '2026-10-05 12:15:30', amount: '-200.00', currency: 'USD', reason: '' },
    { id: '1180555', type: 'IB Payment', status: 'approved', system: '', account: 'IB Wallet 3016404', createdAt: '2026-10-05 10:37:44', amount: '200.00', currency: 'USD', reason: '' },
    { id: '1000898', type: 'Withdrawal', status: 'declined', system: 'Binancepay', account: 'Wallet Account 3016234', createdAt: '2026-07-29 16:05:36', amount: '-120.00', currency: 'USD', reason: 'Your withdrawal request was rejected...' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Top Section */}
      <div className="mb-6">
        <div className="flex border-b border-slate-200">
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${topTab === 'pending-transactions' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setTopTab('pending-transactions')}
          >
            Pending Transactions
          </button>
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${topTab === 'pending-transfers' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setTopTab('pending-transfers')}
          >
            Pending Transfers
          </button>
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${topTab === 'local-depositor-requests' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setTopTab('local-depositor-requests')}
          >
            Local Depositor Requests
          </button>
        </div>
        
        <div className="mt-4">
          <FilterableTable 
            title="Records found: 0"
            columns={pendingColumns}
            data={[]}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex border-b border-slate-200">
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${bottomTab === 'transactions-history' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setBottomTab('transactions-history')}
          >
            Transactions History
          </button>
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${bottomTab === 'transfers-history' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setBottomTab('transfers-history')}
          >
            Transfers History
          </button>
          <button 
            className={`px-4 py-2 text-[13px] font-medium border-b-2 ${bottomTab === 'local-depositor-history' ? 'border-[#1e2b58] text-[#1e2b58]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setBottomTab('local-depositor-history')}
          >
            Local Depositor History
          </button>
        </div>
        
        <div className="mt-4">
          {/* Header with Export Button */}
          <div className="flex justify-between items-center mb-2 px-1">
            <h2 className="text-base font-semibold text-slate-800">Records found: {historyData.length}</h2>
            <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 text-[11px] font-medium rounded-sm">
              Export to CSV
            </button>
          </div>
          
          <FilterableTable 
            columns={historyColumns}
            data={historyData}
          />
          
          {/* Pagination Mock */}
          <div className="flex items-center space-x-1 mt-4">
            <button className="px-3 py-1 border border-slate-300 text-slate-400 bg-slate-50 text-[12px]" disabled>« Previous</button>
            <button className="px-3 py-1 bg-[#1e2b58] text-white text-[12px]">1</button>
            <button className="px-3 py-1 border border-slate-300 text-slate-600 bg-white hover:bg-slate-50 text-[12px]">2</button>
            <button className="px-3 py-1 border border-slate-300 text-slate-600 bg-white hover:bg-slate-50 text-[12px]">3</button>
            <button className="px-3 py-1 border border-slate-300 text-slate-600 bg-white hover:bg-slate-50 text-[12px]">Next »</button>
          </div>
        </div>
      </div>
      
    </PageShell>
  );
}
