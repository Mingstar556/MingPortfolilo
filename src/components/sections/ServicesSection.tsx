"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, Code, Video, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { FadeUp, PopUp, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";

interface ServicePackage {
  id: string;
  name: string;
  badge: string;
  price: string;
  timeline: string;
  tagline: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

const packages: ServicePackage[] = [
  {
    id: "dev-mvp",
    name: "Full-Stack Web MVP",
    badge: "Engineering Package",
    price: "$250 - $500",
    timeline: "2 - 4 Weeks",
    tagline: "Turn your product vision into a lightning-fast, production-ready web application built to scale.",
    features: [
      "Next.js 16 App Router & TypeScript architecture",
      "Tailwind CSS v4 & custom GSAP/Three.js motion",
      "PostgreSQL database & secure authentication",
      "Stripe payment integration & transactional emails",
      "Bonus: 60-second product launch video reel",
      "Full IP ownership & automated CI/CD deployment",
    ],
    ctaText: "Commission an MVP",
    popular: true,
  },
  {
    id: "creator-sponsor",
    name: "Brand Sponsorship & Media",
    badge: "Creator Package",
    price: "$100 - $250",
    timeline: "1 - 2 Weeks",
    tagline: "Put your developer tool or SaaS directly in front of thousands of active engineers and builders.",
    features: [
      "Dedicated YouTube Shorts & TikTok video feature",
      "Hands-on live coding & API integration tutorial",
      "Permanent GitHub showcase repository link",
      "Engaged audience of developers & tech founders",
      "Authentic, developer-first narrative that converts",
      "Performance analytics & engagement recap report",
    ],
    ctaText: "Book Brand Collab",
  },
  {
    id: "advisory",
    name: "Technical Advisory & Audit",
    badge: "Consultation",
    price: "$40 - $100",
    timeline: "24h Turnaround",
    tagline: "1-on-1 strategic session to diagnose architecture bottlenecks or optimize motion performance.",
    features: [
      "60-minute high-impact video consultation",
      "Full-stack code & performance review (LCP, CLS)",
      "Motion design & Three.js optimization plan",
      "Content strategy for developer evangelism",
      "Written action checklist delivered within 24h",
      "Direct async follow-up via Discord / Slack",
    ],
    ctaText: "Schedule Advisory",
  },
];

export default function ServicesSection() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addons = [
    { id: "3d-shaders", label: "Custom 3D WebGL Shader" },
    { id: "video-reel", label: "4K Video Launch Reel" },
    { id: "rush-delivery", label: "2-Week Priority Rush" },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/90 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                05 // COLLABORATION & ENGAGEMENT
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Work With Ming Star.<br />
                <span className="text-amber-500">Transparent Deliverables.</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Ready to build an ambitious web experience or sponsor a high-converting technical video? Select an option below.
            </p>
          </div>
        </FadeUp>

        {/* Pricing & Services Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16" staggerDelay={0.12}>
          {packages.map((pkg) => (
            <StaggerItem
              key={pkg.id}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#0A2540] text-white shadow-2xl border-2 border-amber-400 sm:scale-[1.02] hover:-translate-y-1.5"
                  : "bg-white text-[#0A2540] border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-6 sm:left-8 px-3.5 sm:px-4 py-1 rounded-full bg-amber-400 text-[#0A2540] text-[11px] sm:text-xs font-mono font-bold tracking-wider shadow-md uppercase">
                  Most Requested
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest font-semibold ${
                      pkg.popular ? "text-amber-400" : "text-slate-500"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <span
                    className={`text-xs font-mono font-semibold flex items-center gap-1.5 px-3 py-1 rounded-full ${
                      pkg.popular ? "bg-white/10 text-emerald-400" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.timeline}
                  </span>
                </div>

                <h3
                  className={`font-display font-black text-xl sm:text-2xl lg:text-3xl mt-1 mb-2 ${
                    pkg.popular ? "text-white" : "text-[#0A2540]"
                  }`}
                >
                  {pkg.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className={`font-display font-black text-2xl sm:text-3xl ${
                      pkg.popular ? "text-amber-400" : "text-[#0A2540]"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-xs font-mono uppercase tracking-wider ${
                      pkg.popular ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    Est. Scope
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 ${
                    pkg.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.popular
                            ? "bg-amber-400 text-[#0A2540]"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span
                        className={`text-xs sm:text-sm ${
                          pkg.popular ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`w-full py-3.5 sm:py-4 min-h-[48px] rounded-full font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                  pkg.popular
                    ? "bg-amber-400 hover:bg-amber-300 text-[#0A2540] shadow-amber-400/20"
                    : "bg-[#0A2540] hover:bg-[#07192C] text-white shadow-slate-900/10"
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive Scope Add-on Selector */}
        <FadeUp delay={0.2}>
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#0A2540]">
                  Custom Architecture Add-ons
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select custom options to bundle directly into your project inquiry.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 w-full md:w-auto">
              {addons.map((a) => {
                const active = selectedAddons.includes(a.id);
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => toggleAddon(a.id)}
                    className={`px-3.5 sm:px-4 py-2 min-h-[42px] rounded-full text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 ${
                      active
                        ? "bg-[#0A2540] text-amber-400 shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {active ? "✓ " : "+ "}
                    {a.label}
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
