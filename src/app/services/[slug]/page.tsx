import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { studioServices } from "@/config/site";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return studioServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = studioServices.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service | TUSHAR LABS" };

  return {
    title: `${service.title} | Services | TUSHAR LABS`,
    description: service.leadParagraph,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = studioServices.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = studioServices.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen bg-void">

      {/* Breadcrumb */}
      <div className="border-b border-white/[0.07] py-4 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim">
            <Link href="/services" className="hover:text-prose-secondary transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3 h-3" />
              <span>All Services</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-prose-muted" />
            <span className="text-prose-secondary">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 sm:py-20 md:py-24 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 orange-grid pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-brand-orange/20 leading-none tracking-tightest">
                  {service.index}
                </span>
                <span className="eyebrow">Practice Area</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-prose-primary tracking-editorial leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-prose-secondary font-light max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
              <p className="text-sm text-prose-dim max-w-2xl leading-relaxed">
                {service.leadParagraph}
              </p>
            </div>

            {/* Quick action card */}
            <div className="lg:col-span-4">
              <div className="p-5 bg-surface border border-brand-orange/20 rounded-sm space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-eyebrow text-brand-orange border-b border-white/[0.07] pb-3">
                  Engagement Overview
                </div>
                <div className="space-y-2 text-xs font-mono text-prose-dim">
                  <div className="flex justify-between py-1 border-b border-white/[0.05]">
                    <span>Turnaround</span>
                    <span className="text-prose-secondary">2 – 6 Weeks Typ.</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.05]">
                    <span>Methodology</span>
                    <span className="text-prose-secondary">Fixed Scope / Sprint</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.05]">
                    <span>Ownership</span>
                    <span className="text-prose-secondary">100% IP Transfer</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-md shadow-brand-orange/20"
                >
                  <span>Inquire for {service.title.split(" ")[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left 8 cols: Deliverables + Capabilities + Use Cases */}
            <div className="lg:col-span-8 space-y-14">

              {/* Scope & Deliverables */}
              <div className="space-y-6">
                <div>
                  <span className="eyebrow block mb-2">Detailed Scope</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary tracking-tight">
                    What We Engineer & Deliver.
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-surface border border-white/[0.07] rounded-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span className="text-xs text-prose-secondary leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key capabilities */}
              <div className="space-y-6">
                <div>
                  <span className="eyebrow block mb-2">Technical Standards</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary tracking-tight">
                    Capabilities & Architecture.
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.keyCapabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-surface border border-white/[0.07] rounded-sm font-mono text-xs text-prose-secondary hover:border-brand-orange/30 transition-colors"
                    >
                      <span className="text-brand-orange mr-2">▸</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div className="space-y-6">
                <div>
                  <span className="eyebrow block mb-2">Application Scenarios</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-prose-primary tracking-tight">
                    Who This Service Is Built For.
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-surface border border-white/[0.07] rounded-sm space-y-2 hover:border-brand-orange/25 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-brand-orange shrink-0 mt-0.5">
                          [0{idx + 1}]
                        </span>
                        <div className="text-sm font-display font-semibold text-prose-primary group-hover:text-brand-orange transition-colors mb-1">
                          {uc.title}
                        </div>
                      </div>
                      <p className="text-xs text-prose-dim leading-relaxed font-light">
                        {uc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Other services */}
              <div className="p-5 bg-surface border border-white/[0.07] rounded-sm space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim pb-2 border-b border-white/[0.06]">
                  Other Practice Areas
                </div>
                <div className="space-y-1.5">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between py-2.5 px-3 bg-raised border border-white/[0.05] hover:border-brand-orange/30 transition-colors rounded-sm group"
                    >
                      <div>
                        <div className="text-[9px] font-mono text-brand-orange">SERVICE {s.index}</div>
                        <div className="text-xs text-prose-secondary group-hover:text-prose-primary transition-colors font-medium">
                          {s.title}
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-prose-dim group-hover:text-brand-orange transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Inquiry card */}
              <div className="p-5 bg-brand-dim border border-brand-orange/20 rounded-sm space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-eyebrow text-brand-orange">Quick Inquiry</div>
                <p className="text-xs text-prose-secondary font-light leading-relaxed">
                  Have a project that spans multiple services? We routinely build comprehensive solutions combining web, custom SaaS, and automation.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors rounded-sm"
                >
                  <span>Submit Inquiry Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
