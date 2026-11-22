"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { LocationEdit, Mail, Phone, FileDown, Send, Sparkles } from "lucide-react";
import { contactData } from "@/app/data/contact";
import { Magnetic } from "@/app/components/motion/Magnetic";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function Contact({ id = "contact" }: { id?: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        PUBLIC_KEY,
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="w-full px-2 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-[#070c18]/30 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl shadow-cyan-950/20 relative overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative z-10">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                <Sparkles size={12} className="text-cyan-400" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-300">
                  07 — Contact & Connect
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                Let&apos;s build
              </h2>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                something
              </h2>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                <em className="gradient-text">extraordinary.</em>
              </h2>
            </div>

            <div className="mt-8">
              {/* Direct CV Download Pill & Social Links */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Magnetic strength={0.35}>
                  <a
                    href={contactData.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,212,255,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all">
                    <FileDown size={14} />
                    <span>Download CV</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-white/80 hover:text-cyan-400 transition-colors font-mono px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10"
                    href="https://github.com/SabbirHassanShuvo">
                    GitHub ↗
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-white/80 hover:text-cyan-400 transition-colors font-mono px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10"
                    href="https://www.linkedin.com/in/sabbirhassan100">
                    LinkedIn ↗
                  </a>
                </Magnetic>
              </div>

              {/* Contact Info */}
              <div className="pt-5 border-t border-white/10 space-y-3 font-mono">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  <Mail size={16} className="text-cyan-400" />
                  <span>{contactData.email}</span>
                </a>
                <a
                  href={`tel:${contactData.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors text-sm">
                  <Phone size={16} className="text-cyan-400" />
                  <span>{contactData.phone}</span>
                </a>
                <p className="flex items-center gap-3 text-white/70 text-sm">
                  <LocationEdit size={16} className="text-cyan-400" />
                  <span>{contactData.location}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center h-full gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#0b1326]/80 border border-white/15 text-white placeholder-white/40 px-4 py-3.5 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full bg-[#0b1326]/80 border border-white/15 text-white placeholder-white/40 px-4 py-3.5 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your project details or inquiry here..."
              rows={5}
              className="w-full bg-[#0b1326]/80 border border-white/15 text-white placeholder-white/40 px-4 py-3.5 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none transition-all"
            />
            <Magnetic strength={0.2}>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full border border-cyan-400/50 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400 py-3.5 rounded-xl uppercase tracking-widest text-xs font-mono font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                <Send size={14} />
                <span>{loading ? "Transmitting..." : "Send Dispatch"}</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}