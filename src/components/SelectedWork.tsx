import React from "react";
import Link from "next/link";
import { studioProjects as featuredProjects } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

const SelectedWork = () => {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0C0D0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 md:mb-14 border-b border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-2">
              03 // Selected Work
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-editorial">
              Crafted Systems &amp; Platforms.
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-zinc-500 max-w-sm">
            <span className="text-zinc-300 font-semibold">Strict Authenticity:</span> We clearly distinguish live deployed platforms, technical foundations, and concept architecture.
          </div>
        </div>

        {/* Project Showcases - compact spacing from space-y-24 to space-y-14 */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center group pb-12 sm:pb-16 border-b border-zinc-900 last:border-b-0"
            >
              {/* Project Visual Showcase */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="bg-[#141619] border border-zinc-800 p-4 sm:p-6 relative overflow-hidden transition-all duration-300 group-hover:border-zinc-700">
                  {/* Top Bar of Mockup */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80 font-mono text-[11px] text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-zinc-700" />
                      <span className="w-2 h-2 rounded-full bg-zinc-800" />
                      <span className="w-2 h-2 rounded-full bg-zinc-800" />
                      <span className="ml-1 text-zinc-400 font-semibold">{project.id.toUpperCase()}.SYS</span>
                    </div>
                    <span className="text-zinc-600">SYS_BUILD_v2.4</span>
                  </div>

                  {/* Architectural Blueprint View */}
                  <div className="min-h-[200px] sm:min-h-[240px] bg-[#0C0D0E] border border-zinc-800/80 p-4 sm:p-5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <div className="text-[10px] font-mono text-studio-orange uppercase tracking-wider mb-0.5">
                            {project.category}
                          </div>
                          <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                            {project.title}
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${project.statusColor}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Technical Layer indicators */}
                      <div className="pt-2 grid grid-cols-3 gap-2">
                        <div className="p-2 sm:p-2.5 bg-zinc-900/60 border border-zinc-800">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase block">Layer 01</span>
                          <span className="text-xs font-mono text-zinc-300 font-bold">Frontend UI</span>
                        </div>
                        <div className="p-2 sm:p-2.5 bg-zinc-900/60 border border-zinc-800">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase block">Layer 02</span>
                          <span className="text-xs font-mono text-zinc-300 font-bold">API / Engine</span>
                        </div>
                        <div className="p-2 sm:p-2.5 bg-zinc-900/60 border border-zinc-800">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase block">Layer 03</span>
                          <span className="text-xs font-mono text-zinc-300 font-bold">Data Store</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Editorial Detail */}
              <div
                className={`lg:col-span-5 space-y-4 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center gap-2.5 font-mono text-[11px] text-zinc-500">
                  <span>0{index + 1}</span>
                  <span>/</span>
                  <span className="text-studio-orange font-semibold">{project.year}</span>
                  <span>/</span>
                  <span className="uppercase">{project.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div className="pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono px-2.5 py-0.5 bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white hover:text-studio-orange transition-colors font-bold"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
