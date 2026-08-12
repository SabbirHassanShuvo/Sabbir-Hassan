"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add("visible");

            // Animate skill bars
            el.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const width = parseFloat(
                (bar as HTMLElement).getAttribute("data-width") || "0",
              );
              (bar as HTMLElement).style.transform = `scaleX(${width})`;
            });

            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    // Observe only explicit reveal elements
    const animatedElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .stagger, .split-line, .work-item, .skill-cell",
    );

    animatedElements.forEach((el, i) => {
      if (el.classList.contains("work-item")) {
        (el as HTMLElement).style.transitionDelay = (i % 5) * 0.08 + "s";
      }
      io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return null;
}
