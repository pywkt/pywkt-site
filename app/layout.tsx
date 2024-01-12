// import { cookies } from 'next/headers';
import Script from 'next/script';
import './preflight.css';
import './globals.css';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
// import ThemeToggle from '@/components/ThemeToggle';
import { dankMonoReg } from '@/config/fonts';
import Footer from '@/components/Footer';
import styles from './layouts.module.css';
import { siteMetadata } from './siteMetadata';
import { getTheme } from '@/util/getTheme';
import dynamic from 'next/dynamic';

// const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
//   ssr: false,
// });
const SetTheme = dynamic(() => import('@/components/SetTheme'), {
  ssr: false,
});

export const metadata = siteMetadata;

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
  // const defaultTheme = 'light';
  // const cookieValue = cookies().get('theme')?.value || '';
  // const isTheme = cookieValue === defaultTheme || cookieValue === 'dark';
  // const theme: string = isTheme ? cookieValue : defaultTheme;
  // const isProd = process.env.NEXT_PUBLIC_IS_PROD === 'true';

  return (
    <html lang='en' className={`${dankMonoReg.className}`}>
      <head>
        <Script
          id='themeToggle'
          dangerouslySetInnerHTML={{ __html: getTheme }}
        />
      </head>
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
          {/* <ThemeToggle currentTheme={theme} /> */}
          {/* <ThemeToggle /> */}
          <SetTheme />
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
