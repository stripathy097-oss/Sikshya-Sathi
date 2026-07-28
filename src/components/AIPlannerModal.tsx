import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { generateAIStudyPlanner } from '../services/aiService';
import { AIPlannerResponse } from '../types';
import {
  Sparkles,
  X,
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  Loader2,
  Lightbulb,
} from 'lucide-react';

export const AIPlannerModal: React.FC = () => {
  const { isPlannerOpen, setIsPlannerOpen, classLevel } = useApp();

  const [targetDate, setTargetDate] = useState('2026-12-15');
  const [dailyHours, setDailyHours] = useState(4);
  const [loading, setLoading] = useState(false);
  const [plannerData, setPlannerData] = useState<AIPlannerResponse | null>(null);

  if (!isPlannerOpen) return null;

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await generateAIStudyPlanner({
        classLevel,
        targetExamDate: targetDate,
        dailyHours,
        focusSubjects: ['math', 'physical_science', 'english', 'odia'],
      });

      setPlannerData(res);
    } catch (err: any) {
      alert('Failed to generate planner: ' + (err.message || String(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col animate-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
              AI Study Planner & Revision Routine
            </h3>
          </div>
          <button
            onClick={() => setIsPlannerOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!plannerData ? (
          <form onSubmit={handleGeneratePlan} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">
                Target Exam Date
              </label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 block mb-1">
                Available Daily Study Hours: {dailyHours} Hours
              </label>
              <input
                type="range"
                min="2"
                max="10"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Gemini AI is crafting your timetable...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Personalized Schedule</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Routine Display */
          <div className="overflow-y-auto space-y-4 pr-1 flex-1">
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <span className="font-bold flex items-center gap-1">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                AI Exam Strategy:
              </span>
              <p>{plannerData.overallAdvice}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">
                Weekly Timetable:
              </h4>
              {plannerData.weeklyRoutine?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-blue-600 block">{item.day}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {item.subject}: {item.topic}
                    </span>
                  </div>
                  <span className="font-bold text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded-md">
                    {item.durationMinutes} mins
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPlannerData(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"
              >
                Re-generate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
