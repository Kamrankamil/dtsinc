"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("light")
      : false
  );

  const toggleTheme = () => {
    const nextThemeIsLight = !isLight;
    document.documentElement.classList.toggle("light", nextThemeIsLight);
    localStorage.setItem("dts-theme", nextThemeIsLight ? "light" : "dark");
    setIsLight(nextThemeIsLight);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="glass-card rounded-full p-2 transition-transform hover:scale-105"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
