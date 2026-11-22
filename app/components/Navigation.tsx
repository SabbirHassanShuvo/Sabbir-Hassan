"use client";

import { useEffect, useState } from "react";
import logo from "@/app/asserts/Logo4.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.6 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="fixed-nav"
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-2.5 transition-all duration-300 bg-transparent ${
          scrolled ? "backdrop-blur-md border-b border-white/5" : ""
        } ${menuOpen ? "bg-[#080d18]/90" : ""}`}>
        {/* Logo */}
        <Link href="/" className="relative w-11 h-11 block shrink-0">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-contain"
            priority
            sizes="44px"
            suppressHydrationWarning
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-xs font-light tracking-wider text-white/70 hover:text-[#00d4ff] transition-colors duration-300 uppercase">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-0 focus:outline-none">
          {/* Animated bars */}
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-400 ease-in-out ${
              menuOpen ? "w-6 translate-y-1 rotate-45" : "w-6 -translate-y-1"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white rounded-full transition-all duration-400 ease-in-out ${
              menuOpen ? "w-6 -translate-y-1 -rotate-45" : "w-6 translate-y-1"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-[#080d18] border-l border-white/[0.07] flex flex-col justify-center px-10 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-[#00d4ff]/40 to-transparent" />

        <ul className="flex flex-col gap-8 list-none">
          {navLinks.map(({ href, label }, i) => (
            <li
              key={href}
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms",
              }}
              className={`transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="group flex items-center gap-4 text-sm font-light tracking-[0.2em] text-white/70 hover:text-white uppercase transition-colors duration-300">
                <span className="text-[10px] text-[#00d4ff]/60 font-mono transition-colors duration-300 group-hover:text-[#00d4ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom decoration */}
        <div className="absolute bottom-10 left-10 right-10">
          <div className="h-px bg-gradient-to-r from-[#00d4ff]/20 to-transparent mb-6" />
          <p className="text-[10px] tracking-widest text-white/20 uppercase font-light">
            Portfolio
          </p>
        </div>
      </div>
    </>
  );
}
