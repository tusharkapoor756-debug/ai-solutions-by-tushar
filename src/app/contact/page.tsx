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
    <main className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6">
        <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
          Direct Engagement
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-editorial">
          Start a Project.
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl leading-relaxed mt-2">
          Tell us about your objectives, timeline, and budget. Every brief is reviewed directly by our engineering leads with a response guaranteed within 24 hours.
        </p>
      </div>

      {/* Embedded Contact Component with Currency + Phone + WhatsApp */}
      <Contact />
    </main>
  );
}
