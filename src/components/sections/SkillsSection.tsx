"use client";

import { useState } from "react";
import { 
  Code2, 
  Layers, 
  Database, 
  Video, 
  Cpu, 
  Palette, 
  Sparkles, 
  Zap, 
  CheckCircle,
  ExternalLink 
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "creator";
  level: string;
  description: string;
  tag: string;
}

const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "Next.js 16 & React 19",
    category: "frontend",
    level: "Expert",
    description: "App Router, Server Actions, React Compiler, Streaming SSR, and dynamic route cache.",
    tag: "Primary Framework",
  },
  {
    name: "Three.js & WebGL",
    category: "frontend",
    level: "Advanced",
    description: "Custom 3D shaders, procedural meshes, camera parallax, and performance-tuned rendering.",
    tag: "Creative Tech",
  },
  {
    name: "GSAP & Lenis",
    category: "frontend",
    level: "Expert",
    description: "Hardware-accelerated ScrollTrigger sequences, pinned timelines, and kinetic typography.",
    tag: "Motion System",
  },
  {
    name: "TypeScript & Tailwind v4",
    category: "frontend",
    level: "Mastery",
    description: "Strict compile-time type safety, zero-runtime CSS tokens, and component architecture.",
    tag: "Foundation",
  },
  // Backend
  {
    name: "Node.js & Edge Runtimes",
    category: "backend",
    level: "Expert",
    description: "High-throughput APIs, streaming endpoints, WebSocket server connections, and microservices.",
    tag: "Backend Core",
  },
  {
    name: "PostgreSQL & Prisma",
    category: "backend",
    level: "Advanced",
    description: "Relational database schema modeling, connection pooling, indexing, and ACID migrations.",
    tag: "Database",
  },
  {
    name: "Cloud, Docker & CI/CD",
    category: "backend",
    level: "Advanced",
    description: "Containerized deployment workflows, GitHub Actions, Vercel Edge, and Cloudflare DNS.",
    tag: "Infrastructure",
  },
  {
    name: "Authentication & Security",
    category: "backend",
    level: "Advanced",
    description: "OAuth 2.0, JWT stateless sessions, role-based access control, and CORS hardening.",
    tag: "Security",
  },
  // Creator
  {
    name: "DaVinci Resolve & 4K Editing",
    category: "creator",
    level: "Mastery",
    description: "Color grading in DaVinci YRGB Color Managed, timeline pacing, and sound mastering.",
    tag: "Post-Production",
  },
  {
    name: "Motion Graphics & After Effects",
    category: "creator",
    level: "Advanced",
    description: "Kinetic titles, UI screen walkthrough tracking, sound design, and custom intro stingers.",
    tag: "VFX & Motion",
  },
  {
    name: "Tech Storytelling & Scripting",
    category: "creator",
    level: "Expert",
    description: "Translating deep system architecture into engaging 60-second shorts and 15-minute tutorials.",
    tag: "Narrative",
  },
  {
    name: "Brand Collaboration & Sponsorship",
    category: "creator",
    level: "Pro",
    description: "Native SaaS integrations, developer tool reviews, and high-converting audience reach.",
    tag: "Monetization",
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "creator">("all");

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="absolute inset-0 bg-graph-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              02 // CAPABILITIES & ARSENAL
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0A2540] tracking-tight">
              Tech Stack & Media Craft.
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {(["all", "frontend", "backend", "creator"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0A2540] text-amber-400 shadow-md"
                    : "bg-white text-slate-600 hover:text-[#0A2540] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat === "all" ? "All Skills" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors">
                    {skill.tag}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0A2540] mb-2 group-hover:text-amber-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Production Ready</span>
                <span className="text-amber-500 font-bold">100%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Engineering Standards Banner */}
        <div className="mt-12 bg-[#0A2540] text-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Zero Compromise Performance Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Every application built adheres to strict standards: 60 FPS motion, sub-second LCP, 100/100 Lighthouse metrics, and full responsive touch fidelity.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="font-mono font-bold text-xl text-amber-400">60 FPS</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">Motion Rate</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <div className="font-mono font-bold text-xl text-emerald-400">&lt; 0.8s</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">First Load</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <div className="font-mono font-bold text-xl text-cyan-400">A11y</div>
              <div className="text-[10px] font-mono text-slate-400 uppercase">WCAG AA</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
