"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { TLMark } from "@/components/BrandLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-void/95 backdrop-blur-xl border-b border-white/[0.07] py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

        {/* Brand Wordmark with Interlocking TL Logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <TLMark className="w-8 h-7 shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex items-center tracking-tight leading-none font-black text-base sm:text-lg font-heading uppercase">
            <span className="text-white group-hover:text-white transition-colors">Tushar</span>
            <span className="text-brand-orange group-hover:text-brand-bright transition-colors">Labs</span>
          </div>
          <span className="hidden sm:inline-block text-[9px] font-mono text-prose-dim uppercase tracking-widest pl-2.5 border-l border-white/10">
            Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {siteConfig.navigation.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] font-mono tracking-widest uppercase transition-all duration-200 py-1 relative",
                  active
                    ? "text-prose-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-orange"
                    : "text-prose-secondary hover:text-prose-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest px-4 py-2.5 bg-brand-orange text-white font-bold hover:bg-brand-hover transition-colors duration-200 rounded-sm shadow-md shadow-brand-orange/20"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-prose-primary p-2.5 -mr-2 hover:text-brand-orange transition-colors focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-xl border-b border-white/[0.07] px-4 py-6 flex flex-col gap-3 animate-slide-in-top">
          <nav className="flex flex-col gap-0.5">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-sm font-mono uppercase tracking-wider py-3 border-b border-white/[0.06] flex items-center justify-between",
                pathname === "/" ? "text-brand-orange font-bold" : "text-prose-secondary"
              )}
            >
              <span>Home</span>
              <span className="text-prose-dim text-xs">→</span>
            </Link>
            {siteConfig.navigation.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-mono uppercase tracking-wider py-3 border-b border-white/[0.06] flex items-center justify-between",
                    active ? "text-brand-orange font-bold" : "text-prose-secondary hover:text-prose-primary"
                  )}
                >
                  <span>{link.name}</span>
                  <span className="text-prose-dim text-xs">→</span>
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest px-5 py-3.5 bg-brand-orange text-white font-bold mt-3 hover:bg-brand-hover transition-colors rounded-sm"
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
