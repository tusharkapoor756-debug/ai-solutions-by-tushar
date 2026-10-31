import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { studioCapabilities } from "@/config/site";

export const metadata: Metadata = {
  title: "Technical Capabilities & Stack | TUSHAR LABS",
  description:
    "An inventory of our technical disciplines: Frontend Engineering, Backend & Systems, Database & Architecture, AI & Automation, Design Systems, and Cloud Deployment.",
};

export default function CapabilitiesPage() {
  const capabilityGroups = [
    {
      title: "Frontend Engineering",
      tagline: "Component architecture, performance, accessibility, and high-fidelity motion.",
      items: studioCapabilities.frontend,
      practices: [
        "Server-Side Rendering (SSR) & Static Generation",
        "Type-Safe Component Architecture (TypeScript)",
        "Zero-Layout-Shift Responsive Breakpoints",
        "Reduced Motion & WCAG 2.1 AA Compliance",
      ],
    },
    {
      title: "Backend & Systems",
      tagline: "Robust APIs, event webhooks, and deterministic computational pipelines.",
      items: studioCapabilities.backend,
      practices: [
        "RESTful & Microservice API Construction",
        "Deterministic Data Ingestion & Sanitization",
        "Webhook Event Routing & Failure Retries",
        "Role-Based Access Control & JWT Sessions",
      ],
    },
    {
      title: "Database & Architecture",
      tagline: "Relational modeling, migration integrity, and real-time synchronicity.",
      items: studioCapabilities.database,
      practices: [
        "Relational Schema Design & Normalization",
        "Row-Level Security (RLS) Implementation",
        "Real-Time Database Subscriptions & Triggers",
        "Automated Backup & Failover Strategies",
      ],
    },
    {
      title: "AI & Automation Pipelines",
      tagline: "Practical LLM orchestration, WhatsApp integrations, and structured workflows.",
      items: studioCapabilities.aiAutomation,
      practices: [
        "Multi-Model LLM Abstraction Layers",
        "Deterministic Guardrails Against Hallucination",
        "Official WhatsApp Cloud API Handlers",
        "Visual n8n Enterprise Workflow Orchestration",
      ],
    },
    {
      title: "Design Systems & 3D",
      tagline: "Swiss typography systems, interactive prototypes, and spatial visualization.",
      items: studioCapabilities.design,
      practices: [
        "Modular Figma Auto-Layout Tokens",
        "Harmonious Color & Spacing Token Models",
        "Micro-Interaction & Prototype Crafting",
        "Architectural 3D Perspective Modeling",
      ],
    },
    {
      title: "Cloud & Deployment",
      tagline: "Edge networks, continuous integration, and scalable hosting foundations.",
      items: studioCapabilities.deployment,
      practices: [
        "Vercel Edge Network Configuration",
        "GitHub Actions CI/CD Automated Pipelines",
        "DNS, SSL & Custom Domain Optimization",
        "Cloudflare CDN & DDoS Mitigation",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-void">

      {/* Hero */}
      <section className="relative py-20 sm:py-24 md:py-28 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none" />
        <div className="absolute inset-0 orange-grid pointer-events-none opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-5">
          <span className="eyebrow">Technical Depth</span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-prose-primary tracking-editorial leading-none">
            Engineering<br />
            <span className="gradient-text">Capabilities.</span>
          </h1>
          <p className="text-sm sm:text-base text-prose-secondary font-light max-w-2xl leading-relaxed">
            We reject the vanity wall of floating corporate logos. Below is an honest, production-verified inventory of the tools, frameworks, and architecture patterns we employ to deliver real systems.
          </p>
        </div>
      </section>

      {/* Capability Groups */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05] rounded-sm overflow-hidden">
            {capabilityGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-surface hover:bg-raised transition-colors flex flex-col justify-between space-y-5 relative group"
              >
                {/* Orange top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                    <span className="text-[9px] font-mono text-brand-orange font-bold tracking-eyebrow uppercase">
                      DOMAIN [0{idx + 1}]
                    </span>
                    <span className="text-[9px] font-mono uppercase text-prose-muted">
                      Production Verified
                    </span>
                  </div>

                  <h2 className="text-lg font-display font-bold text-prose-primary">
                    {group.title}
                  </h2>

                  <p className="text-xs text-prose-dim font-light leading-relaxed">
                    {group.tagline}
                  </p>

                  {/* Tech badges */}
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-eyebrow text-prose-muted block mb-2.5">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-1 bg-void text-prose-secondary border border-white/[0.07] rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Practices */}
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-eyebrow text-prose-muted block mb-2.5">
                      Standards & Practices
                    </span>
                    <ul className="space-y-1.5">
                      {group.practices.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-[11px] text-prose-secondary font-mono">
                          <span className="text-brand-orange mt-0.5">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 border-t border-white/[0.07] bg-surface relative overflow-hidden">
        <div className="absolute inset-0 ambient-bg pointer-events-none opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="p-8 sm:p-10 bg-void border border-brand-orange/20 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-bold text-prose-primary">
                Have unique architectural requirements?
              </h3>
              <p className="text-sm text-prose-secondary font-light">
                We frequently integrate specialized APIs, self-hosted LLM endpoints, and legacy databases.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-brand-hover transition-colors shrink-0 rounded-sm shadow-lg shadow-brand-orange/20"
            >
              <span>Discuss Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
