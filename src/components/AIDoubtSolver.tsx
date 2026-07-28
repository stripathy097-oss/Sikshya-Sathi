import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SAMPLE_DOUBT_PROMPTS, SUBJECTS } from '../data/odishaData';
import { solveDoubtWithAI } from '../services/aiService';
import {
  Sparkles,
  Camera,
  Upload,
  Mic,
  MicOff,
  Send,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Languages,
  BookOpen,
  HelpCircle,
  Lightbulb,
  FileQuestion,
  Loader2,
  Image as ImageIcon,
  X,
  Share2,
} from 'lucide-react';

export const AIDoubtSolver: React.FC = () => {
  const {
    classLevel,
    language,
    student,
    speakText,
    stopSpeaking,
    isSpeaking,
    setIsRazorpayOpen,
  } = useApp();

  const [questionText, setQuestionText] = useState('');
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<
    | 'explain_simply'
    | 'detailed'
    | 'translate_odia'
    | 'translate_english'
    | 'important_points'
    | 'similar_questions'
    | 'practice_questions'
  >('explain_simply');

  const [selectedSubject, setSelectedSubject] = useState<string>('english');
  const [loading, setLoading] = useState(false);
  const [responseAnswer, setResponseAnswer] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSolve = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!questionText.trim() && !imageBase64) return;

    setLoading(true);
    setResponseAnswer(null);

    try {
      const res = await solveDoubtWithAI({
        questionText,
        imageBase64: imageBase64 || undefined,
        mode: selectedMode,
        classLevel,
        subjectId: selectedSubject as any,
      });

      setResponseAnswer(res.answerText);
    } catch (err: any) {
      setResponseAnswer(
        'Unable to connect to AI server. Please check your network or Gemini API key in settings.\nError: ' +
          (err.message || String(err))
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceRecord = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser. Please type your question.');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = language === 'Odia' ? 'or-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);
    recognition.onerror = () => setIsRecording(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuestionText((prev) => (prev ? prev + ' ' + transcript : transcript));
    };

    recognition.start();
  };

  const handleCopy = () => {
    if (responseAnswer) {
      navigator.clipboard.writeText(responseAnswer);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-blue-500/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              {language === 'Odia' ? 'AI ସନ୍ଦେହ ସମାଧାନ କେନ୍ଦ୍ର' : 'AI Exam Doubt Solver'}
            </h1>
            <p className="text-xs text-blue-100 mt-1">
              Odisha Board (BSE Odisha) Exam Tutor • Powered by Gemini AI
            </p>
          </div>
        </div>
      </div>

      {/* Main Doubt Input Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-xs space-y-4">
        {/* Subject and Class context selection */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border-0 rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-blue-500"
            >
              {SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {language === 'Odia' ? s.nameOdia : s.nameEnglish}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
            {classLevel}
          </span>
        </div>

        {/* Text Area Input */}
        <div className="relative">
          <textarea
            rows={4}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder={
              language === 'Odia'
                ? 'ଏଠାରେ ଆପଣଙ୍କର ପ୍ରଶ୍ନ ଲେଖନ୍ତୁ କିମ୍ବା ତଳେ ଫଟୋ/ଭଏସ୍ ସ୍କାନ୍ କରନ୍ତୁ...'
                : 'Type or paste your BSE Odisha exam question here...'
            }
            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          {/* Voice Prompt Button */}
          <button
            onClick={handleVoiceRecord}
            className={`absolute right-3 bottom-3 p-2.5 rounded-xl transition-all ${
              isRecording
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300'
            }`}
            title="Voice input"
          >
            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>
        </div>

        {/* Uploaded Image Preview */}
        {imageBase64 && (
          <div className="relative w-fit">
            <img
              src={imageBase64}
              alt="Textbook Question Scan"
              className="w-32 h-32 object-cover rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs"
            />
            <button
              onClick={() => setImageBase64(null)}
              className="absolute -top-2 -right-2 p-1 rounded-full bg-rose-500 text-white hover:bg-rose-600 shadow-sm"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Input Attachments & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 text-xs font-semibold transition-colors"
            >
              <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Scan Question Photo</span>
            </button>
          </div>

          {/* AI Mode Selector Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Mode:</span>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value as any)}
              className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-0 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="explain_simply">Explain Simply (ସରଳ ବୁଝାମଣା)</option>
              <option value="detailed">Give Detailed Answer (ସମ୍ପୂର୍ଣ୍ଣ ଉତ୍ତର)</option>
              <option value="translate_odia">Translate to Odia (ଓଡ଼ିଆ ଅନୁବାଦ)</option>
              <option value="translate_english">Translate to English</option>
              <option value="important_points">Important Exam Points (ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସୂତ୍ର)</option>
              <option value="similar_questions">Similar Board Questions</option>
              <option value="practice_questions">Generate Practice MCQs</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSolve}
          disabled={loading || (!questionText.trim() && !imageBase64)}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all transform active:scale-[0.99]"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-white" />
              <span>Sikshya Sathi AI is thinking...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Ask AI Tutor Now</span>
            </>
          )}
        </button>

        {/* Sample Board Question Prompts */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Try Sample BSE Odisha Questions:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SAMPLE_DOUBT_PROMPTS.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setQuestionText(language === 'Odia' ? p.odia : p.english)}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/80 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 text-xs shrink-0 font-medium transition-colors border border-slate-200 dark:border-slate-600"
              >
                {language === 'Odia' ? p.odia : p.english}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Answer Output Display */}
      {responseAnswer && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-sm space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Exam Tutor Explanation
                </h3>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  Mode: {selectedMode}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  speakText(responseAnswer, language === 'Odia' ? 'or' : 'en')
                }
                className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                  isSpeaking
                    ? 'bg-rose-50 text-rose-600 border-rose-200'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}
                title="Read answer out loud"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={handleCopy}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200"
                title="Copy Answer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
            {responseAnswer}
          </div>
        </div>
      )}
    </div>
  );
};
