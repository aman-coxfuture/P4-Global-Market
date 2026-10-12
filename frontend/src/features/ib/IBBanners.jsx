import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { DownloadCloud } from 'lucide-react';

export default function IBBanners() {
  const banners = [
    { id: 1, size: '300x600', lang: 'Vietnamese', campaign: 'Cent Account', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=600&fit=crop' },
    { id: 2, size: '1200x1200', lang: 'Vietnamese', campaign: 'Cent Account', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop' },
    { id: 3, size: '1200x628', lang: 'Vietnamese', campaign: 'Cent Account', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop' },
    { id: 4, size: '200x200', lang: 'Vietnamese', campaign: 'Cent Account', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=200&fit=crop' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "IB Menu", href: '#' }, { label: "Marketing Tools", href: '#' }, { label: 'Banners' }]} />
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
              <tr>
                 <th className="px-4 py-2 border-r border-slate-200">Records found: 2718</th>
                 <th colSpan="4" className="px-4 py-2 text-right">
                    <button className="bg-[#1e2b58] text-white px-3 py-1 rounded flex items-center gap-2 text-[10px] ml-auto">
                      <DownloadCloud size={12} /> Export to CSV
                    </button>
                 </th>
              </tr>
              <tr>
                <th className="px-4 py-3 font-medium">Preview</th>
                <th className="px-4 py-3 font-medium">Size <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium">Language <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium">Campaign <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
                <th className="px-4 py-3 font-medium">Code</th>
              </tr>
              {/* Filter Row */}
              <tr className="border-b border-slate-200 bg-white">
                 <td className="px-4 py-2"></td>
                 <td className="px-4 py-2">
                    <select className="w-full border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2">
                    <select className="w-full border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2">
                    <select className="w-full border border-slate-300 rounded px-2 py-1 text-xs text-slate-500">
                      <option>None selected</option>
                    </select>
                 </td>
                 <td className="px-4 py-2"></td>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner) => (
                <tr key={banner.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="w-32 h-auto rounded border border-slate-200 overflow-hidden bg-slate-100">
                      <img src={banner.img} alt="Banner" className="w-full h-auto object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{banner.size}</td>
                  <td className="px-4 py-3 text-slate-600">{banner.lang}</td>
                  <td className="px-4 py-3 text-slate-600">{banner.campaign}</td>
                  <td className="px-4 py-3">
                    <button className="bg-[#1e2b58] text-white px-3 py-1.5 rounded flex items-center gap-2 text-[10px]">
                      <DownloadCloud size={12} /> View code
                    </button>
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
