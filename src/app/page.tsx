import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import EstoraShowcase from "@/components/EstoraShowcase";
import { home } from "@/lib/content";
import { ArrowUpRight, Check, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Tushar Labs — Top Web Development Company & AI Automation Agency Delhi NCR",
  description:
    "Tushar Labs is an independent digital studio in New Delhi. We design and build ultra-fast websites, custom SaaS software, and intelligent AI automation systems for ambitious businesses across Delhi NCR, Noida, Gurgaon & globally.",
  keywords: [
    "Web Development Company Delhi",
    "AI Automation Agency Delhi NCR",
    "Website Design and Development Company Delhi",
    "Custom Software Company Delhi",
    "Next.js Developer Delhi",
    "Top Web Development Company in Delhi",
    "Full Stack Developer India",
  ],
  alternates: {
    canonical: "https://www.tusharlabs.in",
  },
  openGraph: {
    title: "Tushar Labs — Top Web Development Company & AI Automation Agency Delhi NCR",
    description:
      "We build high-performance digital systems that actually perform. Websites, custom software, and intelligent AI automation for ambitious businesses.",
    url: "https://www.tusharlabs.in",
    type: "website",
  },
};

const serviceImages: Record<string, string> = {
  web: "/images/pages/services/web-design-hero.png",
  software: "/images/pages/services/custom-software-hero.png",
  ai: "/images/pages/services/ai-automation-hero.png",
  branding: "/images/pages/services/branding-design-hero.png",
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Orange accent top line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── 1. COMPACT HERO SECTION ── */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] sm:text-xs text-primary font-medium tracking-widest uppercase">
                New Delhi, India · Available for Projects
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span>{home.hero.headline1} </span>
              <span className="text-primary">{home.hero.headlineAccent}</span>
              <span> {home.hero.headline2} </span>
              <span className="italic">{home.hero.headlineItalic}</span>
              <span> {home.hero.headline3}</span>
              <span className="inline-block w-0.5 h-[0.8em] ml-1 bg-primary align-middle hero-cursor" />
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl">
              {home.hero.body}
            </p>

            {/* CTAs & Direct Contact */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <a
                href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start on WhatsApp</span>
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary active:scale-95 transition-all"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro Stats Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-muted-foreground pt-4 border-t border-border">
              <span className="text-foreground font-medium">{home.hero.stat1}</span>
              <span className="text-primary">·</span>
              <span className="text-foreground font-medium">{home.hero.stat2}</span>
              <span className="text-primary">·</span>
              <span className="text-foreground font-medium">{home.hero.stat3}</span>
            </div>
          </div>

          {/* Right — 4 Practice Areas Sleek Box */}
          <div
            className="lg:col-span-5 rounded-sm border border-border p-5 sm:p-6"
            style={{ background: "hsl(var(--card))" }}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                What We Engineer
              </span>
              <Link href="/services" className="font-mono text-xs text-primary hover:underline tracking-widest">
                All Services →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {home.hero.services.map((svc) => (
                <div key={svc.id} className="p-2.5 rounded-sm bg-background/50 border border-border/50 group hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-primary font-bold">{svc.num}</span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {svc.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FLAGSHIP SHOWCASE: ESTORA LIVE INTERACTIVE SIMULATOR ── */}
      <section className="py-12 sm:py-16 border-y border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
                  Featured Interactive Showcase
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-primary/20 text-primary border border-primary/30">
                  Concept Architecture
                </span>
              </div>
              <h2
                className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ESTORA — Spaces That Shape Tomorrow.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mt-1">
                Real estate developer experience concept. Experience the actual deployed website scrolling live below inside our interactive desktop &amp; mobile simulation frame.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 font-mono text-xs text-primary tracking-widest uppercase hover:underline shrink-0"
            >
              <span>Explore All 7 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </FadeUp>

          {/* Interactive Simulator */}
          <FadeUp delay={80}>
            <EstoraShowcase />
          </FadeUp>

          {/* Quick Case Study Strip (NOVA Market & KitchenZap) */}
          <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/work#nova-market"
              className="group p-4 rounded-sm border border-border bg-card/60 hover:border-primary transition-all flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-0.5">
                  01 / Live Product · E-Commerce
                </span>
                <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  NOVA Market — Multi-Category Marketplace
                </h3>
              </div>
              <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">
                View →
              </span>
            </Link>

            <Link
              href="/work#kitchenzap"
              className="group p-4 rounded-sm border border-border bg-card/60 hover:border-primary transition-all flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-0.5">
                  03 / Live Product · Restaurant Tech
                </span>
                <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  KitchenZap — Restaurant Kitchen SaaS OS
                </h3>
              </div>
              <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform">
                View →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR FOCUSED DISCIPLINES (SLEEK COMPACT GRID) ── */}
      <section className="py-12 sm:py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                {home.disciplines.label}
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {home.disciplines.heading}
              </h2>
            </div>
            <Link href="/services" className="font-mono text-xs text-primary tracking-widest uppercase hover:underline shrink-0">
              {home.disciplines.link}
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {home.disciplines.areas.map((area, i) => (
              <FadeUp key={area.id} delay={i * 60}>
                <Link
                  href="/services"
                  className="group flex flex-col h-full rounded-sm border border-border p-5 hover:border-primary transition-all bg-card/40 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-bold text-primary">{area.num}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {area.desc}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW WE WORK (COMPACT 5-STEP TIMELINE STRIP) ── */}
      <section className="py-12 sm:py-16 border-b border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                Execution Flow
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                From Problem to Live System in 5 Steps
              </h2>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              Average delivery: 7–14 days
            </span>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {home.methodology.steps.map((step) => (
              <div
                key={step.id}
                className="p-4 rounded-sm border border-border bg-card/60 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-primary font-bold tracking-widest block mb-1">
                    {step.num} · {step.phase}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TRANSPARENT INVESTMENT (CLEAN 4-COLUMN CARDS) ── */}
      <section className="py-12 sm:py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                {home.pricing.label}
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Clear Estimates. Zero Agency Markup.
              </h2>
            </div>
            <p className="font-mono text-[11px] text-muted-foreground">
              Direct founder collaboration with fixed timelines.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {home.pricing.plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-5 rounded-sm border flex flex-col justify-between transition-all ${
                  plan.popular ? "border-primary bg-primary/5" : "border-border bg-card/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-foreground">{plan.name}</h3>
                    {plan.popular && (
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-bold uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-extrabold text-foreground mb-1">{plan.price}</p>
                  <p className="font-mono text-[10px] text-primary mb-4">{plan.timeline}</p>

                  <ul className="space-y-1.5 mb-6 border-t border-border/60 pt-3">
                    {plan.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2 text-center text-xs font-mono font-semibold rounded-sm transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Book Slot →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COMPACT CLIENT PROOF ── */}
      <section className="py-12 sm:py-16 border-b border-border" style={{ background: "hsl(var(--secondary))" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-6">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
              Client Feedback
            </span>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built for Real Operational Results
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {home.testimonials.items.map((t) => (
              <div
                key={t.id}
                className="p-5 rounded-sm border border-border bg-card/60 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-foreground">{t.author}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{t.role}</p>
                  </div>
                  <span className="font-mono text-[10px] text-primary">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. COMPACT FINAL CTA ── */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              Direct Access
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to scale your business with serious digital systems?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              Skip endless sales calls. Share your requirements directly with our founder on WhatsApp or request a proposal roadmap within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20would%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly →</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-xs sm:text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary active:scale-95 transition-all"
              >
                Submit Project Brief
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
