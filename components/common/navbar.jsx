"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-3 py-3 sm:px-6 sm:py-4">
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          rounded-2xl
          border
          border-black/10
          bg-background/90
          px-4
          py-3
          shadow-sm
          backdrop-blur-md
          dark:border-white/10
          sm:px-6
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="
              text-base
              font-semibold
              tracking-wide
              sm:text-xl
            "
          >
            TANMAY.
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink href="/projects">PROJECTS</NavLink>
            <NavLink href="/work-experience">WORK</NavLink>
            <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/coding">CODING</NavLink>

            <ThemeButton />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeButton />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-border
                transition-all
                duration-200
                hover:bg-muted
                active:scale-95
              "
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            grid
            transition-all
            duration-300
            ease-out
            md:hidden
            ${
              menuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div className="mt-4 border-t border-border pt-4">
              <div className="flex flex-col gap-1">
                <MobileLink
                  href="/projects"
                  onClick={() => setMenuOpen(false)}
                >
                  PROJECTS
                </MobileLink>

                <MobileLink
                  href="/work-experience"
                  onClick={() => setMenuOpen(false)}
                >
                  WORK
                </MobileLink>

                <MobileLink
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                >
                  BLOG
                </MobileLink>

                <MobileLink
                  href="/coding"
                  onClick={() => setMenuOpen(false)}
                >
                  CODING
                </MobileLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        text-sm
        font-medium
        transition-colors
        duration-200
        hover:text-primary
      "
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        rounded-lg
        px-3
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        hover:bg-muted
        active:scale-[0.98]
      "
    >
      {children}
    </Link>
  );
}

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-border
        "
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-border
        transition-all
        duration-200
        hover:scale-105
        hover:bg-muted
        active:scale-95
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}