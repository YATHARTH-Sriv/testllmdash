"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures the component only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <BsMoon className="text-black" />
      ) : (
        <BsSun className="text-yellow-300" />
      )}
    </button>
  );
}
