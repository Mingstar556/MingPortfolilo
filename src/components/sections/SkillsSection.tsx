"use client";

import { useState } from "react";
import { 
  Cpu, 
  Database, 
  Zap, 
  CheckCircle2, 
  Layers
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";
import InteractiveNetworkBackground from "@/components/canvas/InteractiveNetworkBackground";

interface DeliverablePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  outcome: string;
  deliverables: {
    item: string;
    details: string;
  }[];
  techStack: string[];
}

const deliverablesData: DeliverablePillar[] = [
  {
    id: "web-apps",
    number: "01",
    title: "Full-Stack Web Applications & MVPs",
    tagline: "Turn your product vision into a lightning-fast, production-ready web application built to scale.",
    icon: Layers,
    outcome: "Launch a market-ready web app in weeks without technical debt or agency overhead.",
    deliverables: [
      {
        item: "Next.js 16 & TypeScript Architecture",
        details: "App Router, Server Actions, strict compile-time guarantees, and clean modular codebases.",
      },
      {
        item: "Relational Database & Secure Auth",
        details: "PostgreSQL schema modeling, Prisma migrations, connection pooling, and OAuth session hardening.",
      },
      {
        item: "Payment Systems & Transactional Workflows",
        details: "Stripe checkout, subscription lifecycle webhooks, and transactional customer notifications.",
      },
      {
        item: "Automated Deployment & CI/CD",
        details: "Containerized builds, GitHub Actions pipelines, custom domain routing, and automated rollback safety.",
      },
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Tailwind v4"],
  },
  {
    id: "interactive",
    number: "02",
    title: "High-Converting Interactive Websites",
    tagline: "Bespoke digital flagships and brand portals engineered with fluid 60 FPS motion.",
    icon: Cpu,
    outcome: "Capture client attention, elevate brand perception, and boost visitor-to-lead conversions.",
    deliverables: [
      {
        item: "Three.js & WebGL 3D Elements",
        details: "Custom procedural 3D meshes, interactive shaders, and responsive canvas viewports.",
      },
      {
        item: "GSAP 3 Scroll Storytelling",
        details: "Hardware-accelerated ScrollTrigger choreography, pinned narrative sections, and smooth SVG motion.",
      },
      {
        item: "Lenis Physics-Based Momentum",
        details: "Silky smooth scroll momentum synchronized with WebGL animation loops across devices.",
      },
      {
        item: "Mobile-First Responsive Polish",
        details: "Strict viewport sizing, zero horizontal overflow, and thumb-friendly touch zones.",
      },
    ],
    techStack: ["Three.js", "WebGL", "GSAP 3", "Lenis Scroll", "Tailwind CSS", "Motion"],
  },
  {
    id: "performance",
    number: "03",
    title: "Core Web Vitals & Speed Optimization",
    tagline: "Diagnosing and eliminating bottlenecks to turn sluggish sites into sub-second web platforms.",
    icon: Zap,
    outcome: "Lower bounce rates, improve organic SEO ranking, and guarantee instant mobile page loads.",
    deliverables: [
      {
        item: "100/100 Lighthouse Performance",
        details: "Deep-dive audit and refactoring of scripts, hydration bottlenecks, and unused CSS rules.",
      },
      {
        item: "Zero Cumulative Layout Shift (CLS)",
        details: "Stable layout rendering with pre-allocated aspect ratios and layout shift elimination.",
      },
      {
        item: "Sub-Second LCP & Fast Hydration",
        details: "Next.js partial prerendering, edge caching, and server-streamed HTML delivery.",
      },
      {
        item: "Automated Asset Compression",
        details: "Next-gen AVIF/WebP image pipelines, responsive srcset generation, and font preloading.",
      },
    ],
    techStack: ["Lighthouse 100", "Core Web Vitals", "Turbopack", "Edge Caching", "Asset Pipelines"],
  },
  {
    id: "commerce",
    number: "04",
    title: "Turnkey E-Commerce & Custom APIs",
    tagline: "Resilient backend services, payment processing, and business automation pipelines.",
    icon: Database,
    outcome: "Seamless customer monetization, automated business workflows, and zero server maintenance.",
    deliverables: [
      {
        item: "Custom Checkout & Stripe Integration",
        details: "PCI-compliant checkout sessions, webhook handlers, customer portals, and discount logic.",
      },
      {
        item: "Headless CMS Configuration",
        details: "Intuitive content publishing backends so non-technical team members can update pages instantly.",
      },
      {
        item: "Third-Party API & Webhook Pipelines",
        details: "Syncing data across CRMs, email service providers, and internal microservices with retries.",
      },
      {
        item: "Turnkey Handover & Full IP Rights",
        details: "Clean repository documentation, architecture diagrams, and 100% intellectual property ownership.",
      },
    ],
    techStack: ["Stripe API", "Headless CMS", "Edge Functions", "Webhooks", "REST APIs"],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleDeliverables = activeCategory === "all"
    ? deliverablesData
    : deliverablesData.filter((d) => d.id === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Background Architectural Grid Lines with Live Telemetry Packets */}
      <div className="absolute inset-0 bg-graph-grid opacity-30 pointer-events-none" />
      <InteractiveNetworkBackground />

      {/* Meaningful Ambient Radial Nodes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-slate-200/80 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                02 // COMMERCIAL DELIVERABLES
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                What I Deliver &amp; Build.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 leading-relaxed">
                Concrete commercial deliverables engineered to solve business problems, convert visitors, and scale reliably.
              </p>
            </div>

            {/* Category Filter Pills - Mobile Horizontal Swipe Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 ${
                  activeCategory === "all"
                    ? "bg-[#0A2540] text-amber-400 shadow-sm"
                    : "bg-white text-slate-600 hover:text-[#0A2540] border border-slate-200 hover:border-slate-300"
                }`}
              >
                All Deliverables
              </button>
              {deliverablesData.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveCategory(d.id)}
                  className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0 ${
                    activeCategory === d.id
                      ? "bg-[#0A2540] text-amber-400 shadow-sm"
                      : "bg-white text-slate-600 hover:text-[#0A2540] border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {d.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Deliverables Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10" staggerDelay={0.1}>
          {visibleDeliverables.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem
                key={pillar.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group/card hover:-translate-y-1"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between pb-3.5 sm:pb-6 mb-3.5 sm:mb-6 border-b border-slate-100">
                    <div className="flex items-center gap-2.5 sm:gap-4">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0A2540] text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <div className="text-[9px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                          DELIVERABLE // {pillar.number}
                        </div>
                        <h3 className="font-display font-black text-lg sm:text-2xl text-[#0A2540]">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed font-sans">
                    {pillar.tagline}
                  </p>

                  {/* Business Outcome Banner */}
                  <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200/60 mb-3.5 sm:mb-8">
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold mb-0.5 sm:mb-1">
                      Business Outcome:
                    </div>
                    <div className="text-[11px] sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {pillar.outcome}
                    </div>
                  </div>

                  {/* What's Delivered List */}
                  <div className="space-y-2.5 sm:space-y-5 mb-4 sm:mb-8">
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="group/item flex items-start gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-xs sm:text-sm text-[#0A2540]">
                            {item.item}
                          </h4>
                          <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mt-0.5 hidden xs:block">
                            {item.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 sm:pt-4 border-t border-slate-100">
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 sm:mb-2 font-semibold">
                      Underlying Technology:
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {pillar.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    Available to Commission
                  </span>
                  <span>100% IP Handover</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
