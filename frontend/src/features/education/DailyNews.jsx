import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { PlayCircle } from 'lucide-react';

export default function DailyNews() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const videos = [
    { date: '09/10/2026', time: '00:02:18', active: true },
    { date: '08/10/2026', time: '00:02:30', active: false },
    { date: '07/10/2026', time: '00:02:18', active: false },
    { date: '06/10/2026', time: '00:02:22', active: false },
    { date: '05/10/2026', time: '00:02:27', active: false },
    { date: '02/10/2026', time: '00:02:20', active: false }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'EDUCATION', href: '#' }, { label: 'Daily News' }]} />
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
          <div className="max-w-[1000px] mx-auto">
            
            <h2 className="text-white text-3xl font-bold mb-6 border-l-2 border-white pl-4">
              09/10/2026
            </h2>

            {/* Video Player Container */}
            <div className="relative w-full aspect-video bg-[#1e293b] rounded-lg overflow-hidden border border-slate-800 shadow-xl mb-6">
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900/40 to-blue-900/80">
                 {/* Fake 3D blocks background */}
                 <div className="w-full h-full opacity-30 relative" style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
                 
                 <div className="absolute z-10 p-4 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
                    <PlayCircle size={32} className="text-white fill-current" />
                 </div>
               </div>
               
               {/* Player Controls */}
               <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/60 flex items-center px-4 gap-4 text-white z-20">
                 <button><PlayCircle size={16} className="fill-current"/></button>
                 <div className="flex-1 h-1 bg-white/30 rounded-full"></div>
                 <div className="text-[10px] font-mono">02:18</div>
                 <button>⚙</button>
                 <button>⛶</button>
               </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {videos.map((vid, idx) => (
                <div key={idx} className="shrink-0 flex flex-col items-center w-36">
                  <div className="w-full h-24 bg-[#1e293b] rounded-sm flex items-center justify-center border border-slate-700/50 hover:border-slate-400 cursor-pointer transition-colors mb-3">
                    <div className={`p-2 rounded-full ${vid.active ? 'bg-blue-600' : 'bg-[#8cc63f]'} text-white`}>
                      {vid.active ? <span className="font-bold text-[10px]">||</span> : <PlayCircle size={16} className="fill-current" />}
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-white text-center">
                    {vid.date} <span className="text-slate-500 font-normal ml-1">| {vid.time}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </PageShell>
  );
}
