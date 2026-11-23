import { siteConfig } from "./site";

export const seoConfig = {
  metadataBase: new URL("https://www.tusharlabs.in"),
  title: {
    default: "Tushar Labs — Web Development Studio & AI Automation Delhi NCR",
    template: "%s | Tushar Labs",
  },
  description:
    "Independent digital studio in New Delhi engineering high-conversion websites, custom SaaS platforms, and intelligent AI automation workflows for ambitious businesses.",
  keywords: [
    "Web Development Delhi",
    "AI Automation Studio Delhi NCR",
    "Next.js Developer India",
    "Custom SaaS Development",
    "Workflow Automation Agency",
    "Tushar Labs",
  ],
  authors: [
    {
      name: "Tushar Kapoor",
      url: "https://tusharlabs.vercel.app",
    },
  ],
  creator: "Tushar Kapoor",
  publisher: "Tushar Labs",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.tusharlabs.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "TUSHAR LABS — Web Development Company & AI Automation Agency Delhi NCR",
    description:
      "Premier digital studio in New Delhi, Noida & Gurgaon. Engineering high-velocity websites, custom software, and autonomous AI automation systems.",
    siteName: "TUSHAR LABS",
    images: [
      {
        url: "/images/pages/capabilities/hero.png",
        width: 1200,
        height: 630,
        alt: "Tushar Labs — Web Development and AI Studio Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TUSHAR LABS — Web Development Company & AI Automation Agency Delhi NCR",
    description:
      "Independent full-stack studio in New Delhi, Noida & Gurgaon. Designing and building high-performance websites, SaaS, and AI automation.",
    images: ["/images/pages/capabilities/hero.png"],
    creator: "@tusharlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export type SeoConfig = typeof seoConfig;
