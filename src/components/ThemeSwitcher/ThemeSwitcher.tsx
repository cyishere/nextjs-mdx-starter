'use client';

import type { SiteTheme } from '@/utils/types';

import Cookie from 'js-cookie';
import { useState } from 'react';

import { THEME_NAME } from '@/utils/constants';

import { Moon, Sun } from '../Icons';

type ThemeSwitcherProps = {
  initialTheme: SiteTheme;
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleClick = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);

    Cookie.set(THEME_NAME, nextTheme, {
      expires: 1000
    });

    const root = document.documentElement;
    // The theme can be either "dark" or "light". In layout.tsx,
    // we don't add any class for light theme, so we only need
    // to toggle the "dark" class here.
    root.classList.toggle('dark');
  };

  return (
    <button onClick={handleClick}>
      {theme === 'light' ? <Moon /> : <Sun />}
      <span hidden>Toggle dark / light theme</span>
    </button>
  );
};

export default ThemeSwitcher;
