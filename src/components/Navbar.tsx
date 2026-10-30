"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-[#0C0D0E]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-[#0C0D0E]/80 backdrop-blur-sm sm:bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-studio-orange transition-colors">
            Tushar Labs
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-2.5 border-l border-zinc-800">
            Studio
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {siteConfig.navigation.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-mono tracking-widest uppercase transition-colors py-1 relative",
                  active
                    ? "text-white font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-studio-orange"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2 bg-white text-zinc-950 font-bold hover:bg-studio-orange hover:text-white transition-colors"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger - 44px min touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2.5 -mr-2 hover:text-studio-orange transition-colors focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0C0D0E] border-b border-zinc-800 px-5 py-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-sm font-mono uppercase tracking-wider py-2.5 border-b border-zinc-900 flex items-center justify-between",
                pathname === "/" ? "text-studio-orange font-bold" : "text-zinc-300"
              )}
            >
              <span>Home</span>
              <span className="text-zinc-600 text-xs">&rarr;</span>
            </Link>
            {siteConfig.navigation.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-mono uppercase tracking-wider py-2.5 border-b border-zinc-900 flex items-center justify-between",
                    active ? "text-studio-orange font-bold" : "text-zinc-300 hover:text-studio-orange"
                  )}
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 text-xs">&rarr;</span>
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest px-5 py-3.5 bg-studio-orange text-white font-bold mt-3"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
