"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import { services } from "@/lib/content";
import { ChevronDown, ChevronUp } from "lucide-react";

const serviceImages: Record<string, string> = {
  "web-design": "/images/pages/services/web-design-hero.png",
  "custom-software": "/images/pages/services/custom-software-hero.png",
  "ai-automation": "/images/pages/services/ai-automation-hero.png",
  "branding-design": "/images/pages/services/branding-design-hero.png",
};

const serviceImageAlts: Record<string, string> = {
  "web-design": "Website design and development — editorial illustration",
  "custom-software": "Custom software development — system architecture illustration",
  "ai-automation": "AI and workflow automation — neural network illustration",
  "branding-design": "Branding and digital design — brand identity illustration",
};

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO ── */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-14 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-3">
              {services.hero.label}
            </span>
            <h1
              className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {services.hero.heading}
            </h1>
          </div>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
            {services.hero.subheading}
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-border">
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{services.hero.stat1}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{services.hero.stat2}</span>
          <span className="text-primary font-mono text-xs">·</span>
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{services.hero.stat3}</span>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.services.map((svc, idx) => {
        const isEven = idx % 2 === 0;
        const imgSrc = serviceImages[svc.id] ?? "";
        const imgAlt = serviceImageAlts[svc.id] ?? svc.label;

        return (
          <section
            key={svc.id}
            id={svc.slug}
            className="border-t border-border"
            style={{ background: isEven ? "hsl(var(--background))" : "hsl(var(--secondary))" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
              {/* Service number + label */}
              <FadeUp className="flex items-center gap-3 mb-8">
                <span className="font-mono text-2xl lg:text-3xl font-bold text-primary leading-none">
                  {svc.num}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                  {svc.label}
                </span>
              </FadeUp>

              {/* Image + Heading row */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}
                <FadeUp delay={isEven ? 0 : 80}>
                  <div className="relative overflow-hidden rounded-sm border border-border aspect-video max-h-[300px]">
                    <Image
                      src={imgSrc}
                      alt={imgAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      loading={idx === 0 ? "eager" : "lazy"}
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Orange corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
                    <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
                  </div>
                </FadeUp>

                {/* Heading + problem/approach */}
                <FadeUp delay={isEven ? 80 : 0}>
                  <h2
                    className="text-2xl lg:text-3xl font-extrabold tracking-tight text-foreground mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {svc.heading}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-mono text-[11px] text-primary tracking-widest uppercase block mb-1">
                        The Challenge & Approach
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{svc.approach}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-primary tracking-widest uppercase block mb-1">
                        What Makes It Different
                      </span>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{svc.differentiator}</p>
                    </div>
                  </div>

                  {/* Ideal client */}
                  <div
                    className="rounded-sm border border-border p-3.5 mb-6"
                    style={{ background: "hsl(var(--card))" }}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-1">
                      Ideal For
                    </span>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">{svc.idealClient}</p>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-5 py-2.5 text-xs sm:text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      {svc.cta}
                    </Link>
                    <span className="font-mono text-xs text-muted-foreground">{svc.startingPrice}</span>
                  </div>
                </FadeUp>
              </div>

              {/* Deliverables + Stack + Process grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {/* Deliverables */}
                <FadeUp>
                  <div
                    className="p-5 sm:p-6 h-full"
                    style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                  >
                    <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                      What&apos;s Included
                    </span>
                    <ul className="flex flex-col gap-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                          <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">→</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>

                {/* Tech Stack */}
                <FadeUp delay={60}>
                  <div
                    className="p-5 sm:p-6 h-full"
                    style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                  >
                    <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-1 rounded-sm border border-border text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* Process */}
                <FadeUp delay={120}>
                  <div
                    className="p-5 sm:p-6 h-full"
                    style={{ background: isEven ? "hsl(var(--card))" : "hsl(var(--background))" }}
                  >
                    <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
                      How It Works
                    </span>
                    <div className="flex flex-col gap-3">
                      {svc.process.map((step, si) => (
                        <div key={step.id} className="flex items-start gap-2.5">
                          <span className="font-mono text-xs text-primary shrink-0 w-4 font-bold">
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <span className="font-mono text-xs text-foreground font-semibold block">
                              {step.phase}
                            </span>
                            <span className="text-xs text-muted-foreground">{step.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Related project link */}
              <FadeUp delay={60} className="mt-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-muted-foreground tracking-wide">
                    Live Demo:
                  </span>
                  <Link
                    href="/work"
                    className="font-mono text-xs text-primary tracking-widest uppercase hover:underline"
                  >
                    {svc.relatedProject} →
                  </Link>
                </div>
              </FadeUp>
            </div>
          </section>
        );
      })}

      {/* ── FAQ ── */}
      <section className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp className="mb-14">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              {services.faq.label}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {services.faq.heading}
            </h2>
          </FadeUp>

          <div className="max-w-3xl">
            {services.faq.items.map((item, i) => (
              <FadeUp key={item.id} delay={i * 50}>
                <div className="border-b border-border">
                  <button
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                    aria-expanded={openFaq === item.id}
                  >
                    <span
                      className="text-base font-semibold text-foreground group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.q}
                    </span>
                    <span className="text-primary shrink-0 mt-0.5">
                      {openFaq === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {openFaq === item.id && (
                    <div className="pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  )}
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
              {services.cta.label}
            </span>
            <h2
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {services.cta.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {services.cta.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {services.cta.cta1}
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold font-mono rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {services.cta.cta2}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
