import React from "react";

const Introduction = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0C0D0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
                01 // Introduction
              </span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Studio Philosophy
              </h3>
            </div>
          </div>

          {/* Main Statement */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-editorial text-white leading-[1.18]">
              &ldquo;Technology should solve problems. <br className="hidden sm:inline" />
              <span className="text-zinc-500">Design should make it meaningful.&rdquo;</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Tushar Labs was founded on a simple conviction: modern businesses do not need another bloated agency delivering interchangeable templates. They need a disciplined partner capable of bridging high-end visual distinction with robust, scalable software engineering.
              </p>
              <p>
                From custom full-stack web platforms and deterministic AI-assisted workflows to refined branding architectures, we build digital solutions designed for longevity, performance, and tangible commercial advantage.
              </p>
            </div>

            {/* Target Client Profiles - compact 2 or 4 col */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Startups & Founders", desc: "MVP to scalable production" },
                { title: "SMBs & Growth Brands", desc: "Digital flagships & automation" },
                { title: "Agencies & Studios", desc: "Technical implementation partner" },
                { title: "Hospitality & Travel", desc: "Bespoke operating portals" },
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-zinc-900/40 border border-zinc-900 space-y-0.5">
                  <div className="text-[11px] font-mono text-zinc-300 font-semibold">{item.title}</div>
                  <div className="text-[11px] text-zinc-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
