import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { PlayCircle, Download } from 'lucide-react';

export default function Podcasts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const episodes = [
    { date: '09.10.2026', time: '00:05:14' },
    { date: '08.10.2026', time: '00:05:57' },
    { date: '07.10.2026', time: '00:05:19' },
    { date: '06.10.2026', time: '00:05:58' },
    { date: '05.10.2026', time: '00:05:40' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'EDUCATION', href: '#' }, { label: 'Podcasts' }]} />
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
          <div className="max-w-[1000px] mx-auto bg-[#1e293b] rounded-md overflow-hidden shadow-lg border border-slate-800">
            <div className="p-10">
              <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-slate-400 text-lg">{'<'}</span> Deep Dive Podcast
              </h2>
              
              {/* Player UI */}
              <div className="bg-white rounded-md p-3 flex items-center gap-4 mb-8 text-slate-800">
                <button className="text-slate-600 hover:text-black">
                  <PlayCircle size={24} />
                </button>
                <div className="text-xs">▶▶</div>
                <div className="flex-1 h-1 bg-slate-200 rounded-full"></div>
                <div className="text-[10px] font-medium font-mono text-slate-500">00:00 / 05:14</div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>🔊</span>
                  <span>⚙</span>
                  <Download size={16} />
                </div>
              </div>

              {/* Description */}
              <div className="flex gap-6 mb-10">
                <div className="w-32 h-32 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                  <div className="text-[#8cc63f]">🎙️</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 italic mb-2">Guest: Jack and Jane</div>
                  <p className="text-[12px] text-slate-300 leading-relaxed">
                    Oracle fell 5.5% to $135.69 on Thursday, pressured by heavy selling despite strong revenue growth and concerns over high cloud infrastructure spending. Shanghai's stock index dropped 1% on Friday as investors monitored China-EU trade talks. Natural gas futures fell to $3.13 as higher domestic storage temporarily offset expectations of stronger heating demand and tight global supplies. The Australian dollar edged toward $0.70 as falling US Treasury yields weighed on the greenback. Bitcoin fell 2% to around $62,500 on Friday as surging US bond yields and oil prices triggered risk-off sentiment.
                  </p>
                </div>
              </div>

              {/* Episode List */}
              <div className="space-y-4">
                {episodes.map((ep, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[#8cc63f] text-[12px] font-mono border-b border-slate-700/50 pb-4">
                    <div className="flex items-center gap-3">
                      <PlayCircle size={16} />
                      {ep.date}
                    </div>
                    <div>{ep.time}</div>
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
