'use client';
import { setTheme } from './action';

export default function ThemeToggle({
  currentTheme,
}: {
  currentTheme: string;
}) {
  const changeTheme = () => setTheme(currentTheme);

  return currentTheme === 'light' ? (
    <>
      <button
        type='button'
        // className='border-none text-xs hover:bg-transparent'
        className="themeToggleButton"
        onClick={changeTheme}
      >
        dark
      </button>
      <hr className='themeToggleHr' />
    </>
  ) : (
    <>
      <button
        type='button'
        // className='border-none text-xs hover:bg-transparent'
className="themeToggleButton"
        onClick={changeTheme}
      >
        light
      </button>
      <hr className='themeToggleHr' />
    </>
  );
}
