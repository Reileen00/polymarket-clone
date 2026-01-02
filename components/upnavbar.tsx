"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Info, Search, Menu, Moon, Sun } from "lucide-react"

export function InputDemo() {
  const [open, setOpen] = useState(false)

  const [dark, setDark] = useState(true)

  // sync dark mode with <html>
  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark])

  return (
    <div className=" flex items-center mt-5 w-[1330px] max-w-[1300px] gap-1">
      
      {/* Logo */}
      <div className="text-2xl font-semibold text-amber-100 mr-5">
        Polymarket
      </div>

      {/* Search */}
      <div className=" relative hidden md:block w-[560px]">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
        <Input
          type="search"
          placeholder="Search polymarket"
          className="w-full pl-9"
        />
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-6">

        {/* How it works */}
        <div className="hidden sm:flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors">
          <Info className="mr-2 h-4 w-4" />
          <span>How it works</span>
        </div>

        {/* Auth */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
            Log in
          </button>

          <button className="rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-300 transition-colors">
            Sign up
          </button>
        </div>

        {/* Hamburger dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors bg-[hsl(210, 25%, 25%)]"
          >
            <Menu className="h-6 w-6" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 rounded-md bg-[hsl(213, 33%, 17%)] shadow-lg border border-white/10 z-50">
             <ul className="flex flex-col text-sm text-white">
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white">
                  Leaderboard
                </li>
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white">
                  Rewards
                </li>
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white">
                  APIs
                </li>
                
                    <li
                        onClick={() => setDark(!dark)}
                        className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center justify-between"
                        >
                        <span>Dark mode</span>
                        {dark ? (
                            <Moon className="h-4 w-4 text-blue-400" />
                        ) : (
                            <Sun className="h-4 w-4 text-yellow-400" />
                        )}
                        </li>
                </ul>
              <ul className="flex flex-col text-sm text-white/60">
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                  Accuracy
                </li>
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                  Support
                </li>
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                  Documentation
                </li>
                <li className="px-4 py-2 hover:bg-white/10 cursor-pointer ">
                  Terms of use
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}