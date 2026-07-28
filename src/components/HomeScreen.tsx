import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECTS, MOCK_TESTS, PDF_LIBRARY_DATA } from '../data/odishaData';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileQuestion,
  FileText,
  Languages,
  BookMarked,
  Trophy,
  ArrowRight,
  Flame,
  Calendar,
  Clock,
  Send,
  Zap,
  Bookmark,
  ChevronRight,
  HelpCircle,
  GraduationCap,
} from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const {
    student,
    classLevel,
    language,
    setActiveTab,
    setSelectedSubjectId,
    setIsRazorpayOpen,
    setIsPlannerOpen,
  } = useApp();

  const [quickDoubt, setQuickDoubt] = useState('');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return language === 'Odia' ? 'ଶୁଭ ସକାଳ' : 'Good Morning';
    if (hour < 17) return language === 'Odia' ? 'ଶୁଭ ଅପରାହ୍ନ' : 'Good Afternoon';
    return language === 'Odia' ? 'ଶୁଭ ସନ୍ଧ୍ୟା' : 'Good Evening';
  };

  const handleQuickSolve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickDoubt.trim()) return;
    setActiveTab('ai');
  };

  const featuresList = [
    {
      id: 'ai_doubt',
      titleEnglish: 'AI Doubt Solver',
      titleOdia: 'AI ସନ୍ଦେହ ସମାଧାନ',
      descEnglish: 'Instant exam answers & Odia translations',
      descOdia: 'ପ୍ରଶ୍ନର ତୁରନ୍ତ ଉତ୍ତର ଓ ଓଡ଼ିଆ ଅନୁବାଦ',
      icon: <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      bg: 'bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-900',
      action: () => setActiveTab('ai'),
    },
    {
      id: 'chapter_notes',
      titleEnglish: 'Chapter Notes',
      titleOdia: 'ଅଧ୍ୟାୟ ଭିତ୍ତିକ ନୋଟ୍ସ',
      descEnglish: 'Complete syllabus summaries & Q&A',
      descOdia: 'ସମ୍ପୂର୍ଣ୍ଣ ବିଷୟ ସଂକ୍ଷେପ ଓ ପ୍ରଶ୍ନୋତ୍ତର',
      icon: <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900',
      action: () => setActiveTab('learn'),
    },
    {
      id: 'mcq_practice',
      titleEnglish: 'MCQ Practice',
      titleOdia: 'MCQ ଅଭ୍ୟାସ',
      descEnglish: 'Easy, Medium & Hard chapter questions',
      descOdia: 'ସରଳ, ମଧ୍ୟମ ଓ କଠିନ ପ୍ରଶ୍ନୋତ୍ତର',
      icon: <CheckCircle2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      bg: 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-900',
      action: () => setActiveTab('tests'),
    },
    {
      id: 'mock_test',
      titleEnglish: 'Mock Test',
      titleOdia: 'ମକ୍ ଟେଷ୍ଟ (ପରୀକ୍ଷା)',
      descEnglish: 'Full BSE Odisha timed exam & rank',
      descOdia: 'ସମୟବଦ୍ଧ ବୋର୍ଡ ନମୁନା ପରୀକ୍ଷା',
      icon: <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900',
      action: () => setActiveTab('tests'),
    },
    {
      id: 'pyq',
      titleEnglish: 'Previous Year Qs',
      titleOdia: 'ଗତ ବର୍ଷର ପ୍ରଶ୍ନପତ୍ର',
      descEnglish: '10-Year solved BSE matric papers',
      descOdia: 'ଗତ ୧୦ ବର୍ଷର ସମାଧାନ ପ୍ରଶ୍ନପତ୍ର',
      icon: <FileQuestion className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      bg: 'bg-purple-50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-900',
      action: () => setActiveTab('pdf'),
    },
    {
      id: 'grammar',
      titleEnglish: 'Grammar Practice',
      titleOdia: 'ବ୍ୟାକରଣ ଅଭ୍ୟାସ',
      descEnglish: 'Tenses, Voice, Narration & Rules',
      descOdia: 'ଇଂରାଜୀ o ଓଡ଼ିଆ ବ୍ୟାକରଣ ନିୟମ',
      icon: <Languages className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      bg: 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900',
      action: () => setActiveTab('grammar'),
    },
    {
      id: 'vocab',
      titleEnglish: 'Active Recall Cards',
      titleOdia: 'ସକ୍ରିୟ ସ୍ମରଣ ଫ୍ଲାସକାର୍ଡ',
      descEnglish: 'Flip vocabulary & grammar cards with AI',
      descOdia: '3D ଫ୍ଲାସକାର୍ଡ ସହ ଶବ୍ଦକୋଷ ଅଭ୍ୟାସ',
      icon: <BookMarked className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      bg: 'bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-900',
      action: () => setActiveTab('flashcards'),
    },
    {
      id: 'daily_quiz',
      titleEnglish: 'Daily Quiz',
      titleOdia: 'ଦୈନିକ କୁଇଜ୍',
      descEnglish: '5-min daily challenge for +50 pts',
      descOdia: 'ଦୈନିକ ପ୍ରଶ୍ନୋତ୍ତର ସହ ପଏଣ୍ଟ ହାସଲ',
      icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900',
      action: () => setActiveTab('tests'),
    },
    {
      id: 'pdfs',
      titleEnglish: 'PDFs & Textbooks',
      titleOdia: 'PDFs o ପାଠ୍ୟପୁସ୍ତକ',
      descEnglish: 'Official TBW books & notes',
      descOdia: 'ଓଡ଼ିଶା ପାଠ୍ୟପୁସ୍ତକ ଓ ବିନୋଦିନୀ ନୋଟ୍ସ',
      icon: <FileText className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      bg: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-900',
      action: () => setActiveTab('pdf'),
    },
    {
      id: 'bookmarks',
      titleEnglish: 'Saved Bookmarks',
      titleOdia: 'ସଂରକ୍ଷିତ ପ୍ରଶ୍ନୋତ୍ତର',
      descEnglish: 'Saved chapters & formula sheets',
      descOdia: 'ବୁକ୍‌ମାର୍କ ହୋଇଥିବା ଅଧ୍ୟାୟ',
      icon: <Bookmark className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      bg: 'bg-orange-50 dark:bg-orange-950/50 border-orange-200 dark:border-orange-900',
      action: () => setActiveTab('learn'),
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Welcome Banner Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-6 md:p-8 shadow-xl shadow-blue-600/20">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                {getGreeting()} 👋
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
                {student.name}
              </h1>
              <p className="text-xs md:text-sm text-blue-100 mt-1 flex items-center gap-2">
                <span>{classLevel}</span> • <span>{student.school}</span> •{' '}
                <span className="font-semibold text-amber-300">{student.district}</span>
              </p>
            </div>

            {/* AI Planner launcher button */}
            <button
              onClick={() => setIsPlannerOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs font-bold transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Study Planner</span>
            </button>
          </div>

          {/* Quick AI Search bar on Home Banner */}
          <div className="pt-2">
            <form onSubmit={handleQuickSolve} className="relative">
              <input
                type="text"
                value={quickDoubt}
                onChange={(e) => setQuickDoubt(e.target.value)}
                placeholder={
                  language === 'Odia'
                    ? 'ଯେକୌଣସି ପାଠ୍ୟକ୍ରମ ସନ୍ଦେହ ପଚାରନ୍ତୁ (ଉଦାହରଣ: ଲେଞ୍ଚୋ ଚରିତ୍ର ଚିତ୍ରଣ, ବଜ୍ରଗୁଣନ ...)'
                    : 'Ask any BSE Odisha exam question (e.g. Lencho character, Redox reaction...)'
                }
                className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Exam Countdown & Stats bar */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
              <span className="text-[10px] text-blue-200 block">Board Exam</span>
              <span className="text-sm font-bold text-amber-300">140 Days Left</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
              <span className="text-[10px] text-blue-200 block">Daily Streak</span>
              <span className="text-sm font-bold text-emerald-300 flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-emerald-300" />
                {student.streakDays} Days
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
              <span className="text-[10px] text-blue-200 block">Reward Points</span>
              <span className="text-sm font-bold text-white">{student.points} Pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning Card */}
      <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/60 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              {language === 'Odia' ? 'ପାଠ୍ୟକ୍ରମ ଜାରି ରଖନ୍ତୁ (Continue Learning)' : 'Continue Learning'}
            </h3>
          </div>
          <button
            onClick={() => setActiveTab('learn')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              High School English • {classLevel}
            </span>
            <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Chapter 1: A Letter to God (ଭଗବାନଙ୍କୁ ଚିଠି)
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Lencho's letter, postmaster's help & 70 pesos answer strategy.
            </p>
            {/* Progress bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-blue-600 h-full w-3/4 rounded-full" />
            </div>
          </div>

          <button
            onClick={() => setActiveTab('learn')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shrink-0 flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
          >
            <span>Resume Chapter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Feature Grid (10 Features) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100">
            {language === 'Odia' ? 'ମୁଖ୍ୟ ପାଠ୍ୟ ସୁବିଧାସମୂହ' : 'Syllabus Modules & Tools'}
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Class 9 & 10 Odisha Board
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {featuresList.map((feat) => (
            <button
              key={feat.id}
              onClick={feat.action}
              className={`p-4 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-95 flex flex-col justify-between h-36 ${feat.bg} shadow-sm group`}
            >
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 w-fit shadow-xs group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 leading-tight">
                  {language === 'Odia' ? feat.titleOdia : feat.titleEnglish}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {language === 'Odia' ? feat.descOdia : feat.descEnglish}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Subjects Quick Selector */}
      <div className="space-y-3">
        <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100">
          {language === 'Odia' ? 'ବିଷୟସମୂହ (Subjects)' : 'BSE Subjects'}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SUBJECTS.map((subj) => (
            <button
              key={subj.id}
              onClick={() => {
                setSelectedSubjectId(subj.id);
                setActiveTab('learn');
              }}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 hover:border-blue-400 text-left transition-all hover:shadow-md flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 rounded-xl ${subj.color} text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate">
                  {language === 'Odia' ? subj.nameOdia : subj.nameEnglish}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {subj.chaptersCount} Chapters
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Daily Challenge Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded">
            ⚡ Daily Challenge
          </span>
          <h3 className="font-bold text-base">
            {language === 'Odia' ? 'ଆଜିର ୫-ମିନିଟ୍ ବୋର୍ଡ କୁଇଜ୍ ଅଂଶଗ୍ରହଣ କରନ୍ତୁ' : 'Take Today\'s 5-Minute Board Quiz'}
          </h3>
          <p className="text-xs text-amber-100">
            Score 80%+ to win +50 bonus reward points for Odisha State Leaderboard.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('tests')}
          className="px-5 py-2.5 rounded-xl bg-white text-amber-700 font-bold text-xs shadow-md hover:bg-amber-50 transition-colors shrink-0"
        >
          Start Quiz Now
        </button>
      </div>
    </div>
  );
};
