import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "pywkt",
  description: "Various things are here",

  keywords: ["blog", "tech", "tutorial"],
  authors: [{ name: "pywkt", url: "https://pywkt.com" }],
  publisher: "pywkt",
  creator: "pywkt",
  referrer: "origin-when-cross-origin",
  applicationName: "pywkt.com",
  generator: "Next.js",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://pywkt.com"),
  openGraph: {
    title: `pywkt.com`,
    description: "Various things are here",
    url: `https://pywkt.com`,
    siteName: "pywkt.com",
    locale: "en_US",
    type: "website",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "pywkt.com",
    description: "Various things are here.",
    creator: "pywkt",
  },
  category: "technology",
};
