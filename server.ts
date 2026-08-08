import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import pdfParse from 'pdf-parse';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

dotenv.config();

const app = express();
app.use(express.json({ limit: '15mb' }));

const PORT = 3000;

// Initialize Gemini SDK with User-Agent as required by system guidelines
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Initialize Firebase Admin (Firestore) for persistent storage of admin-uploaded content.
// Expects FIREBASE_SERVICE_ACCOUNT env var to contain the full service-account JSON (as a string).
let db: Firestore | null = null;
try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    if (!getApps().length) {
      initializeApp({
        credential: cert(serviceAccount),
      });
    }
    db = getFirestore();
    console.log('✅ Firebase Firestore connected.');
  } else {
    console.warn('⚠️  FIREBASE_SERVICE_ACCOUNT not set — admin-uploaded content will not be saved permanently.');
  }
} catch (err) {
  console.error('❌ Failed to initialize Firebase Admin:', err);
}

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Sikshya Sathi Backend', database: db ? 'connected' : 'not configured' });
});

/**
 * Save an admin-generated (or admin-created) mock test permanently to Firestore.
 */
app.post('/api/mocktests', async (req, res) => {
  try {
    if (!db) {
      return res.status(503).json({ error: 'Database not configured. Please set up FIREBASE_SERVICE_ACCOUNT first.' });
    }
    const mockTest = req.body;
    if (!mockTest.titleEnglish || !Array.isArray(mockTest.questions)) {
      return res.status(400).json({ error: 'Invalid mock test payload.' });
    }
    const id = mockTest.id || `mock_${Date.now()}`;
    await db.collection('mockTests').doc(id).set({ ...mockTest, id, createdAt: Date.now() });
    res.json({ status: 'success', id });
  } catch (error: any) {
    console.error('Error saving mock test:', error);
    res.status(500).json({ error: 'Failed to save mock test.', details: error.message || String(error) });
  }
});

/**
 * Fetch all mock tests that have been saved to Firestore by admins.
 * The frontend merges these with the built-in static mock tests.
 */
app.get('/api/mocktests', async (req, res) => {
  try {
    if (!db) {
      return res.json({ mockTests: [] }); // Gracefully degrade if DB isn't configured yet
    }
    const snapshot = await db.collection('mockTests').orderBy('createdAt', 'desc').get();
    const mockTests = snapshot.docs.map((doc) => doc.data());
    res.json({ mockTests });
  } catch (error: any) {
    console.error('Error fetching mock tests:', error);
    res.status(500).json({ error: 'Failed to fetch mock tests.', details: error.message || String(error) });
  }
});

/**
 * AI Doubt Solver API Route
 * Tailored for Odisha Board (BSE Odisha) Class 9 & 10 Students
 */
app.post('/api/ai/solve', async (req, res) => {
  try {
    const { questionText, imageBase64, mode, classLevel, subjectId } = req.body;

    if (!questionText && !imageBase64) {
      return res.status(400).json({ error: 'Please provide either a question or an image.' });
    }

    const systemInstruction = `
You are "Sikshya Sathi AI" (ଶିକ୍ଷା ସାଥୀ), an expert educational AI tutor specially designed for BSE Odisha (Board of Secondary Education, Odisha) Class 9 and Class 10 students.
You understand the exact Odisha Board (TBW / NCERT) curriculum, marking scheme, exam pattern, Odia terminology, and English/Odia bilingual explanations.

Student Details:
- Class: ${classLevel || 'Class 10'}
- Target Subject: ${subjectId || 'General BSE Odisha Syllabus'}

Mode Requested: ${mode || 'explain_simply'}

Guidelines:
1. Provide accurate, exam-oriented explanations tailored to Odisha Board matriculation standard.
2. When answering, structure your response clearly with headings, key formulas, bullet points, and Odia translations where helpful.
3. If the user selects:
   - "explain_simply": Give a short, crystal-clear 3-paragraph summary with easy examples.
   - "detailed": Give a comprehensive answer with step-by-step working, diagrams/text layout, 2-mark & 5-mark answer strategy.
   - "translate_odia": Provide the response fully or substantially in clean, standard Odia script (ଓଡ଼ିଆ ଭାଷା).
   - "translate_english": Provide the response in clear, simple English.
   - "important_points": Highlight 5 crucial bullet points for board exam revision.
   - "similar_questions": Give 3 similar questions that appeared in past BSE Odisha exams with short hints.
   - "practice_questions": Generate 2 multiple choice questions (MCQs) and 1 short answer question with answers.
    `;

    const parts: any[] = [];

    if (imageBase64) {
      // Clean base64 header if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanBase64,
        },
      });
    }

    const promptText = questionText || 'Please solve and explain the question in this image for BSE Odisha board examination.';
    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: { parts },
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const answerText = response.text || 'Sorry, I could not generate an answer at this moment.';

    res.json({
      answerText,
      status: 'success',
    });
  } catch (error: any) {
    console.error('Error in /api/ai/solve:', error);
    res.status(500).json({
      error: 'Failed to solve doubt via Gemini AI.',
      details: error.message || String(error),
    });
  }
});

