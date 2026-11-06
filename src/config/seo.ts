import { siteConfig } from "./site";

export const seoConfig = {
  metadataBase: new URL("https://www.tusharlabs.in"),
  title: {
    default: "TUSHAR LABS — Web Development Company & AI Automation Agency Delhi NCR",
    template: "%s | TUSHAR LABS",
  },
  description:
    "Top Web Development Company & AI Automation Agency in Delhi NCR, Noida & Gurgaon. We build high-converting websites, custom SaaS platforms, and intelligent AI agents for growing businesses.",
  keywords: [
    // Top-Tier Delhi NCR Commercial Intent
    "Web Development Company Delhi",
    "Web Development Agency in Delhi NCR",
    "Website Design and Development Company Delhi",
    "Top Web Development Company in Delhi",
    "Custom Web Development Company Delhi",
    "Web Design Agency in Gurugram Gurgaon",
    "Web Development Company in Noida Sector 62",
    "Website Development Company South Delhi",
    
    // AI Agents & Automation (High-Value Intent)
    "AI Automation Agency Delhi",
    "AI Agent Development Company in Delhi NCR",
    "Custom AI Solutions Provider Delhi",
    "LangGraph AI Agents Development India",
    "AI Workflow Automation Agency Noida Gurugram",
    "n8n and Make.com AI Automation Expert",
    "Enterprise RAG Implementation Services Delhi",
    "WhatsApp Business API AI Automation Agency",
    "AI Voice Bot Development Hindi Hinglish",

    // Tech Stack & Engineering Pedigree
    "Next.js Developer Delhi",
    "Full Stack Developer India",
    "React TypeScript Developer Delhi NCR",
    "SaaS Development Studio India",
    "Custom Software Company Delhi",
    "Freelance Web Developer India",
    "E-commerce Web Development Company Delhi",

    // Brand & Studio Authority
    "Tushar Labs",
    "Tushar Labs Digital Studio",
    "Tushar Kapoor Web Developer",
    "KitchenZap SaaS",
    "NOVA Market Marketplace",
    "ESTORA Real Estate Platform",
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
