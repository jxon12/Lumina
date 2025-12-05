'use client';

import { motion } from 'framer-motion';
import { Users, Video, Phone, MoreVertical, Send, Paperclip, Code, Smile } from 'lucide-react';
import { useState } from 'react';

const messages = [
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-8rem)]"
    >
      <div className="glass rounded-3xl overflow-hidden h-full flex">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-80 border-r border-white/10 flex flex-col hidden lg:flex"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              The Lab
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Active Mentorship Sessions</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {mentorContacts.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  index === 0 ? 'glass-strong' : 'glass hover:glass-strong'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mentor.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                      {mentor.avatar}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-slate-950 ${
                      mentor.status === 'online' ? 'bg-green-500' :
                      mentor.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{mentor.name}</p>
                    <p className="text-xs text-muted-foreground">{mentor.field}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-6 border-b border-white/10 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${activeMentor.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                {activeMentor.avatar}
              </div>
              <div>
                <h3 className="font-bold text-lg">{activeMentor.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {activeMentor.field} Expert • Active now
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-strong hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-strong hover:bg-white/10 transition-all"
              >
                <Video className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass-strong hover:bg-white/10 transition-all"
              >
                <MoreVertical className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';

              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${msg.gradient} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                    {msg.avatar}
                  </div>

                  <div className={`flex-1 max-w-2xl ${isUser ? 'flex flex-col items-end' : ''}`}>
                    <div className={`glass-strong rounded-2xl p-4 ${isUser ? 'bg-primary/10 border-primary/20' : ''}`}>
                      {msg.isCode ? (
                        <div>
                          <p className="mb-3">{msg.content}</p>
                          <div className="glass rounded-xl p-4 border border-secondary/30 relative overflow-hidden">
                            <div className="absolute top-2 right-2 flex gap-1">
                              <div className="w-3 h-3 rounded-full bg-red-500/50" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                              <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                              <Code className="w-4 h-4 text-secondary" />
                              <span className="text-xs text-muted-foreground font-mono">Python</span>
                            </div>
                            <pre className="text-sm text-secondary font-mono overflow-x-auto">
                              <code>{msg.code}</code>
                            </pre>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 px-2">{msg.time}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-6 border-t border-white/10"
          >
            <div className="glass-strong rounded-2xl p-4 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl glass hover:glass-strong transition-all"
              >
                <Paperclip className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl glass hover:glass-strong transition-all"
              >
                <Smile className="w-5 h-5 text-muted-foreground" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 neon-glow"
              >
                <Send className="w-4 h-4" />
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
