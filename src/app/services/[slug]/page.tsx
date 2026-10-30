import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";
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

  return (
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-studio-orange">SERVICE {service.index}</span>
            <span className="text-zinc-600 font-mono text-xs">/</span>
            <span className="text-xs font-mono text-zinc-400 uppercase">Dedicated Practice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-editorial">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Core Approach
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                {service.leadParagraph}
              </p>
            </div>

            {/* Deliverables */}
            <div className="p-6 bg-[#141619] border border-zinc-800 space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-studio-orange">
                What We Deliver
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-studio-orange shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Key Technical Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyCapabilities.map((cap, idx) => (
                  <div key={idx} className="p-3.5 bg-zinc-900/60 border border-zinc-800/80 font-mono text-xs text-zinc-300">
                    <span className="text-studio-orange mr-2">&bull;</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Target Client Scenarios
              </h2>
              <div className="space-y-3">
                {service.useCases.map((uc, idx) => (
                  <div key={idx} className="p-4 bg-[#141619] border border-zinc-800 space-y-1">
                    <div className="text-sm font-bold text-white font-mono">{uc.title}</div>
                    <div className="text-xs text-zinc-400 leading-relaxed font-light">{uc.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 bg-[#141619] border border-zinc-800 space-y-5">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 pb-2 border-b border-zinc-800">
                Project Intake
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Ready to initiate a {service.title} engagement? Connect with our technical team to discuss architecture, milestones, and scope.
              </p>
              <div className="space-y-2.5">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors"
                >
                  <span>Start This Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-widest uppercase hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <span>View Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
