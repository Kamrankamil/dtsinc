"use client";

import { useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const saved = localStorage.getItem("dts-theme");
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const lightMode = saved ? saved === "light" : prefersLight;

    document.documentElement.classList.toggle("light", lightMode);
  }, []);

  return <>{children}</>;
}
