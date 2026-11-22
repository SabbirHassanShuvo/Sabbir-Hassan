"use client";
import Image from "next/image";
import { heroData } from "@/app/data/hero";
import { useEffect, useRef, useState } from "react";
import { Download, ArrowDownRight, Sparkles } from "lucide-react";
import { Magnetic } from "@/app/components/motion/Magnetic";
import { VelocityMarquee } from "@/app/components/motion/VelocityMarquee";
import HeroImage from "@/app/asserts/Hero-bg.png";
import { 
  SiLaravel, SiPhp, SiMysql, SiDocker, 
  SiNumpy, SiPandas, SiLinux, SiGit, SiPython
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const roles = [
  "Senior Laravel Developer",
  "Full Stack SaaS Engineer",
  "Backend & API Architect",
  "High-Performance Database Engineer",
];

// Floating tech badges around profile image
const TECH_BADGES = [
  { label: "Laravel", icon: SiLaravel, color: "#ff2d20", angle: 0, dist: 230 },
  { label: "React", icon: FaReact, color: "#00d8ff", angle: 42, dist: 235 },
  { label: "Python", icon: SiPython, color: "#3776ab", angle: 138, dist: 235 },
  { label: "Numpy", icon: SiNumpy, color: "#4dabcf", angle: 180, dist: 230 },
  { label: "Pandas", icon: SiPandas, color: "#e70488", angle: 220, dist: 235 },
  { label: "Linux", icon: SiLinux, color: "#fcc624", angle: 256, dist: 225 },
  { label: "Git", icon: SiGit, color: "#f05032", angle: 290, dist: 235 },
  { label: "PHP", icon: SiPhp, color: "#8892bf", angle: 326, dist: 225 },
];

function useTilt(ref: React.RefObject<HTMLDivElement | null>, strength = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      el.style.transform = `perspective(1000px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale(1.02)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);
}

function FloatingBadge({
  label,
  icon: Icon,
  color,
  angle,
  dist,
  delay,
}: {
  label: string;
  icon: React.ElementType;
  color: string;
  angle: number;
  dist: number;
  delay: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * dist;
  const y = Math.sin(rad) * dist;
  return (
    <div
      className="absolute flex items-center justify-center w-13 h-13 rounded-2xl pointer-events-none select-none transition-transform"
      title={label}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        background: "rgba(7, 13, 26, 0.75)",
        border: `1px solid ${color}40`,
        animation: `floatY 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 16px ${color}25`,
        backdropFilter: "blur(12px)",
      }}>
      <Icon 
        className="w-6 h-6" 
        style={{ color: color, filter: `drop-shadow(0 0 8px ${color}aa)` }} 
      />
    </div>
  );
}

export function Banner() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  const imageWrapRef = useRef<HTMLDivElement>(null);
  useTilt(imageWrapRef, 8);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="banner"
      className="min-h-screen w-full flex flex-col justify-between pt-36 md:pt-44 pb-12 relative overflow-hidden">
      
      {/* Dynamic Aurora Ambient Lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-cyan-500/12 via-violet-600/10 to-transparent blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[450px] h-[450px] bg-cyan-400/10 blur-[130px] rounded-full" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex-1 flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-16 w-full">
          
          {/* LEFT COLUMN: Narrative & Interaction */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            
            {/* Live Status Pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_24px_rgba(16,185,129,0.15)] mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.6s ease 0.1s",
              }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-medium">
                Available For Senior & Lead Roles
              </span>
            </div>

            {/* Dynamic Role Badge */}
            <div
              className="mb-5"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.6s ease 0.18s",
              }}>
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 bg-cyan-400/8 border border-cyan-400/25 px-3.5 py-1.5 rounded-lg">
                <Sparkles size={13} className="text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}>
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-6"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.7s ease 0.25s",
              }}>
              <span className="text-white font-serif block font-normal">Hi, I&apos;m Sabbir</span>
              <span className="gradient-text font-serif italic block mt-1">
                Backend Architect
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p
              className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed font-light"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.7s ease 0.35s",
              }}>
              Engineering high-concurrency SaaS ecosystems, multi-tenant databases, automated verification engines, and sub-100ms RESTful micro-architectures with Laravel 12 & PHP 8.2+.
            </p>

            {/* Key Live Metric Pills */}
            <div
              className="grid grid-cols-3 gap-3 mb-10 max-w-lg mx-auto lg:mx-0"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.7s ease 0.45s",
              }}>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-md">
                <p className="text-2xl font-bold font-mono text-cyan-400">10+</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-0.5">Production Apps</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-md">
                <p className="text-2xl font-bold font-mono text-purple-400">3</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-0.5">Flagship SaaS</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-md">
                <p className="text-2xl font-bold font-mono text-emerald-400">&lt;100ms</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 mt-0.5">API Latency</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "all 0.7s ease 0.55s",
              }}>
              
              {/* Primary: Download CV */}
              <Magnetic strength={0.3}>
                <a
                  href={heroData.resume.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.35)] hover:shadow-[0_0_45px_rgba(0,242,254,0.55)] hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
                  }}>
                  <Download size={15} className="transition-transform group-hover:-translate-y-0.5" />
                  <span>Download CV</span>
                </a>
              </Magnetic>

              {/* Secondary: Explore Works */}
              <Magnetic strength={0.3}>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <span>Explore Systems</span>
                  <ArrowDownRight size={15} className="text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>

              {/* Tertiary: GitHub */}
              <Magnetic strength={0.3}>
                <a
                  href={heroData.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all duration-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Interactive Floating Avatar */}
          <div
            className="shrink-0 relative"
            style={{
              width: 380,
              height: 480,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}>
            
            {/* Luminous Orbital Ring */}
            <div className="absolute -inset-6 rounded-full border border-cyan-400/20 blur-sm pointer-events-none animate-pulse" />
            <div className="absolute -inset-14 rounded-full border border-purple-500/15 pointer-events-none" />

            {/* Harmonic Floating Tech Badges */}
            {TECH_BADGES.map((b, i) => (
              <FloatingBadge key={b.label} {...b} delay={i * 0.45} />
            ))}

            {/* 3D Tilt Card — Seamless Glass Finish */}
            <div
              ref={imageWrapRef}
              className="relative w-full h-full rounded-[36px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#0a1428]/60 to-[#030712]/90 backdrop-blur-xl"
              style={{
                transition: "transform 0.15s ease",
                transformStyle: "preserve-3d",
              }}>
              <Image
                src={HeroImage}
                alt={heroData.name}
                fill
                quality={100}
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                suppressHydrationWarning
              />
              {/* Subtle glass reflection */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                }}
              />
              {/* Soft bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background:
                    "linear-gradient(to top, #030712 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Marquee Ticker */}
      <div className="w-full mt-16 relative z-10">
        <VelocityMarquee />
      </div>
    </section>
  );
}