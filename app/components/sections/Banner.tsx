"use client";
import Image from "next/image";
import { heroData } from "@/app/data/hero";
import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import HeroImage from "@/app/asserts/Hero-bg.png";
import { 
  SiLaravel, SiPhp, SiMysql, SiDocker, 
  SiNumpy, SiPandas, SiLinux, SiGit, SiPython
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const roles = [
  "Laravel Developer",
  "Full Stack Developer",
  "Backend Engineer",
  "API & Database Specialist",
];

// Floating tech badges around profile image
const TECH_BADGES = [
  { label: "Laravel", icon: SiLaravel, color: "#ff4d4d", angle: 0, dist: 220 },
  { label: "React", icon: FaReact, color: "#61DAFB", angle: 40, dist: 225 },
  { label: "Python", icon: SiPython, color: "#3776AB", angle: 140, dist: 225 },
  { label: "Numpy", icon: SiNumpy, color: "#4DABCF", angle: 180, dist: 220 },
  { label: "Pandas", icon: SiPandas, color: "#f50057", angle: 216, dist: 225 },
  { label: "Linux", icon: SiLinux, color: "#FCC624", angle: 252, dist: 215 },
  { label: "Git", icon: SiGit, color: "#F05032", angle: 288, dist: 225 },
  { label: "PHP", icon: SiPhp, color: "#a78bfa", angle: 324, dist: 215 },
];

function useTilt(ref: React.RefObject<HTMLDivElement | null>, strength = 10) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      el.style.transform = `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale(1.03)`;
    };
    const onLeave = () => {
      el.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
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
      className="absolute flex items-center justify-center w-14 h-14 rounded-full pointer-events-none select-none"
      title={label}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        background: `${color}15`,
        border: `1px solid ${color}40`,
        animation: `floatY 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `0 0 15px ${color}20`,
        backdropFilter: "blur(8px)",
      }}>
      <Icon 
        className="w-7 h-7" 
        style={{ color: color, filter: `drop-shadow(0 0 6px ${color}aa)` }} 
      />
    </div>
  );
}

export function Banner() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);


  const imageWrapRef = useRef<HTMLDivElement>(null);
  useTilt(imageWrapRef, 10);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 450);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="banner"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-32 relative overflow-hidden">
      {/* Neon grid BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 65%)",
          }}
        />
        {/* Left violet blob */}
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {/* Right cyan blob */}
        <div
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative" style={{ zIndex: 1 }}>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT — Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Role badge */}
            <div
              className="inline-flex items-center gap-2 mb-7"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 0.1s",
              }}>
              <span
                className="relative px-5 py-1.5 text-[11px] uppercase tracking-[0.24em] rounded-full overflow-hidden"
                style={{
                  border: "1px solid rgba(0,212,255,0.35)",
                  color: "#00d4ff",
                  background: "rgba(0,212,255,0.07)",
                  minWidth: "230px",
                  textAlign: "center",
                }}>
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(0,212,255,0.15) 50%, transparent 60%)",
                    animation: "shimmerSlide 2.5s linear infinite",
                  }}
                />
                ✦{" "}
                <span
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    display: "inline",
                  }}>
                  {roles[roleIndex]}
                </span>
              </span>
            </div>

            {/* Name — Glitch + Gradient */}
            <h1
              className="text-5xl md:text-7xl font-light leading-tight mb-5"
              style={{
                fontFamily: "'Syne', sans-serif",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              }}>
              <span style={{ color: "#ffffff" }}>
                {heroData.name.split(" ")[0]}{" "}
              </span>
              <span
                className="glitch"
                data-text={heroData.name.split(" ")[1]}
                style={{
                  background:
                    "linear-gradient(135deg, #00d4ff 0%, #a78bfa 60%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                {heroData.name.split(" ")[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.48)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.35s",
              }}>
              {heroData.subtitle}
            </p>

            {/* Stats */}
            <div
              className="flex gap-8 mb-10 justify-center lg:justify-start"
              style={{
                borderTop: "1px solid rgba(0,212,255,0.1)",
                paddingTop: "22px",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.5s",
              }}>
              {[
                { value: "2+", label: "Years Exp.", color: "#00d4ff" },
                { value: "15+", label: "Projects", color: "#a78bfa" },
                { value: "15+", label: "APIs & Systems", color: "#10b981" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="text-center lg:text-left group cursor-default"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transition: `opacity 0.6s ease ${0.5 + i * 0.12}s`,
                  }}>
                  <p
                    className="text-2xl md:text-3xl font-semibold transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: s.color,
                      textShadow: `0 0 20px ${s.color}88`,
                      display: "inline-block",
                    }}>
                    {s.value}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.65s",
              }}>
              {/* Download CV – opens Google Drive */}
              <a
                href={heroData.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-7 py-3.5 text-sm uppercase tracking-[0.18em] font-medium transition-all duration-400 overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))",
                  border: "1px solid rgba(0,212,255,0.45)",
                  color: "#00d4ff",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background =
                    "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(124,58,237,0.2))";
                  el.style.borderColor = "rgba(0,212,255,0.8)";
                  el.style.boxShadow =
                    "0 0 32px rgba(0,212,255,0.25), inset 0 0 32px rgba(0,212,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background =
                    "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))";
                  el.style.borderColor = "rgba(0,212,255,0.45)";
                  el.style.boxShadow = "none";
                }}>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(0,212,255,0.08) 50%, transparent 70%)",
                  }}
                />
                <Download
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                {heroData.resume.text}
              </a>

              {/* GitHub */}
              <a
                href={heroData.github.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-7 py-3.5 text-sm uppercase tracking-[0.18em] font-medium transition-all duration-400 rounded-lg overflow-hidden"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.55)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(167,139,250,0.5)";
                  el.style.color = "#a78bfa";
                  el.style.background = "rgba(167,139,250,0.06)";
                  el.style.boxShadow = "0 0 24px rgba(167,139,250,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "rgba(255,255,255,0.55)";
                  el.style.background = "transparent";
                  el.style.boxShadow = "none";
                }}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {heroData.github.text}
              </a>
            </div>
          </div>

          {/* RIGHT — 3D Profile Image */}
          <div
            className="shrink-0 relative"
            style={{
              width: 380,
              height: 480,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}>
            {/* Floating tech badges */}
            {TECH_BADGES.map((b, i) => (
              <FloatingBadge key={b.label} {...b} delay={i * 0.55} />
            ))}

            {/* 3D tilt card — clean, no border/box */}
            <div
              ref={imageWrapRef}
              className="relative w-full h-full rounded-[40px] overflow-hidden"
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
              {/* Holographic glare */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.05) 0%, transparent 50%, rgba(124,58,237,0.05) 100%)",
                }}
              />
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,10,20,0.95) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Available badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 text-xs uppercase tracking-widest whitespace-nowrap rounded-full"
              style={{
                background: "rgba(5,10,20,0.95)",
                border: "1px solid rgba(16,185,129,0.4)",
                color: "#10b981",
                boxShadow: "0 0 20px rgba(16,185,129,0.18)",
                animation: "floatY 3s ease-in-out infinite",
              }}>
              ✦ Open to Opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.3)", zIndex: 1 }}>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,212,255,0.7), transparent)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes conicSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