/**
 * AI Study Planner & Revision Schedule Route
 */
app.post('/api/ai/planner', async (req, res) => {
  try {
    const { classLevel, targetExamDate, dailyHours, focusSubjects } = req.body;

    const systemInstruction = `
You are an expert academic advisor for BSE Odisha board exams.
Generate a structured weekly study plan and revision strategy in JSON format.
    `;

    const prompt = `Generate a 7-day realistic study routine for a ${classLevel || 'Class 10'} student preparing for BSE Odisha Matric board exams.
Exam Date Target: ${targetExamDate || 'Next 3 months'}.
Daily Study Hours: ${dailyHours || 4} hours.
Focus Subjects: ${focusSubjects ? focusSubjects.join(', ') : 'Math, Physical Science, English, Odia'}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            weeklyRoutine: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING },
                  subject: { type: Type.STRING },
                  topic: { type: Type.STRING },
                  durationMinutes: { type: Type.NUMBER },
                },
              },
            },
            examTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            overallAdvice: { type: Type.STRING },
          },
        },
      },
    });

    const jsonText = response.text || '{}';
    const parsedData = JSON.parse(jsonText);

    res.json({
      status: 'success',
      planner: parsedData,
    });
  } catch (error: any) {
    console.error('Error in /api/ai/planner:', error);
    res.status(500).json({
      error: 'Failed to generate study plan.',
      details: error.message || String(error),
    });
  }
});

/**
 * AI Grammar & Vocabulary Practice Helper Route
 */
app.post('/api/ai/grammar-check', async (req, res) => {
  try {
    const { topic, userSentence } = req.body;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `You are an Odia-English grammar teacher for BSE Odisha students.
Topic: ${topic || 'English & Odia Grammar'}
User Sentence / Expression: "${userSentence}"

Provide:
1. Correction (if needed)
2. Grammar Rule Explanation in simple English and Odia (ଓଡ଼ିଆ)
3. 2 Example Sentences in both languages.`,
      config: {
        temperature: 0.5,
      },
    });

    res.json({
      status: 'success',
      result: response.text,
    });
  } catch (error: any) {
    console.error('Error in /api/ai/grammar-check:', error);
    res.status(500).json({ error: 'Failed to process grammar query.' });
  }
});

/**
 * AI Active Recall Flashcards Generator Endpoint
 */
app.post('/api/ai/flashcards', async (req, res) => {
  try {
    const { topicOrChapter, classLevel, subjectId, category, count } = req.body;

    const numCards = Math.min(Math.max(count || 5, 3), 10);
    const targetClass = classLevel || 'Class 10';
    const targetTopic = topicOrChapter || 'English Vocabulary & BSE Odisha Board Grammar';

    const systemInstruction = `
You are an expert BSE Odisha (Board of Secondary Education, Odisha) exam master and bilingual content creator for Class 9 and Class 10 students.
Generate ${numCards} high-quality, exam-oriented active recall flashcards in JSON format for the specified topic.
Each flashcard MUST include:
- frontText: Word, phrase, concept, term, or grammar rule in English
- frontOdia: Meaning or concept name in Odia script (ଓଡ଼ିଆ)
- backDefinitionEnglish: Precise, clear definition or rule explanation in English
- backDefinitionOdia: Translation/explanation in clear Odia (ଓଡ଼ିଆ)
- exampleSentenceEnglish: Contextual sentence or formula example in English
- exampleSentenceOdia: Example sentence translated into Odia
- examContextTip: 1-line BSE Odisha exam board tip or mark relevance
- difficulty: 'Easy' | 'Medium' | 'Hard'
- category: 'Vocabulary' | 'Grammar' | 'Literature' | 'Science Term' | 'Math Formula' | 'General'
    `;

    const prompt = `Topic/Chapter requested: "${targetTopic}". Class Level: "${targetClass}". Subject: "${subjectId || 'English/General Science/Math'}". Category focus: "${category || 'Mixed'}". Generate ${numCards} active recall flashcards.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            flashcards: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  frontText: { type: Type.STRING },
                  frontOdia: { type: Type.STRING },
                  backDefinitionEnglish: { type: Type.STRING },
                  backDefinitionOdia: { type: Type.STRING },
                  exampleSentenceEnglish: { type: Type.STRING },
                  exampleSentenceOdia: { type: Type.STRING },
                  examContextTip: { type: Type.STRING },
                  difficulty: { type: Type.STRING },
                  category: { type: Type.STRING },
                },
              },
            },
          },
        },
      },
    });

    const jsonText = response.text || '{"flashcards": []}';
    const parsedData = JSON.parse(jsonText);

    // Format generated cards with IDs and metadata
    const cards = (parsedData.flashcards || []).map((card: any, idx: number) => ({
      id: `ai_fc_${Date.now()}_${idx}`,
      classLevel: targetClass,
      subjectId: subjectId || 'english',
      category: card.category || category || 'Vocabulary',
      frontText: card.frontText || 'Vocabulary Word',
      frontOdia: card.frontOdia || '',
      backDefinitionEnglish: card.backDefinitionEnglish || 'Definition',
      backDefinitionOdia: card.backDefinitionOdia || 'ଓଡ଼ିଆ ଅର୍ଥ',
      exampleSentenceEnglish: card.exampleSentenceEnglish || 'Example sentence.',
      exampleSentenceOdia: card.exampleSentenceOdia || 'ଉଦାହରଣ ବାକ୍ୟ।',
      examContextTip: card.examContextTip || 'BSE Odisha Exam revision concept.',
      difficulty: card.difficulty === 'Easy' || card.difficulty === 'Hard' ? card.difficulty : 'Medium',
    }));

    res.json({
      status: 'success',
      flashcards: cards,
    });
  } catch (error: any) {
    console.error('Error in /api/ai/flashcards:', error);
    res.status(500).json({
      error: 'Failed to generate flashcards using AI.',
      details: error.message || String(error),
    });
  }
});

