'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Code, Database, Brain, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
// 🟢 Import Context
import { useGlobalState } from '@/context/GlobalState';
import { toast } from 'sonner';

const difficulties = {
  easy: { color: 'from-green-500 to-emerald-500', text: 'text-green-400', border: 'border-green-500/30' },
  medium: { color: 'from-yellow-500 to-orange-500', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  hard: { color: 'from-red-500 to-pink-500', text: 'text-red-400', border: 'border-red-500/30' },
};

// 确保这里的 ID 与你的 context/mock DB 一致
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
    skills: ['PyTorch', 'Deep Learning', 'Computer Vision'],
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
    description: 'Implement Grovers search algorithm using Qiskit for optimization problems.',
    difficulty: 'hard',
    xp: 1500,
    skills: ['Qiskit', 'Python', 'Quantum Computing'],
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
  // 🟢 获取全局状态
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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
              <Target className="w-6 h-6 text-white" />
            </div>
            Quest Board
          </h1>
          <p className="text-muted-foreground text-lg">
            Join collaborative research projects and earn XP
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl px-6 py-3"
        >
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-accent" />
            <div>
              <p className="text-2xl font-bold">{quests.length}</p>
              <p className="text-xs text-muted-foreground">Quests Available</p>
            </div>
          </div>
        </motion.div>
      </div>

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
            className={`px-4 py-2 rounded-xl transition-all ${
              index === 0
                ? 'glass-strong border-2 border-primary/50 text-white'
                : 'glass hover:glass-strong'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quests.map((quest, index) => {
          const Icon = quest.icon;
          const difficultyStyle = difficulties[quest.difficulty as keyof typeof difficulties];
          const progress = (quest.participants.current / quest.participants.max) * 100;
          
          // 🟢 检查是否已参加
          const isJoined = user.activeQuests.includes(quest.id);

          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-colors ${isJoined ? 'border-primary/50 bg-primary/5' : ''}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${difficultyStyle.color} opacity-10`} />
              </div>

              <div className="absolute top-4 right-4 z-10">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${difficultyStyle.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              <div className="relative z-10">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full glass text-xs font-bold uppercase ${difficultyStyle.text} border ${difficultyStyle.border}`}>
                      {quest.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full glass-strong text-xs font-semibold text-accent flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      +{quest.xp} XP
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {quest.description}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {quest.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-lg glass text-xs font-medium border border-secondary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {isJoined ? quest.participants.current + 1 : quest.participants.current}/{quest.participants.max} Students
                      </span>
                    </div>
                    <span className="text-muted-foreground">{quest.timeEstimate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Team Progress</span>
                    <span>{isJoined ? 'Joined' : `${quest.participants.current}/${quest.participants.max}`}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isJoined ? '10%' : `${progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${difficultyStyle.color}`}
                    />
                  </div>
                </div>

                {/* 🟢 交互按钮 */}
                <motion.button
                  whileHover={!isJoined ? { scale: 1.02 } : {}}
                  whileTap={!isJoined ? { scale: 0.98 } : {}}
                  onClick={(e) => {
                    e.stopPropagation(); // 防止触发卡片点击（如果有的话）
                    if (!isJoined) handleJoin(quest.id, quest.xp);
                  }}
                  disabled={isJoined}
                  className={`w-full mt-4 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isJoined 
                      ? 'bg-slate-800 text-slate-400 cursor-default border border-white/5' 
                      : `bg-gradient-to-r ${difficultyStyle.color} text-white`
                  }`}
                >
                  {isJoined ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Active Quest
                    </>
                  ) : (
                    'Join Quest'
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="glass rounded-2xl p-6 text-center"
      >
        <h3 className="text-xl font-bold mb-2">Can't find what you're looking for?</h3>
        <p className="text-muted-foreground mb-4">
          Create your own quest and invite others to collaborate!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold neon-glow"
        >
          Create New Quest
        </motion.button>
      </motion.div>
    </motion.div>
  );
}