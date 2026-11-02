"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Eye, Share2, Sparkles, CheckCircle2, Film, Radio, Zap } from "lucide-react";

interface VideoReel {
  id: string;
  number: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  views: string;
  aspect: string;
  description: string;
  tags: string[];
}

const reels: VideoReel[] = [
  {
    id: "reel-1",
    number: "01",
    title: "Behind The Scenes: Architecting Next-Gen Web Engines",
    category: "Architecture & Code",
    videoSrc: "/assets/videos/reel-1.mp4",
    posterSrc: "/assets/videos/poster-1.jpg",
    views: "42.8K",
    aspect: "aspect-video",
    description: "Deep dive into real-world state management, zero-layout shifts, and high-frequency animation cycles.",
    tags: ["Next.js 16", "Three.js", "State Engine"],
  },
  {
    id: "reel-2",
    number: "02",
    title: "The Creator-Engineer Routine: Studio & Workflow Breakdown",
    category: "Day In Life & Tech",
    videoSrc: "/assets/videos/reel-2.mp4",
    posterSrc: "/assets/videos/poster-2.jpg",
    views: "68.2K",
    aspect: "aspect-square",
    description: "Balancing high-stakes client software deliverables while producing daily technical media.",
    tags: ["Studio Routine", "DaVinci 4K", "Productivity"],
  },
  {
    id: "reel-3",
    number: "03",
    title: "Cinematic Web Experiences: Three.js & Modern Motion",
    category: "Tutorial & Showcase",
    videoSrc: "/assets/videos/reel-3.mp4",
    posterSrc: "/assets/videos/poster-3.jpg",
    views: "94.5K",
    aspect: "aspect-video",
    description: "How to combine Three.js 3D meshes with GSAP and Lenis for silky smooth 60 FPS interactions.",
    tags: ["WebGL", "GLSL Shaders", "GSAP 3"],
  },
];

export default function CreatorSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (activeVideoId === id) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
        setActiveVideoId(null);
      }
    } else {
      if (activeVideoId && videoRefs.current[activeVideoId]) {
        videoRefs.current[activeVideoId]?.pause();
      }
      video.play();
      setActiveVideoId(id);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.muted = !isMuted;
    });
  };

  return (
    <section id="creator" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#07192C] text-white relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 bg-graph-grid opacity-10 pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-slate-700/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              04 // CINEMATIC MEDIA LAB & REELS
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              Developer Reels &<br />
              <span className="text-amber-400">Creator Broadcasts.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Audio Visualizer Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-1.5 h-3 bg-amber-400 animate-pulse rounded-full" />
              <span className="w-1.5 h-5 bg-amber-400 animate-pulse delay-75 rounded-full" />
              <span className="w-1.5 h-2 bg-amber-400 animate-pulse delay-150 rounded-full" />
              <span className="ml-1 text-[11px]">STUDIO AUDIO</span>
            </div>

            <button
              onClick={toggleMute}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer border border-white/10 shadow-md active:scale-95"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span>{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {reels.map((reel) => {
            const isPlaying = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300"
              >
                {/* Video Container */}
                <div
                  className={`relative w-full ${reel.aspect} bg-black cursor-pointer overflow-hidden`}
                  onClick={() => togglePlay(reel.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoSrc}
                    poster={reel.posterSrc}
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 filter contrast-[1.05]"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`} />

                  {/* Play/Pause Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-14 h-14 rounded-full bg-amber-400 text-[#0A2540] flex items-center justify-center shadow-xl shadow-amber-400/30 transform transition-all duration-300 ${
                        isPlaying ? "opacity-0 scale-75 group-hover:opacity-90 group-hover:scale-100" : "opacity-100 scale-100 group-hover:scale-110"
                      }`}
                    >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </div>
                  </div>

                  {/* Category & Views Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold border border-white/10">
                      {reel.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      {reel.views}
                    </span>
                  </div>
                </div>

                {/* Video Info Box */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-amber-400 font-bold">REEL // {reel.number}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {reel.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {reel.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => togglePlay(reel.id)}
                      className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      {isPlaying ? "Pause Stream" : "Watch Full Reel"}
                    </button>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      4K Ultra HD
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-md">
            <h4 className="font-display font-bold text-base text-amber-400 mb-2 flex items-center gap-2">
              <Film className="w-4 h-4" />
              Short-Form Engineering Reels
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rapid 60-second architecture breakdowns, tips, and visual syntax explainers across YouTube Shorts, Instagram, and TikTok.
            </p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-md">
            <h4 className="font-display font-bold text-base text-emerald-400 mb-2 flex items-center gap-2">
              <Radio className="w-4 h-4" />
              System Design & Masterclasses
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full-length code-along tutorials dissecting real-world applications, database schemas, and spatial computing patterns.
            </p>
          </div>
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-md">
            <h4 className="font-display font-bold text-base text-cyan-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Sponsor Integrations
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Authentic developer-first tool reviews, SaaS integrations, and cloud infrastructure showcases tailored for high-conversion reach.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
