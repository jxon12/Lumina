'use client';

import { useState } from 'react';
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
    color: 'border-primary/30',
  },
  {
    id: 2,
    type: 'mentor',
    title: 'Session with Dr. Martinez',
    xp: '+200 XP',
    time: '1 day ago',
    color: 'border-secondary/30',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'Unlocked "Research Pioneer" Badge',
    xp: '+100 XP',
    time: '2 days ago',
    color: 'border-accent/30',
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
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';
  const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            {greeting}, <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Alex</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Ready to ignite some sparks today?
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden glass rounded-3xl p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Daily Inspiration</h2>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{randomInspiration}"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ backgroundImage: `linear-gradient(135deg, hsl(var(--${stat.color.split(' ')[0].split('-')[1]}) / 0.1), transparent)` }} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </motion.div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass rounded-3xl p-6"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            Recent Activity
          </h2>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className={`glass rounded-xl p-4 border-l-4 ${activity.color} cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full glass-strong text-sm font-semibold text-accent">
                    {activity.xp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass rounded-3xl p-6"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Users className="w-6 h-6 text-secondary" />
            Your Network
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full glass-strong border-2 border-slate-950 flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 40}, 70%, 50%))`,
                  }}
                >
                  M{i}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full glass-strong border-2 border-slate-950 flex items-center justify-center text-sm font-medium">
                +8
              </div>
            </div>
            <div>
              <p className="font-medium">12 Active Connections</p>
              <p className="text-sm text-muted-foreground">4 mentors • 8 peers</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSparkOpen(true)}
        className="fixed bottom-24 lg:bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center neon-glow shadow-2xl z-40 cursor-pointer"
      >
        <Sparkles className="w-8 h-8 text-white" />
      </motion.button>

      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </>
  );
}
