import { Metadata } from "next";

export const postMetadata = (postMeta: any):Metadata => {
  return {
    title: {
      default: 'pywkt.com',
      absolute: `${postMeta.title} | pywkt.com`,
    },
    description: postMeta.description,
    keywords: postMeta.tags,
    authors: [{ name: 'pywkt', url: 'https://pywkt.com' }],
    publisher: 'pywkt',
    creator: 'pywkt',
    referrer: 'origin-when-cross-origin',
    applicationName: 'pywkt.com',
    generator: 'Next.js',
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL('https://pywkt.com'),
    openGraph: {
      title: `${postMeta.title} | pywkt.com`,
      description: postMeta.description,
      url: `https://pywkt.com/post/${postMeta.slug}`,
      siteName: 'pywkt.com',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(postMeta.date).toISOString(),
      authors: ['pywkt'],
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
      title: postMeta.title,
      description: postMeta.description,
      creator: 'pywkt',
    },
    category: 'technology',
  };
};
