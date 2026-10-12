import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { FilterableTable } from '../../components/ui/FilterableTable';
import { Eye, Wallet } from 'lucide-react';

export default function AccountsOverview() {
  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Accounts', href: '/portal/accounts' },
    { label: 'Accounts Overview' },
  ];

  const walletColumns = [
    { header: 'Account Type', accessorKey: 'accountType', filterType: 'select' },
    { header: 'Wallet Number', accessorKey: 'walletNumber', filterType: 'text' },
    { header: 'Currency', accessorKey: 'currency', filterType: 'text' },
    { header: 'Balance', accessorKey: 'balance', filterType: 'text' },
  ];

  const walletData = [
    {
      accountType: 'Wallet Account',
      walletNumber: '3016234',
      currency: 'USD',
      balance: '0.20',
      actions: [
        { label: 'Deposit', icon: <Wallet size={12} />, onClick: () => {} }
      ]
    }
  ];

  const liveColumns = [
    { header: 'Account Type', accessorKey: 'accountType', filterType: 'select' },
    { header: 'Trading Platform Login', accessorKey: 'login', filterType: 'text', className: 'text-blue-500' },
    { header: 'Leverage', accessorKey: 'leverage', filterType: 'text' },
    { header: 'Currency', accessorKey: 'currency', filterType: 'text' },
    { header: 'Balance', accessorKey: 'balance', filterType: 'text' },
    { header: 'Credit', accessorKey: 'credit', filterType: 'text' },
    { header: 'Equity', accessorKey: 'equity', filterType: 'text' },
    { header: 'Margin', accessorKey: 'margin', filterType: 'text' },
  ];

  const liveData = [
    {
      accountType: 'MT5 Standard',
      login: '3589975',
      leverage: '1:1000',
      currency: 'USD',
      balance: '0.00',
      credit: '0.00',
      equity: '0.00',
      margin: '0.00',
      actions: [
        { label: 'View', icon: <Eye size={12} />, onClick: () => {} },
        { label: 'Deposit', icon: <Wallet size={12} />, onClick: () => {} }
      ]
    },
    {
      accountType: 'MT5 Standard',
      login: '3590111',
      leverage: '1:500',
      currency: 'USD',
      balance: '0.00',
      credit: '0.00',
      equity: '0.00',
      margin: '0.00',
      actions: [
        { label: 'View', icon: <Eye size={12} />, onClick: () => {} },
        { label: 'Deposit', icon: <Wallet size={12} />, onClick: () => {} }
      ]
    },
    {
      accountType: 'MT5 Bonus Raw Spread',
      login: '3591524',
      leverage: '1:500',
      currency: 'USD',
      balance: '0.00',
      credit: '0.00',
      equity: '0.00',
      margin: '0.00',
      actions: [
        { label: 'View', icon: <Eye size={12} />, onClick: () => {} },
        { label: 'Deposit', icon: <Wallet size={12} />, onClick: () => {} }
      ]
    },
    {
      accountType: 'MT5 Standard',
      login: '3602135',
      leverage: '1:1000',
      currency: 'USD',
      balance: '0.00',
      credit: '0.00',
      equity: '0.00',
      margin: '0.00',
      actions: [
        { label: 'View', icon: <Eye size={12} />, onClick: () => {} },
        { label: 'Deposit', icon: <Wallet size={12} />, onClick: () => {} }
      ]
    }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <FilterableTable 
        title="Wallet Accounts" 
        columns={walletColumns} 
        data={walletData} 
      />
      
      <FilterableTable 
        title="Live Accounts" 
        columns={liveColumns} 
        data={liveData} 
      />

    </PageShell>
  );
}
