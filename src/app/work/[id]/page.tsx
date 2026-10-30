import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { studioProjects } from "@/config/site";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return studioProjects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = studioProjects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Case Study | TUSHAR LABS" };

  return {
    title: `${project.title} — Case Study | TUSHAR LABS`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = studioProjects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <main className="min-h-screen py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-zinc-800 pb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="text-studio-orange uppercase">{project.category}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-500">{project.year}</span>
            <span className="text-zinc-600">/</span>
            <span className={`px-2 py-0.5 border ${project.statusColor} uppercase text-[10px]`}>
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-heading text-white tracking-editorial">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {project.externalLink && (
            <div className="pt-2">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-studio-orange hover:underline font-bold"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Blueprint Visual Showcase */}
        <div className="p-6 sm:p-10 bg-[#141619] border border-zinc-800 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono text-zinc-500">
            <span>ARCHITECTURAL PROTOTYPE &bull; {project.id.toUpperCase()}</span>
            <span>STATUS: {project.status.toUpperCase()}</span>
          </div>
          <div className="bg-[#0C0D0E] border border-zinc-800/80 p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Engineering Discipline</span>
                <span className="text-xs font-mono text-white font-bold">{project.category}</span>
              </div>
              <div className="p-4 bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Implementation Year</span>
                <span className="text-xs font-mono text-white font-bold">{project.year}</span>
              </div>
              <div className="p-4 bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Deployment State</span>
                <span className="text-xs font-mono text-studio-orange font-bold">{project.status}</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* The Problem */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-studio-orange block">
                01 // The Problem &amp; Operational Friction
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                What needed solving?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-studio-orange block">
                02 // The Architectural Solution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Our approach and design execution
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-studio-orange block">
                03 // Key Functionality
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-3.5 bg-[#141619] border border-zinc-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-studio-orange shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-studio-orange block">
                04 // Technical Challenges &amp; Tradeoffs
              </span>
              <p className="text-sm text-zinc-400 font-light leading-relaxed bg-[#141619] p-5 border border-zinc-800">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Sidebar: Role, Stack, and Next Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-[#141619] border border-zinc-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-800">
                  My Contribution &amp; Role
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div className="p-6 bg-[#141619] border border-zinc-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 pb-2 border-b border-zinc-800">
                  Next Case Study
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Next Project &rarr;</div>
                  <div className="text-lg font-bold text-white mb-3">{project.nextProject.title}</div>
                  <Link
                    href={`/work/${project.nextProject.id}`}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2 bg-studio-orange text-white font-bold hover:bg-studio-orange-hover transition-colors"
                  >
                    <span>View Next</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-[#141619] border border-zinc-800 space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Build Something Similar?
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-zinc-950 text-xs font-mono tracking-widest uppercase font-bold hover:bg-studio-orange hover:text-white transition-colors"
                >
                  <span>Inquire Similar Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
