import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MOCK_TESTS, LEADERBOARD_DATA } from '../data/odishaData';
import { MockTest, QuizQuestion, TestResult } from '../types';
import { fetchLiveMockTests } from '../services/aiService';
import {
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  Flame,
  Award,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Eye,
} from 'lucide-react';

/**
 * For subjective (non-MCQ) questions: the student thinks through their own answer,
 * taps to reveal the model answer, then self-marks whether they got it right.
 * `selected` follows the same 0/1 sentinel used for MCQ scoring (1 = correct, 0 = incorrect).
 */
const ShortAnswerBlock: React.FC<{
  question: QuizQuestion;
  language: string;
  selected: number | undefined;
  onMark: (isCorrect: boolean) => void;
}> = ({ question, language, selected, onMark }) => {
  const [revealed, setRevealed] = useState(false);
  const modelAnswer = language === 'Odia' ? question.modelAnswerOdia : question.modelAnswerEnglish;

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 dark:text-slate-400 italic">
        This is a written-answer question. Think through your answer, then reveal the model answer to self-check.
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full p-4 rounded-2xl border border-dashed border-blue-300 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-bold text-sm flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          Reveal Model Answer
        </button>
      ) : (
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-sm text-emerald-800 dark:text-emerald-300">
            {modelAnswer || 'Model answer not available for this question.'}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onMark(true)}
              className={`p-3 rounded-xl font-bold text-xs border ${
                selected === 1
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              ✅ I got it right
            </button>
            <button
              onClick={() => onMark(false)}
              className={`p-3 rounded-xl font-bold text-xs border ${
                selected === 0
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              ❌ I got it wrong
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const TestScreen: React.FC = () => {
  const {
    classLevel,
    language,
    student,
    addTestResult,
    testHistory,
    setActiveTab,
    setSelectedChapter,
  } = useApp();


  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [lastResult, setLastResult] = useState<TestResult | null>(null);
  const [liveMockTests, setLiveMockTests] = useState<MockTest[]>([]);

  const [leaderboardTab, setLeaderboardTab] = useState<'State' | 'District'>('State');

  // Fetch admin-uploaded (database-backed) mock tests once on mount
  useEffect(() => {
    fetchLiveMockTests().then((tests) => setLiveMockTests(tests as MockTest[]));
  }, []);

  // Filter tests matching current class level (built-in + admin-uploaded, merged)
  const classMockTests = [...MOCK_TESTS, ...liveMockTests].filter((t) => t.classLevel === classLevel);

  // Timer effect during active test
  useEffect(() => {
    if (!activeTest || isTestSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTest, isTestSubmitted]);

  const handleStartTest = (test: MockTest) => {
    setActiveTest(test);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setTimeLeftSeconds(test.durationMinutes * 60);
    setIsTestSubmitted(false);
    setLastResult(null);
  };

  const handleSelectOption = (qId: string, optionIdx: number) => {
    if (isTestSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitTest = () => {
    if (!activeTest || isTestSubmitted) return;

    setIsTestSubmitted(true);

    let correctCount = 0;
    const wrongQIds: string[] = [];

    activeTest.questions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      if (selected === q.correctOptionIndex) {
        correctCount++;
      } else {
        wrongQIds.push(q.id);
      }
    });

    const score = Math.round((correctCount / activeTest.questions.length) * activeTest.totalMarks);
    const accuracy = Math.round((correctCount / activeTest.questions.length) * 100);
    const timeSpent = activeTest.durationMinutes * 60 - timeLeftSeconds;

    const result: TestResult = {
      id: 'res_' + Date.now(),
      testId: activeTest.id,
      testTitle: activeTest.titleEnglish,
      date: new Date().toLocaleDateString(),
      score,
      totalMarks: activeTest.totalMarks,
      accuracy,
      timeSpentSeconds: timeSpent,
      wrongQuestionIds: wrongQIds,
      suggestedRevisionChapters: [
        'A Letter to God (English)',
        'Linear Simultaneous Equations (Math)',
        'Chemical Reactions (Physical Science)',
      ],
    };

    setLastResult(result);
    addTestResult(result);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white shadow-xl shadow-indigo-600/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
            BSE Odisha Exam Prep
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight mt-1">
            {language === 'Odia' ? 'ମକ୍ ଟେଷ୍ଟ o ଦୈନିକ କୁଇଜ୍' : 'Quizzes & Mock Tests'}
          </h1>
          <p className="text-xs text-indigo-100 mt-1">
            Timed exams • State Rank Prediction • Instant Explanations
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl w-fit">
          <Trophy className="w-5 h-5 text-amber-300" />
          <div>
            <span className="text-[10px] text-indigo-200 block">Total Earned</span>
            <span className="text-xs font-bold text-amber-300">{student.points} Pts</span>
          </div>
        </div>
      </div>

      {/* If Active Test is Running */}
      {activeTest ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-lg space-y-6">
          {/* Test Status Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {activeTest.titleEnglish}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Question {currentQuestionIdx + 1} of {activeTest.questions.length}
              </p>
            </div>

            {!isTestSubmitted && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-200 dark:border-amber-800">
                <Clock className="w-4 h-4 animate-spin" />
                <span>{formatTime(timeLeftSeconds)}</span>
              </div>
            )}
          </div>

          {/* Test Submission Summary if completed */}
          {isTestSubmitted && lastResult ? (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-6 animate-in fade-in">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                  <Trophy className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  Test Completed!
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Great effort! Here is your BSE Odisha rank & accuracy breakdown:
                </p>
              </div>

              {/* Stats Score Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-500 block">Score</span>
                  <span className="text-lg font-extrabold text-blue-600">
                    {lastResult.score} / {lastResult.totalMarks}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-500 block">Accuracy</span>
                  <span className="text-lg font-extrabold text-emerald-600">
                    {lastResult.accuracy}%
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-500 block">State Rank Est.</span>
                  <span className="text-lg font-extrabold text-amber-500">
                    #{Math.max(1, 100 - lastResult.accuracy)}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-500 block">Time Spent</span>
                  <span className="text-lg font-extrabold text-purple-600">
                    {formatTime(lastResult.timeSpentSeconds)}
                  </span>
                </div>
              </div>

              {/* Suggested Revision Chapters */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Suggested Revision Topics for You:</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  {lastResult.suggestedRevisionChapters.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setActiveTest(null)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
                >
                  Return to Tests Menu
                </button>
              </div>
            </div>
          ) : (
            /* Active Question Display */
            (() => {
              const q = activeTest.questions[currentQuestionIdx];
              const selectedOpt = selectedAnswers[q.id];

              return (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-md">
                      Difficulty: {q.difficulty}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {q.questionEnglish}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {q.questionOdia}
                    </p>
                  </div>

                  {/* Options List (MCQ) OR Reveal-Answer flow (short answer) */}
                  {q.questionType === 'short_answer' ? (
                    <ShortAnswerBlock
                      question={q}
                      language={language}
                      selected={selectedOpt}
                      onMark={(isCorrect) => handleSelectOption(q.id, isCorrect ? 1 : 0)}
                    />
                  ) : (
                    <div className="space-y-3">
                      {(language === 'Odia' ? q.optionsOdia : q.optionsEnglish).map(
                        (opt, oIdx) => {
                          const isSelected = selectedOpt === oIdx;
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, oIdx)}
                              className={`w-full p-4 rounded-2xl border text-left transition-all font-medium text-sm flex items-center justify-between ${
                                isSelected
                                  ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-700 dark:text-blue-300 shadow-sm'
                                  : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                            >
                              <span>{opt}</span>
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-slate-300'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}

                  {/* Question Controls Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <button
                      disabled={currentQuestionIdx === 0}
                      onClick={() => setCurrentQuestionIdx((p) => Math.max(0, p - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {currentQuestionIdx < activeTest.questions.length - 1 ? (
                      <button
                        onClick={() =>
                          setCurrentQuestionIdx((p) =>
                            Math.min(activeTest.questions.length - 1, p + 1)
                          )
                        }
                        className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
                      >
                        Next Question
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitTest}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
                      >
                        Submit Test Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })()
          )}
        </div>
      ) : (
        /* Test Menu View */
        <div className="space-y-6">
          {/* Mock Test List */}
          <div className="space-y-3">
            <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100">
              {language === 'Odia' ? 'ବୋର୍ଡ ମକ୍ ଟେଷ୍ଟ (Full Mock Tests)' : 'Full Board Mock Tests'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {classMockTests.map((test) => (
                <div
                  key={test.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
                      {test.classLevel} BSE Odisha
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {test.titleEnglish}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      {test.titleOdia}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {test.durationMinutes} Mins
                    </span>
                    <span>{test.totalMarks} Marks</span>
                    <span>{test.questions.length} Questions</span>
                  </div>

                  <button
                    onClick={() => handleStartTest(test)}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all text-center"
                  >
                    Start Timed Exam
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Statewide & District Leaderboard */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h2 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {language === 'Odia' ? 'ରାଜ୍ୟ o ଜିଲ୍ଲା ମେଧାବୀ ତାଲିକା' : 'Odisha Board Leaderboard'}
                </h2>
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                <button
                  onClick={() => setLeaderboardTab('State')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    leaderboardTab === 'State' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  State
                </button>
                <button
                  onClick={() => setLeaderboardTab('District')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    leaderboardTab === 'District' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  {student.district}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {LEADERBOARD_DATA.map((lb) => (
                <div
                  key={lb.rank}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                        lb.rank === 1
                          ? 'bg-amber-500 text-white'
                          : lb.rank === 2
                          ? 'bg-slate-300 text-slate-800'
                          : lb.rank === 3
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700'
                      }`}
                    >
                      {lb.rank}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100">{lb.name}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">
                        {lb.school} • {lb.district}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-extrabold text-blue-600 dark:text-blue-400 block">
                      {lb.points} Pts
                    </span>
                    <span className="text-[10px] text-amber-600 font-semibold">{lb.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
