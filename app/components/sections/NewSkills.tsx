"use client";

import { useState } from "react";
import Image from "next/image";

// ── Types ────────────────────────────────────────────────────────────────
type Category =
  | "all"
  | "frontend"
  | "backend"
  | "devops"
  | "visualization"
  | "tools";

interface Skill {
  name: string;
  cat: Exclude<Category, "all">;
  svg: string;
}

interface Filter {
  key: Category;
  label: string;
  count: number;
}

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const ALL_SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", cat: "frontend", svg: `${D}/html5/html5-original.svg` },
  { name: "CSS", cat: "frontend", svg: `${D}/css3/css3-original.svg` },
  {
    name: "Tailwind CSS",
    cat: "frontend",
    svg: `${D}/tailwindcss/tailwindcss-original.svg`,
  },
  {
    name: "Bootstrap",
    cat: "frontend",
    svg: `${D}/bootstrap/bootstrap-original.svg`,
  },
  {
    name: "JavaScript",
    cat: "frontend",
    svg: `${D}/javascript/javascript-original.svg`,
  },
  {
    name: "TypeScript",
    cat: "frontend",
    svg: `${D}/typescript/typescript-original.svg`,
  },
  { name: "React", cat: "frontend", svg: `${D}/react/react-original.svg` },
  { name: "Next.js", cat: "frontend", svg: `${D}/nextjs/nextjs-original.svg` },
  { name: "Redux", cat: "frontend", svg: `${D}/redux/redux-original.svg` },

  // Backend
  { name: "Laravel", cat: "backend", svg: `${D}/laravel/laravel-original.svg` },
  { name: "PHP", cat: "backend", svg: `${D}/php/php-original.svg` },
  { name: "MySQL", cat: "backend", svg: `${D}/mysql/mysql-original.svg` },
  {
    name: "PostgreSQL",
    cat: "backend",
    svg: `${D}/postgresql/postgresql-original.svg`,
  },
  { name: "Redis", cat: "backend", svg: `${D}/redis/redis-original.svg` },
  { name: "Python", cat: "backend", svg: `${D}/python/python-original.svg` },

  // DevOps & Cloud
  {
    name: "Hostinger VPS",
    cat: "devops",
    svg: "https://cdn.simpleicons.org/hostinger/673DE6",
  },
  { name: "VPS Server", cat: "devops", svg: `${D}/linux/linux-original.svg` },
  {
    name: "DigitalOcean",
    cat: "devops",
    svg: `${D}/digitalocean/digitalocean-original.svg`,
  },
  {
    name: "cPanel",
    cat: "devops",
    svg: "https://cdn.simpleicons.org/cpanel/FF6C2C",
  },
  { name: "Nginx", cat: "devops", svg: `${D}/nginx/nginx-original.svg` },
  {
    name: "Cloudflare",
    cat: "devops",
    svg: `${D}/cloudflare/cloudflare-original.svg`,
  },
  { name: "Docker", cat: "devops", svg: `${D}/docker/docker-original.svg` },
  { name: "Linux", cat: "devops", svg: `${D}/linux/linux-original.svg` },

  // Data & Visualization
  { name: "NumPy", cat: "visualization", svg: `${D}/numpy/numpy-original.svg` },
  { name: "Pandas", cat: "visualization", svg: `${D}/pandas/pandas-original.svg` },
  {
    name: "Matplotlib",
    cat: "visualization",
    svg: `${D}/matplotlib/matplotlib-original.svg`,
  },
  { name: "Seaborn", cat: "visualization", svg: "/icons/seaborn.svg" },

  // Tools & Servers
  { name: "Antigravity", cat: "tools", svg: "/icons/antigravity.svg" },
  { name: "Git", cat: "tools", svg: `${D}/git/git-original.svg` },
  { name: "GitHub", cat: "tools", svg: `${D}/github/github-original.svg` },
  { name: "Postman", cat: "tools", svg: `${D}/postman/postman-original.svg` },
  { name: "VS Code", cat: "tools", svg: `${D}/vscode/vscode-original.svg` },
  { name: "Vercel", cat: "tools", svg: `${D}/vercel/vercel-original.svg` },
];

const MARQUEE_ALL = [...ALL_SKILLS, ...ALL_SKILLS];

// ── Skill Card ────────────────────────────────────────────────────────────
function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center justify-center text-center gap-3 rounded-[16px] border border-white/[0.07] bg-[#0a1020]/70 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#00d4ff]/30 hover:bg-[#0d1830]/90 hover:shadow-[0_8px_32px_rgba(0,212,255,0.12)] min-h-[120px]"
      style={{
        animation: "fadeUp 0.4s ease forwards",
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* top cyan glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.1), transparent 70%)",
        }}
      />

      {/* icon — large, no box */}
      <div
        className="relative flex items-center justify-center mx-auto"
        style={{
          width: 52,
          height: 52,
          transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease",
          transform: hovered ? "translateY(-4px) scale(1.18)" : "translateY(0) scale(1)",
          filter: hovered
            ? "drop-shadow(0 0 10px rgba(0,212,255,0.7)) drop-shadow(0 0 20px rgba(0,212,255,0.35))"
            : "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
        }}>
        {skill.svg && !imgError ? (
          <Image
            src={skill.svg}
            alt={skill.name}
            width={40}
            height={40}
            className="object-contain"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <span className="font-mono text-base font-bold text-[#00d4ff]">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <span
        className="text-[12.5px] font-medium transition-colors duration-200 group-hover:text-white"
        style={{ color: hovered ? "#fff" : "rgba(255,255,255,0.65)" }}>
        {skill.name}
      </span>
    </div>
  );
}


