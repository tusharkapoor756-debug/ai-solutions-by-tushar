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
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
            Portfolio Inventory
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-editorial">
            Crafted Systems &amp; Case Studies.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
            Every project represents genuine engineering and design execution. We explicitly distinguish between live deployed products, technical foundation architectures, and concept prototypes.
          </p>
        </div>

        {/* Project Grid */}
        <div className="space-y-12">
          {studioProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 bg-[#141619] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Blueprint Card */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="bg-[#0C0D0E] border border-zinc-800 p-5 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 font-mono text-[11px] text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-zinc-700" />
                        <span className="text-zinc-400 font-semibold">{project.id.toUpperCase()}.SYS</span>
                      </div>
                      <span className={`px-2 py-0.5 border ${project.statusColor} uppercase text-[10px]`}>
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-studio-orange uppercase mb-1">
                        {project.category}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        {project.title}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-2 grid grid-cols-3 gap-2">
                      <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono">
                        <span className="text-zinc-500 block uppercase">Layer 01</span>
                        <span className="text-zinc-300 font-bold">Frontend UI</span>
                      </div>
                      <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono">
                        <span className="text-zinc-500 block uppercase">Layer 02</span>
                        <span className="text-zinc-300 font-bold">API / Engine</span>
                      </div>
                      <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono">
                        <span className="text-zinc-500 block uppercase">Layer 03</span>
                        <span className="text-zinc-300 font-bold">Data Store</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Details & CTA */}
                <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-500">
                    <span>0{idx + 1}</span>
                    <span>/</span>
                    <span className="text-studio-orange font-semibold">{project.year}</span>
                    <span>/</span>
                    <span className="uppercase">{project.status}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {project.problem}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-5 py-3 bg-studio-orange text-white font-bold hover:bg-studio-orange-hover transition-colors"
                    >
                      <span>Read Detailed Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
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
