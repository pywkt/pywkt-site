'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const SetTheme = () => {
  const { themeToggleButton, themeToggleHr } = styles;
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <>
      <button onClick={toggleTheme} className={themeToggleButton}>
        {isDark ? 'light' : 'dark'}
      </button>
      <hr className={themeToggleHr} />
    </>
  );
};

export default SetTheme;
