'use client';

import { Home, Target, Users, User, Sparkles, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useGlobalState } from '@/context/GlobalState';
import { ThemeToggle } from './ThemeToggle'; // 记得引入

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Quests', href: '/quests', icon: Target },
  { name: 'Mentors', href: '/mentors', icon: Users },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useGlobalState();

  return (
    // 🟢 改动：背景改为 bg-background/80 (自动适配)，边框改为 border-r
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 p-6 flex-col justify-between border-r border-border bg-background/80 backdrop-blur-xl z-50">
      
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        <Link href="/" className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Lumina</h1>
        </Link>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                    ${isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        {/* XP Card - 极简线条版 */}
        <div className="p-4 rounded-2xl border border-border bg-card/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-muted-foreground">Level {user.level}</span>
            <span className="text-xs font-mono text-primary">{user.xp} XP</span>
          </div>
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
             <div className="h-full bg-primary w-[65%]" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
             </div>
             <div className="flex flex-col">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">Student</span>
             </div>
          </div>
          {/* 🟢 放入切换按钮 */}
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}