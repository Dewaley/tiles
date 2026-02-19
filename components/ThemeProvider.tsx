"use client";

import { useEffect, useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "theme";
const THEME_EVENT = "theme-change";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) callback();
  };
  const onThemeEvent = () => callback();
  const onMediaChange = () => callback();

  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onThemeEvent);
  media.addEventListener("change", onMediaChange);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onThemeEvent);
    media.removeEventListener("change", onMediaChange);
  };
}

function setStoredTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("Failed to store theme.", error);
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getPreferredTheme,
    () => "light",
  );
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setStoredTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      {children}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 right-6 rounded-lg text-text-primary transition-colors cursor-pointer"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
