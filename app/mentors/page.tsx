'use client';

import { motion } from 'framer-motion';
import { Users, Video, Phone, MoreVertical, Send, Paperclip, Code, Smile, Sparkles, Cpu } from 'lucide-react';
import { useState } from 'react';

// ... (保持你原有的 messages 和 contacts 数据不变) ...
const messages = [
  // ... Keep your mock data here ...
  {
    id: 1,
    sender: 'mentor',
    name: 'Dr. Sarah Chen',
    avatar: 'SC',
    content: 'Hey Alex! I saw your question about neural network optimization. Happy to help!',
    time: '10:32 AM',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    sender: 'user',
    name: 'Alex',
    avatar: 'A',
    content: 'Thank you so much! I\'m struggling with the learning rate decay strategy. My model keeps overshooting the optimal point.',
    time: '10:35 AM',
    gradient: 'from-primary to-secondary',
  },
  {
    id: 3,
    sender: 'mentor',
    name: 'Dr. Sarah Chen',
    avatar: 'SC',
    content: 'Classic issue! Have you tried implementing a cosine annealing schedule? It works really well for this.',
    time: '10:37 AM',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    sender: 'user',
    name: 'Alex',
    avatar: 'A',
    content: 'Not yet! Could you share an example?',
    time: '10:38 AM',
    gradient: 'from-primary to-secondary',
  },
  {
    id: 5,
    sender: 'mentor',
    name: 'Dr. Sarah Chen',
    avatar: 'SC',
    content: 'Absolutely! Here\'s a quick implementation:',
    time: '10:40 AM',
    gradient: 'from-purple-500 to-pink-500',
    isCode: true,
    code: `import torch.optim as optim
from torch.optim.lr_scheduler import CosineAnnealingLR

optimizer = optim.Adam(model.parameters(), lr=0.001)
scheduler = CosineAnnealingLR(optimizer, T_max=50, eta_min=1e-6)

# In your training loop:
for epoch in range(num_epochs):
    train(...)
    scheduler.step()`,
  },
  {
    id: 6,
    sender: 'user',
    name: 'Alex',
    avatar: 'A',
    content: 'This is perfect! The T_max parameter - is that the total number of epochs?',
    time: '10:42 AM',
    gradient: 'from-primary to-secondary',
  },
  {
    id: 7,
    sender: 'mentor',
    name: 'Dr. Sarah Chen',
    avatar: 'SC',
    content: 'Exactly! T_max is the number of iterations for the cosine cycle. You can set it to your total epochs, or make it shorter for multiple cycles.',
    time: '10:43 AM',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const mentorContacts = [
  { id: 1, name: 'Dr. Sarah Chen', status: 'online', avatar: 'SC', field: 'AI/ML', gradient: 'from-purple-500 to-pink-500' },
  { id: 2, name: 'Prof. James Wilson', status: 'away', avatar: 'JW', field: 'Quantum', gradient: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Dr. Maya Patel', status: 'offline', avatar: 'MP', field: 'Biotech', gradient: 'from-green-500 to-emerald-500' },
  { id: 4, name: 'Dr. Carlos Rodriguez', status: 'online', avatar: 'CR', field: 'Web3', gradient: 'from-orange-500 to-red-500' },
];

export default function MentorsPage() {
  const [message, setMessage] = useState('');
  const activeMentor = mentorContacts[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-8rem)] flex gap-6"
    >
      {/* 🔴 左侧列表：增加悬浮卡片效果 */}
      <div className="w-80 hidden lg:flex flex-col gap-4">
        <div className="glass rounded-2xl p-6 border-l-4 border-purple-500">
          <h2 className="text-xl font-bold flex items-center gap-2 text-black">
            <Cpu className="w-5 h-5 text-purple-400" />
            Active Links
          </h2>
          <p className="text-xs text-slate-400 mt-1">Encrypted • Low Latency</p>
        </div>

        <div className="flex-1 glass rounded-2xl p-2 space-y-1 overflow-y-auto">
          {mentorContacts.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className={`p-3 rounded-xl cursor-pointer transition-all border border-transparent ${
                index === 0 ? 'bg-white/5 border-white/10 shadow-inner' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mentor.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                    {mentor.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${
                    mentor.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-500'
                  }`} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${index === 0 ? 'text-white' : 'text-slate-300'}`}>{mentor.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">{mentor.field}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔴 右侧聊天区：HUD 风格 */}
      <div className="flex-1 glass-strong rounded-3xl flex flex-col overflow-hidden border border-white/10 relative">
        {/* 顶部装饰线 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        {/* Header */}
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-slate-900/20">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${activeMentor.gradient} p-[2px]`}>
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                 <span className="text-sm font-bold text-white">{activeMentor.avatar}</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                {activeMentor.name}
                <Sparkles className="w-3 h-3 text-yellow-400" />
              </h3>
              <p className="text-xs text-purple-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Secure Connection Established
              </p>
            </div>
          </div>
          <div className="flex gap-2 text-slate-400">
            <Video className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <MoreVertical className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* 消息区域 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, index) => {
            const isUser = msg.sender === 'user';
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                {!isUser && (
                   <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${msg.gradient} flex items-center justify-center text-xs text-white shadow-lg`}>
                     {msg.avatar}
                   </div>
                )}
                
                <div className={`max-w-[80%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`
                    p-4 rounded-2xl backdrop-blur-md border 
                    ${isUser 
                      ? 'bg-purple-500/20 border-purple-500/30 text-purple-50 rounded-tr-sm' 
                      : 'bg-slate-800/40 border-white/10 text-slate-200 rounded-tl-sm'
                    }
                  `}>
                    {msg.isCode ? (
                      <div className="space-y-2">
                        <p className="text-sm opacity-90">{msg.content}</p>
                        {/* 代码块美化 */}
                        <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 font-mono text-xs overflow-x-auto shadow-inner">
                          <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
                            <span className="text-slate-500 flex items-center gap-1"><Code className="w-3 h-3" /> PYTHON</span>
                            <div className="flex gap-1">
                              <div className="w-2 h-2 rounded-full bg-red-500/40" />
                              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                              <div className="w-2 h-2 rounded-full bg-green-500/40" />
                            </div>
                          </div>
                          <code className="text-green-400 block">{msg.code}</code>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {msg.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 输入框 */}
        <div className="p-4 bg-slate-900/30 border-t border-white/5 backdrop-blur-lg">
          <div className="flex items-center gap-3 bg-slate-800/50 p-2 rounded-xl border border-white/5 focus-within:border-purple-500/50 transition-colors">
             <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-colors">
               <Paperclip className="w-5 h-5" />
             </button>
             <input 
               type="text" 
               placeholder="Transmit data..." 
               className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-slate-600"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
             />
             <button className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg shadow-lg shadow-purple-900/20 transition-all active:scale-95">
               <Send className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}