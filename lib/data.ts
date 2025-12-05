import { Database, Brain, Code, Zap, Target, Sparkles, BookOpen, Clock, TrendingUp, Award } from 'lucide-react';

// --- Types ---

export interface UserState {
  name: string;
  xp: number;
  level: number;
  activeQuests: number[]; // 存储 Quest ID
  mentors: string[]; // 存储 Mentor ID
  role: string;
  avatar: string;
}

export interface Quest {
  id: number;
  title: string;
  description: string;
  requirements?: string[]; // 任务要求
  difficulty: 'easy' | 'medium' | 'hard';
  xp: number;
  skills: string[];
  participants: { current: number; max: number };
  category: string;
  icon: any; // Lucide Icon component
  timeEstimate: string;
  status?: 'open' | 'in_progress' | 'completed';
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'busy' | 'away';
  tags: string[];
  bio: string;
  gradient?: string; // 用于头像背景
  field?: string;
  isNew?: boolean; // 标记是否为新连接
}

export interface Activity {
  id: number;
  type: 'quest' | 'mentor' | 'achievement';
  title: string;
  xp: string;
  time: string;
  color: string;
  bg: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any;
  color: string;
}

// --- Mock Data ---

export const INITIAL_USER: UserState = {
  name: "Alex Chen",
  role: "Computer Science • Stanford University",
  avatar: "https://i.pravatar.cc/300?u=alex_chen_stanford",
  xp: 12450,
  level: 12,
  activeQuests: [1], // 默认已参加 ID 为 1 的任务
  mentors: ['m1', 'm2'] // 默认有两个导师
};

