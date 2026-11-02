"use client";

import Image from "next/image";
import { Terminal, Video, Cpu, Flame, CheckCircle2, Award, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white">
      {/* Background Subtle Coordinate Lines */}
      <div className="absolute inset-0 bg-graph-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              01 // BIOGRAPHY & VISION
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0A2540] tracking-tight">
              Where Engineering Meets Creative Media.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base mt-4 md:mt-0 font-sans">
            I don&apos;t just talk about software. I engineer full-stack systems and document the process for a community of builders.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Portrait & Studio presence */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-600 font-bold">
                The Architect
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0A2540] mt-1">
                Ming Star
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Based in Southeast Asia, working with teams and clients globally. Specializing in TypeScript architectures, React server components, and interactive visual computing.
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner">
              <Image
                src="/assets/fresh-looking-me.jpeg"
                alt="Ming Star in Studio"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-amber-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Live in Production & Studio
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Dual Core Philosophy */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Top Row: Full Stack Dev + Content Creator Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Dev Box */}
              <div className="bg-[#0A2540] text-white rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-lg shadow-slate-900/10 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 mb-6">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-2">
                    Engineering Pillar
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3">
                    High-Octane Code
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Zero tolerance for spaghetti code. I build clean, testable full-stack systems using Next.js App Router, Tailwind, PostgreSQL, and scalable microservices.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Stack Reliability</span>
                  <span className="text-emerald-400 font-bold">99.9% Uptime</span>
                </div>
              </div>

              {/* Creator Box */}
              <div className="bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] text-[#0A2540] rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-lg shadow-amber-500/15 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0A2540] flex items-center justify-center text-white mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#0A2540]/80 uppercase tracking-widest font-semibold mb-2">
                    Media Pillar
                  </div>
                  <h4 className="font-display font-bold text-xl mb-3">
                    Visual Storytelling
                  </h4>
                  <p className="text-[#0A2540]/90 text-xs sm:text-sm leading-relaxed font-medium">
                    I translate complex software principles, AI breakthroughs, and product workflows into concise, engaging video reels and tutorials.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A2540]/20 flex items-center justify-between text-xs font-mono text-[#0A2540] font-bold">
                  <span>Content Retention</span>
                  <span>High Engagement</span>
                </div>
              </div>

            </div>

            {/* Bottom Row: Key Competencies & Gear */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8">
              <h4 className="font-display font-bold text-lg text-[#0A2540] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                The Core Arsenal
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <div className="font-mono text-xs font-bold text-[#0A2540]">Next.js 16</div>
                  <div className="text-[10px] text-slate-500 mt-1">App Architecture</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <div className="font-mono text-xs font-bold text-[#0A2540]">Three.js & GSAP</div>
                  <div className="text-[10px] text-slate-500 mt-1">Interactive Motion</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <div className="font-mono text-xs font-bold text-[#0A2540]">PostgreSQL / APIs</div>
                  <div className="text-[10px] text-slate-500 mt-1">Data Modeling</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60 shadow-sm">
                  <div className="font-mono text-xs font-bold text-[#0A2540]">4K Production</div>
                  <div className="text-[10px] text-slate-500 mt-1">DaVinci / Audio</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
