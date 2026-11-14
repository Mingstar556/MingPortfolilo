"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";

interface MarqueeChip {
  text: string;
  category: string;
  colorClass: string;
  badgeBg: string;
  dotColor: string;
  glowColor: string;
}

interface MarqueeRowProps {
  items: MarqueeChip[];
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function MarqueeRow({
  items,
  baseVelocity = 1.2,
  direction = 1,
  className = "",
}: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(direction);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 12;

    // React dynamically to user scroll speed and direction
    const currentVelocity = velocityFactor.get();
    if (currentVelocity !== 0) {
      moveBy += currentVelocity * (delta / 1000) * 9 * directionFactor.current;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate items 4 times for seamless infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap select-none py-2">
      <motion.div
        className={`flex items-center gap-4 sm:gap-6 shrink-0 ${className}`}
        style={{ x }}
      >
        {repeatedItems.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-md backdrop-blur-sm group/chip cursor-default"
            style={{
              boxShadow: `0 4px 20px -2px ${item.glowColor}`,
            }}
          >
            {/* Pulsing Colored Status Dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: item.dotColor }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: item.dotColor }}
              />
            </span>

            {/* Category Indicator Tag */}
            <span
              className={`text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${item.badgeBg}`}
            >
              {item.category}
            </span>

            {/* Main Colored Title with High-Contrast Typography */}
            <span
              className={`font-display font-extrabold text-xs sm:text-sm tracking-wide ${item.colorClass} group-hover/chip:brightness-125 transition-all`}
            >
              {item.text}
            </span>

            {/* Separator Ornament */}
            <span className="text-white/20 text-xs ml-1 font-mono select-none">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocityMarquee() {
  // Row 1: High-energy web architecture & motion capabilities with distinct color coding
  const row1: MarqueeChip[] = [
    {
      text: "Next.js 16 App Router",
      category: "RUNTIME",
      colorClass: "text-cyan-300",
      badgeBg: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
      dotColor: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
    {
      text: "Three.js 3D WebGL",
      category: "CREATIVE",
      colorClass: "text-amber-400",
      badgeBg: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
      dotColor: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.18)",
    },
    {
      text: "Sub-Second LCP Speed",
      category: "PERFORMANCE",
      colorClass: "text-emerald-400",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
      dotColor: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
    {
      text: "Tailwind CSS v4 Styling",
      category: "DESIGN",
      colorClass: "text-sky-300",
      badgeBg: "bg-sky-500/15 text-sky-300 border border-sky-500/30",
      dotColor: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.15)",
    },
    {
      text: "Full-Stack MVP Builds",
      category: "PRODUCT",
      colorClass: "text-orange-400",
      badgeBg: "bg-orange-500/15 text-orange-300 border border-orange-500/30",
      dotColor: "#FB923C",
      glowColor: "rgba(251, 146, 60, 0.15)",
    },
    {
      text: "Strict TypeScript Safety",
      category: "ENGINE",
      colorClass: "text-blue-300",
      badgeBg: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
      dotColor: "#60A5FA",
      glowColor: "rgba(96, 165, 250, 0.15)",
    },
    {
      text: "100/100 Lighthouse Audit",
      category: "VITALS",
      colorClass: "text-lime-300",
      badgeBg: "bg-lime-500/15 text-lime-300 border border-lime-500/30",
      dotColor: "#A3E635",
      glowColor: "rgba(163, 230, 53, 0.15)",
    },
    {
      text: "100% Code IP Ownership",
      category: "GUARANTEE",
      colorClass: "text-yellow-300",
      badgeBg: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
      dotColor: "#FACC15",
      glowColor: "rgba(250, 204, 21, 0.15)",
    },
  ];

  // Row 2: Database, commerce, and engineering standards
  const row2: MarqueeChip[] = [
    {
      text: "Zero Layout Shift (CLS)",
      category: "STABILITY",
      colorClass: "text-emerald-300",
      badgeBg: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
      dotColor: "#34D399",
      glowColor: "rgba(52, 211, 153, 0.15)",
    },
    {
      text: "GSAP 3 ScrollTrigger",
      category: "KINETIC",
      colorClass: "text-purple-300",
      badgeBg: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
      dotColor: "#C084FC",
      glowColor: "rgba(192, 132, 252, 0.15)",
    },
    {
      text: "Reliable PostgreSQL & Prisma",
      category: "DATABASE",
      colorClass: "text-indigo-300",
      badgeBg: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
      dotColor: "#818CF8",
      glowColor: "rgba(129, 140, 248, 0.15)",
    },
    {
      text: "Stripe & Checkout Systems",
      category: "COMMERCE",
      colorClass: "text-violet-300",
      badgeBg: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
      dotColor: "#A78BFA",
      glowColor: "rgba(167, 139, 250, 0.15)",
    },
    {
      text: "Direct Async Founder Sync",
      category: "WORKFLOW",
      colorClass: "text-pink-300",
      badgeBg: "bg-pink-500/15 text-pink-300 border border-pink-500/30",
      dotColor: "#F472B6",
      glowColor: "rgba(244, 114, 182, 0.15)",
    },
    {
      text: "Turbopack Fast Hydration",
      category: "COMPILER",
      colorClass: "text-rose-300",
      badgeBg: "bg-rose-500/15 text-rose-300 border border-rose-500/30",
      dotColor: "#FB7185",
      glowColor: "rgba(251, 113, 133, 0.15)",
    },
    {
      text: "Automated CI/CD Pipelines",
      category: "DEVOPS",
      colorClass: "text-teal-300",
      badgeBg: "bg-teal-500/15 text-teal-300 border border-teal-500/30",
      dotColor: "#2DD4BF",
      glowColor: "rgba(45, 212, 191, 0.15)",
    },
    {
      text: "Sub-Second Interactive TTI",
      category: "METRIC",
      colorClass: "text-cyan-400",
      badgeBg: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30",
      dotColor: "#22D3EE",
      glowColor: "rgba(34, 211, 238, 0.15)",
    },
  ];

  return (
    <div className="relative w-full py-5 sm:py-7 bg-gradient-to-r from-[#07192C] via-[#0A2540] to-[#07192C] text-white overflow-hidden border-y border-slate-800/90 shadow-2xl">
      {/* Dynamic Background Aurora Glows */}
      <div className="absolute inset-0 bg-graph-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-24 bg-amber-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-24 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-20 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Row 1: Leftward Scroll with kinetic velocity */}
      <MarqueeRow
        items={row1}
        baseVelocity={-0.9}
        direction={-1}
      />

      {/* Row 2: Rightward Counter-Flow Scroll */}
      <MarqueeRow
        items={row2}
        baseVelocity={0.9}
        direction={1}
      />
    </div>
  );
}
