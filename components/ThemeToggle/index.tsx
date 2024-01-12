// 'use client';
// import { setTheme } from './action';
// import styles from './styles.module.css';
//
// export default function ThemeToggle({
//   currentTheme,
// }: {
//   currentTheme: string;
// }) {
//   const { themeToggleButton, themeToggleHr } = styles;
//   const changeTheme = () => setTheme(currentTheme);
//
//   return currentTheme === 'light' ? (
//     <>
//       <button type='button' className={themeToggleButton} onClick={changeTheme}>
//         dark
//       </button>
//       <hr className={themeToggleHr} />
//     </>
//   ) : (
//     <>
//       <button type='button' className={themeToggleButton} onClick={changeTheme}>
//         light
//       </button>
//       <hr className={themeToggleHr} />
//     </>
//   );
// }

// 'use client';
// import { useState, useEffect } from 'react';
// import styles from './styles.module.css';
//
// const SetTheme = () => { 
//   const { themeToggleButton, themeToggleHr } = styles;
//   const [theme, setTheme] = useState(global.window?.__theme || 'light');
//
//   const isDark = theme === 'dark';
//
//   const toggleTheme = () => {
//     global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
//   };
//   useEffect(() => {
//     global.window.__onThemeChange = setTheme;
//   }, []);
//
//   return (
//     <>
//       <button onClick={toggleTheme} className={themeToggleButton}>
//         {isDark ? 'dark' : 'light'}
//       </button>
//       <hr className={themeToggleHr} />
//     </>
//   );
// };
//
// export default SetTheme;
