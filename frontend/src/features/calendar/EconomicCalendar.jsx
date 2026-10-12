import React, { useEffect, useRef } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';

export default function EconomicCalendar() {
  const container = useRef();

  useEffect(() => {
    // Clean up any existing script to avoid duplicates on re-render
    container.current.innerHTML = '';
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "importanceFilter": "-1,0,1",
        "currencyFilter": "USD,EUR,ITL,NZD,CHF,AUD,FRF,JPY,ZAR,TRL,CAD,BAM,DEM,MXN,ESP,GBP"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'Economic Calendar' }]} />
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm p-4 h-[800px]">
        <div className="tradingview-widget-container w-full h-full" ref={container}>
          <div className="tradingview-widget-container__widget w-full h-full"></div>
        </div>
      </div>
    </PageShell>
  );
}
