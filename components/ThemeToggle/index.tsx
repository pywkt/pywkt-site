'use client';
import { setTheme } from './action';
import styles from './styles.module.css';

export default function ThemeToggle({
  currentTheme,
}: {
  currentTheme: string;
}) {
  const { themeToggleButton, themeToggleHr } = styles;
  const changeTheme = () => setTheme(currentTheme);

  return currentTheme === 'light' ? (
    <>
      <button type='button' className={themeToggleButton} onClick={changeTheme}>
        dark
      </button>
      <hr className={themeToggleHr} />
    </>
  ) : (
    <>
      <button type='button' className={themeToggleButton} onClick={changeTheme}>
        light
      </button>
      <hr className={themeToggleHr} />
    </>
  );
}
