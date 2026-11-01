import { siteConfig } from "./site";

export const seoConfig = {
  metadataBase: new URL("https://tusharlabs.vercel.app"),
  title: {
    default: "TUSHAR LABS — Web Development & AI Automation Studio Delhi, India",
    template: "%s | TUSHAR LABS",
  },
  description:
    "Tushar Labs is an independent digital studio in New Delhi, India. We engineer high-converting websites, custom SaaS software, and intelligent AI automation workflows for ambitious businesses.",
  keywords: [
    // High-Intent India & Delhi Keywords
    "Website Development Company Delhi",
    "Web Designer Delhi NCR",
    "Full Stack Developer India",
    "AI Automation Agency India",
    "Next.js Developer Delhi",
    "SaaS Development Studio India",
    "Custom Software Company Delhi",
    "Freelance Web Developer India",
    "Restaurant Tech Software KitchenZap",
    "Business Automation India",
    
    // Core Service Keywords
    "Website Design and Development",
    "Custom Software & SaaS",
    "AI Workflow Automation n8n Make",
    "Branding & Digital Identity",
    "Independent Digital Studio",
    "Tushar Labs",
    "Tushar Kapoor Web Developer",
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
    canonical: "https://tusharlabs.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "TUSHAR LABS — Web Development & AI Automation Studio Delhi, India",
    description:
      "Independent full-stack studio in New Delhi. We design and build modern websites, custom software, and AI automation systems.",
    siteName: "TUSHAR LABS",
    images: [
      {
        url: "/images/pages/capabilities/hero.png",
        width: 1200,
        height: 630,
        alt: "Tushar Labs — Web Development and AI Studio Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TUSHAR LABS — Web Development & AI Automation Studio Delhi, India",
    description:
      "Independent full-stack studio in New Delhi. Designing and building high-performance websites, SaaS, and AI automation.",
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
