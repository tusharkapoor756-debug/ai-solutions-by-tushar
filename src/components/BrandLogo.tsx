import React from "react";
import Image from "next/image";

export function TLMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <Image
        src="/tl-logo-transparent.png"
        alt="Tushar Labs Logo"
        width={120}
        height={120}
        priority
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function TLLogo({
  className = "h-8",
  showSubtext = false,
}: {
  className?: string;
  showSubtext?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TLMark className="w-8 h-8" />
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none font-black text-lg sm:text-xl font-heading">
          <span className="text-white">TUSHAR</span>
          <span className="text-brand-orange">LABS</span>
        </div>
        {showSubtext && (
          <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-prose-dim mt-0.5">
            Web Development &amp; Software Solutions
          </span>
        )}
      </div>
    </div>
  );
}
