"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectsData } from "@/app/data/projects";
import { ArrowUpRight, ChevronDown, ChevronUp, Sparkles, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/app/components/motion/SpotlightCard";
import { Magnetic } from "@/app/components/motion/Magnetic";

type Project = (typeof projectsData)[0];

interface ProjectsProps {
  id?: string;
}

const INITIAL_SHOW = 4;

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
      <div className="max-w-7xl mx-auto bg-[#070c18]/30 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl relative shadow-2xl shadow-cyan-950/20 overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

        {/* Header */}
        <div className="mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-3">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-300">
              04 — Selected Architecture & Code
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl font-light font-serif text-white mb-1">
                Featured
              </h2>
              <h2 className="text-4xl md:text-5xl font-light font-serif text-white">
                <em className="gradient-text">Engineered Works</em>
              </h2>
            </div>
            <div className="text-white/60 text-sm leading-relaxed md:text-right font-light">
              <p className="text-white/90 font-medium font-mono text-xs text-cyan-400">PRODUCTION DEPLOYMENTS</p>
              <p>Scalable Multi-Tenant SaaS, Verification Engines & RESTful Systems</p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 relative z-10">
          {["all", "web", "app"].map((cat) => (
            <Magnetic key={cat} strength={0.25}>
              <button
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 border ${
                  filter === cat
                    ? "bg-[#00d4ff] text-[#070c18] border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.4)] font-semibold"
                    : "bg-white/[0.03] text-white/60 border-white/10 hover:border-cyan-400/50 hover:text-white"
                }`}>
                {cat === "all" ? "All Systems" : cat === "web" ? "Web & SaaS" : "Mobile & Apps"}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {visibleProjects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            // First item in "all" view gets featured Bento 2-column span on large screens
            const isFeaturedHero = idx === 0 && filter === "all";
            const isTopThree = idx < 3;
            const isCyanAccent = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className={isFeaturedHero ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <SpotlightCard
                  onClick={() => openProject(project)}
                  spotlightColor={isCyanAccent ? "rgba(0, 212, 255, 0.22)" : "rgba(167, 139, 250, 0.22)"}
                  showBorderBeam={isTopThree}
                  beamDuration={idx === 0 ? 5 : idx === 1 ? 7 : 6}
                  beamColorFrom={idx === 0 ? "#00d4ff" : idx === 1 ? "#10b981" : "#a78bfa"}
                  beamColorTo={idx === 0 ? "#a78bfa" : idx === 1 ? "#00d4ff" : "#ec4899"}
                  cursorType="project"
                  className="cursor-pointer group flex flex-col h-full hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] transition-all duration-500"
                >
                  <div
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div
                      className={`relative w-full overflow-hidden shrink-0 ${
                        isFeaturedHero ? "h-64 md:h-72" : "h-52 md:h-60"
                      }`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        suppressHydrationWarning
                        style={{
                          transform: isHovered ? "scale(1.06)" : "scale(1)",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/40 to-transparent" />

                      {/* Live Status indicator */}
                      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/80">
                          {idx === 0 ? "Flagship SaaS" : idx === 1 ? "Live Production" : "Cloud SaaS"}
                        </span>
                      </div>

                      {/* Magnetic Arrow button */}
                      <div className="absolute top-4 right-4 z-20">
                        <Magnetic strength={0.4}>
                          <div
                            className="p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl"
                            style={{
                              backgroundColor: isHovered
                                ? isCyanAccent
                                  ? "#00d4ff"
                                  : "#a78bfa"
                                : "rgba(0,0,0,0.6)",
                              color: isHovered ? "#070c18" : "#ffffff",
                              border: isHovered
                                ? `1px solid ${isCyanAccent ? "#00d4ff" : "#a78bfa"}`
                                : "1px solid rgba(255,255,255,0.2)",
                            }}>
                            <ArrowUpRight size={17} />
                          </div>
                        </Magnetic>
                      </div>

                      {/* Category overlay label */}
                      <div className="absolute bottom-3 left-4 z-20">
                        <span
                          className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full"
                          style={{
                            color: isCyanAccent ? "#00d4ff" : "#a78bfa",
                            backgroundColor: "rgba(7, 12, 24, 0.85)",
                            border: `1px solid ${
                              isCyanAccent
                                ? "rgba(0,212,255,0.35)"
                                : "rgba(167,139,250,0.35)"
                            }`,
                          }}>
                          {project.shortDescription}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                      <div>
                        {/* Title */}
                        <h3
                          className={`font-serif leading-snug transition-colors duration-300 ${
                            isFeaturedHero ? "text-2xl md:text-3xl mb-2" : "text-xl mb-1.5"
                          }`}
                          style={{
                            color: isHovered
                              ? isCyanAccent
                                ? "#00d4ff"
                                : "#a78bfa"
                              : "#ffffff",
                          }}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-white/60 leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                          {project.caseStudy.overview}
                        </p>
                      </div>

                      {/* Tech Stack Pills & Direct Links */}
                      <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.caseStudy.technologies
                            .slice(0, isFeaturedHero ? 7 : 4)
                            .map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">
                                {tech}
                              </span>
                            ))}
                          {project.caseStudy.technologies.length > (isFeaturedHero ? 7 : 4) && (
                            <span className="text-[10px] font-mono px-2 py-1 rounded-md text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
                              +{project.caseStudy.technologies.length - (isFeaturedHero ? 7 : 4)}
                            </span>
                          )}
                        </div>

                        {/* Card Footer Bar */}
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-white/40 font-mono flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                            <span>Explore Case Study</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </span>

                          {project.caseStudy.liveLink && (
                            <a
                              href={project.caseStudy.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1 transition-colors px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30">
                              <span>Live</span>
                              <ExternalLink size={11} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-12 relative z-10">
            <Magnetic strength={0.35}>
              <button
                onClick={() => setShowAll((p) => !p)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 overflow-hidden border border-cyan-400/40 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/15 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]">
                {showAll ? (
                  <>
                    <ChevronUp
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    Show Less Systems
                  </>
                ) : (
                  <>
                    View All {filteredProjects.length} Projects
                    <ChevronDown
                      size={16}
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