// ── Marquee Pill ──────────────────────────────────────────────────────────
function MarqueePill({ skill }: { skill: Skill }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/5.5 bg-white/2 py-1.75 pl-2.5 pr-4">
      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-md bg-white/4">
        {skill.svg ? (
          <Image
            src={skill.svg}
            alt={skill.name}
            width={14}
            height={14}
            className="h-3.5 w-3.5 object-contain opacity-65"
            unoptimized
          />
        ) : (
          <span className="font-mono text-[9px] font-medium text-indigo-400">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="font-mono text-[11px] tracking-[0.3px] text-[#3a3a50]">
        {skill.name}
      </span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function NewSkills({ id = "skills" }: { id?: string }) {
  const [active, setActive] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills =
    active === "all" ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.cat === active);

  // 4 rows × 6 cols (xl) = 24 items before "See More"
  const INITIAL_ROWS = 4;
  const COLS_XL = 6;
  const INITIAL_LIMIT = INITIAL_ROWS * COLS_XL;

  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_LIMIT);

  const hasMore = filteredSkills.length > INITIAL_LIMIT;

  const FILTERS: Filter[] = [
    { key: "all", label: "All", count: ALL_SKILLS.length },
    {
      key: "frontend",
      label: "Frontend",
      count: ALL_SKILLS.filter((s) => s.cat === "frontend").length,
    },
    {
      key: "backend",
      label: "Backend",
      count: ALL_SKILLS.filter((s) => s.cat === "backend").length,
    },
    {
      key: "devops",
      label: "DevOps & Cloud",
      count: ALL_SKILLS.filter((s) => s.cat === "devops").length,
    },
    {
      key: "visualization",
      label: "Data & Visualization",
      count: ALL_SKILLS.filter((s) => s.cat === "visualization").length,
    },
    {
      key: "tools",
      label: "Tools & Others",
      count: ALL_SKILLS.filter((s) => s.cat === "tools").length,
    },
  ];

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="relative mx-auto max-w-7xl p-8 md:p-12 rounded-2xl bg-[#070c18]/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-950/20">
        <div className="relative z-10">
          {/* ── Header ── */}
          <div className="mb-12">
            <span className="section-label">02 — Skills</span>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-white leading-tight">
              What I{" "}
              <span className="block mt-1">
                actually <em className="gradient-text">use.</em>
              </span>
            </h2>
          </div>

          {/* ── Mobile filter pills ── */}
          <div className="mb-7 flex flex-wrap gap-2 md:hidden">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => { setActive(f.key); setShowAll(false); }}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-all ${
                  active === f.key
                    ? "border-[rgba(0,212,255,0.4)] bg-[rgba(0,212,255,0.12)] text-[#00d4ff]"
                    : "border-white/8 text-[#8888aa] hover:border-white/20 hover:text-white"
                }`}>
                {f.label}
              </button>
            ))}
          </div>

          {/* ── Two-column layout ── */}
          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="sticky top-8 hidden w-42.5 shrink-0 md:flex md:flex-col">
              <p className="mb-3.5 font-mono text-[9px] uppercase tracking-[3px] text-[#2a2a3a]">
                Filter by
              </p>

              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => { setActive(f.key); setShowAll(false); }}
                    className={`mb-1 flex w-full items-center justify-between rounded-[10px] border px-3.5 py-2.5 text-left font-mono text-[12px] transition-all duration-200 ${
                      isActive
                        ? "border-[rgba(0,212,255,0.35)] bg-[rgba(0,212,255,0.08)] text-[#00d4ff]"
                        : "border-transparent text-white/50 hover:border-white/[0.07] hover:bg-white/2 hover:text-white"
                    }`}>
                    <span>{f.label}</span>
                    <span
                      className={`rounded-[5px] px-1.5 py-0.5 font-mono text-[10px] ${
                        isActive
                          ? "bg-[rgba(0,212,255,0.2)] text-[#00d4ff]"
                          : "bg-white/4 text-white/30"
                      }`}>
                      {f.count}
                    </span>
                  </button>
                );
              })}

              <div className="my-4.5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <p className="font-mono text-[10px] leading-relaxed text-white/30">
                <span className="text-[#00d4ff]">{filteredSkills.length}</span>{" "}
                skill{filteredSkills.length !== 1 ? "s" : ""} shown
              </p>
            </aside>

            {/* Skills Grid */}
            <div className="min-w-0 flex-1">
              <div
                key={active}
                className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {visibleSkills.map((skill, i) => (
                  <SkillCard
                    key={`${active}-${skill.name}`}
                    skill={skill}
                    delay={i * 30}
                  />
                ))}
              </div>

              {/* ── See More / See Less Button ── */}
              {hasMore && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="group relative flex items-center gap-2.5 rounded-full border border-[rgba(0,212,255,0.35)] bg-[rgba(0,212,255,0.08)] px-7 py-2.5 font-mono text-[12px] uppercase tracking-widest text-[#00d4ff] transition-all duration-300 hover:border-[rgba(0,212,255,0.7)] hover:bg-[rgba(0,212,255,0.18)] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]">

                    <span className="relative z-10 flex items-center gap-2">
                      {showAll ? (
                        <>
                          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          See Less
                        </>
                      ) : (
                        <>
                          See More
                          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                          <span className="ml-1 rounded-full bg-[rgba(0,212,255,0.15)] px-1.5 py-0.5 text-[10px]">
                            +{filteredSkills.length - INITIAL_LIMIT}
                          </span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

