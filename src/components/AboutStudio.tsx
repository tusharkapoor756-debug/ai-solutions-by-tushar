import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const AboutStudio = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 border-b border-zinc-800/80 bg-[#0F1012] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
              06 // Studio Profile
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-editorial">
              About Tushar Labs.
            </h2>
            <div className="pt-2 text-xs font-mono text-zinc-500 uppercase tracking-widest leading-loose">
              Location: New Delhi, India <br />
              Engagement: Global &bull; Remote <br />
              Structure: Independent Studio
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 leading-snug">
              We operate at the exact intersection of deliberate design and production-grade software engineering.
            </h3>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Tushar Labs was created to provide ambitious founders, businesses, and agency teams with a direct, uncompromising technical and design partner. Without account executives or layers of agency bureaucracy, you work directly with makers who write the code, architect the databases, and design the interfaces.
              </p>
              <p>
                Our philosophy prioritizes precision over noise. We believe in building digital products that load instantaneously, feel intuitive, communicate confidence, and solve genuine business challenges through disciplined engineering.
              </p>
            </div>

            {/* Direct Connect Link */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-studio-orange transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
              </Link>
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-studio-orange transition-colors"
              >
                <span>Direct WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-orange" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
