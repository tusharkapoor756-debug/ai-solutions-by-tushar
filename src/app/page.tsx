import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { studioServices, studioProjects, studioProcess } from "@/config/site";

export default function Home() {
  const featuredProjects = studioProjects.slice(0, 3);

  return (
    <main className="min-h-screen bg-void">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-60" />
        {/* Orange left pillar */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

          {/* Eyebrow meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-10 border-b border-white/[0.07] font-mono text-[10px] sm:text-[11px] tracking-eyebrow uppercase text-prose-dim">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-prose-secondary font-semibold">Independent Studio</span>
              <span className="text-prose-muted">/</span>
              <span>Est. 2024</span>
            </div>
            <div className="flex items-center gap-5 text-prose-dim">
              <span className="hidden sm:inline">Design · Systems · Code</span>
              <span className="text-brand-orange font-semibold">Available For Selected Projects</span>
            </div>
          </div>

          {/* Main hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: H1 + CTA */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tightest text-prose-primary leading-[0.98] break-words">
                  We build digital{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">systems</span>
                  </span>
                  <br />
                  that{" "}
                  <span className="text-prose-secondary font-light italic">actually</span>{" "}
                  <span className="text-brand-orange">perform</span>.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-prose-secondary font-light leading-relaxed max-w-2xl">
                  Tushar Labs is an independent digital solutions studio. We design and build websites, custom software, and intelligent automation systems for ambitious businesses.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-all duration-200 rounded-sm shadow-lg shadow-brand-orange/20"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-transparent border border-white/[0.12] text-prose-secondary text-xs font-mono tracking-widest uppercase hover:border-white/25 hover:text-prose-primary transition-all duration-200 rounded-sm"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stat strip */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/[0.06]">
                {[
                  { val: "5+", label: "Projects Shipped" },
                  { val: "3", label: "Practice Areas" },
                  { val: "2024", label: "Est. Year" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-display font-extrabold text-prose-primary tracking-tight">{s.val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Service sidebar */}
            <div className="lg:col-span-4 space-y-4 lg:pt-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-prose-dim pb-2.5 border-b border-white/[0.07] flex justify-between items-center">
                <span>Core Practice Areas</span>
                <Link href="/services" className="text-brand-orange hover:text-brand-bright text-[10px] transition-colors">
                  All →
                </Link>
              </div>

              <div className="space-y-2">
                {studioServices.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block p-4 bg-surface/60 border border-white/[0.07] hover:border-brand-orange/40 hover:bg-surface/90 transition-all duration-200 group rounded-sm card-hover"
                  >
                    <div className="text-[9px] font-mono text-brand-orange mb-1 tracking-widest uppercase">
                      SERVICE {item.index}
                    </div>
                    <div className="text-sm font-semibold text-prose-primary mb-0.5 group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-prose-dim line-clamp-1">{item.tagline}</div>
                  </Link>
                ))}
              </div>

              {/* Stance */}
              <div className="p-4 bg-brand-dim border border-brand-orange/20 rounded-sm">
                <p className="text-[10px] font-mono text-brand-orange uppercase tracking-wider mb-1.5">
                  Our Stance
                </p>
                <p className="text-xs text-prose-secondary italic leading-relaxed">
                  &ldquo;No superficial templates. No inflated jargon. Only precision engineering, clear communication, and deliberate digital craftsmanship.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STUDIO MANIFESTO ─────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28 border-t border-white/[0.07] bg-surface relative overflow-hidden">
        <div className="absolute inset-0 orange-grid pointer-events-none opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="eyebrow">Studio Philosophy</span>
              <h2 className="text-xs font-mono uppercase tracking-widest text-prose-dim">
                The Maker Model
              </h2>
              <div className="w-12 h-px bg-brand-orange mt-4" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-editorial text-prose-primary leading-tight">
                &ldquo;Technology should solve problems.{" "}
                <br className="hidden sm:inline" />
                <span className="text-prose-secondary font-light italic">
                  Design should make it meaningful.&rdquo;
                </span>
              </blockquote>
              <p className="text-prose-secondary text-sm sm:text-base leading-relaxed max-w-3xl font-light">
                Tushar Labs operates at the exact intersection of deliberate visual design and production-grade software engineering. We partner directly with founders and teams to build websites, custom SaaS platforms, and intelligent automation systems that perform reliably under real-world conditions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-prose-secondary hover:text-brand-orange transition-colors font-semibold group"
              >
                <span>Learn About Our Studio & Approach</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28 border-t border-white/[0.07] bg-void relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-white/[0.07]">
            <div>
              <span className="eyebrow block mb-2">Disciplines</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-prose-primary tracking-editorial">
                Four Practice Areas.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono uppercase tracking-widest text-prose-dim hover:text-prose-primary transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
            </Link>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05] rounded-sm overflow-hidden">
            {studioServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="relative p-6 bg-surface flex flex-col justify-between group hover:bg-raised transition-colors duration-200 min-h-[240px]"
              >
                {/* Number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-display font-extrabold text-prose-muted/40 leading-none tracking-tightest select-none group-hover:text-brand-orange/25 transition-colors">
                    {service.index}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-prose-dim group-hover:text-brand-orange transition-colors opacity-0 group-hover:opacity-100 translate-x-0 -translate-y-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-display font-bold text-prose-primary group-hover:text-brand-orange transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-prose-dim leading-relaxed font-light line-clamp-3">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom */}
                <div className="pt-5 mt-5 border-t border-white/[0.06] text-[10px] font-mono text-prose-muted group-hover:text-brand-orange transition-colors flex items-center justify-between">
                  <span>View Details</span>
                  <span>→</span>
                </div>

                {/* Orange left accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 rounded-l-sm" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PROJECTS ───────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28 border-t border-white/[0.07] bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-white/[0.07]">
            <div>
              <span className="eyebrow block mb-2">Portfolio Preview</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-prose-primary tracking-editorial">
                Featured Projects.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono uppercase tracking-widest text-prose-dim hover:text-prose-primary transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group bg-void border border-white/[0.07] rounded-sm overflow-hidden hover:border-brand-orange/30 transition-all duration-300 flex flex-col"
              >
                {/* Project visual header */}
                <div className="p-5 border-b border-white/[0.07] bg-raised flex-1">
                  <div className="flex items-center justify-between mb-5 text-[10px] font-mono">
                    <span className="text-prose-dim">0{idx + 1} / {project.year}</span>
                    <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-[9px] uppercase font-semibold text-prose-secondary">
                      {project.status}
                    </span>
                  </div>

                  {/* Abstract project visual */}
                  <div className="bg-void border border-white/[0.07] p-4 space-y-3 rounded-sm mb-4">
                    <div className="text-[9px] font-mono text-brand-orange uppercase tracking-widest">
                      {project.category}
                    </div>
                    <div className="text-xl font-display font-extrabold text-prose-primary group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </div>
                    <p className="text-xs text-prose-secondary font-light line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                    {/* Tech bar */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2 py-0.5 bg-surface text-prose-secondary border border-white/[0.07] rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 text-prose-dim">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA strip */}
                <div className="px-5 py-3.5 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono uppercase tracking-wider text-prose-dim group-hover:text-brand-orange transition-colors">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28 border-t border-white/[0.07] bg-void relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-white/[0.07]">
            <div>
              <span className="eyebrow block mb-2">Methodology</span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-prose-primary tracking-editorial">
                How We Deliver.
              </h2>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-prose-dim max-w-xs">
              Sequential engineering execution from research to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.05] border border-white/[0.05] rounded-sm overflow-hidden">
            {studioProcess.map((step, i) => (
              <div
                key={step.step}
                className="p-5 bg-surface space-y-3 group relative"
              >
                {/* Step connector line */}
                {i < studioProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-[2.5rem] right-0 w-px h-4 bg-white/10 translate-x-0" />
                )}
                <div className="text-3xl font-display font-extrabold text-prose-muted/25 leading-none">
                  {step.step}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-brand-orange font-semibold">
                  {step.name}
                </div>
                <h3 className="text-sm font-display font-bold text-prose-primary leading-snug">
                  {step.headline}
                </h3>
                <p className="text-[11px] text-prose-dim leading-relaxed hidden sm:block">
                  {step.description.substring(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ────────────────────────────────────── */}
      <section className="py-20 sm:py-24 md:py-28 border-t border-white/[0.07] bg-surface relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 orange-grid pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="border border-brand-orange/25 rounded-sm p-8 sm:p-12 md:p-16 bg-raised/60 backdrop-blur-sm relative overflow-hidden">
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dim rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="space-y-4 max-w-xl">
                <span className="eyebrow">Initiate Project</span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-prose-primary tracking-editorial leading-tight">
                  Have an idea<br />worth building?
                </h2>
                <p className="text-sm sm:text-base text-prose-secondary font-light leading-relaxed">
                  Let&apos;s turn your next idea into something real. Send us a project inquiry with your scope, timeline, and budget — or connect directly via WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-stretch gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-lg shadow-brand-orange/25"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border border-white/[0.12] text-prose-secondary text-xs font-mono tracking-widest uppercase hover:border-white/25 hover:text-prose-primary transition-colors rounded-sm"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
