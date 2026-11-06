import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import NovaMarketShowcase from "@/components/NovaMarketShowcase";
import { work } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Tushar Labs | Selected Projects",
  description:
    "Selected projects by Tushar Labs — NOVA Market, KitchenZap, Restroex, Safaronroads, Agent-X, and Nexus.",
};

const coverImages: Record<string, string> = {
  "nova-market": "/images/pages/work/nova-market-desktop-full.webp",
  kitchenzap: "/images/pages/work/kitchenzap-cover.png",
  restroex: "/images/pages/work/restroex-cover.png",
  safaronroads: "/images/pages/work/safaronroads-cover.png",
  agentx: "/images/pages/work/agentx-cover.png",
  nexus: "/images/pages/work/nexus-cover.png",
};

const coverAlts: Record<string, string> = {
  "nova-market": "NOVA Market — modern multi-category e-commerce marketplace",
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
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-5">
              {work.hero.label}
            </span>
            <h1
              className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {work.hero.heading}
            </h1>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
            {work.hero.subheading}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border">
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
              {/* Number + divider + badges */}
              <FadeUp className="flex items-center gap-4 mb-12">
                <span className="font-mono text-4xl font-bold text-primary leading-none">
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

              {/* Showcase presentation: NOVA Market interactive dual-device showcase OR standard cover */}
              {project.id === "nova-market" ? (
                <FadeUp className="mb-12">
                  <NovaMarketShowcase />
                </FadeUp>
              ) : (
                <FadeUp className="mb-12">
                  <div className="relative overflow-hidden rounded-sm border border-border aspect-video w-full">
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
                    <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary pointer-events-none" />
                    <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary pointer-events-none" />
                    {/* Name overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)" }}
                    >
                      <p className="font-mono text-xs tracking-widest uppercase mb-1 text-white/60">
                        {project.industry}
                      </p>
                      <h2
                        className="text-2xl lg:text-3xl font-extrabold leading-tight text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.name}
                      </h2>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* Two-column: overview + meta */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-4">
                {/* Left: tagline + overview + problem/solution + features */}
                <div className="lg:col-span-2">
                  <FadeUp>
                    <p
                      className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                      {project.overview}
                    </p>
                  </FadeUp>

                  {/* Problem / Solution */}
                  <FadeUp delay={80} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div
                      className="rounded-sm border border-border p-5"
                      style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                    >
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                        The Problem
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div
                      className="rounded-sm border border-border p-5"
                      style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                    >
                      <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                        The Solution
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </FadeUp>

                  {/* Key features */}
                  <FadeUp delay={120}>
                    <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                      Key Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5 text-sm text-foreground">
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
                    className="rounded-sm border border-border p-6 flex flex-col gap-6 h-fit sticky top-24"
                    style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                  >
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                        Project Type
                      </span>
                      <p className="text-sm text-foreground font-medium">{project.projectType}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                        My Role
                      </span>
                      <p className="text-sm text-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-3">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-1 rounded-sm border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                        Status
                      </span>
                      <span className={`font-mono text-xs px-2.5 py-1 rounded-sm inline-block ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                    {project.outcomes && (
                      <div>
                        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-2">
                          Outcomes
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.outcomes}
                        </p>
                      </div>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2.5 text-xs font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity mt-auto"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              EARLY STAGE / CONCEPTS
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              In the Lab.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {work.compact.map((project, i) => {
              const badge = statusBadge[project.statusType] ?? statusBadge.concept;

              return (
                <FadeUp key={project.id} delay={i * 100}>
                  <div
                    className="group flex flex-col h-full"
                    style={{ background: "hsl(var(--card))" }}
                  >
                    {/* Cover image */}
                    <div className="relative overflow-hidden aspect-video">
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
                      <div className="absolute top-4 right-4 pointer-events-none">
                        <span className={`font-mono text-xs px-2.5 py-1 rounded-sm ${badge.cls}`}>
                          {badge.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs text-primary">{project.num}</span>
                        <span className="font-mono text-xs px-2 py-0.5 rounded-sm border border-primary text-primary">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-2xl font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {project.overview}
                      </p>

                      {/* Top 4 features */}
                      <div className="flex flex-col gap-2 mb-6">
                        {project.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-primary shrink-0 mt-0.5">→</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-1 rounded-sm border border-border text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Role + status */}
                      <div className="mt-auto pt-5 border-t border-border flex flex-col gap-3">
                        <div>
                          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">
                            Role
                          </span>
                          <p className="text-xs text-foreground">{project.role}</p>
                        </div>
                        {project.outcomes && (
                          <div>
                            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase block mb-1">
                              Current Status
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
              {work.cta.label}
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {work.cta.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {work.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {work.cta.cta1}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
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
