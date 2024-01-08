import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import { dankMonoReg, dankMonoItal, blexMonoReg, blexMonoItal, blexMonoBold } from '@/config/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'pywkt',
  description: 'Various things are here',
};

export default function RootLayout({
  children,
  // tagsRoute,
}: {
  children: React.ReactNode;
  // tagsRoute: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${blexMonoReg.variable} ${blexMonoItal.variable}`}>
      <body className={`px-2 font-reg`}>
        <Header />

        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7'>
          <div className='hidden lg:grid lg:col-span-2' />
          <div className='md:col-span-5 lg:col-span-4 max-w-[640px]'>
            {children}
          </div>
          <div className='text-right row-start-1 md:grid md:col-span-1 md:col-start-7'>
            <TagList />
            {/* {tagsRoute} */}
          </div>
        </div>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css'
        />
      </body>
    </html>
  );
}
