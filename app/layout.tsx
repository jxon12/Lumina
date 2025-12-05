import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // 引入字体
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';
import { GlobalProvider } from '@/context/GlobalState';
import { ThemeProvider } from "@/components/theme-provider";

// 配置字体
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumina - Research Ecosystem',
  description: 'Connect, Collaborate, Innovate.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 🟢 这里加上 inter.className 让全站字体生效 */}
      <body className={inter.className}>
        <GlobalProvider>
          {/* 🟢 ThemeProvider 配置正确 */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen bg-background text-foreground transition-colors duration-500">
              <Sidebar />
              
              <main className="flex-1 lg:ml-72 pb-32 lg:pb-0">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                  {children}
                </div>
              </main>
              
              <BottomNav />
            </div>
          </ThemeProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}