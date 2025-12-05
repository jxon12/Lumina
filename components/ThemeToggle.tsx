"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ scale: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : 90 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-purple-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ scale: theme === "light" ? 1 : 0, rotate: theme === "light" ? 0 : -90 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-orange-500" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}