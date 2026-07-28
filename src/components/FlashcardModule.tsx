import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FLASHCARDS_DATA, CHAPTERS_DATA, SUBJECTS } from '../data/odishaData';
import { generateFlashcardsWithAI } from '../services/aiService';
import { Flashcard, SubjectId, ClassLevel } from '../types';
import {
  Sparkles,
  RotateCw,
  Volume2,
  CheckCircle2,
  XCircle,
  Star,
  Plus,
  BookOpen,
  Filter,
  Brain,
  Layers,
  Shuffle,
  RefreshCw,
  Search,
  Check,
  AlertCircle,
  Download,
  FileText,
  Loader2,
  ListFilter,
  GraduationCap,
  Award,
} from 'lucide-react';

export const FlashcardModule: React.FC = () => {
  const { classLevel, language, speakText, updateStudentProfile, student } = useApp();

  // Deck state initialized with preloaded flashcards
  const [deck, setDeck] = useState<Flashcard[]>(FLASHCARDS_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Active view mode: 'flip' | 'quiz' | 'library'
  const [studyMode, setStudyMode] = useState<'flip' | 'quiz' | 'library'>('flip');

  // Mastery Tracking State (cardId -> 'mastered' | 'review' | 'unseen')
  const [masteryState, setMasteryState] = useState<{ [id: string]: 'mastered' | 'review' | 'unseen' }>({});

  // Modals / Injection Forms State
  const [showAiModal, setShowAiModal] = useState(false);
  const [showChapterInjectModal, setShowChapterInjectModal] = useState(false);
  const [showAddCustomModal, setShowAddCustomModal] = useState(false);

  // AI Modal Inputs
  const [aiTopicInput, setAiTopicInput] = useState('');
  const [aiCategory, setAiCategory] = useState('Vocabulary');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Chapter Inject Input
  const [selectedChapterId, setSelectedChapterId] = useState<string>(CHAPTERS_DATA[0].id);

  // Custom Card Input
  const [customFront, setCustomFront] = useState('');
  const [customFrontOdia, setCustomFrontOdia] = useState('');
  const [customDefEng, setCustomDefEng] = useState('');
  const [customDefOdia, setCustomDefOdia] = useState('');
  const [customExampleEng, setCustomExampleEng] = useState('');
  const [customExampleOdia, setCustomExampleOdia] = useState('');
  const [customCategory, setCustomCategory] = useState<Flashcard['category']>('Vocabulary');
  const [customSubject, setCustomSubject] = useState<SubjectId>('english');

  // Filtered Cards
  const filteredDeck = deck.filter((card) => {
    const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSubject = selectedSubject === 'All' || card.subjectId === selectedSubject;
    const matchesSearch =
      !searchQuery.trim() ||
      card.frontText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.frontOdia && card.frontOdia.includes(searchQuery)) ||
      card.backDefinitionEnglish.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubject && matchesSearch;
  });

  const currentCard = filteredDeck[currentIndex] || filteredDeck[0];

  // Reset current index if filtered deck changes
  useEffect(() => {
    if (currentIndex >= filteredDeck.length) {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
  }, [selectedCategory, selectedSubject, searchQuery, deck]);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    if (filteredDeck.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredDeck.length);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    if (filteredDeck.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredDeck.length) % filteredDeck.length);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const markMastery = (cardId: string, status: 'mastered' | 'review' | 'unseen') => {
    setMasteryState((prev) => ({ ...prev, [cardId]: status }));
    if (status === 'mastered') {
      updateStudentProfile({ points: student.points + 10 });
    }
    handleNextCard();
  };

  // INJECTION HANDLER 1: AI Flashcards Generator
  const handleGenerateAiCards = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiTopicInput.trim()) return;

    setAiLoading(true);
    setAiError(null);

    try {
      const generatedCards = await generateFlashcardsWithAI({
        topicOrChapter: aiTopicInput,
        classLevel,
        category: aiCategory,
        count: 5,
      });

      if (generatedCards.length > 0) {
        setDeck((prev) => [...generatedCards, ...prev]);
        setShowAiModal(false);
        setAiTopicInput('');
        setCurrentIndex(0);
      } else {
        setAiError('No cards generated. Please try a different topic.');
      }
    } catch (err: any) {
      setAiError(err.message || 'Failed to generate flashcards with Gemini AI.');
    } finally {
      setAiLoading(false);
    }
  };

  // INJECTION HANDLER 2: Auto-Inject from Selected Chapter
  const handleInjectFromChapter = () => {
    const ch = CHAPTERS_DATA.find((c) => c.id === selectedChapterId);
    if (!ch) return;

    const extractedCards: Flashcard[] = ch.keyWords.map((kw, idx) => ({
      id: `ch_fc_${ch.id}_${idx}_${Date.now()}`,
      classLevel: ch.classLevel,
      subjectId: ch.subjectId,
      category: 'Vocabulary',
      frontText: kw.word,
      frontOdia: kw.meaningOdia,
      backDefinitionEnglish: kw.meaningEnglish,
      backDefinitionOdia: kw.meaningOdia,
      exampleSentenceEnglish: `Key word from Chapter "${ch.titleEnglish}".`,
      exampleSentenceOdia: `"${ch.titleOdia}" ଅଧ୍ୟାୟର ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଶବ୍ଦାର୍ଥ।`,
      examContextTip: `Extracted from Chapter ${ch.chapterNumber}: ${ch.titleEnglish}`,
      difficulty: 'Medium',
    }));

    if (extractedCards.length > 0) {
      setDeck((prev) => [...extractedCards, ...prev]);
      setShowChapterInjectModal(false);
      setCurrentIndex(0);
    }
  };

  // INJECTION HANDLER 3: Add Custom Card
  const handleAddCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customFront.trim() || !customDefEng.trim()) return;

    const newCard: Flashcard = {
      id: `custom_fc_${Date.now()}`,
      classLevel,
      subjectId: customSubject,
      category: customCategory,
      frontText: customFront,
      frontOdia: customFrontOdia || customFront,
      backDefinitionEnglish: customDefEng,
      backDefinitionOdia: customDefOdia || customDefEng,
      exampleSentenceEnglish: customExampleEng || 'Custom student practice card.',
      exampleSentenceOdia: customExampleOdia || 'ଛାତ୍ରଛାତ୍ରୀଙ୍କ ସ୍ୱୟଂ ପ୍ରସ୍ତୁତ କାର୍ଡ।',
      examContextTip: 'Custom study recall note',
      difficulty: 'Medium',
    };

    setDeck((prev) => [newCard, ...prev]);
    setShowAddCustomModal(false);

    // Reset inputs
    setCustomFront('');
    setCustomFrontOdia('');
    setCustomDefEng('');
    setCustomDefOdia('');
    setCustomExampleEng('');
    setCustomExampleOdia('');
    setCurrentIndex(0);
  };

  const categoriesList = ['All', 'Vocabulary', 'Grammar', 'Science Term', 'Math Formula', 'Literature'];

  // Calculate mastery progress stats
  const totalCards = filteredDeck.length;
  const masteredCount = filteredDeck.filter((c) => masteryState[c.id] === 'mastered').length;
  const reviewCount = filteredDeck.filter((c) => masteryState[c.id] === 'review').length;

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white shadow-xl shadow-teal-600/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold uppercase tracking-wider text-teal-100">
                  Active Recall Memory Engine
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight mt-0.5">
                {language === 'Odia' ? 'ସକ୍ରିୟ ସ୍ମରଣ (Active Recall) ଫ୍ଲାସକାର୍ଡ' : 'Active Recall Flashcards'}
              </h1>
              <p className="text-xs text-teal-100 mt-1">
                BSE Odisha Vocabulary, Grammar Rules, Science Terms & Math Formulas
              </p>
            </div>
          </div>

          {/* Action Header Buttons: Inject Content Options */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowAiModal(true)}
              className="px-3.5 py-2 rounded-xl bg-white text-teal-800 font-bold text-xs flex items-center gap-1.5 shadow-md hover:bg-teal-50 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI Flashcard Generator</span>
            </button>
            <button
              onClick={() => setShowChapterInjectModal(true)}
              className="px-3 py-2 rounded-xl bg-teal-800/80 hover:bg-teal-900 border border-teal-400/30 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <BookOpen className="w-4 h-4 text-emerald-300" />
              <span>Inject Chapter Cards</span>
            </button>
            <button
              onClick={() => setShowAddCustomModal(true)}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all"
              title="Add Custom Card"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mode Switcher & Stats Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-xs">
        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
          <button
            onClick={() => setStudyMode('flip')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              studyMode === 'flip'
                ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>3D Flip Mode</span>
          </button>
          <button
            onClick={() => setStudyMode('library')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              studyMode === 'library'
                ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Deck Library ({totalCards})</span>
          </button>
        </div>

        {/* Progress Metrics */}
        <div className="flex items-center gap-3 text-xs justify-around sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Mastered: <span className="font-bold text-emerald-600">{masteredCount}</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Review: <span className="font-bold text-amber-600">{reviewCount}</span>
            </span>
          </div>
          <button
            onClick={handleShuffle}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title="Shuffle Deck"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search terms or Odia..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* MAIN STUDY VIEW: 3D FLIP MODE */}
      {studyMode === 'flip' && (
        <div className="space-y-6">
          {filteredDeck.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
              <Brain className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                No Flashcards Found
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No cards match your filter. Generate new flashcards using Gemini AI or inject keywords from your chapters.
              </p>
              <button
                onClick={() => setShowAiModal(true)}
                className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Cards with AI</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Card Deck Progress Bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>
                  Card <strong className="text-teal-600 dark:text-teal-400">{currentIndex + 1}</strong> of{' '}
                  <strong>{filteredDeck.length}</strong>
                </span>
                <span className="text-[11px] font-bold text-slate-400">
                  {currentCard.category} • {currentCard.difficulty || 'Medium'}
                </span>
              </div>

              {/* 3D Interactive Flip Card Container */}
              <div className="relative min-h-[320px] md:min-h-[360px] w-full perspective-1000">
                <div
                  onClick={handleFlip}
                  className={`w-full min-h-[320px] md:min-h-[360px] rounded-3xl cursor-pointer transition-all duration-500 transform-style-3d shadow-xl relative border ${
                    isFlipped
                      ? 'bg-slate-900 text-white border-teal-500/50 [transform:rotateY(180deg)]'
                      : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700/80 hover:border-teal-400'
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-between backface-hidden rounded-3xl ${
                      isFlipped ? 'pointer-events-none' : ''
                    }`}
                  >
                    {/* Header tags on Front */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                        {currentCard.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(currentCard.frontText);
                          }}
                          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-100 transition-colors"
                          title="Listen Pronunciation"
                        >
                          <Volume2 className="w-4 h-4 text-teal-600" />
                        </button>
                      </div>
                    </div>

                    {/* Front Center Content */}
                    <div className="text-center my-auto space-y-3 py-4">
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-snug">
                        {currentCard.frontText}
                      </h2>
                      {currentCard.frontOdia && (
                        <p className="text-base md:text-lg font-semibold text-teal-600 dark:text-teal-400">
                          {currentCard.frontOdia}
                        </p>
                      )}
                    </div>

                    {/* Bottom Prompt */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50 text-xs text-slate-400">
                      <span className="flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400">
                        <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                        <span>Click card to reveal definition</span>
                      </span>
                      <span className="text-[11px] font-bold">Space / Tap</span>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-between backface-hidden rounded-3xl [transform:rotateY(180deg)] ${
                      !isFlipped ? 'pointer-events-none' : ''
                    }`}
                  >
                    {/* Header on Back */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-bold text-teal-400 flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        <span>Definition & Active Recall</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(currentCard.backDefinitionEnglish);
                        }}
                        className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                        title="Listen Definition"
                      >
                        <Volume2 className="w-4 h-4 text-teal-400" />
                      </button>
                    </div>

                    {/* Back Center Details */}
                    <div className="my-auto space-y-3 py-2 text-left">
                      <div className="space-y-1">
                        <h3 className="text-sm md:text-base font-bold text-slate-100 leading-relaxed">
                          {currentCard.backDefinitionEnglish}
                        </h3>
                        {currentCard.backDefinitionOdia && (
                          <p className="text-xs md:text-sm font-medium text-emerald-300">
                            ଓଡ଼ିଆ: {currentCard.backDefinitionOdia}
                          </p>
                        )}
                      </div>

                      {/* Example sentence */}
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-teal-400 block">
                          Example Sentence:
                        </span>
                        <p className="italic">"{currentCard.exampleSentenceEnglish}"</p>
                        {currentCard.exampleSentenceOdia && (
                          <p className="text-slate-400 text-[11px]">"{currentCard.exampleSentenceOdia}"</p>
                        )}
                      </div>

                      {currentCard.examContextTip && (
                        <div className="text-[11px] text-amber-300 flex items-center gap-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{currentCard.examContextTip}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Back Prompt */}
                    <div className="pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
                      <span>Rate your recall to advance to next card</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTIVE RECALL ASSESSMENT CONTROLS */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <button
                  onClick={() => markMastery(currentCard.id, 'review')}
                  className="py-3 px-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 font-bold text-xs hover:bg-rose-100 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span>Needs Practice 🔴</span>
                </button>

                <button
                  onClick={() => markMastery(currentCard.id, 'unseen')}
                  className="py-3 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <RotateCw className="w-4 h-4 text-slate-500" />
                  <span>Got It Right 🟢</span>
                </button>

                <button
                  onClick={() => markMastery(currentCard.id, 'mastered')}
                  className="py-3 px-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Mastered! ⭐ (+10)</span>
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevCard}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50"
                >
                  ← Previous Card
                </button>
                <button
                  onClick={handleNextCard}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md shadow-teal-500/20"
                >
                  Next Card →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* LIBRARY VIEW: GRID / LIST OF ALL FLASHCARDS */}
      {studyMode === 'library' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDeck.map((card) => {
              const status = masteryState[card.id];
              return (
                <div
                  key={card.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-teal-400 transition-all shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300">
                      {card.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {status === 'mastered' && (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          Mastered ⭐
                        </span>
                      )}
                      <button
                        onClick={() => speakText(card.frontText)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {card.frontText}
                    </h3>
                    {card.frontOdia && (
                      <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                        {card.frontOdia}
                      </p>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/50 text-xs space-y-1">
                    <p className="text-slate-800 dark:text-slate-200 font-medium">
                      {card.backDefinitionEnglish}
                    </p>
                    {card.backDefinitionOdia && (
                      <p className="text-emerald-700 dark:text-emerald-300 text-[11px]">
                        ଓଡ଼ିଆ: {card.backDefinitionOdia}
                      </p>
                    )}
                  </div>

                  <div className="text-[11px] text-slate-500 italic">
                    "{card.exampleSentenceEnglish}"
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL 1: AI FLASHCARDS GENERATOR */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                  Generate Flashcards with AI
                </h3>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter any BSE Odisha textbook chapter or topic name to generate bilingual active recall cards.
            </p>

            <form onSubmit={handleGenerateAiCards} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Topic / Chapter Name:
                </label>
                <input
                  type="text"
                  value={aiTopicInput}
                  onChange={(e) => setAiTopicInput(e.target.value)}
                  placeholder="e.g. A Letter to God, Tenses, Photosynthesis, Trigonometry"
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Category:
                </label>
                <select
                  value={aiCategory}
                  onChange={(e) => setAiCategory(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                >
                  <option value="Vocabulary">Vocabulary Words</option>
                  <option value="Grammar">Grammar Rules</option>
                  <option value="Science Term">Science Key Concepts</option>
                  <option value="Math Formula">Math Formulas</option>
                  <option value="Literature">Literature & Poem Q&A</option>
                </select>
              </div>

              {aiError && (
                <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{aiError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={aiLoading || !aiTopicInput.trim()}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 disabled:opacity-50"
              >
                {aiLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                <span>Generate 5 Flashcards</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: AUTO-INJECT FROM TEXTBOOK CHAPTER */}
      {showChapterInjectModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                  Inject Chapter Flashcards
                </h3>
              </div>
              <button
                onClick={() => setShowChapterInjectModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Automatically extract vocabulary and key terms from official BSE Odisha textbook chapters into your flashcard deck.
            </p>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Select Textbook Chapter:
              </label>
              <select
                value={selectedChapterId}
                onChange={(e) => setSelectedChapterId(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
              >
                {CHAPTERS_DATA.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.classLevel} • {ch.titleEnglish} ({ch.titleOdia})
                  </option>
                ))}
              </select>

              <button
                onClick={handleInjectFromChapter}
                className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-teal-700"
              >
                <Download className="w-4 h-4" />
                <span>Inject Chapter Vocabulary</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD CUSTOM FLASHCARD */}
      {showAddCustomModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                Create Custom Flashcard
              </h3>
              <button
                onClick={() => setShowAddCustomModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCustomCard} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Front Text (English Word / Concept):
                </label>
                <input
                  type="text"
                  value={customFront}
                  onChange={(e) => setCustomFront(e.target.value)}
                  placeholder="e.g. Melancholy"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Front Odia Meaning:
                </label>
                <input
                  type="text"
                  value={customFrontOdia}
                  onChange={(e) => setCustomFrontOdia(e.target.value)}
                  placeholder="e.g. ବିଷାଦଗ୍ରସ୍ତ"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Back English Definition:
                </label>
                <textarea
                  rows={2}
                  value={customDefEng}
                  onChange={(e) => setCustomDefEng(e.target.value)}
                  placeholder="e.g. A feeling of pensive sadness with no obvious cause."
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Back Odia Definition:
                </label>
                <textarea
                  rows={2}
                  value={customDefOdia}
                  onChange={(e) => setCustomDefOdia(e.target.value)}
                  placeholder="e.g. ଗଭୀର ମନୋଦୁଃଖ ବା ବିଷାଦଗ୍ରସ୍ତ ଅବସ୍ଥା।"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Example Sentence (English):
                </label>
                <input
                  type="text"
                  value={customExampleEng}
                  onChange={(e) => setCustomExampleEng(e.target.value)}
                  placeholder="e.g. The solitary reaper sang a melancholic song."
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-200 dark:border-slate-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md hover:bg-teal-700"
              >
                Save Flashcard
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
