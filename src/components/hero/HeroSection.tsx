"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, Code2, Video, Sparkles, ExternalLink, Play } from "lucide-react";
import HeroThreeCanvas from "@/components/canvas/HeroThreeCanvas";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 20px tilt
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-graph-grid overflow-hidden"
    >
      {/* 3D Three.js Interactive Floating Elements */}
      <HeroThreeCanvas />

      {/* Decorative Floating Sparkle Elements (from Canva reference) */}
      <div
        className="absolute top-28 right-[32%] w-6 h-6 rounded-full bg-[#F59E0B] shadow-sm animate-float pointer-events-none z-10"
        style={{ transform: `translate(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px)` }}
      />
      <div
        className="absolute top-24 right-[12%] w-7 h-7 bg-[#F97316] sparkle-star animate-float-delayed pointer-events-none z-10"
        style={{ transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)` }}
      />
      <div
        className="absolute bottom-24 right-[6%] w-7 h-7 rounded-full bg-[#0A2540] pointer-events-none z-10"
        style={{ transform: `translate(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px)` }}
      />
      <div
        className="absolute bottom-16 left-[46%] w-8 h-8 bg-[#10B981] sparkle-star animate-float pointer-events-none z-10"
        style={{ transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)` }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-20">
        
        {/* Left Column: Bold Statement Typography matching the Canva PDF */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center text-left order-2 lg:order-1 pt-4 lg:pt-0">
          
          {/* Top Domain Handle Badge (Exact Canva text: @MINGPORTFOLILO.COM) */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-xs font-mono font-bold tracking-wider text-[#0A2540]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            @MINGPORTFOLILO.COM
          </div>

          {/* Main Giant Headline: MY PORTFOLIO */}
          <div className="relative mb-6">
            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] leading-[0.88] tracking-[-0.04em] text-[#0A2540] select-none uppercase">
              MY<br />PORTFOLIO
            </h1>
          </div>

          {/* Sub-badge: MING STAR in solid Navy Bar */}
          <div className="w-full max-w-sm mb-8">
            <div className="bg-[#0A2540] py-3.5 px-8 rounded-lg shadow-md flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-200">
              <span className="font-mono text-sm sm:text-base font-bold tracking-[0.35em] text-white uppercase">
                MING STAR
              </span>
            </div>
          </div>

          {/* Dual Identity Subheading & Tagline */}
          <p className="max-w-lg text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-sans">
            <strong className="text-[#0A2540] font-semibold">Full-Stack Engineer</strong> architecting responsive, high-performance web applications, and{" "}
            <strong className="text-amber-600 font-semibold">Digital Content Creator</strong> breaking down cutting-edge tech and code.
          </p>

          {/* Interactive Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white text-sm font-semibold tracking-wide shadow-lg shadow-slate-950/15 hover:shadow-xl hover:shadow-slate-950/25 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>Explore Projects</span>
            </a>

            <a
              href="#creator"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-[#0A2540] text-[#0A2540] text-sm font-bold tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Watch Reels</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#0A2540]">50K+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Community Reach</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-[#0A2540]">20+</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Shipped Apps</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl text-emerald-600">100%</div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Code Reliability</div>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Yellow Arch + Cutout Photo + Dot Matrices */}
        <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2 relative min-h-[460px] sm:min-h-[560px] lg:min-h-[640px]">
          
          {/* Decorative Dot Matrix: Middle Left (8x5 dots) */}
          <div
            className="absolute left-4 top-1/4 z-0 hidden sm:grid grid-cols-5 gap-3 p-2 pointer-events-none opacity-80"
            style={{ transform: `translate(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px)` }}
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A2540]" />
            ))}
          </div>

          {/* Decorative Dot Matrix: Bottom Right (4x6 dots) */}
          <div
            className="absolute -right-2 bottom-6 z-20 hidden sm:grid grid-cols-4 gap-2.5 p-2 pointer-events-none opacity-90"
            style={{ transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)` }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A2540]" />
            ))}
          </div>

          {/* The Iconic Yellow Arch / Circle Backdrop (Matching Canva Reference) */}
          <div
            className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-[280px] h-[380px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[530px] rounded-t-full rounded-b-[180px] bg-gradient-to-br from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] shadow-2xl shadow-amber-500/25 transition-transform duration-300 ease-out z-10"
            style={{
              transform: `translateY(-50%) translate(${mouseOffset.x * 0.25}px, ${mouseOffset.y * 0.25}px)`,
            }}
          />

          {/* Ming Star Cutout Portrait */}
          <div
            className="relative z-10 w-[300px] sm:w-[420px] lg:w-[480px] aspect-square flex items-end justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mouseOffset.x * -0.35}px, ${mouseOffset.y * -0.35}px)`,
            }}
          >
            <Image
              src="/assets/ming-cutout.png"
              alt="Ming Star - Full-Stack Developer & Content Creator"
              width={1229}
              height={1229}
              priority
              className="object-contain w-full h-auto drop-shadow-[0_20px_35px_rgba(10,37,64,0.18)]"
            />
          </div>

          {/* Interactive Floating Status Card */}
          <div
            className="absolute bottom-4 left-6 sm:left-12 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 flex items-center gap-3.5 transition-transform duration-300"
            style={{
              transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)`,
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Current Focus
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0A2540]">
                Next.js 16 &bull; Three.js &bull; AI Video
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Anchor */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#0A2540] transition-colors cursor-pointer z-20"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-500" />
      </a>
    </section>
  );
}
