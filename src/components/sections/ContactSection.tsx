"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, YoutubeIcon, TwitterIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-Stack Web MVP");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$5k - $10k",
    message: "",
  });

  const emailAddress = "mingstar@mingportfolilo.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F59E0B", "#10B981", "#0A2540"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#F59E0B", "#FBBF24", "#0A2540", "#10B981"],
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="absolute inset-0 bg-graph-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              06 // INITIATE TRANSMISSION
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0A2540] tracking-tight">
              Let&apos;s Build Something Iconic.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-sm sm:text-base mt-4 md:mt-0 font-sans">
            Have a project in mind, want to sponsor a video, or need technical consulting? I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="bg-[#0A2540] text-white rounded-3xl p-8 mb-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3">
                  Direct Inquiries
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Prefer direct email?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Skip the form and email me directly. Click to copy my address with one tap.
                </p>

                {/* Email Copy Pill */}
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono text-xs tracking-wider transition-all cursor-pointer group active:scale-98"
                >
                  <span className="flex items-center gap-2 text-amber-300 truncate">
                    <Mail className="w-4 h-4 shrink-0" />
                    {emailAddress}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 text-[#0A2540] font-bold text-[11px] shrink-0">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
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

              {/* Social Channels */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold mb-3">
                  Connect & Follow Along
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[#0A2540] transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold">
                      <YoutubeIcon className="w-4 h-4 text-red-600" />
                      YouTube
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[#0A2540] transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold">
                      <GithubIcon className="w-4 h-4 text-[#0A2540]" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[#0A2540] transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold">
                      <TwitterIcon className="w-4 h-4 text-blue-500" />
                      X / Twitter
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[#0A2540] transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold">
                      <LinkedinIcon className="w-4 h-4 text-blue-700" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs font-mono text-slate-500">
              Response Time: <span className="text-emerald-600 font-bold">Within 24 Hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm relative">
            {formSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0A2540] mb-2">
                  Message Dispatched!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-8">
                  Thank you for reaching out. I have received your message and will review your project details promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0A2540] text-white text-xs font-mono font-bold tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {["Full-Stack Web MVP", "Creator Sponsorship", "1-on-1 Advisory"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`p-3 rounded-2xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-[#0A2540] text-amber-400 border-[#0A2540] shadow-sm"
                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-[#0A2540] focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 cursor-pointer"
                  >
                    <option value="$2k - $5k">$2,000 - $5,000</option>
                    <option value="$5k - $10k">$5,000 - $10,000 (Recommended MVP)</option>
                    <option value="$10k+">$10,000+ (Full Suite & Retainer)</option>
                    <option value="Sponsorship">Brand Sponsorship / Video Campaign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Brief / Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about what you are building, timeline goals, or sponsorship scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0A2540] hover:bg-[#07192C] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-slate-950/15 hover:shadow-xl active:scale-98 transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Transmit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
