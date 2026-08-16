"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (event) => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Set the origin of the theme animation
    document.documentElement.style.setProperty(
      "--theme-x",
      `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--theme-y",
      `${event.clientY}px`
    );

    // Use View Transitions when supported
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <nav className="sticky top-0 z-50 mx-auto w-full max-w-6xl px-6 py-4">
      <div
        className="
          flex items-center justify-between
          rounded-2xl
          border border-black/10
          bg-white/80
          px-5 py-4
          backdrop-blur-md
          transition-colors duration-300
          dark:border-white/10
          dark:bg-black/80
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            font-semibold
            tracking-widest
            text-foreground
            transition-colors duration-300
          "
        >
          TANMAY.
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/projects"
            className="text-foreground transition-opacity hover:opacity-60"
          >
            PROJECTS
          </Link>

          <Link
            href="/work-experience"
            className="text-foreground transition-opacity hover:opacity-60"
          >
            WORK
          </Link>

          <Link
            href="/blog"
            className="text-foreground transition-opacity hover:opacity-60"
          >
            BLOG
          </Link>

          <Link
            href="/coding"
            className="text-foreground transition-opacity hover:opacity-60"
          >
            CODING
          </Link>

          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="
              relative
              flex h-10 w-10
              items-center justify-center
              overflow-hidden
              rounded-xl
              border border-black/10
              bg-white
              transition-all duration-300
              hover:scale-105
              hover:rotate-3
              dark:border-white/10
              dark:bg-black
            "
            aria-label="Toggle theme"
          >
            <Sun
              className="
                absolute h-4 w-4
                rotate-0 scale-100
                transition-all duration-300
                dark:-rotate-90
                dark:scale-0
              "
            />

            <Moon
              className="
                absolute h-4 w-4
                rotate-90 scale-0
                transition-all duration-300
                dark:rotate-0
                dark:scale-100
              "
            />
          </button>
        </div>
      </div>
    </nav>
  );
}