/**
 * AI Mock Test Importer — reads an uploaded PDF (question paper / mock test)
 * and converts it into structured MCQ questions for the app's Mock Test system.
 */
app.post('/api/ai/import-mock-test', async (req, res) => {
  try {
    const { pdfBase64, classLevel, subjectId, titleEnglish, titleOdia, durationMinutes } = req.body;

    if (!pdfBase64) {
      return res.status(400).json({ error: 'Please upload a PDF file.' });
    }

    const cleanBase64 = pdfBase64.replace(/^data:application\/pdf;base64,/, '');

    const systemInstruction = `
You are "Sikshya Sathi AI" content digitizer for BSE Odisha (Board of Secondary Education, Odisha) Class 9 and 10 students.
You will be given a PDF of a question paper, mock test, or practice sheet.
Read the ENTIRE PDF carefully and extract every objective / multiple-choice question you can confidently identify.
For each question, produce:
- questionEnglish and questionOdia (translate/provide Odia version if the source is English-only, and vice versa)
- optionsEnglish and optionsOdia (exactly 4 options each)
- correctOptionIndex (0-3) based on the correct answer if shown in the PDF, or your own best subject-matter judgement if no answer key is present
- explanationEnglish and explanationOdia (a short 1-2 line reason the correct option is correct)
- difficulty: 'Easy' | 'Medium' | 'Hard' based on the question's complexity

Class: ${classLevel || 'Class 10'}
Subject: ${subjectId || 'General BSE Odisha Syllabus'}

If a question in the PDF is subjective/descriptive (not MCQ), SKIP it — only extract objective/MCQ-style questions.
Do not invent questions that are not present in the PDF.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: {
        parts: [
          { inlineData: { mimeType: 'application/pdf', data: cleanBase64 } },
          { text: 'Extract all objective/MCQ questions from this document as instructed.' },
        ],
      },
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionEnglish: { type: Type.STRING },
                  questionOdia: { type: Type.STRING },
                  optionsEnglish: { type: Type.ARRAY, items: { type: Type.STRING } },
                  optionsOdia: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctOptionIndex: { type: Type.NUMBER },
                  explanationEnglish: { type: Type.STRING },
                  explanationOdia: { type: Type.STRING },
                  difficulty: { type: Type.STRING },
                },
              },
            },
          },
        },
      },
    });

    const jsonText = response.text || '{"questions": []}';
    const parsedData = JSON.parse(jsonText);

    const questions = (parsedData.questions || []).map((q: any, idx: number) => ({
      id: `imported_${Date.now()}_${idx}`,
      classLevel: classLevel || 'Class 10',
      subjectId: subjectId || 'english',
      difficulty: q.difficulty === 'Easy' || q.difficulty === 'Hard' ? q.difficulty : 'Medium',
      questionEnglish: q.questionEnglish || '',
      questionOdia: q.questionOdia || '',
      optionsEnglish: q.optionsEnglish || [],
      optionsOdia: q.optionsOdia || [],
      correctOptionIndex: typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex : 0,
      explanationEnglish: q.explanationEnglish || '',
      explanationOdia: q.explanationOdia || '',
    }));

    res.json({
      status: 'success',
      titleEnglish: titleEnglish || 'Imported Mock Test',
      titleOdia: titleOdia || 'ଆମଦାନୀ ମକ୍ ଟେଷ୍ଟ',
      totalMarks: questions.length,
      durationMinutes: durationMinutes || Math.max(15, questions.length * 1.5),
      questions,
    });
  } catch (error: any) {
    console.error('Error in /api/ai/import-mock-test:', error);
    res.status(500).json({
      error: 'Failed to extract mock test from PDF.',
      details: error.message || String(error),
    });
  }
});

/**
 * Admin: Convert an uploaded PDF (question paper / practice set) into a
 * structured Mock Test (array of MCQs) using Gemini AI.
 */
app.post('/api/admin/mocktest-from-pdf', async (req, res) => {
  try {
    const { pdfBase64, classLevel, subjectId, titleEnglish, titleOdia, durationMinutes } = req.body;

    if (!pdfBase64) {
      return res.status(400).json({ error: 'Please upload a PDF file.' });
    }

    // 1. Extract raw text from the PDF
    const cleanBase64 = pdfBase64.replace(/^data:application\/pdf;base64,/, '');
    const pdfBuffer = Buffer.from(cleanBase64, 'base64');
    const parsed = await pdfParse(pdfBuffer);
    const extractedText = (parsed.text || '').trim();

    if (!extractedText) {
      return res.status(400).json({ error: 'Could not read any text from this PDF. Please upload a text-based PDF (not a scanned image).' });
    }

    // 2. Ask Gemini to convert the raw question-paper text into structured MCQs
    const systemInstruction = `
You are an expert BSE Odisha (Board of Secondary Education, Odisha) exam content editor.
You will receive raw text extracted from a question paper or practice-question PDF.
Convert it into a clean list of questions suitable for a mock test app. Questions can be either
multiple-choice (MCQ) or short/long-answer (subjective) — keep them as whichever type they
naturally are in the source.

Rules:
1. If the source question already has clear options, use them exactly as MCQ options.
2. If the source question is a short-answer / long-answer / subjective question (no options given,
   e.g. "Explain why...", "What happened when..."), do NOT invent fake multiple-choice options.
   Leave optionsEnglish and optionsOdia as empty arrays, and instead write the correct/model
   answer in explanationEnglish and explanationOdia (2-4 sentences, exam-appropriate).
2. Always provide a short explanation for the correct answer.
3. Provide both English and Odia versions of the question, options, and explanation.
4. Skip anything that is not a real question (headers, instructions, marks distribution tables, etc).
5. Assign difficulty ('Easy' | 'Medium' | 'Hard') based on how conceptually hard the question is.

CRITICAL OUTPUT RULES (follow strictly):
- Every text field must contain ONLY the final, clean, human-readable sentence — nothing else.
- NEVER include your own reasoning, notes-to-self, planning text, or placeholder/status phrases
  (for example: never write things like "OKAY_FINISHED", "LETS_WRITE", "PLACEHOLDER", or any
  ALL_CAPS_WITH_UNDERSCORES text). If you catch yourself about to write anything like that, stop
  and just write the clean translated sentence instead.
- Do not repeat the same sentence multiple times in one field.
- Keep each question, option, and explanation short and exam-appropriate (one or two sentences).
- Generate AT MOST 15 questions total, even if the source PDF has more. Prioritize the clearest,
  most complete questions if you have to choose.
    `;

    const prompt = `Class Level: ${classLevel || 'Class 10'}\nSubject: ${subjectId || 'General'}\n\nRaw extracted PDF text:\n"""\n${extractedText.slice(0, 15000)}\n"""\n\nConvert this into structured MCQs as per the instructions (max 15 questions). Remember: output only clean final English/Odia text in every field, no reasoning or placeholder tokens.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.4,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionEnglish: { type: Type.STRING },
                  questionOdia: { type: Type.STRING },
                  optionsEnglish: { type: Type.ARRAY, items: { type: Type.STRING } },
                  optionsOdia: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctOptionIndex: { type: Type.NUMBER },
                  explanationEnglish: { type: Type.STRING },
                  explanationOdia: { type: Type.STRING },
                  difficulty: { type: Type.STRING },
                },
              },
            },
          },
        },
      },
    });

    const jsonText = response.text || '{"questions": []}';
    let parsedData: any;
    try {
      parsedData = JSON.parse(jsonText);
    } catch (parseErr) {
      console.error('[mocktest-from-pdf] JSON parse failed (likely truncated AI response). Length:', jsonText.length);
      return res.status(422).json({
        error: 'The AI response was too long and got cut off. Please try a shorter PDF (fewer questions), or split it into smaller PDFs and upload each separately.',
      });
    }

    // Sanitize: strip any leaked reasoning/placeholder tokens (e.g. ALL_CAPS_WITH_UNDERSCORES
    // runs, or suspiciously long fields) that a model occasionally leaks into its output.
    const sanitizeText = (raw: any): string => {
      if (typeof raw !== 'string') return '';
      let text = raw
        .replace(/\b[A-Z0-9]+(?:_[A-Z0-9]+){2,}\b/g, '') // remove CAPS_WITH_UNDERSCORES tokens
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (text.length > 400) text = text.slice(0, 400).trim();
      return text;
    };

    const isUsableField = (text: string) => text.length > 0 && text.length < 400;

    const questions = (parsedData.questions || [])
      .map((q: any, idx: number) => {
        const questionEnglish = sanitizeText(q.questionEnglish);
        const questionOdia = sanitizeText(q.questionOdia);
        const optionsEnglish = Array.isArray(q.optionsEnglish) ? q.optionsEnglish.map(sanitizeText).filter(Boolean) : [];
        const optionsOdia = Array.isArray(q.optionsOdia) ? q.optionsOdia.map(sanitizeText).filter(Boolean) : [];
        const explanationEnglish = sanitizeText(q.explanationEnglish);
        const explanationOdia = sanitizeText(q.explanationOdia);

        // If the source question genuinely didn't have (or the AI couldn't produce) at least
        // 2 real options, don't invent fake "Option 1/2/3" choices — show it as a short-answer
        // question instead, where the student self-checks against the model answer.
        const hasRealOptions = optionsEnglish.length >= 2;

        return {
          id: `mt_${Date.now()}_${idx}`,
          classLevel: classLevel || 'Class 10',
          subjectId: subjectId || 'english',
          difficulty: ['Easy', 'Medium', 'Hard'].includes(q.difficulty) ? q.difficulty : 'Medium',
          questionEnglish,
          questionOdia,
          questionType: hasRealOptions ? 'mcq' : 'short_answer',
          optionsEnglish: hasRealOptions ? optionsEnglish : [],
          optionsOdia: hasRealOptions ? optionsOdia : [],
          correctOptionIndex: hasRealOptions
            ? (typeof q.correctOptionIndex === 'number' ? q.correctOptionIndex : 0)
            : 1, // sentinel used by the "I got it right" self-check button
          explanationEnglish,
          explanationOdia,
          modelAnswerEnglish: hasRealOptions ? undefined : (explanationEnglish || 'Answer not available.'),
          modelAnswerOdia: hasRealOptions ? undefined : (explanationOdia || ''),
        };
      })
      // Only drop a question if its actual question text is empty/broken after cleaning.
      .filter((q: any) => isUsableField(q.questionEnglish));

    console.log(`[mocktest-from-pdf] Raw questions from AI: ${(parsedData.questions || []).length}, usable after cleaning: ${questions.length}`);

    if (questions.length === 0) {
      return res.status(422).json({
        error: 'The AI could not generate clean questions from this PDF. Please try a different PDF, or one with clearer question text.',
      });
    }

    const mockTest = {
      titleEnglish: titleEnglish || 'AI Generated Mock Test',
      titleOdia: titleOdia || 'AI ଜେନେରେଟେଡ୍ ମକ୍ ଟେଷ୍ଟ',
      totalMarks: questions.length,
      questions,
    };

    res.json({
      status: 'success',
      ...mockTest,
    });
  } catch (error: any) {
    console.error('Error in /api/admin/mocktest-from-pdf:', error);
    res.status(500).json({
      error: 'Failed to convert PDF into a mock test.',
      details: error.message || String(error),
    });
  }
});

// Setup Vite Development Middleware or Static Production Server
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Sikshya Sathi server running on http://localhost:${PORT}`);
  });
}

setupServer();
