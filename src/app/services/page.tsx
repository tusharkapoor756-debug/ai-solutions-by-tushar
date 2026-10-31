import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { studioServices } from "@/config/site";

export const metadata: Metadata = {
  title: "Practices & Services | TUSHAR LABS",
  description:
    "Explore our four core disciplines: Website Design & Development, Custom Software Development, AI & Workflow Automation, and Branding & Digital Design.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-void">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-28 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-6">
          <span className="eyebrow">Practice Overview</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-prose-primary tracking-editorial leading-none">
            Disciplined Digital<br />
            <span className="gradient-text">Services.</span>
          </h1>
          <p className="text-sm sm:text-base text-prose-secondary font-light max-w-2xl leading-relaxed">
            We provide full-lifecycle technical and design execution. Every practice area is structured to deliver tangible business efficiency, brand prestige, and reliable production software.
          </p>
        </div>
      </section>

      {/* Services editorial rows (WebNxt-style) */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="divide-y divide-white/[0.07]">
            {studioServices.map((service) => (
              <div
                key={service.slug}
                className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group"
              >
                {/* Index */}
                <div className="lg:col-span-1">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-prose-muted/20 leading-none tracking-tightest group-hover:text-brand-orange/20 transition-colors">
                    {service.index}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <span className="eyebrow block mb-2">
                      Service {service.index}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary group-hover:text-brand-orange transition-colors leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-sm text-prose-secondary font-light leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-prose-dim leading-relaxed">
                    {service.leadParagraph}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prose-secondary hover:text-brand-orange transition-colors font-semibold group/link"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Deliverables */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim mb-3">
                    Scope & Deliverables
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-prose-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inquire */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-start">
                  <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim mb-1">
                    Ready to Start?
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm"
                    >
                      <span>Request Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="p-3 bg-surface border border-white/[0.07] rounded-sm">
                      <div className="text-[9px] font-mono uppercase tracking-eyebrow text-brand-orange mb-1">Ideal For</div>
                      <div className="text-xs text-prose-dim leading-tight">
                        {service.useCases[0]?.title || "Early stage to enterprise brands"}
                      </div>
                    </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center space-y-6">
          <span className="eyebrow">Project Planning</span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-prose-primary tracking-editorial">
            Unsure which service matches your scope?
          </h2>
          <p className="text-sm sm:text-base text-prose-secondary font-light max-w-xl mx-auto leading-relaxed">
            We provide complimentary technical scoping calls where we evaluate your requirements and suggest an architecture blueprint before you commit.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-lg shadow-brand-orange/20"
            >
              <span>Schedule a Scoping Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
