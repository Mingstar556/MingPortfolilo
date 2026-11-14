"use client";

import Image from "next/image";
import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { FadeUp, ScrollScale } from "@/components/common/ScrollReveal";
import InteractiveNetworkBackground from "@/components/canvas/InteractiveNetworkBackground";

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
    title: "STAR COFFEE • Artisanal Roasters & Brews",
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
    id: "star-fashion",
    number: "03",
    title: "Star Fashion • Luxury Streetwear & E-Commerce",
    category: "Full-Stack E-Commerce & Merchandising",
    tagline: "High-contrast darkroom aesthetic, live cart state, and Telegram order routing.",
    description: "Full-cycle digital fashion store built with Next.js App Router, Framer Motion, and Tailwind CSS. Features category filtering, dynamic shopping cart drawer, and automated order confirmation dispatch.",
    highlights: [
      "Dynamic product catalog with instant category filtering & search",
      "Interactive sliding cart drawer with live subtotal calculations",
      "Automated order dispatch & admin inventory synchronization",
    ],
    tech: ["Next.js App Router", "Framer Motion", "Tailwind CSS", "Zustand", "TypeScript"],
    liveUrl: "https://starfashion-one.vercel.app/",
    githubUrl: "https://github.com/Mingstar556/Starfashionwork",
    badge: "Live Production Store",
    imageSrc: "/assets/projects/starfashion.webp",
    displayUrl: "starfashion-one.vercel.app",
  },
  {
    id: "visibility-studio",
    number: "04",
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
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-graph-grid opacity-30 pointer-events-none" />
      <InteractiveNetworkBackground className="opacity-35" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean, Spacious Section Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-slate-200/80 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                03 // PROOF OF WORK & LIVE CASE STUDIES
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Real Websites I&apos;ve Built.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 leading-relaxed">
                Explore real, interactive applications running live in production. Click any preview below to experience the speed, responsiveness, and design quality I deliver for clients.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
              4 Production Projects
            </div>
          </div>
        </FadeUp>

        {/* Clean, Compact on Mobile, Spacious on Desktop Project Cards */}
        <div className="space-y-6 sm:space-y-12">
          {realProjects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollScale
                key={proj.id}
                delay={idx * 0.12}
                className="bg-slate-50/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
                  
                  {/* Left or Right: Browser Mockup Window Showing the Homepage */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <div className="relative">
                      {/* Dynamic Project Ambient Glow Aura */}
                      <div
                        className={`absolute -inset-2 rounded-2xl sm:rounded-3xl blur-2xl opacity-35 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none -z-10 ${
                          proj.id === "star-coffee"
                            ? "bg-amber-500/30"
                            : proj.id === "star-bakery"
                            ? "bg-yellow-500/30"
                            : proj.id === "star-fashion"
                            ? "bg-purple-500/30"
                            : "bg-cyan-500/30"
                        }`}
                      />

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/browser block relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl hover:shadow-[0_20px_50px_rgba(10,37,64,0.22)] transition-all duration-300 transform group-hover/browser:scale-[1.015]"
                        aria-label={`Open live website: ${proj.title}`}
                      >
                        {/* macOS Browser Window Top Bar */}
                        <div className="bg-[#0B1E32] border-b border-white/10 px-2.5 sm:px-4 py-1.5 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 select-none">
                          {/* Traffic light window controls */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
                          </div>

                          {/* SSL URL Address Bar */}
                          <div className="flex-1 max-w-[170px] xs:max-w-[210px] sm:max-w-sm mx-auto bg-slate-950/80 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 flex items-center justify-center gap-1.5 text-[9px] sm:text-[11px] font-mono text-slate-300 border border-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="text-slate-500 hidden xs:inline">https://</span>
                            <span className="truncate text-slate-200 font-medium">{proj.displayUrl}</span>
                          </div>

                          {/* Live indicator & external link */}
                          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest shrink-0">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                            </span>
                            <span className="hidden sm:inline">LIVE</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/browser:translate-x-0.5 group-hover/browser:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>

                        {/* Homepage Screenshot Viewport - Tighter aspect ratio on mobile */}
                        <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                          <Image
                            src={proj.imageSrc}
                            alt={`${proj.title} homepage preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-500 ease-out group-hover/browser:scale-105"
                          />
                          {/* Interactive Hover Pill Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 sm:p-4">
                            <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-400 text-[#0A2540] font-mono text-[11px] sm:text-xs font-bold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/browser:translate-y-0 transition-transform">
                              <span>Open Live Website</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Left or Right: Project Details & Action Buttons */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Index & Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-2 sm:mb-4">
                        <span className="font-mono text-lg sm:text-3xl font-black text-[#0A2540] group-hover:text-amber-600 transition-colors">
                          {proj.number}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-slate-200 text-[#0A2540] font-bold shadow-xs">
                          {proj.category}
                        </span>
                        <span className="text-[9px] sm:text-[11px] font-mono font-semibold text-emerald-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200">
                          {proj.badge}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-lg sm:text-2xl lg:text-3xl text-[#0A2540] mb-1.5 sm:mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      <p className="text-slate-500 text-xs sm:text-sm font-mono mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-none">
                        {proj.tagline}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-3 sm:mb-5 font-sans line-clamp-2 sm:line-clamp-none">
                        {proj.description}
                      </p>

                      {/* Engineering Highlights - Show top 2 on mobile to avoid endless scrolling */}
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-6 bg-white p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/80">
                        <div className="text-[9px] sm:text-[11px] font-mono uppercase font-bold text-slate-700 tracking-wider">
                          Key Deliverables
                        </div>
                        {proj.highlights.map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 text-xs sm:text-sm text-slate-600 ${
                              i >= 2 ? "hidden sm:flex" : "flex"
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3.5 sm:mb-6">
                        {proj.tech.map((t, idx) => (
                          <span
                            key={t}
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-mono font-semibold text-slate-700 shadow-xs ${
                              idx >= 3 ? "hidden xs:inline-block" : "inline-block"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row - Compact on mobile */}
                    <div className="flex flex-row items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-200/70">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 min-h-[42px] sm:min-h-[48px] rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white text-[11px] sm:text-xs font-bold font-mono tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
                      >
                        <span>VISIT SITE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                      </a>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3.5 min-h-[42px] sm:min-h-[48px] rounded-full bg-white hover:bg-slate-100 text-[#0A2540] text-[11px] sm:text-xs font-bold font-mono tracking-wider border border-slate-300 shadow-xs active:scale-95 transition-all cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>GITHUB</span>
                      </a>
                    </div>
                  </div>

                </div>
              </ScrollScale>
            );
          })}
        </div>

      </div>
    </section>
  );
}
