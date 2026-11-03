"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  Film, 
  Code2, 
  User, 
  Cpu, 
  Briefcase, 
  Mail, 
  Phone 
} from "lucide-react";
import { TelegramIcon, TiktokIcon, GithubIcon } from "@/components/common/BrandIcons";

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
    icon: any;
    desc: string;
    badge?: string;
  }

  const navLinks: NavItem[] = [
    { name: "About", href: "/#about", icon: User, desc: "Biography & Dual Vision" },
    { name: "Skills", href: "/#skills", icon: Cpu, desc: "Tech Stack & Capabilities" },
    { name: "Projects", href: "/#projects", icon: Code2, desc: "Selected Live Works" },
    { name: "Services", href: "/#services", icon: Briefcase, desc: "Pricing & Engagement" },
    { name: "Contact", href: "/#contact", icon: Mail, desc: "Direct Inquiry Console" },
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
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-500 relative ${
              scrolled
                ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_36px_rgba(10,37,64,0.08)] border border-white/70"
                : "bg-white/60 backdrop-blur-md border border-white/50 shadow-sm"
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
              className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none"
            >
              <div
                className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-amber-400 font-mono font-bold text-xs sm:text-sm tracking-wider shadow-md bg-[#0A2540] group-hover:bg-[#07192C] transition-all duration-500 transform group-hover:scale-105 active:scale-95 shrink-0"
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
                <span className="font-display font-bold text-xs sm:text-sm text-[#0A2540] tracking-tight group-hover:text-amber-600 transition-colors">
                  MING STAR
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest flex items-center gap-1">
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
                className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0A2540] shadow-md shadow-slate-950/15 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
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

            {/* Right Status & Liquid Action Button (Desktop) */}
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
                  <svg
                    className="absolute -top-3 left-0 w-[200%] h-4 text-amber-500 fill-current animate-wave"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" />
                  </svg>
                </div>

                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 50px at ${btnMouse.x}px ${btnMouse.y}px, rgba(255,255,255,0.3), transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="absolute top-0.5 inset-x-3 h-[1px] bg-white/40 rounded-full pointer-events-none" />

                <span className="relative z-10 transition-colors duration-200 group-hover:text-[#0A2540]">
                  LET&apos;S TALK
                </span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-amber-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile Header Actions */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/#contact"
                className="px-3.5 py-1.5 min-h-[38px] rounded-full bg-[#0A2540] text-amber-400 text-xs font-semibold shadow-sm active:scale-95 transition-transform flex items-center gap-1.5"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0A2540] flex items-center justify-center transition-colors active:scale-95"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Modern Mobile Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07192C]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-300">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0A2540] border border-amber-400/40 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-white tracking-tight">
                  MING STAR
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Navigation Console
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 text-white flex items-center justify-center active:scale-95 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items List with Icons */}
          <div className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => {
              const navId = link.name.toLowerCase();
              const isActive = activeSection === navId;
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl transition-all active:scale-[0.98] ${
                    isActive
                      ? "bg-amber-400 text-[#0A2540] shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-[#0A2540] text-amber-400"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-base leading-snug">
                        {link.name}
                      </div>
                      <div
                        className={`text-[10px] font-mono ${
                          isActive ? "text-[#0A2540]/80" : "text-slate-400"
                        }`}
                      >
                        {link.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 ${
                      isActive ? "text-[#0A2540]" : "text-slate-400"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Drawer Bottom Actions & Contacts */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Availability:</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available Q1/Q2
              </span>
            </div>

            {/* Quick Contact Chips */}
            <div className="grid grid-cols-4 gap-2">
              <a
                href="https://t.me/mingstar01"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 active:scale-95 transition-all text-center"
              >
                <TelegramIcon className="w-4 h-4 text-sky-400 mb-1" />
                <span className="text-[10px] font-mono">TG</span>
              </a>
              <a
                href="tel:060206666"
                className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 active:scale-95 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="text-[10px] font-mono">Call</span>
              </a>
              <a
                href="https://www.tiktok.com/@ming.star"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 active:scale-95 transition-all text-center"
              >
                <TiktokIcon className="w-4 h-4 text-rose-400 mb-1" />
                <span className="text-[10px] font-mono">TikTok</span>
              </a>
              <a
                href="https://github.com/mingstar556"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 active:scale-95 transition-all text-center"
              >
                <GithubIcon className="w-4 h-4 text-white mb-1" />
                <span className="text-[10px] font-mono">Git</span>
              </a>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 min-h-[48px] rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-[#0A2540] font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform"
            >
              <span>Initiate Transmission</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A2540]" />
            </Link>
          </div>
        </div>
      )}

      {/* Floating Mobile Thumb Dock - Native App Thumb Ergonomics */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-30 max-w-sm mx-auto pointer-events-auto">
        <div className="bg-[#0A2540]/92 backdrop-blur-xl border border-white/20 text-white rounded-full p-1.5 shadow-[0_12px_40px_rgba(7,25,44,0.45)] flex items-center justify-between gap-1">
          <Link
            href="/#about"
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-full text-[10px] font-mono transition-all active:scale-95 ${
              activeSection === "about"
                ? "bg-white/15 text-amber-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <User className="w-4 h-4 mb-0.5" />
            <span>About</span>
          </Link>

          <Link
            href="/#skills"
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-full text-[10px] font-mono transition-all active:scale-95 ${
              activeSection === "skills"
                ? "bg-white/15 text-amber-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Cpu className="w-4 h-4 mb-0.5" />
            <span>Skills</span>
          </Link>

          <Link
            href="/#projects"
            className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-full text-[10px] font-mono transition-all active:scale-95 ${
              activeSection === "projects"
                ? "bg-white/15 text-amber-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4 mb-0.5" />
            <span>Projects</span>
          </Link>

          <Link
            href="/#top-reels"
            className="flex flex-col items-center justify-center py-1.5 px-2.5 rounded-full text-[10px] font-mono text-slate-300 hover:text-white transition-all active:scale-95"
          >
            <Film className="w-4 h-4 mb-0.5 text-amber-400" />
            <span>Reels</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[38px] rounded-full bg-amber-400 text-[#0A2540] text-xs font-bold font-mono tracking-wider uppercase shadow-md active:scale-95 transition-transform shrink-0"
          >
            <span>Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0A2540]" />
          </Link>
        </div>
      </div>
    </>
  );
}
