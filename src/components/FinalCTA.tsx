import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0C0D0E] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="p-6 sm:p-10 md:p-14 lg:p-16 bg-[#141619] border border-zinc-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
              Initiate Project
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-editorial leading-tight">
              Have an idea <br />worth building?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
              Let&apos;s turn your next idea into something real. Send us a project inquiry or connect directly via WhatsApp to discuss architecture, timeline, and scope.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={siteConfig.cta.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-widest uppercase hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <span>WhatsApp Directly</span>
                <ArrowUpRight className="w-4 h-4 text-studio-orange" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
