import { siteConfig } from "./site";

export const seoConfig = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI Chatbots",
    "WhatsApp Automation",
    "Website Development",
    "AI Automation Agency",
    "AI Solutions",
    "Business Automation",
    "Lead Generation AI",
  ],
  authors: [
    {
      name: "Tushar Kapoor",
      url: "https://tusharkapoor.com",
    },
  ],
  creator: "Tushar Kapoor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tushar",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export type SeoConfig = typeof seoConfig;
