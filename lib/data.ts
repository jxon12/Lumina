// lib/data.ts

// 1. 定义类型，显得我们很专业
export interface Quest {
  id: number;
  title: string;
  xp: number;
  status: 'open' | 'in_progress' | 'completed';
}

export interface UserState {
  name: string;
  xp: number;
  level: number;
  activeQuests: number[]; // 存 Quest ID
}

// 2. 导出初始数据
export const INITIAL_USER: UserState = {
  name: "Tan Kenji",
  xp: 12450,
  level: 12,
  activeQuests: [1]
};

export const ALL_QUESTS: Quest[] = [
  { id: 1, title: 'Data Cleaning for NLP Model', xp: 500, status: 'in_progress' },
  { id: 2, title: 'Neural Network Arch', xp: 1200, status: 'open' },
  // ... copy others here
];