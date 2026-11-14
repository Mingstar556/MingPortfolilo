"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  pulseRadius: number;
  maxPulseRadius: number;
  color: string;
  glowColor: string;
  pulseSpeed: number;
  phase: number;
  type: "server" | "database" | "edge" | "client";
}

interface DataPacket {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  glow: string;
  size: number;
}

interface InteractiveNetworkBackgroundProps {
  className?: string;
}

export default function InteractiveNetworkBackground({ className = "opacity-60" }: InteractiveNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Grid spacing matches the CSS 40px grid
    const gridSize = 40;

    // Meaningful Telemetry Colors:
    // Amber: 60 FPS Render / UI Repaint
    // Cyan: Edge Function / Serverless Request
    // Emerald: 200 OK / Cache Hit
    const packetColors = [
      { color: "rgb(245, 158, 11)", glow: "rgba(245, 158, 11, 0.4)" },
      { color: "rgb(6, 182, 212)", glow: "rgba(6, 182, 212, 0.4)" },
      { color: "rgb(16, 185, 129)", glow: "rgba(16, 185, 129, 0.4)" },
    ];

    // Seed meaningful network nodes aligned to grid intersections
    const nodes: Node[] = [];
    const initNodes = () => {
      nodes.length = 0;
      const cols = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);
      const count = Math.min(16, Math.max(6, Math.floor((cols * rows) / 45)));

      for (let i = 0; i < count; i++) {
        const col = Math.floor(Math.random() * (cols - 2)) + 1;
        const row = Math.floor(Math.random() * (rows - 2)) + 1;
        const typeIndex = i % 3;
        const pColor = packetColors[typeIndex];

        nodes.push({
          x: col * gridSize,
          y: row * gridSize,
          radius: 2.5,
          pulseRadius: 2.5,
          maxPulseRadius: 18 + Math.random() * 12,
          color: pColor.color,
          glowColor: pColor.glow,
          pulseSpeed: 0.15 + Math.random() * 0.15,
          phase: Math.random() * Math.PI * 2,
          type: typeIndex === 0 ? "edge" : typeIndex === 1 ? "database" : "server",
        });
      }
    };

    initNodes();

    // Data packets travelling along grid lines
    const packets: DataPacket[] = [];

    const spawnPacket = () => {
      if (nodes.length < 2) return;
      const sourceNode = nodes[Math.floor(Math.random() * nodes.length)];
      
      // Travel along grid axis (horizontal or vertical) to a neighboring grid point
      const isHorizontal = Math.random() > 0.5;
      const distanceSteps = (Math.floor(Math.random() * 5) + 3) * (Math.random() > 0.5 ? 1 : -1);
      
      let targetX = sourceNode.x;
      let targetY = sourceNode.y;

      if (isHorizontal) {
        targetX = Math.max(gridSize, Math.min(width - gridSize, sourceNode.x + distanceSteps * gridSize));
      } else {
        targetY = Math.max(gridSize, Math.min(height - gridSize, sourceNode.y + distanceSteps * gridSize));
      }

      const pType = packetColors[Math.floor(Math.random() * packetColors.length)];

      packets.push({
        startX: sourceNode.x,
        startY: sourceNode.y,
        targetX,
        targetY,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: pType.color,
        glow: pType.glow,
        size: 3,
      });

      if (packets.length > 20) {
        packets.shift();
      }
    };

    // Periodically spawn data packets
    let frameCount = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);

    // Pause RAF when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    const render = () => {
      if (!isVisible) return;
      animId = requestAnimationFrame(render);

      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Randomly dispatch data packets representing live client/server activity
      if (frameCount % 45 === 0 && packets.length < 14) {
        spawnPacket();
      }

      // 1. Draw glowing data packets travelling along grid lines
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const currX = p.startX + (p.targetX - p.startX) * p.progress;
        const currY = p.startY + (p.targetY - p.startY) * p.progress;

        // Trail effect behind the packet
        const trailLength = 0.25;
        const trailStartX = p.startX + (p.targetX - p.startX) * Math.max(0, p.progress - trailLength);
        const trailStartY = p.startY + (p.targetY - p.startY) * Math.max(0, p.progress - trailLength);

        const grad = ctx.createLinearGradient(trailStartX, trailStartY, currX, currY);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(1, p.color);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(trailStartX, trailStartY);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        // Packet Head Glow
        ctx.beginPath();
        ctx.arc(currX, currY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 2. Draw live network nodes and pulse rings
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.phase += 0.04;

        // Pulse ring expanding outward
        node.pulseRadius += node.pulseSpeed;
        if (node.pulseRadius > node.maxPulseRadius) {
          node.pulseRadius = node.radius;
        }

        const pulseAlpha = Math.max(0, 1 - (node.pulseRadius - node.radius) / (node.maxPulseRadius - node.radius));

        // Proximity to mouse increases glow
        const distToMouse = Math.hypot(mouseX - node.x, mouseY - node.y);
        const isHovered = distToMouse < 100;
        const hoverIntensity = isHovered ? Math.max(0, (100 - distToMouse) / 100) : 0;

        // Pulse wave ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = node.glowColor.replace("0.4", `${(pulseAlpha * 0.4 + hoverIntensity * 0.4).toFixed(2)}`);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + hoverIntensity * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        if (isHovered) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 12;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    render();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
