import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ODISHA_DISTRICTS } from '../data/odishaData';
import { ClassLevel, LanguagePref } from '../types';
import {
  User,
  GraduationCap,
  MapPin,
  Building,
  Phone,
  Mail,
  Crown,
  Sparkles,
  Flame,
  Trophy,
  Bookmark,
  Shield,
  Edit2,
  Check,
  Languages,
} from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const {
    student,
    updateStudentProfile,
    language,
    setLanguage,
    classLevel,
    setClassLevel,
    setIsRazorpayOpen,
    setIsPlannerOpen,
    setActiveTab,
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(student.name);
  const [school, setSchool] = useState(student.school);
  const [district, setDistrict] = useState(student.district);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile({
      name,
      school,
      district,
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Profile Card Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl shadow-blue-600/20 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-2xl text-white shadow-inner">
              {student.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold">{student.name}</h1>
                {student.isPremium && (
                  <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900">
                    <Crown className="w-3 h-3 fill-slate-900" />
                    PRO
                  </span>
                )}
              </div>
              <p className="text-xs text-blue-200 mt-0.5">
                {student.classLevel} • {student.school}
              </p>
              <p className="text-xs text-amber-300 font-semibold mt-0.5">
                📍 District: {student.district}, Odisha
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all"
            title="Edit Profile"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        {/* Reward & Streak Badge row */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
            <span className="text-[10px] text-blue-200 block">Streak</span>
            <span className="text-sm font-bold text-emerald-300 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-emerald-300" />
              {student.streakDays} Days
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
            <span className="text-[10px] text-blue-200 block">Reward Pts</span>
            <span className="text-sm font-bold text-amber-300">{student.points} Pts</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5">
            <span className="text-[10px] text-blue-200 block">Saved Items</span>
            <span className="text-sm font-bold text-white">
              {student.savedBookmarks.length} Items
            </span>
          </div>
        </div>
      </div>

      {/* Edit Form Modal/Drawer */}
      {isEditing && (
        <form
          onSubmit={handleSaveProfile}
          className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4 animate-in fade-in"
        >
          <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
            Edit Student Details
          </h2>

          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                School Name
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                Select District (Odisha)
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              >
                {ODISHA_DISTRICTS.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md"
            >
              Save Profile
            </button>
          </div>
        </form>
      )}

      {/* Subscription Tier Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Subscription Plan
            </span>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 mt-0.5">
              {student.isPremium ? 'Sikshya Sathi PRO Subscription' : 'Free Learning Tier'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {student.isPremium
                ? 'Unlimited AI Doubt Solvers, All PDFs & Priority Live Teacher'
                : 'Limited AI Questions per day • Basic Chapter Notes'}
            </p>
          </div>

          {!student.isPremium && (
            <button
              onClick={() => setIsRazorpayOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 shrink-0"
            >
              Upgrade for ₹199/mo
            </button>
          )}
        </div>
      </div>

      {/* Quick Tools & Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() => setIsPlannerOpen(true)}
          className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-left transition-all flex items-center gap-3 shadow-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              AI Study Planner & Routine
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generate custom 7-day revision schedule
            </p>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('admin')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-500 text-left transition-all flex items-center gap-3 shadow-xs group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              Teacher / Admin Dashboard
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Upload notes, PDFs, send push notifications
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
