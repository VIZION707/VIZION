import React from 'react';
import { Hadith } from '../types';
import { useAppStore } from '../store';
import { Bookmark, Share2, Copy, PlusCircle, MinusCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface HadithCardProps {
  key?: React.Key;
  hadith: Hadith;
  variant?: 'default' | 'bento';
}

export default function HadithCard({ hadith, variant = 'default' }: HadithCardProps) {
  const { favorites, toggleFavorite, textSize, increaseTextSize, decreaseTextSize, language } = useAppStore();
  const isFavorite = favorites.includes(hadith.id);

  const translation = language === 'fr' ? hadith.french : hadith.english;

  const handleCopy = () => {
    const textToCopy = `${hadith.arabic}\n\n${translation}\n\n${hadith.reference}`;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied to clipboard!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: hadith.reference,
        text: `"${translation}"\n\n- ${hadith.reference}`,
      }).catch(console.error);
    } else {
      handleCopy();
    }
  };

  if (variant === 'bento') {
    return (
      <div className="flex-grow flex flex-col gap-4">
        <p className="text-3xl leading-relaxed text-right font-arabic mb-4 italic opacity-90 text-[#fdfcf0]" dir="rtl" style={{ fontSize: `${textSize + 8}px` }}>
          {hadith.arabic}
        </p>
        <p className="text-xl font-light text-[#fdfcf0] border-l-2 border-[#c5a059] pl-6 py-1" style={{ fontSize: `${textSize}px` }}>
          <span className="font-semibold">{hadith.narrator} {language === 'fr' ? 'a rapporté:' : 'reported:'}</span> {translation}
        </p>
        <div className="mt-auto pt-6 flex justify-between items-center border-t border-[#c5a059]/10">
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => toggleFavorite(hadith.id)} className={cn("flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest hover:opacity-100 transition-opacity", isFavorite ? "text-[#c5a059] opacity-100" : "text-[#fdfcf0] opacity-60")}>
              <Bookmark className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} /> Save
            </button>
            <button onClick={handleCopy} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#fdfcf0] opacity-60 hover:opacity-100 transition-opacity">
              <Copy className="w-4 h-4" /> Copy
            </button>
            <button onClick={handleShare} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#fdfcf0] opacity-60 hover:opacity-100 transition-opacity">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-40 text-[#fdfcf0]">{hadith.reference}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#063025] rounded-[24px] p-6 border border-[#c5a059]/10 flex flex-col mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#c5a059]/10">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold">{hadith.collection}</span>
          <span className="text-sm text-[#fdfcf0] opacity-80">{hadith.book}</span>
        </div>
        <button onClick={() => toggleFavorite(hadith.id)} className="p-2 hover:bg-[#c5a059]/10 rounded-full transition-colors">
          <Bookmark className={cn("w-5 h-5", isFavorite ? "text-[#c5a059]" : "text-[#fdfcf0] opacity-40")} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col gap-4">
        <p className="text-2xl leading-relaxed text-right font-arabic italic opacity-90 text-[#fdfcf0]" dir="rtl" style={{ fontSize: `${textSize + 4}px` }}>
          {hadith.arabic}
        </p>
        <p className="text-lg font-light text-[#fdfcf0] border-l-2 border-[#c5a059] pl-4 py-1" style={{ fontSize: `${textSize}px` }}>
          <span className="font-semibold opacity-90">{hadith.narrator} {language === 'fr' ? 'a rapporté:' : 'reported:'}</span> <span className="opacity-80">{translation}</span>
        </p>
      </div>

      {/* Toolbar */}
      <div className="mt-4 pt-4 border-t border-[#c5a059]/10 flex justify-between items-center">
        <div className="flex space-x-2">
          <button onClick={handleCopy} className="p-2 hover:bg-[#c5a059]/10 rounded-full text-[#fdfcf0] opacity-60 hover:opacity-100 transition-colors" title="Copy">
            <Copy className="w-4 h-4" />
          </button>
          <button onClick={handleShare} className="p-2 hover:bg-[#c5a059]/10 rounded-full text-[#fdfcf0] opacity-60 hover:opacity-100 transition-colors" title="Share">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <span className={cn(
            "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border",
            hadith.grade === 'Sahih' ? "bg-[#c5a059]/10 border-[#c5a059]/30 text-[#c5a059]" : "bg-[#fdfcf0]/5 border-[#fdfcf0]/10 text-[#fdfcf0] opacity-70"
          )}>
            {hadith.grade}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest opacity-40 text-[#fdfcf0]">
            {hadith.reference}
          </span>
        </div>
      </div>
    </div>
  );
}
