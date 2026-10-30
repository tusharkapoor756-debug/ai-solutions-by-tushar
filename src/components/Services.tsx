import React from "react";
import { studioServices } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0F1012] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 md:mb-12 border-b border-zinc-800">
          <div>
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block mb-2">
              02 // Practice Areas
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-editorial">
              Disciplined Services.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400 max-w-sm">
            Four specialized disciplines engineered to take businesses from concept to enduring digital impact.
          </p>
        </div>

        {/* Services List - Compact spacing */}
        <div className="space-y-0 divide-y divide-zinc-800 border-y border-zinc-800">
          {studioServices.map((service) => (
            <div
              key={service.index}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 group hover:bg-zinc-900/30 transition-colors sm:px-4 sm:-mx-4"
            >
              {/* Index & Title */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[11px] font-mono text-studio-orange block">
                  SERVICE {service.index}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-studio-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md pt-1">
                  {service.tagline}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="lg:col-span-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                  Scope &amp; Deliverables
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-studio-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire Action */}
              <div className="lg:col-span-2 flex lg:justify-end items-start pt-1">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors"
                >
                  <span>Request Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
