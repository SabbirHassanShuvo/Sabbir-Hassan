"use client";
import { useRef } from "react";
import { experienceData } from "@/app/data/experience";
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
  const isPresent = exp.endDate.toLowerCase().includes("present");
  const accentColor = index === 0 ? "#00f2fe" : "#a78bfa";

  return (
    <div className="relative pl-8 md:pl-14 pb-14 last:pb-2 group">
      {/* Milestone Connected Node */}
      <div className="absolute -left-[16px] md:-left-[15px] top-3 z-20 flex items-center justify-center">
        {isPresent ? (
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-cyan-400 opacity-30"></span>
            <div className="h-8 w-8 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.6)]">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            </div>
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-[#030712] border-2 border-purple-400/60 flex items-center justify-center shadow-[0_0_12px_rgba(167,139,250,0.3)] group-hover:border-purple-400 group-hover:scale-110 transition-all">
            <span className="h-2 w-2 rounded-full bg-purple-400"></span>
          </div>
        )}
      </div>

      <SpotlightCard
        spotlightColor={index === 0 ? "rgba(0, 242, 254, 0.12)" : "rgba(167, 139, 250, 0.12)"}
        className="p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300"
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
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded-md"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}12`,
                    border: `1px solid ${accentColor}30`,
                  }}>
                  <Calendar size={12} />
                  {exp.startDate} — {exp.endDate}
                </span>

                {isPresent && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Current Role
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-normal text-white font-serif">{exp.company}</h3>
              <p className="text-sm font-medium mt-0.5" style={{ color: accentColor }}>
                {exp.jobTitle}
              </p>

              {exp.location && (
                <p className="text-xs text-white/45 flex items-center gap-1.5 mt-2 font-mono">
                  <MapPin size={12} className="text-cyan-400" />
                  {exp.location}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {exp.type && (
                <span
                  className="inline-block px-3 py-1 text-xs rounded-full font-mono"
                  style={{
                    background: "rgba(0,242,254,0.06)",
                    border: "1px solid rgba(0,242,254,0.2)",
                    color: "#00f2fe",
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.03] text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all font-mono">
                    <span>Company</span>
                    <ExternalLink size={11} />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>

          {/* Right Column: Narrative, Responsibilities, Tech */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-white/65 font-light">
              {exp.description}
            </p>

            {/* Key Contributions */}
            <div className="space-y-2.5">
              <h4 className="uppercase text-[11px] font-mono tracking-widest text-white/40 flex items-center gap-2">
                <Briefcase size={12} className="text-cyan-400" />
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-xs text-white/65 leading-relaxed">
                    <span className="text-cyan-400 font-bold shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-2 border-t border-white/[0.07]">
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.08] text-white/65 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors">
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
  return (
    <section id={id} className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-[140px]" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-3">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-300">
              01 — Career Track
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-white leading-tight">
            Engineering systems{" "}
            <span className="block mt-1">
              enterprises <em className="gradient-text">scale with.</em>
            </span>
          </h2>
        </div>

        {/* Timeline Track */}
        <div className="relative ml-2 md:ml-4">
          {/* Subtle Vertical Track Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400/80 via-purple-500/50 to-transparent" />

          {/* Experience list */}
          <div className="space-y-3">
            {experienceData.map((exp, index) => (
              <ExpCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}