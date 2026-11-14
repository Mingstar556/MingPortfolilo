"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight } from "@/components/common/ScrollReveal";
import InteractiveNetworkBackground from "@/components/canvas/InteractiveNetworkBackground";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBFCFD] overflow-hidden">
      {/* Background Architectural Grid Lines with Live Telemetry Packets */}
      <div className="absolute inset-0 bg-graph-grid opacity-30 pointer-events-none" />
      <InteractiveNetworkBackground />

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
                01 // INDEPENDENT WEB DEVELOPER
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Engineering Web Platforms.<br />
                <span className="text-amber-500">Driving Business Growth.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>DIRECT FOUNDER COLLABORATION</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Unique Asymmetric Layout: Dynamic Stage + Studio Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Commercial Engineering Philosophy (7 Cols) */}
          <FadeLeft className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="bg-[#0A2540] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-slate-800">
              {/* Tech Watermark */}
              <div className="absolute top-4 right-6 font-mono text-5xl sm:text-7xl font-black text-white/5 select-none pointer-events-none">
                &lt;/&gt;
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                  <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold">
                    Freelance Web Engineering
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Zero Fluff &bull; Direct Delivery
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                  Full-Stack Architecture Built For Speed, Scale, And Conversions.
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-sans">
                  I partner directly with founders, growing companies, and design teams to build reliable web applications. You work directly with the engineer writing your code: no agency middlemen, no communication lag, and no unexpected delays. Every project is delivered with strict TypeScript typing, sub-second load times, and complete source code ownership.
                </p>

                {/* Real-time Code Telemetry Box with Live Scanning Laser */}
                <div className="relative overflow-hidden bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2 mb-6 sm:mb-8 shadow-inner overflow-x-auto no-scrollbar group/telemetry">
                  {/* Live Telemetry Scan Line */}
                  <div className="absolute inset-x-0 -top-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent pointer-events-none animate-scan-telemetry" />

                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-[11px] text-slate-400 min-w-[280px]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 font-bold text-slate-200">freelance.standards.ts</span>
                    </span>
                    <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>COMMERCIAL GRADE</span>
                    </span>
                  </div>
                  <div className="min-w-[280px]">
                    <p className="text-amber-300 pt-1">
                      <span className="text-slate-500">{"// Client delivery standards"}</span>
                    </p>
                    <p>
                      <span className="text-pink-400">export const</span> <span className="text-cyan-300">clientCommitments</span> = &#123;
                    </p>
                    <p className="pl-4">
                      runtime: <span className="text-amber-400">&quot;Next.js 16 App Router + Turbopack&quot;</span>,
                    </p>
                    <p className="pl-4">
                      performance: <span className="text-emerald-400">&quot;100/100 Lighthouse &bull; Sub-Second LCP&quot;</span>,
                    </p>
                    <p className="pl-4">
                      ownership: <span className="text-cyan-300">&quot;100% IP &amp; Automated CI/CD Deployments&quot;</span>,
                    </p>
                    <p className="pl-4">
                      communication: <span className="text-amber-300">&quot;Direct Async Slack / Telegram &bull; 24h SLA&quot;</span>,
                      <span className="inline-block w-1.5 h-3.5 bg-amber-400 ml-1.5 animate-pulse align-middle" />
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
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">100%</div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase mt-0.5 leading-tight">Code Handover</div>
                </div>
              </div>
            </div>
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
                Operating at the confluence of engineering rigor and digital aesthetics. Available globally for bespoke client platforms, full-stack MVP builds, and web performance overhauls.
              </p>
            </div>

            {/* Stylized Portrait Card (Optimized WebP) */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
              <Image
                src="/assets/fresh-looking-me.webp"
                alt="Ming Star - Freelance Web Developer"
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
              <span className="text-slate-500">Core Scopes</span>
              <span className="font-bold text-[#0A2540]">Full-Stack &bull; Interactive 3D &bull; Speed</span>
            </div>
          </FadeRight>

        </div>

      </div>
    </section>
  );
}
