import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import './preflight.css';
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

  keywords: ['blog', 'tech', 'tutorial'],
  authors: [{ name: 'pywkt', url: 'https://pywkt.com' }],
  publisher: 'pywkt',
  creator: 'pywkt',
  referrer: 'origin-when-cross-origin',
  applicationName: 'pywkt.com',
  generator: 'Next.js',
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL('https://pywkt.com'),
  openGraph: {
    title: `pywkt.com`,
    description: 'Various things are here',
    url: `https://pywkt.com`,
    siteName: 'pywkt.com',
    locale: 'en_US',
    type: 'website',
    // authors: ['pywkt'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pywkt.com',
    description: 'Various things are here.',
    creator: 'pywkt',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    leftSpacerGrid,
    mainContentContainer,
    pageGrid,
    tagListContainer,
    themeToggleContainer,
  } = styles;
  const defaultTheme = 'light';
  const cookieValue = cookies().get('theme')?.value || '';
  const isTheme = cookieValue === defaultTheme || cookieValue === 'dark';
  const theme: string = isTheme ? cookieValue : defaultTheme;
  const isProd = process.env.NEXT_PUBLIC_IS_PROD === 'true';

  return (
    <html lang='en' className={`${dankMonoReg.className} ${theme}`}>
      <body>
        {/* {isProd && ( */}
        {/*   <Script */}
        {/*     defer */}
        {/*     data-domain='pywkt.com' */}
        {/*     src={process.env.NEXT_PUBLIC_PL_URL} */}
        {/*   /> */}
        {/* )} */}
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
