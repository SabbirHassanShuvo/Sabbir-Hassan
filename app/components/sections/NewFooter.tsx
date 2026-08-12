"use client";

import Link from "next/link";

const footerLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function NewFooter() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
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

  return (
    <footer className="w-full bg-[#050a14] border-t border-[rgba(0,212,255,0.08)] mt-10">
      {/* Top — Nav Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-10 flex items-center justify-center gap-8">
        <ul className="flex flex-wrap gap-6 justify-center">
          {footerLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-[#00d4ff] transition-colors duration-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom — Copyright */}
      <div className="border-t border-white/5 px-6 md:px-14 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/40">
          © {currentYear} Sabbir Hassan — All rights reserved
        </p>
        <p className="text-xs text-white/40">
          Designed &amp; Built with Next.js, Tailwind CSS, and Laravel ❤️
        </p>
      </div>
    </footer>
  );
}
