/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useAppStore } from './store';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import TopicsPage from './pages/TopicsPage';
import SavedPage from './pages/SavedPage';
import { Globe } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const { language, toggleLanguage } = useAppStore();

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#c5a059]/30 bg-[#031d16] text-[#fdfcf0]">
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 px-3 py-1.5 rounded-full bg-[#063025] border border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#031d16] shadow-sm transition-colors text-[10px] uppercase font-bold tracking-widest flex items-center gap-2"
        title="Toggle Language"
      >
        <Globe className="w-3 h-3" />
        {language === 'en' ? 'FR' : 'EN'}
      </button>

      <main className="min-h-screen pb-20">
        {currentTab === 'home' && <Home />}
        {currentTab === 'search' && <SearchPage />}
        {currentTab === 'topics' && <TopicsPage />}
        {currentTab === 'saved' && <SavedPage />}
      </main>

      <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}
