import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ODISHA_DISTRICTS, SUBJECTS } from '../data/odishaData';
import { generateMockTestFromPdf, saveMockTestToApp } from '../services/aiService';
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
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { setActiveTab, notifications } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<
    'analytics' | 'notes' | 'pdfs' | 'questions' | 'notifications' | 'users'
  >('analytics');

  // Form states
  const [noteTitle, setNoteTitle] = useState('');
  const [noteSubject, setNoteSubject] = useState('english');
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Mock-test-from-PDF states
  const [mtFile, setMtFile] = useState<File | null>(null);
  const [mtClassLevel, setMtClassLevel] = useState<'Class 9' | 'Class 10'>('Class 10');
  const [mtSubject, setMtSubject] = useState('english');
  const [mtTitleEnglish, setMtTitleEnglish] = useState('');
  const [mtTitleOdia, setMtTitleOdia] = useState('');
  const [mtLoading, setMtLoading] = useState(false);
  const [mtError, setMtError] = useState<string | null>(null);
  const [mtResult, setMtResult] = useState<{ titleEnglish: string; titleOdia: string; totalMarks: number; questions: QuizQuestion[] } | null>(null);
  const [mtSaving, setMtSaving] = useState(false);
  const [mtSaved, setMtSaved] = useState(false);

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleUploadNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteTitle.trim()) return;
    showSuccess(`Chapter note "${noteTitle}" uploaded successfully for Class 10!`);
    setNoteTitle('');
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleGenerateMockTest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mtFile) {
      setMtError('Please choose a PDF file first.');
      return;
    }
    setMtError(null);
    setMtResult(null);
    setMtSaved(false);
    setMtLoading(true);
    try {
      const pdfBase64 = await fileToBase64(mtFile);
      const result = await generateMockTestFromPdf({
        pdfBase64,
        classLevel: mtClassLevel,
        subjectId: mtSubject as any,
        titleEnglish: mtTitleEnglish || mtFile.name.replace('.pdf', ''),
        titleOdia: mtTitleOdia,
      });
      setMtResult(result);
      showSuccess(`AI generated ${result.questions.length} questions from the PDF!`);
    } catch (err: any) {
      setMtError(err.message || 'Something went wrong while processing the PDF.');
    } finally {
      setMtLoading(false);
    }
  };

  const handleSaveToApp = async () => {
    if (!mtResult) return;
    setMtSaving(true);
    setMtError(null);
    try {
      await saveMockTestToApp({
        titleEnglish: mtResult.titleEnglish,
        titleOdia: mtResult.titleOdia,
        classLevel: mtClassLevel,
        subjectId: mtSubject,
        durationMinutes: 30,
        totalMarks: mtResult.totalMarks,
        questions: mtResult.questions,
      });
      setMtSaved(true);
      showSuccess('Mock test saved live — students will see it immediately!');
    } catch (err: any) {
      setMtError(err.message || 'Could not save to the app database.');
    } finally {
      setMtSaving(false);
    }
  };

  const handleDownloadJson = () => {
    if (!mtResult) return;
    const blob = new Blob([JSON.stringify(mtResult, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mocktest_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
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

        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Admin</span>
        </button>
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
          { id: 'notes', label: 'Upload Notes', icon: <Upload className="w-4 h-4" /> },
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

        {/* Upload Notes */}
        {activeAdminTab === 'notes' && (
          <form onSubmit={handleUploadNote} className="space-y-4 max-w-lg">
            <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Upload New Chapter Notes
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">
                Chapter Title (English & Odia)
              </label>
              <input
                type="text"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="e.g. Life Science: Control and Coordination (ନିୟନ୍ତ୍ରଣ o ସମନ୍ୱୟ)"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md"
            >
              Publish Chapter Notes
            </button>
          </form>
        )}

        {/* AI Mock Test from PDF */}
        {activeAdminTab === 'pdfs' && (
          <div className="space-y-5 max-w-2xl">
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Generate Mock Test from a PDF
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Upload a question paper or practice-question PDF. Gemini AI will read it and convert it into
                a ready mock test (English + Odia, with explanations).
              </p>
            </div>

            <form onSubmit={handleGenerateMockTest} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-500 block mb-1">Class</label>
                  <select
                    value={mtClassLevel}
                    onChange={(e) => setMtClassLevel(e.target.value as 'Class 9' | 'Class 10')}
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
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>{s.nameEnglish}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Mock Test Title (English)</label>
                <input
                  type="text"
                  value={mtTitleEnglish}
                  onChange={(e) => setMtTitleEnglish(e.target.value)}
                  placeholder="e.g. Class 10 English Half-Yearly Practice Set"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Mock Test Title (Odia) — optional</label>
                <input
                  type="text"
                  value={mtTitleOdia}
                  onChange={(e) => setMtTitleOdia(e.target.value)}
                  placeholder="e.g. ଦଶମ ଶ୍ରେଣୀ ଇଂରାଜୀ ଅଭ୍ୟାସ ପ୍ରଶ୍ନପତ୍ର"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 block mb-1">Upload PDF</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setMtFile(e.target.files ? e.target.files[0] : null)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:text-xs file:font-bold"
                />
                <p className="text-[10px] text-slate-400 mt-1">Text-based PDFs work best (not scanned photo PDFs).</p>
              </div>

              {mtError && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 font-semibold">
                  {mtError}
                </div>
              )}

              <button
                type="submit"
                disabled={mtLoading}
                className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md flex items-center gap-2 disabled:opacity-60"
              >
                {mtLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reading PDF & generating questions...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Mock Test with AI</span>
                  </>
                )}
              </button>
            </form>

            {mtResult && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-emerald-800 dark:text-emerald-300">{mtResult.titleEnglish}</h3>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">{mtResult.questions.length} questions generated</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveToApp}
                      disabled={mtSaving || mtSaved}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-bold disabled:opacity-60"
                    >
                      {mtSaving ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5" />
                      )}
                      {mtSaved ? 'Saved Live ✓' : 'Save Live to App'}
                    </button>
                    <button
                      onClick={handleDownloadJson}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download JSON
                    </button>
                  </div>
                </div>

                <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                  {mtResult.questions.map((q, i) => (
                    <div key={q.id} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">{i + 1}. {q.questionEnglish}</p>
                      <p className="text-slate-500 mt-0.5">{q.questionOdia}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-emerald-700 dark:text-emerald-400">
                  Click "Save Live to App" to publish instantly, or download the JSON as a backup.
                </p>
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
