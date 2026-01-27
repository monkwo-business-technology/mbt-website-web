import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Tutorial, seedTutorials } from '@/data/tutorialsData';

// Generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 9) + Date.now().toString(36);

const STORAGE_KEY = 'monkwo-tutorials';

// Action types
type TutorialAction =
  | { type: 'SET_ALL'; payload: Tutorial[] }
  | { type: 'ADD'; payload: Tutorial }
  | { type: 'UPDATE'; payload: Tutorial }
  | { type: 'DELETE'; payload: string }
  | { type: 'SET_STATUS'; payload: { id: string; status: 'published' | 'draft' } };

interface TutorialState {
  tutorials: Tutorial[];
}

interface TutorialContextType {
  tutorials: Tutorial[];
  publishedTutorials: Tutorial[];
  draftTutorials: Tutorial[];
  addTutorial: (tutorial: Omit<Tutorial, 'id'>) => void;
  updateTutorial: (tutorial: Tutorial) => void;
  deleteTutorial: (id: string) => void;
  setTutorialStatus: (id: string, status: 'published' | 'draft') => void;
  getTutorialById: (id: string) => Tutorial | undefined;
  getTutorialBySlug: (slug: string) => Tutorial | undefined;
}

const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

function tutorialReducer(state: TutorialState, action: TutorialAction): TutorialState {
  switch (action.type) {
    case 'SET_ALL':
      return { tutorials: action.payload };
    case 'ADD':
      return { tutorials: [...state.tutorials, action.payload] };
    case 'UPDATE':
      return {
        tutorials: state.tutorials.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case 'DELETE':
      return {
        tutorials: state.tutorials.filter((t) => t.id !== action.payload),
      };
    case 'SET_STATUS':
      return {
        tutorials: state.tutorials.map((t) =>
          t.id === action.payload.id ? { ...t, status: action.payload.status } : t
        ),
      };
    default:
      return state;
  }
}

function loadInitialState(): TutorialState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return { tutorials: parsed };
      }
    }
  } catch {
    // ignore parse errors
  }
  return { tutorials: seedTutorials };
}

export function TutorialProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(tutorialReducer, undefined, loadInitialState);

  // Persist to localStorage whenever tutorials change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tutorials));
    } catch {
      // ignore storage errors
    }
  }, [state.tutorials]);

  const publishedTutorials = state.tutorials.filter((t) => t.status === 'published');
  const draftTutorials = state.tutorials.filter((t) => t.status === 'draft');

  const addTutorial = (tutorial: Omit<Tutorial, 'id'>) => {
    const newTutorial: Tutorial = { ...tutorial, id: generateId() } as Tutorial;
    dispatch({ type: 'ADD', payload: newTutorial });
  };

  const updateTutorial = (tutorial: Tutorial) => {
    dispatch({ type: 'UPDATE', payload: tutorial });
  };

  const deleteTutorial = (id: string) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const setTutorialStatus = (id: string, status: 'published' | 'draft') => {
    dispatch({ type: 'SET_STATUS', payload: { id, status } });
  };

  const getTutorialById = (id: string) => {
    return state.tutorials.find((t) => t.id === id);
  };

  const getTutorialBySlug = (slug: string) => {
    return state.tutorials.find((t) => t.slug === slug);
  };

  return (
    <TutorialContext.Provider
      value={{
        tutorials: state.tutorials,
        publishedTutorials,
        draftTutorials,
        addTutorial,
        updateTutorial,
        deleteTutorial,
        setTutorialStatus,
        getTutorialById,
        getTutorialBySlug,
      }}
    >
      {children}
    </TutorialContext.Provider>
  );
}

export function useTutorials(): TutorialContextType {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorials must be used within a TutorialProvider');
  }
  return context;
}
