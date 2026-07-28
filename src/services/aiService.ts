import { AIDoubtRequest, AIDoubtResponse, AIPlannerRequest, AIPlannerResponse, Flashcard, AIFlashcardsRequest } from '../types';

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
