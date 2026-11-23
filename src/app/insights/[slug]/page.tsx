import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Share2, Sparkles, AlertCircle } from "lucide-react";
import { studioArticles } from "@/config/articles";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return studioArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = studioArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Insight | TUSHAR LABS" };

  return {
    title: `${article.title} | Tushar Labs Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.tusharlabs.in/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://www.tusharlabs.in/insights/${article.slug}`,
    },
  };
}

export default function ArticleDetailPage({ params }: PageProps) {
  const article = studioArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const otherArticles = studioArticles.filter((a) => a.slug !== article.slug);

  return (
    <main className="min-h-screen bg-void pb-24">
      {/* Accent Line */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Navigation Breadcrumb */}
      <div className="py-4 px-6 lg:px-12 max-w-5xl mx-auto border-b border-border">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="pt-12 sm:pt-16 px-6 lg:px-12 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="text-primary font-bold uppercase">{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
            {article.tagline}
          </p>
        </div>

        {/* Audience Pill */}
        <div className="p-4 rounded-sm border border-border bg-card/50 flex items-center justify-between font-mono text-xs">
          <span className="text-muted-foreground">Target Audience:</span>
          <span className="text-foreground font-semibold">{article.targetAudience}</span>
        </div>

        {/* Section 1: The Problem */}
        <div className="pt-6 space-y-4 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest">
            <AlertCircle className="w-4 h-4" />
            <span>01 / The Real Operational Bottleneck</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">The Breakdown in Existing Systems</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {article.content.problemStatement}
          </p>
        </div>

        {/* Section 2: Why Legacy Fails */}
        <div className="pt-6 space-y-4">
          <h3 className="text-xl font-bold text-foreground">Where Traditional Solutions Fall Short:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {article.content.whyTraditionalSolutionsFail.map((point, idx) => (
              <div key={idx} className="p-4 rounded-sm border border-border bg-card/30 space-y-1">
                <span className="font-mono text-xs text-red-400 font-bold">Failure Mode #{idx + 1}</span>
                <p className="text-sm text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: The Engineered Solution */}
        <div className="pt-8 space-y-4 border-t border-border">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>02 / The Engineered Architecture</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">{article.content.theSolutionArchitecture.headline}</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {article.content.theSolutionArchitecture.description}
          </p>

          <div className="space-y-3 pt-3">
            {article.content.theSolutionArchitecture.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-sm border border-border bg-card/40">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Real World Impact */}
        <div className="pt-8 space-y-3 border-t border-border">
          <h3 className="text-xl font-bold text-foreground">Measurable Business Impact</h3>
          <div className="p-6 rounded-sm border border-primary/20 bg-primary/5">
            <p className="text-base text-foreground font-medium leading-relaxed">
              {article.content.realWorldImpact}
            </p>
          </div>
        </div>

        {/* Takeaway & Actionable CTA */}
        <div className="pt-8 space-y-4">
          <div className="p-8 rounded-sm border border-border bg-card/60 space-y-5">
            <h3 className="text-xl font-bold text-foreground">Actionable Takeaway for Founders &amp; Operators</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {article.content.actionableTakeaway}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919315569638?text=Hello%20Tushar%20Labs%2C%20I%20read%20your%20article%20and%20want%20to%20discuss%20a%20solution."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors rounded-sm"
              >
                <span>Direct WhatsApp Inquiries</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-xs font-mono uppercase tracking-widest font-bold hover:border-primary transition-colors rounded-sm"
              >
                <span>Book a Discovery Call</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Articles Recommendation */}
        <div className="pt-16 border-t border-border space-y-6">
          <h3 className="text-lg font-mono uppercase tracking-widest text-muted-foreground">More Insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((other) => (
              <Link
                key={other.slug}
                href={`/insights/${other.slug}`}
                className="p-5 rounded-sm border border-border bg-card/30 hover:border-primary/50 transition-colors space-y-2 block"
              >
                <span className="font-mono text-[11px] text-primary">{other.category}</span>
                <h4 className="text-sm font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
                  {other.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{other.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
