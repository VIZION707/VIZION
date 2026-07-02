import React, { useEffect } from 'react';
import { useAppStore } from '../store';
import { mockHadiths, collections, allTopics } from '../data';
import HadithCard from '../components/HadithCard';
import { RefreshCw } from 'lucide-react';

export default function Home() {
  const { dailyHadithId, setDailyHadith } = useAppStore();

  useEffect(() => {
    if (!dailyHadithId) {
      setDailyHadith();
    }
  }, [dailyHadithId, setDailyHadith]);

  const dailyHadith = mockHadiths.find(h => h.id === dailyHadithId) || mockHadiths[0];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 flex flex-col h-full animate-in fade-in duration-500">
      
      {/* Header Section */}
      <header className="flex justify-between items-center mb-4 md:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#c5a059] to-[#8e6e3d] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl text-[#031d16] font-serif">A</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight uppercase">Authentic Hadith</h1>
            <p className="text-[10px] text-[#c5a059] tracking-widest uppercase">The Living Legacy</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[#063025] px-4 py-2 rounded-full border border-[#c5a059]/30">
            <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#fdfcf0]">100,000+ Verified Records</span>
          </div>
        </div>
      </header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 flex-grow">
        
        {/* Daily Hadith (Big Card) */}
        <div className="md:col-span-8 md:row-span-4 bg-gradient-to-br from-[#063b2d] to-[#042217] rounded-[32px] p-6 md:p-8 border border-[#c5a059]/10 relative overflow-hidden flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="px-4 py-1 bg-[#c5a059] text-[#031d16] text-[10px] font-black uppercase rounded-full tracking-tighter">Daily Authentic Hadith</span>
            <button 
              onClick={() => setDailyHadith()}
              className="text-[#c5a059] text-xs font-mono uppercase flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <RefreshCw className="w-3 h-3" /> Refresh
            </button>
          </div>
          
          <div className="flex-grow z-10">
            <HadithCard hadith={dailyHadith} variant="bento" />
          </div>
          
          {/* Decorative Ornament */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 border-[12px] border-[#c5a059]/5 rounded-full rotate-45 pointer-events-none"></div>
        </div>

        {/* Collections Quick Access */}
        <div className="md:col-span-4 md:row-span-3 bg-[#063025] rounded-[24px] p-6 border border-[#c5a059]/10 flex flex-col">
          <h3 className="text-[10px] uppercase tracking-widest text-[#c5a059] mb-4 font-bold">Primary Collections</h3>
          <div className="space-y-3 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            {collections.slice(0, 4).map(c => (
              <div key={c.id} className="flex justify-between items-center p-3 bg-[#031d16] rounded-xl border border-[#c5a059]/5 group hover:border-[#c5a059]/40 cursor-pointer transition-colors">
                <span className="text-sm font-medium">{c.name}</span>
                <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">{c.count} Hadith</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="md:col-span-4 md:row-span-3 bg-[#063025] rounded-[24px] p-6 border border-[#c5a059]/10 flex flex-col">
          <h3 className="text-[10px] uppercase tracking-widest text-[#c5a059] mb-4 font-bold">Popular Topics</h3>
          <div className="flex flex-wrap gap-2">
            {allTopics.slice(0, 8).map((topic, i) => (
              <span key={topic} className={`px-3 py-1 rounded-full text-xs border transition-colors cursor-pointer ${i === 2 ? 'bg-[#c5a059]/20 border-[#c5a059]/50 text-[#c5a059] font-bold' : 'bg-[#031d16] border-[#c5a059]/20 hover:border-[#c5a059]/50'}`}>
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-4">
             <div className="p-3 bg-gradient-to-r from-[#c5a059]/20 to-transparent rounded-lg">
              <p className="text-[10px] font-bold uppercase tracking-tight text-[#c5a059]">AI Insight</p>
              <p className="text-[11px] opacity-70 italic mt-1 text-[#fdfcf0]">"Explore over 200 hadiths on Good Character today."</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
