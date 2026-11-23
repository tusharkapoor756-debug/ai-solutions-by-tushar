import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact — Tushar Labs | Get in Touch",
  description:
    "Direct engagement with Tushar Labs in New Delhi. Request a proposal for custom website development, AI workflow automation, or SaaS engineering. 24h response guaranteed.",
  keywords: [
    "Contact Tushar Labs",
    "Hire Web Developers Delhi",
    "AI Automation Studio Delhi NCR",
    "Next.js Development Studio",
  ],
  alternates: {
    canonical: "https://www.tusharlabs.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Orange accent line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* ── HERO BANNER ── */}
      <section className="pt-28 lg:pt-36 pb-12 lg:pb-16 px-6 lg:px-8 max-w-7xl mx-auto border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-4">
              Direct Engagement · Studio Inquiry
            </span>
            <h1
              className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start a Project.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Tell us about your objectives, timeline, and tech requirements. Every brief is reviewed directly by our founder and engineering lead with a clear response and actionable roadmap within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-3 p-3.5 rounded-sm border border-border" style={{ background: "hsl(var(--card))" }}>
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
              <span>Response guaranteed within 24h</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-sm border border-border" style={{ background: "hsl(var(--card))" }}>
              <span className="text-primary font-bold">100%</span>
              <span>Direct engineer &amp; designer collaboration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE INQUIRY FORM & DETAILS ── */}
      <Contact />

      {/* ── WORKSPACE SHOWCASE FOOTER ── */}
      <section className="bg-background border-t border-border py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="relative overflow-hidden rounded-sm border border-border aspect-[21/9] w-full">
            <Image
              src="/images/pages/about/workspace.png"
              alt="Tushar Labs Studio Environment"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary pointer-events-none" />
            <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div>
                <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-1">
                  Studio Standards
                </span>
                <p className="text-sm font-semibold text-foreground">
                  Crafting resilient code, high-converting interfaces &amp; autonomous workflows.
                </p>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-muted-foreground">
                Tushar Labs Studio
              </span>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
