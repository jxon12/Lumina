'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Code, Database, Brain, Sparkles, Trophy, CheckCircle2, Plus } from 'lucide-react';
import { useGlobalState } from '@/context/GlobalState';
import { toast } from 'sonner';

// 定义难度颜色映射，适配双模式
const difficulties = {
  easy: { 
    label: 'Easy',
    bg: 'bg-emerald-500/10', 
    text: 'text-emerald-600 dark:text-emerald-400', 
    border: 'border-emerald-500/20' 
  },
  medium: { 
    label: 'Medium',
    bg: 'bg-amber-500/10', 
    text: 'text-amber-600 dark:text-amber-400', 
    border: 'border-amber-500/20' 
  },
  hard: { 
    label: 'Hard',
    bg: 'bg-rose-500/10', 
    text: 'text-rose-600 dark:text-rose-400', 
    border: 'border-rose-500/20' 
  },
};

const quests = [
  {
    id: 1,
    title: 'Data Cleaning for NLP Model',
    description: 'Help preprocess and clean a dataset of 50K research papers for sentiment analysis.',
    difficulty: 'easy',
    xp: 500,
    skills: ['Python', 'Pandas', 'Data Science'],
    participants: { current: 2, max: 3 },
    category: 'Data Science',
    icon: Database,
    timeEstimate: '4-6 hours',
  },
  {
    id: 2,
    title: 'Neural Network Architecture Design',
    description: 'Collaborate on designing a CNN architecture for medical image classification.',
    difficulty: 'hard',
    xp: 1200,
    skills: ['PyTorch', 'Deep Learning', 'CV'],
    participants: { current: 1, max: 2 },
    category: 'AI/ML',
    icon: Brain,
    timeEstimate: '12-15 hours',
  },
  {
    id: 3,
    title: 'Blockchain Smart Contract Audit',
    description: 'Review and test smart contracts for a decentralized voting system.',
    difficulty: 'medium',
    xp: 800,
    skills: ['Solidity', 'Web3', 'Security'],
    participants: { current: 3, max: 4 },
    category: 'Web3',
    icon: Code,
    timeEstimate: '8-10 hours',
  },
  {
    id: 4,
    title: 'Quantum Algorithm Implementation',
    description: 'Implement Grover\'s search algorithm using Qiskit for optimization problems.',
    difficulty: 'hard',
    xp: 1500,
    skills: ['Qiskit', 'Python', 'Quantum'],
    participants: { current: 0, max: 2 },
    category: 'Quantum',
    icon: Zap,
    timeEstimate: '15-20 hours',
  },
  {
    id: 5,
    title: 'DNA Sequence Analysis Pipeline',
    description: 'Build an automated pipeline for analyzing genetic variants in cancer research.',
    difficulty: 'medium',
    xp: 900,
    skills: ['Bioinformatics', 'Python', 'R'],
    participants: { current: 2, max: 3 },
    category: 'Biotech',
    icon: Target,
    timeEstimate: '10-12 hours',
  },
  {
    id: 6,
    title: 'Research Paper Summarization Bot',
    description: 'Create an AI bot that generates concise summaries of academic papers.',
    difficulty: 'easy',
    xp: 600,
    skills: ['NLP', 'Transformers', 'Python'],
    participants: { current: 1, max: 3 },
    category: 'AI/ML',
    icon: Brain,
    timeEstimate: '6-8 hours',
  },
];

const filters = ['All', 'AI/ML', 'Data Science', 'Web3', 'Quantum', 'Biotech'];

export default function QuestsPage() {
  const { user, joinQuest } = useGlobalState();

  const handleJoin = (questId: number, xp: number) => {
    joinQuest(questId);
    toast.success("Quest Accepted!", {
      description: `You've joined the quest. Complete it to earn ${xp} XP.`
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* --- Header Section --- */}
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3 text-foreground tracking-tight">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            Quest Board
          </h1>
          <p className="text-muted-foreground text-lg ml-1">
            Collaborate on real-world research problems.
          </p>
        </div>

        {/* Stats Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-md border border-border rounded-full px-6 py-2 flex items-center gap-4 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-foreground">{quests.length}</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Available</span>
            </div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-foreground">5.2k</span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Total XP</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- Filters (修复颜色问题) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-2 flex-wrap"
      >
        {filters.map((filter, index) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
              index === 0
                ? 'bg-primary text-white shadow-primary/25' // 🔴 修复：Active 状态使用紫色底白字
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-transparent hover:border-border' // 🔴 修复：Inactive 状态适配深浅
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* --- Quest Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quests.map((quest, index) => {
          const Icon = quest.icon;
          // 类型断言修复 TS 索引错误
          const diffKey = quest.difficulty as keyof typeof difficulties;
          const style = difficulties[diffKey];
          const progress = (quest.participants.current / quest.participants.max) * 100;
          const isJoined = user.activeQuests.includes(quest.id);

          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.01, y: -2 }}
              // 🔴 升级：使用 bento-card 类
              className={`bento-card p-6 flex flex-col justify-between group ${isJoined ? 'border-primary/50 ring-1 ring-primary/20 bg-primary/5' : ''}`}
            >
              <div>
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${style.bg} ${style.text} ${style.border}`}>
                      {style.label}
                    </span>
                    {/* 🔴 修复：XP Badge 颜色 */}
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      +{quest.xp} XP
                    </span>
                  </div>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isJoined ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10'} transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {quest.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                  {quest.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {quest.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-secondary text-[11px] font-medium text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Action */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{quest.participants.current}/{quest.participants.max} Joined</span>
                  </div>
                  <span>{quest.timeEstimate}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isJoined ? '10%' : `${progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full rounded-full ${isJoined ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  />
                </div>

                {/* 🔴 交互按钮 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isJoined) handleJoin(quest.id, quest.xp);
                  }}
                  disabled={isJoined}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    isJoined 
                      ? 'bg-secondary text-muted-foreground cursor-default border border-border' 
                      : 'bg-foreground text-background hover:bg-primary hover:text-white shadow-lg hover:shadow-primary/25 active:scale-95'
                  }`}
                >
                  {isJoined ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Active Quest
                    </>
                  ) : (
                    <>
                      Join Quest
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
        
        {/* Create New Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bento-card p-6 flex flex-col items-center justify-center text-center gap-4 border-dashed border-2 border-border bg-transparent hover:bg-secondary/50 cursor-pointer group min-h-[300px]"
        >
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Create Custom Quest</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-[200px] mx-auto">
              Have a research idea? Recruit a team and start building.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}