"use client";

import { Check, Sparkles, ArrowRight, Zap, Code, Video, MessageSquare } from "lucide-react";

interface ServicePackage {
  id: string;
  name: string;
  badge: string;
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
    tagline: "Turn your product vision into a lightning-fast, production-ready web application in 2-4 weeks.",
    features: [
      "Next.js 16 App Router & TypeScript architecture",
      "Tailwind CSS v4 & custom GSAP/Three.js motion",
      "PostgreSQL / Supabase database & authentication",
      "Stripe payment integration & transactional emails",
      "Bonus: 60-second product demo video for your launch",
      "Full IP ownership & deployment to Vercel/AWS",
    ],
    ctaText: "Commission an MVP",
    popular: true,
  },
  {
    id: "creator-sponsor",
    name: "Brand Sponsorship & Media",
    badge: "Creator Package",
    tagline: "Put your developer tool or SaaS directly in front of thousands of active engineers and builders.",
    features: [
      "Dedicated YouTube / Shorts / TikTok video feature",
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
    tagline: "1-on-1 strategic session to diagnose architecture bottlenecks or optimize motion performance.",
    features: [
      "60-minute high-impact video consultation",
      "Full-stack code & performance review (LCP, CLS)",
      "Motion design & Three.js optimization plan",
      "Content strategy for developer evangelism",
      "Written action checklist delivered within 24h",
      "Direct async follow-up via Discord / Slack",
    ],
    ctaText: "Schedule 1-on-1 Call",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              05 // COLLABORATION & MONETIZATION
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0A2540] tracking-tight">
              Work With Ming Star.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base mt-4 md:mt-0 font-sans">
            Ready to build an ambitious web experience or sponsor a high-converting technical video? Select an option below.
          </p>
        </div>

        {/* Pricing & Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "bg-[#0A2540] text-white shadow-2xl border-2 border-amber-400 scale-[1.02]"
                  : "bg-white text-[#0A2540] border border-slate-200/90 shadow-md hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-amber-400 text-[#0A2540] text-xs font-mono font-bold tracking-wider shadow-md uppercase">
                  Most Requested
                </div>
              )}

              <div>
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest font-semibold ${
                    pkg.popular ? "text-amber-400" : "text-slate-500"
                  }`}
                >
                  {pkg.badge}
                </span>

                <h3
                  className={`font-display font-bold text-2xl mt-2 mb-3 ${
                    pkg.popular ? "text-white" : "text-[#0A2540]"
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    pkg.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
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
                className={`w-full py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                  pkg.popular
                    ? "bg-amber-400 hover:bg-amber-300 text-[#0A2540] shadow-amber-400/20"
                    : "bg-[#0A2540] hover:bg-[#07192C] text-white shadow-slate-900/10"
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
