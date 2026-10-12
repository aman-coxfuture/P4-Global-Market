import React from 'react';
import { ArrowDown } from 'lucide-react';

export function FilterableTable({ title, columns, data }) {
  return (
    <div className="mb-8 bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
      {title && (
        <div className="px-4 py-3 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-800">{title}</h2>
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-[13px] text-left text-slate-700 whitespace-nowrap">
          <thead>
            {/* Headers Row */}
            <tr className="border-b border-slate-100">
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-2.5 font-semibold">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-900 transition-colors">
                    {col.header}
                    {col.sortable !== false && <ArrowDown size={12} className="text-slate-400" />}
                  </div>
                </th>
              ))}
              <th className="px-4 py-2.5"></th> {/* Actions column */}
            </tr>
            {/* Filter Row */}
            <tr className="border-b border-slate-200 bg-slate-50/50">
              {columns.map((col, idx) => (
                <th key={`filter-${idx}`} className="px-4 py-2 font-normal">
                  {col.filterType === 'select' ? (
                    <select className="w-full border border-slate-200 rounded-sm px-2 py-1.5 text-xs text-slate-600 focus:outline-none focus:border-slate-400 appearance-none bg-white">
                      <option>None selected</option>
                      {/* You could populate this based on col.filterOptions if needed */}
                    </select>
                  ) : col.filterType !== 'none' ? (
                    <input 
                      type="text" 
                      className="w-full border border-slate-200 rounded-sm px-2 py-1.5 text-xs focus:outline-none focus:border-slate-400"
                    />
                  ) : null}
                </th>
              ))}
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-slate-500">
                  No records found.
                </td>
              </tr>
            ) : (
              data.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  {columns.map((col, cIdx) => (
                    <td key={cIdx} className={`px-4 py-3 ${col.className || ''}`}>
                      {col.cell ? col.cell(row) : row[col.accessorKey]}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1.5">
                      {row.actions && row.actions.map((action, aIdx) => (
                        <button 
                          key={aIdx} 
                          onClick={() => action.onClick(row)}
                          className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-sm text-white bg-[#1e2b58] hover:bg-[#152042] transition-colors"
                        >
                          {action.icon}
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
