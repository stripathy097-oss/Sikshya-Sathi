import React from 'react';
import { useApp } from '../context/AppContext';
import { Bell, X, Check, Clock, Calendar, Zap, BookOpen } from 'lucide-react';

export const NotificationDrawer: React.FC = () => {
  const {
    isNotificationsOpen,
    setIsNotificationsOpen,
    notifications,
    markNotificationRead,
    setActiveTab,
  } = useApp();

  if (!isNotificationsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="bg-white dark:bg-slate-800 w-full max-w-sm h-full p-6 shadow-2xl space-y-4 flex flex-col animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              Notifications & Alerts
            </h3>
          </div>
          <button
            onClick={() => setIsNotificationsOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-3 flex-1 pr-1">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                markNotificationRead(n.id);
                if (n.type === 'quiz') setActiveTab('tests');
                if (n.type === 'notes') setActiveTab('learn');
                setIsNotificationsOpen(false);
              }}
              className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-1.5 ${
                n.isRead
                  ? 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/50 opacity-80'
                  : 'bg-blue-50/60 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900 dark:text-slate-100">
                  {n.title}
                </span>
                <span className="text-[10px] text-slate-400">{n.time}</span>
              </div>
              {n.titleOdia && (
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                  {n.titleOdia}
                </p>
              )}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {n.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
