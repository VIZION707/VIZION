import React, { useState } from 'react';
import { allTopics, mockHadiths } from '../data';
import HadithCard from '../components/HadithCard';
import { ChevronLeft, BookOpen } from 'lucide-react';

export default function TopicsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  if (selectedTopic) {
    const topicHadiths = mockHadiths.filter(h => h.topics.includes(selectedTopic));
    return (
      <div className="pb-32 pt-8 px-4 md:px-8 max-w-4xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-300">
        <div className="flex items-center gap-4">
          <button onClick={() => setSelectedTopic(null)} className="p-3 bg-[#063025] border border-[#c5a059]/20 rounded-xl hover:border-[#c5a059]/50 text-[#fdfcf0] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#fdfcf0] uppercase tracking-tight">{selectedTopic}</h1>
            <p className="text-[10px] text-[#c5a059] tracking-widest uppercase mt-1">{topicHadiths.length} Records</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topicHadiths.map(h => <HadithCard key={h.id} hadith={h} />)}
          {topicHadiths.length === 0 && (
            <p className="text-[#fdfcf0]/50 col-span-full text-center py-20">No hadiths available for this topic yet.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-32 pt-8 px-4 md:px-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#063025] border border-[#c5a059]/20 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-[#c5a059]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#fdfcf0] uppercase tracking-tight">Browse Topics</h1>
          <p className="text-[10px] text-[#c5a059] tracking-widest uppercase mt-1">Thematic Collections</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allTopics.map(topic => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className="bg-[#063025] p-6 rounded-[24px] border border-[#c5a059]/10 text-left hover:border-[#c5a059]/40 hover:bg-[#063b2d] transition-all group flex flex-col justify-between h-32"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#c5a059] opacity-50 group-hover:opacity-100 transition-opacity">Topic</span>
            <span className="font-semibold text-lg text-[#fdfcf0]">{topic}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
