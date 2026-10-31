import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-void border-t border-white/[0.07] text-prose-secondary font-sans">
      {/* Top manifesto bar */}
      <div className="border-b border-white/[0.07] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              {/* Brand */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm shrink-0">
                  <span className="text-white font-heading font-black text-sm leading-none">TL</span>
                </div>
                <Link href="/" className="inline-block">
                  <span className="font-display font-extrabold text-xl tracking-tight text-prose-primary uppercase hover:text-brand-orange transition-colors">
                    Tushar Labs
                  </span>
                </Link>
              </div>
              <p className="text-sm text-prose-secondary font-light leading-relaxed">
                An independent digital solutions and technology studio. We design and develop websites, custom software, and intelligent digital systems that help businesses move forward.
              </p>
              <div className="text-[10px] font-mono text-prose-dim uppercase tracking-eyebrow">
                New Delhi · Working Worldwide
              </div>
            </div>

            {/* Big CTA */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest px-6 py-3.5 bg-brand-orange text-white font-bold hover:bg-brand-hover transition-colors rounded-sm shadow-lg shadow-brand-orange/20"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">

            {/* Practices */}
            <div className="sm:col-span-1 lg:col-span-4 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim font-semibold border-b border-white/[0.06] pb-2">
                Practice Areas
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  { href: "/services/website-development", label: "Website Design & Development" },
                  { href: "/services/custom-software", label: "Custom Software & SaaS" },
                  { href: "/services/ai-automation", label: "AI & Workflow Automation" },
                  { href: "/services/branding-design", label: "Branding & Digital Design" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-prose-secondary hover:text-prose-primary transition-colors text-xs font-light leading-relaxed"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim font-semibold border-b border-white/[0.06] pb-2">
                Studio
              </div>
              <ul className="space-y-2.5 font-mono text-[11px] uppercase">
                {[
                  { href: "/services", label: "All Services" },
                  { href: "/work", label: "Selected Work" },
                  { href: "/capabilities", label: "Capabilities" },
                  { href: "/about", label: "About Studio" },
                  { href: "/contact", label: "Project Inquiry" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-prose-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim font-semibold border-b border-white/[0.06] pb-2">
                Contact
              </div>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-prose-secondary hover:text-prose-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-prose-secondary hover:text-prose-primary transition-colors font-mono"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="text-prose-dim text-[11px] font-mono">
                  {siteConfig.contact.operatingHours}
                </li>
              </ul>
            </div>

            {/* Channels */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-eyebrow text-prose-dim font-semibold border-b border-white/[0.06] pb-2">
                Channels
              </div>
              <ul className="space-y-2.5 font-mono text-[11px] uppercase">
                {[
                  { href: siteConfig.links.linkedin, label: "LinkedIn" },
                  { href: siteConfig.links.instagram, label: "Instagram" },
                  { href: siteConfig.links.whatsapp, label: "WhatsApp" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-prose-primary transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-brand-orange group-hover:text-brand-bright transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-mono text-prose-dim uppercase tracking-eyebrow">
          <div>
            &copy; {new Date().getFullYear()} TUSHAR LABS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js · TypeScript · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
