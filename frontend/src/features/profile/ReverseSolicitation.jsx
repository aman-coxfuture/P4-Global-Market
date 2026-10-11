import React from 'react';
import { PageShell } from '../../components/layout/PageShell';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';

export default function ReverseSolicitation() {
  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Profile', href: '/portal/profile' },
    { label: 'Reverse Solicitation Form' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="bg-white border border-slate-200 shadow-sm min-h-[500px]">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
          <h2 className="text-[13px] font-medium text-slate-700">Reverse Solicitation Form</h2>
          <span className="bg-[#10b981] text-white text-[11px] font-semibold px-2 py-0.5 rounded-sm">
            approved
          </span>
        </div>

        {/* Section title with background */}
        <div className="bg-slate-100/50 px-6 py-3 border-b border-slate-100">
          <h3 className="text-[13px] text-slate-700">Client Acknowledgement – Reverse Solicitation</h3>
        </div>

        {/* Content area */}
        <div className="p-6">
          <h4 className="text-[12px] font-bold text-slate-800 mb-4">
            Client Acknowledgement – Reverse Solicitation
          </h4>
          
          <div className="flex justify-between items-start">
            <div className="max-w-3xl pr-8">
              <p className="text-[12px] text-slate-700 leading-relaxed">
                By proceeding, you confirm that you have approached P4 Global Market of your own initiative, without any solicitation, marketing, or promotion directed at you by P4 Global Market or any of its representatives. You confirm that your decision to access our services is made independently, and you recognize that P4 Global Market operates under an offshore license and is not regulated by any local Regulator.
              </p>
            </div>
            <div className="w-[100px]">
              <span className="text-[12px] text-slate-700">Yes</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
