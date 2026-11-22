"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;

    // Hide on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Show immediately
    cursor.style.opacity = "1";
    ring.style.opacity = "1";

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;
    let hasMovedMouse = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMovedMouse) {
        hasMovedMouse = true;
        ringX = targetX;
        ringY = targetY;
        cursor.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Direct DOM update — no React re-render, instant
      cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
    };

    const render = () => {
      if (hasMovedMouse) {
        ringX += (targetX - ringX) * 0.18;
        ringY += (targetY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMouseDown = () => {
      cursor.classList.add("clicked");
      ring.classList.add("clicked");
    };

    const onMouseUp = () => {
      cursor.classList.remove("clicked");
      ring.classList.remove("clicked");
    };

    const interactiveSelector =
      "a, button, input, textarea, select, [role='button'], .cursor-pointer, .work-item, [data-hover], label";

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(interactiveSelector)) {
        cursor.classList.add("hover");
        ring.classList.add("hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest(interactiveSelector)) {
        const related = e.relatedTarget as HTMLElement | null;
        if (!related || !related.closest(interactiveSelector)) {
          cursor.classList.remove("hover");
          ring.classList.remove("hover");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        style={{ opacity: 0, pointerEvents: "none" }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{ opacity: 0, pointerEvents: "none" }}
      />
    </>
  );
}
