import React from 'react';
import { Home, Search, BookOpen, Bookmark, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function BottomNav({ currentTab, setCurrentTab }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Library' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'random', icon: Sparkles, label: 'Random', isFab: true },
    { id: 'topics', icon: BookOpen, label: 'Topics' },
    { id: 'saved', icon: Bookmark, label: 'Saves' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#031d16] border-t border-[#c5a059]/10 pb-safe z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-2 relative">
        {navItems.map((item) => {
          if (item.isFab) {
            return (
              <button
                key={item.id}
                onClick={() => {
                   // This could trigger random hadith action
                   setCurrentTab('home');
                }}
                className="w-16 h-16 bg-gradient-to-t from-[#c5a059] to-[#ebd5a1] rounded-full -mt-10 flex items-center justify-center shadow-[0_10px_40px_rgba(197,160,89,0.4)] border-4 border-[#031d16] text-[#031d16] hover:scale-105 transition-transform"
              >
                <item.icon className="w-8 h-8" strokeWidth={2} />
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-all",
                currentTab === item.id 
                  ? "text-[#c5a059] opacity-100" 
                  : "text-[#fdfcf0] opacity-40 hover:opacity-100"
              )}
            >
              <item.icon className="w-6 h-6 mb-1" strokeWidth={currentTab === item.id ? 2.5 : 2} />
              <span className="text-[9px] uppercase font-black tracking-widest">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
