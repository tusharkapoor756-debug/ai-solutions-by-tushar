import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { studioServices, studioProjects, studioProcess } from "@/config/site";

export default function Home() {
  const featuredProjects = studioProjects.slice(0, 3); // 3 focused projects for homepage

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden border-b border-zinc-800/80">
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 md:mb-10 border-b border-zinc-800/80 font-mono text-[11px] sm:text-xs tracking-eyebrow uppercase text-zinc-500">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-studio-orange" />
              <span className="text-zinc-300 font-semibold">Independent Studio</span>
              <span className="text-zinc-600">/</span>
              <span>Est. 2024</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <span className="hidden sm:inline">Design &bull; Systems &bull; Code</span>
              <span className="text-studio-orange/90 font-medium">Available For Selected Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading tracking-editorial text-white leading-[1.04] sm:leading-[1.0] break-words">
                We turn ambitious ideas into{" "}
                <span className="underline decoration-studio-orange decoration-4 sm:decoration-6 underline-offset-4 sm:underline-offset-8">
                  digital reality
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                We design and build websites, custom software and intelligent digital systems that help businesses move forward.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-zinc-900 border border-zinc-800 text-white text-xs font-mono tracking-widest uppercase hover:bg-zinc-800 transition-colors"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-5 lg:border-l lg:border-zinc-800/80 lg:pl-8 pt-4 lg:pt-0">
              <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-900 flex justify-between items-center">
                <span>Core Practice Areas</span>
                <Link href="/services" className="text-studio-orange hover:underline text-[10px]">
                  View All &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                {studioServices.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="p-3.5 bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-colors block group"
                  >
                    <div className="text-[10px] font-mono text-studio-orange mb-1">SERVICE {item.index}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-studio-orange transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-zinc-400 line-clamp-1">{item.tagline}</div>
                  </Link>
                ))}
              </div>

              <div className="p-4 bg-white/[0.02] border border-zinc-800/80">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Our Stance
                </p>
                <p className="text-xs text-zinc-300 italic leading-relaxed">
                  &ldquo;No superficial templates. No inflated jargon. Only precision engineering, clear communication, and deliberate digital craftsmanship.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Short Studio Introduction */}
      <section className="py-14 sm:py-18 md:py-20 border-b border-zinc-800/80 bg-[#0C0D0E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
                Studio Philosophy
              </span>
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                The Maker Model
              </h2>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-editorial text-white leading-tight">
                &ldquo;Technology should solve problems. <br className="hidden sm:inline" />
                <span className="text-zinc-500">Design should make it meaningful.&rdquo;</span>
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
                Tushar Labs operates at the exact intersection of deliberate visual design and production-grade software engineering. We partner directly with founders and teams to build websites, custom SaaS platforms, and intelligent automation systems that perform reliably under real-world conditions.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-studio-orange transition-colors font-bold"
                >
                  <span>Learn More About Our Studio &amp; Approach</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section className="py-14 sm:py-18 md:py-20 border-b border-zinc-800/80 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
                Disciplines
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-editorial">
                Four Practice Areas.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {studioServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-5 sm:p-6 bg-[#141619] border border-zinc-800/80 hover:border-zinc-700 flex flex-col justify-between group transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-[11px] font-mono text-studio-orange font-bold">
                      {service.index}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-studio-orange transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-studio-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {service.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-900 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center justify-between">
                  <span>View Details</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three Featured Projects */}
      <section className="py-14 sm:py-18 md:py-20 border-b border-zinc-800/80 bg-[#0C0D0E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
                Portfolio Preview
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-editorial">
                Featured Projects.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>View All 5 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="bg-[#141619] border border-zinc-800/80 p-5 flex flex-col justify-between group hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[10px] font-mono">
                    <span className="text-zinc-500">0{idx + 1} / {project.year}</span>
                    <span className={`px-2 py-0.5 border ${project.statusColor} uppercase`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Wireframe Mini Preview */}
                  <div className="bg-[#0C0D0E] border border-zinc-800/80 p-4 space-y-3">
                    <div className="text-[10px] font-mono text-studio-orange uppercase">
                      {project.category}
                    </div>
                    <div className="text-xl font-black text-white group-hover:text-studio-orange transition-colors">
                      {project.title}
                    </div>
                    <p className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-zinc-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300 group-hover:text-studio-orange transition-colors">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Short Process Overview */}
      <section className="py-14 sm:py-18 md:py-20 border-b border-zinc-800/80 bg-[#0F1012] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-1">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-editorial">
                How We Deliver.
              </h2>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 max-w-xs">
              Sequential engineering execution from research to launch.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {studioProcess.map((step) => (
              <div
                key={step.step}
                className="p-4 bg-[#141619] border border-zinc-800/80 space-y-2"
              >
                <div className="text-sm font-mono text-studio-orange font-bold">
                  {step.step}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  {step.name}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {step.headline}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Project CTA */}
      <section className="py-16 sm:py-20 bg-[#0C0D0E] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="p-6 sm:p-10 md:p-14 bg-[#141619] border border-zinc-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
                Initiate Project
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-editorial leading-tight">
                Have an idea worth building?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Let&apos;s turn your next idea into something real. Send us a project inquiry with your scope, timeline, and budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-widest uppercase hover:text-white hover:bg-zinc-800 transition-colors text-center"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
