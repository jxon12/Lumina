'use client';

import { Home, Target, Users, User, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
// 🟢 Import Context
import { useGlobalState } from '@/context/GlobalState';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Quests', href: '/quests', icon: Target },
  { name: 'Mentors', href: '/mentors', icon: Users },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  // 🟢 获取全局状态
  const { user } = useGlobalState();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 p-6 flex-col gap-6 border-r border-white/5 bg-slate-950/50 backdrop-blur-xl">
      <Link href="/" className="flex items-center gap-3 mb-4 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Lumina
          </h1>
          <p className="text-xs text-muted-foreground">Student Research Hub</p>
        </div>
      </Link>

      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-300
                  ${
                    isActive
                      ? 'glass-strong text-white border border-white/10'
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-primary' : ''}`} />
                <span className="font-medium relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    className="absolute right-2 w-2 h-2 rounded-full bg-primary neon-glow"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* 🟢 动态 XP 卡片 */}
      <div className="glass rounded-xl p-4 space-y-3 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center justify-between relative z-10">
          <span className="text-sm font-bold text-white">Level {user.level}</span>
          <span className="text-xs text-accent font-mono">{user.xp.toLocaleString()} XP</span>
        </div>
        
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(user.xp % 1000) / 10}%` }} // 简单的进度模拟
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
        <p className="text-xs text-muted-foreground relative z-10 text-right">
          {1000 - (user.xp % 1000)} XP to next level
        </p>
      </div>
    </aside>
  );
}