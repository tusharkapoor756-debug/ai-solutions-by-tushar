import { siteConfig } from "./site";

export const seoConfig = {
  metadataBase: new URL("https://tusharlabs.vercel.app"),
  title: {
    default: "TUSHAR LABS — Independent Digital Solutions & Technology Studio",
    template: "%s | TUSHAR LABS",
  },
  description:
    "We design and build websites, custom software, and intelligent digital systems that help businesses move forward. An independent studio based in New Delhi, operating globally.",
  keywords: [
    "Tushar Labs",
    "Digital Studio",
    "Website Design and Development",
    "Custom Software Studio",
    "AI Systems Architecture",
    "SaaS Development",
    "Full-Stack TypeScript",
    "Next.js Development Studio",
    "Independent Technology Studio",
  ],
  authors: [
    {
      name: "Tushar Kapoor",
      url: "https://tusharlabs.vercel.app",
    },
  ],
  creator: "Tushar Kapoor — Tushar Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "TUSHAR LABS — Independent Digital Solutions & Technology Studio",
    description:
      "We design and build websites, custom software, and intelligent digital systems that help businesses move forward.",
    siteName: "TUSHAR LABS",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "TUSHAR LABS — Independent Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TUSHAR LABS — Independent Digital Solutions & Technology Studio",
    description:
      "We design and build websites, custom software, and intelligent digital systems that help businesses move forward.",
    creator: "@tusharlabs",
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }],
    apple: '/favicon.svg',
  },
};

export type SeoConfig = typeof seoConfig;

