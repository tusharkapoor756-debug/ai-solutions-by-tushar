"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("tl_cookie_consent");
    if (!consent) {
      // Show banner after brief delay
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("tl_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("tl_cookie_consent", "dismissed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 p-4 sm:p-5 rounded-sm border border-border bg-void/95 backdrop-blur-xl shadow-2xl shadow-black/60 transition-all duration-300 animate-fade-in"
      style={{ background: "hsl(var(--card))" }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
          <Cookie size={16} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>
            Cookie &amp; Experience Notice
          </p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            We use essential cookies and storage to maintain your preferences, optimize speed, and ensure seamless project inquiries. Review our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>
            .
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-muted-foreground hover:text-foreground p-1 -mr-1 -mt-1 transition-colors"
          aria-label="Close cookie banner"
        >
          <X size={14} />
        </button>
      </div>

      <div className="flex items-center gap-2 pt-1 font-mono text-xs">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 text-[11px] font-semibold uppercase tracking-wider rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
        >
          Accept Essential
        </button>
        <button
          onClick={handleDismiss}
          className="py-2 px-3 text-[11px] font-medium uppercase tracking-wider rounded-sm border border-border text-muted-foreground hover:text-foreground transition-colors text-center"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
