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
        <div className='w-full flex flex-col gap-1 mb-1 items-end justify-end'>
          <ThemeToggle currentTheme={theme} />
        </div>

        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8'>
          <div className='hidden lg:grid lg:col-span-2' />
          <div className='md:col-span-5 lg:col-span-4 max-w-[800px] mx-auto'>
            {children}
          </div>
          <div className='text-right row-start-1 md:grid md:col-span-2 md:col-start-7'>
            <TagList />
          </div>
        </div>
        {/* <link */}
        {/*   rel='stylesheet' */}
        {/*   href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css' */}
        {/* /> */}
      </body>
    </html>
  );
}
