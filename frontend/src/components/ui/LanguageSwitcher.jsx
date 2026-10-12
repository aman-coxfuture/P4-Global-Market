import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' }
];

export function LanguageSwitcher({ className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation();
  const activeLanguage = LANGUAGES.find(({ code }) => code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        aria-label={t('language.select')}
        aria-expanded={isOpen}
      >
        <Globe size={15} />
        <span>{activeLanguage.code.toUpperCase()}</span>
        <ChevronDown size={13} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-slate-200 shadow-lg rounded-md py-2 z-50">
          {LANGUAGES.map((language) => (
            <button
              type="button"
              key={language.code}
              onClick={() => selectLanguage(language.code)}
              className={`w-full px-4 py-2 text-xs text-left transition-colors hover:bg-slate-50 ${i18n.language === language.code ? 'font-bold text-blue-700' : 'text-slate-600'}`}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
