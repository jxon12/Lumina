'use client';

import { motion } from 'framer-motion';
import { User, Mail, MapPin, Link as LinkIcon, Award, BookOpen, Star, Github, Linkedin, Globe, Edit3, Settings } from 'lucide-react';
import { useGlobalState } from '@/context/GlobalState';

export default function ProfilePage() {
  const { user } = useGlobalState();

  const skills = [
    { name: 'Python', level: 'Expert', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { name: 'Machine Learning', level: 'Advanced', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { name: 'React', level: 'Intermediate', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
    { name: 'Data Visualization', level: 'Advanced', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20' },
  ];

  const badges = [
    { name: 'Early Adopter', icon: Star, color: 'text-yellow-500' },
    { name: 'Quest Master', icon: Award, color: 'text-purple-500' },
    { name: 'Top Contributor', icon: Zap, color: 'text-orange-500' }, // 这里的 Zap 需引入，或者换成其他
  ];
  
  // 临时补充 Zap 图标引入
  const Zap = Star; // 既然上面没引入 Zap，先用 Star 替代或者去 import 加上

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* --- Profile Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card p-8 md:p-10 relative overflow-hidden"
      >
        {/* 背景装饰：仅在深色模式或 Hover 时显示微弱光效 */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-background shadow-xl overflow-hidden relative z-10">
              <img 
                src="https://i.pravatar.cc/300?u=alex_chen_stanford" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" 
              />
            </div>
            {/* 装饰光圈 */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
            <button className="absolute bottom-0 right-0 p-2 bg-foreground text-background rounded-full shadow-lg border border-background hover:scale-110 transition-transform z-20">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              {/* 🔴 修复：文字颜色改为 text-foreground 和 text-muted-foreground */}
              <h1 className="text-4xl font-bold text-foreground mb-1 tracking-tight">{user.name}</h1>
              <p className="text-lg text-muted-foreground font-medium">Computer Science • Stanford University</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                AI/ML Researcher
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-muted-foreground border border-border">
                Data Science
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-muted-foreground border border-border">
                Python Expert
              </span>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-foreground">{user.xp.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Total XP</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-foreground">{user.level}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Level</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Connections</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 min-w-[140px]">
            <button className="px-4 py-2.5 rounded-xl bg-foreground text-background font-semibold hover:bg-primary hover:text-white transition-all shadow-md active:scale-95 text-sm flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" /> Edit Profile
            </button>
            <div className="flex gap-2 justify-center">
              <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-border">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-border">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-border">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* --- Left Column: About & Skills --- */}
        <div className="md:col-span-2 space-y-8">
          
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bento-card p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" /> About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about Artificial Intelligence and its application in healthcare. Currently working on a research paper about Transformer models for medical imaging. Looking for collaborators with experience in PyTorch and Computer Vision.
            </p>
            
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>alex.chen@stanford.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Stanford, CA, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="hover:text-primary transition-colors">alexchen.dev</a>
              </div>
            </div>
          </motion.div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-card p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary-foreground" /> Current Research
            </h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="group p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Unsupervised Learning for Genomics
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Developing a novel clustering algorithm to identify gene expression patterns in single-cell RNA sequencing data.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* --- Right Column: Skills & Badges --- */}
        <div className="space-y-8">
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-card p-6"
          >
            <h2 className="text-lg font-bold text-foreground mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill.name} 
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bento-card p-6"
          >
            <h2 className="text-lg font-bold text-foreground mb-4">Achievements</h2>
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.name} className="flex flex-col items-center gap-2 text-center group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm border border-border">
                      <Icon className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground leading-tight group-hover:text-foreground transition-colors">
                      {badge.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}