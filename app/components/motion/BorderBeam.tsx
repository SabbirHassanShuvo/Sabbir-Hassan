"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  glowIntensity?: string;
}

export function BorderBeam({
  className = "",
  duration = 5,
  colorFrom = "#00d4ff",
  colorTo = "#a78bfa",
  glowIntensity = "0.9",
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden z-20 ${className}`}
    >
      <div
        className="absolute inset-[-250%]"
        style={{
          animation: `conicSpin ${duration}s linear infinite`,
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, ${colorFrom} 330deg, ${colorTo} 360deg)`,
          opacity: Number(glowIntensity),
          filter: "blur(1.5px)",
        }}
      />
      {/* Inner mask to keep border only 1.5px */}
      <div className="absolute inset-[1.5px] rounded-[inherit] bg-transparent" />
    </div>
  );
}
