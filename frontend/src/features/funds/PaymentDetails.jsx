import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { FilterableTable } from '../../components/ui/FilterableTable';
import { Trash2 } from 'lucide-react';

export default function PaymentDetails() {
  const [uploadType, setUploadType] = useState('Select');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Funds', href: '#' },
    { label: 'Payment Details' },
  ];

  const uploadOptions = [
    'Local INR Solutions',
    'Crypto Payment Solution',
    'Skrill',
    'Bankwire',
    'Credit Card'
  ];

  const detailsColumns = [
    { header: 'Title', accessorKey: 'title', filterType: 'none', sortable: true },
    { header: 'Details', accessorKey: 'details', filterType: 'none', sortable: true, className: 'max-w-[300px] truncate' },
    { 
      header: 'Status', 
      accessorKey: 'status', 
      filterType: 'none',
      sortable: true,
      cell: (row) => (
        <div className="flex flex-col items-start gap-1">
          <span className={`px-2 py-0.5 rounded-sm text-[11px] font-bold text-white uppercase ${row.status === 'approved' ? 'bg-[#10b981]' : row.status === 'declined' ? 'bg-[#ef4444]' : 'bg-slate-400'}`}>
            {row.status}
          </span>
          {row.message && (
            <span className="text-[10px] text-red-500 whitespace-normal leading-tight max-w-[200px]">
              {row.message}
            </span>
          )}
        </div>
      )
    },
  ];

  const detailsData = [
    { 
      title: 'Crypto Payment Solution', 
      details: '0x59Ba2E338c1a5eA43edF2e94Fa14855597B92560', 
      status: 'declined',
      message: 'Kindly provide a clear screenshot of the QR code/wallet page showing the selected network and currency clearly, whether it is USDT-BEP20 or USDC-BEP20. Please note that selecting the wrong network may lead to permanent loss of funds. Kindly confirm the',
      actions: [{ label: 'Delete', icon: <Trash2 size={12} />, onClick: () => {} }]
    },
    { 
      title: 'Crypto Payment Solution', 
      details: '0x0344aa63d1B3b85B745DF7c378B5d4d2e0F3e20d', 
      status: 'approved',
      actions: [{ label: 'Delete', icon: <Trash2 size={12} />, onClick: () => {} }]
    }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Upload Form */}
        <div className="lg:w-1/3">
          <div className="bg-white border border-slate-200 shadow-sm p-4 h-full">
            <h2 className="text-[13px] text-slate-600 mb-4">Upload Payment Details</h2>
            
            <div className="relative">
              <div className="flex border border-slate-300 min-h-[36px]">
                <div className="bg-slate-50 w-[120px] px-3 flex items-center border-r border-slate-300 text-[12px] text-slate-500">
                  I want to upload
                </div>
                <div 
                  className={`flex-1 px-3 py-2 text-[13px] font-medium cursor-pointer flex items-center justify-between ${uploadType === 'Select' ? 'bg-[#8cc63f] text-white' : 'bg-white text-slate-700'}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {uploadType}
                  <span className="text-[10px]">▼</span>
                </div>
              </div>

              {dropdownOpen && (
                <div className="absolute top-full left-[120px] right-0 bg-white border border-slate-300 border-t-0 shadow-md z-10">
                  <div className="p-2 border-b border-slate-100">
                    <input type="text" placeholder="Search..." className="w-full px-2 py-1 text-[12px] border border-slate-200 focus:outline-none" />
                  </div>
                  <div className="py-1">
                    <label className="flex items-center px-3 py-1.5 hover:bg-slate-50 cursor-pointer">
                      <input type="radio" name="uploadType" className="mr-2" checked={uploadType === 'Select'} onChange={() => { setUploadType('Select'); setDropdownOpen(false); }} />
                      <span className="text-[12px] text-slate-700">Select</span>
                    </label>
                    {uploadOptions.map((opt, idx) => (
                      <label key={idx} className="flex items-center px-3 py-1.5 hover:bg-slate-50 cursor-pointer">
                        <input type="radio" name="uploadType" className="mr-2" checked={uploadType === opt} onChange={() => { setUploadType(opt); setDropdownOpen(false); }} />
                        <span className="text-[12px] text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>

        {/* Right Column: Table */}
        <div className="lg:w-2/3">
          <FilterableTable 
            title="Payment Details"
            columns={detailsColumns}
            data={detailsData}
          />
        </div>

      </div>
    </PageShell>
  );
}
