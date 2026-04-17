import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2.5 rounded-full transition-all duration-300",
        "bg-neutral-100 hover:bg-neutral-200 text-neutral-600",
        "dark:bg-dark-surface dark:hover:bg-slate-700 dark:text-dark-text-main",
        "shadow-sm hover:shadow-md active:scale-95"
      )}
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
}
