// app/projects/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";
import DetailsImage from "../DetailsImages";
import { ArrowLeft, Check, TriangleAlert } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl">
        {/* ── Back button ── */}
        <div className="px-4 md:px-8 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#a78bfa] transition-colors duration-200">
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="px-4 md:px-8 py-10">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md">
            {/* Browser mockup bar */}
            <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="flex-1 mx-3 bg-[#2a2a2a] rounded text-[11px] text-white/20 px-3 py-1 text-center max-w-xs">
                {project?.caseStudy?.liveLink
                  ? new URL(project?.caseStudy?.liveLink).hostname
                  : "project-preview.io"}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                {/* Live link icon */}
                <a
                  href={caseStudy.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-[#a78bfa] hover:border-[#a78bfa]/40 transition-all">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                {/* GitHub icon — lock if client project */}
                {caseStudy.itsClientProject ? (
                  <div
                    title="Source code private — client project"
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-amber-500/20 text-amber-500/40 cursor-not-allowed">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                ) : (
                  <a
                    href={caseStudy.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-[#a78bfa] hover:border-[#a78bfa]/40 transition-all">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Hero gallery */}
            <div className="relative">
              <DetailsImage gallery={project.images} />
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="px-4 md:px-8 pb-24">
          {/* Title + tagline */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa] mb-3">
              Case Study
            </p>
            <h1 className="text-4xl md:text-6xl font-light font-serif text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              {caseStudy.tagline}
            </p>
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "duration", value: project.year },
              { label: "Role", value: project.role },
              {
                label: "Platform",
                value: [
                  caseStudy.desktopReady && "Desktop",
                  caseStudy.mobileReady && "Mobile",
                ]
                  .filter(Boolean)
                  .join(" + "),
              },
              {
                label: "Tech Stack",
                value: `${caseStudy.technologies.length} Technologies`,
              },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_24px_rgba(167,139,250,0.08)]">
                <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-1">
                  {label}
                </p>
                <p className="text-base text-white font-light">{value}</p>
              </div>
            ))}
          </div>

          {/* Problem / Solution — 2 col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20">
              <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-3">
                The Problem
              </p>
              <p className="text-base text-white/55 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
              <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-3">
                The Solution
              </p>
              <p className="text-base text-white/55 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
            <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-3">
              Overview
            </p>
            <p className="text-base text-white/55 leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* ── Video Explain Preview ── */}
          <div className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-1">
                  Video Explain Preview
                </p>
                <h3 className="text-xl md:text-2xl font-light text-white font-serif">
                  Project Video Walkthrough &amp; Technical Explanation
                </h3>
              </div>
              {caseStudy.youtubeId && (
                <a
                  href={`https://www.youtube.com/watch?v=${caseStudy.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600/20 hover:border-red-500/50 text-xs font-mono tracking-wider transition-all self-start sm:self-auto">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch on YouTube ↗
                </a>
              )}
            </div>

            <div
              className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#08080a]"
              style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${caseStudy.youtubeId || "dQw4w9WgXcQ"}?rel=0&modestbranding=1&color=white`}
                title="Project Video Preview & Explanation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
            <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-5">
              Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {caseStudy.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border border-[#a78bfa]/40 bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                    <Check
                      className="shrink-0 text-violet-400"
                      size={8}
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-base text-white/60">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Challenges & How I Overcame Them ── */}
          {caseStudy.challenges && caseStudy.challenges.length > 0 && (
            <div className="mb-8">
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-widest text-[#a78bfa]">
                  Challenges & How I Overcame Them
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
                    {/* Challenge header */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-medium text-[#a78bfa]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-sm font-medium text-white leading-snug">
                        {challenge.title}
                      </h2>
                    </div>

                    {/* The challenge */}
                    <div className="pl-9">
                      <p className="text-xs uppercase tracking-widest text-white/25 mb-1.5">
                        The Challenge
                      </p>
                      <p className="text-base text-white/45 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="pl-9">
                      <div className="h-px w-full bg-white/5" />
                    </div>

                    {/* How I overcame it */}
                    <div className="pl-9">
                      <p className="text-xs uppercase tracking-widest text-[#a78bfa]/60 mb-1.5">
                        How I Overcame It
                      </p>
                      <p className="text-base text-white/55 leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact */}
          <div className="p-6 md:p-8 bg-[rgba(167,139,250,0.04)] border border-[rgba(167,139,250,0.2)] rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.08)] hover:border-[rgba(167,139,250,0.35)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.16)]">
            <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-3">
              Impact
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              {caseStudy.impact}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
            <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-[#a78bfa] bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.2)] px-3 py-1.5 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contributors */}
          <div className="p-6 md:p-8 bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl mb-8 transition-all duration-300 hover:bg-[rgba(167,139,250,0.06)] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(167,139,250,0.12)]">
            <p className="text-xs uppercase tracking-widest text-[#a78bfa] mb-5">
              Contributors
            </p>
            <div className="flex flex-col gap-3">
              {caseStudy.contributors.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(167,139,250,0.15)] border border-[rgba(167,139,250,0.2)] flex items-center justify-center text-xs text-[#a78bfa] font-serif">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm text-white">{c.name}</p>
                    <p className="text-xs text-white/60">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Client Project Notice ── */}
          {caseStudy?.itsClientProject && (
            <div className="flex items-start gap-3 px-5 py-4 mb-6 rounded-xl border border-amber-500/15 bg-amber-500/5">
              <TriangleAlert
                className="shrink-0 mt-0.5 text-amber-500"
                size={13}
              />
              <p className="text-xs text-amber-400/70 leading-relaxed">
                This is a client project. Source code is private due to a
                confidentiality agreement. The case study is shared with
                permission for portfolio purposes only.
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={caseStudy.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3.5 text-xs uppercase tracking-widest bg-[#a78bfa] text-[#0f0f0f] font-medium rounded-xl hover:bg-[#c4b5fd] transition-colors">
              Live Demo ↗
            </a>

            {/* GitHub CTA — disabled if client project */}
            {caseStudy.itsClientProject ? (
              <div className="flex-1 flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-widest border border-white/8 text-white/20 rounded-xl cursor-not-allowed select-none">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Source Code Private
              </div>
            ) : (
              <a
                href={caseStudy.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3.5 text-xs uppercase tracking-widest border border-[rgba(167,139,250,0.35)] text-[#a78bfa] rounded-xl hover:bg-[rgba(167,139,250,0.1)] transition-colors">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
