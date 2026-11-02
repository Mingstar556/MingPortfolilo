"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Bangkok",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07192C] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#0A2540] border border-amber-400/40 flex items-center justify-center text-amber-400 font-mono font-bold text-xs tracking-wider">
            MS
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-white">
              MING STAR
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Full-Stack Web Dev &bull; Content Creator
            </div>
          </div>
        </div>

        {/* Local Time Ticker & Direct Contacts */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>BKK / UTC+7: {time || "12:00:00 PM"}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <a
              href="https://t.me/mingstar01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              TG: @mingstar01
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href="https://www.tiktok.com/@ming.star"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-400 transition-colors"
            >
              TikTok: @ming.star
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href="tel:060206666"
              className="hover:text-emerald-400 transition-colors"
            >
              TEL: 060206666
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href="https://github.com/mingstar556"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-slate-500">
            &copy; 2026 Ming Star. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-[#0A2540] text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
