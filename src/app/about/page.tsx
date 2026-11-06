import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Tushar Labs | Full-Stack Engineer & AI Builder New Delhi",
  description:
    "Meet Tushar Kapoor, founder and engineering lead at Tushar Labs, New Delhi. Engineering high-performance web applications, custom SaaS platforms, and autonomous AI agents for clients in Delhi NCR and worldwide.",
  keywords: [
    "Tushar Kapoor Web Developer",
    "Full Stack Engineer Delhi",
    "Independent Digital Studio India",
    "Freelance Full Stack Developer Delhi NCR",
    "Next.js Consultant Delhi",
  ],
  alternates: {
    canonical: "https://www.tusharlabs.in/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO ── */}
      <section className="pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-5">
                {about.hero.label}
              </span>
              <h1
                className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {about.hero.heading}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                {about.hero.subheading}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-mono text-xs text-muted-foreground tracking-wide">
                    {about.hero.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
                  <span className="font-mono text-xs text-primary tracking-wide">
                    {about.hero.availability}
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: portrait */}
          <FadeUp delay={120}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm border border-border aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src="/images/pages/about/portrait.png"
                  alt="Tushar — founder of Tushar Labs, independent developer and designer"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority
                  sizes="(max-width: 1024px) 384px, 384px"
                />
                {/* Orange corner accents */}
                <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary pointer-events-none" />
                <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-10 h-0.5 bg-primary pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-0.5 h-10 bg-primary pointer-events-none" />
              </div>
              {/* Floating label */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 border border-border rounded-sm hidden lg:block"
                style={{ background: "hsl(var(--card))" }}
              >
                <p className="font-mono text-xs text-primary">Tushar</p>
                <p className="font-mono text-xs text-muted-foreground">Founder, Tushar Labs</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHO I AM ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                {about.intro.label}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {about.intro.heading}
              </h2>
            </FadeUp>

            <FadeUp delay={80} className="flex flex-col gap-6">
              <p className="text-base text-foreground leading-relaxed">{about.intro.body1}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{about.intro.body2}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{about.intro.body3}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {about.philosophy.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.philosophy.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {about.philosophy.values.map((val, i) => (
              <FadeUp key={val.id} delay={i * 70}>
                <div
                  className="p-8 h-full group hover:border-l-2 hover:border-l-primary transition-all duration-200"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="font-mono text-xs text-primary block mb-4">{val.num}</span>
                  <h3
                    className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {about.timeline.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.timeline.heading}
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="flex flex-col gap-px bg-border lg:bg-transparent lg:gap-0">
              {about.timeline.events.map((event, i) => (
                <FadeUp key={event.id} delay={i * 80}>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12 items-start p-7 lg:p-0 lg:mb-10"
                    style={{ background: i % 2 === 0 ? "hsl(var(--background))" : "hsl(var(--card))" }}
                  >
                    <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:pt-1">
                      <div className="w-3 h-3 rounded-full bg-primary shrink-0 ring-4 ring-background z-10 hidden lg:block" />
                      <span className="font-mono text-xs text-primary tracking-wide whitespace-nowrap">
                        {event.year}
                      </span>
                    </div>
                    <div className="lg:pb-10 lg:border-b lg:border-border">
                      <h3
                        className="text-base font-bold text-foreground mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKSPACE IMAGE ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp>
            <div className="relative overflow-hidden rounded-sm border border-border aspect-video w-full">
              <Image
                src="/images/pages/about/workspace.png"
                alt="Tushar Labs workspace — design, build, ship, automate"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary pointer-events-none" />
              <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary pointer-events-none" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CURRENTLY WORKING ON ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {about.current.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.current.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {about.current.items.map((item, i) => (
              <FadeUp key={item.id} delay={i * 60}>
                <div
                  className="p-7 h-full flex flex-col"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-6 h-0.5 bg-primary" />
                    <span className="font-mono text-xs px-2 py-1 rounded-sm border border-primary text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {about.skills.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.skills.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {about.skills.areas.map((area, i) => (
              <FadeUp key={area.id} delay={i * 60}>
                <div
                  className="p-7 h-full"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-5">
                    {area.area}
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {area.items.map((skill) => (
                      <div key={skill} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary shrink-0 mt-0.5 font-mono text-xs">→</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAL NOTE ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                {about.personal.label}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {about.personal.heading}
              </h2>
            </FadeUp>

            <FadeUp delay={80}>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {about.personal.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {about.personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono text-xs px-3 py-1.5 rounded-sm border border-border text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--background))" }} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
              {about.cta.label}
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.cta.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {about.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {about.cta.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {about.cta.cta2}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
