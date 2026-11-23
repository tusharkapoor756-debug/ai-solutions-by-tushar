import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Sparkles, BookOpen } from "lucide-react";
import { studioArticles } from "@/config/articles";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Insights & Case Studies — Tushar Labs | Practical Tech & Business Solutions",
  description:
    "Real-world breakdowns on building restaurant software (KitchenZap), high-conversion web development, and replacing recurring SaaS costs with custom tools.",
  alternates: {
    canonical: "https://www.tusharlabs.in/insights",
  },
};

export default function InsightsPage() {
  const featuredArticle = studioArticles.find((a) => a.featured) || studioArticles[0];
  const regularArticles = studioArticles.filter((a) => a.slug !== featuredArticle.slug);

  return (
    <main className="min-h-screen bg-void pb-20">
      {/* Accent Line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Hero Header */}
      <section className="pt-24 lg:pt-32 pb-12 px-6 lg:px-12 max-w-7xl mx-auto border-b border-border">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-primary tracking-widest uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Field Notes &amp; Systems Architecture</span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Insights for Builders &amp; Business Operators.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Practical breakdowns on software architecture, restaurant operational workflows, and why modern web development should directly drive revenue—not just look pretty.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        {/* Featured Card */}
        {featuredArticle && (
          <FadeUp>
            <div className="p-8 sm:p-12 rounded-sm border border-primary/30 bg-card/60 relative overflow-hidden group hover:border-primary/60 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-sm bg-primary/20 text-primary font-bold uppercase tracking-wider">
                    Featured Breakdown
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{featuredArticle.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="space-y-3 max-w-4xl">
                  <Link href={`/insights/${featuredArticle.slug}`}>
                    <h2
                      className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {featuredArticle.title}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-border">
                  <span className="text-xs font-mono text-muted-foreground">
                    Audience: {featuredArticle.targetAudience}
                  </span>
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary font-bold hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularArticles.map((article) => (
            <FadeUp key={article.slug}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-sm border border-border bg-card/40 hover:border-primary/40 transition-colors group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span className="text-primary font-semibold">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link href={`/insights/${article.slug}`}>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors cursor-pointer"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {article.date}
                  </span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary font-bold hover:underline"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-sm border border-border bg-card/60 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/10 text-primary font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have a business bottleneck?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Let&apos;s engineer a solution for your operations.
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Whether you need a high-converting website, an automated customer ordering flow, or a bespoke operational tool, we build fast and speak in clear business outcomes.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20read%20your%20insights%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors rounded-sm"
            >
              <span>Discuss via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs font-mono uppercase tracking-widest font-bold hover:border-primary transition-colors rounded-sm"
            >
              <span>Submit Project Brief</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
