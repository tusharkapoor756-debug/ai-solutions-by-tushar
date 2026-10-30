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
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <span className="text-[11px] font-mono tracking-eyebrow uppercase text-studio-orange block">
            Technical Depth
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-editorial">
            Engineering Capabilities.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
            We reject the vanity wall of floating corporate logos. Below is an honest, production-verified inventory of the tools, frameworks, and architecture patterns we employ to deliver real systems.
          </p>
        </div>

        {/* Capability Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#141619] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-mono text-studio-orange font-bold">
                    DOMAIN [0{idx + 1}]
                  </span>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">
                    Production Verified
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white font-heading">
                  {group.title}
                </h2>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {group.tagline}
                </p>

                {/* Primary Tools */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Core Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific Engineering Practices */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Standards &amp; Practices
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                    {group.practices.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-studio-orange">&bull;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 bg-[#141619] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">
              Have unique architectural requirements?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              We frequently integrate specialized APIs, self-hosted LLM endpoints, and legacy databases.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-studio-orange text-white text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange-hover transition-colors shrink-0"
          >
            <span>Discuss Architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
