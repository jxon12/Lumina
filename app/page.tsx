'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Users, Zap, Search, Activity, Flame, Hash } from 'lucide-react';
import SparkMatchmaker from '@/components/SparkMatchmaker';
import { useGlobalState } from '@/context/GlobalState';

// 模拟数据
const user = { name: "Alex", xp: 2450 }; 
const trendingTopics = ["Transformer Models", "Quantum Error Correction", "CRISPR-Cas9", "Zero-Knowledge Proofs"];

export default function Home() {
  const [isSparkOpen, setIsSparkOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening');
  }, []);

  return (
    <div className="min-h-screen pb-24 pt-8 lg:pt-12 px-4 max-w-[1400px] mx-auto">
      
      {/* --- 1. Header --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          {/* 🔴 修复：文字颜色改为 text-foreground，适配 Light/Dark */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-2">
            {greeting}, <br className="md:hidden" />
            <span className="text-muted-foreground">{user.name}.</span>
          </h1>
        </div>
        
        {/* 搜索框：适配双模式 */}
        <div className="hidden md:flex items-center gap-3 bg-white/50 dark:bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-black/5 dark:border-white/10 text-muted-foreground w-96 hover:bg-white/80 dark:hover:bg-white/15 transition-colors cursor-text group">
          <Search className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium">Search for mentors, skills...</span>
        </div>
      </motion.div>

      {/* --- 2. Bento Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        
        {/* [Main Card] Find Partner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsSparkOpen(true)}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bento-card p-10 flex flex-col justify-between group cursor-pointer relative"
        >
          {/* 背景流体：只在 Hover 时出现，避免干扰文字 */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="w-16 h-16 rounded-full bg-background/50 border border-border flex items-center justify-center backdrop-blur-xl group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div className="bg-background/50 px-4 py-2 rounded-full border border-border text-xs font-semibold uppercase tracking-wider text-foreground group-hover:bg-primary group-hover:text-white transition-all">
              Start Now
            </div>
          </div>

          <div className="relative z-10">
            {/* 🔴 修复：使用 text-title 和 text-body 类 */}
            <h2 className="text-4xl font-bold text-title mb-4 leading-tight">
              Ignite your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Potential.</span>
            </h2>
            <p className="text-lg text-body max-w-sm">
              Connect with 3,000+ researchers and mentors in real-time.
            </p>
          </div>
        </motion.div>

        {/* [New Module] Trending Topics - 填补右上角空白 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="col-span-1 bento-card p-6 flex flex-col"
        >
           <div className="flex items-center gap-2 mb-4">
             <Flame className="w-5 h-5 text-orange-500" />
             <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Trending</p>
           </div>
           <div className="flex-1 flex flex-col justify-center gap-3">
             {trendingTopics.map((topic, i) => (
               <div key={i} className="flex items-center gap-3 group/item cursor-pointer">
                 <span className="text-xs font-mono text-muted-foreground">0{i+1}</span>
                 <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors truncate">
                   {topic}
                 </p>
               </div>
             ))}
           </div>
        </motion.div>

        {/* [Stats Card] XP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bento-card p-8 flex flex-col justify-center relative overflow-hidden"
        >
           <div className="relative z-10">
             <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Your XP</p>
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
             </div>
             {/* 🔴 修复：文字颜色 */}
             <div className="text-6xl font-bold text-foreground tracking-tighter mb-6">{user.xp.toLocaleString()}</div>
             
             <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '65%' }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_15px_rgba(234,179,8,0.5)]" 
               />
             </div>
             <p className="text-right text-xs text-muted-foreground mt-2">Top 5% this week</p>
           </div>
        </motion.div>

        {/* [Network Card] */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 bento-card p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Network</p>
             <Users className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex -space-x-3 pl-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-secondary transition-transform hover:-translate-y-2 hover:z-10 relative shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=${i*20}`} className="w-full h-full rounded-full object-cover opacity-90 hover:opacity-100" alt="" />
                </div>
              ))}
            </div>
            <p className="text-2xl font-semibold text-foreground">+12 <span className="text-lg font-medium text-muted-foreground">new peers</span></p>
          </div>
        </motion.div>

        {/* [New Module] Active Project - 填补中间行空白 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="col-span-1 bento-card p-6 flex flex-col justify-between group"
        >
           <div className="flex justify-between items-start">
             <div className="flex items-center gap-2">
               <Activity className="w-5 h-5 text-emerald-500" />
               <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Active Quest</p>
             </div>
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           </div>
           
           <div>
             <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">NLP Data Cleaning</h3>
             <p className="text-xs text-muted-foreground mb-3">Due in 2 days</p>
             <div className="flex gap-1">
               {[1,1,1,1,0].map((v, i) => (
                 <div key={i} className={`h-1.5 flex-1 rounded-full ${v ? 'bg-emerald-500' : 'bg-secondary'}`} />
               ))}
             </div>
           </div>
        </motion.div>

        {/* [Daily Quote] */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 bento-card p-8 flex items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl" />
          
          <div className="relative z-10 max-w-lg">
            {/* 🔴 修复：文字颜色适配 */}
            <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-relaxed italic">
              "The best way to predict the future is to invent it."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-[1px] w-8 bg-border" />
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Alan Kay</p>
              <div className="h-[1px] w-8 bg-border" />
            </div>
          </div>
        </motion.div>

      </div>

      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </div>
  );
}