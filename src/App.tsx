import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { LearnScreen } from './components/LearnScreen';
import { AIDoubtSolver } from './components/AIDoubtSolver';
import { TestScreen } from './components/TestScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { GrammarModule } from './components/GrammarModule';
import { FlashcardModule } from './components/FlashcardModule';
import { PDFLibrary } from './components/PDFLibrary';
import { AdminPanel } from './components/AdminPanel';
import { SearchModal } from './components/SearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { RazorpayModal } from './components/RazorpayModal';
import { AIPlannerModal } from './components/AIPlannerModal';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 pt-4">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'learn' && <LearnScreen />}
        {activeTab === 'ai' && <AIDoubtSolver />}
        {activeTab === 'tests' && <TestScreen />}
        {activeTab === 'profile' && <ProfileScreen />}
        {activeTab === 'grammar' && <GrammarModule />}
        {activeTab === 'flashcards' && <FlashcardModule />}
        {activeTab === 'pdf' && <PDFLibrary />}
        {activeTab === 'admin' && <AdminPanel />}
      </main>

      <SearchModal />
      <NotificationDrawer />
      <RazorpayModal />
      <AIPlannerModal />

      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
