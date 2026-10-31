import React from "react";

export function TLMark({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 85"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* T segment in Warm Paper White */}
      <path
        d="M 6 4 L 70 4 L 54 24 L 46 24 L 46 80 L 26 80 L 26 24 L 16 24 Z"
        fill="#FFFFFF"
      />
      {/* L segment interlocking in Electric Orange */}
      <path
        d="M 46 12 L 88 12 L 72 28 L 74 28 L 74 60 L 96 60 L 84 80 L 46 80 Z"
        fill="#FF6B00"
      />
    </svg>
  );
}

export function TLLogo({
  className = "h-7",
  showSubtext = false,
}: {
  className?: string;
  showSubtext?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Interlocking TL Monogram */}
      <TLMark className="h-7 w-auto shrink-0" />

      {/* Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none font-black text-lg sm:text-xl font-heading">
          <span className="text-white">TUSHAR</span>
          <span className="text-[#FF6B00]">LABS</span>
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

