"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { LocationEdit, Mail, Phone } from "lucide-react";

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
      <div className="max-w-7xl mx-auto bg-[#070c18]/20 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl shadow-cyan-950/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-2">
              <span className="section-label">07 — Contact</span>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                Let&apos;s build
              </h2>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                something
              </h2>
              <h2 className="text-5xl md:text-6xl font-light font-serif text-white">
                <em className="gradient-text">together.</em>
              </h2>
            </div>

            <div className="mt-6">
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base text-white/80 hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-300 font-medium"
                  href="https://github.com/SabbirHassanShuvo">
                  GitHub ↗
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base text-white/80 hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-300 font-medium"
                  href="https://www.linkedin.com/in/sabbirhassan100">
                  LinkedIn ↗
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base text-white/80 hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-300 font-medium"
                  href="https://sabbir-hassan.vercel.app/">
                  Portfolio ↗
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <a
                  href="mailto:sabbirhassanshuvo71@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00d4ff] transition-all text-base">
                  <span>
                    <Mail size={16} />
                  </span>
                  <span>sabbirhassanshuvo71@gmail.com</span>
                </a>
                <a
                  href="tel:01639208102"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00d4ff] transition-all text-base">
                  <span>
                    <Phone size={16} />
                  </span>
                  <span>01639208102</span>
                </a>
                <p className="flex items-center gap-3 text-white/60 text-base">
                  <span>
                    <LocationEdit size={16} />
                  </span>
                  <span>Dhaka, Bangladesh</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center h-full gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#0b1326] border border-white/15 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] focus:bg-[#0e1933] outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#0b1326] border border-white/15 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] focus:bg-[#0e1933] outline-none transition-all"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full bg-[#0b1326] border border-white/15 text-white placeholder-white/40 px-4 py-3 rounded-lg focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] focus:bg-[#0e1933] outline-none resize-none transition-all"
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full border border-[rgba(0,212,255,0.45)] bg-[rgba(0,212,255,0.12)] text-[#00d4ff] hover:bg-[rgba(0,212,255,0.22)] hover:border-[rgba(0,212,255,0.8)] py-3 rounded-lg uppercase tracking-widest text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
