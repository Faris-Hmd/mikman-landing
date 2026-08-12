"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function Features() {
  const t = useTranslations("features");
  const locale = useLocale();
  const isAr = locale === "ar";
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="features" className="py-20 sm:py-24 relative overflow-hidden bg-bg">
      {/* ==================== BLEND TRANSITION FROM HERO ==================== */}
      <div className="absolute top-0 inset-x-0 h-40 sm:h-32 bg-gradient-to-b from-transparent via-bg/60 via-bg/80 to-bg pointer-events-none z-10" />

      {/* ==================== BACKGROUND DECORATIVE SHAPES ==================== */}
      {/* Main glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, var(--tw-color-primary) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating accent shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full border border-primary/8 pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-dashed border-accent/10 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            {t("eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            {t("subheading")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          
          {/* Card 1: Router Dashboard & Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {isAr ? "مزامنة حية" : "Live Sync"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-blue-500 transition-colors">
                {items[0]?.title || "Router Dashboard"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[0]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Live Router Telemetry */}
            <div className="bg-bg-alt/80 border border-border rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between text-xs text-text-primary font-bold border-b border-border pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  hAP ax² (CCR2004)
                </span>
                <span className="text-text-subtle text-[10px]">Uptime 48d</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-surface rounded-lg p-2 border border-border">
                  <div className="text-text-muted font-semibold mb-0.5">{isAr ? "المعالج" : "CPU"}</div>
                  <div className="text-emerald-500 font-black text-xs">14%</div>
                </div>
                <div className="bg-surface rounded-lg p-2 border border-border">
                  <div className="text-text-muted font-semibold mb-0.5">{isAr ? "الرام" : "RAM"}</div>
                  <div className="text-blue-500 font-black text-xs">342MB</div>
                </div>
                <div className="bg-surface rounded-lg p-2 border border-border">
                  <div className="text-text-muted font-semibold mb-0.5">{isAr ? "الحرارة" : "Temp"}</div>
                  <div className="text-cyan-500 font-black text-xs">42°C</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Hotspot Voucher Generator & Batch Printing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  {isAr ? "طباعة & PDF جاهز" : "PDF & Print Ready"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-cyan-500 transition-colors">
                {items[4]?.title || "Voucher & Batch Printing"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[4]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Voucher Ticket */}
            <div className="bg-bg-alt/90 border border-cyan-500/30 rounded-xl p-3.5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border pb-2 mb-2">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-wider">Mikman Hotspot</span>
                <span className="text-[9px] font-extrabold text-text-muted bg-surface px-1.5 py-0.5 rounded">{isAr ? "$1.00" : "$1.00"}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-text-subtle uppercase font-bold">{isAr ? "رمز الكارت" : "Voucher Code"}</div>
                  <div className="text-sm font-mono font-black text-text-primary tracking-wider">MK-9842-X</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-text-subtle uppercase font-bold">{isAr ? "السرعة والمدة" : "Speed Limit"}</div>
                  <div className="text-[11px] font-extrabold text-cyan-500">{isAr ? "5 ميجا / 2 ساعة" : "5 Mbps / 2h"}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Live Traffic & Revenue Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  {isAr ? "+18.4% مبيعات اليوم" : "+18.4% Sales Today"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-emerald-500 transition-colors">
                {items[2]?.title || "Traffic & Revenue Analytics"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[2]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Bar Chart Sparkline */}
            <div className="bg-bg-alt/80 border border-border rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted text-[10px]">{isAr ? "إجمالي مبيعات الكروت اليومية" : "Daily Voucher Revenue"}</span>
                <span className="text-emerald-500 font-extrabold text-xs">$1,420</span>
              </div>
              <div className="h-10 flex items-end justify-between gap-1.5 pt-2">
                {[35, 50, 45, 75, 60, 90, 85, 100].map((height, i) => (
                  <div key={i} className="flex-1 bg-surface rounded-t overflow-hidden h-full flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t transition-all duration-500 group-hover:brightness-125"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Multi-Router Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  {isAr ? "3 أجهزة متصلة" : "3 Active Devices"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-indigo-500 transition-colors">
                {items[3]?.title || "Multi-Router Cloud"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[3]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Multi Router List */}
            <div className="bg-bg-alt/80 border border-border rounded-xl p-2.5 space-y-1.5">
              {[
                { name: isAr ? "المكتب الرئيسي (RB3011)" : "Main Office (RB3011)", ping: "8ms" },
                { name: isAr ? "كافيه الهوتسبوت (hAP ax³)" : "Cafe Hotspot (hAP ax³)", ping: "14ms" },
                { name: isAr ? "برج الترحيل (CCR1016)" : "Tower Relay (CCR1016)", ping: "11ms" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between bg-surface px-3 py-1.5 rounded-lg border border-border text-[11px]">
                  <span className="text-text-primary font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {r.name}
                  </span>
                  <span className="text-text-muted font-mono text-[10px]">{r.ping}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Secure WireGuard Connection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  {isAr ? "نفق AES-256" : "AES-256 Tunnel"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-blue-500 transition-colors">
                {items[5]?.title || "Secure WireGuard Connection"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[5]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Encrypted Tunnel */}
            <div className="bg-bg-alt/80 border border-border rounded-xl p-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 font-mono text-text-primary font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                10.8.0.4
              </div>
              <div className="flex items-center gap-1 text-text-muted">
                <span className="h-0.5 w-6 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span className="h-0.5 w-6 bg-gradient-to-r from-indigo-500 to-blue-500 animate-pulse" />
              </div>
              <div className="font-mono text-blue-500 font-bold">{isAr ? "خادم مِكمان" : "Mikman Cloud"}</div>
            </div>
          </motion.div>

          {/* Card 6: Configuration Manager */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="group relative bg-surface-card backdrop-blur-2xl border border-border rounded-2xl p-6 hover:border-blue-500/40 hover:bg-surface-hover transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  {isAr ? "تحكم كامل" : "Full Control"}
                </span>
              </div>
              <h3 className="text-text-primary font-extrabold text-xl mb-2 group-hover:text-purple-500 transition-colors">
                {items[1]?.title || "Configuration Manager"}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {items[1]?.description}
              </p>
            </div>

            {/* Micro Graphic Widget: Interactive Settings Toggles */}
            <div className="bg-bg-alt/80 border border-border rounded-xl p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[11px] bg-surface px-3 py-1.5 rounded-lg border border-border">
                <span className="text-text-primary font-semibold">{isAr ? "تسريع الشبكة FastTrack" : "FastTrack Mode"}</span>
                <span className="w-7 h-4 bg-emerald-500 rounded-full flex items-center justify-end px-0.5">
                  <span className="w-3 h-3 bg-white rounded-full" />
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] bg-surface px-3 py-1.5 rounded-lg border border-border">
                <span className="text-text-primary font-semibold">{isAr ? "حماية الجدار الناري" : "Firewall Protection"}</span>
                <span className="text-[10px] font-bold text-emerald-500">{isAr ? "مُفعّل" : "Active"}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}