"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

type Project = (typeof projectsData)[0];

interface ProjectsProps {
  id?: string;
}

const INITIAL_SHOW = 3;

export function Projects({ id = "projects" }: ProjectsProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const openProject = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_SHOW);
  const hasMore = projectsData.length > INITIAL_SHOW;

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-[#070c18]/20 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative shadow-2xl shadow-cyan-950/20">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">04 — Selected Work</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light font-serif text-white mb-1">
                Recent
              </h2>
              <h2 className="text-4xl md:text-5xl font-light font-serif text-white">
                <em className="gradient-text">Projects</em>
              </h2>
            </div>
            <div className="text-white/60 text-sm leading-relaxed pt-1">
              <p>2024 — 2026</p>
              <p>Selected work only</p>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col space-y-4">
          {visibleProjects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative overflow-hidden rounded-xl mt-4 border cursor-pointer"
                style={{
                  borderColor: isHovered
                    ? "rgba(167,139,250,0.4)"
                    : "rgba(255,255,255,0.08)",
                  backgroundColor: isHovered
                    ? "rgba(167,139,250,0.12)"
                    : "rgba(12,20,36,0.75)",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 8px 32px rgba(167,139,250,0.08)"
                    : "none",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}>
                {/* Right accent bar */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-0.5 rounded-full"
                  style={{
                    backgroundColor: "#a78bfa",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />

                {/* Shimmer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.04) 50%, transparent 60%)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* ── MOBILE layout (< md) ── */}
                <div className="flex flex-col md:hidden">
                  {/* Image — fixed shorter height */}
                  <div className="relative w-full h-36 overflow-hidden shrink-0">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      suppressHydrationWarning
                      style={{
                        transform: isHovered ? "scale(1.04)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/80 to-transparent" />
                    {/* Index badge over image */}
                    <span className="absolute top-3 left-3 text-[10px] font-mono text-white/60">
                      {String(idx + 1).padStart(3, "0")}
                    </span>
                    {/* Arrow */}
                    <span className="absolute top-3 right-3 text-white/60">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2.5">
                    {/* Title */}
                    <h3
                      className="text-base font-serif leading-snug transition-colors duration-300"
                      style={{ color: isHovered ? "#a78bfa" : "#ffffff" }}>
                      {project.title}
                    </h3>

                    {/* Short badge */}
                    <span
                      className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md w-fit"
                      style={{
                        color: "#a78bfa",
                        backgroundColor: "rgba(167,139,250,0.08)",
                        border: "1px solid rgba(167,139,250,0.15)",
                      }}>
                      {project.shortDescription}
                    </span>

                    {/* Description — 4 lines on mobile */}
                    <p className="text-xs text-white/45 leading-relaxed line-clamp-4">
                      {project.caseStudy.overview}
                    </p>

                    {/* Tech tags — show up to 6 on mobile */}
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {project.caseStudy.technologies
                        .slice(0, 6)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded transition-all duration-300"
                            style={{
                              color: "rgba(255,255,255,0.55)",
                              backgroundColor: "rgba(167,139,250,0.08)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      {project.caseStudy.technologies.length > 6 && (
                        <span className="text-[10px] text-white/60 px-1 py-0.5">
                          +{project.caseStudy.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── TABLET layout (md — lg) ── */}
                <div className="hidden md:flex lg:hidden items-stretch min-h-44">
                  {/* Image — smaller fixed width */}
                  <div className="w-52 min-w-52 shrink-0 p-3 flex items-center justify-center">
                    <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-[#1a1a1a]">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#1e1e1e] border-b border-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <div className="flex-1 mx-1.5 bg-[#2a2a2a] rounded text-[8px] text-white/20 px-1.5 py-0.5 text-center truncate">
                          project-preview.io
                        </div>
                      </div>
                      <div className="relative h-28 w-full overflow-hidden">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          suppressHydrationWarning
                          style={{
                            transform: isHovered ? "scale(1.04)" : "scale(1)",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 py-4 pr-3 flex flex-col justify-center gap-2.5 min-w-0">
                    {/* Index + Title */}
                    <div className="flex items-start gap-2.5">
                      <span
                        className="text-xs font-mono shrink-0 mt-0.5"
                        style={{ color: isHovered ? "#a78bfa" : "#7c6fa0" }}>
                        {String(idx + 1).padStart(3, "0")}
                      </span>
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <h3
                          className="text-lg font-serif leading-snug transition-colors duration-300"
                          style={{ color: isHovered ? "#a78bfa" : "#ffffff" }}>
                          {project.title}
                        </h3>
                        <span
                          className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md w-fit"
                          style={{
                            color: "#a78bfa",
                            backgroundColor: "rgba(167,139,250,0.08)",
                            border: "1px solid rgba(167,139,250,0.12)",
                          }}>
                          {project.shortDescription}
                        </span>
                      </div>
                    </div>

                    {/* Description — 3 lines on tablet */}
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-3 pl-6">
                      {project.caseStudy.overview}
                    </p>

                    {/* Tech tags — show up to 8 on tablet */}
                    <div className="flex flex-wrap gap-1.5 pl-6">
                      {project.caseStudy.technologies
                        .slice(0, 8)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded transition-all duration-300"
                            style={{
                              color: isHovered
                                ? "#c4b5fd"
                                : "rgba(255,255,255,0.5)",
                              backgroundColor: isHovered
                                ? "rgba(167,139,250,0.15)"
                                : "rgba(167,139,250,0.07)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      {project.caseStudy.technologies.length > 8 && (
                        <span className="text-[10px] text-white/60 px-1 py-0.5">
                          +{project.caseStudy.technologies.length - 8}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="px-4 flex items-center shrink-0">
                    <div
                      className="transition-all duration-300"
                      style={{
                        color: isHovered ? "#a78bfa" : "rgba(255,255,255,0.60)",
                        transform: isHovered
                          ? "translate(2px,-2px)"
                          : "translate(0,0)",
                      }}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* ── DESKTOP layout (lg+) ── */}
                <div className="hidden lg:flex items-stretch min-h-40">
                  {/* Browser mockup image */}
                  <div className="w-72 min-w-72 shrink-0 p-4 flex items-center justify-center">
                    <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-[#1a1a1a]">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e1e1e] border-b border-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        <div className="flex-1 mx-2 bg-[#2a2a2a] rounded text-[9px] text-white/20 px-2 py-0.5 text-center truncate">
                          {project?.caseStudy?.liveLink
                            ? new URL(project?.caseStudy?.liveLink).hostname
                            : "project-preview.io"}
                        </div>
                      </div>
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          suppressHydrationWarning
                          style={{
                            transform: isHovered ? "scale(1.04)" : "scale(1)",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 py-5 pr-4 flex flex-col justify-center gap-3 min-w-0">
                    <div className="flex items-start gap-3">
                      <span
                        className="text-xs font-serif shrink-0 mt-0.5 transition-colors duration-300"
                        style={{ color: isHovered ? "#a78bfa" : "#7c6fa0" }}>
                        {String(idx + 1).padStart(3, "0")}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <h3
                          className="text-xl font-serif leading-snug transition-colors duration-300"
                          style={{ color: isHovered ? "#a78bfa" : "#ffffff" }}>
                          {project.title}
                        </h3>
                        <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-md w-fit text-[#a78bfa]/60 bg-[#a78bfa]/7 border border-[#a78bfa]/12">
                          {project.shortDescription}
                        </span>
                      </div>
                    </div>

                    <p className="text-base text-white/60 leading-relaxed line-clamp-4 pl-6">
                      {project.caseStudy.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pl-6 mt-1">
                      {project.caseStudy.technologies
                        .slice(0, 10)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded transition-all duration-300"
                            style={{
                              color: isHovered
                                ? "#c4b5fd"
                                : "rgba(255,255,255,0.5)",
                              backgroundColor: isHovered
                                ? "rgba(167,139,250,0.15)"
                                : "rgba(167,139,250,0.07)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      {project.caseStudy.technologies.length > 10 && (
                        <span className="text-[10px] text-white/60 px-2 py-0.5">
                          +{project.caseStudy.technologies.length - 10}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="px-5 flex flex-col items-end justify-between py-5 shrink-0">
                    <div
                      className="text-lg transition-all duration-300"
                      style={{
                        color: isHovered ? "#a78bfa" : "rgba(255,255,255,0.60)",
                        transform: isHovered
                          ? "translate(2px, -2px)"
                          : "translate(0,0)",
                      }}>
                      <ArrowUpRight />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-sm uppercase tracking-[0.18em] font-medium transition-all duration-500 overflow-hidden"
              style={{
                border: "1px solid rgba(167,139,250,0.35)",
                color: "#a78bfa",
                background: "rgba(167,139,250,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(167,139,250,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(167,139,250,0.6)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px rgba(167,139,250,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(167,139,250,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(167,139,250,0.35)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
              {/* Shimmer sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(167,139,250,0.08) 50%, transparent 70%)",
                }}
              />
              {showAll ? (
                <>
                  <ChevronUp
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Show Less
                </>
              ) : (
                <>
                  View All Projects ({projectsData.length})
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
