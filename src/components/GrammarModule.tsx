import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GRAMMAR_TOPICS } from '../data/odishaData';
import { checkGrammarWithAI } from '../services/aiService';
import {
  Languages,
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Send,
  Loader2,
} from 'lucide-react';

export const GrammarModule: React.FC = () => {
  const { language, setActiveTab } = useApp();

  const [activeTopicId, setActiveTopicId] = useState<string>(GRAMMAR_TOPICS[0].id);
  const [userSentence, setUserSentence] = useState('');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState<{ [idx: number]: string }>({});

  const activeTopic = GRAMMAR_TOPICS.find((gt) => gt.id === activeTopicId) || GRAMMAR_TOPICS[0];

  const handleAiCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSentence.trim()) return;

    setLoading(true);
    setAiResult(null);

    try {
      const res = await checkGrammarWithAI(activeTopic.titleEnglish, userSentence);
      setAiResult(res);
    } catch (err: any) {
      setAiResult('Error evaluating sentence grammar. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Banner Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white shadow-xl shadow-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
            <Languages className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              {language === 'Odia' ? 'ଇଂରାଜୀ o ଓଡ଼ିଆ ବ୍ୟାକରଣ' : 'Grammar & Vocabulary Module'}
            </h1>
            <p className="text-xs text-rose-100 mt-1">
              BSE Odisha Matriculation Grammar Rules, Editing Errors & Vocabulary
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('flashcards')}
          className="px-4 py-2.5 rounded-xl bg-white text-rose-700 font-bold text-xs shrink-0 flex items-center justify-center gap-1.5 shadow-md hover:bg-rose-50 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Active Recall Flashcards</span>
        </button>
      </div>

      {/* Grammar Topic Selector Pills */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
          Select Grammar Topic:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {GRAMMAR_TOPICS.map((gt) => (
            <button
              key={gt.id}
              onClick={() => {
                setActiveTopicId(gt.id);
                setAiResult(null);
                setUserSentence('');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                activeTopicId === gt.id
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {language === 'Odia' ? gt.titleOdia : gt.titleEnglish}
            </button>
          ))}
        </div>
      </div>

      {/* Grammar Topic Rules & Examples */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-rose-600" />
          <span>Rules & Structure: {activeTopic.titleEnglish}</span>
        </h2>

        <div className="space-y-3">
          {activeTopic.rules.map((rule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2"
            >
              <h3 className="font-bold text-xs text-blue-600 dark:text-blue-400">
                Rule {idx + 1}: {rule.ruleEnglish}
              </h3>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                ଓଡ଼ିଆ ନିୟମ: {rule.ruleOdia}
              </p>
              <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-slate-800 dark:text-slate-200">
                <span className="font-bold text-emerald-700 dark:text-emerald-300">Example: </span>
                {rule.exampleEnglish} ({rule.exampleOdia})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Practice Questions */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>Practice Questions ({activeTopic.practiceQuestions.length})</span>
        </h2>

        <div className="space-y-4">
          {activeTopic.practiceQuestions.map((pq, qIdx) => {
            const selectedOpt = selectedAnswers[qIdx];
            const isCorrect = selectedOpt === pq.answer;

            return (
              <div
                key={qIdx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-3"
              >
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {qIdx + 1}. {pq.sentence}
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  {pq.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() =>
                        setSelectedAnswers((prev) => ({ ...prev, [qIdx]: opt }))
                      }
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                        selectedOpt === opt
                          ? opt === pq.answer
                            ? 'bg-emerald-100 dark:bg-emerald-900/50 border-emerald-500 text-emerald-800 dark:text-emerald-200'
                            : 'bg-rose-100 dark:bg-rose-900/50 border-rose-500 text-rose-800 dark:text-rose-200'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                {selectedOpt && (
                  <div
                    className={`p-3 rounded-xl border text-xs ${
                      isCorrect
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border-rose-200'
                    }`}
                  >
                    <span className="font-bold block">
                      {isCorrect ? '✅ Correct Answer!' : '❌ Incorrect! Correct: ' + pq.answer}
                    </span>
                    <p className="mt-1">{pq.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Sentence Grammar Checker */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-600" />
          <span>Test Any Sentence with AI Grammar Tutor</span>
        </h2>

        <form onSubmit={handleAiCheck} className="space-y-3">
          <textarea
            rows={2}
            value={userSentence}
            onChange={(e) => setUserSentence(e.target.value)}
            placeholder="Type your English or Odia sentence to check for grammar errors..."
            className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />

          <button
            type="submit"
            disabled={loading || !userSentence.trim()}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-rose-500/20 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>Check Sentence Grammar</span>
          </button>
        </form>

        {aiResult && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
            {aiResult}
          </div>
        )}
      </div>
    </div>
  );
};
