import React from 'react';

export function DataTable({ columns, data, isLoading }) {
  if (isLoading) {
    return (
      <div className="w-full h-48 flex items-center justify-center border border-slate-800 rounded-sm bg-[#1F2937]/30">
        <span className="text-slate-500 animate-pulse">Loading data...</span>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full text-center py-12 border border-slate-800 rounded-sm bg-[#1F2937]/30 text-slate-500">
        No records found.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-slate-800 rounded-sm">
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-sm text-slate-200 bg-surface border-b border-slate-800">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-4 font-semibold">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rIdx) => (
            <tr key={rIdx} className="bg-surface-elevated border-b border-slate-800 hover:bg-[#374151] transition-colors">
              {columns.map((col, cIdx) => (
                <td key={cIdx} className="px-6 py-4">
                  {col.cell ? col.cell(row) : row[col.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
