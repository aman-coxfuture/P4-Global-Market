import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight } from 'lucide-react';

export function SidebarItem({ item }) {
  const location = useLocation();
  const { t } = useTranslation();
  
  const isActive = location.pathname === item.route || (item.subItems && item.subItems.some(sub => location.pathname === sub.route));
  const [isExpanded, setIsExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsExpanded(true);
  }, [isActive]);

  const fallbackLabel = (item.labelKey.includes('.') ? item.labelKey.split('.')[1] : item.labelKey).replace(/_/g, ' ');
  const label = t ? t(item.labelKey, fallbackLabel) : fallbackLabel;

  if (item.subItems) {
    const toggleExpanded = () => setIsExpanded((expanded) => !expanded);
    return (
      <li className="flex flex-col">
        <div
          className={`w-full flex items-center justify-between px-6 py-2.5 text-[13px] font-medium transition-colors border-l-4 ${
            isActive
              ? 'border-[#8cc63f] text-white bg-[#1a233a]/30'
              : 'border-transparent text-slate-300 hover:text-white hover:bg-[#1a233a]/50'
          }`}
        >
          {item.id === 'funds' ? (
            <button type="button" onClick={toggleExpanded} className="flex items-center gap-3 flex-1 text-left focus:outline-none">
              <item.icon size={16} className={isActive ? 'text-[#8cc63f]' : ''} />
              <span className="capitalize">{label}</span>
            </button>
          ) : (
            <Link
              to={item.route || '#'}
              onClick={() => { if (!isExpanded) setIsExpanded(true); }}
              className="flex items-center gap-3 flex-1 focus:outline-none"
            >
              <item.icon size={16} className={isActive ? 'text-[#8cc63f]' : ''} />
              <span className="capitalize">{label}</span>
            </Link>
          )}
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); toggleExpanded(); }}
            className="p-1 -mr-2 text-slate-400 hover:text-white focus:outline-none"
          >
            {isExpanded ? <ChevronDown size={14} className={isActive ? 'text-[#8cc63f]' : ''} /> : <ChevronRight size={14} />}
          </button>
        </div>
        {isExpanded && (
          <ul className="flex flex-col bg-[#080d1e] py-2 border-l-4 border-transparent">
            {item.subItems.map((sub, idx) => {
              const subIsActive = location.pathname === sub.route;
              const subFallback = (sub.labelKey.includes('.') ? sub.labelKey.split('.')[1] : sub.labelKey).replace(/_/g, ' ');
              const subLabel = t ? t(sub.labelKey, subFallback) : subFallback;
              return (
                <li key={idx}>
                  {sub.external ? (
                    <a
                      href={sub.route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-12 py-2 text-[12px] transition-colors focus-visible:outline-none ${
                        subIsActive
                          ? 'text-[#8cc63f] font-bold border-l-[3px] border-[#8cc63f] -ml-[3px]'
                          : 'text-slate-400 hover:text-white font-medium'
                      }`}
                    >
                      <span className="capitalize">{subLabel}</span>
                    </a>
                  ) : (
                    <Link
                      to={sub.route}
                      className={`flex items-center px-12 py-2 text-[12px] transition-colors focus-visible:outline-none ${
                        subIsActive
                          ? 'text-[#8cc63f] font-bold border-l-[3px] border-[#8cc63f] -ml-[3px]'
                          : 'text-slate-400 hover:text-white font-medium'
                      }`}
                    >
                      <span className="capitalize">{subLabel}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }

  if (item.external) {
    return (
      <li>
        <a
          href={item.route}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-6 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:bg-slate-800 border-l-4 border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/50`}
        >
          <item.icon size={18} />
          <span className="capitalize">{label}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.route}
        className={`flex items-center gap-3 px-6 py-2.5 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:bg-slate-800 border-l-4 ${
          isActive
            ? 'border-[#8cc63f] text-[#8cc63f] bg-[#1a233a]/30'
            : 'border-transparent text-slate-300 hover:text-white hover:bg-[#1a233a]/50'
        }`}
      >
        <item.icon size={16} />
        <span className="capitalize">{label}</span>
      </Link>
    </li>
  );
}
