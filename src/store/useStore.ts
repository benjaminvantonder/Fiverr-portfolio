import { create } from "zustand";

type Theme = "light" | "dark";

interface Store {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  mouse: { x: number; y: number; nx: number; ny: number };
  setMouse: (x: number, y: number) => void;
  cursorVariant: "default" | "hover" | "click";
  setCursorVariant: (v: "default" | "hover" | "click") => void;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const useStore = create<Store>((set) => ({
  theme: getInitialTheme(),
  setTheme: (t) => {
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
    set({ theme: t });
  },
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return { theme: next };
    }),
  mouse: { x: 0, y: 0, nx: 0, ny: 0 },
  setMouse: (x, y) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    set({ mouse: { x, y, nx: (x / w) * 2 - 1, ny: -(y / h) * 2 + 1 } });
  },
  cursorVariant: "default",
  setCursorVariant: (v) => set({ cursorVariant: v }),
}));
