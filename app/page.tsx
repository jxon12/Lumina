'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Users, Zap, Search } from 'lucide-react';
import SparkMatchmaker from '@/components/SparkMatchmaker';
import { useGlobalState } from '@/context/GlobalState';

// 模拟数据
const user = { name: "Alex", xp: 2450 }; 

export default function Home() {
  const [isSparkOpen, setIsSparkOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening');
  }, []);

  return (
    <div className="min-h-screen pb-24 pt-8 lg:pt-12 px-4 max-w-[1400px] mx-auto">
      
      {/* --- 1. Header: 更亮眼 --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
            {greeting}, <br className="md:hidden" />
            <span className="text-slate-400">{user.name}.</span>
          </h1>
        </div>
        
        {/* 一个类似 Mac 搜索框的组件 */}
        <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 text-slate-300 w-96 hover:bg-white/15 transition-colors cursor-text group">
          <Search className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium">Search for mentors, skills, or labs...</span>
        </div>
      </motion.div>

      {/* --- 2. Bento Grid: 更通透 --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        
        {/* [Main Card] Find Partner - 占据最大视觉重心 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsSparkOpen(true)}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bento-card p-10 flex flex-col justify-between group cursor-pointer relative"
        >
          {/* 内部高光流体 */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-white group-hover:bg-white group-hover:text-black transition-all">
              Start Now
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Ignite your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Potential.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-sm">
              Connect with 3,000+ researchers and mentors in real-time.
            </p>
          </div>
        </motion.div>

        {/* [Stats Card] XP - 增加亮色进度条 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bento-card p-8 flex flex-col justify-center relative overflow-hidden"
        >
           <div className="relative z-10">
             <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Your XP</p>
                <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
             </div>
             <div className="text-6xl font-bold text-white tracking-tighter mb-6">{user.xp.toLocaleString()}</div>
             
             {/* 进度条背景更亮 */}
             <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '65%' }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="h-full bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" 
               />
             </div>
             <p className="text-right text-xs text-slate-400 mt-2">Top 5% this week</p>
           </div>
        </motion.div>

        {/* [Network Card] - 强调人脸 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 bento-card p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
             <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Network</p>
             <Users className="w-5 h-5 text-slate-400" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex -space-x-3 pl-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 transition-transform hover:-translate-y-2 hover:z-10 relative">
                  <img src={`https://i.pravatar.cc/150?u=${i*20}`} className="w-full h-full rounded-full object-cover opacity-90 hover:opacity-100" alt="" />
                </div>
              ))}
            </div>
            <p className="text-2xl font-semibold text-white">+12 <span className="text-lg font-medium text-slate-400">new peers</span></p>
          </div>
        </motion.div>

        {/* [Daily Quote] - 宽卡片 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 lg:col-span-2 bento-card p-8 flex items-center justify-center text-center relative overflow-hidden"
        >
          {/* 背景极光 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
          
          <div className="relative z-10 max-w-lg">
            <p className="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed italic">
              "The best way to predict the future is to invent it."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-[1px] w-8 bg-white/30" />
              <p className="text-sm text-slate-400 uppercase tracking-widest">Alan Kay</p>
              <div className="h-[1px] w-8 bg-white/30" />
            </div>
          </div>
        </motion.div>

      </div>

      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </div>
  );
}