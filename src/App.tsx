import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AuthProvider, useAuth } from './context/AuthContext';
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
import { AdminLogin } from './components/AdminLogin';
import { SearchModal } from './components/SearchModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { RazorpayModal } from './components/RazorpayModal';
import { AIPlannerModal } from './components/AIPlannerModal';
import { Loader2 } from 'lucide-react';

/** Only reachable after a successful Firebase login (see server-side `requireAdmin` for the
 *  actual security check — this just decides what to render). */
const AdminGate: React.FC = () => {
  const { user, isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
      </div>
    );
  }

  return user ? <AdminPanel /> : <AdminLogin />;
};

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
        {activeTab === 'admin' && <AdminGate />}
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
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </AppProvider>
  );
}
