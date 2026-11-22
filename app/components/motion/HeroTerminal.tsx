"use client";

import React, { useState, useEffect } from "react";
import { Terminal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<"arch" | "saas" | "status">("arch");

  return (
    <div className="w-full max-w-xl mx-auto lg:mx-0 mt-8 rounded-xl border border-white/10 bg-[#060a14]/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden font-mono text-xs">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
          <span className="text-white/40 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal size={12} className="text-[#00d4ff]" />
            sabbir@engineer-workstation: ~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live System
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 bg-black/20 text-[11px]">
        {[
          { id: "arch", label: "architecture.json" },
          { id: "saas", label: "flagship_saas.php" },
          { id: "status", label: "live_metrics.sh" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 transition-all border-r border-white/5 ${
              activeTab === tab.id
                ? "bg-white/[0.04] text-[#00d4ff] border-b-2 border-b-[#00d4ff]"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 leading-relaxed space-y-2 text-white/70">
        {activeTab === "arch" && (
          <div className="space-y-1">
            <p className="text-white/40">// Core Architectural Principles</p>
            <p>
              <span className="text-[#a78bfa]">const</span>{" "}
              <span className="text-cyan-400">coreSpecialization</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-white/60">framework:</span>{" "}
              <span className="text-amber-300">&quot;Laravel 10 / 12 & PHP 8.2+&quot;</span>,
            </p>
            <p className="pl-4">
              <span className="text-white/60">patterns:</span>{" "}
              <span className="text-emerald-300">[&quot;Multi-Tenancy&quot;, &quot;Modular Services&quot;, &quot;Spatie RBAC&quot;]</span>,
            </p>
            <p className="pl-4">
              <span className="text-white/60">throughput:</span>{" "}
              <span className="text-cyan-300">&quot;Sub-second queries via Redis & DataTables&quot;</span>
            </p>
            <p>&#125;;</p>
          </div>
        )}

        {activeTab === "saas" && (
          <div className="space-y-1">
            <p className="text-white/40">// Enterprise Production Products</p>
            <p className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 size={12} /> PitecHR SaaS — Cloud Multi-Tenant HRMS & Payroll
            </p>
            <p className="text-cyan-400 flex items-center gap-1">
              <CheckCircle2 size={12} /> Reality Check — Real Document Verification Engine
            </p>
            <p className="text-violet-400 flex items-center gap-1">
              <CheckCircle2 size={12} /> HuntMe — Headless Talent Recruitment & ATS
            </p>
          </div>
        )}

        {activeTab === "status" && (
          <div className="space-y-1">
            <p className="text-white/40"># Live Server Diagnostics</p>
            <p className="text-white/80">
              <span className="text-emerald-400">➜</span> Cloud Hosting:{" "}
              <span className="text-[#00d4ff]">DigitalOcean Droplets & Spaces</span>
            </p>
            <p className="text-white/80">
              <span className="text-emerald-400">➜</span> Queue Workers:{" "}
              <span className="text-amber-300">Redis & Horizon Active</span>
            </p>
            <p className="text-white/80">
              <span className="text-emerald-400">➜</span> Uptime:{" "}
              <span className="text-emerald-400">99.98% High Concurrency Ready</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
