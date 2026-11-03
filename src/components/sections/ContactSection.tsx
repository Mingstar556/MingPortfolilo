"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight, ShieldCheck, Terminal, Zap, Phone } from "lucide-react";
import { GithubIcon, TelegramIcon, TiktokIcon } from "@/components/common/BrandIcons";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/common/ScrollReveal";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-Stack Web MVP");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$100 - $250",
    message: "",
  });

  const emailAddress = "Lindara909@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#F59E0B", "#10B981", "#0A2540"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#F59E0B", "#FBBF24", "#0A2540", "#10B981"],
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-slate-200/90 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-mono font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                06 // INITIATE TRANSMISSION
              </div>
              <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0A2540] tracking-tight leading-[1.08]">
                Let&apos;s Build Something Iconic.<br />
                <span className="text-amber-500">Fast Turnaround. High Impact.</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Have a project in mind, want to sponsor a technical video, or need 1-on-1 architecture advisory? I respond within 24 hours.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Channels (5 Cols) */}
          <FadeLeft className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="bg-[#0A2540] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                DIRECT INQUIRY CHANNEL
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3">
                Prefer direct email?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Skip the proposal form and reach out directly to my private inbox. One tap copies the exact verified address.
              </p>

              {/* Email Copy Pill - Stack on mobile to prevent overflow */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 p-3.5 sm:px-4 sm:py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono text-xs tracking-wider transition-all cursor-pointer group active:scale-98 shadow-inner"
              >
                <span className="flex items-center gap-2 text-amber-300 truncate font-semibold">
                  <Mail className="w-4 h-4 shrink-0 text-amber-400" />
                  <span className="truncate">{emailAddress}</span>
                </span>
                <span className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-400 text-[#0A2540] font-bold text-[11px] shrink-0 shadow-md">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Direct Channels Dock */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-4">
                Direct Channels & Socials
              </div>
              
              <StaggerContainer className="flex flex-col gap-2.5 sm:gap-3" staggerDelay={0.07}>
                {/* Telegram Contact */}
                <StaggerItem>
                  <a
                    href="https://t.me/mingstar01"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/90 hover:border-sky-300 text-[#0A2540] transition-all group shadow-xs active:scale-[0.98] min-h-[52px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-xs shrink-0">
                        <TelegramIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-mono text-[#0A2540]">Telegram</div>
                        <div className="text-[11px] font-mono text-sky-600 font-semibold">@mingstar01</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </StaggerItem>

                {/* Direct Phone Call */}
                <StaggerItem>
                  <a
                    href="tel:060206666"
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-300 text-[#0A2540] transition-all group shadow-xs active:scale-[0.98] min-h-[52px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-mono text-[#0A2540]">Phone / Call</div>
                        <div className="text-[11px] font-mono text-emerald-600 font-semibold">060206666</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </StaggerItem>

                {/* TikTok Contact */}
                <StaggerItem>
                  <a
                    href="https://www.tiktok.com/@ming.star"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200/90 hover:border-rose-300 text-[#0A2540] transition-all group shadow-xs active:scale-[0.98] min-h-[52px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shadow-xs shrink-0">
                        <TiktokIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-mono text-[#0A2540]">TikTok</div>
                        <div className="text-[11px] font-mono text-rose-600 font-semibold">@ming.star</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </StaggerItem>

                {/* GitHub */}
                <StaggerItem>
                  <a
                    href="https://github.com/mingstar556"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 hover:border-slate-300 text-[#0A2540] transition-all group shadow-xs active:scale-[0.98] min-h-[52px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shadow-xs shrink-0">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-mono text-[#0A2540]">GitHub</div>
                        <div className="text-[11px] font-mono text-slate-500 font-semibold">@mingstar556</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Standard Response:</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Within 24 Hours
              </span>
            </div>
          </FadeLeft>

          {/* Right Column: Interactive Proposal Console (7 Cols) */}
          <FadeRight className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl shadow-slate-900/5 relative">
            {formSubmitted ? (
              <div className="py-12 sm:py-16 text-center flex flex-col items-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-md">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0A2540] mb-2">
                  Transmission Dispatched!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 font-sans leading-relaxed">
                  Thank you for reaching out. Your project brief has been logged and I will review the architecture scope and reply promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3.5 min-h-[44px] rounded-full bg-[#0A2540] text-amber-400 font-mono font-bold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Select Scope / Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {["Full-Stack Web MVP", "Creator Sponsorship", "1-on-1 Advisory"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`p-3 sm:p-3.5 min-h-[44px] rounded-2xl text-xs font-mono font-bold uppercase tracking-wider text-center border transition-all cursor-pointer active:scale-95 ${
                          selectedType === type
                            ? "bg-[#0A2540] text-amber-400 border-[#0A2540] shadow-md"
                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 text-base sm:text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 shadow-xs font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 text-base sm:text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 shadow-xs font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Estimated Budget Allocation ($40 - $500)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 text-base sm:text-sm text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 cursor-pointer shadow-xs font-mono"
                  >
                    <option value="$40 - $100">$40 - $100 (Single Feature / Consultation / Bug Fix)</option>
                    <option value="$100 - $250">$100 - $250 (Landing Page / UI Component / Motion)</option>
                    <option value="$250 - $500">$250 - $500 (Complete Web App / Full Website)</option>
                    <option value="$40 - $500">$40 - $500 (Flexible / Custom Scope)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5 sm:mb-2">
                    Project Brief & Objective
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about what you are engineering, timeline goals, or sponsorship scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 text-base sm:text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 resize-none shadow-xs font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 min-h-[50px] rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-slate-950/15 hover:shadow-xl active:scale-98 transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>Transmit Project Inquiry</span>
                </button>
              </form>
            )}
          </FadeRight>

        </div>

      </div>
    </section>
  );
}
