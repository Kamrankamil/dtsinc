"use client";

import { useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Force dark theme globally
    document.documentElement.classList.remove("light");
    localStorage.setItem("dts-theme", "dark");
  }, []);

  return <>{children}</>;
}
