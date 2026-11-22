"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
  enableTilt?: boolean;
  showBorderBeam?: boolean;
  beamDuration?: number;
  beamColorFrom?: string;
  beamColorTo?: string;
  cursorType?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 245, 212, 0.12)",
  onClick,
  enableTilt = true,
  cursorType,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 24 });

  // Subtle, elegant 3D tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3.5deg", "-3.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3.5deg", "3.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: mouseX, y: mouseY });

    if (enableTilt) {
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={cursorType}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070d1a]/70 backdrop-blur-2xl transition-all duration-300 ${className}`}
    >
      {/* Delicate Radial Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 68%)`,
        }}
      />

      {/* Ultra-subtle specular highlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-15"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 70%)`,
        }}
      />

      {/* Border subtle glow tracker */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 212, 0.35), transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}