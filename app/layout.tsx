import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';

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
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-72 pb-24 lg:pb-0">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
              {children}
            </div>
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
