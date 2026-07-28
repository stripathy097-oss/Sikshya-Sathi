import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ODISHA_DISTRICTS, SUBJECTS } from '../data/odishaData';
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
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { setActiveTab, notifications } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<
    'analytics' | 'notes' | 'pdfs' | 'questions' | 'notifications' | 'users'
  >('analytics');

  // Form states
  const [noteTitle, setNoteTitle] = useState('');
  const [noteSubject, setNoteSubject] = useState('english');
  const [pdfTitle, setPdfTitle] = useState('');
  const [notifTitle, setNotifTitle] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

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

  const handleUploadPdf = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfTitle.trim()) return;
    showSuccess(`PDF Document "${pdfTitle}" published to student library!`);
    setPdfTitle('');
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
          { id: 'pdfs', label: 'Publish PDFs', icon: <FileText className="w-4 h-4" /> },
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

        {/* Publish PDFs */}
        {activeAdminTab === 'pdfs' && (
          <form onSubmit={handleUploadPdf} className="space-y-4 max-w-lg">
            <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
              Publish PDF Study Material
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">
                PDF Document Name
              </label>
              <input
                type="text"
                value={pdfTitle}
                onChange={(e) => setPdfTitle(e.target.value)}
                placeholder="e.g. Class 10 Math Formulae Sheet PDF"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md"
            >
              Upload PDF File
            </button>
          </form>
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
