import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECTS, CHAPTERS_DATA } from '../data/odishaData';
import { SubjectId, Chapter } from '../types';
import { fetchLiveChapters } from '../services/aiService';
import {
  BookOpen,
  Bookmark,
  BookmarkCheck,
  FileText,
  HelpCircle,
  CheckCircle2,
  ListOrdered,
  Lightbulb,
  ArrowLeft,
  Volume2,
  VolumeX,
  Lock,
  ChevronRight,
  Share2,
} from 'lucide-react';

export const LearnScreen: React.FC = () => {
  const {
    classLevel,
    setClassLevel,
    language,
    selectedSubjectId,
    setSelectedSubjectId,
    selectedChapter,
    setSelectedChapter,
    student,
    toggleBookmark,
    speakText,
    stopSpeaking,
    isSpeaking,
    setIsRazorpayOpen,
  } = useApp();

  const [activeNoteTab, setActiveNoteTab] = useState<
    'summary' | 'line_by_line' | 'formulas_numericals' | 'diagrams' | 'keywords' | 'short_qs' | 'long_qs' | 'pyqs' | 'fill_blanks' | 'mcqs' | 'practice_revision' | 'tips'
  >('summary');

  // Chapters generated from the official textbook PDF and published by an admin (live, database-backed)
  const [liveChapters, setLiveChapters] = useState<Chapter[]>([]);
  useEffect(() => {
    fetchLiveChapters().then((chapters) => setLiveChapters(chapters as Chapter[]));
  }, []);

  const allChapters = [...CHAPTERS_DATA, ...liveChapters];

  const filteredChapters = allChapters.filter(
    (ch) =>
      ch.classLevel === classLevel &&
      (!selectedSubjectId || ch.subjectId === selectedSubjectId) &&
      // Draft content is only visible to admins reviewing it in the Admin Panel — students
      // only ever see chapters that are explicitly published (or have no status set yet,
      // which covers the original seed chapters written before this field existed).
      ch.contentStatus !== 'draft'
  );

  const activeSubjectObj = SUBJECTS.find((s) => s.id === selectedSubjectId);


  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
            {language === 'Odia' ? 'ଅଧ୍ୟାୟ ଭିତ୍ତିକ ନୋଟ୍ସ o ପାଠ୍ୟକ୍ରମ' : 'Chapter Notes & Study Materials'}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            BSE Odisha Board • {classLevel} Syllabus
          </p>
        </div>

        {/* Class level pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl w-fit">
          <button
            onClick={() => setClassLevel('Class 9')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              classLevel === 'Class 9'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Class 9
          </button>
          <button
            onClick={() => setClassLevel('Class 10')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              classLevel === 'Class 10'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Class 10 (Matric)
          </button>
        </div>
      </div>

      {/* If Chapter is Selected -> Render Detailed View */}
      {selectedChapter ? (
        <div className="space-y-4">
          {/* Back & Title Header */}
          <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-xs">
            <button
              onClick={() => setSelectedChapter(null)}
              className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Chapters</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  speakText(
                    selectedChapter.summaryOdia || selectedChapter.summaryEnglish,
                    language === 'Odia' ? 'or' : 'en'
                  )
                }
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isSpeaking
                    ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:border-rose-900'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Listen (AI Voice)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleBookmark(selectedChapter.id)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
              >
                {student.savedBookmarks.includes(selectedChapter.id) ? (
                  <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Chapter Title Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-md">
              Chapter {selectedChapter.chapterNumber} • {selectedChapter.classLevel}
            </span>
            <h2 className="text-xl font-bold mt-2">{selectedChapter.titleEnglish}</h2>
            <p className="text-sm font-semibold text-blue-100 mt-1">{selectedChapter.titleOdia}</p>
          </div>

          {/* Chapter Section Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'summary', label: 'Summary & Overview' },
              { id: 'line_by_line', label: 'Line-by-Line Notes' },
              { id: 'formulas_numericals', label: 'Formulas & Numericals' },
              { id: 'diagrams', label: 'Diagrams & Visuals' },
              { id: 'keywords', label: 'Key Words & Vocab' },
              { id: 'short_qs', label: 'Short Qs & HOTS (2M)' },
              { id: 'long_qs', label: 'Long Qs & Cases (5M)' },
              { id: 'pyqs', label: 'Previous Year Board Qs' },
              { id: 'fill_blanks', label: 'Exercises (Fill/T-F/Match)' },
              { id: 'mcqs', label: 'MCQ Bank' },
              { id: 'practice_revision', label: 'Practice & Quick Revision' },
              { id: 'tips', label: 'Exam Tips & Teacher Notes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveNoteTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeNoteTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Cards */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
            {/* Summary & Overview */}
            {activeNoteTab === 'summary' && (
              <div className="space-y-4">
                {/* Weightage Banner */}
                {selectedChapter.examWeightageMarks && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <span>BSE Odisha Board Exam Weightage:</span>
                    <span className="px-2.5 py-1 bg-amber-200 dark:bg-amber-800 rounded-lg text-amber-950 dark:text-amber-100">
                      ~{selectedChapter.examWeightageMarks} Marks
                    </span>
                  </div>
                )}

                {/* Learning Objectives */}
                {selectedChapter.learningObjectives && (
                  <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 space-y-2">
                    <h3 className="font-bold text-xs text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                      🎯 Chapter Learning Objectives
                    </h3>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {selectedChapter.learningObjectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
                  <h3 className="font-bold text-xs text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-2">
                    English Concept Summary
                  </h3>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {selectedChapter.summaryEnglish}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900">
                  <h3 className="font-bold text-xs text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2">
                    ଓଡ଼ିଆ ସଂକ୍ଷେପ (Odia Concept Summary)
                  </h3>
                  <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {selectedChapter.summaryOdia}
                  </p>
                </div>

                {/* Real-Life Applications */}
                {selectedChapter.realLifeApplications && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 space-y-2">
                    <h3 className="font-bold text-xs text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                      🌍 Real-Life Applications
                    </h3>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {selectedChapter.realLifeApplications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Line-By-Line Notes */}
            {activeNoteTab === 'line_by_line' && (
              <div className="space-y-4">
                {selectedChapter.lineByLineExplanation && selectedChapter.lineByLineExplanation.length > 0 ? (
                  selectedChapter.lineByLineExplanation.map((lbl, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2"
                    >
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        Section / Para {lbl.paragraphNo}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                        {lbl.textEnglish}
                      </p>
                      <p className="text-xs text-teal-700 dark:text-teal-300 font-medium leading-relaxed">
                        ଓଡ଼ିଆ: {lbl.textOdia}
                      </p>
                      {lbl.keyNote && (
                        <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-[11px] font-semibold text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                          💡 Note: {lbl.keyNote}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500">
                    Line-by-line detailed textual explanations are included in official notes. Use Key Words tab or AI Doubt solver for additional line breakdowns.
                  </div>
                )}
              </div>
            )}

            {/* Formulas & Numericals */}
            {activeNoteTab === 'formulas_numericals' && (
              <div className="space-y-6">
                {/* Formulas List */}
                {selectedChapter.formulas && selectedChapter.formulas.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-bold text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      📐 Key Formulas & Equations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedChapter.formulas.map((f, i) => (
                        <div key={i} className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 space-y-1.5">
                          <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 block">{f.name}</span>
                          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 text-center text-sm font-mono font-bold text-blue-600 dark:text-blue-400 border border-indigo-100 dark:border-indigo-800">
                            {f.formula}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400"><strong>SI Unit:</strong> {f.units}</p>
                          <p className="text-xs text-teal-700 dark:text-teal-300"><strong>ଓଡ଼ିଆ ସ୍ପଷ୍ଟୀକରଣ:</strong> {f.explanationOdia}</p>
                          {f.trickToRemember && (
                            <p className="text-[11px] text-amber-700 dark:text-amber-300 font-semibold italic">⚡ Memory Trick: {f.trickToRemember}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step by Step Numericals */}
                {selectedChapter.numericals && selectedChapter.numericals.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      🔢 Solved Science & Math Numericals
                    </h3>
                    {selectedChapter.numericals.map((num, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2">
                        <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">
                          Problem {i + 1}: {num.question}
                        </h4>
                        <div className="pl-3 border-l-2 border-emerald-500 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                          <p className="font-semibold text-emerald-600 dark:text-emerald-400">Step-by-Step Solution:</p>
                          {num.solutionSteps.map((step, sIdx) => (
                            <p key={sIdx}>• {step}</p>
                          ))}
                        </div>
                        <div className="p-2 rounded bg-emerald-100 dark:bg-emerald-950/60 text-xs font-bold text-emerald-900 dark:text-emerald-200">
                          Final Answer: {num.finalAnswer}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {(!selectedChapter.formulas || selectedChapter.formulas.length === 0) &&
                 (!selectedChapter.numericals || selectedChapter.numericals.length === 0) && (
                  <div className="p-6 text-center text-xs text-slate-500">
                    This literature or social science chapter does not contain mathematical formulas. Check Key Words or Summary.
                  </div>
                 )}
              </div>
            )}

            {/* Diagrams & Visuals */}
            {activeNoteTab === 'diagrams' && (
              <div className="space-y-4">
                {selectedChapter.diagrams && selectedChapter.diagrams.length > 0 ? (
                  selectedChapter.diagrams.map((d, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">
                          🖼️ Diagram: {d.title}
                        </h4>
                      </div>

                      {/* Render Visual Representation Box */}
                      <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center space-y-2">
                        <div className="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 mx-auto flex items-center justify-center font-bold text-xs">
                          {d.svgType === 'cell' ? '🔬 CELL' : d.svgType === 'photosynthesis' ? '🌱 LEAF' : d.svgType === 'triangle' ? '📐 TRIG' : '⚡ CIRCUIT'}
                        </div>
                        <p className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                          {d.descriptionOdia}
                        </p>
                      </div>

                      {d.drawingSteps && (
                        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                          <span className="font-bold text-blue-700 dark:text-blue-300 block">
                            ✍️ How to Draw in BSE Board Exam:
                          </span>
                          <ol className="list-decimal list-inside space-y-0.5">
                            {d.drawingSteps.map((step, st) => (
                              <li key={st}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500">
                    No textbook diagrams required for this chapter.
                  </div>
                )}
              </div>
            )}

            {/* Key Words */}
            {activeNoteTab === 'keywords' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedChapter.keyWords.map((kw, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-blue-600 dark:text-blue-400">
                        {kw.word}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      ଓଡ଼ିଆ ଅର୍ଥ: {kw.meaningOdia}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Meaning: {kw.meaningEnglish}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Short Questions (2 Marks) & HOTS */}
            {activeNoteTab === 'short_qs' && (
              <div className="space-y-4">
                {selectedChapter.shortQuestions.map((sq, idx) => (
                  <div
                    key={sq.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        Question {idx + 1} ({sq.marks} Marks)
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {sq.qEnglish}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {sq.qOdia}
                    </p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                        Model Answer:
                      </span>
                      <p className="text-xs text-slate-800 dark:text-slate-200">
                        {sq.answerEnglish}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {sq.answerOdia}
                      </p>
                    </div>
                  </div>
                ))}

                {/* HOTS Questions */}
                {selectedChapter.hotsQuestions && selectedChapter.hotsQuestions.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                    <h3 className="font-bold text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      🧠 Higher Order Thinking Skills (HOTS)
                    </h3>
                    {selectedChapter.hotsQuestions.map((h, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 space-y-1">
                        <p className="font-bold text-xs text-purple-900 dark:text-purple-200">{h.question}</p>
                        <p className="text-xs text-slate-700 dark:text-slate-300"><strong>Answer:</strong> {h.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Long Questions (5 Marks) & Case Studies */}
            {activeNoteTab === 'long_qs' && (
              <div className="space-y-4">
                {selectedChapter.longQuestions.map((lq, idx) => (
                  <div
                    key={lq.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2"
                  >
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      Subjective Long Question ({lq.marks} Marks)
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {lq.qEnglish}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {lq.qOdia}
                    </p>
                    <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 mt-2 space-y-1">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block">
                        Detailed Exam Answer:
                      </span>
                      <p className="text-xs text-slate-800 dark:text-slate-200">
                        {lq.answerEnglish}
                      </p>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                        {lq.answerOdia}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Case Studies */}
                {selectedChapter.caseStudies && selectedChapter.caseStudies.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                    <h3 className="font-bold text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      📜 Case Study / Passage Based Questions
                    </h3>
                    {selectedChapter.caseStudies.map((cs, i) => (
                      <div key={i} className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 space-y-2">
                        <p className="text-xs font-serif italic text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-3 rounded-lg border border-amber-100 dark:border-amber-900">
                          "{cs.passage}"
                        </p>
                        {cs.questions.map((cq, qI) => (
                          <div key={qI} className="text-xs space-y-0.5">
                            <p className="font-bold text-amber-950 dark:text-amber-200">Q{qI+1}: {cq.q}</p>
                            <p className="text-slate-700 dark:text-slate-300">Ans: {cq.a}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Previous Year Questions */}
            {activeNoteTab === 'pyqs' && (
              <div className="space-y-4">
                {selectedChapter.pyqs && selectedChapter.pyqs.length > 0 ? (
                  selectedChapter.pyqs.map((p, i) => (
                    <div key={i} className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px]">
                          BSE Board Exam {p.year}
                        </span>
                        <span className="text-xs font-bold text-rose-800 dark:text-rose-300">
                          {p.marks} Marks
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100">{p.question}</h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-rose-200 dark:border-rose-900">
                        <strong>Model Answer:</strong> {p.answer}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500">
                    Solved previous year questions for this chapter will be updated with live board papers.
                  </div>
                )}
              </div>
            )}

            {/* Fill Blanks, True/False, Match */}
            {activeNoteTab === 'fill_blanks' && (
              <div className="space-y-6">
                {/* Fill Blanks */}
                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Fill in the Blanks
                  </h3>
                  {selectedChapter.fillInBlanks.map((fib, idx) => (
                    <div
                      key={fib.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                        {idx + 1}. {fib.question}
                      </span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-md">
                        {fib.answer}
                      </span>
                    </div>
                  ))}
                </div>

                {/* True / False */}
                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    True / False
                  </h3>
                  {selectedChapter.trueFalse.map((tf, idx) => (
                    <div
                      key={tf.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {idx + 1}. {tf.statement}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            tf.isTrue
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                              : 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
                          }`}
                        >
                          {tf.isTrue ? 'TRUE' : 'FALSE'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Explanation: {tf.explanation}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Match Following */}
                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    Match the Following
                  </h3>
                  {selectedChapter.matchFollowing.map((mf, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 text-xs font-medium"
                    >
                      <span className="text-slate-800 dark:text-slate-200">{mf.left}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        ➔ {mf.right}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MCQ Bank */}
            {activeNoteTab === 'mcqs' && (
              <div className="space-y-3">
                <h3 className="font-bold text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  MCQ Bank ({selectedChapter.mcqs?.length || 0} questions)
                </h3>
                {(!selectedChapter.mcqs || selectedChapter.mcqs.length === 0) && (
                  <div className="text-center py-8 text-xs text-slate-500 dark:text-slate-400">
                    MCQs for this chapter are being prepared.
                  </div>
                )}
                {selectedChapter.mcqs?.map((mcq, idx) => (
                  <div
                    key={mcq.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {idx + 1}. {language === 'Odia' ? mcq.questionOdia : mcq.questionEnglish}
                      </p>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                          mcq.difficulty === 'Easy'
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                            : mcq.difficulty === 'Medium'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300'
                            : 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
                        }`}
                      >
                        {mcq.difficulty}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {(language === 'Odia' ? mcq.optionsOdia : mcq.optionsEnglish).map((opt, oi) => (
                        <div
                          key={oi}
                          className={`text-[11px] px-2.5 py-1.5 rounded-lg ${
                            oi === mcq.correctOptionIndex
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-semibold'
                              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {String.fromCharCode(65 + oi)}. {opt} {oi === mcq.correctOptionIndex && '✓'}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                      {mcq.explanationEnglish}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Practice Set & Quick Revision */}
            {activeNoteTab === 'practice_revision' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    Practice Set ({selectedChapter.practiceQuestions?.length || 0} questions)
                  </h3>
                  {(!selectedChapter.practiceQuestions || selectedChapter.practiceQuestions.length === 0) && (
                    <div className="text-center py-6 text-xs text-slate-500 dark:text-slate-400">
                      Practice questions for this chapter are being prepared.
                    </div>
                  )}
                  {selectedChapter.practiceQuestions?.map((pq, idx) => (
                    <div
                      key={pq.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 space-y-1"
                    >
                      <span className="text-[9px] font-bold uppercase text-purple-500">{pq.type}</span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {idx + 1}. {pq.questionEnglish}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{pq.answerEnglish}</p>
                    </div>
                  ))}
                </div>

                {selectedChapter.quickRevision && selectedChapter.quickRevision.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      ⚡ Quick Revision
                    </h3>
                    <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                      {selectedChapter.quickRevision.map((point, i) => (
                        <p key={i} className="text-xs text-emerald-900 dark:text-emerald-200">
                          • {point}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Exam Tips & Teacher Notes */}
            {activeNoteTab === 'tips' && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    💡 High Yield Board Exam Tips
                  </h3>
                  {selectedChapter.examTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900"
                    >
                      <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                {selectedChapter.teacherNotes && selectedChapter.teacherNotes.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                    <h3 className="font-bold text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      👨‍🏫 Teacher & Classroom Resources
                    </h3>
                    {selectedChapter.teacherNotes.map((tn, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-xs text-teal-950 dark:text-teal-200">
                        • {tn}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Subject List & Chapters List */
        <div className="space-y-6">
          {/* Subject Filter Pills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Select Subject
            </h3>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedSubjectId(null)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedSubjectId === null
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                All Subjects
              </button>
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubjectId(s.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    selectedSubjectId === s.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {language === 'Odia' ? s.nameOdia : s.nameEnglish}
                </button>
              ))}
            </div>
          </div>

          {/* Chapters Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredChapters.length === 0 ? (
              <div className="col-span-full p-8 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  No chapters available for this subject yet.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select "All Subjects" or switch class level above.
                </p>
              </div>
            ) : (
              filteredChapters.map((ch) => {
                const isSaved = student.savedBookmarks.includes(ch.id);
                return (
                  <div
                    key={ch.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                          Chapter {ch.chapterNumber} • {ch.classLevel}
                        </span>
                        <button
                          onClick={() => toggleBookmark(ch.id)}
                          className="text-slate-400 hover:text-amber-500 transition-colors"
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                        {ch.titleEnglish}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {ch.titleOdia}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {ch.summaryEnglish}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {ch.shortQuestions.length} Short Qs • {ch.longQuestions.length} Long Qs
                      </span>

                      <button
                        onClick={() => setSelectedChapter(ch)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        <span>Read Notes</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
