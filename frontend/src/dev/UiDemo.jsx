import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { DataTable } from '../components/ui/DataTable';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Toast } from '../components/ui/Toast';
import { Skeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/ui/EmptyState';
import { PageHeader } from '../components/ui/PageHeader';
import { formatCurrency } from '../lib/utils';
import { ShieldCheck, SearchX } from 'lucide-react';

export default function UIDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const demoTabs = [
    { id: 'overview', label: 'Overview', content: <div className="p-4 text-slate-300">Overview content goes here.</div> },
    { id: 'store', label: 'Store', content: <div className="p-4 text-slate-300">Store items list...</div> },
    { id: 'quests', label: 'Quests', content: <div className="p-4 text-slate-300">Available quests...</div> },
  ];

  const tableColumns = [
    { header: 'Account', accessorKey: 'id' },
    { header: 'Type', accessorKey: 'type' },
    { header: 'Status', cell: (row) => <Badge variant={row.status === 'Active' ? 'success' : 'default'}>{row.status}</Badge> },
    { header: 'Balance', cell: (row) => formatCurrency(row.balanceMinor) }
  ];
  const tableData = [
    { id: 'MT5-90812', type: 'Live', status: 'Active', balanceMinor: 1250000 },
    { id: 'MT5-11234', type: 'Demo', status: 'Disabled', balanceMinor: 0 },
  ];

  return (
    <div className="min-h-screen bg-surface text-slate-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Client Portal UI Demo</h1>
          <p className="text-slate-400">Dark theme tokens, WCAG contrast compliant labels, and accessible inputs.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Button variant="primary">Primary (Lime)</Button>
            <Button variant="action">Action (Navy)</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" leftIcon={<ShieldCheck size={16} />}>With Icon</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Inputs & Forms (Dark Surface)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Input id="in1" label="Standard Input" placeholder="Enter text..." />
            <Input id="in2" label="Input with Helper" placeholder="Enter text..." helperText="Password must be at least 8 characters." />
            <Input id="in3" label="Error State" placeholder="Enter text..." error="This field is required." />
            <Input id="in4" label="Disabled" placeholder="Cannot type here..." disabled />
            <Select 
              id="sel1"
              label="Select Account" 
              options={[{label: 'Demo', value: 'demo'}, {label: 'Live', value: 'live'}]} 
              helperText="Choose your account type."
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Cards & Badges & Currency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Trading Account #12345</CardTitle>
                <Badge variant="success">Active</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-1">Balance</p>
                <p className="text-2xl font-bold text-white mb-6">{formatCurrency(500000)}</p>
                <Button variant="action" className="w-full">Deposit Funds</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Loyalty Status</CardTitle>
                <Badge variant="brand">VIP Experience</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-1">Available P4 Coins</p>
                <p className="text-2xl font-bold text-white mb-6">1,250</p>
                <Button variant="primary" className="w-full text-center">View Store</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Tabs (Keyboard Accessible)</h2>
          <div className="bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Tabs tabs={demoTabs} />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Data Table</h2>
          <DataTable columns={tableColumns} data={tableData} />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Modal (Focus Trap + Esc)</h2>
          <div className="bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Button variant="outline" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Transfer">
              <p className="mb-6">Are you sure you want to transfer {formatCurrency(25000)} to account MT5-90812?</p>
              <div className="flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
              </div>
            </Modal>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Page Header & Breadcrumbs</h2>
          <div className="bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Breadcrumbs items={[{label: 'Home', href: '/'}, {label: 'Trader\'s Menu', href: '/traders'}, {label: 'Loyalty Program'}]} />
            <div className="mt-4">
              <PageHeader 
                title="Loyalty Program" 
                description="Trade, earn P4 Coins, and redeem exclusive rewards."
                actions={<Button variant="primary">Join Now</Button>}
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Toast Notifications</h2>
          <div className="bg-surface-card p-6 rounded-md shadow-sm border border-slate-800 flex flex-col gap-4">
            <Toast title="Success" description="Funds deposited successfully." variant="success" />
            <Toast title="Connection Error" description="Could not connect to MT5 gateway." variant="error" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">Badges</h2>
          <div className="flex flex-wrap gap-4 items-center bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="brand">Brand</Badge>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">States (Loading & Empty)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-card p-6 rounded-md shadow-sm border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="w-1/3 h-4" />
                  <Skeleton className="w-1/4 h-3" />
                </div>
              </div>
              <Skeleton className="w-full h-24" />
            </div>
            <div>
              <EmptyState 
                icon={SearchX} 
                title="No Transactions" 
                description="You haven't made any deposits or withdrawals yet."
                action={<Button variant="action">Make a Deposit</Button>}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
