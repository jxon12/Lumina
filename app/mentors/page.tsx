'use client';

import { motion } from 'framer-motion';
import { Search, MessageCircle, Video, Star, MoreHorizontal, Sparkles, Zap } from 'lucide-react';
// 🟢 1. 引入 Context
import { useGlobalState } from '@/context/GlobalState';

// 预设的“老”导师数据（用来填充页面，不显得空）
const PRESET_MENTORS = [
  {
    id: 'm1',
    name: 'Dr. Emily Watson',
    role: 'Prof. of Bio-Informatics',
    avatar: 'https://i.pravatar.cc/300?u=emily',
    status: 'Online',
    tags: ['Genomics', 'Python', 'R'],
    bio: 'Looking for students interested in gene editing research.'
  },
  {
    id: 'm2',
    name: 'Michael Chang',
    role: 'PhD Student · Quantum Lab',
    avatar: 'https://i.pravatar.cc/300?u=michael',
    status: 'Busy',
    tags: ['Quantum Physics', 'Qiskit', 'Linear Algebra'],
    bio: 'Can help with quantum algorithms and circuit design.'
  }
];

// 🟢 刚刚匹配到的 Sarah 的详细数据
const SARAH_DATA = {
  id: 'mentor-sarah',
  name: 'Dr. Sarah Chen',
  role: 'AI Researcher · Stanford Lab',
  avatar: 'https://i.pravatar.cc/300?u=sarah_chen_ai_lab', // 和匹配弹窗里的一样
  status: 'Online',
  tags: ['NLP', 'Transformers', 'Python'],
  bio: 'Specialized in Large Language Models. Also loves Sci-Fi!',
  isNew: true // 标记为新连接
};

export default function MentorsPage() {
  // 🟢 2. 从全局状态获取“我的导师ID列表”
  const { user } = useGlobalState();

  // 🟢 3. 动态构建显示列表
  // 如果 user.mentors 包含 'mentor-sarah'，就把 Sarah 加到列表最前面
  const displayMentors = [
    ...(user.mentors.includes('mentor-sarah') ? [SARAH_DATA] : []),
    ...PRESET_MENTORS
  ];

  return (
    <div className="space-y-8">
      {/* 头部区域 */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center neon-glow">
              <Star className="w-6 h-6 text-white" />
            </div>
            Your Navigators
          </h1>
          <p className="text-slate-400 text-lg">
            Connect with mentors and peers who share your wavelength.
          </p>
        </div>
        
        {/* 搜索栏 */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by skill or name..."
            className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* 导师列表 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {displayMentors.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              glass rounded-2xl p-6 relative group border transition-all hover:border-purple-500/30
              ${mentor.isNew ? 'border-green-500/50 bg-green-500/5 shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]' : 'border-white/5'}
            `}
          >
            {/* 🟢 新连接的高亮标签 */}
            {mentor.isNew && (
              <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg border border-green-500/30 flex items-center gap-1 animate-pulse">
                <Sparkles className="w-3 h-3" />
                NEW SPARK
              </div>
            )}

            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10" 
                />
                <div className={`
                  absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900
                  ${mentor.status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'}
                `} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white leading-tight">{mentor.name}</h3>
                <p className="text-sm text-purple-400 mb-1">{mentor.role}</p>
                <span className="text-xs text-slate-500">{mentor.status}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 line-clamp-2 h-10">
              {mentor.bio}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {mentor.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-400 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors">
                <MessageCircle className="w-4 h-4" />
                Chat
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-sm font-medium transition-colors">
                <Video className="w-4 h-4" />
                Meet
              </button>
            </div>
          </motion.div>
        ))}
        
        {/* 一个“添加更多”的占位卡片，增加社区感 */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="border-2 border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-purple-500/30 hover:bg-white/5 transition-all cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
             <Zap className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <h3 className="font-medium text-slate-300">Discover More</h3>
            <p className="text-sm text-slate-500">Ignite a spark to find more mentors</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}