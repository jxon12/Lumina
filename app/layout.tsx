// app/layout.tsx

// ... 其他 imports
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GlobalProvider>
          {/* 🟢 包裹 ThemeProvider, attribute="class" 是关键 */}
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