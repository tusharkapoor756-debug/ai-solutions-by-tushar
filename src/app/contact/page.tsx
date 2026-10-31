import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Start a Project | Project Enquiry | TUSHAR LABS",
  description:
    "Initiate your project brief with Tushar Labs. Support for INR, USD, GBP, EUR, AED with instant WhatsApp and email forwarding.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-void">
      {/* Hero header */}
      <div className="relative border-b border-white/[0.07] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-4">
          <span className="eyebrow">Direct Engagement</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-prose-primary tracking-editorial leading-none">
            Start a Project.
          </h1>
          <p className="text-sm sm:text-base text-prose-secondary font-light max-w-xl leading-relaxed">
            Tell us about your objectives, timeline, and budget. Every brief is reviewed directly by our engineering leads with a response guaranteed within 24 hours.
          </p>
        </div>
      </div>

      {/* Embedded Contact Component with Currency + Phone + WhatsApp */}
      <Contact />
    </main>
  );
}
