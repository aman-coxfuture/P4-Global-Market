import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { FilterableTable } from '../../components/ui/FilterableTable';

export default function Messages() {
  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Profile', href: '/portal/profile' },
    { label: 'Messages' },
  ];

  const columns = [
    { header: 'From', accessorKey: 'from', filterType: 'text', sortable: true },
    { header: 'Subject', accessorKey: 'subject', filterType: 'text', sortable: true },
    { header: 'Date', accessorKey: 'date', filterType: 'text', sortable: true },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-white">
        <div className="flex justify-between items-center mb-2 px-1">
          <h2 className="text-base font-semibold text-slate-800">Records found: 0</h2>
          <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 text-[11px] font-medium rounded-sm">
            Export to CSV
          </button>
        </div>
        
        <FilterableTable 
          columns={columns}
          data={[]}
        />
      </div>
    </PageShell>
  );
}
