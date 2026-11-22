"use client";
import { useRef } from "react";
import { experienceData } from "@/app/data/experience";
import { useIntersection } from "@/app/hooks/useIntersection";
import { SpotlightCard } from "@/app/components/motion/SpotlightCard";
import { Magnetic } from "@/app/components/motion/Magnetic";
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";

interface ExperienceProps {
  id?: string;
}

function ExpCard({
  exp,
  index,
}: {
  exp: (typeof experienceData)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isPresent = exp.endDate.toLowerCase().includes("present");
  const accentColor = index === 0 ? "#00d4ff" : "#a78bfa";

  return (
    <div ref={ref} className="relative pl-8 md:pl-12 pb-12 last:pb-2 group">
      {/* Circuit Milestone Node */}
      <div className="absolute -left-[17px] top-1.5 z-20 flex items-center justify-center">
        {isPresent ? (
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-40"></span>
            <div className="h-9 w-9 rounded-full bg-[#070c18] border-2 border-[#00d4ff] flex items-center justify-center shadow-[0_0_18px_rgba(0,212,255,0.8)]">
              <span className="h-3 w-3 rounded-full bg-[#00d4ff]"></span>
            </div>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-[#070c18] border-2 border-[#a78bfa] flex items-center justify-center shadow-[0_0_12px_rgba(167,139,250,0.5)] group-hover:scale-110 transition-transform">
            <span className="h-2.5 w-2.5 rounded-full bg-[#a78bfa]"></span>
          </div>
        )}
      </div>

      <SpotlightCard
        spotlightColor={index === 0 ? "rgba(0, 212, 255, 0.18)" : "rgba(167, 139, 250, 0.18)"}
        showBorderBeam={isPresent}
        beamDuration={6}
        beamColorFrom="#00d4ff"
        beamColorTo="#a78bfa"
        className="p-6 md:p-8 hover:border-cyan-400/40 transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Company & Role */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {exp.logo && (
              <div className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-white/20 shadow-md h-14 w-fit max-w-[200px]">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="max-h-9 max-w-full w-auto object-contain"
                />
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded-md"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}15`,
                    border: `1px solid ${accentColor}30`,
                  }}>
                  <Calendar size={12} />
                  {exp.startDate} — {exp.endDate}
                </span>

                {isPresent && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Active Role
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-light text-white font-serif">{exp.company}</h3>
              <p className="text-base font-medium mt-0.5" style={{ color: accentColor }}>
                {exp.jobTitle}
              </p>

              {exp.location && (
                <p className="text-xs text-white/50 flex items-center gap-1.5 mt-2 font-mono">
                  <MapPin size={12} className="text-cyan-400" />
                  {exp.location}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {exp.type && (
                <span
                  className="inline-block px-3 py-1 text-xs rounded-full font-mono"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#00d4ff",
                  }}>
                  {exp.type}
                </span>
              )}
              {exp.website && (
                <Magnetic strength={0.3}>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all font-mono">
                    <span>Company</span>
                    <ExternalLink size={11} />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>

          {/* Right Column: Narrative, Responsibilities, Tech */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-sm md:text-base leading-relaxed text-white/70 font-light">
              {exp.description}
            </p>

            {/* Key Contributions */}
            <div className="space-y-3">
              <h4 className="uppercase text-xs font-mono tracking-widest text-white/40 flex items-center gap-2">
                <Briefcase size={12} className="text-cyan-400" />
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-2.5">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-xs md:text-sm text-white/65 leading-relaxed">
                    <span className="text-cyan-400 font-bold shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-3 border-t border-white/10">
              <h4 className="uppercase text-[11px] font-mono tracking-widest text-white/35 mb-2.5">
                Core Stack & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-white/70 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export function Experience({ id = "experience" }: ExperienceProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerVisible = useIntersection(headerRef, { threshold: 0.2 });

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-3xl relative bg-[#070c18]/30 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-cyan-950/20 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />

        {/* Watermark number */}
        <div
          className="absolute right-8 top-12 text-9xl md:text-[220px] font-light pointer-events-none select-none font-serif opacity-3"
          style={{ color: "rgba(0,212,255,0.03)" }}>
          01
        </div>

        {/* Header */}
        <div className="mb-14 relative z-10" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-3">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-300">
              01 — Career Track
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-white leading-tight">
            I engineer systems{" "}
            <span className="block mt-1">
              enterprises <em className="gradient-text">rely on.</em>
            </span>
          </h2>
        </div>

        {/* Laser Circuit Timeline Container */}
        <div className="relative ml-2 md:ml-4">
          {/* Vertical Laser Circuit Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#00d4ff] via-[#a78bfa] to-[#10b981] opacity-75 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />

          {/* Experience list */}
          <div className="space-y-4">
            {experienceData.map((exp, index) => (
              <ExpCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}