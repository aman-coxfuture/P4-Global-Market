import React, { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ms', label: 'Melayu', flag: '🇲🇾' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'zh-TW', label: '中文 (繁體)', flag: '🇹🇼' },
];

export function LanguageSwitcher({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors ${className}`}
      >
        <span className="text-base">{activeLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-slate-200 shadow-lg rounded-md py-2 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setActiveLang(lang);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-1.5 text-[11px] hover:bg-slate-50 text-slate-600 text-left transition-colors"
            >
              <span className="text-sm">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
