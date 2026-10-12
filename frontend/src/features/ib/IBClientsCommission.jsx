import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { DownloadCloud, CalendarIcon } from 'lucide-react';

export default function IBClientsCommission() {
  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "IB Menu", href: '#' }, { label: "Reports", href: '#' }, { label: 'Clients Commission' }]} />
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded mb-6 p-4 flex gap-4">
        <div className="flex items-center">
          <span className="bg-slate-50 border border-slate-300 border-r-0 px-3 py-1.5 text-xs text-slate-500 rounded-l h-8">Interval</span>
          <div className="relative">
            <input type="text" value="2026-10-10" readOnly className="border border-slate-300 h-8 px-3 text-xs w-48 text-slate-700" />
            <CalendarIcon size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
        <div className="flex items-center">
          <span className="bg-slate-50 border border-slate-300 border-r-0 px-3 py-1.5 text-xs text-slate-500 rounded-l h-8">Common Currency</span>
          <select className="border border-slate-300 h-8 px-3 text-xs w-32 text-slate-700 rounded-r">
            <option>USD</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <button className="bg-[#1e2b58] text-white px-4 py-1.5 rounded text-xs">Submit</button>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-white text-slate-700">
              <tr>
                 <th className="px-4 py-4 text-slate-800">Records found: 0</th>
                 <th colSpan="11" className="px-4 py-4 text-right">
                    <button className="bg-[#1e2b58] text-white px-3 py-1 rounded flex items-center gap-2 text-[10px] ml-auto shadow hover:bg-[#152042]">
                      <DownloadCloud size={12} /> Export to CSV
                    </button>
                 </th>
              </tr>
              <tr className="border-y border-slate-200 bg-[#fcf8e3]">
                <th className="px-4 py-2 font-bold text-slate-800">Totals</th>
                <th className="px-4 py-2">
                   <button className="bg-[#1e2b58] text-white text-[10px] px-3 py-1 rounded shadow hover:bg-[#152042]">Calculate totals</button>
                </th>
                <th colSpan="10"></th>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">User ID <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Referral <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Level <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Reg. Date <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Country <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Deposits, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Withdrawals, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Balance, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Commission Received, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Commissioned Lots <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Referral IB Link <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600 whitespace-nowrap">Is Verified <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              </tr>
              {/* Filter Row */}
              <tr className="border-b border-slate-200 bg-white">
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2">
                    <div className="relative w-32">
                      <input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" />
                      <CalendarIcon size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                 </td>
                 <td className="px-4 py-2">
                    <select className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2">
                    <select className="w-24 border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="12" className="px-4 py-16 text-center text-slate-800 font-bold">
                  Nothing found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
