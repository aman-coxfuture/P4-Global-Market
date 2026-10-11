import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-[12px] text-slate-700 mb-1.5">{label}</label>
      <div 
        className="w-full px-3 py-2 text-[13px] border border-[#1e2b58] bg-[#1e2b58] text-white rounded-sm cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <span className="text-[10px]">▼</span>
      </div>

      {isOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-white border border-slate-300 shadow-md z-10 max-h-[300px] flex flex-col">
          <div className="p-2 border-b border-slate-100">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-2 py-1 text-[12px] border border-slate-200 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="py-1 overflow-y-auto">
            <label className="flex items-center px-3 py-1.5 hover:bg-slate-50 cursor-pointer">
              <input 
                type="radio" 
                name={`select-${label}`} 
                className="mr-2" 
                checked={value === 'None selected'} 
                onChange={() => { onChange('None selected'); setIsOpen(false); setSearch(''); }} 
              />
              <span className="text-[12px] text-slate-700">None selected</span>
            </label>
            {filteredOptions.map((opt, idx) => (
              <label key={idx} className="flex items-center px-3 py-1.5 hover:bg-slate-50 cursor-pointer">
                <input 
                  type="radio" 
                  name={`select-${label}`} 
                  className="mr-2" 
                  checked={value === opt} 
                  onChange={() => { onChange(opt); setIsOpen(false); setSearch(''); }} 
                />
                <span className="text-[12px] text-slate-700">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function TradingCalculator() {
  const [instrument, setInstrument] = useState('None selected');
  const [leverage, setLeverage] = useState('None selected');
  const [currency, setCurrency] = useState('None selected');

  const instrumentsList = ['EURUSD', 'GBPUSD', 'XAUUSD', 'USDJPY', 'USDCAD'];
  const leverageList = ['1:1000', '1:500', '1:400', '1:300', '1:200', '1:100', '1:50', '1:33', '1:10', '1:5', '1:2'];
  const currencyList = ['USD', 'EUR', 'JPY', 'KRW', 'USC'];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'Trading Calculator' }]} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-[14px] text-slate-700">Trading Calculator</h2>
        </div>
        
        <div className="p-8">
          <p className="text-[12px] text-slate-700 mb-6 max-w-[800px]">
            The trader's calculator is useful for novices and seasoned traders alike as it allows you to calculate all the important parameters of your trade
          </p>

          <div className="max-w-[800px] flex gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              <div>
                <label className="block text-[12px] text-slate-700 mb-1.5">Volume (Lots)</label>
                <input 
                  type="number" 
                  defaultValue="0.00"
                  className="w-full px-3 py-2 text-[13px] border border-slate-300 rounded-sm focus:outline-none focus:border-blue-400"
                />
              </div>
              
              <CustomSelect 
                label="Instruments" 
                options={instrumentsList} 
                value={instrument} 
                onChange={setInstrument} 
              />
              
              <div className="pt-2">
                <button className="w-full bg-[#1e2b58] hover:bg-[#152042] text-white py-2.5 rounded-sm text-[13px] font-medium transition-colors">
                  Calculate
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-5">
              
              <CustomSelect 
                label="Leverage" 
                options={leverageList} 
                value={leverage} 
                onChange={setLeverage} 
              />
              
              <CustomSelect 
                label="Account currency" 
                options={currencyList} 
                value={currency} 
                onChange={setCurrency} 
              />

            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
