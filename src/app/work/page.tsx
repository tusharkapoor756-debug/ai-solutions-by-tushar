import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { studioProjects } from "@/config/site";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | TUSHAR LABS",
  description:
    "Explore our full portfolio of live platforms, technical foundations, and concept architectures: KitchenZap, Restroex, Safaronroads, Agent-X, and Nexus.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-void">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-28 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-5">
          <span className="eyebrow">Portfolio Inventory</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-prose-primary tracking-editorial leading-none">
            Crafted Systems<br />
            <span className="gradient-text">& Case Studies.</span>
          </h1>
          <p className="text-sm sm:text-base text-prose-secondary font-light max-w-2xl leading-relaxed">
            Every project represents genuine engineering and design execution. We explicitly distinguish between live deployed products, technical foundation architectures, and concept prototypes.
          </p>
          {/* Status legend */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              "Live Product",
              "Technical Foundation",
              "Design & Planning",
              "Concept / Architecture",
            ].map((s) => (
              <span key={s} className="text-[9px] font-mono uppercase px-3 py-1 border border-white/10 bg-white/[0.04] text-prose-secondary rounded-full tracking-widest font-semibold">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="divide-y divide-white/[0.07]">
            {studioProjects.map((project, idx) => (
              <div
                key={project.id}
                className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Visual card */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="bg-surface border border-white/[0.07] rounded-sm p-5 sm:p-7 group-hover:border-brand-orange/30 transition-all duration-300 relative overflow-hidden">
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Top bar */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.07] font-mono text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-orange/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-2 text-prose-secondary font-semibold tracking-wide">
                          {project.id.toUpperCase()}.SYS
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 border border-white/10 bg-white/[0.04] text-prose-secondary rounded-full text-[9px] uppercase font-semibold">
                        {project.status}
                      </span>
                    </div>

                    {/* Project blueprint */}
                    <div className="bg-void border border-white/[0.07] rounded-sm p-5 sm:p-6 space-y-4">
                      <div>
                        <div className="text-[9px] font-mono text-brand-orange uppercase tracking-widest mb-1">
                          {project.category}
                        </div>
                        <div className="text-2xl sm:text-3xl font-display font-extrabold text-prose-primary tracking-tight">
                          {project.title}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-prose-secondary font-light leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Layer indicators */}
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {[
                          { label: "Layer 01", value: "Frontend UI" },
                          { label: "Layer 02", value: "API / Engine" },
                          { label: "Layer 03", value: "Data Store" },
                        ].map((layer) => (
                          <div key={layer.label} className="p-2.5 bg-surface border border-white/[0.07] rounded-sm text-[10px] font-mono">
                            <span className="text-prose-dim uppercase block">{layer.label}</span>
                            <span className="text-prose-secondary font-bold">{layer.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono uppercase px-2 py-0.5 bg-raised text-prose-secondary border border-white/[0.07] rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Editorial details */}
                <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-2.5 font-mono text-[11px] text-prose-dim">
                    <span>0{idx + 1}</span>
                    <span>/</span>
                    <span className="text-brand-orange font-semibold">{project.year}</span>
                    <span>/</span>
                    <span className="uppercase">{project.status}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary tracking-editorial leading-tight group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-sm text-prose-secondary font-light leading-relaxed">
                    {project.problem}
                  </p>

                  <div className="pt-1">
                    <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim mb-2.5">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono px-2.5 py-0.5 bg-surface text-prose-secondary border border-white/[0.07] rounded-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-6 py-3.5 bg-brand-orange text-white font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-md shadow-brand-orange/20"
                    >
                      <span>Read Detailed Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 border-t border-white/[0.07] bg-surface relative overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="eyebrow">Initiate Project</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-prose-primary tracking-editorial">
                Have a project idea?
              </h2>
              <p className="text-sm text-prose-secondary font-light max-w-sm">
                Let&apos;s discuss your scope and how we can build something remarkable together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-lg shadow-brand-orange/20 shrink-0"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
