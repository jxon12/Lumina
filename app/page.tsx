'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award, Users, Zap, BookOpen, Clock } from 'lucide-react';
import SparkMatchmaker from '@/components/SparkMatchmaker';

const stats = [
  { label: 'Active Quests', value: '3', icon: BookOpen, color: 'from-primary to-purple-500' },
  { label: 'Mentorship Hours', value: '12.5', icon: Clock, color: 'from-secondary to-blue-500' },
  { label: 'XP Earned', value: '2,450', icon: TrendingUp, color: 'from-accent to-teal-500' },
];

const recentActivity = [
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

const inspirations = [
  "Research is seeing what everyone else has seen and thinking what nobody else has thought.",
  "The best way to predict the future is to invent it.",
  "Innovation distinguishes between a leader and a follower.",
  "Discovery consists of seeing what everybody has seen and thinking what nobody has thought.",
];

export default function Home() {
  const [isSparkOpen, setIsSparkOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good morning');
  const [randomInspiration, setRandomInspiration] = useState(inspirations[0]);

  // 客户端挂载后计算时间，避免服务端渲染不一致
  useEffect(() => {
    const currentHour = new Date().getHours();
    setGreeting(currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening');
    setRandomInspiration(inspirations[Math.floor(Math.random() * inspirations.length)]);
  }, []);

  return (
    <>
      {/* 🟢 1. 氛围光背景 (Ambient Background) */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px] opacity-40 mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] opacity-40 mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 pb-24 lg:pb-0" // 移动端底部留白
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-2 tracking-tight"
          >
            {greeting}, <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Alex</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light"
          >
            Ready to ignite some sparks today?
          </motion.p>
        </div>

        {/* Daily Inspiration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden glass rounded-3xl p-8 border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow flex-shrink-0 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 text-white">Daily Inspiration</h2>
                <p className="text-lg text-slate-300 italic leading-relaxed font-serif">
                  "{randomInspiration}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🟢 2. 带有 "Internal Light" 动效的 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              {/* 流光背景特效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <TrendingUp className="w-5 h-5 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                <p className="text-3xl font-bold mb-1 text-white">{stat.value}</p>
                <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-3xl p-6 lg:p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <Award className="w-6 h-6 text-accent" />
                Recent Activity
              </h2>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                    className={`rounded-2xl p-4 border-l-4 ${activity.color} bg-white/5 cursor-pointer transition-colors`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-200 mb-1">{activity.title}</p>
                        <p className="text-sm text-slate-500">{activity.time}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-900/50 border border-white/5 text-sm font-semibold text-accent shadow-sm">
                        {activity.xp}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 🟢 3. Network Section - 使用真实头像 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass rounded-3xl p-6 lg:p-8 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                  <Users className="w-6 h-6 text-secondary" />
                  Your Network
                </h2>
                <p className="text-slate-400 mb-8">
                  You have connected with 12 amazing minds this week. Keep expanding your neural network!
                </p>
              </div>

              <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-300">Active Now</span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5, zIndex: 10 }}
                        className="relative z-0 hover:z-10 transition-all"
                      >
                        <img 
                          src={`https://i.pravatar.cc/150?u=lumina_user_${i * 10}`} 
                          alt="Peer" 
                          className="w-12 h-12 rounded-full border-2 border-slate-950 object-cover shadow-lg"
                        />
                      </motion.div>
                    ))}
                    <div className="w-12 h-12 rounded-full glass-strong border-2 border-slate-950 flex items-center justify-center text-sm font-bold text-white z-0">
                      +8
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white">12 Connections</p>
                    <p className="text-xs text-slate-400">4 mentors • 8 peers</p>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </motion.div>

      {/* 🟢 4. FAB 按钮 - 位置修复 */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSparkOpen(true)}
        className="fixed bottom-24 lg:bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center neon-glow shadow-2xl z-40 cursor-pointer border border-white/20"
      >
        <Sparkles className="w-8 h-8 text-white" />
      </motion.button>

      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </>
  );
}