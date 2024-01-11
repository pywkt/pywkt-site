import localFont from 'next/font/local';

export const dankMonoReg = localFont({
  variable: '--font-dank-mono-reg',
  src: '../public/fonts/DankMonoRegular.woff2',
  display: 'swap',
});

export const dankMonoItal = localFont({
  variable: '--font-dank-mono-ital',
  src: '../public/fonts/DankMonoItalic.woff2',
  display: 'swap',
});
