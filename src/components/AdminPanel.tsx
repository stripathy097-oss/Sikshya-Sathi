import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { ODISHA_DISTRICTS, SUBJECTS } from '../data/odishaData';
import { generateMockTestFromPdf, saveMockTestToApp, generateChapterFromPdf, saveChapterToApp, splitBookIntoChapters, generateChapterFromRawText } from '../services/aiService';
import { QuizQuestion } from '../types';
import {
  Shield,
  Upload,
  PlusCircle,
  Bell,
  Users,
  BarChart2,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Send,
  Sparkles,
  Loader2,
  Download,
  BookOpen,
  LogOut,
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { setActiveTab, notifications } = useApp();
  const { logout } = useAuth();

  const [activeAdminTab, setActiveAdminTab] = useState<
    'analytics' | 'notes' | 'pdfs' | 'questions' | 'notifications' | 'users'
  >('analytics');

  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Chapter-from-textbook-PDF states (BULK: select many chapter PDFs, auto-process all)
  const [chMode, setChMode] = useState<'perChapterFiles' | 'wholeBook'>('wholeBook');
  const [chFiles, setChFiles] = useState<File[]>([]);
  const [chClassLevel, setChClassLevel] = useState<'Class 9' | 'Class 10'>('Class 10');
  const [chSubject, setChSubject] = useState('english');
  const [chStartChapterNumber, setChStartChapterNumber] = useState(1);
  const [chBatchRunning, setChBatchRunning] = useState(false);
  const [chBatchProgress, setChBatchProgress] = useState<
    { fileName: string; status: 'pending' | 'generating' | 'publishing' | 'done' | 'error'; titleEnglish?: string; error?: string }[]
  >([]);
  const [wholeBookFile, setWholeBookFile] = useState<File | null>(null);
  const [wholeBookSplitting, setWholeBookSplitting] = useState(false);
  const [wholeBookError, setWholeBookError] = useState<string | null>(null);

  // Mock-test-from-PDF states (BULK: select many test-paper PDFs, auto-process all)
  const [mtFiles, setMtFiles] = useState<File[]>([]);
  const [mtClassLevel, setMtClassLevel] = useState<'Class 9' | 'Class 10'>('Class 10');
  const [mtSubject, setMtSubject] = useState('english');
  const [mtBatchRunning, setMtBatchRunning] = useState(false);
  const [mtBatchProgress, setMtBatchProgress] = useState<
    { fileName: string; status: 'pending' | 'generating' | 'publishing' | 'done' | 'error'; titleEnglish?: string; questionCount?: number; error?: string }[]
  >([]);

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  /**
   * TRUE ONE-CLICK MODE: upload the entire textbook (one PDF, whole subject). The AI first
   * detects every chapter's boundaries, then each detected chapter is generated + published
   * automatically — no manual splitting into separate PDFs needed.
   */
  const handleRunWholeBookBatch = async () => {
    if (!wholeBookFile) {
      setWholeBookError('Please choose the whole-book PDF first.');
      return;
    }
    setWholeBookError(null);
    setWholeBookSplitting(true);
    setChBatchProgress([]);

    try {
      const pdfBase64 = await fileToBase64(wholeBookFile);
      const detectedChapters = await splitBookIntoChapters(pdfBase64);
      setWholeBookSplitting(false);

      if (detectedChapters.length === 0) {
        setWholeBookError('Could not detect any chapters in this PDF.');
        return;
      }

      setChBatchRunning(true);
      setChBatchProgress(detectedChapters.map((c) => ({ fileName: c.titleEnglish, status: 'pending' })));

      for (let i = 0; i < detectedChapters.length; i++) {
        const dc = detectedChapters[i];
        setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'generating', titleEnglish: dc.titleEnglish } : p)));
        try {
          const chapter = await generateChapterFromRawText({
            rawText: dc.rawText,
            classLevel: chClassLevel,
            subjectId: chSubject,
            chapterNumber: dc.chapterNumber,
            titleEnglish: dc.titleEnglish,
            titleOdia: dc.titleOdia,
          });

          setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'publishing', titleEnglish: chapter.titleEnglish } : p)));
          await saveChapterToApp(chapter);

          setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'done', titleEnglish: chapter.titleEnglish } : p)));
        } catch (err: any) {
          setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'error', error: err.message || 'Failed' } : p)));
        }
      }

      setChBatchRunning(false);
      showSuccess(`Whole book processed! ${detectedChapters.length} chapters detected and published.`);
    } catch (err: any) {
      setWholeBookSplitting(false);
      setWholeBookError(err.message || 'Could not split this book into chapters.');
    }
  };

  /**
   * ONE-CLICK BULK MODE: select many chapter PDFs, auto-process all.
   */
  const handleRunChapterBatch = async () => {
    if (chFiles.length === 0) {
      showSuccess('Please select at least one chapter PDF first.');
      return;
    }
    setChBatchRunning(true);
    setChBatchProgress(chFiles.map((f) => ({ fileName: f.name, status: 'pending' })));

    for (let i = 0; i < chFiles.length; i++) {
      const file = chFiles[i];
      setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'generating' } : p)));
      try {
        const pdfBase64 = await fileToBase64(file);
        const chapter = await generateChapterFromPdf({
          pdfBase64,
          classLevel: chClassLevel,
          subjectId: chSubject,
          chapterNumber: chStartChapterNumber + i,
        });

        setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'publishing', titleEnglish: chapter.titleEnglish } : p)));
        await saveChapterToApp(chapter);

        setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'done', titleEnglish: chapter.titleEnglish } : p)));
      } catch (err: any) {
        setChBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'error', error: err.message || 'Failed' } : p)));
      }
    }

    setChBatchRunning(false);
    showSuccess('Batch complete! Check the results below for each chapter.');
  };

  /**
   * ONE-CLICK BULK MODE: select every practice-test PDF at once. Each file becomes its
   * own mock test, generated and published automatically one after another.
   */
  const handleRunMockTestBatch = async () => {
    if (mtFiles.length === 0) {
      showSuccess('Please select at least one PDF first.');
      return;
    }
    setMtBatchRunning(true);
    setMtBatchProgress(mtFiles.map((f) => ({ fileName: f.name, status: 'pending' })));

    for (let i = 0; i < mtFiles.length; i++) {
      const file = mtFiles[i];
      setMtBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'generating' } : p)));
      try {
        const pdfBase64 = await fileToBase64(file);
        const result = await generateMockTestFromPdf({
          pdfBase64,
          classLevel: mtClassLevel,
          subjectId: mtSubject as any,
          titleEnglish: file.name.replace('.pdf', ''),
          titleOdia: '',
        });

        setMtBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'publishing', titleEnglish: result.titleEnglish, questionCount: result.questions.length } : p)));
        await saveMockTestToApp({
          titleEnglish: result.titleEnglish,
          titleOdia: result.titleOdia,
          classLevel: mtClassLevel,
          subjectId: mtSubject,
          durationMinutes: 30,
          totalMarks: result.totalMarks,
          questions: result.questions,
        });

        setMtBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'done' } : p)));
      } catch (err: any) {
        setMtBatchProgress((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: 'error', error: err.message || 'Failed' } : p)));
      }
    }

    setMtBatchRunning(false);
    showSuccess('Batch complete! Check the results below for each test.');
  };

  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifTitle.trim()) return;
    showSuccess(`Push notification broadcasted to all BSE Odisha students across 30 districts!`);
    setNotifTitle('');
    setNotifMessage('');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white shadow-xl shadow-purple-600/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              Sikshya Sathi Admin Portal
            </h1>
            <p className="text-xs text-purple-200 mt-1">
              Odisha Board Content Management & Student Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit Admin</span>
          </button>
          <button
            onClick={() => logout()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Success Banner */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Admin Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'analytics', label: 'Analytics Overview', icon: <BarChart2 className="w-4 h-4" /> },
          { id: 'notes', label: 'Chapter from Textbook PDF', icon: <BookOpen className="w-4 h-4" /> },
          { id: 'pdfs', label: 'AI Mock Test from PDF', icon: <FileText className="w-4 h-4" /> },
          { id: 'questions', label: 'Add Questions', icon: <PlusCircle className="w-4 h-4" /> },
          { id: 'notifications', label: 'Broadcast Push', icon: <Bell className="w-4 h-4" /> },
          { id: 'users', label: 'Manage Users', icon: <Users className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id as any)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeAdminTab === tab.id
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs">
        {/* Analytics Overview */}
        {activeAdminTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Platform Growth & District Engagement
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50">
                <span className="text-xs text-slate-500 block">Total Active Students</span>
                <span className="text-xl font-extrabold text-purple-600 dark:text-purple-400 mt-1 block">
                  48,250
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">+18% this month</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50">
                <span className="text-xs text-slate-500 block">AI Doubts Solved</span>
                <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400 mt-1 block">
                  182,400
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">⚡ Gemini 3.6 Flash</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50">
                <span className="text-xs text-slate-500 block">Mock Tests Attempted</span>
                <span className="text-xl font-extrabold text-amber-500 mt-1 block">
                  34,100
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">Avg score: 76%</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50">
                <span className="text-xs text-slate-500 block">Pro Subscriptions</span>
                <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 block">
                  3,420
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">Razorpay Verified</span>
              </div>
            </div>
          </div>
        )}

        {/* Chapter from Textbook PDF */}
        {activeAdminTab === 'notes' && (
          <div className="space-y-5 max-w-2xl">
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-600" />
                Generate All Chapters from the Textbook
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Download the official BSE Odisha textbook from{' '}
                <span className="font-semibold">sme.odisha.gov.in</span>. Upload the whole book PDF and
                the AI will find every chapter, build each one, and publish it live — automatically.
              </p>
            </div>

            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
              <button
                onClick={() => setChMode('wholeBook')}
                disabled={chBatchRunning || wholeBookSplitting}
                className={`px-3 py-1.5 rounded-lg transition ${chMode === 'wholeBook' ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600' : 'text-slate-500'}`}
              >
                Upload Whole Book (1 PDF)
              </button>
              <button
                onClick={() => setChMode('perChapterFiles')}
                disabled={chBatchRunning || wholeBookSplitting}
                className={`px-3 py-1.5 rounded-lg transition ${chMode === 'perChapterFiles' ? 'bg-white dark:bg-slate-700 shadow-sm text-purple-600' : 'text-slate-500'}`}
              >
                Already Split (many PDFs)
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Class</label>
                  <select
                    value={chClassLevel}
                    onChange={(e) => setChClassLevel(e.target.value as 'Class 9' | 'Class 10')}
                    disabled={chBatchRunning}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  >
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Subject</label>
                  <select
                    value={chSubject}
                    onChange={(e) => setChSubject(e.target.value)}
                    disabled={chBatchRunning}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.nameEnglish}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Starts at Chapter #</label>
                  <input
                    type="number"
                    min={1}
                    value={chStartChapterNumber}
                    onChange={(e) => setChStartChapterNumber(parseInt(e.target.value) || 1)}
                    disabled={chBatchRunning}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </div>

              {chMode === 'perChapterFiles' && (
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">
                    Select ALL Chapter PDFs for This Subject (multi-select)
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    multiple
                    disabled={chBatchRunning}
                    onChange={(e) => setChFiles(e.target.files ? Array.from(e.target.files) : [])}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:text-xs file:font-bold"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {chFiles.length > 0
                      ? `${chFiles.length} file(s) selected — will become chapters ${chStartChapterNumber} to ${chStartChapterNumber + chFiles.length - 1}, in the order you selected them.`
                      : 'Tip: select files in chapter order (Ctrl/Cmd-click, or select a whole folder at once).'}
                  </p>
                </div>
              )}

              {chMode === 'wholeBook' && (
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">
                    Upload the Whole Textbook (1 PDF, all chapters)
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    disabled={chBatchRunning || wholeBookSplitting}
                    onChange={(e) => setWholeBookFile(e.target.files ? e.target.files[0] : null)}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:text-xs file:font-bold"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    {wholeBookFile ? `Selected: ${wholeBookFile.name}` : 'The AI will find each chapter\'s starting point automatically — no manual splitting needed.'}
                  </p>
                  {wholeBookError && (
                    <div className="mt-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-semibold">
                      {wholeBookError}
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={chMode === 'wholeBook' ? handleRunWholeBookBatch : handleRunChapterBatch}
                disabled={
                  chBatchRunning ||
                  wholeBookSplitting ||
                  (chMode === 'wholeBook' ? !wholeBookFile : chFiles.length === 0)
                }
                className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md flex items-center gap-2 disabled:opacity-60"
              >
                {wholeBookSplitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Finding chapters in the book...</span>
                  </>
                ) : chBatchRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing all chapters — this can take a few minutes...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate & Publish All {chFiles.length || ''} Chapters</span>
                  </>
                )}
              </button>
            </div>

            {chBatchProgress.length > 0 && (
              <div className="space-y-2">
                {chBatchProgress.map((p, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                      p.status === 'error'
                        ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
                        : p.status === 'done'
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
                        : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {chStartChapterNumber + i}. {p.titleEnglish || p.fileName}
                      </span>
                      {p.status === 'error' && (
                        <p className="text-red-600 dark:text-red-400 mt-0.5">{p.error}</p>
                      )}
                    </div>
                    <span className="font-semibold flex items-center gap-1.5">
                      {p.status === 'pending' && <span className="text-slate-400">Waiting...</span>}
                      {p.status === 'generating' && (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-600" />
                          <span className="text-purple-600">Reading with AI...</span>
                        </>
                      )}
                      {p.status === 'publishing' && (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                          <span className="text-blue-600">Publishing...</span>
                        </>
                      )}
                      {p.status === 'done' && (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Live!</span>
                        </>
                      )}
                      {p.status === 'error' && <span className="text-red-600">Failed</span>}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* AI Mock Test from PDF */}
        {activeAdminTab === 'pdfs' && (
          <div className="space-y-5 max-w-2xl">
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Bulk-Generate Mock Tests from PDFs
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select every question-paper / practice PDF you have at once. Each file becomes its own
                mock test — generated and published automatically, one after another.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Class</label>
                  <select
                    value={mtClassLevel}
                    onChange={(e) => setMtClassLevel(e.target.value as 'Class 9' | 'Class 10')}
                    disabled={mtBatchRunning}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  >
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Subject</label>
                  <select
                    value={mtSubject}
                    onChange={(e) => setMtSubject(e.target.value)}
                    disabled={mtBatchRunning}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.nameEnglish}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Select ALL Test-Paper PDFs (multi-select)</label>
                <input
                  type="file"
                  accept="application/pdf"
                  multiple
                  disabled={mtBatchRunning}
                  onChange={(e) => setMtFiles(e.target.files ? Array.from(e.target.files) : [])}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:text-xs file:font-bold"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  {mtFiles.length > 0 ? `${mtFiles.length} file(s) selected — each becomes its own mock test.` : 'Text-based PDFs work best (not scanned photos).'}
                </p>
              </div>

              <button
                onClick={handleRunMockTestBatch}
                disabled={mtBatchRunning || mtFiles.length === 0}
                className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md flex items-center gap-2 disabled:opacity-60"
              >
                {mtBatchRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing all tests — this can take a few minutes...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate & Publish All {mtFiles.length || ''} Mock Tests</span>
                  </>
                )}
              </button>
            </div>

            {mtBatchProgress.length > 0 && (
              <div className="space-y-2">
                {mtBatchProgress.map((p, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                      p.status === 'error'
                        ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
                        : p.status === 'done'
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
                        : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {p.titleEnglish || p.fileName}
                      </span>
                      {p.questionCount !== undefined && (
                        <span className="text-slate-500"> — {p.questionCount} questions</span>
                      )}
                      {p.status === 'error' && (
                        <p className="text-red-600 dark:text-red-400 mt-0.5">{p.error}</p>
                      )}
                    </div>
                    <span className="font-semibold flex items-center gap-1.5">
                      {p.status === 'pending' && <span className="text-slate-400">Waiting...</span>}
                      {p.status === 'generating' && (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-600" />
                          <span className="text-purple-600">Reading with AI...</span>
                        </>
                      )}
                      {p.status === 'publishing' && (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                          <span className="text-blue-600">Publishing...</span>
                        </>
                      )}
                      {p.status === 'done' && (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Live!</span>
                        </>
                      )}
                      {p.status === 'error' && <span className="text-red-600">Failed</span>}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Broadcast Push Notifications */}
        {activeAdminTab === 'notifications' && (
          <form onSubmit={handleSendNotification} className="space-y-4 max-w-lg">
            <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Send Statewide Push Notification
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Title</label>
              <input
                type="text"
                value={notifTitle}
                onChange={(e) => setNotifTitle(e.target.value)}
                placeholder="Notification Title (e.g. BSE Odisha Board Exam Dates Declared!)"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">Message Body</label>
              <textarea
                rows={3}
                value={notifMessage}
                onChange={(e) => setNotifMessage(e.target.value)}
                placeholder="Broadcast message text..."
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Notification</span>
            </button>
          </form>
        )}

        {/* Manage Users */}
        {activeAdminTab === 'users' && (
          <div className="space-y-3">
            <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Registered Students (30 Odisha Districts)
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
              Displaying recent student registrations from Cuttack, Bhubaneswar, Puri, Sambalpur, Balasore, Ganjam, and Koraput.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
