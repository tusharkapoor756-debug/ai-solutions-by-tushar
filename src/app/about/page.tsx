import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, studioProcess } from "@/config/site";

export const metadata: Metadata = {
  title: "About Studio & Philosophy | TUSHAR LABS",
  description:
    "An independent digital solutions and technology studio. Discover our maker-led model, philosophy, and disciplined engineering approach.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
            Studio Profile
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-editorial">
            Craft, Code, &amp; Conviction.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
            Tushar Labs is an independent digital studio based in New Delhi, operating globally. We bridge high-concept design with production-grade full-stack software and intelligent automation.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-studio-orange block">
              Core Principles
            </span>
            <div className="p-5 bg-[#141619] border border-zinc-800 space-y-3 font-mono text-xs">
              <div className="text-zinc-500 uppercase">Operating Facts</div>
              <div className="space-y-2 text-zinc-300">
                <div>&bull; 100% Maker-Led Execution</div>
                <div>&bull; Zero Outsourcing Bureaucracy</div>
                <div>&bull; Strict Technical Authenticity</div>
                <div>&bull; Direct Communication via WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                The Maker Model vs. Agency Bloat
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                <p>
                  Traditional agency models are bogged down by account executives, project managers, and layers of miscommunication between the client and the person actually writing the code. The result is often an inflated invoice and a diluted digital product built on top of generic templates.
                </p>
                <p>
                  At Tushar Labs, you work directly with the architect. We design the interfaces, write the TypeScript code, structure the database migrations, and deploy the production services ourselves. This ensures uncompromising fidelity to the original design and lightning-fast iteration.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-800">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Our Architectural Stance
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                <p>
                  We believe that visual distinction and performance are not mutually exclusive. A website can have editorial sophistication, bold typography, and cinematic presence while still scoring 95+ on Google Lighthouse and loading in under a second on mobile networks.
                </p>
                <p>
                  Every system we construct is engineered for longevity. We choose boring, battle-tested foundations (PostgreSQL, TypeScript, Next.js) and layer on deterministic AI and automation only where it yields quantifiable leverage for your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Methodology */}
        <div className="space-y-8">
          <div className="border-b border-zinc-800 pb-4">
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Five Stages of Delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {studioProcess.map((step) => (
              <div
                key={step.step}
                className="p-5 bg-[#141619] border border-zinc-800 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-sm font-mono text-studio-orange font-bold block mb-2">
                    {step.step}
                  </span>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    {step.name}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.headline}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{step.description}</p>
                </div>
                <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-600 uppercase">
                  Verified Gate
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Connect Action */}
        <div className="p-8 sm:p-12 bg-[#141619] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Let&apos;s build something meaningful together.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Connect directly with our lead engineer to review your objectives.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors shrink-0"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
