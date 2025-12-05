'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Globe, Zap, Users, Trophy } from 'lucide-react';
import SparkMatchmaker from '@/components/SparkMatchmaker';
import { useGlobalState } from '@/context/GlobalState'; // 假设你还在用这个

export default function Home() {
  const [isSparkOpen, setIsSparkOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good Morning');
  // 如果你有 global state 里的 user，这里可以用
  // const { user } = useGlobalState(); 
  const user = { name: "Alex", xp: 2450 }; // Mock 数据

  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening');
  }, []);

  // 动画配置：Apple 风格通常是慢速、平滑的
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } // Apple 经典的贝塞尔曲线
  };

  return (
    <div className="min-h-screen pb-24 pt-8 lg:pt-0">
      <motion.div 
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto space-y-6"
      >
        
        {/* --- Header Section --- */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end md:items-center px-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter">
              {greeting}, <span className="text-white/50">{user.name}.</span>
            </h1>
            <p className="text-lg text-white/40 mt-2 font-medium">
              Ready to create something extraordinary?
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest">System Status</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-500 font-medium">Operational</span>
            </div>
          </div>
        </motion.div>

        {/* --- The Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* 1. 主要行动卡片 (占用大面积) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-1 md:col-span-8 md:row-span-2 bento-card group relative p-8 flex flex-col justify-between cursor-pointer"
            onClick={() => setIsSparkOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>

            <div className="relative z-10 max-w-lg">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
                Find your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Research Partner.</span>
              </h2>
              <p className="text-lg text-white/50">
                AI-powered matching to connect you with mentors and peers who share your wavelength.
              </p>
            </div>
          </motion.div>

          {/* 2. 数据卡片 (XP) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-1 md:col-span-4 md:row-span-1 bento-card p-6 flex flex-col justify-center relative group"
          >
             <div className="absolute top-0 right-0 p-32 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-colors" />
             <div className="relative z-10">
               <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-1">Total XP</p>
               <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-semibold text-white tracking-tighter">{user.xp.toLocaleString()}</span>
                 <span className="text-sm text-emerald-400 font-medium">+12%</span>
               </div>
               <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '65%' }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="h-full bg-white" 
                 />
               </div>
             </div>
          </motion.div>

          {/* 3. 网络卡片 (Network) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-1 md:col-span-4 md:row-span-1 bento-card p-6 flex items-center justify-between group"
          >
            <div>
              <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Network</p>
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs text-white">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full rounded-full opacity-80" alt="" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-xs font-medium text-white">
                  +8
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <Users className="w-5 h-5 text-white/70" />
            </div>
          </motion.div>

          {/* 4. 每日灵感 (Wide) */}
          <motion.div 
            variants={fadeInUp}
            className="col-span-1 md:col-span-12 bento-card p-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-300 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
              <Zap className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-serif italic text-white/90">
                "The best way to predict the future is to invent it."
              </p>
              <p className="text-sm text-white/40 mt-2">— Alan Kay</p>
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* 浮动按钮 (如果需要保留) */}
      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </div>
  );
}