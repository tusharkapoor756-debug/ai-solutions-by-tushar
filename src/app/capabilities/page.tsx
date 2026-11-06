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
      <section className="pt-28 lg:pt-36 pb-0 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-5">
              {capabilities.hero.label}
            </span>
            <h1
              className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.hero.heading}
            </h1>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
            {capabilities.hero.subheading}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-border mb-14">
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat1}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat2}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{capabilities.hero.stat3}</span>
        </div>

        {/* Hero image */}
        <FadeUp>
          <div className="relative overflow-hidden rounded-sm border border-border aspect-video w-full">
            <Image
              src="/images/pages/capabilities/hero.png"
              alt="Tushar Labs — independent full-stack studio at work"
              fill
              className="object-cover"
              loading="eager"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary pointer-events-none" />
            <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary pointer-events-none" />
          </div>
        </FadeUp>
      </section>

      {/* ── HOW WE THINK — positioning pillars ── */}
      <section className="border-t border-border mt-0" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.positioning.label}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capabilities.positioning.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
                {capabilities.positioning.body}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {capabilities.positioning.pillars.map((pillar, i) => (
              <FadeUp key={pillar.id} delay={i * 80}>
                <div
                  className="p-8 h-full group hover:border-l-2 hover:border-l-primary transition-all duration-200"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="font-mono text-xs text-primary block mb-4">{pillar.num}</span>
                  <h3
                    className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL STACK ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.stack.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.stack.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {capabilities.stack.categories.map((cat, i) => (
              <FadeUp key={cat.id} delay={i * 50}>
                <div
                  className="p-6 h-full"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                    {cat.name}
                  </span>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-sm text-foreground leading-relaxed">
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

      {/* ── BUILD VS NOT ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.buildVsNot.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.buildVsNot.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {/* We build */}
            <FadeUp>
              <div className="p-8 h-full" style={{ background: "hsl(var(--card))" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-mono text-xs text-primary tracking-widest uppercase">
                    We build
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {capabilities.buildVsNot.builds.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="text-primary shrink-0 mt-0.5 font-mono text-xs">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* We don't */}
            <FadeUp delay={80}>
              <div className="p-8 h-full" style={{ background: "hsl(var(--card))" }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground shrink-0" />
                  <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                    We don&apos;t
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {capabilities.buildVsNot.doesNot.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="shrink-0 mt-0.5 font-mono text-xs">×</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.howWeWork.label}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capabilities.howWeWork.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
                {capabilities.howWeWork.body}
              </p>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-px bg-border">
            {capabilities.howWeWork.steps.map((step, i) => (
              <FadeUp key={step.id} delay={i * 60}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[80px_200px_1fr] gap-6 lg:gap-12 items-start p-7 group hover:border-l-2 hover:border-l-primary transition-all duration-200"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <span className="font-mono text-3xl font-bold text-primary leading-none">
                    {step.num}
                  </span>
                  <h3
                    className="text-base font-bold text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.phase}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STUDIO ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.studio.label}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capabilities.studio.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
                {capabilities.studio.body}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {capabilities.studio.facts.map((fact, i) => (
              <FadeUp key={fact.id} delay={i * 70}>
                <div
                  className="p-7 h-full"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div className="w-8 h-0.5 bg-primary mb-5" />
                  <h3
                    className="text-base font-bold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {fact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.engagements.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.engagements.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {capabilities.engagements.models.map((model, i) => (
              <FadeUp key={model.id} delay={i * 80}>
                <div
                  className="p-8 h-full flex flex-col"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl font-bold text-primary leading-none">
                      {model.num}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3
                    className="text-xl font-extrabold text-foreground mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {model.name}
                  </h3>
                  <p className="font-mono text-xs text-primary mb-5">{model.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {model.body}
                  </p>
                  <div className="pt-5 border-t border-border">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                      Best for
                    </span>
                    <p className="text-xs text-foreground">{model.bestFor}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {capabilities.industries.label}
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {capabilities.industries.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
                {capabilities.industries.body}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {capabilities.industries.list.map((industry, i) => (
              <FadeUp key={industry.id} delay={i * 60}>
                <div
                  className="p-7 h-full group hover:border-l-2 hover:border-l-primary transition-all duration-200"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <h3
                    className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{industry.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
              {capabilities.cta.label}
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {capabilities.cta.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {capabilities.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {capabilities.cta.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
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
