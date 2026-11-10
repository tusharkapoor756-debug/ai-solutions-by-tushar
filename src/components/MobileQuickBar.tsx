"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, ArrowUpRight, ArrowUp } from "lucide-react";

export default function MobileQuickBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 z-50 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0A0D14]/90 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80">
        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold shadow-md active:scale-95 transition-all"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span>WhatsApp Founder</span>
        </a>

        {/* Start Project Proposal Button */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs font-semibold active:scale-95 transition-all"
        >
          <span>Start Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
