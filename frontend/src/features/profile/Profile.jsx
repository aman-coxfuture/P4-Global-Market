import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Check } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export default function Profile() {
  const { user } = useAuthStore();
  const profile = user?.profile || {};

  const breadcrumbItems = [
    { label: 'Home', href: '/portal/loyalty' },
    { label: "Trader's Menu", href: '#' },
    { label: 'Profile', href: '/portal/profile' },
    { label: 'Profile' },
  ];

  const profileData = [
    { label: 'First Name:', value: profile.firstName || 'Mohender' },
    { label: 'Last Name:', value: profile.lastName || 'Singh' },
    { label: 'Client ID:', value: profile.clientId || '2575095' },
    { label: 'Date of birth:', value: '05-08-1991' },
    { label: 'Password:', value: '********', action: 'Change' },
    { label: 'Email:', value: user?.email || 'singhmohender23@gmail.com', action: 'Change' },
    { label: 'Mobile Number:', value: '+919017020999', action: 'Change' },
    { label: 'Communication Language:', value: 'English', action: 'Change' },
    { label: 'Country of Residence:', value: 'India' },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Profile Info */}
        <div className="lg:w-1/2">
          <div className="bg-white border border-slate-200 shadow-sm p-5 h-full">
            <h2 className="text-base text-slate-800 mb-6">Profile Information</h2>
            
            <div className="space-y-4">
              {profileData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start text-[12px]">
                  <div className="w-[180px] font-semibold text-slate-700">{item.label}</div>
                  <div className="flex-1 text-slate-600">{item.value}</div>
                  {item.action && (
                    <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 rounded-sm text-[10px] font-medium ml-2">
                      {item.action}
                    </button>
                  )}
                </div>
              ))}

              <div className="flex justify-between items-start text-[12px] pt-2">
                <div className="w-[180px] font-semibold text-slate-700">Notifications Preferences:</div>
                <div className="flex-1 text-slate-600 space-y-1">
                  {['Applications', 'Documents', 'Help Desk', 'IB: New Registrations', 'IB: Referral Deposited', 'IB: Referral Opened Live Account', 'Marketing', 'Payment Details', 'Transactions', 'Transfers'].map((pref, i) => (
                    <div key={i} className="flex items-center gap-1">
                      {pref} <Check size={12} className="text-green-500" />
                    </div>
                  ))}
                </div>
                <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 rounded-sm text-[10px] font-medium ml-2 mt-0.5">
                  Change
                </button>
              </div>

              <div className="flex justify-between items-center text-[12px] pt-2">
                <div className="w-[180px] font-semibold text-slate-700">SMS Notification:</div>
                <div className="flex-1 text-slate-600">Enabled</div>
                <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 rounded-sm text-[10px] font-medium ml-2">
                  Disable
                </button>
              </div>

              <div className="flex justify-between items-center text-[12px] pt-2">
                <div className="w-[180px] font-semibold text-slate-700">Two-factor authentication:</div>
                <div className="flex-1 text-slate-600">Disabled</div>
                <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-3 py-1 rounded-sm text-[10px] font-medium ml-2">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Verifications */}
        <div className="lg:w-1/2">
          <div className="bg-white border border-slate-200 shadow-sm p-6 h-full">
            <div className="inline-block bg-[#10b981] text-white px-3 py-1.5 rounded-sm font-semibold text-[13px] mb-6">
              Your profile is verified
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[12px] font-semibold text-slate-700">
                <span>Proof of ID approved</span>
                <span className="bg-[#10b981] text-white px-2 py-0.5 rounded-sm text-[10px]">Yes</span>
              </div>
              <div className="flex justify-between items-center text-[12px] font-semibold text-slate-700">
                <span>Proof of Address approved</span>
                <span className="bg-[#10b981] text-white px-2 py-0.5 rounded-sm text-[10px]">Yes</span>
              </div>
              <div className="flex justify-between items-center text-[12px] font-semibold text-slate-700">
                <span>Economic Profile Details approved</span>
                <span className="bg-[#10b981] text-white px-2 py-0.5 rounded-sm text-[10px]">Yes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageShell>
  );
}
