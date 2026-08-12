"use client";

import { useEffect, useRef } from "react";

export function LenisScroll() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const initLenis = async () => {
      try {
        // Dynamically import Lenis
        const { default: Lenis } = await import("@studio-freight/lenis");

        const lenis = new Lenis({
          duration: 1.3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        } as any);

        lenisRef.current = lenis;
        (window as any).lenis = lenis;

        lenis.on("scroll", ({ scroll }: { scroll: number }) => {
          const nav = document.getElementById("fixed-nav");
          if (scroll > 60) {
            nav?.classList.add("scrolled");
          } else {
            nav?.classList.remove("scrolled");
          }

          // Update Three.js scene opacity
          const event = new CustomEvent("portfolioScroll", {
            detail: { scrollY: scroll },
          });
          window.dispatchEvent(event);
        });

        const rafLoop = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(rafLoop);
        };

        requestAnimationFrame(rafLoop);
      } catch (error) {
        console.error("Failed to load Lenis:", error);
      }
    };

    initLenis();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy?.();
      }
    };
  }, []);

  return null;
}
