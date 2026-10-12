import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function EconomicProfile() {
  const profileDetails = [
    { question: 'What is your Employment status?', answer: 'Employed' },
    { question: 'What is your Employment Industry?', answer: 'Art, cultural artefacts and auctions' },
    { question: 'What is your Source of income/funds?', answer: 'Employment' },
    { question: 'What is your Estimated Annual Income (USD)?', answer: 'Less than $15,000' },
    { question: 'What is your Estimated Net Worth (USD)?', answer: 'Less than $15,000' },
    { question: 'Have you or an immediate family member, or a close associate been assigned with or held any important public or governmental function during the past 12 months?', answer: 'Yes' },
    { question: 'Do you have a Tax Identification Number (TIN) or equivalent number?', answer: 'No' },
    { question: 'Reason for missing TIN or equivalent number', answer: 'no' },
    { question: 'I hereby declare that I am not a U.S. citizen or tax resident.', answer: 'Yes' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'Profile', href: '/portal/profile' }, { label: 'Economic Profile Details' }]} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm pb-8">
        <div className="flex items-center px-5 py-4 border-b border-slate-100">
          <h2 className="text-[15px] text-slate-800 mr-3">Economic Profile Details</h2>
          <span className="bg-[#10b981] text-white px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase">approved</span>
        </div>

        <div className="mt-4 px-5">
          <div className="bg-slate-50/50 border border-slate-100 p-3 mb-6">
            <h3 className="text-[13px] font-medium text-slate-800">Economic Profile</h3>
          </div>
          
          <div className="space-y-6 max-w-[900px]">
            {profileDetails.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start gap-8">
                <p className="text-[12px] text-slate-700 flex-1">{item.question}</p>
                <div className="text-[12px] text-slate-800 w-[200px]">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
