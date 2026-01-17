"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => {
        console.log("theme before:", theme)
        setTheme(theme === "dark" ? "light" : "dark")
      }}
      className="px-3 py-2 cursor-pointer transition-transform duration-500 ease-in-out active:rotate-360"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
