import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs';
import { PageShell } from '../../components/layout/PageShell';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function Glossary() {
  const [loading, setLoading] = useState(true);
  const [activeLetter, setActiveLetter] = useState('A');
  const [expandedItem, setExpandedItem] = useState('Address');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const glossaryItems = [
    { term: 'Address', definition: 'An address is a unique string of characters that identifies the specific location of a crypto token on a blockchain. Crypto addresses may have more than 30 characters. The address is the place where the crypto token\'s ownership data and its transaction-related data are recorded. It also identifies the place where crypto tokens are sent, received, and stored.' },
    { term: 'ADI', definition: 'Average Directional Index (ADI) is a technical indicator used to determine the strength of a trend.' },
    { term: 'Altcoin', definition: 'An altcoin is any cryptocurrency other than Bitcoin.' },
    { term: 'Algorithmic Stablecoin', definition: 'A type of stablecoin that uses algorithms to control its supply and maintain its peg.' },
    { term: 'Anonymous Trading', definition: 'Trading where the identities of the parties involved are not disclosed.' },
    { term: 'Appreciation', definition: 'An increase in the value of an asset over time.' },
    { term: 'Arbitrage', definition: 'The simultaneous purchase and sale of an asset to profit from an imbalance in the price.' },
    { term: 'Ask Rate', definition: 'The price a seller is willing to accept for a security.' },
    { term: 'Asset', definition: 'A resource with economic value that an individual, corporation, or country owns.' },
    { term: 'Asset Allocation', definition: 'An investment strategy that aims to balance risk and reward.' },
    { term: 'At the Money', definition: 'A situation where an option\'s strike price is identical to the price of the underlying security.' },
    { term: 'Attorney in charge', definition: 'The primary lawyer responsible for handling a specific legal matter.' },
    { term: 'Authorized Dealer', definition: 'A person or organization authorized to deal in foreign exchange.' },
    { term: 'Aussie', definition: 'A slang term for the Australian Dollar (AUD).' },
    { term: 'Away from the market', definition: 'An order where the limit price is not immediately available.' }
  ];

  return (
    <PageShell>
      <div className="mb-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/portal/loyalty' }, { label: "Trader's Menu", href: '#' }, { label: 'EDUCATION', href: '#' }, { label: 'Glossary' }]} />
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
          <div className="max-w-[800px] mx-auto">
            
            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[400px]">
                <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Alphabet Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-[500px] mx-auto">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  className={`w-7 h-7 rounded-sm flex items-center justify-center text-sm font-bold transition-colors ${
                    activeLetter === letter 
                      ? 'bg-[#8cc63f] text-black' 
                      : 'bg-white text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Glossary List */}
            <div className="space-y-4">
              {glossaryItems.map((item, idx) => {
                const isExpanded = expandedItem === item.term;
                
                return (
                  <div 
                    key={idx} 
                    className={`rounded-md cursor-pointer transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#1e293b] p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
                        : 'bg-[#1e293b]/70 p-4 hover:bg-[#1e293b]'
                    }`}
                    onClick={() => setExpandedItem(isExpanded ? null : item.term)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className={`font-bold text-white ${isExpanded ? 'text-lg mb-4' : 'text-sm'}`}>
                        {item.term}
                      </h3>
                      <div className="bg-[#8cc63f] rounded-full p-0.5 text-black">
                        {isExpanded ? <ChevronDown size={14} strokeWidth={3} /> : <ChevronUp size={14} strokeWidth={3} />}
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className="text-[12px] text-slate-300 leading-relaxed pr-8">
                        {item.definition}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        )}
      </div>
    </PageShell>
  );
}

