import React from 'react';
import { useAppStore } from '../store';
import { mockHadiths } from '../data';
import HadithCard from '../components/HadithCard';
import { Bookmark } from 'lucide-react';

export default function SavedPage() {
  const { favorites } = useAppStore();
  const savedHadiths = mockHadiths.filter(h => favorites.includes(h.id));

  return (
    <div className="pb-32 pt-8 px-4 md:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#063025] border border-[#c5a059]/20 rounded-xl flex items-center justify-center">
          <Bookmark className="w-6 h-6 text-[#c5a059]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#fdfcf0] uppercase tracking-tight">Saved Records</h1>
          <p className="text-[10px] text-[#c5a059] tracking-widest uppercase mt-1">{savedHadiths.length} Bookmarked</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {savedHadiths.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedHadiths.map(h => <HadithCard key={h.id} hadith={h} />)}
          </div>
        ) : (
          <div className="text-center py-32 flex flex-col items-center">
            <div className="w-24 h-24 bg-[#063025] border border-[#c5a059]/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Bookmark className="w-10 h-10 text-[#c5a059] opacity-50" />
            </div>
            <h3 className="text-xl text-[#fdfcf0] font-semibold tracking-tight uppercase">No saved hadiths</h3>
            <p className="text-[#fdfcf0]/50 text-sm mt-2 max-w-md">Bookmark authentic narrations to study them later</p>
          </div>
        )}
      </div>
    </div>
  );
}
