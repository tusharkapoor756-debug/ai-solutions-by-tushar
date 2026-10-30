import React from "react";
import { studioCapabilities } from "@/config/site";

const Capabilities = () => {
  const capabilityGroups = [
    { title: "Frontend Engineering", items: studioCapabilities.frontend },
    { title: "Backend & Systems", items: studioCapabilities.backend },
    { title: "Databases & Architecture", items: studioCapabilities.database },
    { title: "AI & Automation Pipelines", items: studioCapabilities.aiAutomation },
    { title: "Design Systems & 3D", items: studioCapabilities.design },
    { title: "Cloud & Deployment", items: studioCapabilities.deployment },
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0F1012] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 md:mb-12 border-b border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-2">
              04 // Technical Depth
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-editorial">
              Capabilities &amp; Stack.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400 max-w-sm">
            Refined typographic inventory. No gimmicky rotating logos, just battle-tested modern tools.
          </p>
        </div>

        {/* Capabilities Grid - compact padding and font sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {capabilityGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-[#141619] border border-zinc-800/80 space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-[11px] font-mono text-studio-orange">
                  STACK [0{idx + 1}]
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  Production-Ready
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.items.map((tech, tIdx) => (
                  <li
                    key={tIdx}
                    className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 font-mono py-0.5 border-b border-zinc-900/60 last:border-b-0"
                  >
                    <span>{tech}</span>
                    <span className="text-zinc-600 text-xs">&bull;</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
