import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import ThemeToggle from '@/components/ThemeToggle';
import { dankMonoReg } from '@/config/fonts';
import Footer from '@/components/Footer';
import styles from './layouts.module.css';

export const metadata: Metadata = {
  title: 'pywkt',
  description: 'Various things are here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { leftSpacerGrid, mainContentContainer, pageGrid, tagListContainer, themeToggleContainer } = styles;
  const defaultTheme = 'light';
  const cookieValue = cookies().get('theme')?.value || '';
  const isTheme = cookieValue === defaultTheme || cookieValue === 'dark';
  const theme: string = isTheme ? cookieValue : defaultTheme;

  return (
    <html lang='en' className={`${dankMonoReg.className} ${theme}`}>
      <body>
        <Header />
        <div className={themeToggleContainer}>
          <ThemeToggle currentTheme={theme} />
        </div>

        <div className={pageGrid}>
          <div className={leftSpacerGrid} />
          <div className={mainContentContainer}>
            {children}
            <Footer />
          </div>
          <div className={tagListContainer}>
            <TagList />
          </div>
        </div>
      </body>
    </html>
  );
}
