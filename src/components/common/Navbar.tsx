"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "projects", "creator", "services", "contact"];
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Creator", href: "#creator" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/85 backdrop-blur-md shadow-lg shadow-slate-900/5 border border-slate-200/80"
                : "bg-white/50 backdrop-blur-sm border border-slate-200/40"
            }`}
          >
            {/* Brand Logo & Monogram */}
            <a
              href="#hero"
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#0A2540] flex items-center justify-center text-amber-400 font-mono font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-[#0A2540] tracking-tight group-hover:text-amber-600 transition-colors">
                  MING STAR
                </span>
                <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest">
                  DEV &bull; CREATOR
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0A2540] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#0A2540] hover:bg-white/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Status & Action */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Availability Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-medium font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Q1/Q2
              </div>

              {/* Contact CTA Button */}
              <a
                href="#contact"
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-semibold tracking-wider transition-all duration-200 shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 cursor-pointer"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-full bg-[#0A2540] text-amber-400 text-xs font-semibold"
              >
                Hire
              </a>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A2540]/90 backdrop-blur-md md:hidden flex flex-col justify-center px-8 py-16 animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-white hover:text-amber-400 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-700/60 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Available for New Contracts
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-amber-400 text-[#0A2540] font-bold text-sm tracking-wide shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
