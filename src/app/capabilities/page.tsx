import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import { capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Capabilities — Tushar Labs | Next.js, AI Agents, & Custom SaaS Architecture",
  description:
    "Explore our technical capabilities: Next.js 14, TypeScript, Tailwind CSS, Python LangGraph agents, n8n automation, and scalable cloud deployments engineered for enterprises in Delhi NCR and globally.",
  keywords: [
    "Next.js Development Capabilities",
    "AI Agent Architecture India",
    "LangGraph Multi-Agent Systems Delhi",
    "Tailwind CSS Frontend Engineering",
    "SaaS Architecture India",
  ],
  alternates: {
    canonical: "https://www.tusharlabs.in/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO ── */}
      <section className="pt-20 lg:pt-28 pb-0 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {capabilities.hero.label}
            </span>
            <h1
              className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.hero.heading}
            </h1>
          </div>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
            {capabilities.hero.subheading}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-border mb-10">
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat1}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat2}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat3}</span>
        </div>

        {/* Hero image - compact banner */}
        <FadeUp>
          <div className="relative overflow-hidden rounded-sm border border-border aspect-[21/9] max-h-[380px] w-full">
            <Image
              src="/images/pages/capabilities/hero.png"
              alt="Tushar Labs — technical stack and execution engine"
              fill
              className="object-cover"
              loading="eager"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
            <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
          </div>
        </FadeUp>
      </section>

      {/* ── TECHNICAL STACK ── */}
      <section className="border-t border-border mt-12" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {capabilities.stack.label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.stack.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {capabilities.stack.categories.map((cat, i) => (
              <FadeUp key={cat.id} delay={i * 40}>
                <div
                  className="p-6 h-full"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                    {cat.name}
                  </span>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-sm text-foreground leading-relaxed flex items-center gap-2">
                        <span className="text-primary font-mono text-xs">→</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD VS WHAT WE DON'T ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {capabilities.buildVsNot.label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.buildVsNot.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {/* We build */}
            <FadeUp>
              <div className="p-7 h-full" style={{ background: "hsl(var(--card))" }}>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
                    We build
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {capabilities.buildVsNot.builds.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="text-primary shrink-0 mt-0.5 font-mono text-xs">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* We don't */}
            <FadeUp delay={60}>
              <div className="p-7 h-full" style={{ background: "hsl(var(--card))" }}>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground shrink-0" />
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase font-semibold">
                    We don&apos;t build
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {capabilities.buildVsNot.doesNot.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="shrink-0 mt-0.5 font-mono text-xs">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK — Compact Process ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {capabilities.howWeWork.label}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2
                className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capabilities.howWeWork.heading}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
                {capabilities.howWeWork.body}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {capabilities.howWeWork.steps.map((step, i) => (
              <FadeUp key={step.id} delay={i * 50}>
                <div
                  className="p-6 h-full flex flex-col justify-between group hover:border-t-2 hover:border-t-primary transition-all duration-200"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div>
                    <span className="font-mono text-2xl font-bold text-primary block mb-3">
                      {step.num}
                    </span>
                    <h3
                      className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.phase}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS & DELIVERED INDUSTRIES ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {capabilities.engagements.label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.engagements.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border mb-10">
            {capabilities.engagements.models.map((model, i) => (
              <FadeUp key={model.id} delay={i * 60}>
                <div
                  className="p-6 h-full flex flex-col justify-between"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl font-bold text-primary leading-none">
                        {model.num}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3
                      className="text-lg font-extrabold text-foreground mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {model.name}
                    </h3>
                    <p className="font-mono text-xs text-primary mb-3">{model.tagline}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {model.body}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                      Best for
                    </span>
                    <p className="text-xs text-foreground font-medium">{model.bestFor}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Compact Industries Badge Strip */}
          <FadeUp delay={100}>
            <div className="p-6 rounded-sm border border-border" style={{ background: "hsl(var(--background))" }}>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                Industries Served
              </span>
              <div className="flex flex-wrap gap-2">
                {capabilities.industries.list.map((ind) => (
                  <span
                    key={ind.id}
                    className="font-mono text-xs px-3 py-1.5 rounded-sm border border-border text-foreground bg-card"
                  >
                    <span className="text-primary mr-1.5">●</span>
                    {ind.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--background))" }} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.cta.label}
            </span>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.cta.heading}
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {capabilities.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {capabilities.cta.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {capabilities.cta.cta2}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
