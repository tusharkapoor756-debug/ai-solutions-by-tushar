import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { seoConfig } from "@/config/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  ...seoConfig,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.tusharlabs.in/#organization",
      name: "Tushar Labs",
      alternateName: ["Tushar Labs Digital Studio", "Tushar Labs Web Development & AI Automation"],
      url: "https://www.tusharlabs.in",
      logo: "https://www.tusharlabs.in/tl-logo-transparent.png",
      image: "https://www.tusharlabs.in/images/pages/capabilities/hero.png",
      description:
        "Tushar Labs is a top-rated web development company and AI automation agency serving Delhi NCR, Noida, Gurgaon, and global businesses. We build high-converting websites, custom SaaS platforms, and intelligent agentic workflows.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Connaught Place / South Delhi",
        addressLocality: "New Delhi",
        addressRegion: "Delhi NCR",
        postalCode: "110001",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "New Delhi" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development & AI Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Design and Development",
              description: "High-performance websites built with Next.js, React, Tailwind CSS and sub-second load speeds.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Workflow & Agent Automation",
              description: "Custom AI agents, n8n/Make pipelines, LLM integration, and autonomous business workflows.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & SaaS Development",
              description: "Full-stack SaaS application engineering from database architecture to production deployment.",
            },
          },
        ],
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "28.6139",
        longitude: "77.2090",
      },
      telephone: "+919315569638",
      email: "tusharkapoor756@gmail.com",
      founder: {
        "@type": "Person",
        name: "Tushar Kapoor",
        jobTitle: "Founder & Full-Stack Engineer",
        url: "https://www.linkedin.com/in/tushar-kapoor-47a9a61b3",
      },
      priceRange: "₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/tushar-kapoor-47a9a61b3",
        "https://www.instagram.com/ai.solution_tushar",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.tusharlabs.in/#website",
      url: "https://www.tusharlabs.in",
      name: "Tushar Labs",
      publisher: { "@id": "https://www.tusharlabs.in/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, outfit.variable, jakarta.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={cn(
          inter.className,
          "font-sans bg-void text-prose-paper min-h-screen flex flex-col justify-between selection:bg-brand-orange selection:text-white"
        )}
      >
        <Navbar />
        <div className="flex-1 w-full pt-16 sm:pt-20">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
