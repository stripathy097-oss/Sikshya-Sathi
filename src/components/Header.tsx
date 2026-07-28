import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  Search,
  Bell,
  Sun,
  Moon,
  Crown,
  GraduationCap,
  Flame,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    classLevel,
    setClassLevel,
    language,
    setLanguage,
    isDarkMode,
    setIsDarkMode,
    student,
    setIsSearchOpen,
    setIsNotificationsOpen,
    notifications,
    setIsRazorpayOpen,
  } = useApp();

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand & Class Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                  Sikshya Sathi
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  ଓଡ଼ିଶା
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                BSE Odisha • AI Study
              </p>
            </div>
          </div>

          {/* Class Toggle Pill */}
          <div className="hidden sm:flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium">
            <button
              onClick={() => setClassLevel('Class 9')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                classLevel === 'Class 9'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Class 9
            </button>
            <button
              onClick={() => setClassLevel('Class 10')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                classLevel === 'Class 10'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Class 10 (Matric)
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Class Switch Mobile dropdown */}
          <select
            value={classLevel}
            onChange={(e) => setClassLevel(e.target.value as any)}
            className="sm:hidden text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-0 rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-blue-500"
          >
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
          </select>

          {/* Streak Counter */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{student.streakDays}d</span>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'English' ? 'Odia' : 'English')}
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700"
            title="Switch Language Preference"
          >
            {language === 'English' ? '🇬🇧 ENG' : '🇮🇳 ଓଡ଼ିଆ'}
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search Notes & Question Bank"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notification Button */}
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Premium Membership Badge */}
          {student.isPremium ? (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-sm">
              <Crown className="w-3.5 h-3.5 fill-white" />
              PRO
            </span>
          ) : (
            <button
              onClick={() => setIsRazorpayOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all transform active:scale-95"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Go PRO</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
