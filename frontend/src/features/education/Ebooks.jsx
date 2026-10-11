import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Info } from 'lucide-react';

export default function Ebooks() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const ebooks = [
    { title: 'Forex', type: 'line' },
    { title: 'Stocks', type: 'candlestick' },
    { title: 'Intro to Cryptocurrency', type: 'area' },
    { title: 'Trading Cryptocurrencies', type: 'donut' },
    { title: 'Trading Commodities', type: 'waves' },
    { title: 'CFDs', type: 'bar' },
    { title: 'Trading Psychology', type: 'gauge' },
    { title: 'Fundamental Analysis', type: 'wave-fill' },
    { title: 'Technical Analysis', type: 'bar-thin' },
    { title: 'Trading Strategies', type: 'line-dots' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'EDUCATION', href: '#' }, { label: 'e-Books' }]} />
      </div>
      
      <div className="bg-[#0f172a] min-h-[800px] p-8">
        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-sm animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-sm animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-slate-300 rounded-sm animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {ebooks.map((book, idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative h-[240px]">
              
              {/* Info Icon */}
              <div className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer z-10">
                <Info size={16} />
              </div>

              {/* Graphic Area (Mocked based on type) */}
              <div className="flex-1 flex items-center justify-center pt-6 px-6 relative overflow-hidden">
                {/* We'll use CSS shapes to roughly approximate the charts shown in screenshots */}
                {book.type === 'line' && (
                  <svg viewBox="0 0 100 50" className="w-full h-full stroke-current fill-none">
                    <polyline points="0,30 20,40 40,20 60,45 80,30 100,45" className="stroke-[#8cc63f]" strokeWidth="2"/>
                    <polyline points="0,20 20,30 40,10 60,35 80,20 100,35" className="stroke-slate-300" strokeWidth="2"/>
                  </svg>
                )}
                {book.type === 'candlestick' && (
                  <div className="flex items-end gap-1 h-20 w-full justify-center">
                    {[30,45,20,60,35,50,40,25,15,55,30].map((h, i) => (
                      <div key={i} className={`w-1.5 rounded-sm ${i%2===0 ? 'bg-[#8cc63f]' : 'bg-white'}`} style={{height: `${h}px`}}></div>
                    ))}
                  </div>
                )}
                {book.type === 'area' && (
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path d="M0,50 L0,30 Q20,30 40,20 T80,10 L100,10 L100,50 Z" className="fill-white/80"/>
                    <path d="M0,30 Q20,30 40,20 T80,10 L100,10" className="stroke-[#8cc63f] fill-none" strokeWidth="2"/>
                  </svg>
                )}
                {book.type === 'donut' && (
                  <div className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-[#8cc63f] border-r-[#8cc63f]"></div>
                )}
                {book.type === 'waves' && (
                  <svg viewBox="0 0 100 50" className="w-full h-full stroke-current fill-none">
                    <path d="M0,40 Q20,10 40,30 T80,20 T100,30" className="stroke-[#8cc63f]" strokeWidth="2"/>
                    <path d="M0,30 Q20,0 40,20 T80,10 T100,20" className="stroke-slate-300" strokeWidth="2"/>
                  </svg>
                )}
                {book.type === 'bar' && (
                  <div className="flex items-end gap-2 h-20 w-full justify-center">
                    {[20,30,60,40,30,40].map((h, i) => (
                      <div key={i} className={`w-4 ${i===2 ? 'bg-[#8cc63f]' : 'bg-slate-300'}`} style={{height: `${h}px`}}></div>
                    ))}
                  </div>
                )}
                {book.type === 'gauge' && (
                  <div className="w-20 h-10 rounded-t-full border-4 border-b-0 border-[#8cc63f] border-l-slate-700"></div>
                )}
                {book.type === 'wave-fill' && (
                  <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path d="M0,50 L0,20 Q25,30 50,15 T100,25 L100,50 Z" className="fill-[#8cc63f]/30"/>
                    <path d="M0,20 Q25,30 50,15 T100,25" className="stroke-[#8cc63f] fill-none" strokeWidth="2"/>
                  </svg>
                )}
                {book.type === 'bar-thin' && (
                  <div className="flex items-end gap-3 h-20 w-full justify-center">
                    {[40,20,30,50,45,60,55].map((h, i) => (
                      <div key={i} className={`w-1.5 ${i%2===0 ? 'bg-[#8cc63f]' : 'bg-slate-300'}`} style={{height: `${h}px`}}></div>
                    ))}
                  </div>
                )}
                {book.type === 'line-dots' && (
                  <div className="relative w-full h-20">
                    <svg viewBox="0 0 100 50" className="w-full h-full absolute inset-0">
                      <polyline points="10,40 30,30 50,20 70,35 90,25" className="stroke-[#8cc63f] fill-none" strokeWidth="2"/>
                    </svg>
                    <div className="flex items-end justify-between h-full px-[10%]">
                       {[30,40,50,40,50].map((h, i) => (
                         <div key={i} className="w-2 bg-slate-300 rounded-full" style={{height: `${h}px`}}></div>
                       ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-5 flex justify-between items-center relative z-20">
                <h3 className="text-white font-bold text-[14px] leading-tight max-w-[150px]">{book.title}</h3>
                <button className="bg-[#8cc63f] hover:bg-[#7ab133] text-black px-6 py-1.5 rounded-full text-[10px] font-bold tracking-wide transition-colors">
                  READ
                </button>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </PageShell>
  );
}
