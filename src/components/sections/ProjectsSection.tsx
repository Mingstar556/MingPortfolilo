"use client";

import Image from "next/image";
import { ExternalLink, ArrowUpRight, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { FadeUp, FadeLeft, FadeRight } from "@/components/common/ScrollReveal";

interface RealProject {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  badge: string;
  imageSrc: string;
  displayUrl: string;
}

const realProjects: RealProject[] = [
  {
    id: "star-coffee",
    number: "01",
    title: "STAR COFFEE — Artisanal Roasters & Brews",
    category: "Interactive E-Commerce & Motion",
    tagline: "Buttery-smooth momentum scrolling and rich dark espresso aesthetics.",
    description: "Full artisanal roasters web showcase engineered with Tailwind CSS, GSAP 3 ScrollTrigger, and Lenis smooth momentum scrolling. Designed with tactile micro-interactions and dark espresso tones.",
    highlights: [
      "Hardware-accelerated ScrollTrigger timeline choreography",
      "Lenis physics-based smooth momentum scrolling",
      "Responsive bespoke dark theme with artisanal typography",
    ],
    tech: ["Tailwind CSS", "GSAP 3", "ScrollTrigger", "Lenis Scroll", "JavaScript"],
    liveUrl: "https://mingstar556.github.io/StarCOffee/",
    githubUrl: "https://github.com/mingstar556/StarCOffee",
    badge: "Live Web Experience",
    imageSrc: "/assets/projects/star-coffee.webp",
    displayUrl: "mingstar556.github.io/StarCOffee",
  },
  {
    id: "star-bakery",
    number: "02",
    title: "Star Bakery Atelier • Heritage Sourdough",
    category: "Luxury Food & Beverage Brand Experience",
    tagline: "Slow stone-hearth fermentation and architectural draft aesthetics.",
    description: "An aristocratic digital bakery atelier built with Next.js App Router and Turbopack. Features bespoke hand-drawn sketch grid overlays, living sourdough culture storytelling, and responsive layouts.",
    highlights: [
      "Next.js App Router with Turbopack fast hydration",
      "Architectural draft sketch grid overlay and typography",
      "Zero layout shift with optimized responsive image pipelines",
    ],
    tech: ["Next.js App Router", "Turbopack", "Tailwind CSS", "TypeScript", "Responsive UI"],
    liveUrl: "https://starbakery-wheat.vercel.app/",
    githubUrl: "https://github.com/mingstar556/starbakery",
    badge: "Live Production App",
    imageSrc: "/assets/projects/star-bakery.webp",
    displayUrl: "starbakery-wheat.vercel.app",
  },
  {
    id: "visibility-studio",
    number: "03",
    title: "Visibility Studio | Photography & Soundstage",
    category: "Creative Media & Soundstage Studio",
    tagline: "Dark-themed editorial UI engineered for commercial videography.",
    description: "Premier studio space showcase engineered for commercial production, cyclorama soundstages, editorial fashion imagery, and creative direction. Built with Next.js and high-contrast minimalism.",
    highlights: [
      "High-contrast darkroom aesthetic with sleek aperture iconography",
      "Cyclorama soundstage specs, equipment rental tables & inquiry workflow",
      "Ultra-clean typographic layout with sub-second page loads",
    ],
    tech: ["Next.js", "Lucide Icons", "Tailwind CSS", "Dark Mode UI", "TypeScript"],
    liveUrl: "https://mingstar556.github.io/Studio-template/",
    githubUrl: "https://github.com/mingstar556/Studio-template",
    badge: "Live Studio Template",
    imageSrc: "/assets/projects/visibility-studio.webp",
    displayUrl: "mingstar556.github.io/Studio-template",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean, Spacious Section Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-slate-200/80 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                LIVE WEB PROJECTS & REPOSITORIES
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Selected Live Works.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
                Real web applications and live open-source repositories deployed to production.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
              3 Production Projects
            </div>
          </div>
        </FadeUp>

        {/* Clean, Spacious Project Cards with Browser Preview Mockup Boxes */}
        <div className="space-y-12">
          {realProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeUp
                key={proj.id}
                delay={idx * 0.12}
                className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left or Right: Browser Mockup Window Showing the Homepage */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/browser block relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl hover:shadow-[0_20px_50px_rgba(10,37,64,0.22)] transition-all duration-300 transform group-hover/browser:scale-[1.015]"
                      aria-label={`Open live website: ${proj.title}`}
                    >
                      {/* macOS Browser Window Top Bar */}
                      <div className="bg-[#0B1E32] border-b border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 select-none">
                        {/* Traffic light window controls */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                        </div>

                        {/* SSL URL Address Bar */}
                        <div className="flex-1 max-w-[260px] sm:max-w-sm mx-auto bg-slate-950/80 rounded-full px-3 py-1 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-300 border border-white/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="text-slate-500">https://</span>
                          <span className="truncate text-slate-200 font-medium">{proj.displayUrl}</span>
                        </div>

                        {/* Live indicator & external link */}
                        <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest shrink-0">
                          <span className="hidden sm:inline">LIVE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/browser:translate-x-0.5 group-hover/browser:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Homepage Screenshot Viewport */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                        <Image
                          src={proj.imageSrc}
                          alt={`${proj.title} homepage preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover/browser:scale-105"
                        />
                        {/* Interactive Hover Pill Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <span className="px-4 py-2 rounded-full bg-amber-400 text-[#0A2540] font-mono text-xs font-bold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/browser:translate-y-0 transition-transform">
                            <span>Open Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Left or Right: Project Details & Action Buttons */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Index & Badges */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-2xl sm:text-3xl font-black text-[#0A2540] group-hover:text-amber-600 transition-colors">
                          {proj.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0A2540] font-bold shadow-xs">
                          {proj.category}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-emerald-700 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                          {proj.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0A2540] mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm font-mono mb-4">
                        {proj.tagline}
                      </p>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-sans">
                        {proj.description}
                      </p>

                      {/* Engineering Highlights */}
                      <div className="space-y-2 mb-6 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                        <div className="text-[11px] font-mono uppercase font-bold text-slate-700 tracking-wider">
                          Key Engineering Highlights
                        </div>
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/70">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-bold font-mono tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
                      >
                        <span>VISIT LIVE SITE</span>
                        <ArrowUpRight className="w-4 h-4 text-amber-400" />
                      </a>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0A2540] text-xs font-bold font-mono tracking-wider border border-slate-300 shadow-xs active:scale-95 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>VIEW GITHUB REPO</span>
                      </a>
                    </div>
                  </div>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
