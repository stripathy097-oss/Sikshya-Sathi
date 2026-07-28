import React from 'react';
import { useApp, ActiveTab } from '../context/AppContext';
import {
  Home,
  BookOpen,
  Sparkles,
  ClipboardCheck,
  User,
  FileText,
  Bookmark,
  Shield,
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const navItems: { id: ActiveTab; labelEnglish: string; labelOdia: string; icon: React.ReactNode }[] = [
    { id: 'home', labelEnglish: 'Home', labelOdia: 'ମୁଖ୍ୟ ପୃଷ୍ଠା', icon: <Home className="w-5 h-5" /> },
    { id: 'learn', labelEnglish: 'Learn', labelOdia: 'ପାଠ୍ୟକ୍ରମ', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'ai', labelEnglish: 'AI Doubt', labelOdia: 'AI ସହାୟକ', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'tests', labelEnglish: 'Tests', labelOdia: 'ପରୀକ୍ଷା', icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: 'profile', labelEnglish: 'Profile', labelOdia: 'ପ୍ରୋଫାଇଲ୍', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1.5 px-3 transition-colors shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shadow-sm'
                    : ''
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[11px] leading-tight">
                {item.labelEnglish}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
