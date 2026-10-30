import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[#08090A] border-t border-zinc-800 text-zinc-400 py-12 sm:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand & Narrative */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading font-black text-xl tracking-tight text-white uppercase hover:text-studio-orange transition-colors">
                Tushar Labs
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm font-light leading-relaxed">
              An independent digital solutions and technology studio. We design and develop websites, custom software, and intelligent digital systems that help businesses move forward.
            </p>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest pt-1">
              New Delhi &bull; Working Worldwide
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Practices
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="hover:text-white transition-colors">
                  Custom Software &amp; SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                  AI &amp; Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services/branding-design" className="hover:text-white transition-colors">
                  Branding &amp; Digital Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Studio
            </div>
            <ul className="space-y-2 font-mono text-xs uppercase">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Channels
            </div>
            <ul className="space-y-2 font-mono text-xs uppercase">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-orange" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-orange" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-studio-orange" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} TUSHAR LABS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js &bull; TypeScript &bull; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
