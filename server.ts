import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

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

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'Sikshya Sathi Backend' });
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
