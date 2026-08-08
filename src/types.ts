export type ClassLevel = 'Class 9' | 'Class 10';

export type LanguagePref = 'English' | 'Odia';

export type SubjectId = 
  | 'odia' 
  | 'english' 
  | 'math' 
  | 'physical_science' 
  | 'life_science' 
  | 'history_pol' 
  | 'geo_econ';

export interface Subject {
  id: SubjectId;
  nameEnglish: string;
  nameOdia: string;
  iconName: string;
  color: string;
  chaptersCount: number;
}

export interface Chapter {
  id: string;
  classLevel: ClassLevel;
  subjectId: SubjectId;
  chapterNumber: number;
  titleEnglish: string;
  titleOdia: string;
  summaryEnglish: string;
  summaryOdia: string;
  learningObjectives?: string[];
  realLifeApplications?: string[];
  examWeightageMarks?: number;
  lineByLineExplanation?: { paragraphNo: number; textEnglish: string; textOdia: string; keyNote?: string }[];
  formulas?: { name: string; formula: string; units: string; explanationOdia: string; trickToRemember?: string }[];
  diagrams?: { title: string; descriptionOdia: string; svgType?: 'cell' | 'photosynthesis' | 'triangle' | 'circuit' | 'flower' | 'atom' | 'map'; drawingSteps?: string[] }[];
  numericals?: { question: string; solutionSteps: string[]; finalAnswer: string }[];
  pyqs?: { year: string; question: string; answer: string; marks: number }[];
  hotsQuestions?: { question: string; answer: string }[];
  caseStudies?: { passage: string; questions: { q: string; a: string }[] }[];
  teacherNotes?: string[];
  keyWords: { word: string; meaningOdia: string; meaningEnglish: string }[];
  shortQuestions: { id: string; qEnglish: string; qOdia: string; answerEnglish: string; answerOdia: string; marks: number }[];
  longQuestions: { id: string; qEnglish: string; qOdia: string; answerEnglish: string; answerOdia: string; marks: number }[];
  fillInBlanks: { id: string; question: string; answer: string }[];
  trueFalse: { id: string; statement: string; isTrue: boolean; explanation: string }[];
  matchFollowing: { left: string; right: string }[];
  grammarNotes?: string[];
  examTips: string[];
  pdfUrl?: string;
  isPremium?: boolean;
}

export interface QuizQuestion {
  id: string;
  classLevel: ClassLevel;
  subjectId: SubjectId;
  chapterId?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionEnglish: string;
  questionOdia: string;
  optionsEnglish: string[];
  optionsOdia: string[];
  correctOptionIndex: number;
  explanationEnglish: string;
  explanationOdia: string;
  /** 'mcq' (default) shows clickable options. 'short_answer' shows a reveal-the-answer flow
   *  for questions that don't naturally have multiple-choice options (e.g. board exam
   *  long/short answer questions imported from a PDF). */
  questionType?: 'mcq' | 'short_answer';
  modelAnswerEnglish?: string;
  modelAnswerOdia?: string;
}

export interface MockTest {
  id: string;
  titleEnglish: string;
  titleOdia: string;
  classLevel: ClassLevel;
  subjectId?: SubjectId; // undefined means full grand mock test
  durationMinutes: number;
  totalMarks: number;
  questions: QuizQuestion[];
  isPremium?: boolean;
}

export interface PDFDocument {
  id: string;
  titleEnglish: string;
  titleOdia: string;
  classLevel: ClassLevel;
  subjectId: SubjectId;
  category: 'Textbook' | 'Sample Paper' | 'Notes' | 'PYQ (Previous Year)';
  year?: string;
  sizeMB: number;
  isPremium: boolean;
  downloadUrl: string;
  pagesCount: number;
}

export interface GrammarTopic {
  id: string;
  titleEnglish: string;
  titleOdia: string;
  rules: { ruleEnglish: string; ruleOdia: string; exampleEnglish: string; exampleOdia: string }[];
  practiceQuestions: { sentence: string; options: string[]; answer: string; explanation: string }[];
}

export interface StudentProfile {
  name: string;
  mobile: string;
  email: string;
  classLevel: ClassLevel;
  school: string;
  district: string;
  language: LanguagePref;
  isPremium: boolean;
  streakDays: number;
  lastActiveDate: string;
  points: number;
  savedBookmarks: string[]; // chapter or question IDs
  downloadedPdfs: string[];
}

export interface TestResult {
  id: string;
  testId: string;
  testTitle: string;
  date: string;
  score: number;
  totalMarks: number;
  accuracy: number;
  timeSpentSeconds: number;
  wrongQuestionIds: string[];
  suggestedRevisionChapters: string[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  district: string;
  school: string;
  points: number;
  classLevel: ClassLevel;
  badge: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  titleOdia?: string;
  message: string;
  time: string;
  type: 'quiz' | 'mock' | 'notes' | 'system' | 'countdown';
  isRead: boolean;
}

export interface AIDoubtRequest {
  questionText: string;
  imageBase64?: string;
  mode: 'explain_simply' | 'detailed' | 'translate_odia' | 'translate_english' | 'important_points' | 'similar_questions' | 'practice_questions';
  classLevel: ClassLevel;
  subjectId?: SubjectId;
}

export interface AIDoubtResponse {
  answerText: string;
  odiaTranslation?: string;
  importantPoints?: string[];
  similarQuestions?: string[];
  practiceQuestions?: { question: string; answer: string }[];
}

export interface AIPlannerRequest {
  classLevel: ClassLevel;
  targetExamDate: string;
  dailyHours: number;
  focusSubjects: SubjectId[];
}

export interface AIPlannerResponse {
  weeklyRoutine: { day: string; subject: string; topic: string; durationMinutes: number }[];
  examTips: string[];
  overallAdvice: string;
}

export interface Flashcard {
  id: string;
  classLevel: ClassLevel;
  subjectId: SubjectId;
  category: 'Vocabulary' | 'Grammar' | 'Literature' | 'Science Term' | 'Math Formula' | 'General';
  frontText: string;
  frontOdia?: string;
  backDefinitionEnglish: string;
  backDefinitionOdia: string;
  exampleSentenceEnglish: string;
  exampleSentenceOdia: string;
  examContextTip?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  masteryStatus?: 'unseen' | 'review' | 'mastered';
}

export interface AIFlashcardsRequest {
  topicOrChapter: string;
  classLevel: ClassLevel;
  subjectId?: SubjectId;
  category?: string;
  count?: number;
}

export interface AIMockTestImportRequest {
  pdfBase64: string;
  classLevel: ClassLevel;
  subjectId?: SubjectId;
  titleEnglish: string;
  titleOdia?: string;
  durationMinutes?: number;
}

export interface AIMockTestImportResponse {
  titleEnglish: string;
  titleOdia: string;
  totalMarks: number;
  questions: QuizQuestion[];
}
