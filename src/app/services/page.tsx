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
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
            Practice Overview
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-editorial">
            Disciplined Digital Services.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
            We provide full-lifecycle technical and design execution. Every practice area is structured to deliver tangible business efficiency, brand prestige, and reliable production software.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {studioServices.map((service) => (
            <div
              key={service.slug}
              className="p-6 sm:p-10 bg-[#141619] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-mono text-studio-orange block">
                    SERVICE {service.index}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pt-1">
                    {service.leadParagraph}
                  </p>
                  <div className="pt-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white hover:text-studio-orange transition-colors font-bold"
                    >
                      <span>Explore Dedicated Service Page</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Scope &amp; Deliverables
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 bg-studio-orange mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Primary Use Cases
                  </div>
                  <div className="space-y-3">
                    {service.useCases.slice(0, 2).map((u, i) => (
                      <div key={i} className="p-3 bg-[#0C0D0E] border border-zinc-900">
                        <div className="text-xs font-mono text-zinc-300 font-semibold mb-1">
                          {u.title}
                        </div>
                        <div className="text-[11px] text-zinc-500 font-light leading-relaxed">
                          {u.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
