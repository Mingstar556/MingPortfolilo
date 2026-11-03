"use client";

import { useState } from "react";
import { 
  Code2, 
  Cpu, 
  Database, 
  Video, 
  CheckCircle2, 
  Zap,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";

interface SkillCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: any;
  skills: {
    name: string;
    tag: string;
    summary: string;
  }[];
}

const categories: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Core Web Architecture",
    tagline: "High-performance interfaces built with modern reactive runtimes.",
    icon: Code2,
    skills: [
      {
        name: "Next.js 16 & React 19",
        tag: "Primary Framework",
        summary: "App Router, Server Actions, React Compiler, Streaming SSR, and Partial Prerendering.",
      },
      {
        name: "TypeScript (Strict)",
        tag: "Type Safety",
        summary: "Strict compile-time guarantees, end-to-end type safety, and clean architecture.",
      },
      {
        name: "Tailwind CSS v4",
        tag: "Design Systems",
        summary: "Zero-runtime CSS compilation, modular token systems, and responsive utility styling.",
      },
      {
        name: "Core Web Vitals",
        tag: "Performance",
        summary: "Zero cumulative layout shifts, sub-second LCP, and 100/100 Lighthouse scores.",
      },
    ],
  },
  {
    id: "motion",
    number: "02",
    title: "Spatial & Kinetic Motion",
    tagline: "Immersive 3D scenes and buttery-smooth 60 FPS interactions.",
    icon: Cpu,
    skills: [
      {
        name: "Three.js & WebGL",
        tag: "Creative Computing",
        summary: "GPU-accelerated meshes, procedural geometries, and dynamic lighting rigs.",
      },
      {
        name: "Custom GLSL Shaders",
        tag: "Shader Math",
        summary: "Vertex distortions, fluid fragment colors, and real-time noise algorithms.",
      },
      {
        name: "GSAP 3 ScrollTrigger",
        tag: "Sequencing",
        summary: "Pinned timelines, scroll-driven choreography, and smooth SVG morphing.",
      },
      {
        name: "Lenis Smooth Scroll",
        tag: "Momentum",
        summary: "Physics-based momentum scroll synchronized with WebGL render loops.",
      },
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Systems & Distributed Data",
    tagline: "Resilient APIs and databases architected for scale.",
    icon: Database,
    skills: [
      {
        name: "Node.js & Edge Functions",
        tag: "Microservices",
        summary: "High-throughput REST & WebSocket endpoints running close to global users.",
      },
      {
        name: "PostgreSQL & Prisma",
        tag: "Data Modeling",
        summary: "Relational schema indexing, connection pooling, and ACID migration pipelines.",
      },
      {
        name: "Docker & Cloudflare CI/CD",
        tag: "DevOps",
        summary: "Containerized reproducible builds, automated GitHub Actions, and DNS caching.",
      },
      {
        name: "Security & Auth",
        tag: "Hardening",
        summary: "OAuth 2.0, stateless session verification, CORS policies, and rate limiting.",
      },
    ],
  },
  {
    id: "creator",
    number: "04",
    title: "Cinematic Media Production",
    tagline: "Storytelling that converts technical complexity into compelling media.",
    icon: Video,
    skills: [
      {
        name: "DaVinci Resolve Studio 4K",
        tag: "Post-Production",
        summary: "YRGB Color Managed science, narrative pacing, and cinematic color grading.",
      },
      {
        name: "Technical Media Scripting",
        tag: "Narrative",
        summary: "Translating deep system design into engaging 60-second shorts and code masterclasses.",
      },
      {
        name: "Studio Sound Engineering",
        tag: "Acoustics",
        summary: "Dynamic multi-track equalization, compression, and clear vocal clarity.",
      },
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories = activeCategory === "all"
    ? categories
    : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Clean, Spacious Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-slate-200/80 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                SKILLS & CAPABILITIES
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Tech Stack & Craft.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 leading-relaxed">
                Curated tools and engineering practices honed through real-world commercial deliverables.
              </p>
            </div>

            {/* Category Filter Pills - Mobile Horizontal Swipe Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 min-h-[38px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 ${
                  activeCategory === "all"
                    ? "bg-[#0A2540] text-amber-400 shadow-sm"
                    : "bg-white text-slate-600 hover:text-[#0A2540] border border-slate-200 hover:border-slate-300"
                }`}
              >
                All Skills
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 min-h-[38px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 ${
                    activeCategory === c.id
                      ? "bg-[#0A2540] text-amber-400 shadow-sm"
                      : "bg-white text-slate-600 hover:text-[#0A2540] border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {c.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Clean & Spacious Grid of Categories */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10" staggerDelay={0.1}>
          {visibleCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem
                key={cat.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group/card hover:-translate-y-1"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-start justify-between pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-slate-100">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 text-[#0A2540] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                          PILLAR // {cat.number}
                        </div>
                        <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A2540]">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* Spacious Skills List */}
                  <div className="space-y-5 sm:space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="group/item">
                        <div className="flex flex-col xs:flex-row xs:items-baseline justify-between gap-1 xs:gap-4 mb-1">
                          <h4 className="font-display font-bold text-sm sm:text-base text-[#0A2540] group-hover/item:text-amber-600 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0 self-start xs:self-auto">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {skill.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    Production Ready
                  </span>
                  <span>100% Verified</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
