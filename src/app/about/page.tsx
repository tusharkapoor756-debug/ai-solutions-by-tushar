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
    <main className="min-h-screen bg-void">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-28 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="eyebrow">Studio Profile</span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-prose-primary tracking-editorial leading-none">
                Craft, Code,{" "}
                <span className="gradient-text">& Conviction.</span>
              </h1>
              <p className="text-sm sm:text-base text-prose-secondary font-light max-w-2xl leading-relaxed">
                Tushar Labs is an independent digital studio based in New Delhi, operating globally. We bridge high-concept design with production-grade full-stack software and intelligent automation.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="p-5 bg-surface border border-brand-orange/20 rounded-sm space-y-3 font-mono text-xs">
                <div className="text-[10px] uppercase tracking-eyebrow text-brand-orange border-b border-white/[0.07] pb-3">
                  Operating Facts
                </div>
                <div className="space-y-2.5 text-prose-secondary">
                  {[
                    "100% Maker-Led Execution",
                    "Zero Outsourcing Bureaucracy",
                    "Strict Technical Authenticity",
                    "Direct Client Communication",
                    "New Delhi · Available Globally",
                  ].map((fact) => (
                    <div key={fact} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 sm:py-24 md:py-28 border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow">Studio Manifesto</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-prose-primary tracking-editorial leading-tight">
                Why we reject the agency model.
              </h2>
              <div className="w-8 h-px bg-brand-orange mb-6" />
              <p className="text-sm text-prose-secondary font-light leading-relaxed">
                Traditional agencies build bloated account-management pyramids. You pitch to the senior partner, but your software is built by disconnected subcontractors juggling 10 accounts simultaneously.
              </p>
              <p className="text-sm text-prose-secondary font-light leading-relaxed">
                Tushar Labs was formed as an antidote: a compact, high-conviction digital studio where you work directly with the people architecting your system and writing your code.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Direct Engineering Accountability",
                  desc: "No middlemen account executives. Technical scoping and architecture decisions happen in direct conversation between you and the maker.",
                },
                {
                  title: "Modern, Type-Safe Architecture",
                  desc: "We write clean, typed codebases (TypeScript, Next.js, Supabase, Tailwind) that your internal engineering team can easily inherit and scale.",
                },
                {
                  title: "Honest Delivery Timelines",
                  desc: "We provide realistic, sprint-based scopes and deterministic milestones. No inflated hours or hidden change-order fees.",
                },
                {
                  title: "100% IP & Asset Ownership",
                  desc: "Upon final delivery, every repository, Figma design file, domain configuration, and cloud asset belongs unconditionally to you.",
                },
              ].map((item, i) => (
                <div key={item.title} className="p-4 bg-void border border-white/[0.07] rounded-sm hover:border-brand-orange/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-brand-orange font-bold">0{i + 1}</span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-display font-semibold text-prose-primary">{item.title}</h3>
                      <p className="text-xs text-prose-secondary font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 sm:py-24 bg-surface border-b border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="pb-8 mb-10 border-b border-white/[0.07] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow block mb-2">Delivery Lifecycle</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-prose-primary tracking-editorial">
                The 5-Stage Studio Process.
              </h2>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-prose-dim max-w-xs">
              Every engagement follows our deterministic 5-stage blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {studioProcess.map((step) => (
              <div key={step.step} className="p-5 bg-void border border-white/[0.07] rounded-sm space-y-3">
                <div className="text-3xl font-display font-black text-prose-muted/30">
                  {step.step}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-eyebrow text-brand-orange font-semibold">
                  Stage: {step.name}
                </div>
                <h3 className="text-sm font-display font-bold text-prose-primary leading-snug">
                  {step.headline}
                </h3>
                <p className="text-xs text-prose-dim leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-void">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="p-8 sm:p-12 bg-raised border border-brand-orange/20 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="eyebrow">Ready to collaborate?</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary">
                Let&apos;s build something exceptional together.
              </h2>
              <p className="text-xs sm:text-sm text-prose-secondary font-light max-w-lg">
                Tell us about your project or schedule a call to explore fit and technical requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors shrink-0 rounded-sm shadow-lg shadow-brand-orange/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
