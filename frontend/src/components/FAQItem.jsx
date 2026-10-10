import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#00C853] transition-colors cursor-pointer"
      >
        <span className="text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00C853]' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
          {answer}
        </div>
      )}
    </div>
  );
}
