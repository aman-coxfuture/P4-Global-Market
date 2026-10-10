import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X, Check } from 'lucide-react';
import { countries } from '../data/countries';

export default function CountrySelect({ value, onChange, placeholder = 'Country of Residence', error }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

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

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCountry = countries.find((c) => c.name === value);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-md bg-[#1a237e] text-white font-semibold text-base transition-all duration-150 shadow-sm hover:bg-[#151c65] focus:outline-none focus:ring-2 focus:ring-[#1a237e]/50 cursor-pointer ${
          error ? 'ring-2 ring-rose-400' : ''
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`truncate text-left ${value ? 'text-white' : 'text-slate-300'}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 ml-2 text-white shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-md shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {/* Search Box */}
          <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country..."
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

          {/* Countries List */}
          <ul
            className="max-h-64 overflow-y-auto py-1 divide-y divide-slate-50 focus:outline-none"
            role="listbox"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => {
                const isSelected = value === c.name;
                return (
                  <li
                    key={c.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(c.name);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2.5 flex items-center justify-between text-sm cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-blue-50 text-[#1a237e] font-semibold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span className="font-semibold">{c.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#1a237e] shrink-0 ml-2" />}
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
  );
}
