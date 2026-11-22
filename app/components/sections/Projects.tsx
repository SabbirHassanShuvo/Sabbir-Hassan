"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { SpotlightCard } from "@/app/components/motion/SpotlightCard";
import { Magnetic } from "@/app/components/motion/Magnetic";

type Project = (typeof projectsData)[0];

interface ProjectsProps {
  id?: string;
}

const INITIAL_SHOW = 3;

export function Projects({ id = "projects" }: ProjectsProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const router = useRouter();

  const openProject = (project: Project) => {
    router.push(`/projects/${project.id}`);
  };

  const filteredProjects = projectsData.filter((project) =>
    filter === "all" ? true : project.category.includes(filter)
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_SHOW);
  const hasMore = filteredProjects.length > INITIAL_SHOW;

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["all", "web", "app"].map((cat) => (
            <Magnetic key={cat} strength={0.25}>
              <button
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 border ${
                  filter === cat
                    ? "bg-[#a78bfa] text-[#0f0f0f] border-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,0.3)] font-semibold"
                    : "bg-transparent text-white/50 border-white/10 hover:border-[#a78bfa]/50 hover:text-white"
                }`}>
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            const isCyanAccent = idx % 2 === 0;
            const spotlight = isCyanAccent
              ? "rgba(0, 212, 255, 0.16)"
              : "rgba(167, 139, 250, 0.16)";

            return (
              <SpotlightCard
                key={project.id}
                onClick={() => openProject(project)}
                spotlightColor={spotlight}
                className="cursor-pointer group flex flex-col h-full hover:border-[#a78bfa]/40 hover:shadow-[0_16px_48px_rgba(167,139,250,0.14)]"
              >
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative flex flex-col h-full"
                >
                  {/* Right accent bar */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-0.5 rounded-full z-10"
                    style={{
                      backgroundColor: isCyanAccent ? "#00d4ff" : "#a78bfa",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "scaleY(1)" : "scaleY(0)",
                      transformOrigin: "top",
                      transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />

                  {/* Image */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden shrink-0">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      suppressHydrationWarning
                      style={{
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/30 to-transparent" />

                    {/* Magnetic Arrow */}
                    <div className="absolute top-4 right-4 z-20">
                      <Magnetic strength={0.4}>
                        <div
                          className="text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg"
                          style={{
                            backgroundColor: isHovered
                              ? isCyanAccent
                                ? "#00d4ff"
                                : "#a78bfa"
                              : "rgba(0,0,0,0.5)",
                            color: isHovered ? "#000" : "rgba(255,255,255,0.85)",
                            border: isHovered
                              ? `1px solid ${isCyanAccent ? "#00d4ff" : "#a78bfa"}`
                              : "1px solid rgba(255,255,255,0.15)",
                          }}>
                          <ArrowUpRight size={16} />
                        </div>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    {/* Title */}
                    <h3
                      className="text-xl font-serif leading-snug transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? isCyanAccent
                            ? "#00d4ff"
                            : "#a78bfa"
                          : "#ffffff",
                      }}>
                      {project.title}
                    </h3>

                    {/* Short badge */}
                    <span
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md w-fit"
                      style={{
                        color: isCyanAccent ? "#00d4ff" : "#a78bfa",
                        backgroundColor: isCyanAccent
                          ? "rgba(0,212,255,0.08)"
                          : "rgba(167,139,250,0.08)",
                        border: `1px solid ${
                          isCyanAccent
                            ? "rgba(0,212,255,0.18)"
                            : "rgba(167,139,250,0.18)"
                        }`,
                      }}>
                      {project.shortDescription}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-3 flex-1 mt-1 font-light">
                      {project.caseStudy.overview}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-4 border-t border-white/5">
                      {project.caseStudy.technologies
                        .slice(0, 4)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-1 rounded transition-all duration-300"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.07)",
                              color: "rgba(255,255,255,0.6)",
                            }}>
                            {tech}
                          </span>
                        ))}
                      {project.caseStudy.technologies.length > 4 && (
                        <span
                          className="text-[10px] px-2 py-1 rounded font-mono"
                          style={{
                            color: isCyanAccent ? "#00d4ff" : "#a78bfa",
                            backgroundColor: isCyanAccent
                              ? "rgba(0,212,255,0.06)"
                              : "rgba(167,139,250,0.06)",
                          }}>
                          +{project.caseStudy.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* View All / Show Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <Magnetic strength={0.35}>
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
                    View All Projects ({filteredProjects.length})
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </Magnetic>
          </div>
        )}
      </div>
    </section>
  );
}
