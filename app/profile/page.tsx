'use client';

import { motion } from 'framer-motion';
import { User, Award, Trophy, Star, TrendingUp, Target, Users, Zap, Code, Brain, Sparkles } from 'lucide-react';

const achievements = [
  { id: 1, title: 'Research Pioneer', description: 'Completed 10 quests', icon: Trophy, color: 'from-yellow-500 to-orange-500', unlocked: true },
  { id: 2, title: 'Mentor\'s Favorite', description: '5 five-star reviews', icon: Star, color: 'from-pink-500 to-purple-500', unlocked: true },
  { id: 3, title: 'Code Wizard', description: 'Mastered 3 languages', icon: Code, color: 'from-blue-500 to-cyan-500', unlocked: true },
  { id: 4, title: 'AI Enthusiast', description: 'Complete 5 AI/ML quests', icon: Brain, color: 'from-green-500 to-emerald-500', unlocked: false },
  { id: 5, title: 'Team Player', description: 'Collaborate with 20 peers', icon: Users, color: 'from-red-500 to-pink-500', unlocked: false },
  { id: 6, title: 'Lightning Fast', description: 'Complete 3 quests in a week', icon: Zap, color: 'from-purple-500 to-indigo-500', unlocked: false },
];

const skills = [
  { name: 'Python', level: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'Machine Learning', level: 72, color: 'from-green-500 to-emerald-500' },
  { name: 'Data Analysis', level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'Neural Networks', level: 65, color: 'from-orange-500 to-red-500' },
  { name: 'Research Methods', level: 78, color: 'from-teal-500 to-cyan-500' },
];

const stats = [
  { label: 'Total XP', value: '12,450', icon: Sparkles, change: '+450 this week' },
  { label: 'Level', value: '12', icon: Trophy, change: '73% to Level 13' },
  { label: 'Quests Completed', value: '23', icon: Target, change: '+3 this month' },
  { label: 'Mentorship Hours', value: '47.5', icon: Users, change: '+5.5 this week' },
];

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-3xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-4xl font-bold text-white neon-glow"
          >
            A
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Alex Chen</h1>
            <p className="text-lg text-muted-foreground mb-4">Computer Science • Stanford University</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-xl glass-strong text-sm font-medium border border-primary/30 text-primary">
                AI/ML Researcher
              </span>
              <span className="px-4 py-2 rounded-xl glass-strong text-sm font-medium border border-secondary/30 text-secondary">
                Data Science
              </span>
              <span className="px-4 py-2 rounded-xl glass-strong text-sm font-medium border border-accent/30 text-accent">
                Python Expert
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl glass-strong hover:glass transition-all font-semibold"
          >
            Edit Profile
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <TrendingUp className="w-4 h-4 text-accent ml-auto" />
            </div>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className="text-xs text-accent">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-6"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            Achievements
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: achievement.unlocked ? 1.05 : 1.02, y: -4 }}
                  className={`glass rounded-2xl p-4 text-center relative overflow-hidden ${
                    !achievement.unlocked ? 'opacity-50' : ''
                  }`}
                >
                  {achievement.unlocked && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10`} />
                  )}
                  <motion.div
                    animate={achievement.unlocked ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-3 relative z-10 ${
                      achievement.unlocked ? 'shadow-lg' : 'grayscale'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="font-semibold text-sm mb-1 relative z-10">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground relative z-10">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-6"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            Skills & Expertise
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} relative`}
                  >
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-3 rounded-xl glass-strong hover:glass transition-all font-semibold"
          >
            Add New Skill
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass rounded-3xl p-6"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-secondary" />
          Activity Timeline
        </h2>

        <div className="space-y-4">
          {[
            { date: 'Today', activity: 'Completed Quest: Neural Network Optimization', xp: '+800 XP' },
            { date: 'Yesterday', activity: 'Mentorship Session with Dr. Sarah Chen', xp: '+200 XP' },
            { date: '2 days ago', activity: 'Unlocked Achievement: Research Pioneer', xp: '+500 XP' },
            { date: '3 days ago', activity: 'Joined Quest: Quantum Algorithm Implementation', xp: '0 XP' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 glass rounded-xl p-4 cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium">{item.activity}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <span className="px-3 py-1 rounded-full glass-strong text-sm font-semibold text-accent">
                {item.xp}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
