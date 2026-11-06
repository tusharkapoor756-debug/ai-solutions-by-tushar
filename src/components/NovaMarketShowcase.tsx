"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Play, Pause, RotateCcw } from "lucide-react";

interface NovaShowcaseProps {
  className?: string;
}

export default function NovaMarketShowcase({ className = "" }: NovaShowcaseProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  const resetAnimation = () => {
    setResetKey((prev) => prev + 1);
    setIsPaused(false);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#07090E] p-4 sm:p-8 lg:p-12 shadow-2xl ${className}`}>
      {/* ── Ambient cinematic lighting & background effects ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.18), transparent 55%),
            radial-gradient(circle at 75% 60%, rgba(139, 92, 246, 0.15), transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.08), transparent 45%)
          `,
        }}
      />

      {/* Subtle background tech grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Header control bar for live showcase status ── */}
      <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            Real Website Scroll Simulation
          </span>
          <span className="hidden sm:inline-block text-xs text-white/20">•</span>
          <span className="hidden sm:inline-block font-mono text-xs text-white/40">
            Desktop (1440px) &amp; Mobile (390px)
          </span>
        </div>

        {/* Play/Pause & Reset interactive controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlayPause}
            aria-label={isPaused ? "Play scrolling animation" : "Pause scrolling animation"}
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
          >
            {isPaused ? (
              <>
                <Play className="h-3 w-3 fill-white/80 text-white/80 group-hover:fill-white group-hover:text-white" />
                <span>Resume</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 fill-white/80 text-white/80 group-hover:fill-white group-hover:text-white" />
                <span>Pause</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={resetAnimation}
            title="Reset scroll to top"
            aria-label="Reset scroll to top"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-1.5 text-white/70 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <RotateCcw className="h-3 w-3" />
          </button>

          <a
            href="https://nova-market-5q9.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium text-primary backdrop-blur-md transition-all hover:bg-primary hover:text-white"
          >
            <span>Live Site</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ── Mockup Composition: Centered Laptop with Overlapping Phone on Right ── */}
      <div
        key={resetKey}
        className={`group/stage relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center pt-2 pb-6 lg:pb-10 ${
          isPaused ? "animation-is-paused" : ""
        }`}
      >
        {/* Soft ground reflection shadow */}
        <div className="pointer-events-none absolute -bottom-4 left-1/2 h-16 w-4/5 -translate-x-1/2 rounded-full bg-black/80 blur-2xl" />

        {/* ── LAPTOP MOCKUP (Central visual focus) ── */}
        <div className="relative w-full max-w-4xl transition-transform duration-500 ease-out">
          {/* Laptop Lid / Bezel Frame */}
          <div className="relative mx-auto w-[92%] sm:w-[88%] lg:w-[86%] rounded-t-2xl sm:rounded-t-[22px] border-[3px] sm:border-[4px] border-[#2E333D] bg-[#12141A] p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(59,130,246,0.12)]">
            {/* Top Webcam Notch / Camera Dot */}
            <div className="relative z-20 mb-1.5 sm:mb-2 flex items-center justify-center">
              <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1e2330] border border-white/20" />
                <span className="h-1 w-1 rounded-full bg-emerald-500/70" />
              </div>
            </div>

            {/* Laptop Display Screen (Viewport with Real Content Scrolling) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#08090C] shadow-inner select-none">
              {/* Screen Glare & Vignette Overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 45%),
                    radial-gradient(circle at 50% 50%, transparent 70%, rgba(0, 0, 0, 0.4) 100%)
                  `,
                }}
              />

              {/* Real Full-Page Desktop Capture with Smooth Scroll Animation */}
              <div className="nova-scroll-desktop w-full will-change-transform">
                <Image
                  src="/images/pages/work/nova-market-desktop-full.webp"
                  alt="NOVA Market Live Website Desktop View"
                  width={1440}
                  height={5217}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Laptop Base & Hinge */}
          <div className="relative mx-auto h-3 sm:h-4 w-full rounded-b-xl border-t border-[#3a404d] bg-gradient-to-b from-[#262A33] via-[#1A1D24] to-[#12141A] shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
            {/* Display opener notch in center */}
            <div className="absolute top-0 left-1/2 h-1.5 w-16 sm:w-24 -translate-x-1/2 rounded-b-md bg-[#0F1116] border-b border-white/10" />
          </div>
          {/* Laptop Bottom Lip / Shadow Foot */}
          <div className="mx-auto h-1.5 w-[96%] rounded-b-2xl bg-black/60 blur-[1px]" />
        </div>

        {/* ── SMARTPHONE MOCKUP (Overlapping Laptop on the Right) ── */}
        <div className="absolute -bottom-2 sm:bottom-0 right-2 sm:right-6 lg:right-12 z-30 w-[30%] sm:w-[24%] lg:w-[21%] max-w-[240px] min-w-[130px] transition-transform duration-500 ease-out hover:-translate-y-1">
          {/* Phone Outer Body Frame (Titanium / Graphite Finish) */}
          <div className="relative rounded-[28px] sm:rounded-[36px] border-[3px] sm:border-[4px] border-[#383D48] bg-[#0E1015] p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(139,92,246,0.18)]">
            {/* Dynamic Island / Speaker Pill */}
            <div className="absolute top-3 sm:top-3.5 left-1/2 z-40 h-3 sm:h-4 w-14 sm:w-20 -translate-x-1/2 rounded-full bg-black flex items-center justify-end pr-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b233d] border border-white/20" />
            </div>

            {/* Phone Screen Viewport */}
            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[22px] sm:rounded-[30px] bg-[#07090D] shadow-inner select-none">
              {/* Phone Glass Glare Reflection */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                  background:
                    "linear-gradient(125deg, rgba(255, 255, 255, 0.08) 0%, transparent 40%, rgba(255, 255, 255, 0.02) 100%)",
                }}
              />

              {/* Real Full-Page Mobile Capture with Smooth Scroll Animation */}
              <div className="nova-scroll-mobile w-full will-change-transform">
                <Image
                  src="/images/pages/work/nova-market-mobile-full.webp"
                  alt="NOVA Market Live Website Mobile View"
                  width={450}
                  height={14293}
                  priority
                  className="w-full h-auto block"
                />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-30 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Caption / Reduced Motion Hint ── */}
      <div className="relative z-10 mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3 text-[11px] font-mono text-white/40">
        <span>Hover devices to pause scroll inspect</span>
        <span>Independent natural scroll timing</span>
      </div>
    </div>
  );
}

