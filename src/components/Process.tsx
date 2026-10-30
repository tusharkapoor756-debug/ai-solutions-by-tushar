import React from "react";
import { studioProcess } from "@/config/site";

const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0C0D0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 md:mb-12 border-b border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-2">
              05 // Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-editorial">
              How We Build.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400 max-w-sm">
            Five sequential stages ensuring predictability, architectural integrity, and measurable business outcomes.
          </p>
        </div>

        {/* 5-Step Process Timeline - responsive 1-col on mobile, 2/3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {studioProcess.map((step) => (
            <div
              key={step.step}
              className="p-5 bg-[#141619] border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
                  <span className="text-sm font-mono text-studio-orange font-bold">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">
                    PHASE
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  {step.name}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.headline}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900/80 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                Milestone Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
