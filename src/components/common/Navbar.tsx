"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowUpRight, Film } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [btnMouse, setBtnMouse] = useState({ x: 50, y: 50 });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  interface NavItem {
    name: string;
    href: string;
    badge?: string;
  }

  const navLinks: NavItem[] = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "projects", "services", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update dynamic liquid pill indicator
  useEffect(() => {
    if (!navContainerRef.current) return;
    const currentTarget = hoveredNav || activeSection;
    const targetEl = navContainerRef.current.querySelector(
      `[data-nav-id="${currentTarget}"]`
    ) as HTMLElement | null;

    if (targetEl) {
      setIndicatorStyle({
        left: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredNav, activeSection]);

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBtnMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-2 sm:py-3" : "py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 relative ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-[0_12px_36px_rgba(10,37,64,0.08)] border border-white/60"
                : "bg-white/55 backdrop-blur-md border border-white/40 shadow-sm"
            }`}
            style={{
              boxShadow: scrolled
                ? "0 14px 34px -4px rgba(10,37,64,0.08), inset 0 1px 1px 0 rgba(255,255,255,0.7)"
                : "0 6px 20px -2px rgba(10,37,64,0.04), inset 0 1px 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            {/* Liquid Logo Button */}
            <Link
              href="/"
              className="group flex items-center gap-3 cursor-pointer select-none"
            >
              <div
                className="relative w-10 h-10 flex items-center justify-center text-amber-400 font-mono font-bold text-sm tracking-wider shadow-md bg-[#0A2540] group-hover:bg-[#07192C] transition-all duration-500 transform group-hover:scale-105 active:scale-95"
                style={{
                  borderRadius: "44% 56% 62% 38% / 48% 40% 60% 52%",
                  animation: "liquidBlob 6s ease-in-out infinite alternate",
                }}
              >
                {/* Gloss reflection */}
                <span className="absolute top-1 left-2 w-3 h-2 rounded-full bg-white/30 blur-[0.5px] rotate-[-20deg]" />
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-[#0A2540] tracking-tight group-hover:text-amber-600 transition-colors">
                  MING STAR
                </span>
                <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  DEV &bull; CREATOR
                </span>
              </div>
            </Link>

            {/* Desktop Nav Items with Liquid Morphing Pill */}
            <div
              ref={navContainerRef}
              className="hidden md:flex items-center gap-1 bg-slate-200/50 backdrop-blur-md p-1.5 rounded-full border border-white/70 relative shadow-inner shadow-slate-900/5"
            >
              {/* Viscous Sliding Liquid Pill Indicator */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0A2540] shadow-md shadow-slate-950/15 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                  transform: hoveredNav ? "scaleY(1.05)" : "scaleY(1)",
                }}
              >
                {/* Liquid reflection line */}
                <div className="absolute top-1 inset-x-2 h-[2px] rounded-full bg-white/25" />
              </div>

              {navLinks.map((link) => {
                const navId = link.name.toLowerCase();
                const isActive = activeSection === navId;
                const isHovered = hoveredNav === navId;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    data-nav-id={navId}
                    onMouseEnter={() => setHoveredNav(navId)}
                    onMouseLeave={() => setHoveredNav(null)}
                    className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isActive || isHovered
                        ? "text-white"
                        : "text-slate-600 hover:text-[#0A2540]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full uppercase tracking-widest transition-colors ${
                          isActive || isHovered
                            ? "bg-amber-400 text-[#0A2540]"
                            : "bg-amber-400/20 text-amber-600"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Status & Liquid Action Button */}
            <div className="hidden lg:flex items-center gap-3.5">
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/70 text-emerald-800 text-[11px] font-medium font-mono shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available Q1/Q2</span>
              </div>

              {/* Liquid Style Button: "LET'S TALK" */}
              <Link
                href="/#contact"
                onMouseMove={handleBtnMouseMove}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full overflow-hidden text-white text-xs font-bold tracking-wider cursor-pointer shadow-lg shadow-slate-950/15 active:scale-95 transition-all duration-300"
                style={{
                  background: "#0A2540",
                  borderRadius: "9999px",
                }}
              >
                {/* Liquid fill wave rising on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 via-[#F59E0B] to-amber-600 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  aria-hidden="true"
                >
                  {/* Organic wave crest */}
                  <svg
                    className="absolute -top-3 left-0 w-[200%] h-4 text-amber-500 fill-current animate-wave"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
                  </svg>
                </div>

                {/* Mouse-following liquid refraction gloss */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 50px at ${btnMouse.x}px ${btnMouse.y}px, rgba(255,255,255,0.3), transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Upper rim liquid reflection line */}
                <div className="absolute top-0.5 inset-x-3 h-[1px] bg-white/40 rounded-full pointer-events-none" />

                {/* Button Content */}
                <span className="relative z-10 transition-colors duration-200 group-hover:text-[#0A2540]">
                  LET&apos;S TALK
                </span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-amber-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/#contact"
                className="px-3.5 py-1.5 rounded-full bg-[#0A2540] text-amber-400 text-xs font-semibold shadow-sm active:scale-95 transition-transform"
              >
                Let&apos;s Talk
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full hover:bg-slate-100 text-[#0A2540] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu with Liquid Styling */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A2540]/95 backdrop-blur-xl md:hidden flex flex-col justify-center px-8 py-16 animate-in fade-in duration-300">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-white hover:text-amber-400 transition-colors py-2 flex items-center justify-center gap-2"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400 text-[#0A2540] uppercase">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-700/60 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Available for Q1/Q2</span>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#0A2540] font-bold text-sm tracking-wide shadow-xl active:scale-95 transition-transform"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
