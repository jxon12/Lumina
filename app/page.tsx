'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  Users, 
  Zap, 
  Search, 
  Flame, 
  Hash, 
  Heart, 
  MessageSquare, 
  Radio, 
  Calendar 
} from 'lucide-react';
import SparkMatchmaker from '@/components/SparkMatchmaker';
// import { useGlobalState } from '@/context/GlobalState'; // 如果需要读取真实数据可以解开注释

// --- Mock Data (模拟数据) ---
const user = { name: "Alex", xp: 2450 }; 
const trendingTopics = ["Transformer Models", "Quantum Error Correction", "CRISPR-Cas9", "Zero-Knowledge Proofs"];

const communityPost = {
  author: { name: "David Lee", avatar: "https://i.pravatar.cc/150?u=david" },
  content: "Just deployed my first Transformer model! The attention weights visualization is mesmerizing. Anyone working on interpretability?",
  tags: ["#AI", "#DeepLearning"],
  likes: 34,
  comments: 8,
  time: "2h ago"
};

const upcomingWorkshop = {
  title: "Intro to Quantum Circuits",
  host: "Dr. R. Sharma",
  time: "Starts in 45m",
  date: "Today, 4:00 PM",
  attendees: 128,
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
};

export default function Home() {
  const [isSparkOpen, setIsSparkOpen] = useState(false);
  const [greeting, setGreeting] = useState('Good Morning');

  // 根据时间自动设置问候语
  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening');
  }, []);

  return (
    <div className="min-h-screen pb-24 pt-8 lg:pt-12 px-4 max-w-[1400px] mx-auto">
      
      {/* --- 1. Header (头部欢迎区) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-2">
            {greeting}, <br className="md:hidden" />
            <span className="text-muted-foreground">{user.name}.</span>
          </h1>
        </div>
        
        {/* Search Bar (自适应双模式搜索框) */}
        <div className="hidden md:flex items-center gap-3 bg-white/50 dark:bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-black/5 dark:border-white/10 text-muted-foreground w-96 hover:bg-white/80 dark:hover:bg-white/15 transition-colors cursor-text group">
          <Search className="w-5 h-5 group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium">Search for mentors, skills...</span>
        </div>
      </motion.div>

      {/* --- 2. Bento Grid (核心网格布局) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
        
        {/* [1] Main Card: Find Partner (寻找伙伴 - 主卡片) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsSparkOpen(true)}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bento-card p-10 flex flex-col justify-between group cursor-pointer relative"
        >
          {/* Ambient Background on Hover (悬浮时的流体光效) */}
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
            <h2 className="text-4xl font-bold text-title mb-4 leading-tight">
              Ignite your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Potential.</span>
            </h2>
            <p className="text-lg text-body max-w-sm">
              Connect with 3,000+ researchers and mentors in real-time.
            </p>
          </div>
        </motion.div>

        {/* [2] Trending Topics (热门话题 - 填补右上空白) */}
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

        {/* [3] Stats Card: XP (经验值) */}
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

        {/* [4] Network Card (人脉网络) */}
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

        {/* [5] Community Pulse (替换掉了 Active Quest) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="col-span-1 bento-card p-5 flex flex-col justify-between group hover:border-primary/50 cursor-pointer"
        >
           <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-2">
               <Hash className="w-4 h-4 text-primary" />
               <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Community Pulse</p>
             </div>
             <span className="text-[10px] text-muted-foreground">{communityPost.time}</span>
           </div>
           
           <div className="flex-1">
             <div className="flex items-center gap-2 mb-2">
                <img src={communityPost.author.avatar} className="w-6 h-6 rounded-full" alt={communityPost.author.name} />
                <span className="text-sm font-medium text-foreground">{communityPost.author.name}</span>
             </div>
             <p className="text-sm text-foreground/90 leading-snug line-clamp-3 mb-3">
               {communityPost.content}
             </p>
             <div className="flex gap-2 mb-3">
                {communityPost.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded-md">{tag}</span>
                ))}
             </div>
           </div>

           <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
             <div className="flex items-center gap-1 group-hover:text-red-500 transition-colors">
               <Heart className="w-3.5 h-3.5" /> {communityPost.likes}
             </div>
             <div className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
               <MessageSquare className="w-3.5 h-3.5" /> {communityPost.comments}
             </div>
           </div>
        </motion.div>

        {/* [6] Live Workshop (替换掉了 Daily Quote) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 bento-card relative overflow-hidden group cursor-pointer"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={upcomingWorkshop.image} className="w-full h-full object-cover opacity-20 dark:opacity-30 group-hover:scale-105 transition-transform duration-700" alt="Workshop" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                 <Radio className="w-3 h-3 animate-pulse" />
                 {upcomingWorkshop.time}
              </div>
              <div className="bg-background/50 backdrop-blur-md text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/50">
                 {upcomingWorkshop.date}
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {upcomingWorkshop.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <span>Hosted by <span className="text-foreground font-medium">{upcomingWorkshop.host}</span></span>
                <span>•</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {upcomingWorkshop.attendees} joined</span>
              </p>
              
              <button className="bg-foreground text-background text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                RSVP Now
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      <SparkMatchmaker isOpen={isSparkOpen} onClose={() => setIsSparkOpen(false)} />
    </div>
  );
}