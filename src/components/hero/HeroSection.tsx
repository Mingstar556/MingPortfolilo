"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Code2, Video, Sparkles, ExternalLink, Play, Film } from "lucide-react";
import HeroThreeCanvas from "@/components/canvas/HeroThreeCanvas";
import InkRevealCharacter from "@/components/hero/InkRevealCharacter";
import TopVideoReelSpotlight from "@/components/hero/TopVideoReelSpotlight";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTicking = false;

    const updateTransforms = () => {
      // Smooth GPU interpolation without any React re-renders
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      hero.style.setProperty("--mx", `${currentX.toFixed(2)}px`);
      hero.style.setProperty("--my", `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.04 || Math.abs(targetY - currentY) > 0.04) {
        rafId = requestAnimationFrame(updateTransforms);
      } else {
        isTicking = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 20; // max 20px tilt
      targetY = (e.clientY / innerHeight - 0.5) * 20;

      if (!isTicking) {
        isTicking = true;
        rafId = requestAnimationFrame(updateTransforms);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start bg-graph-grid overflow-hidden will-change-contents"
    >
      {/* 3D Three.js Interactive Floating Elements (Subtle & Refined) */}
      <HeroThreeCanvas />

      {/* Decorative Floating Sparkle Stars & Beads (Pure CSS transform via GPU variables) */}
      <div
        className="absolute top-28 right-[36%] w-7 h-7 bg-[#F59E0B] sparkle-star animate-float pointer-events-none z-10 shadow-sm"
        style={{ transform: "translate(calc(var(--mx, 0px) * -0.6), calc(var(--my, 0px) * -0.6))" }}
      />
      <div
        className="absolute top-20 right-[10%] w-8 h-8 bg-[#F97316] sparkle-star animate-float-delayed pointer-events-none z-10"
        style={{ transform: "translate(calc(var(--mx, 0px) * 0.8), calc(var(--my, 0px) * 0.8))" }}
      />
      <div
        className="absolute top-1/2 right-[5%] w-7 h-7 rounded-full bg-[#0A2540] shadow-md pointer-events-none z-10 opacity-75 hidden sm:block"
        style={{ transform: "translate(calc(var(--mx, 0px) * -0.5), calc(var(--my, 0px) * -0.5))" }}
      />
      <div
        className="absolute bottom-32 left-[46%] w-8 h-8 bg-[#10B981] sparkle-star animate-float pointer-events-none z-10 shadow-sm hidden sm:block"
        style={{ transform: "translate(calc(var(--mx, 0px) * 0.5), calc(var(--my, 0px) * 0.5))" }}
      />
      <div
        className="absolute top-36 left-[8%] w-6 h-6 rounded-full bg-[#F59E0B] shadow-sm animate-float-delayed pointer-events-none z-10 opacity-70 hidden sm:block"
        style={{ transform: "translate(calc(var(--mx, 0px) * 0.7), calc(var(--my, 0px) * 0.7))" }}
      />

      {/* Decorative Dot Matrix: Left Side (8x5 dots) */}
      <div
        className="absolute left-4 top-20 z-0 hidden lg:grid grid-cols-5 gap-3 p-2 pointer-events-none opacity-30 select-none"
        style={{ transform: "translate(calc(var(--mx, 0px) * -0.25), calc(var(--my, 0px) * -0.25))" }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A2540]" />
        ))}
      </div>

      {/* Decorative Dot Matrix: Right Side behind character (4x6 dots) */}
      <div
        className="absolute right-8 top-1/4 z-0 hidden lg:grid grid-cols-4 gap-2.5 p-2 pointer-events-none opacity-40 select-none"
        style={{ transform: "translate(calc(var(--mx, 0px) * 0.3), calc(var(--my, 0px) * 0.3))" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0A2540]" />
        ))}
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-20 my-auto">
        
        {/* Left Column: Bold Statement Typography matching the Canva PDF */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-6 flex flex-col items-start justify-center text-left order-2 lg:order-1 pt-4 lg:pt-0"
        >
          
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
              href="#top-reels"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-[#0A2540] text-[#0A2540] text-sm font-bold tracking-wide shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <Play className="w-4 h-4 fill-amber-500 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>Watch Creator Reels</span>
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
        </motion.div>

        {/* Right Column: Clean Cutout Photo + Ink Reveal + Fitted Arch Backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2 relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px]"
        >
          {/* Fitted Architectural Golden Arch Backdrop (from Canva identity) */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[300px] sm:w-[390px] lg:w-[430px] h-[390px] sm:h-[490px] lg:h-[550px] rounded-t-full rounded-b-[140px] bg-gradient-to-br from-[#F59E0B]/25 via-[#FBBF24]/15 to-[#F59E0B]/5 border-2 border-[#F59E0B]/30 shadow-2xl shadow-amber-500/15 backdrop-blur-[2px] pointer-events-none"
            style={{
              transform: "translateY(-50%) translate(calc(var(--mx, 0px) * 0.25), calc(var(--my, 0px) * 0.25))",
            }}
          />

          <div className="relative z-10 w-full flex items-center justify-center">
            <InkRevealCharacter />
          </div>
        </motion.div>

      </div>

      {/* Special Top Feature: Live Video Reel Spotlight */}
      <div className="max-w-7xl w-full mx-auto relative z-20 mt-14 mb-10">
        <TopVideoReelSpotlight />
      </div>

      {/* Scroll Down Anchor */}
      <div className="pt-4 pb-2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#0A2540] transition-colors cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">Explore Journey</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-500" />
        </a>
      </div>
    </section>
  );
}
