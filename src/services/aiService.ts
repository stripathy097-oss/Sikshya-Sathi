import { AIDoubtRequest, AIDoubtResponse, AIPlannerRequest, AIPlannerResponse, Flashcard, AIFlashcardsRequest, AIMockTestImportRequest, AIMockTestImportResponse } from '../types';

export async function solveDoubtWithAI(req: AIDoubtRequest): Promise<AIDoubtResponse> {
  try {
    const res = await fetch('/api/ai/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.details || err.error || 'Server error while solving doubt');
    }

    const data = await res.json();
    return {
      answerText: data.answerText,
    };
  } catch (error: any) {
    console.error('Error solving doubt:', error);
    throw error;
  }
}

export async function generateAIStudyPlanner(req: AIPlannerRequest): Promise<AIPlannerResponse> {
  try {
    const res = await fetch('/api/ai/planner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.details || err.error || 'Server error while generating planner');
    }

    const data = await res.json();
    return data.planner;
  } catch (error: any) {
    console.error('Error generating AI planner:', error);
    throw error;
  }
}

export async function checkGrammarWithAI(topic: string, userSentence: string): Promise<string> {
  try {
    const res = await fetch('/api/ai/grammar-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic, userSentence }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Server error checking grammar');
    }

    const data = await res.json();
    return data.result;
  } catch (error: any) {
    console.error('Error in grammar check:', error);
    throw error;
  }
}

export async function generateFlashcardsWithAI(req: AIFlashcardsRequest): Promise<Flashcard[]> {
  try {
    const res = await fetch('/api/ai/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.details || err.error || 'Server error generating flashcards');
    }

    const data = await res.json();
    return data.flashcards || [];
  } catch (error: any) {
    console.error('Error in generateFlashcardsWithAI:', error);
    throw error;
  }
}

export async function generateMockTestFromPdf(req: AIMockTestImportRequest): Promise<AIMockTestImportResponse> {
  try {
    const res = await fetch('/api/admin/mocktest-from-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.details || err.error || 'Server error converting PDF to mock test');
    }

    const data = await res.json();
    return {
      titleEnglish: data.titleEnglish,
      titleOdia: data.titleOdia,
      totalMarks: data.totalMarks,
      questions: data.questions || [],
    };
  } catch (error: any) {
    console.error('Error in generateMockTestFromPdf:', error);
    throw error;
  }
}

export async function saveMockTestToApp(mockTest: {
  titleEnglish: string;
  titleOdia: string;
  classLevel: string;
  subjectId?: string;
  durationMinutes: number;
  totalMarks: number;
  questions: any[];
}): Promise<{ status: string; id: string }> {
  const res = await fetch('/api/mocktests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mockTest),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.details || err.error || 'Failed to save mock test to the app.');
  }
  return res.json();
}

export async function fetchLiveMockTests(): Promise<any[]> {
  try {
    const res = await fetch('/api/mocktests');
    if (!res.ok) return [];
    const data = await res.json();
    return data.mockTests || [];
  } catch {
    return [];
  }
}

export async function submitLeaderboardEntry(entry: {
  name: string;
  district: string;
  school: string;
  points: number;
  classLevel: string;
}): Promise<void> {
  await fetch('/api/leaderboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  });
}

export async function fetchLiveLeaderboard(): Promise<any[]> {
  try {
    const res = await fetch('/api/leaderboard');
    if (!res.ok) return [];
    const data = await res.json();
    return data.leaderboard || [];
  } catch {
    return [];
  }
}

export async function generateChapterFromPdf(req: {
  pdfBase64: string;
  classLevel: string;
  subjectId: string;
  chapterNumber: number;
  titleEnglish?: string;
  titleOdia?: string;
}): Promise<any> {
  const res = await fetch('/api/admin/chapter-from-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.details || err.error || 'Failed to generate chapter from PDF');
  }
  const data = await res.json();
  return data.chapter;
}

export async function saveChapterToApp(chapter: any): Promise<void> {
  const res = await fetch('/api/chapters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chapter),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.details || err.error || 'Failed to save chapter to the app.');
  }
}

export async function fetchLiveChapters(): Promise<any[]> {
  try {
    const res = await fetch('/api/chapters');
    if (!res.ok) return [];
    const data = await res.json();
    return data.chapters || [];
  } catch {
    return [];
  }
}

export async function splitBookIntoChapters(pdfBase64: string): Promise<
  { chapterNumber: number; titleEnglish: string; titleOdia: string; rawText: string }[]
> {
  const res = await fetch('/api/admin/split-book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pdfBase64 }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.details || err.error || 'Failed to split the book into chapters');
  }
  const data = await res.json();
  return data.chapters || [];
}

export async function generateChapterFromRawText(req: {
  rawText: string;
  classLevel: string;
  subjectId: string;
  chapterNumber: number;
  titleEnglish?: string;
  titleOdia?: string;
}): Promise<any> {
  const res = await fetch('/api/admin/chapter-from-pdf', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.details || err.error || 'Failed to generate chapter');
  }
  const data = await res.json();
  return data.chapter;
}
