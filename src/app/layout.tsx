import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, outfit.variable, jakarta.variable)}>
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
      </body>
    </html>
  );
}
