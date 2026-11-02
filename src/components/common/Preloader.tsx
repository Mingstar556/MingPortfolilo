"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => {
              setIsRemoved(true);
              if (onComplete) onComplete();
            }, 600);
          }, 200);
          return 100;
        }
        // Organic easing speed
        const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
        return Math.min(100, prev + increment);
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07192C] text-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isLoaded ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-graph-grid opacity-15 pointer-events-none" />

      {/* Floating Accent Sparkle */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-[#F59E0B] sparkle-star animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-[#10B981] sparkle-star animate-bounce" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram Badge */}
        <div className="w-14 h-14 mb-8 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] p-[2px] shadow-lg shadow-amber-500/20">
          <div className="w-full h-full bg-[#0A2540] rounded-[14px] flex items-center justify-center font-bold tracking-widest text-amber-400 font-mono text-xl">
            MS
          </div>
        </div>

        {/* Brand Title */}
        <div className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-400 mb-2">
          MING STAR • ARCHITECTURE & MEDIA
        </div>
        <div className="font-display text-2xl font-bold tracking-tight text-white mb-6">
          Initializing Digital Experience
        </div>

        {/* Progress bar container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#F59E0B] via-amber-300 to-[#10B981] rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 font-mono text-sm tracking-widest text-amber-400 font-semibold">
          {progress < 10 ? `0${progress}` : progress}%
        </div>
      </div>
    </div>
  );
}
