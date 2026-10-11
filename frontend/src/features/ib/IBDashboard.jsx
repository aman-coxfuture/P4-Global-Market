import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Search, SlidersHorizontal, Download, ArrowLeftRight, ChevronDown, AlignJustify, X, Calendar, HelpCircle } from 'lucide-react';

export default function IBDashboard() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);
  const [interval, setIntervalVal] = useState('11.10.2026 - 11.10.2026');
  const [commonCurrency, setCommonCurrency] = useState('USD');
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [showOnlySubIds, setShowOnlySubIds] = useState(false);
  const [groupReferralsStats, setGroupReferralsStats] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandAll, setExpandAll] = useState(false);
  const [infiniteLoading, setInfiniteLoading] = useState(true);

  const tableData = [
    { 
      name: '(Yourself) Mohender Singh', 
      level: 'Me', 
      link: '2nd', 
      verified: true, 
      email: 'singhmohinder23@gmail.com', 
      phoneCountry: '+919017020989 India', 
      date: '2026-02-24 09:01:08',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.20',
      equity: '0.20',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Pooja Pooja', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: true, 
      email: 'pslarmannu@gmail.com', 
      phoneCountry: '+919604096063 India', 
      date: '2026-03-07 14:29:18',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '646.79',
      equity: '521.58',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Harsh Deep', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: true, 
      email: 'harshsodhi61@gmail.com', 
      phoneCountry: '+917097500444 India', 
      date: '2026-03-20 09:33:26',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.45',
      equity: '0.45',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Vikramjeet Vikramjeet', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: true, 
      email: 'sinwervicky93@gmail.com', 
      phoneCountry: '+917900080181 India', 
      date: '2026-03-26 08:08:42',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.00',
      equity: '0.00',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Vikram Jeet Vicky', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: false, 
      email: 'vikramjeetsinwervikramsinwer@gmail.com', 
      phoneCountry: '+918744829739 India', 
      date: '2026-03-26 12:11:04',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.00',
      equity: '0.00',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Jasdeep Singh', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: true, 
      email: 'js6542620@gmail.com', 
      phoneCountry: '+917404919082 India', 
      date: '2026-03-30 07:16:35',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.25',
      equity: '0.25',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Rahul Sardana', 
      level: 'Direct', 
      link: 'VIP - 10', 
      verified: true, 
      email: 'rahulsardana786@gmail.com', 
      phoneCountry: '+917206334505 India', 
      date: '2026-03-31 17:58:30',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.00',
      equity: '0.00',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    },
    { 
      name: 'Bindu Rani', 
      level: 'Direct', 
      link: '2nd', 
      verified: false, 
      email: 'bbindurani631@gmail.com', 
      phoneCountry: '+919306462611 India', 
      date: '2026-04-01 12:02:46',
      deposits: '0.00',
      withdrawals: '0.00',
      commission: '0.00',
      lots: '0.00',
      balance: '0.00',
      equity: '0.00',
      totalTradedLots: '0.00',
      credit: '0.00',
      plClosed: '0.00'
    }
  ];

  const filteredData = tableData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "IB Menu", href: '#' }, { label: 'Dashboard' }]} />
      </div>

      {/* Top Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5 col-span-2 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-slate-800"># 3016404</span>
              <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded border border-slate-200">IB Wallet</span>
            </div>
            <div className="text-2xl font-bold text-slate-800">
              0.96 <span className="text-lg text-slate-500 font-normal">USD</span>
            </div>
          </div>
          <div className="flex gap-2 text-sm">
            <Link 
              to="/portal/funds/withdraw"
              className="flex items-center gap-2 px-4 py-1.5 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-slate-700 font-medium"
            >
              <Download size={14} className="text-slate-500" /> Withdraw
            </Link>
            <Link 
              to="/portal/funds/transfer"
              className="flex items-center gap-2 px-4 py-1.5 border border-slate-300 rounded hover:bg-slate-50 transition-colors text-slate-700 font-medium"
            >
              <ArrowLeftRight size={14} className="text-slate-500" /> Transfer
            </Link>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5 flex items-center justify-center relative cursor-pointer" onClick={() => setIsBreakdownOpen(!isBreakdownOpen)}>
          <button 
            type="button"
            className="flex items-center gap-2 text-slate-700 hover:text-black font-medium text-sm focus:outline-none cursor-pointer"
          >
            <PieChartIcon /> Breakdown <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isBreakdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isBreakdownOpen && (
            <div 
              className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded-b-md shadow-lg z-30 py-1 text-xs animate-in fade-in zoom-in duration-100"
              onClick={(e) => e.stopPropagation()}
            >
              <Link 
                to="/portal/ib/transactions" 
                onClick={() => setIsBreakdownOpen(false)}
                className="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors border-b border-slate-100/60"
              >
                IB transactions
              </Link>
              <Link 
                to="/portal/ib/detailed-breakdown" 
                onClick={() => setIsBreakdownOpen(false)}
                className="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors border-b border-slate-100/60"
              >
                Detailed breakdown
              </Link>
              <Link 
                to="/portal/ib/total-breakdown" 
                onClick={() => setIsBreakdownOpen(false)}
                className="block px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors"
              >
                Total breakdown
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5">
          <div className="text-xs text-slate-400 mb-2">Direct referrals</div>
          <div className="text-2xl font-bold text-slate-800">26</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5">
          <div className="text-xs text-slate-400 mb-2">Total referrals</div>
          <div className="text-2xl font-bold text-slate-800">37</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5">
          <div className="text-xs text-slate-400 mb-2">Total sub-IBs</div>
          <div className="text-2xl font-bold text-slate-800">4</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-5">
          <div className="text-xs text-slate-400 mb-2">FTD (for all referrals)</div>
          <div className="text-2xl font-bold text-slate-800">20 <span className="text-sm font-normal text-slate-500">(54%)</span></div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6 text-sm">
        <div className="flex items-center gap-4">
          <div>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-slate-300 rounded px-3 py-1.5 pl-8 text-xs focus:outline-none focus:border-blue-500 w-52 bg-white" 
              />
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Referral name</div>
          </div>
          
          <button 
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center gap-2 border border-slate-300 rounded px-3 py-1.5 h-8 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium cursor-pointer"
          >
            <SlidersHorizontal size={14} /> Filters <span className="bg-[#8cc63f] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-xs">For detailed reports</span>
          <button className="flex items-center gap-2 border border-slate-300 rounded px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium">
            <AlignJustify size={14} /> Table view
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4 text-xs">
        <div className="text-slate-500">Statistics for <span className="font-semibold text-slate-800">{interval}</span></div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            <ChevronDown size={14} className={expandAll ? 'rotate-180 transition-transform' : 'transition-transform'} /> 
            Expand all levels
          </button>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setInfiniteLoading(!infiniteLoading)}
              className={`w-8 h-4 rounded-full relative transition-colors ${infiniteLoading ? 'bg-blue-600' : 'bg-slate-300'}`}
            >
              <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${infiniteLoading ? 'right-0.5' : 'left-0.5'}`}></div>
            </button>
            <span className="text-slate-600">Infinite loading <span title="Loads all records automatically without pagination" className="cursor-help text-slate-400">❔</span></span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded shadow-sm overflow-x-auto">
        <table className="w-full text-[11px] text-left whitespace-nowrap">
          <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-700 font-bold">
            <tr>
              <th className="px-4 py-3 border-r border-slate-100">Records found: 38</th>
              <th className="px-4 py-3">Link <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3">Is Verified <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3">Email <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3">Phone / Country <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3">Created At <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Deposits, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Withdrawals, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Commission, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Lots <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Balance, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Equity, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Total Traded Lots <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">Credit, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-right">P/L Closed, USD <span className="text-[10px] text-slate-400 ml-1">↓↑</span></th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Total Row */}
            <tr className="border-b border-slate-200 font-bold bg-slate-50/40 text-slate-800">
              <td className="px-4 py-3 font-bold">Total</td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3"></td>
              <td className="px-4 py-3 text-right">0.00</td>
              <td className="px-4 py-3 text-right">0.00</td>
              <td className="px-4 py-3 text-right">0.00</td>
              <td className="px-4 py-3 text-right">0.00000000</td>
              <td className="px-4 py-3 text-right">14658.77</td>
              <td className="px-4 py-3 text-right">13458.67</td>
              <td className="px-4 py-3 text-right">0.00000000</td>
              <td className="px-4 py-3 text-right">0.00</td>
              <td className="px-4 py-3 text-right">0.00</td>
              <td className="px-4 py-3"></td>
            </tr>

            {/* Individual Data Rows */}
            {filteredData.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-2.5">
                  <div className="font-medium text-slate-800">{row.name}</div>
                  <div className="text-[9px] text-slate-400 font-normal">{row.level}</div>
                </td>
                <td className="px-4 py-2.5 text-slate-700">{row.link}</td>
                <td className="px-4 py-2.5 text-slate-700">
                  {row.verified ? (
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">Yes</span>
                  ) : (
                    <span className="text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">No</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-slate-700">{row.email}</td>
                <td className="px-4 py-2.5 text-slate-700">{row.phoneCountry}</td>
                <td className="px-4 py-2.5 text-slate-600">{row.date}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.deposits}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.withdrawals}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.commission}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.lots}</td>
                <td className="px-4 py-2.5 text-right font-medium text-slate-800">{row.balance}</td>
                <td className="px-4 py-2.5 text-right font-medium text-slate-800">{row.equity}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.totalTradedLots}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.credit}</td>
                <td className="px-4 py-2.5 text-right text-slate-700">{row.plClosed}</td>
                <td className="px-4 py-2.5 text-center">
                  <button className="px-2.5 py-1 text-[10px] font-medium border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition-colors">
                    Accounts
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Filters Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 overflow-y-auto">
          <div className="bg-white rounded-md shadow-2xl w-full max-w-md max-h-[88vh] flex flex-col my-auto overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center px-6 py-3.5 border-b border-slate-100 shrink-0">
              <h3 className="text-base font-semibold text-slate-800">Filters</h3>
              <button onClick={() => setIsFilterModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              {/* Interval */}
              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Interval</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={interval} 
                    onChange={(e) => setIntervalVal(e.target.value)}
                    className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-700 pr-10 focus:outline-none focus:border-blue-500" 
                  />
                  <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Common Currency */}
              <div className="relative">
                <label className="block text-xs text-slate-500 mb-1.5 font-medium">Common currency</label>
                <button 
                  type="button"
                  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-700 flex justify-between items-center bg-white focus:outline-none focus:border-blue-500"
                >
                  <span>{commonCurrency}</span>
                  <ChevronDown size={14} className="text-slate-400" />
                </button>
                {isCurrencyDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-lg z-20 py-1 text-xs">
                    {['USD', 'EUR', 'JPY', 'KRW', 'USC'].map((cur) => (
                      <div 
                        key={cur}
                        onClick={() => { setCommonCurrency(cur); setIsCurrencyDropdownOpen(false); }}
                        className="px-4 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-2 text-slate-700"
                      >
                        {commonCurrency === cur && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                        <span className={commonCurrency === cur ? 'font-bold' : ''}>{cur}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showOnlySubIds} 
                    onChange={(e) => setShowOnlySubIds(e.target.checked)} 
                    className="rounded border-slate-300 text-blue-600 focus:ring-0" 
                  />
                  <span>Show only Sub-IDs</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={groupReferralsStats} 
                    onChange={(e) => setGroupReferralsStats(e.target.checked)} 
                    className="rounded border-slate-300 text-blue-600 focus:ring-0" 
                  />
                  <span className="flex items-center gap-1">
                    Group referrals stats <HelpCircle size={12} className="text-slate-400" />
                  </span>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex justify-between items-center shrink-0">
              <button 
                onClick={() => { setCommonCurrency('USD'); setShowOnlySubIds(false); setGroupReferralsStats(false); }}
                className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded bg-white transition-colors"
              >
                Reset to default
              </button>
              <button 
                onClick={() => setIsFilterModalOpen(false)}
                className="px-6 py-1.5 text-xs font-semibold text-white bg-[#28a745] hover:bg-[#218838] rounded shadow-sm transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}

function PieChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  );
}
