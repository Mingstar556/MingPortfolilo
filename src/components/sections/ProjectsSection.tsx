"use client";

import { ExternalLink, ArrowUpRight, Terminal, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  metrics: string;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "HyperMotion 3D Engine",
    subtitle: "Interactive WebGL Spatial Interface",
    category: "Full-Stack & 3D Web",
    description: "Real-time 3D spatial interface built with Next.js, Three.js, and custom GLSL shaders. Features fluid mouse physics, dynamic lighting, and instant model loading.",
    tech: ["Next.js 16", "Three.js", "WebGL / GLSL", "Tailwind CSS", "TypeScript"],
    metrics: "60 FPS &bull; 0.6s LCP",
    liveUrl: "#",
    githubUrl: "https://github.com/mingstar",
    gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
  },
  {
    id: "02",
    title: "PulseCreator Cloud",
    subtitle: "Creator Analytics & Media Pipeline",
    category: "SaaS Platform",
    description: "High-concurrency video processing dashboard with real-time FFmpeg transcoding, webhook listeners, Stripe billing, and subscriber retention analytics.",
    tech: ["React 19", "Node.js", "PostgreSQL", "Redis Queue", "Prisma"],
    metrics: "10K+ Events/sec",
    liveUrl: "#",
    githubUrl: "https://github.com/mingstar",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
  },
  {
    id: "03",
    title: "Vortex Headless Commerce",
    subtitle: "Sub-Second Global E-Commerce",
    category: "Web Architecture",
    description: "Next-gen headless e-commerce store with incremental static regeneration, edge caching, optimistic cart state, and custom checkout flows.",
    tech: ["Next.js App Router", "Server Actions", "Stripe API", "Edge Middleware"],
    metrics: "100/100 Performance",
    liveUrl: "#",
    githubUrl: "https://github.com/mingstar",
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: "04",
    title: "Chronos Editorial UI",
    subtitle: "Digital Magazine & Interactive Typography",
    category: "Motion Experience",
    description: "GSAP ScrollTrigger editorial showcase with pinned narrative timelines, micro-interactions, responsive soundscape, and accessible dark mode.",
    tech: ["GSAP 3", "Lenis Scroll", "Tailwind v4", "Web Audio API"],
    metrics: "Zero CLS &bull; A11y",
    liveUrl: "#",
    githubUrl: "https://github.com/mingstar",
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              03 // ENGINEERED CODEBASES
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0A2540] tracking-tight">
              Selected Software & Systems.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base mt-4 md:mt-0 font-sans">
            Every codebase is crafted for speed, resilience, and real-world scalability. No templates or fragile dependencies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-3xl border border-slate-200/90 bg-gradient-to-br ${proj.gradient} p-8 flex flex-col justify-between hover:shadow-2xl hover:border-slate-300 transition-all duration-300 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-amber-500 transition-colors">
                    {proj.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0A2540] shadow-sm">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#0A2540] mb-2 group-hover:text-amber-600 transition-colors">
                  {proj.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 font-semibold">
                  {proj.subtitle}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/90 border border-slate-200/80 text-[11px] font-mono font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Metrics */}
              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1.5" dangerouslySetInnerHTML={{ __html: proj.metrics }} />

                <div className="flex items-center gap-3">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0A2540] hover:bg-slate-50 shadow-sm transition-all"
                    aria-label="View source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={proj.liveUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white text-xs font-semibold tracking-wider transition-all shadow-md group/btn"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
