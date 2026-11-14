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

interface MarqueeRowProps {
  items: string[];
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

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(direction);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 12;

    // React to user's scroll speed and direction
    const currentVelocity = velocityFactor.get();
    if (currentVelocity !== 0) {
      moveBy += currentVelocity * (delta / 1000) * 8 * directionFactor.current;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate items 4 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap select-none py-1.5">
      <motion.div
        className={`flex items-center gap-6 sm:gap-10 shrink-0 ${className}`}
        style={{ x }}
      >
        {repeatedItems.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
          >
            <span className="text-slate-700 hover:text-[#0A2540] transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 shadow-xs" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocityMarquee() {
  const row1 = [
    "Full-Stack Web MVPs",
    "Next.js 16 App Router",
    "Three.js 3D WebGL",
    "Sub-Second Hydration",
    "100/100 Lighthouse Speed",
    "Tailwind CSS v4",
    "Strict TypeScript",
    "100% Code Ownership",
  ];

  const row2 = [
    "Commercially Tested",
    "Zero Layout Shift (CLS)",
    "Bespoke Responsive UI",
    "Reliable PostgreSQL",
    "60 FPS Kinetic Motion",
    "Direct Founder Collaboration",
    "Automated CI/CD Deployments",
    "Production-Grade Security",
  ];

  return (
    <div className="relative w-full py-4 sm:py-6 bg-[#0A2540] text-white overflow-hidden border-y border-slate-800 shadow-inner">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-graph-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-16 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-16 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Row 1: Leftward Scroll with velocity acceleration */}
      <MarqueeRow
        items={row1}
        baseVelocity={-0.8}
        direction={-1}
        className="text-amber-300"
      />

      {/* Row 2: Rightward Scroll for counter-flow dynamism */}
      <MarqueeRow
        items={row2}
        baseVelocity={0.8}
        direction={1}
        className="text-slate-300 opacity-80"
      />
    </div>
  );
}
