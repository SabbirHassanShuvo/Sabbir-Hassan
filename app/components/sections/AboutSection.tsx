"use client";

import { useState } from "react";

// ── Service data ───────────────────────────────────────────────────────────────
interface ServiceItem {
  iconPath: string;
  title: string;
  desc: string;
  color: string;
  viewBox?: string;
  isPolyline?: boolean;
}

const serviceData: ServiceItem[] = [
  {
    iconPath: "M16 18 L22 12 L16 6 M8 6 L2 12 L8 18",
    title: "Backend Development",
    desc: "Building robust, secure APIs and server-side systems using Laravel & PHP with clean MVC architecture.",
    color: "#a78bfa",
  },
  {
    iconPath:
      "M3 5 v14 c0 1.66 4 3 9 3 s9-1.34 9-3 V5 M3 12 c0 1.66 4 3 9 3 s9-1.34 9-3",
    title: "Database Architecture",
    desc: "Designing optimized MySQL & PostgreSQL schemas, indexing strategies, and Redis caching layers.",
    color: "#4a90d9",
  },
  {
    iconPath:
      "M2 12 h20 M12 2 a15.3 15.3 0 0 1 4 10 a15.3 15.3 0 0 1-4 10 a15.3 15.3 0 0 1-4-10 a15.3 15.3 0 0 1 4-10 z",
    title: "RESTful API Design",
    desc: "Crafting well-documented, versioned APIs with JWT/Sanctum auth, rate limiting, and Postman collections.",
    color: "#34d399",
    viewBox: "0 0 24 24",
  },
  {
    iconPath:
      "M8 21 h8 M12 17 v4 M2 3 h20 a2 2 0 0 1 2 2 v11 a2 2 0 0 1-2 2 H2 a2 2 0 0 1-2-2 V5 a2 2 0 0 1 2-2 z",
    title: "Full Stack Integration",
    desc: "Connecting React/Next.js frontends with Laravel backends — seamless data flow, state management & deployment.",
    color: "#f59e0b",
  },
  {
    iconPath: "M12 22 s8-4 8-10 V5 l-8-3 -8 3 v7 c0 6 8 10 8 10 z",
    title: "Auth & Security",
    desc: "Implementing OAuth, JWT, Sanctum-based auth flows, role-based access control, and secure data handling.",
    color: "#f472b6",
  },
  {
    iconPath: "M22 12 l-4 0 l-3 9 l-6-18 l-3 9 l-4 0",
    title: "Performance & DevOps",
    desc: "VPS deployment, Nginx config, Docker containerization, queue workers, and performance optimization.",
    color: "#fb923c",
  },
];

// ── Skill bars data ─────────────────────────────────────────────────────────────
const skillsData = [
  { name: "Laravel / PHP", pct: 90, color: "#a78bfa" },
  { name: "MySQL & Database Design", pct: 85, color: "#4a90d9" },
  { name: "RESTful API Architecture", pct: 88, color: "#34d399" },
  { name: "React / Next.js", pct: 75, color: "#f59e0b" },
  { name: "Redis & Caching", pct: 72, color: "#f472b6" },
  { name: "Docker & Linux DevOps", pct: 68, color: "#fb923c" },
];

// ── ServiceIcon SVG renderer ───────────────────────────────────────────────────
function ServiceIcon({ color, iconPath }: { color: string; iconPath: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d={iconPath} />
    </svg>
  );
}

// ── Skill Bar ──────────────────────────────────────────────────────────────────
function SkillBar({
  name,
  pct,
  color,
  index,
}: {
  name: string;
  pct: number;
  color: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mb-5 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white/70 font-light tracking-wide">
          {name}
        </span>
        <span
          className="text-xs font-mono transition-colors duration-300"
          style={{ color: hovered ? color : "rgba(255,255,255,0.4)" }}>
          {pct}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}bb, ${color})`,
            boxShadow: hovered ? `0 0 12px ${color}66` : "none",
            transitionDelay: `${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ── Service Card ───────────────────────────────────────────────────────────────
function ServiceCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative p-6 rounded-2xl border transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered ? `${service.color}44` : "rgba(255,255,255,0.06)",
        background: hovered ? `${service.color}0a` : "rgba(255,255,255,0.015)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 40px ${service.color}18` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}88, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Icon box */}
      <div
        className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
        style={{
          borderColor: hovered
            ? `${service.color}44`
            : "rgba(255,255,255,0.08)",
          background: hovered ? `${service.color}14` : "rgba(255,255,255,0.03)",
        }}>
        <ServiceIcon color={service.color} iconPath={service.iconPath} />
      </div>

      <h3
        className="text-base font-medium mb-2 transition-colors duration-300"
        style={{ color: hovered ? service.color : "#e5e5e5" }}>
        {service.title}
      </h3>
      <p className="text-sm text-white/45 leading-relaxed">{service.desc}</p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function AboutSection({ id = "about" }: { id?: string }) {
  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ── Row 1: Bio + Skill Bars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bio card */}
          <div className="bg-[#070c18]/85 backdrop-blur-xl rounded-2xl p-8 md:p-10 relative overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/20">
            {/* Ambient glow */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
              }}
            />
            <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa] mb-6 relative">
              05 — About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-white leading-tight mb-6 relative">
              Crafting code that
              <em className="block mt-1"> actually scales.</em>
            </h2>
            <p className="text-white/55 leading-relaxed mb-4 text-sm relative">
              I&apos;m{" "}
              <span className="text-white font-medium">Sabbir Hassan</span> — a
              Laravel Developer based in Dhaka, Bangladesh with hands-on
              experience shipping production-grade web applications, RESTful
              APIs, and multi-vendor platforms.
            </p>
            <p className="text-white/55 leading-relaxed text-sm mb-8 relative">
              I started my journey with a Diploma in CSE from{" "}
              <span className="text-white/80">BGIFT Institute</span>, interned
              at KaizenITBD, and now build full-scale products at Softvence
              Agency — focused on clean architecture, secure authentication, and
              performance-first backends.
            </p>

            {/* Availability badge */}
            <div className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#34d399]/25 bg-[#34d399]/[0.08]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]" />
              </span>
              <span className="text-xs text-[#34d399] uppercase tracking-widest">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Skill bars card */}
          <div className="bg-[#070c18]/85 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-cyan-950/20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa] mb-6">
              Proficiency
            </p>
            <h2 className="text-3xl font-light font-serif text-white mb-8">
              Skills &amp; <em>Expertise</em>
            </h2>
            {skillsData.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* ── Row 2: Services grid ── */}
        <div className="bg-[#070c18]/85 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-cyan-950/20">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa] mb-4">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-white">
              Services &amp; <em>Capabilities</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
