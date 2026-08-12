"use client";
import { useRef } from "react";
import { experienceData } from "@/app/data/experience";
import { useIntersection } from "@/app/hooks/useIntersection";

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
  const visible = useIntersection(ref, { threshold: 0.12 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t py-10 first:border-t-0 first:pt-0"
      style={{
        borderColor: "rgba(0,212,255,0.08)",
        transition: `all 0.5s ease ${index * 0.1}s`,
      }}>
      {/* Left — Date & Company */}
      <div className="md:col-span-4">
        <div className="md:sticky top-8">
          <p
            className="text-xs uppercase tracking-widest mb-1"
            style={{ color: "#00d4ff" }}>
            {exp.startDate} — {exp.endDate}
          </p>
          <p className="text-2xl font-light text-white">{exp.company}</p>
          <p style={{ color: "#a78bfa" }}>{exp.jobTitle}</p>
          {exp.type && (
            <span
              className="inline-block mt-3 px-3 py-1 text-xs rounded-full"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#00d4ff",
              }}>
              {exp.type}
            </span>
          )}
        </div>
      </div>

      {/* Right — Details */}
      <div className="md:col-span-8">
        <p
          className="leading-relaxed mb-6"
          style={{ color: "rgba(255,255,255,0.6)" }}>
          {exp.description}
        </p>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3
            className="uppercase text-xs tracking-widest mb-3"
            style={{ color: "rgba(255,255,255,0.3)" }}>
            Key Responsibilities
          </h3>
          <ul className="space-y-2">
            {exp.responsibilities.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.55)" }}>
                <span style={{ color: "#00d4ff", marginTop: 2 }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3
            className="uppercase text-xs tracking-widest mb-3"
            style={{ color: "rgba(255,255,255,0.3)" }}>
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience({ id = "experience" }: ExperienceProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerVisible = useIntersection(headerRef, { threshold: 0.2 });

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto p-8 md:p-12 rounded-2xl relative bg-[#070c18]/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-950/20">
        {/* Giant watermark number */}
        <div
          className="absolute left-8 top-16 text-9xl md:text-[200px] font-light pointer-events-none select-none"
          style={{ color: "rgba(0,212,255,0.03)" }}>
          01
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="section-label">01 — Experience</span>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-white leading-tight">
            I build things{" "}
            <span className="block mt-1">
              people <em className="gradient-text">feel.</em>
            </span>
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experienceData.map((exp, index) => (
            <ExpCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
