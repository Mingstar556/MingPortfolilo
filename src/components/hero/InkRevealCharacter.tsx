"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface InkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  life: number;
  decay: number;
  seed: number;
  isSplatter: boolean;
}

export default function InkRevealCharacter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const interactedRef = useRef(false);

  // Artistic watercolor pigment palette
  const pigmentPalette = [
    { r: 245, g: 158, b: 11 },  // Honey Amber
    { r: 236, g: 72, b: 153 },  // Quinacridone Magenta
    { r: 6, g: 182, b: 212 },   // Vibrant Cyan
    { r: 249, g: 115, b: 22 },  // Saffron Orange
    { r: 139, g: 92, b: 246 },  // Royal Violet
    { r: 10, g: 37, b: 64 },    // Deep Midnight Navy
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: InkParticle[] = [];
    let lastX = -1000;
    let lastY = -1000;
    let lastTime = performance.now();

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Realistic ink droplet generation
    const spawnInkDrop = (
      x: number,
      y: number,
      speed: number,
      vx: number,
      vy: number,
      isSplatter = false
    ) => {
      if (!interactedRef.current) {
        interactedRef.current = true;
        setHasInteracted(true);
      }
      const color = pigmentPalette[Math.floor(Math.random() * pigmentPalette.length)];

      const baseRadius = isSplatter
        ? Math.random() * 4 + 2
        : Math.min(36, Math.max(12, speed * 1.8 + Math.random() * 10));

      const targetRadius = isSplatter
        ? baseRadius * (1.2 + Math.random() * 0.4)
        : baseRadius * (1.5 + Math.random() * 0.6);

      // Clamp max particles to 30 for high-FPS performance
      if (particles.length > 30) {
        particles.splice(0, particles.length - 30);
      }

      particles.push({
        x,
        y,
        vx: vx * 0.2 + (Math.random() - 0.5) * (isSplatter ? 3.5 : 1.2),
        vy: vy * 0.2 + (Math.random() - 0.5) * (isSplatter ? 3.5 : 1.2) + 0.08, // gentle gravity drip
        radius: isSplatter ? baseRadius : 4, // bloom outward from small impact point
        targetRadius,
        r: color.r,
        g: color.g,
        b: color.b,
        alpha: isSplatter ? 0.9 : 0.82,
        life: 1.0,
        decay: isSplatter ? 0.02 + Math.random() * 0.02 : 0.009 + Math.random() * 0.006,
        seed: Math.random() * 100,
        isSplatter,
      });
    };

    // Interpolate continuous ink ribbon between frames for realism
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const now = performance.now();
      const dt = Math.max(1, now - lastTime);

      if (lastX > -500 && lastY > -500) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const speed = (dist / dt) * 8;

        // Step interpolation along mouse path to prevent gap-dots
        const stepSize = Math.max(8, Math.min(18, dist / 8));
        const steps = Math.max(1, Math.floor(dist / stepSize));

        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          const ix = lastX + dx * t;
          const iy = lastY + dy * t;
          spawnInkDrop(ix, iy, speed, dx / dt, dy / dt, false);
        }

        // Fast flick flings satellite micro-splatters
        if (speed > 14) {
          const splatterCount = Math.min(4, Math.floor(speed * 0.25));
          for (let sp = 0; sp < splatterCount; sp++) {
            const angle = Math.random() * Math.PI * 2;
            const throwDist = Math.random() * 40 + 15;
            spawnInkDrop(
              x + Math.cos(angle) * throwDist,
              y + Math.sin(angle) * throwDist,
              speed,
              dx / dt,
              dy / dt,
              true
            );
          }
        }
      } else {
        spawnInkDrop(x, y, 4, 0, 0, false);
      }

      lastX = x;
      lastY = y;
      lastTime = now;
    };

    const handlePointerLeave = () => {
      lastX = -1000;
      lastY = -1000;
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("touchmove", handlePointerMove, { passive: true });
    container.addEventListener("mouseleave", handlePointerLeave);

    // Subtle ambient ink bloom if idle
    let idleCounter = 0;
    let isVisible = true;

    // Intersection observer to completely stop RAF render loop when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Render loop with organic watercolor boundary and wet edges
    const render = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(render);

      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      idleCounter++;
      if (idleCounter % 160 === 0 && particles.length < 4) {
        const ax = rect.width * (0.42 + (Math.random() - 0.5) * 0.25);
        const ay = rect.height * (0.45 + (Math.random() - 0.5) * 0.3);
        spawnInkDrop(ax, ay, 2, 0, 0, false);
      }

      ctx.save();
      ctx.globalCompositeOperation = "source-over";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;

        // Diffusion expansion
        if (p.radius < p.targetRadius) {
          p.radius += (p.targetRadius - p.radius) * 0.12;
        }

        // Slight fluid drift & curl
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94; // friction
        p.vy *= 0.94;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw organic watercolor drop with multi-harmonic irregular boundary
        const currentAlpha = Math.max(0, p.alpha * Math.pow(p.life, 1.4));
        const numPoints = 12; // optimized from 16 to 12 vertices for speed
        const angleStep = (Math.PI * 2) / numPoints;

        ctx.beginPath();
        for (let pt = 0; pt < numPoints; pt++) {
          const a = pt * angleStep;
          // Organic fluid harmonic noise
          const distortion =
            1 +
            0.22 * Math.sin(3 * a + p.seed) +
            0.12 * Math.sin(7 * a + p.seed * 2) +
            0.08 * Math.cos(5 * a + p.seed * 3);

          const r = Math.max(1, p.radius * distortion);
          const px = p.x + Math.cos(a) * r;
          const py = p.y + Math.sin(a) * r;

          if (pt === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        // Watercolor gradient: dense core, translucent wash, slightly rich capillary edge
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          Math.max(1, p.targetRadius * 1.1)
        );

        grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.85})`);
        grad.addColorStop(0.5, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.55})`);
        grad.addColorStop(0.85, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.7})`); // wet-edge pigment fringe
        grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.restore();
    };

    render();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("touchmove", handlePointerMove);
      container.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center min-h-[500px] sm:min-h-[620px] lg:min-h-[700px] xl:min-h-[760px] select-none cursor-crosshair group"
    >
      {/* Ming Star Character Portrait - Clean Cutout, Enlarge Size, NO Yellow Arch Behind */}
      <div
        className="relative z-10 w-[360px] sm:w-[480px] lg:w-[580px] xl:w-[650px] aspect-square flex items-end justify-center pointer-events-none"
        style={{
          transform: "translate(calc(var(--mx, 0px) * -0.28), calc(var(--my, 0px) * -0.28))",
        }}
      >
        {/* Soft, delicate luminous ambient halo around the character silhouette */}
        <div
          className="absolute inset-8 rounded-full bg-gradient-to-tr from-amber-400/15 via-pink-400/10 to-cyan-400/15 blur-3xl -z-10 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-102"
        />

        {/* The Clean Cutout of Ming Star (Optimized WebP, 93KB vs 832KB) */}
        <Image
          src="/assets/ming-cutout.webp"
          alt="Ming Star - Full-Stack Developer & Content Creator"
          width={1229}
          height={1229}
          priority
          className="object-contain w-full h-auto drop-shadow-[0_20px_45px_rgba(10,37,64,0.14)] filter contrast-[1.02]"
        />

        {/* Realistic Watercolor Ink Reveal Interactive Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-multiply opacity-90 transition-opacity"
        />

        {/* Secondary Shimmer Pass for Holographic Glow on Inked Areas */}
        <div
          className="absolute inset-0 pointer-events-none z-15 mix-blend-screen opacity-30 blur-[2px]"
          aria-hidden="true"
        />
      </div>

      {/* Subtle Grounding Shadow beneath Ming */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-slate-900/10 rounded-full blur-xl pointer-events-none -z-10"
        style={{
          transform: "translateX(-50%) translate(calc(var(--mx, 0px) * -0.15), calc(var(--my, 0px) * -0.15))",
        }}
      />

      {/* "Roam to unveil" Interactive Hint Badge */}
      <div
        className="absolute bottom-4 right-4 sm:right-10 z-30 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-md text-[10px] sm:text-[11px] font-mono font-medium text-[#0A2540] transition-all duration-300 group-hover:border-amber-400/80"
        style={{
          transform: "translate(calc(var(--mx, 0px) * 0.3), calc(var(--my, 0px) * 0.3))",
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
        </span>
        <span className="tracking-wide uppercase">
          {hasInteracted ? "Realistic Ink Active" : "Roam to unveil"}
        </span>
      </div>

      {/* Refined Status Pill: Floating Beside Character */}
      <div
        className="absolute bottom-6 left-2 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg shadow-slate-900/8 border border-slate-200/80 flex items-center gap-3 transition-transform duration-300"
        style={{
          transform: "translate(calc(var(--mx, 0px) * 0.4), calc(var(--my, 0px) * 0.4))",
        }}
      >
        <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            Current Focus
          </div>
          <div className="text-xs font-bold text-[#0A2540]">
            Next.js 16 &bull; Three.js &bull; Creative Code
          </div>
        </div>
      </div>
    </div>
  );
}
