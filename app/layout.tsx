import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';
import { GlobalProvider } from '@/context/GlobalState'; // 确保路径对应你刚才创建的文件

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumina - Student Research Hub',
  description: 'Gamified mentorship and collaboration platform for students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <div className="flex min-h-screen">
            {/* Sidebar 需要消费 context 来显示 XP，所以放在 Provider 里面 */}
            <Sidebar />
            
            <main className="flex-1 lg:ml-72 pb-24 lg:pb-0">
              <div className="container mx-auto px-4 py-8 max-w-7xl">
                {children}
              </div>
            </main>
            
            {/* BottomNav 也是 */}
            <BottomNav />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}