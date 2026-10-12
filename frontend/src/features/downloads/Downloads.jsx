import React from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Download as DownloadIcon, Eye } from 'lucide-react';

export default function Downloads() {
  const downloadItems = [
    { title: 'P4 Global Market Mobile App (Android)', img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg', action: 'Download' },
    { title: 'MT5 Windows', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5.png', action: 'Download' },
    { title: 'MT5 Android', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5_android.png', action: 'Download' },
    { title: 'MT5 Android (China)', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5_android.png', action: 'Download' },
    { title: 'MT5 Mac OS', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5_mac.png', action: 'Download' },
    { title: 'MT5 Web Trader', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5.png', action: 'View' },
    { title: 'MT4 Web Trader', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4.png', action: 'View' },
    { title: 'MT5 IOS', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5_ios.png', action: 'Download' },
    { title: 'MT4 Windows', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4.png', action: 'Download' },
    { title: 'MT4 Android', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4_android.png', action: 'Download' },
    { title: 'MT4 Android (China)', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4_android.png', action: 'Download' },
    { title: 'MT4 IOS', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4_ios.png', action: 'Download' },
    { title: 'MT4 Mac OS', img: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4_mac.png', action: 'Download' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'Downloads' }]} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {downloadItems.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 shadow-sm flex flex-col items-center">
            <div className="w-full text-center py-3 border-b border-slate-100 bg-slate-50/30">
              <h3 className="text-[14px] text-slate-700 font-medium">{item.title}</h3>
            </div>
            <div className="py-8 flex flex-col items-center justify-center min-h-[160px]">
              <img src={item.img} alt={item.title} className="h-16 object-contain mb-6 drop-shadow-sm" />
              
              <button className="bg-[#1e2b58] hover:bg-[#152042] text-white px-8 py-1.5 rounded-sm text-[12px] font-medium transition-colors flex items-center gap-2">
                {item.action === 'Download' ? <DownloadIcon size={14} /> : <Eye size={14} />}
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
