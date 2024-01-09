import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import ThemeToggle from '@/components/ThemeToggle';
import {
  dankMonoReg,
  dankMonoItal,
  blexMonoReg,
  blexMonoItal,
  blexMonoBold,
} from '@/config/fonts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'pywkt',
  description: 'Various things are here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultTheme = 'light';
  const cookieValue = cookies().get('theme')?.value || '';
  const isTheme = cookieValue === defaultTheme || cookieValue === 'dark';
  const theme: string = isTheme ? cookieValue : defaultTheme;

  return (
    <html
      lang='en'
      className={`${dankMonoReg.variable} ${dankMonoItal.variable} ${theme}`}
    >
      <body className={`px-2 font-reg`}>
        <Header />
        <div className='themeToggleContainer'>
          <ThemeToggle currentTheme={theme} />
        </div>

        <div className='pageGrid'>
          <div className='leftSpacerGrid' />
          <div className='mainContentContainer'>
            {children}
            <Footer />
          </div>
          <div className='tagListContainer'>
            <TagList />
          </div>
        </div>
      </body>
    </html>
  );
}
