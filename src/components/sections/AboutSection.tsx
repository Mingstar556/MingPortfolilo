"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Video, 
  Cpu, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Flame,
  Zap
} from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, PopUp, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"engineer" | "creator">("engineer");

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBFCFD] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-graph-grid opacity-30 pointer-events-none" />

      {/* Ambient Lighting Accents */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-[#0A2540]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Top Bar */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/80 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 text-[#0A2540] text-xs font-mono font-bold tracking-wider uppercase mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                01 // BIOGRAPHY & DUAL CORE VISION
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Architecting Systems.<br />
                <span className="text-amber-500">Broadcasting Knowledge.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Select Operating Mode:
              </span>
              {/* Interactive Duality Switcher */}
              <div className="grid grid-cols-2 p-1 rounded-full bg-slate-200/70 border border-slate-300/60 shadow-inner w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab("engineer")}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 min-h-[40px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === "engineer"
                      ? "bg-[#0A2540] text-amber-400 shadow-md"
                      : "text-slate-600 hover:text-[#0A2540]"
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">The Engineer</span>
                </button>

                <button
                  onClick={() => setActiveTab("creator")}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 min-h-[40px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === "creator"
                      ? "bg-amber-400 text-[#0A2540] shadow-md"
                      : "text-slate-600 hover:text-[#0A2540]"
                  }`}
                >
                  <Video className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">The Creator</span>
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Unique Asymmetric Layout: Dynamic Stage + Studio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Interactive Mode Stage (7 Cols) */}
          <FadeLeft className="lg:col-span-7 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
            {activeTab === "engineer" ? (
              /* Engineering Pillar Display */
              <motion.div
                key="engineer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A2540] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-slate-800"
              >
                {/* Tech Watermark */}
                <div className="absolute top-4 right-6 font-mono text-5xl sm:text-7xl font-black text-white/5 select-none pointer-events-none">
                  &lt;/&gt;
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                    <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold">
                      Core Engineering Discipline
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Zero Latency Tolerance
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                    Full-Stack Precision With Zero Layout Shift.
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-sans">
                    I treat code as an engineering artifact. Specializing in modern Next.js 16 architectures, custom Three.js WebGL shaders, PostgreSQL data pipelines, and hardware-accelerated animations that sustain 60 FPS under heavy rendering loads.
                  </p>

                  {/* Real-time Code Telemetry Box */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2 mb-6 sm:mb-8 shadow-inner overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-[11px] text-slate-400 min-w-[280px]">
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 font-bold text-slate-200">architecture.config.ts</span>
                      </span>
                      <span className="text-amber-400 font-semibold">STRICT COMPILE</span>
                    </div>
                    <div className="min-w-[280px]">
                      <p className="text-amber-300 pt-1">
                        <span className="text-slate-500">// Real-world execution standards</span>
                      </p>
                      <p>
                        <span className="text-pink-400">export const</span> <span className="text-cyan-300">stackStandards</span> = &#123;
                      </p>
                      <p className="pl-4">
                        runtime: <span className="text-amber-400">&quot;Next.js 16 App Router + Turbopack&quot;</span>,
                      </p>
                      <p className="pl-4">
                        performance: <span className="text-emerald-400">&quot;100/100 Lighthouse &bull; Sub-Second LCP&quot;</span>,
                      </p>
                      <p className="pl-4">
                        motionRate: <span className="text-cyan-300">&quot;60 FPS Fluid Three.js Shaders&quot;</span>,
                      </p>
                      <p>&#125;;</p>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="pt-5 sm:pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">99.9%</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase mt-0.5 leading-tight">Uptime</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">&lt; 0.6s</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase mt-0.5 leading-tight">Hydration</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">Zero</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase mt-0.5 leading-tight">CLS Shift</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Creator Pillar Display */
              <motion.div
                key="creator"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-br from-amber-400 via-[#FBBF24] to-amber-500 text-[#0A2540] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-amber-300 transition-all duration-500 animate-in fade-in"
              >
                {/* Media Watermark */}
                <div className="absolute top-4 right-6 font-mono text-5xl sm:text-7xl font-black text-[#0A2540]/5 select-none pointer-events-none">
                  REC
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#0A2540] text-amber-300 text-xs font-mono uppercase tracking-widest font-semibold">
                      Digital Media Hub
                    </span>
                    <span className="text-xs font-mono text-[#0A2540] flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                      Broadcasting Daily
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A2540] mb-3 sm:mb-4 leading-tight">
                    Demystifying Deep Tech For Modern Builders.
                  </h3>

                  <p className="text-[#0A2540]/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-sans font-medium">
                    Software without communication stays invisible. I build media pipelines that break down intricate developer tooling, AI integrations, and full-stack design systems into viral, high-retention 60-second video reels and in-depth architecture masterclasses.
                  </p>

                  {/* Production Studio Gear Pill Board */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 sm:mb-8">
                    <div className="bg-white/80 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#0A2540]/10">
                      <div className="text-xs font-bold font-mono uppercase text-[#0A2540]">4K Cinematic Pipeline</div>
                      <div className="text-[11px] text-slate-700 mt-1">DaVinci Resolve YRGB color science & custom LUTs.</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-[#0A2540]/10">
                      <div className="text-xs font-bold font-mono uppercase text-[#0A2540]">Audience Engagement</div>
                      <div className="text-[11px] text-slate-700 mt-1">50K+ developers across YouTube Shorts & TikTok.</div>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="pt-5 sm:pt-6 border-t border-[#0A2540]/20 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#0A2540]">50K+</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#0A2540]/80 uppercase mt-0.5 leading-tight">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#0A2540]">1.5M+</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#0A2540]/80 uppercase mt-0.5 leading-tight">Impressions</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#0A2540]">4K 60</div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#0A2540]/80 uppercase mt-0.5 leading-tight">Fidelity</div>
                  </div>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </FadeLeft>

          {/* Right Column: Editorial Studio Profile (5 Cols) */}
          <FadeRight className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-900/5 relative group h-full">
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-600 font-bold">
                  STUDIO ARCHIVE PROFILE
                </span>
                <span className="text-xs font-mono text-slate-400">
                  REF // MS-2026
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-[#0A2540]">
                Ming Star
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Operating at the confluence of engineering rigor and digital aesthetics. Available globally for bespoke client platforms and developer tool partnerships.
              </p>
            </div>

            {/* Stylized Portrait Card (Optimized WebP, 49KB vs 1.8MB) */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
              <Image
                src="/assets/fresh-looking-me.webp"
                alt="Ming Star in Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-mono text-amber-300 font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Available for Q1/Q2 Contracts
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 uppercase px-2 py-0.5 rounded bg-black/40 backdrop-blur-md">
                    Global Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Competencies Footer */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Focus Areas</span>
              <span className="font-bold text-[#0A2540]">TypeScript &bull; Next.js &bull; Creative Code</span>
            </div>
          </FadeRight>

        </div>

      </div>
    </section>
  );
}
