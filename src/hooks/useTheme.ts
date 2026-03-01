import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  // Get initial theme from localStorage or default to 'system'
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme;
      return stored || 'system';
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Apply theme to document
  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(systemPrefersDark ? 'dark' : 'light');
      
      if (systemPrefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else {
      setResolvedTheme(newTheme);
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, []);

  // Set theme and save to localStorage
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  // Toggle between light and dark
  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [resolvedTheme, setTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (_e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, applyTheme]);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
}
