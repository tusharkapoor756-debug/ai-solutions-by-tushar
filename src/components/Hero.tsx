import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 overflow-hidden border-b border-zinc-800/80">
      {/* Background editorial grid */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Studio Eyebrow metadata */}
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

        {/* Hero Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Title & Lead Text */}
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

            {/* CTAs */}
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
                <ArrowDown className="w-4 h-4 text-zinc-500" />
              </Link>
            </div>
          </div>

          {/* Right Asymmetrical Editorial Sidebar */}
          <div className="lg:col-span-4 space-y-5 lg:border-l lg:border-zinc-800/80 lg:pl-8 pt-4 lg:pt-0">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-900 flex justify-between items-center">
              <span>Core Specializations</span>
              <span className="text-zinc-600">03 Areas</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
              {[
                {
                  code: "01 / WEB",
                  title: "Bespoke Flagship Platforms",
                  desc: "Next.js & modern headless architecture.",
                },
                {
                  code: "02 / SYS",
                  title: "Custom Software & SaaS",
                  desc: "Full-stack apps, dashboards & portals.",
                },
                {
                  code: "03 / INT",
                  title: "AI Workflows & Automation",
                  desc: "Deterministic integrations & pipelines.",
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className="p-3.5 bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-colors"
                >
                  <div className="text-[10px] font-mono text-studio-orange mb-1">{item.code}</div>
                  <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{item.title}</div>
                  <div className="text-xs text-zinc-400">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Studio ethos card */}
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
  );
};

export default Hero;
