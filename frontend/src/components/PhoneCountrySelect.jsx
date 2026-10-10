import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X, Check } from 'lucide-react';
import { countries } from '../data/countries';

export default function PhoneCountrySelect({
  countryCode,
  onCountryCodeChange,
  phone,
  onPhoneChange,
  phoneRegisterProps = {},
  error
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Find currently selected country by code or default to India / UK
  const currentCountry =
    countries.find((c) => c.dialCode === countryCode) ||
    countries.find((c) => c.code === 'IN') ||
    countries[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    } else if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredCountries = countries.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex gap-2 relative w-full items-start" ref={dropdownRef}>
      {/* Left side: Country Code Trigger Button */}
      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`h-11 sm:h-12 px-3 py-2.5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 cursor-pointer ${
            isOpen ? 'border-slate-800 ring-1 ring-slate-800' : ''
          }`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="text-lg leading-none" role="img" aria-label={currentCountry.name}>
            {currentCountry.flag}
          </span>
          <span className="font-semibold text-slate-800 text-xs sm:text-sm">
            {countryCode || currentCountry.dialCode}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu (Image 2 style) */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-1.5 w-72 sm:w-84 md:w-96 max-w-[calc(100vw-2.5rem)] bg-white rounded-md shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {/* Search box at top */}
            <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country"
                className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Scrollable list of ALL countries (max-height: 300px) */}
            <ul
              className="max-h-[300px] overflow-y-auto py-1 divide-y divide-slate-50 focus:outline-none"
              role="listbox"
            >
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => {
                  const isSelected = (countryCode || currentCountry.dialCode) === c.dialCode && currentCountry.code === c.code;
                  return (
                    <li
                      key={`${c.code}-${c.dialCode}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        onCountryCodeChange(c.dialCode);
                        setIsOpen(false);
                      }}
                      className={`px-3.5 py-2.5 flex items-center justify-between text-sm cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-blue-50 text-[#1a237e] font-semibold'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <span className="text-base shrink-0" role="img" aria-label={c.name}>
                          {c.flag}
                        </span>
                        <span className="font-semibold truncate text-slate-800 text-xs sm:text-sm">
                          {c.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="font-semibold text-slate-500 text-xs sm:text-sm">
                          {c.dialCode}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#1a237e] shrink-0" />}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="px-4 py-6 text-center text-xs text-slate-400 font-medium">
                  No countries found matching "{searchQuery}"
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Right side: Phone number input field (flex-1) */}
      <div className="flex-1">
        <input
          type="tel"
          placeholder="Mobile phone number"
          {...phoneRegisterProps}
          value={phone !== undefined ? phone : undefined}
          onChange={onPhoneChange || phoneRegisterProps.onChange}
          className={`w-full h-11 sm:h-12 px-4 py-2.5 rounded-md border text-sm font-semibold bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-1 transition-all ${
            error
              ? 'border-rose-400 focus:ring-rose-200'
              : 'border-slate-300 focus:border-slate-800 focus:ring-slate-800'
          }`}
        />
      </div>
    </div>
  );
}
