import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Plus, Edit2, Trash2, Link as LinkIcon, Eye } from 'lucide-react';

export default function IBLinks() {
  const links = [
    { id: 8952, name: 'VIP- 10', link: 'https://secure.m4marketscrm.com/links/go/8952', status: 'Active', clicks: 62, registrations: 16, visible: true },
    { id: 8327, name: '3rd', link: 'https://secure.m4marketscrm.com/links/go/8327', status: 'Active', clicks: 0, registrations: 0, visible: true },
    { id: 8326, name: '2nd', link: 'https://secure.m4marketscrm.com/links/go/8326', status: 'Active', clicks: 26, registrations: 10, visible: true },
    { id: 8325, name: '1st', link: 'https://secure.m4marketscrm.com/links/go/8325', status: 'Active', clicks: 3, registrations: 1, visible: true },
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "IB Menu", href: '#' }, { label: "Marketing Tools", href: '#' }, { label: 'Links' }]} />
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800">IB Links</h2>
          </div>
          <button className="bg-[#1e2b58] text-white px-4 py-1.5 rounded flex items-center gap-2 text-xs font-medium hover:bg-[#152042]">
            <Plus size={14} /> Add New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-white text-slate-700">
              <tr>
                 <th className="px-4 py-4 text-slate-800">Records found: 4</th>
                 <th colSpan="7"></th>
              </tr>
              <tr className="border-y border-slate-200 bg-[#fcf8e3]">
                <th className="px-4 py-2 font-bold text-slate-800">Totals</th>
                <th className="px-4 py-2">
                   <button className="bg-[#1e2b58] text-white text-[10px] px-3 py-1 rounded shadow hover:bg-[#152042]">Calculate totals</button>
                </th>
                <th colSpan="6"></th>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 font-medium text-slate-600">ID <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Name <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Link <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Status <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Clicks <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Registrations <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium text-slate-600">Visible <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
              {/* Filter Row */}
              <tr className="border-b border-slate-200 bg-white">
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2">
                    <select className="w-full border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2"><input type="text" className="w-full border border-slate-300 rounded px-2 py-1 text-xs" /></td>
                 <td className="px-4 py-2">
                    <select className="w-full border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2"></td>
              </tr>
            </thead>
            <tbody>
              {links.map((link) => (
                <tr key={link.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-600">{link.id}</td>
                  <td className="px-4 py-3 text-slate-600">{link.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                      {link.link} <LinkIcon size={12} className="text-slate-400" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-[#10b981] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">{link.status}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{link.clicks}</td>
                  <td className="px-4 py-3 text-slate-600">{link.registrations}</td>
                  <td className="px-4 py-3">
                    <span className="bg-[#10b981] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">Yes</span>
                  </td>
                  <td className="px-4 py-3 flex gap-1">
                    <button className="bg-[#1e2b58] text-white p-1 rounded flex items-center gap-1 text-[10px]"><Edit2 size={10} /> Edit</button>
                    <button className="bg-[#1e2b58] text-white p-1 rounded flex items-center gap-1 text-[10px]"><Trash2 size={10} /> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
