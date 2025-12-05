'use client';

import { Home, Target, Users, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Quests', href: '/quests', icon: Target },
  { name: 'Mentors', href: '/mentors', icon: Users },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe">
      <div className="glass-strong rounded-t-3xl px-4 py-3 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1"
              >
                <div
                  className={`
                    relative p-3 rounded-2xl transition-all duration-300
                    ${isActive ? 'glass-strong' : ''}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavMobile"
                      className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`w-5 h-5 relative z-10 transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary neon-glow"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                    />
                  )}
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
