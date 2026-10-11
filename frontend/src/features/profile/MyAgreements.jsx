import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { FileText } from 'lucide-react';

export default function MyAgreements() {
  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Profile', href: '/portal/profile' },
    { label: 'My Agreements' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm pb-8">
        
        {/* Accepted Documents Section */}
        <div className="border-b border-slate-200">
          <div className="px-5 py-3 bg-slate-50/50 border-b border-slate-100">
            <h2 className="text-[14px] font-medium text-slate-800">Accepted Documents</h2>
          </div>
          <div className="p-5">
            <a href="#" className="flex items-center text-[13px] text-blue-500 hover:underline">
              <FileText size={16} className="mr-2" />
              Credit Bonus- Terms & Conditions v1
            </a>
          </div>
        </div>

        {/* Company Documents Section */}
        <div>
          <div className="px-5 py-3 bg-slate-50/50 border-b border-slate-100">
            <h2 className="text-[14px] font-medium text-slate-800">Company Documents</h2>
          </div>
          <div className="p-5 space-y-3">
            <a href="#" className="flex items-center text-[13px] text-blue-500 hover:underline">
              <FileText size={16} className="mr-2" />
              Client Services Agreement
            </a>
            <a href="#" className="flex items-center text-[13px] text-blue-500 hover:underline">
              <FileText size={16} className="mr-2" />
              Privacy and Confidentiality Policy
            </a>
          </div>
        </div>

      </div>
    </PageShell>
  );
}
