import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import { home } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tushar Labs — Independent Digital Studio",
  description:
    "Tushar Labs is an independent digital solutions studio. We design and build websites, custom software, and intelligent automation systems for ambitious businesses.",
  openGraph: {
    title: "Tushar Labs — Independent Digital Studio",
    description:
      "We build digital systems that actually perform. Websites, custom software, and intelligent automation for ambitious businesses.",
    url: "https://tusharlabs.vercel.app",
    type: "website",
  },
};

const serviceImages: Record<string, string> = {
  web: "/images/pages/services/web-design-hero.png",
  software: "/images/pages/services/custom-software-hero.png",
  ai: "/images/pages/services/ai-automation-hero.png",
  branding: "/images/pages/services/branding-design-hero.png",
};

const projectImages: Record<string, string> = {
  kitchenzap: "/images/pages/work/kitchenzap-cover.png",
  restroex: "/images/pages/work/restroex-cover.png",
  safaronroads: "/images/pages/work/safaronroads-cover.png",
};

export default function HomePage() {
  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO ── */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-start justify-between mb-10">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                {home.hero.label}
              </span>
              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {home.hero.rightLabel1}
                </span>
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {home.hero.rightLabel2}
                </span>
              </div>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span>{home.hero.headline1} </span>
              <span className="text-primary">{home.hero.headlineAccent}</span>
              <span> {home.hero.headline2} </span>
              <span className="italic">{home.hero.headlineItalic}</span>
              <span> {home.hero.headline3}</span>
              <span
                className="inline-block w-0.5 h-[0.85em] ml-1 bg-primary align-middle hero-cursor"
              />
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {home.hero.body}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {home.hero.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {home.hero.cta2}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground tracking-wide">{home.hero.stat1}</span>
              <span className="text-primary font-mono text-xs">·</span>
              <span className="font-mono text-xs text-muted-foreground tracking-wide">{home.hero.stat2}</span>
              <span className="text-primary font-mono text-xs">·</span>
              <span className="font-mono text-xs text-muted-foreground tracking-wide">{home.hero.stat3}</span>
            </div>
          </div>

          {/* Right — Practice Areas card */}
          <div
            className="lg:col-span-2 rounded-sm border border-border p-6 flex flex-col"
            style={{ background: "hsl(var(--card))" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                {home.hero.cardLabel}
              </span>
              <Link href="/services" className="font-mono text-xs text-primary hover:opacity-80 transition-opacity tracking-widest">
                {home.hero.cardLink}
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-border">
              {home.hero.services.map((svc) => (
                <div key={svc.id} className="py-4 group">
                  <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                    {svc.num}
                  </span>
                  <p className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {svc.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                &ldquo;{home.hero.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>

        {/* Hero Visual Banner with Interactive Studio Depth */}
        <FadeUp delay={120} className="mt-14">
          <div className="relative overflow-hidden rounded-sm border border-border aspect-[21/9] w-full">
            <Image
              src="/images/pages/capabilities/hero.png"
              alt="Tushar Labs Studio Visual — Designing and engineering high-impact digital products"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute top-0 left-0 w-10 h-0.5 bg-primary pointer-events-none" />
            <div className="absolute top-0 left-0 w-0.5 h-10 bg-primary pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-none">
              <div>
                <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                  Full-Stack Architecture
                </span>
                <p className="text-lg lg:text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Engineered with mathematical precision. Delivered without bloat.
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground tracking-wide shrink-0">
                Delhi / Remote
              </span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Orange divider */}
      <div className="h-px w-full bg-primary opacity-20" />

      {/* ── PHILOSOPHY ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            <FadeUp className="lg:col-span-1">
              <span className="font-mono text-xs text-primary tracking-widest uppercase leading-relaxed block">
                {home.philosophy.label}
              </span>
            </FadeUp>
            <FadeUp delay={100} className="lg:col-span-4">
              <blockquote
                className="text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;{home.philosophy.quote}&rdquo;
              </blockquote>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {home.philosophy.body}
              </p>
              <Link href="/about" className="font-mono text-xs text-primary tracking-widest uppercase hover:opacity-80 transition-opacity">
                {home.philosophy.link}
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                {home.disciplines.label}
              </span>
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {home.disciplines.heading}
              </h2>
            </div>
            <Link href="/services" className="font-mono text-xs text-primary tracking-widest uppercase hover:opacity-80 transition-opacity shrink-0">
              {home.disciplines.link}
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {home.disciplines.areas.map((area, i) => (
              <FadeUp key={area.id} delay={i * 80}>
                <div
                  className="group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{ background: "hsl(var(--card))" }}
                >
                  {/* Visual card header image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                    <Image
                      src={serviceImages[area.id] ?? "/images/pages/services/web-design-hero.png"}
                      alt={area.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-2xl font-bold text-primary">
                      {area.num}
                    </span>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h3
                      className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {area.desc}
                    </p>
                    <Link href="/services" className="font-mono text-xs text-primary tracking-widest uppercase hover:opacity-80 transition-opacity mt-auto">
                      {area.link}
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                {home.projects.label}
              </span>
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {home.projects.heading}
              </h2>
            </div>
            <Link href="/work" className="font-mono text-xs text-primary tracking-widest uppercase hover:opacity-80 transition-opacity shrink-0">
              {home.projects.link}
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {home.projects.items.map((project, i) => (
              <FadeUp key={project.id} delay={i * 100}>
                <div
                  className="group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 border-l-2 border-transparent hover:border-primary overflow-hidden"
                  style={{ background: "hsl(var(--card))" }}
                >
                  {/* Project preview cover image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                    <Image
                      src={projectImages[project.id] ?? "/images/pages/work/kitchenzap-cover.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-primary text-primary-foreground font-semibold">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        {project.num} / {project.year}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-wide uppercase block mb-2">
                      {project.category}
                    </span>
                    <h3
                      className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs px-2 py-1 rounded-sm border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href="/work" className="font-mono text-xs text-primary tracking-widest uppercase hover:opacity-80 transition-opacity mt-auto">
                      {project.link}
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
                {home.methodology.label}
              </span>
              <h2
                className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {home.methodology.heading}
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase max-w-xs text-right hidden sm:block">
              {home.methodology.descriptor}
            </span>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {home.methodology.steps.map((step, i) => (
              <FadeUp key={step.id} delay={i * 80}>
                <div
                  className="flex flex-col p-7 h-full"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-xs text-primary tracking-widest">
                      {step.num}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                      {step.phase}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENT PRICING ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-12">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {home.pricing.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {home.pricing.heading}
            </h2>
            <p className="font-mono text-xs italic text-muted-foreground/80 max-w-2xl leading-relaxed">
              {home.pricing.subheading}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {home.pricing.plans.map((plan, i) => (
              <FadeUp key={plan.id} delay={i * 100}>
                <div
                  className={`flex flex-col h-full p-8 rounded-sm border transition-all duration-300 relative ${
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                  style={{ background: "hsl(var(--card))" }}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-6 font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-primary text-primary-foreground rounded-full">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mb-4">{plan.tagline}</p>
                    <div className="pt-4 border-t border-border">
                      <span className="text-2xl lg:text-3xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="block font-mono text-xs text-primary mt-1 font-semibold">{plan.timeline}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className="text-primary font-mono font-bold mt-0.5">✓</span>
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-3 text-xs font-mono font-semibold rounded-sm transition-all uppercase tracking-wider ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS ── */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {home.testimonials.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {home.testimonials.heading}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.testimonials.items.map((t, i) => (
              <FadeUp key={t.id} delay={i * 100}>
                <div
                  className="flex flex-col h-full p-8 rounded-sm border border-border transition-all hover:border-primary/50 relative"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <span className="text-3xl text-primary font-serif mb-4 block leading-none">&ldquo;</span>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                      {t.author}
                    </p>
                    <p className="text-xs text-primary font-mono">{t.role}</p>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{t.location}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: "hsl(var(--secondary))" }} className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <FadeUp className="max-w-3xl">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-6">
              {home.cta.label}
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {home.cta.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {home.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {home.cta.cta1}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {home.cta.cta2}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-cursor {
          animation: blink 1.1s step-end infinite;
        }
      `}</style>
    </main>
  );
}
