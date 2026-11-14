"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, Clock } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";
import InteractiveNetworkBackground from "@/components/canvas/InteractiveNetworkBackground";

interface EngagementModel {
  id: string;
  name: string;
  badge: string;
  timeline: string;
  tagline: string;
  scope: string[];
  ctaText: string;
  popular?: boolean;
}

const engagementModels: EngagementModel[] = [
  {
    id: "mvp-build",
    name: "Full-Cycle Product MVP",
    badge: "Comprehensive Build",
    timeline: "3 - 5 Weeks",
    tagline: "End-to-end engineering from wireframe to production launch, complete with database, authentication, payments, and automated deployment.",
    scope: [
      "Next.js 16 App Router & strict TypeScript architecture",
      "PostgreSQL database schema, Prisma migrations & pooling",
      "Secure user authentication & role-based session logic",
      "Stripe payment gateway & transactional email notifications",
      "Responsive mobile-first interface styled with Tailwind CSS v4",
      "Automated CI/CD deployment & full code IP handover",
    ],
    ctaText: "Discuss Project Scope",
    popular: true,
  },
  {
    id: "brand-experience",
    name: "Interactive Website & Redesign",
    badge: "Bespoke Frontend",
    timeline: "2 - 3 Weeks",
    tagline: "Distinctive marketing flagships and digital experiences engineered with smooth 60 FPS motion, 3D web elements, and high conversion.",
    scope: [
      "Custom responsive design engineered from Figma or scratch",
      "Hardware-accelerated Three.js WebGL & GLSL visual effects",
      "Smooth GSAP 3 ScrollTrigger timeline choreography",
      "Headless CMS integration for instant team updates",
      "Sub-second load speed & 100/100 Lighthouse performance",
      "Cross-platform QA on physical mobile and desktop hardware",
    ],
    ctaText: "Request Website Scope",
  },
  {
    id: "engineering-sprint",
    name: "Dedicated Engineering Sprint",
    badge: "Targeted Sprint",
    timeline: "1 - 2 Weeks",
    tagline: "Focused technical sprints to eliminate performance bottlenecks, harden mobile responsiveness, or deliver critical product features.",
    scope: [
      "Comprehensive Core Web Vitals audit & code refactoring",
      "Zero layout shift (CLS) & sub-second LCP optimization",
      "Mobile touch interaction, viewport & drawer polish",
      "Custom API integrations & resilient webhook handlers",
      "Direct async founder communication via Slack or Discord",
      "Verifiable before/after speed benchmark report",
    ],
    ctaText: "Book an Engineering Sprint",
  },
];

export default function ServicesSection() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const technicalAddons = [
    { id: "3d-webgl", label: "Custom 3D WebGL Shader" },
    { id: "stripe-portal", label: "Stripe Billing & Checkout" },
    { id: "headless-cms", label: "Headless CMS Integration" },
    { id: "rush-timeline", label: "2-Week Priority Rush" },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />
      <InteractiveNetworkBackground className="opacity-45" />

      {/* Ambient background glows for architecture services */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/90 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                04 // FREELANCE ENGAGEMENT MODELS
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                How We Can Work Together.<br />
                <span className="text-amber-500">Transparent Scopes &amp; Delivery.</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Choose the engagement model that best fits your product roadmap. Every project includes direct communication, milestone reviews, and production deployment.
            </p>
          </div>
        </FadeUp>

        {/* Engagement Models Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-16" staggerDelay={0.12}>
          {engagementModels.map((model) => (
            <StaggerItem
              key={model.id}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                model.popular
                  ? "bg-[#0A2540] text-white shadow-2xl border-2 border-amber-400 sm:scale-[1.02] hover:-translate-y-1.5"
                  : "bg-white text-[#0A2540] border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-5 sm:left-8 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-amber-400 text-[#0A2540] text-[10px] sm:text-xs font-mono font-bold tracking-wider shadow-md uppercase">
                  Most Requested
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-semibold ${
                      model.popular ? "text-amber-400" : "text-slate-500"
                    }`}
                  >
                    {model.badge}
                  </span>
                  <span
                    className={`text-[11px] sm:text-xs font-mono font-semibold flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                      model.popular ? "bg-white/10 text-emerald-400" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {model.timeline}
                  </span>
                </div>

                <h3
                  className={`font-display font-black text-lg sm:text-2xl lg:text-3xl mt-0.5 sm:mt-1 mb-1.5 sm:mb-3 ${
                    model.popular ? "text-white" : "text-[#0A2540]"
                  }`}
                >
                  {model.name}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8 ${
                    model.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {model.tagline}
                </p>

                {/* Scope Breakdown */}
                <div className="space-y-2 sm:space-y-3.5 mb-4 sm:mb-8">
                  <div
                    className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold tracking-wider mb-1.5 sm:mb-2 ${
                      model.popular ? "text-amber-400" : "text-slate-500"
                    }`}
                  >
                    What&apos;s Included In Scope:
                  </div>
                  {model.scope.map((item, i) => (
                    <div
                      key={i}
                      className={`items-start gap-2 sm:gap-3 ${
                        i >= 4 ? "hidden sm:flex" : "flex"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          model.popular
                            ? "bg-amber-400 text-[#0A2540]"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        }`}
                      >
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span
                        className={`text-xs sm:text-sm ${
                          model.popular ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`w-full py-3 sm:py-4 min-h-[44px] sm:min-h-[48px] rounded-full font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                  model.popular
                    ? "bg-amber-400 hover:bg-amber-300 text-[#0A2540] shadow-amber-400/20"
                    : "bg-[#0A2540] hover:bg-[#07192C] text-white shadow-slate-900/10"
                }`}
              >
                <span>{model.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Custom Technical Capabilities Selector */}
        <FadeUp delay={0.2}>
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#0A2540]">
                  Custom Project Capabilities
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select optional technical features to include in your project inquiry.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 w-full md:w-auto">
              {technicalAddons.map((addon) => {
                const active = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`px-3.5 sm:px-4 py-2 min-h-[42px] rounded-full text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 ${
                      active
                        ? "bg-[#0A2540] text-amber-400 shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {active ? "✓ " : "+ "}
                    {addon.label}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
