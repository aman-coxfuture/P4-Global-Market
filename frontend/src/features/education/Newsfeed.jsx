import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Star } from 'lucide-react';

export default function Newsfeed() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const newsItems = [
    {
      date: '11/10/2026',
      title: 'Rwanda Inflation Hits Over 3-Year High',
      desc: 'Rwanda annual inflation rate accelerated for the fourth straight month to 20.4% in September 2026 from 15.9% in August, marking the highest recorded level since 2023. This jump was largely driven by rising costs for food and non-alcoholic beverages.',
      rating: 2
    },
    {
      date: '11/10/2026',
      title: 'Egypt Inflation Rate at 7-Month Low of 13.9%',
      desc: 'Egypt annual urban consumer inflation eased to a seven-month low of 13.9% in September 2026 from 14.6% in August. Price pressures eased primarily for food & non-alcoholic beverages (14.2% vs 15.4%).',
      rating: 3
    },
    {
      date: '11/10/2026',
      title: 'Ibovespa Hits Record High on Election Polls',
      desc: 'The Ibovespa rose 1.8% to close at a record 125,000 on Monday as election polls showing business-friendly candidate Jair Bolsonaro maintaining his lead boosted market sentiment.',
      rating: 2
    },
    {
      date: '10/10/2026',
      title: 'TSX Gains on BoC Rate-Hold Bets',
      desc: 'The S&P/TSX Composite Index rose 1.2% to close at 21,500 on Friday as weaker employment data bolstered expectations that the Bank of Canada will hold interest rates steady.',
      rating: 2
    },
    {
      date: '10/10/2026',
      title: 'The Dow Jones Index Closes 0.83% Higher',
      desc: 'The Dow Jones Industrial Average rose 288 points or 0.83% to end at 34,800 on Thursday, tracking a rebound in global equities.',
      rating: 1
    }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'EDUCATION', href: '#' }, { label: 'Newsfeed' }]} />
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
          <div className="max-w-[1200px] mx-auto flex gap-8">
            
            {/* Main News List */}
            <div className="flex-1 space-y-4">
              {newsItems.map((item, idx) => (
                <div key={idx} className="bg-[#1e293b] rounded-lg p-6 border border-slate-700/50 hover:border-slate-500 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#8cc63f] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">
                      {item.date}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400">
                      <div className="flex text-slate-500">
                        <Star size={12} className={item.rating >= 1 ? 'fill-current text-white' : ''} />
                        <Star size={12} className={item.rating >= 2 ? 'fill-current text-white' : ''} />
                        <Star size={12} className={item.rating >= 3 ? 'fill-current text-white' : ''} />
                      </div>
                      <span className="text-[10px]">Read time 2 min</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              ))}
              
              <div className="flex justify-center gap-2 pt-6">
                 <button className="w-6 h-6 bg-[#8cc63f] text-black rounded-sm flex items-center justify-center text-xs font-bold">1</button>
                 <button className="w-6 h-6 text-slate-400 hover:text-white rounded-sm flex items-center justify-center text-xs">2</button>
                 <button className="w-6 h-6 text-slate-400 hover:text-white rounded-sm flex items-center justify-center text-xs">3</button>
                 <span className="text-slate-500 mx-1">...</span>
                 <button className="text-slate-400 hover:text-white text-xs pl-2">Next &gt;</button>
              </div>
            </div>

            {/* Sidebar Headlines */}
            <div className="w-[300px] hidden lg:block space-y-6">
              <h3 className="text-white font-bold border-b-2 border-[#8cc63f] pb-2 inline-block">Headlines</h3>
              <div className="space-y-4">
                {newsItems.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-700 pb-3">
                    <div className="text-[10px] text-slate-500 mb-1">{item.date} UTC</div>
                    <a href="#" className="text-[12px] text-white hover:text-[#8cc63f] font-medium leading-tight">
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </PageShell>
  );
}
