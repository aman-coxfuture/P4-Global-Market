import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function SocialTrading() {
  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'P4 Global Market Social Trading' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <h2 className="text-[14px] text-slate-900 font-bold mb-4">What is social trading?</h2>
        
        <p className="text-[13px] text-slate-900 mb-4 leading-relaxed font-medium">
          Social trading brings together aspiring traders and experienced traders so that they can learn and benefit from each other's trading activity.<br />
          Beginners have the chance to copy the trades of experienced traders which can be time-efficient and require less effort.<br />
          Experienced traders can also benefit from our new P4 Global Market social trading platform as they will have the chance to create a following and earn a fee for each profitable trade.
        </p>

        <div className="space-y-4 text-[13px] font-medium">
          <div>
            <span className="text-slate-900">Social Trading Portal: </span>
            <a href="#" className="text-blue-600 hover:underline">https://socialtrading.p4globalmarket.com/portal/login</a>
          </div>
          <div>
            <span className="text-slate-900">Provider: </span>
            <a href="#" className="text-blue-600 hover:underline">https://socialtrading.p4globalmarket.com/portal/registration/provider</a>
          </div>
          <div>
            <span className="text-slate-900">Follower: </span>
            <a href="#" className="text-blue-600 hover:underline">https://socialtrading.p4globalmarket.com/portal/registration/subscription</a>
          </div>
          <div>
            <span className="text-slate-900">Providers Rating & Statistics: </span>
            <a href="#" className="text-blue-600 hover:underline">https://socialtrading.ratings.p4globalmarket.com/widgets/ratings?widgetKey=social-ratings</a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