export const ALL_QUESTS: Quest[] = [
  {
    id: 1,
    title: 'Data Cleaning for NLP Model',
    description: 'Help preprocess and clean a dataset of 50K research papers for sentiment analysis. You will be working with raw JSON data and converting it into a structured format suitable for BERT training.',
    requirements: ['Experience with Pandas', 'Basic Regex knowledge', 'Available for 2 weekly syncs'],
    difficulty: 'easy',
    xp: 500,
    skills: ['Python', 'Pandas', 'Data Science'],
    participants: { current: 2, max: 3 },
    category: 'Data Science',
    icon: Database,
    timeEstimate: '4-6 hours',
    status: 'in_progress'
  },
  {
    id: 2,
    title: 'Neural Network Architecture Design',
    description: 'Collaborate on designing a CNN architecture for medical image classification. We are testing a new attention mechanism for detecting anomalies in X-Ray scans.',
    requirements: ['Strong PyTorch skills', 'Read "Attention is All You Need"', 'Computer Vision background'],
    difficulty: 'hard',
    xp: 1200,
    skills: ['PyTorch', 'Deep Learning', 'Computer Vision'],
    participants: { current: 1, max: 2 },
    category: 'AI/ML',
    icon: Brain,
    timeEstimate: '12-15 hours',
    status: 'open'
  },
  {
    id: 3,
    title: 'Blockchain Smart Contract Audit',
    description: 'Review and test smart contracts for a decentralized voting system. Looking for vulnerabilities like reentrancy attacks and overflow issues.',
    requirements: ['Solidity expertise', 'Experience with Hardhat/Foundry', 'Security mindset'],
    difficulty: 'medium',
    xp: 800,
    skills: ['Solidity', 'Web3', 'Security'],
    participants: { current: 3, max: 4 },
    category: 'Web3',
    icon: Code,
    timeEstimate: '8-10 hours',
    status: 'open'
  },
  {
    id: 4,
    title: 'Quantum Algorithm Implementation',
    description: 'Implement Grover\'s search algorithm using Qiskit for optimization problems. This is a theoretical implementation aimed at benchmarking current quantum simulators.',
    requirements: ['Linear Algebra', 'Python proficiency', 'Basic Quantum Physics knowledge'],
    difficulty: 'hard',
    xp: 1500,
    skills: ['Qiskit', 'Python', 'Quantum'],
    participants: { current: 0, max: 2 },
    category: 'Quantum',
    icon: Zap,
    timeEstimate: '15-20 hours',
    status: 'open'
  },
  {
    id: 5,
    title: 'DNA Sequence Analysis Pipeline',
    description: 'Build an automated pipeline for analyzing genetic variants in cancer research using R and Python scripts.',
    requirements: ['Bioinformatics background', 'Scripting in R/Python', 'Data visualization skills'],
    difficulty: 'medium',
    xp: 900,
    skills: ['Bioinformatics', 'Python', 'R'],
    participants: { current: 2, max: 3 },
    category: 'Biotech',
    icon: Target,
    timeEstimate: '10-12 hours',
    status: 'open'
  },
  {
    id: 6,
    title: 'Research Paper Summarization Bot',
    description: 'Create an AI bot that generates concise summaries of academic papers. You will fine-tune a T5 model on scientific abstracts.',
    requirements: ['NLP fundamentals', 'HuggingFace ecosystem', 'Model fine-tuning experience'],
    difficulty: 'easy',
    xp: 600,
    skills: ['NLP', 'Transformers', 'Python'],
    participants: { current: 1, max: 3 },
    category: 'AI/ML',
    icon: Brain,
    timeEstimate: '6-8 hours',
    status: 'open'
  },
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'm1',
    name: 'Dr. Emily Watson',
    role: 'Prof. of Bio-Informatics',
    avatar: 'https://i.pravatar.cc/300?u=emily',
    status: 'online',
    tags: ['Genomics', 'Python', 'R'],
    bio: 'Looking for students interested in gene editing research.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'm2',
    name: 'Michael Chang',
    role: 'PhD Student · Quantum Lab',
    avatar: 'https://i.pravatar.cc/300?u=michael',
    status: 'busy',
    tags: ['Quantum Physics', 'Qiskit', 'Linear Algebra'],
    bio: 'Can help with quantum algorithms and circuit design.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mentor-sarah',
    name: 'Dr. Sarah Chen',
    role: 'AI Researcher · Stanford Lab',
    avatar: 'https://i.pravatar.cc/300?u=sarah_chen_ai_lab',
    status: 'online',
    tags: ['NLP', 'Transformers', 'Python'],
    bio: 'Specialized in Large Language Models. Also loves Sci-Fi!',
    gradient: 'from-purple-500 to-pink-500',
    isNew: true
  },
  {
    id: 'm4',
    name: 'Dr. Carlos Rodriguez',
    role: 'Blockchain Architect',
    avatar: 'https://i.pravatar.cc/300?u=carlos',
    status: 'online',
    tags: ['Web3', 'Solidity', 'Cryptography'],
    bio: 'Building decentralized identity solutions.',
    gradient: 'from-orange-500 to-red-500'
  }
];

export const RECENT_ACTIVITY: Activity[] = [
  {
    id: 1,
    type: 'quest',
    title: 'Completed "Data Cleaning for NLP"',
    xp: '+500 XP',
    time: '2 hours ago',
    color: 'border-primary/50',
    bg: 'bg-primary/10'
  },
  {
    id: 2,
    type: 'mentor',
    title: 'Session with Dr. Martinez',
    xp: '+200 XP',
    time: '1 day ago',
    color: 'border-secondary/50',
    bg: 'bg-secondary/10'
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Unlocked "Research Pioneer" Badge',
    xp: '+100 XP',
    time: '2 days ago',
    color: 'border-accent/50',
    bg: 'bg-accent/10'
  },
];

export const DASHBOARD_STATS: Stat[] = [
  { label: 'Active Quests', value: '3', icon: BookOpen, color: 'from-primary to-purple-500' },
  { label: 'Mentorship Hours', value: '12.5', icon: Clock, color: 'from-secondary to-blue-500' },
  { label: 'XP Earned', value: '2,450', icon: TrendingUp, color: 'from-accent to-teal-500' },
];