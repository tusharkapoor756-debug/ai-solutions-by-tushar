import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import NovaMarketShowcase from "@/components/NovaMarketShowcase";
import EstoraShowcase from "@/components/EstoraShowcase";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Tushar Labs | Selected Projects & Software",
  description:
    "Explore digital systems and web applications engineered by Tushar Labs — including NOVA Market, ESTORA, KitchenZap SaaS, and Restroex.",
  keywords: [
    "Tushar Labs Work",
    "Web Development Projects",
    "Next.js Projects",
    "SaaS Applications",
  ],
  alternates: {
    canonical: "https://www.tusharlabs.in/work",
  },
};

const coverImages: Record<string, string> = {
  "nova-market": "/images/pages/work/nova-market-desktop-full.webp",
  estora: "/images/pages/work/estora-desktop-full.webp",
  kitchenzap: "/images/pages/work/kitchenzap-cover.png",
  restroex: "/images/pages/work/restroex-cover.png",
  safaronroads: "/images/pages/work/safaronroads-cover.png",
  agentx: "/images/pages/work/agentx-cover.png",
  nexus: "/images/pages/work/nexus-cover.png",
};

const coverAlts: Record<string, string> = {
  "nova-market": "NOVA Market — modern multi-category e-commerce marketplace",
  estora: "ESTORA — premium real estate developer website concept",
  kitchenzap: "KitchenZap — restaurant management SaaS dashboard",
  restroex: "Restroex — AI-powered restaurant ordering system",
  safaronroads: "Safaronroads — adventure travel website",
  agentx: "Agent-X — AI sales agent platform",
  nexus: "Nexus — AI business operating system",
};

const statusBadge: Record<string, { label: string; cls: string }> = {
  live: { label: "Live Product", cls: "bg-primary text-primary-foreground" },
  development: { label: "In Development", cls: "border border-border text-muted-foreground" },
  prototype: { label: "Prototype", cls: "border border-border text-muted-foreground" },
  concept: { label: "Concept", cls: "border border-border text-muted-foreground" },
};

export default function WorkPage() {
  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO ── */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {work.hero.label}
            </span>
            <h1
              className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {work.hero.heading}
            </h1>
          </div>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
            {work.hero.subheading}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-border">
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{work.hero.stat1}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{work.hero.stat2}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{work.hero.stat3}</span>
        </div>
      </section>

      {/* ── FEATURED CASE STUDIES ── */}
      {work.featured.map((project, idx) => {
        const isEven = idx % 2 === 0;
        const badge = statusBadge[project.statusType] ?? statusBadge.concept;

        return (
          <section
            key={project.id}
            id={project.id}
            className="border-t border-border"
            style={{ background: isEven ? "hsl(var(--background))" : "hsl(var(--secondary))" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
              {/* Number + divider + badges */}
              <FadeUp className="flex items-center gap-3 mb-8">
                <span className="font-mono text-2xl lg:text-3xl font-bold text-primary leading-none">
                  {project.num}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs px-2.5 py-1 rounded-sm border border-primary text-primary">
                  {project.category}
                </span>
                <span className={`font-mono text-xs px-2.5 py-1 rounded-sm ${badge.cls}`}>
                  {badge.label}
                </span>
              </FadeUp>

              {/* Showcase presentation: NOVA Market or ESTORA interactive dual-device showcase OR standard cover */}
              {project.id === "nova-market" ? (
                <FadeUp className="mb-10">
                  <NovaMarketShowcase />
                </FadeUp>
              ) : project.id === "estora" ? (
                <FadeUp className="mb-10">
                  <EstoraShowcase />
                </FadeUp>
              ) : (
                <FadeUp className="mb-8">
                  <div className="relative overflow-hidden rounded-sm border border-border aspect-[21/9] max-h-[360px] w-full">
                    <Image
                      src={coverImages[project.id] ?? ""}
                      alt={coverAlts[project.id] ?? project.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      loading={idx === 0 ? "eager" : "lazy"}
                      priority={idx === 0}
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    {/* Orange corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
                    <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
                    {/* Name overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)" }}
                    >
                      <p className="font-mono text-xs tracking-widest uppercase mb-1 text-white/70">
                        {project.industry}
                      </p>
                      <h2
                        className="text-xl lg:text-2xl font-extrabold leading-tight text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.name}
                      </h2>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* Two-column: overview + meta */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-2">
                {/* Left: tagline + overview + problem/solution + features */}
                <div className="lg:col-span-2">
                  <FadeUp>
                    <p
                      className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.overview}
                    </p>
                  </FadeUp>

                  {/* Problem / Solution */}
                  <FadeUp delay={60} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div
                      className="rounded-sm border border-border p-4"
                      style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                    >
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-2 font-semibold">
                        The Problem
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div
                      className="rounded-sm border border-border p-4"
                      style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                    >
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-2 font-semibold">
                        The Solution
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </FadeUp>

                  {/* Key features */}
                  <FadeUp delay={100}>
                    <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3 font-semibold">
                      Key Engineering Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">→</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </FadeUp>
                </div>

                {/* Right: meta panel */}
                <FadeUp delay={60}>
                  <div
                    className="rounded-sm border border-border p-5 flex flex-col gap-4 h-fit"
                    style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                        Project Type
                      </span>
                      <p className="text-xs sm:text-sm text-foreground font-medium">{project.projectType}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                        My Role
                      </span>
                      <p className="text-xs sm:text-sm text-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-0.5 rounded-sm border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                        Status
                      </span>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded-sm inline-block ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                    {project.outcomes && (
                      <div>
                        <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                          Outcomes
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {project.outcomes}
                        </p>
                      </div>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity mt-2"
                      >
                        {project.liveLabel} ↗
                      </a>
                    )}
                  </div>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── COMPACT GRID — In the Lab ── */}
      <section className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              EARLY STAGE / CONCEPTS
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              In the Lab.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {work.compact.map((project, i) => {
              const badge = statusBadge[project.statusType] ?? statusBadge.concept;

              return (
                <FadeUp key={project.id} delay={i * 80}>
                  <div
                    className="group flex flex-col h-full"
                    style={{ background: "hsl(var(--card))" }}
                  >
                    {/* Cover image */}
                    <div className="relative overflow-hidden aspect-[21/9] max-h-[220px]">
                      <Image
                        src={coverImages[project.id] ?? ""}
                        alt={coverAlts[project.id] ?? project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
                      <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
                      <div className="absolute top-3 right-3 pointer-events-none">
                        <span className={`font-mono text-xs px-2 py-0.5 rounded-sm ${badge.cls}`}>
                          {badge.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs text-primary font-bold">{project.num}</span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-primary text-primary">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {project.overview}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-0.5 rounded-sm border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Role + status */}
                      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block">
                            Role
                          </span>
                          <p className="text-xs text-foreground font-medium">{project.role}</p>
                        </div>
                        {project.outcomes && (
                          <div className="text-right">
                            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block">
                              Status
                            </span>
                            <p className="text-xs text-muted-foreground">{project.outcomes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {work.cta.label}
            </span>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {work.cta.heading}
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {work.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {work.cta.cta1}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {work.cta.cta2}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
