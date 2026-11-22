"use client";

import { useState } from "react";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  grade?: string;
  subject: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Diploma in Computer Science & Engineering (CSE)",
    school: "BGIFT Institute of Science & Technology",
    subject: "Web Development & Software Engineering",
    year: "Completed",
    description:
      "Focused on programming fundamentals, modern web application architecture, database management systems, and core software engineering practices.",
  },
];

export function Education({ id = "education" }: { id?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-[#070c18]/20 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative shadow-2xl shadow-cyan-950/20">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">06 — Education</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-white mb-1">
            Academic
          </h2>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-white">
            <em className="gradient-text">Journey</em>
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {educationData.map((edu, idx) => {
            const isHovered = hovered === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden rounded-xl mt-4 border transition-all duration-500 cursor-default"
                style={{
                  borderColor: isHovered
                    ? "rgba(0,212,255,0.35)"
                    : "rgba(255,255,255,0.06)",
                  backgroundColor: isHovered
                    ? "rgba(0,212,255,0.04)"
                    : "rgba(255,255,255,0.015)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 8px 32px rgba(0,212,255,0.08)"
                    : "none",
                }}>
                {/* Animated left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500 rounded-full"
                  style={{
                    backgroundColor: "#00d4ff",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                  }}
                />

                {/* Shimmer effect on hover */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(0,212,255,0.04) 50%, transparent 60%)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left — main info */}
                    <div className="flex-1 space-y-2">
                      {/* Degree */}
                      <h3
                        className="text-lg md:text-xl font-serif text-white transition-colors duration-300"
                        style={{ color: isHovered ? "#fff" : "#e5e5e5" }}>
                        {edu.degree}
                      </h3>

                      {/* School */}
                      <p
                        className="text-sm transition-colors duration-300"
                        style={{
                          color: isHovered ? "#00d4ff" : "#a78bfa",
                        }}>
                        {edu.school}
                      </p>

                      {/* Subject pill */}
                      <div className="flex items-center gap-2 pt-1">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-300"
                          style={{
                            backgroundColor: isHovered
                              ? "rgba(0,212,255,0.12)"
                              : "rgba(255,255,255,0.05)",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderColor: isHovered
                              ? "rgba(0,212,255,0.35)"
                              : "rgba(255,255,255,0.08)",
                            color: isHovered ? "#00d4ff" : "#888",
                          }}>
                          {/* Book icon */}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          </svg>
                          {edu.subject}
                        </span>
                      </div>

                      {edu.description && (
                        <p className=" text-white/60 pt-2 leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      )}
                    </div>

                    {/* Right — year + grade */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 md:gap-2 md:text-right">
                      {/* Year */}
                      <span
                        className="text-xs font-mono tracking-widest transition-colors duration-300"
                        style={{ color: isHovered ? "#aaa" : "#888" }}>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
