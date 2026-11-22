"use client";

import React from "react";

const ITEMS = [
  "FULL STACK LARAVEL",
  "MULTI-TENANT SAAS ARCHITECTURE",
  "HIGH-CONCURRENCY MYSQL",
  "BIOMETRIC HARDWARE SYNC",
  "REAL-TIME WEBSOCKETS",
  "DOCKERIZED CLOUD DEPLOYMENTS",
  "ADVANCED RESTful APIs",
  "AUTOMATED TAX & PAYROLL ENGINES",
];

export function VelocityMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.06] bg-[#070c18]/40 backdrop-blur-md select-none pointer-events-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050a14] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050a14] to-transparent z-10" />

      <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-mono font-medium text-white/40 hover:text-white transition-colors">
              {item}
            </span>
            <span className="ml-6 text-cyan-400/60 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
