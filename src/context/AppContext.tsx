import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ClassLevel,
  LanguagePref,
  StudentProfile,
  NotificationItem,
  TestResult,
  SubjectId,
  Chapter,
} from '../types';
import { NOTIFICATIONS_DATA, CHAPTERS_DATA } from '../data/odishaData';
import { submitLeaderboardEntry } from '../services/aiService';

export type ActiveTab = 'home' | 'learn' | 'ai' | 'tests' | 'profile' | 'grammar' | 'pdf' | 'admin' | 'flashcards';

interface AppContextType {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  
  classLevel: ClassLevel;
  setClassLevel: (level: ClassLevel) => void;
  
  language: LanguagePref;
  setLanguage: (lang: LanguagePref) => void;
  
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  
  student: StudentProfile;
  updateStudentProfile: (updates: Partial<StudentProfile>) => void;
  toggleBookmark: (id: string) => void;
  
  selectedSubjectId: SubjectId | null;
  setSelectedSubjectId: (subj: SubjectId | null) => void;
  
  selectedChapter: Chapter | null;
  setSelectedChapter: (chapter: Chapter | null) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  isNotificationsOpen: boolean;
  setIsNotificationsOpen: (open: boolean) => void;
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;

  isRazorpayOpen: boolean;
  setIsRazorpayOpen: (open: boolean) => void;
  upgradeToPremium: () => void;

  isPlannerOpen: boolean;
  setIsPlannerOpen: (open: boolean) => void;

  testHistory: TestResult[];
  addTestResult: (result: TestResult) => void;

  speakText: (text: string, lang?: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DEFAULT_STUDENT: StudentProfile = {
  name: 'Student',
  mobile: '',
  email: '',
  classLevel: 'Class 10',
  school: '',
  district: '',
  language: 'English',
  isPremium: false,
  streakDays: 0,
  lastActiveDate: new Date().toISOString(),
  points: 0,
  savedBookmarks: [],
  downloadedPdfs: [],
};

const loadStudentFromStorage = (): StudentProfile => {
  try {
    const raw = localStorage.getItem('sikshyaSathi_student');
    if (raw) return { ...DEFAULT_STUDENT, ...JSON.parse(raw) };
  } catch {
    // ignore corrupt storage
  }
  return DEFAULT_STUDENT;
};

const loadTestHistoryFromStorage = (): TestResult[] => {
  try {
    const raw = localStorage.getItem('sikshyaSathi_testHistory');
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore corrupt storage
  }
  return [];
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [classLevel, setClassLevelState] = useState<ClassLevel>('Class 10');
  const [language, setLanguage] = useState<LanguagePref>('English');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [student, setStudent] = useState<StudentProfile>(loadStudentFromStorage);

  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(NOTIFICATIONS_DATA);

  const [isRazorpayOpen, setIsRazorpayOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const [testHistory, setTestHistory] = useState<TestResult[]>(loadTestHistoryFromStorage);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Persist student profile & test history locally so edits/scores survive a reload
  useEffect(() => {
    try {
      localStorage.setItem('sikshyaSathi_student', JSON.stringify(student));
    } catch {
      // storage may be unavailable (private browsing) — fail silently
    }
  }, [student]);

  useEffect(() => {
    try {
      localStorage.setItem('sikshyaSathi_testHistory', JSON.stringify(testHistory));
    } catch {
      // ignore
    }
  }, [testHistory]);

  // Sync dark mode class with html document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const setClassLevel = (level: ClassLevel) => {
    setClassLevelState(level);
    setStudent((prev) => ({ ...prev, classLevel: level }));
  };

  const updateStudentProfile = (updates: Partial<StudentProfile>) => {
    setStudent((prev) => ({ ...prev, ...updates }));
  };

  const toggleBookmark = (id: string) => {
    setStudent((prev) => {
      const exists = prev.savedBookmarks.includes(id);
      const newBookmarks = exists
        ? prev.savedBookmarks.filter((b) => b !== id)
        : [...prev.savedBookmarks, id];
      return { ...prev, savedBookmarks: newBookmarks };
    });
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const upgradeToPremium = () => {
    setStudent((prev) => ({ ...prev, isPremium: true, points: prev.points + 500 }));
    setIsRazorpayOpen(false);
  };

  const addTestResult = (result: TestResult) => {
    setTestHistory((prev) => [result, ...prev]);
    setStudent((prev) => {
      const updated = { ...prev, points: prev.points + Math.round(result.score * 10) };
      // Best-effort: submit to the real leaderboard (only if the student has set a name).
      if (updated.name && updated.name !== 'Student') {
        submitLeaderboardEntry({
          name: updated.name,
          district: updated.district || 'Odisha',
          school: updated.school || '',
          points: updated.points,
          classLevel: updated.classLevel,
        }).catch(() => {
          // Non-critical — ignore network/leaderboard failures
        });
      }
      return updated;
    });
  };

  // Text to speech helper for voice teacher
  const speakText = (text: string, langPref: string = 'en-IN') => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    // Clean html tags or markdowns
    const cleanText = text.replace(/[*#_~`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    if (langPref === 'or' || langPref === 'Odia') {
      utterance.lang = 'or-IN';
    } else {
      utterance.lang = 'en-IN';
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        classLevel,
        setClassLevel,
        language,
        setLanguage,
        isDarkMode,
        setIsDarkMode,
        student,
        updateStudentProfile,
        toggleBookmark,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedChapter,
        setSelectedChapter,
        isSearchOpen,
        setIsSearchOpen,
        isNotificationsOpen,
        setIsNotificationsOpen,
        notifications,
        markNotificationRead,
        isRazorpayOpen,
        setIsRazorpayOpen,
        upgradeToPremium,
        isPlannerOpen,
        setIsPlannerOpen,
        testHistory,
        addTestResult,
        speakText,
        stopSpeaking,
        isSpeaking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
