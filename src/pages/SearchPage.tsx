import React, { useState, useMemo } from 'react';
import { mockHadiths } from '../data';
import HadithCard from '../components/HadithCard';
import { Search as SearchIcon, Filter, Layers } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    return mockHadiths.filter(h => 
      h.english.toLowerCase().includes(q) ||
      h.arabic.includes(q) ||
      h.french.toLowerCase().includes(q) ||
      h.narrator.toLowerCase().includes(q) ||
      h.chapter.toLowerCase().includes(q) ||
      h.hadith_number.includes(q) ||
      h.keywords.some(k => k.toLowerCase().includes(q)) ||
      h.topics.some(t => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="pb-32 pt-8 px-4 md:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      
      {/* Search Header */}
      <div className="sticky top-0 z-10 pt-2 pb-6 bg-[#031d16]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Hadith #, Narrator, Topic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-16 bg-[#063025] border-2 border-[#c5a059]/20 rounded-2xl px-14 text-lg text-[#fdfcf0] placeholder-[#fdfcf0]/30 focus:outline-none focus:border-[#c5a059] transition-all shadow-inner"
          />
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#fdfcf0] opacity-50" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <button className="hidden sm:flex px-3 py-1.5 bg-[#031d16] border border-[#c5a059]/30 rounded-lg text-[10px] uppercase font-bold text-[#c5a059] hover:bg-[#c5a059] hover:text-[#031d16] items-center gap-1 transition-colors">
              <Filter className="w-3 h-3" /> Filter
            </button>
            <button className="hidden sm:flex px-3 py-1.5 bg-[#031d16] border border-[#c5a059]/30 rounded-lg text-[10px] uppercase font-bold text-[#c5a059] hover:bg-[#c5a059] hover:text-[#031d16] items-center gap-1 transition-colors">
              <Layers className="w-3 h-3" /> Collections
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {query.trim() && (
          <p className="text-[10px] text-[#c5a059] uppercase font-bold tracking-widest px-2">
            {results.length} {results.length === 1 ? 'Record' : 'Records'} found
          </p>
        )}

        {!query.trim() ? (
          <div className="text-center py-32 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#063025] border border-[#c5a059]/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <SearchIcon className="w-10 h-10 text-[#c5a059] opacity-50" />
            </div>
            <h3 className="text-xl text-[#fdfcf0] font-semibold tracking-tight uppercase">Search the Sunnah</h3>
            <p className="text-[#fdfcf0]/50 text-sm mt-2 max-w-md">Try searching for "Prayer", "Patience", "Abu Hurairah", or "34"</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map(h => <HadithCard key={h.id} hadith={h} />)}
          </div>
        ) : (
          <div className="text-center py-32 text-[#fdfcf0]/50">
            No authentic hadiths found for "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
