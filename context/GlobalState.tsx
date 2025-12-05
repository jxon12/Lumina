'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Quest {
  id: number;
  title: string;
  xp: number;
  status: 'open' | 'in_progress' | 'completed';
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy';
}

export interface UserState {
  name: string;
  xp: number;
  level: number;
  activeQuests: number[]; 
  mentors: string[]; 
}

const INITIAL_USER: UserState = {
  name: "Alex Chen",
  xp: 12450,
  level: 12,
  activeQuests: [1],
  mentors: ['m1', 'm2']
};

interface GlobalContextType {
  user: UserState;
  addXp: (amount: number) => void;
  joinQuest: (id: number) => void;
  addMentor: (mentorId: string) => void;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserState>(INITIAL_USER);


  useEffect(() => {
    const saved = localStorage.getItem('lumina_user_state');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load state", e);
      }
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('lumina_user_state', JSON.stringify(user));
  }, [user]);

  const addXp = (amount: number) => {
    setUser(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  const joinQuest = (id: number) => {
    if (!user.activeQuests.includes(id)) {
      setUser(prev => ({ ...prev, activeQuests: [...prev.activeQuests, id] }));
    }
  };

  const addMentor = (mentorId: string) => {
    if (!user.mentors.includes(mentorId)) {
      setUser(prev => ({ ...prev, mentors: [mentorId, ...prev.mentors] }));
    }
  };

  return (
    <GlobalContext.Provider value={{ user, addXp, joinQuest, addMentor }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};