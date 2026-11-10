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
      <section className="pt-20 lg:pt-28 pb-12 lg:pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                {about.hero.label}
              </span>
              <h1
                className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {about.hero.heading}
              </h1>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                {about.hero.subheading}
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-border">
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
              <div className="relative overflow-hidden rounded-sm border border-border aspect-[3/4] w-full max-w-xs mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src="/images/pages/about/portrait.png"
                  alt="Tushar — founder of Tushar Labs, independent developer and designer"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority
                  sizes="(max-width: 1024px) 320px, 320px"
                />
                {/* Orange corner accents */}
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
                <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-primary pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-primary pointer-events-none" />
              </div>
              {/* Floating label */}
              <div
                className="absolute -bottom-3 -left-3 px-3.5 py-2 border border-border rounded-sm hidden lg:block"
                style={{ background: "hsl(var(--card))" }}
              >
                <p className="font-mono text-xs text-primary font-bold">Tushar Kapoor</p>
                <p className="font-mono text-[10px] text-muted-foreground">Founder & Lead Engineer</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHO I AM & CORE PRINCIPLES ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-12">
            <FadeUp>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                {about.intro.label}
              </span>
              <h2
                className="text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {about.intro.heading}
              </h2>
            </FadeUp>

            <FadeUp delay={80} className="flex flex-col gap-4">
              <p className="text-sm lg:text-base text-foreground leading-relaxed">{about.intro.body1}</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{about.intro.body2}</p>
            </FadeUp>
          </div>

          {/* Philosophy / Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {about.philosophy.values.map((val, i) => (
              <FadeUp key={val.id} delay={i * 50}>
                <div
                  className="p-6 h-full group hover:border-t-2 hover:border-t-primary transition-all duration-200"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="font-mono text-xs text-primary block mb-3">{val.num}</span>
                  <h3
                    className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT FOCUS & ACTIVE PIPELINE ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--background))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {about.current.label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.current.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {about.current.items.map((item, i) => (
              <FadeUp key={item.id} delay={i * 50}>
                <div
                  className="p-6 h-full flex flex-col justify-between"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-5 h-0.5 bg-primary" />
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-primary text-primary">
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className="text-base font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE TECH STACK SKILLS ── */}
      <section className="border-t border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <FadeUp className="mb-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {about.skills.label}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.skills.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {about.skills.areas.map((area, i) => (
              <FadeUp key={area.id} delay={i * 50}>
                <div
                  className="p-6 h-full"
                  style={{ background: "hsl(var(--background))" }}
                >
                  <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                    {area.area}
                  </span>
                  <div className="flex flex-col gap-2">
                    {area.items.map((skill) => (
                      <div key={skill} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
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

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--background))" }} className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {about.cta.label}
            </span>
            <h2
              className="text-3xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {about.cta.heading}
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {about.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {about.cta.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
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
