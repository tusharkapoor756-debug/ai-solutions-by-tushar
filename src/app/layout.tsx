import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seoConfig } from "@/config/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  ...seoConfig,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, outfit.variable)}>
      <body className={cn(inter.className, "font-sans bg-[#0C0D0E] text-[#E3E5E8] min-h-screen flex flex-col justify-between selection:bg-studio-orange selection:text-white")}>
        <Navbar />
        <div className="flex-1 w-full pt-16 sm:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
