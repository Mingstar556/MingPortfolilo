"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Eye, Sparkles, Film, Radio, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/common/ScrollReveal";

interface ReelItem {
  id: string;
  number: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  views: string;
  description: string;
  tag: string;
}

const reels: ReelItem[] = [
  {
    id: "reel-1",
    number: "01",
    title: "Architecting Next-Gen Web Engines",
    category: "Architecture & Code",
    videoSrc: "/assets/videos/reel-1.mp4",
    posterSrc: "/assets/videos/poster-1.jpg",
    views: "42.8K",
    description: "Deep dive into real-world state management, zero layout shifts, and high-FPS animation cycles.",
    tag: "Next.js 16 & Three.js",
  },
  {
    id: "reel-2",
    number: "02",
    title: "Creator-Engineer Routine & Studio",
    category: "Day In Life & Tech",
    videoSrc: "/assets/videos/reel-2.mp4",
    posterSrc: "/assets/videos/poster-2.jpg",
    views: "68.2K",
    description: "Balancing high-stakes client software deliverables while producing daily technical media.",
    tag: "Studio & Production",
  },
  {
    id: "reel-3",
    number: "03",
    title: "Cinematic Web Experiences",
    category: "Tutorial & Showcase",
    videoSrc: "/assets/videos/reel-3.mp4",
    posterSrc: "/assets/videos/poster-3.jpg",
    views: "94.5K",
    description: "Combining Three.js 3D meshes with GSAP and Lenis for silky smooth 60 FPS interactions.",
    tag: "Spatial UI & Motion",
  },
];

export default function TopVideoReelSpotlight() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = reels[activeReelIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  }, [activeReelIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      if (!video.src || !video.src.includes(activeReel.videoSrc)) {
        video.src = activeReel.videoSrc;
        video.load();
      }
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <FadeUp id="top-reels" className="w-full mt-10 pt-8 border-t border-slate-200/80">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#0A2540] text-amber-400 flex items-center justify-center shadow-sm shrink-0">
            <Film className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
              FEATURED CREATOR BROADCAST
            </div>
            <h3 className="font-display font-black text-base sm:text-lg text-[#0A2540] tracking-tight">
              Video Reels & Engineering Media
            </h3>
          </div>
        </div>

        {/* Reel Selector Tabs - Touch Friendly Horizontal Strip */}
        <div className="inline-flex p-1 rounded-full bg-slate-200/70 border border-slate-300/60 backdrop-blur-sm self-start sm:self-auto overflow-x-auto max-w-full no-scrollbar">
          {reels.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => setActiveReelIndex(idx)}
              className={`px-3 sm:px-4 py-1.5 min-h-[36px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                activeReelIndex === idx
                  ? "bg-[#0A2540] text-amber-400 shadow-sm"
                  : "text-slate-600 hover:text-[#0A2540]"
              }`}
            >
              Reel {reel.number}
            </button>
          ))}
        </div>
      </div>

      {/* Main Special Reel Card - Wide Cinematic Glass Theater */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2540] via-[#0E2F52] to-[#0A2540] text-white p-4 sm:p-7 shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Video Player Column (5 Cols) */}
        <div className="md:col-span-5 relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-xl group border border-white/10">
          <video
            ref={videoRef}
            src={activeReel.videoSrc}
            poster={activeReel.posterSrc}
            preload="none"
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover filter contrast-[1.05]"
          />

          {/* Interactive Play Overlay with 56px Touch Target */}
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-black/35 flex items-center justify-center cursor-pointer group-hover:bg-black/15 transition-colors"
          >
            <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-amber-400 text-[#0A2540] flex items-center justify-center shadow-xl shadow-amber-400/30 transform group-hover:scale-110 active:scale-90 transition-transform">
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </div>
          </div>

          {/* Category Badge & Sound Button Overlay (44px min touch target for sound) */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold uppercase tracking-widest text-amber-300 border border-white/10">
              {activeReel.category}
            </span>

            <button
              onClick={toggleMute}
              className="pointer-events-auto w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 active:scale-95"
              aria-label="Toggle Sound"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-amber-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </button>
          </div>

          {/* Views Ticker */}
          <div className="absolute bottom-3 left-3 pointer-events-none">
            <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1 border border-white/10">
              <Eye className="w-3 h-3 text-emerald-400" />
              {activeReel.views}
            </span>
          </div>
        </div>

        {/* Video Narrative & Details Column (7 Cols) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full py-1">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                REEL // {activeReel.number} &bull; 4K RESOLUTION
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                {activeReel.tag}
              </span>
            </div>

            <h4 className="font-display font-black text-lg sm:text-xl lg:text-2xl text-white mb-2 leading-snug">
              {activeReel.title}
            </h4>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {activeReel.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-2 py-2 min-h-[40px] text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer active:scale-95"
            >
              <span>{isPlaying ? "Pause Stream" : "Watch Full Reel"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Broadcast Live</span>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
