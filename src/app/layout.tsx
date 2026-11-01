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
      "@type": "ProfessionalService",
      "@id": "https://tusharlabs.vercel.app/#organization",
      name: "Tushar Labs",
      alternateName: "Tushar Labs Digital Studio",
      url: "https://tusharlabs.vercel.app",
      logo: "https://tusharlabs.vercel.app/tl-logo-transparent.png",
      image: "https://tusharlabs.vercel.app/images/pages/capabilities/hero.png",
      description:
        "Tushar Labs is an independent digital studio based in New Delhi, India specializing in custom website development, SaaS software, and AI workflow automation.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
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
          opens: "10:00",
          closes: "19:00",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/tushar-kapoor-47a9a61b3",
        "https://www.instagram.com/ai.solution_tushar",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://tusharlabs.vercel.app/#website",
      url: "https://tusharlabs.vercel.app",
      name: "Tushar Labs",
      publisher: { "@id": "https://tusharlabs.vercel.app/#organization" },
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
